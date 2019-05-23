// intsersection
// 두 배열에 있는 요소의 목록을 반환합니다.
//
// b에서 Set을 만든 다음 a에 Array.filter()를 사용하여 b에 포함된 값만 유지

const intsersection = (a, b) => {
    const s = new Set (b);
    return a.filter(x => s.has(x));
};

// example
console.log(intsersection([1, 2, 3], [4, 3, 2]));