import VMoney from './directive'
import options from './options'
const VERSION = proccess.env.VERSION

export {
  Money,
  VMoney,
  options,
  VERSION
}

export default {
   install (app, globalOptions) {
    if (globalOptions) {
      Object.keys(globalOptions).map(function(key){
        options[key] = globalOptions[key]
      })
    }
    app.directive('money', VMoney)
  }
}
