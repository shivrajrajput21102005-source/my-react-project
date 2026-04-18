import { useEffect, useState } from "react";
import { api } from "./Api";
type UseFetchProp<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};
const UseFetch = <T = any,>(url: string): UseFetchProp<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    let isMount = true;
    setLoading(true);
    setData(null);
    setError(null);
    const Fetching = async () => {
      try {
        if (!isMount) return;
    
        const response = await api.get(url, { withCredentials: true });
        setData(response.data);
      } catch (err: any) {
        await new Promise((r) => setTimeout(r, 3000));
        if (err.request) {
          setError(err);
        } else if (err.response) {
          setError(err);
        } else {
          setError(err.message);
        }
      } finally {
        if (isMount) {
          setLoading(false);
        }
      }
    };
    Fetching();
    return () => {
      isMount = false;
    };
  }, [url]);

  return { loading, error, data };
};
export default UseFetch;
