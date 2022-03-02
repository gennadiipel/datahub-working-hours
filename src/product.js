import SETTINGS from "./settings"

class Product {

    productId

    constructor(productId) {
        this.productId = productId
    }


    async getData() {
        return await fetch(`https://api-datahub.visitfinland.com/graphql/v1/graphql`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SETTINGS.authToken}`
            },
            body: `
            query AllProducts {
                product ( where: { id: { _eq: "3ab34173-2554-4cb2-9c1f-916f2f0d6349" } } ) {
                    id
                    openingHours {
                        open
                        openFrom
                        openTo
                        weekday
                    }
                }
            }
            `
        })
    }

}


export default Product