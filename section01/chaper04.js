console.log("chapter04");

// 1. 변수
let age = 27; // 변수 선언, 초기화
console.log(age);

age = 30;
console.log(age); // 중복 선언 불가!!!


// 2. 상수
const birth =  "1997.01.07"; // 상수는 초기화 한 이후 값을 바꿀 수 없음.(초기화 필수)


// 3. 변수 명명규칙(네이밍 규칙)
// 3-1) $, _ 제외한 기호는 사용 X
let $_name

// 3-2) 숫자로 시작할 수 없다.
let name1;
// let 2name; -> error

// 3-3) 예약어를 사용할 수 없음.


// 4. 변수 명명 가이드 -> 알아보기 쉬운 변수명 사용!!
let a = 1; // 안 좋은 변수 명
let b = 1;
let c = a - b;

let salesCount = 1; // 좋은 변수 명
