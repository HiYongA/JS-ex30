// 아래 함수는 배열을 입력받아서 배열 요소들 중 truthy한 요소들만 필터링하여 반환합니다.
// Truthy 란 boolean type을 기대하는 문맥에서 true 로 평가되는 값을 의미합니다.
// for문과 if문을 이용하여 작성해 보세요.

function getTruthyArray(arr) {
  const truthyArr = []; // 초기값 배열
  for (let i = 0; i < arr.length; i++) {
    // arr[0] == truthy -> arr[1] == falsy -> arr[2] == falsy -> arr[3] == truthy -> arr[4] == truthy -> arr[5] == falsy
    if (arr[i]) {
      truthyArr[truthyArr.length] = arr[i];
      // [][0] = arr[0] => [-1]
      // [][1] = arr[3] => [-1, {}]
      // [][2] = arr[4] => [-1. {}, []]
    }
  }
  return truthyArr; // [-1. {}, []]
}

const result = getTruthyArray([-1, 0, "", {}, [], null, undefined, NaN]);
console.log(result); // 출력 결과: [-1, {}, []]

// ------------------------------ 해답

// 아래 함수는 배열을 입력받아서 배열 요소들 중 truthy한 요소들만 필터링하여 반환합니다.
// Truthy 란 boolean type을 기대하는 문맥에서 true 로 평가되는 값을 의미합니다.
// for문과 if문을 이용하여 작성해 보세요.

// function getTruthyArray(arr) {
// 	const truthyArr = [];
// 	for (const el of arr) {
// 		if (el) truthyArr.push(el);
// 	}
// 	return truthyArr;
// }

// const result = getTruthyArray( [ -1, 0, "", {}, [], null, undefined, NaN ] );
// console.log(result); // [-1, {}, []]
