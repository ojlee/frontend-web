document.getElementById('fullBtn').addEventListener('click', fullscreen);
if ("geolocation" in navigator) {
  console.log("enable geo");
} else {
  /* 지오로케이션 사용 불가능 */
  console.log("unable geo");
}



function fullscreen(){
  if (screenfull.enabled) {
  	screenfull.request(document.querySelector('img'));
  }
}

var watchID
document.getElementById('geoBtn').addEventListener('click', geolocation);
function geolocation(){
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    document.getElementById('crtUrl').innerHtml ='http://map.daum.net/link/map/'+ position.coords.latitude + ',' + position.coords.longitude;

  });

}
