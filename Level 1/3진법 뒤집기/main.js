// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.
// 입출력 예
// n	result
// 45	7
// 125	229

function solution(n) {
    var answer = 0;
    // num.toString(2); // 1010, 10진법을 2진법으로 변환
    // Number.parseInt(num, 2); // 10, 2진법을 10진법으로 변환
    answer = n.toString(3); // 1200
    String(answer).split('') // ['1','2','0','0']
    let result = ''
    for (let i = answer.length-1; i >= 0; i--) {
        result += answer[i] 
    }
    answer = Number.parseInt(result, 3)
    return answer;
}