const urls = {
  // Auth urls
  LOGIN_USER: "/customerprofile/sign-in-user",

  ADD_WORKFLOW: "/workflows/add",
  WORKFLOWS: "/workflows",
  SAVE_WORKFLOW_ACTIVITIES: "/workflows/save-workflow-activities",
  INVOKE_WORKFLOW: "/workflows/invoke",

  GET_FORMS: "/forms/get-all",
  GET_FORM: "/forms/get",

  GET_ALL_GROUPS: "/organization/get-all-groups",
  GET_GROUP_MEMBERS: "/organization/get-group-members",
  GET_ROLES: "/auth/get-organization-roles",
  GET_ALL_POSITIONS: "/organization/get-personnel-positions",
  GET_ALL_PERSONNELS: "/organization/get-all-personnel",
  GET_LIMIT_BY_POSITION: "/organization/get-postion-approval-limit",

  REQUEST_CANCEL: "/request/cancel",
  REQUEST_NEW: "/request/new",
  REQUEST_CONTINUE: "request/continue",
  REQUEST_GET_ALL: "/request/get-all",
  REQUEST_STATS: "/request/step-stats",
  REPORT_STATS: "/request/report-stats",
  REQUEST_REPORT: "/request/get-report",
  REQUEST_ACTIVITY: "/request/activity-trail",
  REQUEST_DETAIL: "request/details",
  REQUEST_UPLOAD_DOCUMENT: "request/set-documents",
  REROUTE_REQUEST: "Request/re-route",
  SEND_REMINDER: "/request/send-reminder",
  GET_EDITOR_DETAIL: "/request/editor-details",
  REQUEST_UPDATE_VERDICT: "request/update-approval",
  REQUEST_SENT_TO_ME: "/request/sent-to-me",

  GET_CATEGORIES: "/category/get-all",
  ADD_CATEGORIES: "/category/add",
  DELETE_CATEGORIES: "/category/delete",
  UPDATE_CATEGORY: "/category/edit",

  UPLOAD_FILE: "fileupload/upload-document",
  UPLOAD_DOCUMENT: "/fileupload/upload-document",

  GENERATE_WEBHOOK_URL: "hook/getHookUrl",

  APPS_GET_ALL: "/workflowApps/get-all",
  APP_GET: "/workflowApps/get",
  ADD_APP: "/WorkflowApps/add",
  UPDATE_APP: "/WorkflowApps/update",
  ENABLE_APP: "/WorkflowApps/enable-app",
  DELETE_APP: "/WorkflowApps/delete",

  UPDATE_WORKFLOW_SETTINGS: "/workflows/save-workflow-settings",
  GET_WORKFLOW_EXECUTION_DETAIL: "/workflows/execution-details",
  GET_WORKFLOW_EXECUTIONS: "/workflows/executions",
  // WEBHOOK
  DELETE_WHATSAPP_CREDENTIALS: "/Credentials/whatsapp/delete",
  GET_ALL_WHATSAPP_CREDENTIALS: "/Credentials/whatsapp/getall",
  DELETE_WHATSAPP_HOOK: "/Credentials/whatsapp/hook/delete",
  GET_WHATSAPP_HOOK_EVENTS: "/Credentials/whatsapp/hook/events",
  GET_ALL_WHATSAPP_HOOKS: "/Credentials/whatsapp/hook/getall",
  ADD_WHATSAPP_CREDENTIALS: "/Credentials/whatssapp/add",
  ADD_WHATSAPP_HOOK: "/Credentials/whatssapp/hook/add",
  UPDATE_WHATSAPP_CREDENTIALS: "/Credentials/whatssapp/edit",
  UPDATE_WHATSAPP_HOOKS: "/Credentials/whatssapp/hook/edit",

  POST_WORKFLOW_WHATSAPP_HOOK: "/Hook/{workflowId}/whatsapp",
  GET_WORKFLOW_WHATSAPP_HOOK: "/Hook/{workflowId}/whatsapp",

  GET_HOOK_URL: "/Hook/gethookurl",
  POST_WORK_HOOKS: "/Hook/works",
  POST_WORK_HOOKS2: "/Hook/works2",

  GET_USERS: "user/get-all",
  GET_USER: "user/get-user",



  SETTINGS: "/settings",
  ADD_SETTINGS: "/settings/add",
  UPDATE_SETTINGS: "/settings/edit",
  GET_SETTINGS: "/settings/get-all",

};
export default urls;
