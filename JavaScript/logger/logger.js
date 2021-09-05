import {TYPE_LOG} from "../constants.js"
//named import

function logger(log, type = TYPE_LOG){
    console[type](log);
}

export default logger;
//Một modules chỉ có duy nhất 1 phương thức export default.