// Code your solutions in this file
function writeCards(names, occasion) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }

  const number = 10;
  function countDown(number){
    for(let i=number; i>=0; i--){
        console.log(i)
    }
  }