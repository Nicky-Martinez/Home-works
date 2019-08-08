const getUserInput = (argument, func = prompt) => {
  const input = func();

  let value;
  switch (argument){
    case 'string': 
      return value = (input !== '') ? input :null;
    case 'number': 
      return value = (!isNaN (input) && input !== '' && input !==null) ? +input :null;
    default: {
      console.log('Ошибка аргумента');
      return null;
    } 
  }
}

function test(inputFunc, args, result) {
  let testSuccess = inputFunc(...args) === result;
  if (testSuccess === true) {
    console.log('Ура!');
    } else{
      console.log('Упс ошибочка вышла');
  }
}


function prepareTestDatа(type, value, result) {
  return [
    [type, () => value],
    result,
  ];
}
const testSuite = (func, testData) =>{
  let testNumber = 1;
  for (let i of testData){
    console.log('Тест номер', testNumber++)
    test(func, ...prepareTestDatа(...i));
  }
}



testSuite(getUserInput, [
  ['string', 'some string', 'some string'],
  ['string', '', null],
  ['string', null, null],
  ['number', '123', 123],
  ['number', '123', '123'],
  ['sjhfgqwjfg', '123', '123']
]);