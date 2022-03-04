import $ from 'jquery'
import LanguageService from '../classes/LanguageService';
import { createElement } from '../tools/create-element';
import ProductService from '../classes/ProductService';

class OpeningHoursWidget {

    settings
    languageService

    constructor(settings) {
        this.settings = settings

        this.languageService = new LanguageService(settings.language)

        this.init()
    }

    /**
     * Inits datahub opening hours widget
     * @param {widgetClass: string} settings 
     */
    async init() {
        this.getAllWidgetContainer()
    }

    getAllWidgetContainer() {
        $('[data-dh-opening-hours]').each(async (_, element) => {
            const productId = $(element).data('dh-product-id')
            if (!productId) throw new Error('No product ID defined for the Datahub widget')

            $(element).addClass(this.settings.openingHoursWidgetClass + ' loading')

            const productService = new ProductService(productId)

            const product = (await productService.getData()).data.product[0]
            const layout = this.generateLayout(product)


            document.getElementById('test').replaceWith(layout)
        })

    }


    generateLayout(product) {

        const listItems = product.openingHours.map(day => {
            return (
                <p>
                    <span>
                        {this.languageService.r(day.weekday)}
                    </span>
                    {this.getProperTime(day.openFrom)} - {this.getProperTime(day.openTo)}
                </p>
            )
        })

        const content = (
            <div className="dh-oh__container">
                <div className="dh-oh__header">
                    <h1 className="widget-title">{this.languageService.r('openingHours')}</h1>
                </div>
                <div className="dh-oh__content">
                    {listItems}
                </div>
            </div>
        )

        return content
    }


    getProperTime(time) {
        return time.substring(0, 5)
    }
}


export default OpeningHoursWidget