import regeneratorRuntime from "regenerator-runtime";

import DatahubWidget from './datahub-widget';
import Product from './product';

import jQuery from 'jquery';


const init = function(settings) {

    jQuery(() => {
        let dhWidget = new DatahubWidget(settings)
        console.log(dhWidget.settings)
    })

    
}


export { init };