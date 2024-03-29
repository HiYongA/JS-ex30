// 함수 선언문으로 정의한 foo 함수
function foo() {
  console.log("함수 선언문");
}
foo(); // 출력 결과: '함수 선언문'

// "함수 표현식"을 콘솔로그로 출력하는 foo2 함수를 함수 표현식으로 만들어 보세요.
// function 키워드를 사용해 주세요.
const foo2 = function () {
  console.log("함수 표현식");
};
foo2(); // 출력 결과: '함수 표현식'

// "화살표 함수"를 콘솔로그로 출력하는 foo3 함수를 화살표 함수로 만들어 보세요.
const foo3 = () => console.log("화살표 함수");
foo3(); // 출력 결과: '화살표 함수'

/* 참고로 화살표 함수 역시 변수에 함수가 할당되는 함수 표현식 입니다. */
