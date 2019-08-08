const getUserInput = (argument) => {

    while (true){
      const input = prompt();

        let value;
      switch (argument){
        case 'string':{
          if (input !== ''){
            return input;
          }
          break;
        }   
       case 'number': {
        if (!isNaN (input) && input !== '' ){
          if (input === null){
            return null;
          }
          return +input;
        }
        break;
       }   
       default: {console.log('Ошибка аргумента'); return null;}
    }  
  } 
}

 // console.log (getUserInput('string'));
 console.log (getUserInput('number'));
// console.log (getUserInput('adsdasdasda'));