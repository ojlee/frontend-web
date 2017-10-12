var className = '';
var str = '';
var isWhite = true;

for(var i=0; i<4; i++){     // 행
  for(var j=0; j<4; j++){   // 열
    if(isWhite){
      className = "white";
      }
    else{
      className = "black";
    }
    str += '<div class="'+ className +'"></div>';
    isWhite = !isWhite;
  }
  isWhite = !isWhite;
}

var divWrap = document.getElementById('wrap');
divWrap.innerHTML = str;

//==============클릭시 색변화================

var divs = document.querySelectorAll('#wrap div'); // css 상의 선택자

var tmp = null;


function clicker(event) {
console.log('selec');
  var current = event.currentTarget;

  if(tmp){
    tmp.className =  tmp.className.replace(' target', '');
  }

  current.className += ' target'
  tmp = current;
}

for(var i=0; i<16; i++){
  divs[i].addEventListener('click', clicker);
}

//
