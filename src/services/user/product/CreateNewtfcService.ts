import prismaClient from "../../../prisma";

interface TfcRequest{
    name: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateNewtfcService{
    async execute({name, description, banner, category_id}: TfcRequest){

        const product = await prismaClient.product.create({
            data:{
                name: name,
                description: description,
                banner: banner,
                category_id: category_id,
            }
        })

        return product;

    }
}

export{ CreateNewtfcService }