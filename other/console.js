console.log = (function(orgin){
  return function(value) {
    orgin.call(console, new Date() + ':' + value)
  }
})(console.log)