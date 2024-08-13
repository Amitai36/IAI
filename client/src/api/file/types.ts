export interface File {
    _id: string,
    user_id: string,
    version: string,
    file: {
        configurationManager: {
            url: string,
            user_name: string,
            password: string
        },
        branchSelection: {},
        build: {
            versionNumber: string,
            command: string,
            outputDirectory: string
        },
        copyToTarget: {
            targetDirectory: string
        },
        vdd: {
            versionNumber: string,
            releaseDate: Date,
            recentFixes: string[]
        }
    }
}