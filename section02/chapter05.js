// 객체 타입 주의사항 1. 의도치 않게 값이 수정될 수 있음.
let o1 = { name: "kim sangrok" };
let o2 = o1; // 얕은 복사
// let o2 = {...o1}; // 깊은 복사

o2.name = "김상록";

console.log(o1.name);

// 객체 타입 주의사항 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어짐.
let k1 = { name: "이정환" };
let k2 = k1;
let k3 = { ...k1 };

console.log(k1 === k2); // 얕은 비교 -> 참조값을 기준으로 비교
console.log(k1 === k3);

// JSON.stringify() -> 자바스크립트 내장함수, 객체를 문자열로 변환하여 비교
console.log(JSON.stringify(k1) === JSON.stringify(k3)); // 깊은 비교
// 결과 True

// 객체 타입 주의사항 3. 배열과 함수도 사실 객체이다.
