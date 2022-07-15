import {Request, Response} from 'express'
import { CreateNewtfcService } from '../../../services/user/product/CreateNewtfcService'


class CreateNewTfcController{
    async handle(req: Request, res: Response){
        const { name, description, category_id } = req.body;

        const createNewTfcService = new CreateNewtfcService();

        if(!req.file){
            throw new Error("Error upload file")
        }else{

            const { originalname, filename: banner } = req.file;


            const tfc = await createNewTfcService.execute({
                name,
                description,
                banner,
                category_id
            });

            return res.json(tfc)
        }

    }
}

export { CreateNewTfcController }
