$(function() {
    $(".main-menu > li").hover(
        // 마우스가 올라갔을 때
        function() {
            $(this).children("ul").css("display", "block");
        },
        // 마우스가 빠져나갔을 때
        function() {
            $(this).children("ul").css("display", "none");
        }
    );
    $(".main-menu span").focusin(
        function() {
            $(this).siblings("ul").css("display", "block");
        }
    );
    $(".main-menu ul li:last-child a").focusout(
        function() {
            $(this).parent().parent().css("display", "none");
        }
    );
});
// 탭메뉴 제어를 위한 자바스크립트
$(function() {
    $(".board h2").focus(function() {
        $(this).parent().addClass("act").siblings().removeClass("act");
    });
});
//  관련사이트 키보드 포커스 시 클래스 추가 및 제거
$(".related-list a").focusin(function() {
    $(this).parents(".related-list").addClass("list-act");
});
$(".related-list a").focusout(function() {
    $(this).parents(".related-list").removeClass("list-act");
});
// 서브메뉴 제어를 위한 스크립트
// $(function(){
//   $(".main-menu > li").hover(
//     function(){
//       $(this).find("ul").css("display", "blcok")
//     },
//     function(){
//       $(this).find("ul".css("display", "none")
//     }
// //   );
// $(".main-menu span").focusin(
//   function(){
//     $(this).siblings("ul").css("display", "block");
//   }
// // );
// $(".main-menu ul li:last child a").focusout(
//   function(){
//     $(this).parent().parent().css("display", "none");
//   }
// );
// });