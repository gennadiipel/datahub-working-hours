import $ from 'jquery'
import Product from './product';
import SETTINGS from './settings';

class DatahubWidget {
    settings

    constructor(settings = null) {
        this.init(settings)
    }

    /**
     * Inits datahub opening hours widget
     * @param {widgetClass: string} settings 
     */
    async init(settings) {
        this.settings = {
            widgetClass: 'dh-opening-hours-widget',
            ...settings
        }

        const token = await this.getAccessToken()

        SETTINGS.authToken = token

        this.getAllWidgetContainer()

    }

    /**
     * Returns Datahub access token
     * @returns accessToken: string
     */
    async getAccessToken() {
        const accessToken = await (await fetch(SETTINGS.authTokenUrl)).json()

        return accessToken['access_token']
    }


    getAllWidgetContainer() {
        $('[data-dh-opening-hours]').each((_, element) => {
            const productId = $(element).data('dh-product-id')
            if (!productId) throw new Error('No product ID defined for the Datahub widget')

            $(element).addClass(this.settings.widgetClass + ' loading')
            
            let product = new Product(productId)
            let productData = product.getData()

            console.log(productData)

        })
    }
}


export default DatahubWidget