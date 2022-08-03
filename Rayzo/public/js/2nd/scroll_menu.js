$(function () {
    let $menu = $('#header h1 a');
    let $contents = $('#page-wrapper > section');

    // 윈도우에 스크롤이 생기면
    // $contents 마다 할일
    // 각가의 화면 상단에서의 거리 sectionDistance보다
    // 스크롤양이 많은지 적은지 
    // 많다는 조건이 참이면
    // 각 요소마다 순번 변수명 idx 저장
    // 그 순번에 해당하는 메뉴에만 클래스명 on 추가 

    $(window).scroll(function () {
        $contents.each(function () {
            if ($(this).position().top <= $(window).scrollTop() + $('#header').height() + ($('#header').height() / 10)) {
                let idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx - 1).addClass('on');
            }
        });
    });
});