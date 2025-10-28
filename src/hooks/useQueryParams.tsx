import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParam = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get query parameter
  const getQueryParam = (paramName: string) => {
    const params = new URLSearchParams(location.search);
    return params.get(paramName);
  };

  // Set query parameter
  const setQueryParam = (paramName: string, value: string) => {
    const params = new URLSearchParams(location.search);
    params.set(paramName, value);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return { getQueryParam, setQueryParam };
};
