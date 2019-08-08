const getUserInput = (argument) => {
  const input = prompt();

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

// console.log (getUserInput('string'));
console.log (getUserInput('number'));