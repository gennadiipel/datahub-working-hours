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

            const elementObject = $(element).get(0)

            if (!productId) throw new Error('No product ID defined for the Datahub widget')

            $(element).addClass(this.settings.openingHoursWidgetClass + ' loading')

            elementObject.append(this.generateLayout())

            const productService = new ProductService(productId)

            const product = (await productService.getData()).data.product[0]
            const layout = this.generateLayout(product)

            $(element).removeClass('loading')

            $(element).html('')
            elementObject.append(layout)
        })

    }


    generateLayout(product = null) {
        let listItems
        if (product) {
            listItems = product.openingHours.map(day => {
                if (day.open) {
                    return (
                        <p>
                            <span>
                                {this.languageService.r(day.weekday)}
                            </span>
                            {this.getProperTime(day.openFrom) || ''}{(this.getProperTime(day.openTo)) ? '- ' + this.getProperTime(day.openTo) : ''}
                        </p>
                    )
                } else {
                    return (
                        <p>
                            <span className="dh-oh__day-closed">
                                {this.languageService.r('closed')}
                            </span>
                        </p>
                    )
                }
                
            })
        } else {
            listItems = (<p>{ this.languageService.r('loading') }</p>)
        }
        

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
        return (time) ? time.substring(0, 5) : null
    }
}


export default OpeningHoursWidget