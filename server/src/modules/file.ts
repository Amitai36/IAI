import { model, Schema } from "mongoose"


//schema for file in mongodb
const fileSchema = new Schema({
    configurationManager: {
        url: String,
        user_name: String,
        password: String
    },
    branchSelection: Object,
    build: {
        versionNumber: String,
        command: String,
        outputDirectory: String
    },
    copyToTarget: {
        targetDirectory: String
    },
    vdd: {
        versionNumber: String,
        releaseDate: Date,
        recentFixes: [String]
    }
}, {})


export const FileModule = model("Configuration_files", fileSchema)