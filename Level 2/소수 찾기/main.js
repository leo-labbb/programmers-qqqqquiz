// 문제 설명
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
// 입출력 예
// numbers	return
// "17"	3
// "011"	2

function solution(numbers) {
    var answer = [];
    let nums = numbers.split(''); // ['1','7']
    // 순열 만들기
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                const newNum = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                if (!answer.includes(+newNum) && isPrime(+newNum)){
                    answer.push(+newNum) 
                }
                getPermutation(copyArr, newNum); 
            }
        }
    }
    getPermutation(nums, '');
    return answer.length;
}
    // 소수 판별
    function isPrime(num) {
        if(num<=1) return false;
        let sqrt = parseInt(Math.sqrt(num))
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

// others
function solution(numbers) {
    let answer = 0;
    let primeNumbers = [];

    const numbersArr = numbers.split("");

    // 소수 판별 함수
    const determinePrime = (num) => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                count++;
            }
            if (count >= 3) {
                break;
            }
        }
        if (count === 2 && !primeNumbers.includes(num)) {
            primeNumbers.push(num);
        }
    };

    // 숫자 만들기
    const mergeNumbers = (arr, str) => {
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const temp = [...arr];
                temp.splice(i, 1);
                mergeNumbers(temp, str + arr[i]);
            }
        }

        if (str.length > 0) {
            determinePrime(+str);
        }
    };

    mergeNumbers(numbersArr, "");

    answer = primeNumbers.length;
    return answer;
}