// 1. 변수
let age;    // 변수 선언시 초기화 하지 않아도 됨.

age = 30;

// 2. 상수 : 변수와 달리 한번 저장된 값(초기화된 값)은 바꿀 수 없음  
const birth = "1997.01.07";   // 상수 선언시 초기화가 반드시 필요함!

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $ 와 _ 제외한 기호는 사용할 수 없음.
let $_name;

// 3-2. 숫자로 시작할 수 없음.
let name1;    // 맨 앞을 제외한 위치에는 숫자가 올 수 있음.
let $2name;

// 3-3. 예약어를 사용할 수 없음. ex) let let; 또는 let if;

// 4. 변수 명명 가이드 => 누가 봐도 알아볼 수 있도록 변수명을 지어줘야 함.
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;