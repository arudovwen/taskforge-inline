export interface LocationUtils {
  pathname: string;
  search: string;
  params: Record<string, string | undefined>;
  navigate: (url: string, replace?: boolean) => void;
}

export const useLocationUtils = (): LocationUtils => {
  const getParams = (): Record<string, string | undefined> => {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const params: Record<string, string> = {};

    // Example: /new-application/:action/:formId
    if (pathParts.length >= 2) {
      params.action = pathParts[1];
    }
    if (pathParts.length >= 3) {
      params.formId = pathParts[2];
    }

    return params;
  };

  const navigate = (url: string, replace = false) => {
    if (replace) {
      window.history.replaceState({}, "", url);
    } else {
      window.history.pushState({}, "", url);
    }

    // Dispatch an event to notify components
    window.dispatchEvent(new Event("popstate"));
  };

  return {
    pathname: window.location.pathname,
    search: window.location.search,
    params: getParams(),
    navigate,
  };
};
