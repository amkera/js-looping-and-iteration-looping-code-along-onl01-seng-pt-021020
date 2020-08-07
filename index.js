function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

writeCards(namesArray); 

function countDown(number) {
  let i = 0; 
  while (i < number) {
    console.log(number)
  }
}