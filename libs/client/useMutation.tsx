import { useState } from "react";

interface UseMutationState {
  IsLoading: boolean;
  data?: object;
  error?: object;
}

type UseMutationResult = [(data?: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
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
