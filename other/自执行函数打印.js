var name = 'weihui';
(function () {
  if (typeof name === 'undefined') {
    var name = 'bigo';
    console.log('good' + name);
  } else {
    console.log('Hello' + name);
  }
})()