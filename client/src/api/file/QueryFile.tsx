import { useMutation, useQuery } from "react-query";

import { getBranchSelection, updateFileConfiguration } from "./fetching";

export const useGetUser = () => {
  return useQuery(["user", "file"], () => getBranchSelection())
};
export const useUpdateFileConfiguration = () => {
  return useMutation(["user", "file"], updateFileConfiguration)
};
