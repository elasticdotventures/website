/*
Mixin/Plugin example
Vue.$log.info

https://www.npmjs.com/package/vuejs-logger

https://stackoverflow.com/questions/45547089/how-to-bind-console-log-to-l-in-vue-js

*/

import Vue from 'vue'
// import VueLogger from 'vuejs-logger';

const isProduction = process.env.NODE_ENV === 'production';

const VueLoggerOptions = {
    isEnabled: true,
    logLevel : isProduction ? 'error' : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
};

// Vue.use(VueLogger, VueLoggerOptions);

