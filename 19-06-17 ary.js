// ary
// 추가 인수를 무시하고 최대 n개의 인수를 허용하는 함수를 구합니다.
// 
// Array.slice (0, n) 및 스프레드 연산자 (...)를 사용하여 최대 인수가 n 인 제공된 함수 fn을 호출합니다.

const ary = (fn, n) => (...args) => fn(...args.slice(0, n));

// 예시
const firstTwoMax = ary(Math.max, 2);
console.log([[2, 6, 'a'], [8, 7, 6], [10]].map(x => firstTwoMax(...x)));