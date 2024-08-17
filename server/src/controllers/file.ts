import { Request, Response } from "express";

import { File } from "../types/file"
import { FileModule } from "../modules/file"
import { hashPassword } from "../utils/password";


//get the file
export const getFile = async (_req: Request, res: Response) => {
    try {
        const getFileJson = await FileModule.find()
        res.json(getFileJson[0]).status(200)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}

//edit the file
export const editFile = async (req: Request, res: Response) => {
    try {
        const { file } = req.body as File
        // set the file only spechific object
        let resault = await FileModule.findOneAndUpdate({},
            {
                $set: {
                    configurationManager: file.configurationManager,
                    build: file.build,
                    copyToTarget: file.copyToTarget,
                    vdd: { ...file.vdd, versionNumber: file.build.versionNumber },
                }
            }, { new: true })
        res.json(resault).status(202)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}