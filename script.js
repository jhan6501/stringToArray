function parse(input) {
  let str = input;
  str = str.replace(/\s/g, '');
  let arr = [];
  for (i = 0; i < str.length; i++) {
    let sub = "";
    let endIndex = i;
    for (j = i; j < str.length; j++) {
      if (str.charAt(j) === ',') {
        endIndex = j;
        break;
      } else {
        sub = sub.concat(str.charAt(j))
      }
    }
    i = endIndex;
    console.log(sub);
  }
}

function instructionToArray(input) {
  let startEnd = [];
  for (i = 0; i < input.length; i++) {
    let num = 0;
    for (j = i; j < input.length; j++) {
      let char = input.charAt(j);
      if (char === '-') {
        break;
      } else {
        num = num * 10 + parseInt(char)
      }
    }
    startEnd.push(num);
    i = j;
  }
  let start = startEnd[0];
  if (startEnd.length > 0) {
    console.log(start)
    let end = startEnd[1];
    console.log(end)
    let arr = []
    for (i = start; i <= end; i++) {
      console.log("test")
      arr.push(i);
    } 
    return arr;
  }
  return [start];
}