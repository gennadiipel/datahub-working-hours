import regeneratorRuntime from "regenerator-runtime";

import jQuery from 'jquery';
import DatahubWidget from "./DatahubWidget";
import OpeningHoursWidget from "./widgets/OpeningHoursWidget";


const init = function(settings = {}) {

    jQuery(() => {
        new DatahubWidget({})
    })

    
}


export { init };