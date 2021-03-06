// sample
// 배열에서 임의의 요소를 반환합니다.
//
// Math.random()을 사용하여 난수를 생성하고 길이를 곱한 다음 Math.floor()를 사용하여 가장 가까운 정수로 반올림합니다.
// 이 방법은 문자열에서도 작동합니다.

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

// example
sample([3, 7, 9 , 11 ]); // 9