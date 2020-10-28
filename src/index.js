import VMoney from './directive'
import options from './options'

export {
  VMoney,
  options
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
