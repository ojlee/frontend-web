// var log = document.getElementById('log'); // ID로 요소를 가져온다
//
//
//
// console.log(log);
//
// log.innerHTML = '안녕'; // JS에서 동적으로 바꿔 줌

// var a = document.querySelectorAll('#log a');
//
// console.log(a.length , a[0], a[1]);

// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";

// document.body.appendChild(div);

// log.innerHTML = log.innerHTML + '<div style="color:red"> hello</div>';
// log.innerHTML += '<div style="color:red"> hello</div>';

// window.onload = function(){
//   alert("load");
// }

// window.addEventListener('load', function(){
//     alert("load");
// });
//
// window.addEventListener('load', function(){
//     alert("load1");
// });

// var log = document.getElementById('log');
// function printLog(event){
//
//   console.log('눌렀어');
// }
// log.addEventListener('click', printLog);

// 클릭시 로그

document.addEventListener("DOMContentLoaded", function(event) {
var divs = document.querySelectorAll('#wrap div');
// console.log(divs);



  function changeBg(event){
    console.log('changeBg');

    event.currentTarget.style.backgroundColor='blue';
  }



for(var i=0; i<divs.length; i++){
  divs[i].addEventListener('click', changeBg);
}

});
























//
