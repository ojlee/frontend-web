  var $body = $(document.body); //자주 사용하기에 캐시되게 변수에 넣어준다
  var $top = '';

  $top = $('<div>') //div 를 만들고
          .addClass('top') //top className을 주고
          .hide() //처음에는 숨겨둔다
          .click(function () {  // 클릭이 이벤트 할당
            $body.animate({scrollTop: 0}); //animation효과로 scollTop=0으로 이동
          })
          .appendTo($body); // body에 top을 넣는다

  //윈도우의 스크롤위치로 위로가기 버튼을 보여줘야기에 핸들러 작성
  $(window).scroll(function () {

    var y = $(this).scrollTop();

    if (y >= 100) {
      $top.fadeIn();
    }
    else {
      $top.fadeOut();
    }
  });
