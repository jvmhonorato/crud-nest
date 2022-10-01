
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "./dto/product";
import { ProductInput } from "./dto/product.input";
import { ProductService } from "./product.service";



@Resolver(_of => Product)
export class ProductResolver {
    constructor(private readonly productService: ProductService){}
    @Query(_returns => [Product], {name: 'getAllProducts'})
    async getAllProducts(): Promise<Product[]>{
        const products = await this.productService.findAll()
        const productsToReturn = products.map(product => {
            const productToReturn = new Product()
            productToReturn.id = product.id
            productToReturn.product = product.product
            productToReturn.price = product.price
            return productToReturn
        })
        return productsToReturn
    }
    @Mutation(returns => Product, {name: 'createProduct'} )
    async create(@Args('input') input: ProductInput): Promise<Product> {
        return this.productService.create(input)
    }
}