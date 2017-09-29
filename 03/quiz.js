

var str = '';

var wrap = document.getElementById('wrap');
console.log(wrap);


for (var i=0; i<4; i++) {
    if(i == 0 || i == 2){
      str += '<div class="white"></div>'
      str += '<div class="black"></div>'
      str += '<div class="white"></div>'
      str += '<div class="black"></div>'

    }
    else{
      str += '<div class="black"></div>'
      str += '<div class="white"></div>'
      str += '<div class="black"></div>'
      str += '<div class="white"></div>'

  }


}
  wrap.innerHTML = str;

var body = document.getElementsByName('body');
var divs = document.querySelectorAll('#wrap div');
var b_square = document.getElementsByClassName('black');
var w_square = document.getElementsByClassName('white');
// console.log(divs);



  function changeBg(event){
    console.log('changeBg');
    event.currentTarget.style.backgroundColor='red';
  }



for(var i=0; i<divs.length; i++){

  divs[i].addEventListener('click', changeBg);


}
