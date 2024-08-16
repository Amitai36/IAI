import axios from "axios";

import { File } from "./types";

export const getJsonFile = async () => {
    const file = await axios.get<File>(
        `http://localhost:3000/file`,
    );
    return file.data;
};

export const updateFileConfiguration = async ({
    file
}: {
    file: File
}) => {
    const newFile = await axios.post<File>(
        `http://localhost:3000/file`, {
        file
    }
    );
    return newFile.data;
};
