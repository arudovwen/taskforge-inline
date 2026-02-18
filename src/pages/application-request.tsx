import { useEffect, useState } from "react";
import { FormViewer } from "@arudovwen/form-builder-react";

import { addFormExternal, getForm } from "../services/formservice.js";
import TaskforgeLogoSvg from "../assets/svgs/taskforge-logo";
import AppButton from "../components/AppButton";
import { useLocationUtils } from "../hooks/useLocationUtils";
import { errorResponse } from "../utils/errorResponse";
import ApplicationSuccess from "./application-success";
import { ExcludedFormTypes, config } from "../utils/constants";
import { stringValue } from "../utils/stringValue";
import { useQueryParam } from "../hooks/useQueryParams";

interface FormInfo {
  name?: string;
  description?: string;
  builderMetaInfo?: string;
  [key: string]: any;
}

export default function NewApplicationRequest() {
  const { params } = useLocationUtils();
  const { getQueryParam, setQueryParam } = useQueryParam();

  const action = params.action;
  const formId = params.formId;

  const workflowId = getQueryParam("workflowId");
  const stage = getQueryParam("stage");
  const name = getQueryParam("name");
  const activityInstanceId = getQueryParam("activityInstanceId");
  const hide_title = getQueryParam("hide_title");
  const is_embed: any = getQueryParam("is_embed");

  const [formLoading, setFormLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formInfo, setFormInfo] = useState<FormInfo | null>(null);
  const [formData, setFormData] = useState<any>(null);

  async function getFormData() {
    if (!formId) return;
    try {
      setFormLoading(true);
      const { data, status } = await getForm({ formId });
      if (status === 200) {
        setFormInfo(data.data);
        setFormData(
          data.data?.builderMetaInfo
            ? JSON.parse(data.data?.builderMetaInfo)
            : {}
        );
      }
    } catch (error: any) {
      errorResponse(error);
    } finally {
      setFormLoading(false);
    }
  }

  useEffect(() => {
    getFormData();
  }, [formId]);

  async function submitFormData(values: any[]) {
    try {
      const filteredValues = values.filter(
        (i) => !ExcludedFormTypes.includes(i.type)
      );
      setSubmitLoading(true);

      const response = await addFormExternal({
        id: workflowId,
        requestName: name,
        formValues: filteredValues.map((i) => ({
          ...i,
          value: stringValue(i.type, i.value),
        })),
        formId,
        activityInstanceId,
      });

      if (response.status === 200) {
        setQueryParam("stage", "submitted");
      }
    } catch (err: any) {
      errorResponse(err, "Failed to submit");
    } finally {
      setSubmitLoading(false);
    }
  }

  const SubmitOptions: Record<string, (v: any[]) => Promise<void>> = {
    submit: submitFormData,
    continue: submitFormData,
    request: submitFormData,
  };

  return (
    <div className={is_embed ? "" : "px-10 py-20"}>
      <div className={is_embed ? "" : "max-w-[650px] w-full mx-auto"}>

        {!hide_title &&
          <div className="px-6 text-center rounded-lg mb-7">
            <div className="px-6 text-center rounded-lg mb-7">
              <h1 className="form_title font-semibold text-[#363F72] mb-2 capitalize">
                {formInfo?.name}
              </h1>
              <p className="form_desc font-medium text-[#363F72]">{formInfo?.description}</p>
            </div> </div>
        }


        {!stage ? (
          <div className="border border-[#D5D9EB] rounded-lg pb-4 bg-white">
            <div className="min-h-[200px] application">
              <FormViewer
                loading={formLoading}
                form_data={formData}
                onSubmit={SubmitOptions[action ?? "submit"]}
                config={config}
                renderType="single"
              >
                <div className="w-full">
                  <div className="flex justify-end gap-x-3">
                    <AppButton
                      text="Submit"
                      btnClass="w-full border border-primary-500 text-base py-[10px] bg-primary text-white"
                      type="submit"
                      isDisabled={submitLoading}
                      isLoading={submitLoading}
                    />
                  </div>
                </div>
              </FormViewer>
            </div>
          </div>
        ) : (
          <ApplicationSuccess is_embed={is_embed} />
        )}

        <div className="mt-[55px] flex justify-center text-[#535862] font-medium">
          <span className="flex items-center text-sm gap-x-2">
            <span>Form created with</span> <TaskforgeLogoSvg />
          </span>
        </div>
      </div>
    </div>
  );
}
