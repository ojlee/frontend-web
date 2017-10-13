var btn = document.getElementById('btn');

btn.addEventListener('click', load);

function ajax(url, callback, data, x) {
  try {
    x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0'); //ie를 위한 액티브엑스 포함
    x.open(data ? 'POST' : 'GET', url, 1);
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data)
  } catch (e) {
    window.console && console.log(e);
  }
};

function done(responseText) {
  console.log('done', responseText);
}

function load(event){
  console.log('load');

  ajax('dummy.json', done);

  // var request = new XMLHttpRequest();
  //
  // request.open('GET','dummy.json', true);
  // console.log(request);
  //
  // request.onreadystatechange = function(){
  //   // console.log(request.readyState);
  //
  // if(request.readyState === 4){
  //   if(request.status === 200){ //우리 코드가 성공일때 처리해줌
  //     console.log(request.responseText);
  //   }
  // }
}


// request.send();
// console.log('send');
