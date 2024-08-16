import { useMutation, useQuery, useQueryClient } from "react-query";

import { getJsonFile, updateFileConfiguration } from "./fetching";


export const useGetJsonFile = () => {
  return useQuery(["file"], getJsonFile)
};

export const useUpdateFileConfiguration = () => {
  const queryClient = useQueryClient();
  return useMutation(["file"], updateFileConfiguration, {
    onSuccess: () => {
      queryClient.invalidateQueries(["file"]);
    }
  })
};
