import { useState } from "react";

interface UseMutationState<T> {
  IsLoading: boolean;
  data?: T;
  error?: object;
}

type UseMutationResult<T> = [(data?: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [IsLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutation(data: any) {
    setIsLoading(true);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((json) => setData(json))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }
  return [mutation, { IsLoading, data, error }];
}
