import { create } from "zustand";

import { File } from "../api/file/types";

interface FileCunfiguretionProps {
    file: File,
    setFile: (data: File) => void
}

export const useFileCunfiguretion = create<FileCunfiguretionProps>((set) => ({
    file: {
        _id: "",
        user_id: "",
        version: "",
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
        }
    },
    setFile: (data) => {
        set(() => ({
            file: data,
        }));
    },
}));
