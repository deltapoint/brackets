module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let splitstr = str.split('');

  for (let i = 0; i < splitstr.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++){
      let current = splitstr[i];
      if(current == bracketsConfig[j][0]) {
        let last = stack[stack.length-1];
        if(current == bracketsConfig[j][1] && last == bracketsConfig[j][0]){
          stack.pop();
        } else {
          stack.push(current);
        } break;
      }
      if(current == bracketsConfig[j][1]){
        let last = stack[stack.length-1];
        if(current == bracketsConfig[j][1] && last == bracketsConfig[j][0]){
          stack.pop();
        } else return false;
      } 
    }
  }
  return stack.length == 0; 
}
