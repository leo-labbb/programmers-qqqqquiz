// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]

function solution(n, m) {
    let answer = [], small = n, big = m;
    if (n > m) {
        small = m;
        big = n;
    }
    let gcd = 1, lcm = 1; // 최대공약수, 최소공배수
    // 최대공약수 구하기
    for (let i = 1; i <= small; i++) {
        if (small % i === 0 && big % i === 0) gcd = i;
    }
    // 최소공배수 구하기
    for (let j = small * big; j >= big; j--) {
        if (j % small === 0 && j % big === 0) lcm = j;
    }
    answer.push(gcd);
    answer.push(lcm)
    return answer;
}