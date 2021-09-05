//Chỉnh sửa script type bên html thành module mới import được
//  <script type="module" src="./main.js"></script> 

//import logger from "./logger.js"
// sử dụng giá trị export default của logger.js
//import {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from "./constants.js"
//named import


import logger from "./logger/index.js"
//logger từ index.js

import * as constants from './constants.js'
//import theo alias, * là lấy các giá trị export trừ default, tạo thành một objects tên là constants

console.log(constants);

logger('Test message',TYPE_LOG);
logger('Test message',TYPE_WARN);
logger('Test message',TYPE_ERROR);

logger('Test message 2', constants.TYPE_ERROR);
