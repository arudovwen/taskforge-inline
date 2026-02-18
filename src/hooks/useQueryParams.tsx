import { useCallback, useSyncExternalStore } from "react";

export const useQueryParam = () => {
  const subscribe = useCallback((callback: () => void) => {
    window.addEventListener("popstate", callback);
    return () => window.removeEventListener("popstate", callback);
  }, []);

  const getSnapshot = useCallback(() => window.location.search, []);
  const queryString = useSyncExternalStore(subscribe, getSnapshot);
  const params = new URLSearchParams(queryString);

  const getQueryParam = useCallback(
    (name: string): string | null => params.get(name),
    [params]
  );

  const setQueryParam = useCallback((name: string, value: string) => {
    const url = new URL(window.location.href);

    if (!value) {
      url.searchParams.delete(name); // auto-delete if empty
    } else {
      url.searchParams.set(name, value);
    }

    window.history.replaceState({}, "", url.toString());
    window.dispatchEvent(new Event("popstate"));
  }, []);

  const deleteQueryParam = useCallback((name: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(name);

    window.history.replaceState({}, "", url.toString());
    window.dispatchEvent(new Event("popstate"));
  }, []);

  return { getQueryParam, setQueryParam, deleteQueryParam };
};
