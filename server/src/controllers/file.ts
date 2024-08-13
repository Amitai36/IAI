import { Request, Response } from "express";
import { fileModule } from "../modules/file"

export const getFile = async (req: Request, res: Response) => {
    console.log("hi")
    try {
        const a = await fileModule.find()
        console.log(a)
        res.json(a)
    } catch (error) {
        res.status(500).send({ error }).end();
    }
}
