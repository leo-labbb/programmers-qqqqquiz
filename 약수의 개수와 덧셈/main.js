// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000
// 입출력 예
// left	right	result
// 13	17	43
// 24	27	52

function solution(left, right) {
    var answer = 0;
    function aliquat (num) { // 약수의 갯수 구하는 함수
        let count = 2;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0 && i !== 1 && i !== num) count++
            continue;
        }
        return count;
    }
    function EvenOrOdd (num) { // 짝수면 true, 홀수면 false 반환하는 함수
        if (num % 2 === 0) return true;
        else if (num % 2 === 1) return false;
    }
    for (let i = left; i <= right; i++) {
        let temp = aliquat(i); // i의 약수의 갯수
        if (i === 1) temp = 1;
        if (EvenOrOdd(temp)) answer += i;
        else answer -= i;
    }
    return answer;
}

// Math.sqrt(num)이 정수면 약수의 갯수가 짝수, 정수가 아니면 약수의 개수가 홀수..ㅎㅎ :)
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}