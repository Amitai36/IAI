import { model, Schema } from "mongoose"

const fileSchema = new Schema({
    _id: String,
    user_id: String,
    version: String,
    file: {
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
    }

}, {
    timestamps: true
})


export const fileModule = model("Configuration_files", fileSchema)