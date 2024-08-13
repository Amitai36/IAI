import axios from "axios";
import { File } from "./types";

export const getBranchSelection = async ({
  userId
}: {
  userId: string
}) => {
  const branches = await axios.post<File>(
    `http://localhost:3000/file/getBranch/${userId}`,
  );
  return branches.data;
};
