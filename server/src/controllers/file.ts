import { Request, Response } from "express";

import { File } from "../types/file"
import { FileModule } from "../modules/file"
import { hashPassword } from "../utils/password";

export const getFile = async (_req: Request, res: Response) => {
    try {
        const getFileJson = await FileModule.find()
        res.json(getFileJson[0])
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}

export const editFile = async (req: Request, res: Response) => {
    try {
        const { file } = req.body as File
        const password = await hashPassword(file.configurationManager.password)
        const resault = await FileModule.findOneAndUpdate({},
            {
                $set: {
                    configurationManager: { ...file.configurationManager, password },
                    build: file.build,
                    copyToTarget: file.copyToTarget,
                    vdd: { ...file.vdd, versionNumber: file.build.versionNumber },
                }
            })
        res.json(resault)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}