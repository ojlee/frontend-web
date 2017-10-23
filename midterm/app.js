var pagesize = 10;
var page = 1;
var tap = ['trending', 'issue', 'enter'];


var currentTap = tap[0];

var url = 'http://1boon.kakao.com/ch/'+currentTap+'.json?pagesize='+pagesize+'&page='+page+'&callback=done'

var list = document.getElementById('list');
var str = '';

getJSON(url, done);

var liTaps = document.querySelectorAll('.nav-tabs > li');

function transTap(event) {
  console.log('transfromTap');
  page = 1;
  console.log(event.currentTarget);
  currentTap = tap[1];
  url = 'http://1boon.kakao.com/ch/'+currentTap+'.json?pagesize='+pagesize+'&page='+page+'&callback=done'
  console.log(url);
  str = '';
  getJSON(url, done);
}

for(var i=0; i<3; i++){
  liTaps[i].addEventListener('click', transTap);
}


function done(result){
  console.log(result);
  for(var i =0; i<result.data.length; i++){
    str += '<a href = "http://1boon.kakao.com/' + result.data[i].path + '">'
    str += '<h2>' + result.data[i].title + '</h2>'
    str += '<img src=' + result.data[i].coverImage + ' width="100" >'
    str += '<h3> 조회수 : ' + result.data[i].totalView + '</h3>'
    str += '</a>'
  }

  list.innerHTML = str;
}
