
import AppButton from "../components/AppButton";
import FormSuccessSvg from "./form-success";

export default function ApplicationSuccess() {
  function closeWindow() {
    window.close();
  }
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="form-success rounded-xl bg-white border h-max border-[#D5D9EB] w-full pt-5 pb-10 px-10 flex justify-center items-center flex-col max-w-[600px] mx-auto">
        <span className="block mb-5">
          <FormSuccessSvg />
        </span>
        <span className="mb-1 text-2xl font-semibold">
          Submission Successful
        </span>
        <span className="text-lg text-[#535862]">
          The form has been submitted and is being processed
        </span>

        <div className="max-w-[250px] mt-8 w-full">
          {/* <Link to={url}> */}
          <AppButton
            onClick={closeWindow}
            text="Done"
            btnClass="w-full bg-primary text-white"
          />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
