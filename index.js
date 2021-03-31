import VMoney from './src/directive'
import options from './src/options'

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
