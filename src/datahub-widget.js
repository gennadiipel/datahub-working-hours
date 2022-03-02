import $ from 'jquery'

class DatahubWidget {
    settings

    constructor(settings = null) {

        this.settings = {
            widgetClass: 'dh-opening-hours-widget',
            ...settings
        }

        this.getAllWidgetContainer();
    }


    getAllWidgetContainer() {
        $('[data-dh-opening-hours]').each((index, element) => {
            const productId = $(element).data('dh-product-id')
            if (!productId) throw new Error('No product ID defined for the Datahub widget')

            $(element).addClass(this.settings.widgetClass)
        })
    }
}


export default DatahubWidget