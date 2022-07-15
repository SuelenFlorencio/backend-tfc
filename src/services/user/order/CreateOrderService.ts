import prismaClient from "../../../prisma";

interface OrderRequest{
    course: number;
    name: string;
}

class CreateOrderService{
    async execute ({ course, name}: OrderRequest ){

            const order = await prismaClient.order.create({
                data:{
                    course: course,
                    name: name
                }
            })


            return order;

    }
}

export { CreateOrderService }