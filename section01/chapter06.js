// 1. 묵시적 형 변환(자바 스크립트가 알아서 형 변환)

let num = 10;
let str = "20";

const result = num + str; // 숫자형 -> 문자형

// 2. 명시적 형 변환
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // parseInt 숫자로만 이루어지지 않아도 형변환 가능

// 숫자 -> 문자열
let num1 = 20;
let numTostr1 = String(num1);

