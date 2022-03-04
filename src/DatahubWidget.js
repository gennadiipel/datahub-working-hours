import OpeningHoursWidget from './widgets/OpeningHoursWidget';


class DatahubWidget {

    settings

    constructor(settings) {

        this.settings = {
            openingHoursWidgetClass: 'dh-oh-widget',
            language: 'fi',
            ...settings
        }

        this.init()
    }


    init() {
        let openingHours = new OpeningHoursWidget(this.settings)
    }
}


export default DatahubWidget