var url = 'http://movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20170801&endDate=20171001&pageSize=10&pageNo='


var info = document.getElementById('info');
var str = '';

getJSON(url, done);
function done(result){
  console.log(result);
  for(var i =0; i<result.data.length; i++){
    console.log(result.data[i].titleKo);

    str += '<h2>' + result.data[i].titleKo + '</h2>'
    str += '<img src=' + result.data[i].photo.fullname + ' width="100" >'
    str += '<h3> 랭킹 : ' + result.data[i].rank.ranking + ' 위 </h3>'
    str += '<h3> 점유율 : ' + result.data[i].rank.marketShare + ' % </h3>'
  }

  info.innerHTML = str;
}
