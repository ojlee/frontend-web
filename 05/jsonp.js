var getJSON = (function(){
var unique = 0;
return function(url, callback, context) {
  // INIT
  var name = "_jsonp_" + unique++;
  if (url.match(/\?/)) url += "&callback="+name;
  else url += "?callback="+name;

  // Create script
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  // Setup handler
  window[name] = function(data){
    callback.call((context || window), data);
    document.getElementsByTagName('head')[0].removeChild(script);
    script = null;
    delete window[name];
  };

  // Load JSON
  document.getElementsByTagName('head')[0].appendChild(script);
};
})();

function done(data){
  console.log('done' , data);
}

var btn = document.getElementById('btn');

getJSON('http://1boon.kakao.com/issue.json?callback=done', done);
// btn.addEventListener('click', load);
//
// function load(event){
//   var head = document.getElementsByTagName("head")[0];
// // script.type = 'text/javascript';
// var script = document.createElement('script');
// script.src = 'http://1boon.kakao.com/issue.json?callback=done'
// head.appendChild(script);
// }
