function findNemo(sentence) {
   let searchWorld = sentence.split(' ').indexOf('Nemo')
   return (searchWorld !== -1) ?  `I found Nemo at ${searchWorld + 1}!` : `I can't find Nemo :(` 
}

module.exports = findNemo




