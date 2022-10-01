import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Product {
    @Field()
    id: number

    @Field() 
    product: string

    @Field()
    price: number
   


}