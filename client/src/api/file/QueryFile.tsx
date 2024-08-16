import { useMutation, useQuery, useQueryClient } from "react-query";

import { getJsonFile, updateFileConfiguration } from "./fetching";

//create get req with react-query with key - 'file' 
export const useGetJsonFile = () => {
  return useQuery(["file"], getJsonFile)
};

//create put req with react-query with key - 'file' and when success the get req refetch by the key 
export const useUpdateFileConfiguration = () => {
  const queryClient = useQueryClient();
  return useMutation(["file"], updateFileConfiguration, {
    onSuccess: () => {
      queryClient.invalidateQueries(["file"]);
    }
  })
};
