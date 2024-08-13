import { useQuery } from "react-query";
import { getBranchSelection } from "./fetching";

export const useGetUser = ({
  userId
}: {
  userId: string
}) => {
  return useQuery(["user"], () => getBranchSelection({ userId }))
};
