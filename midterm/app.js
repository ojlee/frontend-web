
var pagesize = 10;
var page = 1;
var tap = ['trending', 'issue', 'enter'];

var currentTap = tap[0]; //현재탭 디폴트 트렌딩

var url = 'http://1boon.kakao.com/ch/'+currentTap+'.json?pagesize='+pagesize+'&page='+page+'&callback=done';

var list = document.getElementById('list');
var str = '';
var lodstr = '<div class="text-center">' +
'<button type="button" id ="moreViewBtn" class="btn btn-default">더보기</button>' +
'</div>';


getJSON(url, done);

var liTaps = document.querySelectorAll('.nav-tabs > li'); //상단탭li
var moreViewBtn = document.getElementById('moreViewBtn'); // 더보기버튼

// 이벤트 리스너 등록
for(var i=0; i<3; i++){
  liTaps[i].addEventListener('click', transTap);
}
  moreViewBtn.addEventListener('click', moreView);


//더보기
function moreView(event) {
  console.log('moreView');
  page += 1;
  url = 'http://1boon.kakao.com/ch/'+currentTap+'.json?pagesize='+pagesize+'&page='+page+'&callback=done'
  getJSON(url, done);
}


var classTmp = liTaps[0];
//상단탭 전환
function transTap(event) {
  console.log('transfromTap');
  page = 1;
  classTmp.className = '';

  console.log(event.currentTarget);
  if (event.currentTarget === liTaps[0]){
    liTaps[0].className = 'active';
    classTmp = liTaps[0];
    currentTap = tap[0];
    console.log("트렌딩");
    url = 'http://1boon.kakao.com/ch/'+currentTap+'.json?pagesize='+pagesize+'&page='+page+'&callback=done'
  }
  else if (event.currentTarget === liTaps[1]){
    liTaps[1].className = 'active';
    classTmp = liTaps[1];
    currentTap = tap[1];
    console.log("이슈");
    url = 'http://1boon.kakao.com/ch/'+currentTap+'.json?pagesize='+pagesize+'&page='+page+'&callback=done'
  }
  else if (event.currentTarget === liTaps[2]){
    liTaps[2].className = 'active';
    classTmp = liTaps[2];
    currentTap = tap[2];
    console.log("엔터");
    url = 'http://1boon.kakao.com/ch/'+currentTap+'.json?pagesize='+pagesize+'&page='+page+'&callback=done'
  }
  else{}

  console.log(url);
  str = '';
  getJSON(url, done);
}

// url 뿌려주기
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
