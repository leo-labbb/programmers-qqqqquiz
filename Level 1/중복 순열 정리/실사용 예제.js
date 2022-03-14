// 3개 중 2개를 뽑아서 조합을 for 문으로 만들기
function forloop() {
  let result = [];
  let lookup = [1,2,3];

  for (let i = 0; i < lookup.length; i++) {
    for (let j = i + 1; j < lookup.length; j++) {
      result.push([lookup[i], lookup[j]])
    }
  }
  return result;
}

// 3개 중 2개를 뽑아서 조합을 재귀로 만들기
  let result = [];
  let lookup = [1,2,3];
  function recur(lookup = [ 1,2,3 ]) {
    if (lookup.length === 2) return result.push(lookup);
    for (let i = 0; i < lookup.length; i++) {
      let clone = [...lookup];
      clone.splice(i, 1);
      recur(clone)
    }
  }
  recur()
  console.log(result)

// 반복문으로 순열 만들기
// 3개 중 3개를 뽑아서 순열로 만들기 
function forloop() {
  let result = [];
  let lookup = [1,2,3];
  for (let i = 0; i < lookup.length; i++) {
    for (let j = 0; j < lookup.length; j++) {
      for (let k = 0; k < lookup.length; k++) {
        if (i === j || k === j || i === k) continue;
        result.push([lookup[i], lookup[j], lookup[k]])
      }
    }
  }
  return result;
}

// 재귀로 순열 만들기
// 3개 중 3개를 뽑아서 순열로 만들기
  let result = [];
  let lookup = [1,2,3];
  function recur(lookup = [1,2,3], num = lookup.length, bucket = []) {
    if (num === 0) result.push(bucket);
    for (let i = 0; i < lookup.length; i++) {
      let clone = [...lookup];
      recur(clone, num - 1, bucket.concat[clone.splice(i,1)])
    }
  }
  recur()
  console.log(result)


// 중복 순열 반복문으로 만들기
// 3개 중 3개를 뽑아서 중복 순열 만들기
function forloop() {
  let result = [];
  let lookup = [1,2,3];
  for (let i = 0; i < lookup.length; i++) {
    for (let j = 0; j < lookup.length; j++) {
      for (let k = 0; k < lookup.length; k++) {
        result.push([lookup[i], lookup[j], lookup[k]])
      }
    }
  }
  return result
}

// 중복 순열 재귀로 만들기
// 3개 중 3개를 뽑아서 중복 순열 만들기
  let result = [];
  let lookup = [1,2,3];
  function recur(lookup = [1,2,3], bucket= []) {
    if (bucket.length === 3) return result.push(bucket);
    for (let i = 0; i < lookup.length; i++) {
      recur(lookup, bucket.concat(lookup[i]))
    }
  }
  recur()
