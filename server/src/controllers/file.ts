import { Request, Response } from "express";
import { FileModule } from "../modules/file"

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
        const { file } = req.body
        const editFileJson = new FileModule({
            file
        })
        await editFileJson.save().then(async () => {
            const getFileJson = await FileModule.find()
            res.json(getFileJson)
        })
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}
export const getBranch = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params
        const getFileSelection = await FileModule.findOne().where(`user_id`).equals(`${user_id}`)
        if (getFileSelection?.file)
            res.json(getFileSelection.file.branchSelection)
        else
            throw 'the branch selection have a problom'
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}