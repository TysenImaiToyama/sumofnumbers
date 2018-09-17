const testList = [1, 2, 3, 4];

function sumFor(num) {
  let total = 0;
  for (let number of num) {
    total += number;
  }
  return total;
}

console.log(sumFor(testList));

function sumWhile(num) {
  let total = 0;
  let i = 0;
  while (i < num.length){
    total += num[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testList));

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  } else {
    return num[0] + sumRecursion(num.slice(1, num.length));
  }

}
console.log(sumRecursion(testList));

function sumTheSimpleWay(num) {
  return _.reduce(num, function (memo, num){return memo + num}, 0);
}

console.log(sumTheSimpleWay(testList));