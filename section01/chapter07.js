// 1. 대입 연산자
let var1 = 1;

//2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;

// 4. 증감 연산자
let num8 = 10;
//console.log(--num8);  // 전위 연산자
//console.log(num8--);  // 후위 연산자
//console.log(num8);

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자(동등, 비동등)
let comp1 = 1 === 2;    // 📌 == 으로 비교하게 되면 둘의 자료형까지 같은지는 비교 안됨!
let comp2 = 1 !== 2;
console.log(comp1, comp2);