import { Request, Response } from "express";

import { FileModule } from "../modules/file"
import { File } from "../types/file"

export const getFile = async (_req: Request, res: Response) => {
    try {
        const getFileJson = await FileModule.find()
        res.json(getFileJson)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}

export const editFile = async (req: Request, res: Response) => {
    try {
        const { file } = req.body as File
        const resault = await FileModule.updateOne({},
            {
                $set: {
                    build: file.build,
                    configurationManager: file.configurationManager,
                    copyToTarget: file.copyToTarget,
                    vdd: { ...file.vdd, versionNumber: file.build.versionNumber },
                }
            })
        console.log(resault)
        res.json(resault)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}
export const getBranch = async (req: Request, res: Response) => {
    try {
        const getFileSelection = await FileModule.findOne()
        if (getFileSelection)
            res.json(getFileSelection.branchSelection)
        else
            throw 'the branch selection have a problom'
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}