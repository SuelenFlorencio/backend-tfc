import { Request, Response } from "express";
import { CreateOrderService } from '../../../services/user/order/CreateOrderService'

class CreateOrderController{
    async handle(req: Request, res: Response){
        const { course, name } = req.body;

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({
            course,
            name,
        });

        return res.json(order);

    }
}

export { CreateOrderController }