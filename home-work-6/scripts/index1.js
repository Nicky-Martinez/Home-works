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



test(getUserInput, ['string', () => 'some string'], 'some string');
test(getUserInput, ['string', () => ''], null);
test(getUserInput, ['string', () => null], null);
test(getUserInput, ['number', () => 'text'], null);
test(getUserInput, ['number', () => '123'], 123);
test(getUserInput, ['number', () => '123'], '123');
test(getUserInput, ['фывфывфы', () => '123'], '123');