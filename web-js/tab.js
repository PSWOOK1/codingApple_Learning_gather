var 버튼 = $(".tab-button");
var 내용 = $(".tab-content");

// for (let i = 0; i < $(".tab-button").length; i++) {
//   버튼.eq(i).on("click", function () {
//     탭열기(i);
//   });
// }

$(".list").click(function (e) {
  // if (e.target === document.querySelectorAll(".tab-button")[0]) {
  //   탭열기(0);
  // } else if (e.target === document.querySelectorAll(".tab-button")[1]) {
  //   탭열기(1);
  // } else if (e.target === document.querySelectorAll(".tab-button")[2]) {
  //   탭열기(2);
  // }

  탭열기(e.target.dataset.id);
});

function 탭열기(구멍) {
  버튼.removeClass("orange");
  버튼.eq(구멍).addClass("orange");
  내용.removeClass("show");
  내용.eq(구멍).addClass("show");
}

// for (let i = 0; i < 3; i++) {
//   버튼.eq(i).on("click", function () {
//     버튼.removeClass("orange");
//     버튼.eq(i).addClass("orange");
//     내용.removeClass("show");
//     내용.eq(i).addClass("show");
//   });
// }

// 버튼.eq(1).on("click", function () {
//   버튼.removeClass("orange");
//   버튼.eq(1).addClass("orange");
//   $(".tab-content").removeClass("show");
//   $(".tab-content").eq(1).addClass("show");
// });

// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(2).addClass("orange");
//     내용.removeClass("show");
//     내용.eq(2).addClass("show");
//   });
