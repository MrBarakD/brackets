module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2) return false;  // если нечетное количество символов, то нет пар

  let configArr = [];
  let stack = [];

  bracketsConfig.map(item => {
    configArr = configArr.concat(item)}
  );  // заполняем массив конфигурации скобок
  
  for (let i = 0; i < str.length; i += 1) {
    const bracket = str[i];
    const indexOne = configArr.indexOf(bracket);
    const indexTwo = configArr.lastIndexOf(bracket);

    // проверяем, являются ли закрыв. скобки и открыв. скобки одинаковыми
    if (indexOne < indexTwo) {  
      if (stack.length === 0) {
        stack.push(bracket);
        continue;
      }

      if (stack[stack.length - 1] === bracket) {
        stack.pop();
        continue;
      }

      stack.push(bracket);
      continue;
    }

    //Проверяем, это открывающаяся скобка?
    if (!(indexOne % 2)) { 
      stack.push(bracket);
      continue;
    }

    // раз это не одинаковые откр и закр скобки и не откр скобока, то это закрыв скобка
    const pairBracket = configArr[indexOne - 1];

    if (stack[stack.length - 1] === pairBracket) {
      stack.pop();
      continue;
    }

    return false;
  }

  return (stack.length === 0)
}
