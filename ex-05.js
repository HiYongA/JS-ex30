// 문자열을 입력받아도 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문과 typeof 키워드를 이용해야 합니다.

function add(a, b) {
  if (a !== b) {
    result = Number(a) + Number(b);
  }
  return result;
}

const result1 = add(5, "5");
const result2 = add("5", 5);

console.log(typeof result1); // 출력 결과: 10
console.log(typeof result2); // 출력 결과: 10
