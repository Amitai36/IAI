export interface ConfigurationManagerProps {
    url: string,
    user_name: string,
    password: string
}

export interface BuildProps {
    versionNumber: string,
    command: string,
    outputDirectory: string
}

export interface CopyToTargetProps {
    targetDirectory: string
}

export interface VddProps {
    versionNumber: string,
    releaseDate: Date,
    recentFixes: string[]
}

export interface File {
    configurationManager: ConfigurationManagerProps,
    branchSelection: {},
    build: BuildProps,
    copyToTarget: CopyToTargetProps,
    vdd: VddProps
}

