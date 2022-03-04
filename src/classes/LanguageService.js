class LanguageService {

    translation = {
        en: {
            openingHours: 'Opening hours',
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday',
            sunday: 'Sunday',
        },

        fi: {
            openingHours: 'Aukioloajat',
            monday: 'Maanantai',
            tuesday: 'Tiistai',
            wednesday: 'Keskiviikko',
            thursday: 'Torstai',
            friday: 'Perjantai',
            saturday: 'Lauantai',
            sunday: 'Sunnuntai'
        }
    }

    language = 'fi'

    constructor(language) {
        this.language = language
    }

    r(key) {
        return this.translation[this.language][key] || `Value for key ${key} was not found`
    }

}

export default LanguageService;
