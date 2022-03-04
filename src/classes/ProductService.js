import { ENVIRONMENT } from "../environment"

class ProductService {

    productId

    constructor(productId) {
        this.productId = productId
    }


    async getData() {
        return await (await fetch(ENVIRONMENT.apiUrl + '/token.php?product=' + this.productId)).json()
    }

}


export default ProductService