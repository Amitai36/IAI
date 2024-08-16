import { create } from "zustand";

import { File } from "../api/file/types";

interface FileCunfiguretionProps {
    file: File,
    setFile: (data: File) => void
}
//create state manegment for better control on file changes 
export const useFileCunfiguretion = create<FileCunfiguretionProps>((set) => ({
    file: {
        configurationManager: {
            url: "",
            user_name: "",
            password: ""
        },
        branchSelection: {},
        build: {
            versionNumber: "",
            command: "",
            outputDirectory: ""
        },
        copyToTarget: {
            targetDirectory: ""
        },
        vdd: {
            versionNumber: "",
            recentFixes: [""],
            releaseDate: new Date(),
        }
    },
    setFile: (data) => {
        set(() => ({
            file: data,
        }));
    },
}));
