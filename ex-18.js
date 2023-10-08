// 아래와 같은 결과가 출력되도록 함수를 완성해 보세요.
const db = [
  {
    id: 7,
    name: "Jay",
    age: 33,
    phone: "010-1212-5678",
    email: "qwe@gmail.com",
  },
  {
    id: 10,
    name: "James",
    age: 30,
    phone: "010-1234-5678",
    email: "abc@gmail.com",
  },
];

function handleEdit(id, editingObj) {
  // db에서 id에 해당하는 객체를 찾아서 내용을 바꿉니다.
  // Object.assign 대신 spread syntax(...)를 사용해야 합니다.
  // 여기에 코드를 작성하세요.
  const userInfo = db.find((user) => user.id === id);
  if (userInfo) {
    // 객체를 찾았을 경우에만 내용을 변경합니다.
    userInfo.name = editingObj.name;
    userInfo.age = editingObj.age;
  }
}

handleEdit(10, { name: "Paul", age: 35 });

console.log(db);
/*
출력 결과:
[
	{
		"id": 7,
		"name": "Jay",
		"age": 33,
		"phone": "010-1212-5678",
		"email": "qwe@gmail.com"
	},
	{
		"id": 10,
		"name": "Paul",
		"age": 35,
		"phone": "010-1234-5678",
		"email": "abc@gmail.com"
	}
]
*/

// 정답 풀이
// function handleEdit(id, editingObj) {
// 	const idx = db.findIndex(el => el.id === id);
// 	db[idx] = { ...db[idx], ...editingObj }
// }
