// // // // // function 삼육구게임(n) {
// // // // //   if (n % 9 === 0) {
// // // // //     console.log("박수x2");
// // // // //   } else if (n % 3 === 0) {
// // // // //     console.log("박수");
// // // // //   } else {
// // // // //     console.log("통과");
// // // // //   }
// // // // // }

// // // // // 삼육구게임(6);

// // // // function 합격했냐(개론, 민법) {
// // // //   if (개론 < 40 || 민법 < 40) {
// // // //     console.log("과락 불합격");
// // // //   } else if (개론 + 민법 > 120) {
// // // //     console.log("합격");
// // // //   } else if (개론 + 민법 < 120) {
// // // //     console.log("불합격");
// // // //   }
// // // // }

// // // // 합격했냐(70, 70); // 합격
// // // // 합격했냐(30, 100); // 과락 불합격
// // // // 합격했냐(50, 50); // 불합격

// // // // Q3. 이자율 계산하기

// // // // 철수는 은행에 예금을 하러 갔는데 예금 금액에 따라 이율이 달라지는 것을 보고 크게 당황했습니다.

// // // // 첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,

// // // // 첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.

// // // // 그래서 민준이는

// // // // (1) 변수에 예금액을 넣으면

// // // // (2) 2년 후의 총 예금액을 자동으로 콘솔창에 출력해주는 기능을 자바스크립트로 만들려고하는데

// // // // 어떻게 코드를 짜면 될까요?

// // // // var 예금액 = 10000;
// // // // var 미래예금액 = 0;

// // // // if (예금액 < 50000) {
// // // //   미래예금액 = 예금액 * 1.15 * 1.15;
// // // // } else if (예금액 >= 50000) {
// // // //   미래예금액 = 예금액 * 1.2 * 1.2;
// // // // }

// // // // console.log(미래예금액);

// // // // (동작예시)

// // // // var 예금액이라는 변수에 60000을 집어넣으면 86400 이게 콘솔창에 출력되어야 합니다. (이자 20%가 2번 붙음)

// // // // var 예금액이라는 변수에 10000을 집어넣으면 13225 이게 콘솔창에 출력되어야 합니다. (이자 15%가 2번 붙음)

// // // // (힌트)

// // // // 자바스크립트에선 + - / * 연산자로 사칙연산이 가능합니다.

// // // // 커피 리필을 이상하게 해주는 곳이 있습니다. 최대한 마실 수 있는 커피양을 계산해봅시다.

// // // // var first = 360;
// // // // var second = (first / 3) * 2;
// // // // var third = (second / 3) * 2;

// // // // var total = first + second + third;

// // // // console.log(total);

// // // // function 함수(minute, second) {
// // // //   var minuteMs = minute * 60 * 1000;
// // // //   var secondMs = second * 1000;

// // // //   return minuteMs + secondMs;
// // // // }

// // // // console.log(함수(2, 10));

// // // function 함수(pay, firstBuy) {
// // //   var sale = pay * 0.1;
// // //   if (firstBuy === true) {
// // //     sale += 1.5;
// // //   }

// // //   return pay - sale;
// // // }

// // // console.log(함수(10, true));

// // // var 출석부 = ["흥민", "영희", "철수", "재석"];

// // // function 이름찾기(name) {
// // //   if (출석부[0] === name) {
// // //     console.log("있어요");
// // //   } else if (출석부[1] === name) {
// // //     console.log("있어요");
// // //   } else if (출석부[2] === name) {
// // //     console.log("있어요");
// // //   } else if (출석부[3] === name) {
// // //     console.log("있어요");
// // //   } else {
// // //     console.log("없어요");
// // //   }
// // // }

// // // 이름찾기("흥민");
// // // 이름찾기("영희");
// // // 이름찾기("철수");
// // // 이름찾기("재석");
// // // 이름찾기("명수");

// // // var 출석부 = ["흥민", "영희", "철수", "재석"];

// // // function 이름찾기(name) {
// // //   for (var i = 0; i < 4; i++) {
// // //     if (name == 출석부[i]) {
// // //       console.log("있어요");
// // //       return;
// // //     } else {
// // //       console.log("없어요");
// // //       return;
// // //     }
// // //   }
// // // }

// // // //   if (출석부[0] === name) {
// // // //     console.log("있어요");
// // // //   } else if (출석부[1] === name) {
// // // //     console.log("있어요");
// // // //   } else if (출석부[2] === name) {
// // // //     console.log("있어요");
// // // //   } else if (출석부[3] === name) {
// // // //     console.log("있어요");
// // // //   } else {
// // // //     console.log("없어요");
// // // //   }

// // // 이름찾기("흥민");
// // // 이름찾기("영희");
// // // 이름찾기("철수");
// // // 이름찾기("재석");
// // // 이름찾기("명수");

// // // var 구구단 = [2, 3, 4, 5, 6, 7, 8, 9];

// // // for (var i = 1; i < 10; i++) {
// // //   console.log(구구단[1] * i);
// // //   console.log(구구단[2] * i);
// // //   console.log(구구단[3] * i);
// // //   console.log(구구단[4] * i);
// // //   console.log(구구단[5] * i);
// // //   console.log(구구단[6] * i);
// // //   console.log(구구단[7] * i);
// // // }

// // var 구구단 = [2, 3, 4, 5, 6, 7, 8, 9];

// // for (var i = 0; i < 구구단.length; i++) {
// //   // 구구단 배열의 각 요소(단)를 순회
// //   for (var j = 1; j < 10; j++) {
// //     // 1부터 9까지 곱하기
// //     console.log(구구단[i] * j); // 곱셈 결과 출력
// //   }
// //   // 단 사이에 공백을 추가하려면 여기에 console.log()를 추가할 수 있습니다.
// //   // console.log(); // 단 사이에 공백을 넣어 구분
// // }

// // for (let k = 2; k < 10; k++) {
// //   for (let i = 1; i < 10; i++) {
// //     console.log(k * i);
// //   }
// // }

// function 성적비교(지난점수, 이번점수) {
//   var 합산 = 0;

//   for (let i = 0; i < 지난점수.length; i++) {
//     합산 = 합산 + 지난점수[i];
//   }

//   var 평균 = 합산 / 지난점수.length;

//   if (평균 < 이번점수) {
//     console.log("평균보다 " + (이번점수 - 평균) + " 점이 올랐네요");
//   } else if (평균 > 이번점수) {
//     console.log("평균보다 " + (평균 - 이번점수) + " 점이 떨어졌네요 재수추천");
//   }
// }

// 성적비교([10, 20, 30, 40, 50], 40);
// 성적비교([40, 40, 40], 20);
