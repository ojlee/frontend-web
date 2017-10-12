//start...
var inputTxt = '';


function newlist(){
    inputTxt = document.getElementById('text').value;
    console.log(inputTxt);
    //li생성
    var list = document.createElement('li');
    document.getElementById('lists').appendChild(list);
    //li 내부 생성
    listsobj = '<button class="delete">×</button>'
    +'<input type="checkbox" class="toggle-checked">'
    +'<span class="text">'+ inputTxt +'</span>'
    list.innerHTML = listsobj;

    //텍스트박스 초기화
    document.getElementById('text').value='';

    //삭제버튼 리스너 등록
    var deletes = document.querySelectorAll('.delete');
    for(var i=0; i<deletes.length; i++){
      deletes[i].addEventListener('click', droplist);
    }
}

function droplist(event){
  console.log(event.currentTarget +'삭제');
  var parent = event.currentTarget.parentNode;
  console.log(parent);
  parent.parentNode.removeChild(parent);

}
