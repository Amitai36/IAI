import axios from "axios";
import { File } from "./types";

export const getBranchSelection = async () => {
    const branches = await axios.get<File["branchSelection"]>(
        `http://localhost:3000/file/getBranch`,
    );
    console.log(branches.data)
    return branches.data;
};

export const updateFileConfiguration = async ({
    file
}: {
    file: File
}) => {
    const newFile = await axios.post<File["branchSelection"]>(
        `http://localhost:3000/file`, {
        file
    }
    );
    return newFile.data;
};
