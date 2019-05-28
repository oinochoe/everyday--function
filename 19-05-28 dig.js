// dig
// 지정된 키를 기반으로 중첩 JSON 객체 대상 값을 반환합니다.
//
// in 연산자를 사용하여 대상이 obj에 있는지 확인합니다.
// 발견된, obj [target]의 값을 반환하고 그렇지 않으면 
// Object.values(obj) 및 Array.reduce()를 사용하여 첫번째 일치하는 키 / 값 쌍이 발견될 때까지
// 각 중첩 객체에서 dig를 재위적으로 호출합니다.

const dig = (obj, target) => 
    target in obj
        ? obj[target]
        : Object.values(obj).reduce((acc, val) => {
            if (acc !== undefined) return acc;
            if (typeof val === 'object') return dig(val, target);
        }, undefined);

// 예시
const data = {
    level1: {
        level2: {
            level3: 'some data'
        }
    }
};

console.log(dig(data, 'level1'));
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));