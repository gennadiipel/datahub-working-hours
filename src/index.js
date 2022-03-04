import regeneratorRuntime from "regenerator-runtime";

import jQuery from 'jquery';
import DatahubWidget from "./DatahubWidget";

const sass = require("./style.sass");

const init = function(settings = {}) {

    jQuery(() => {
        new DatahubWidget({})
    })

    
}


export { init };