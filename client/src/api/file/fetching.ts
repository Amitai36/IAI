import axios from "axios";

import { File } from "./types";


//just get req from the backend and difine the type will retrun
export const getJsonFile = async () => {
    const file = await axios.get<File>(
        `http://localhost:3000/file`,
    );
    return file.data;
};

//just post put for update from the backend and difine the type will retrun
export const updateFileConfiguration = async ({
    file
}: {
    file: File
}) => {
    const newFile = await axios.put<File>(
        `http://localhost:3000/file`, {
        file
    }
    );
    return newFile.data;
};
