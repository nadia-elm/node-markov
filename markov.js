/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/); // split string on spaces, make into an array
    this.words = words.filter(c => c !== ""); // remove any empty strings from the array
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();// maps are like objects but keys can be any value and the order of k,v pairs is maintained 
                              //,iteration methods can be use(e.g forEach)

    for(let i = 0; i < this.words.length; i++){
      let word = this.words[0];
      let nextWord = this.words[i+1] || null ;

      if(chains.has(word)) chains.get(word).push(nextWord);
      else chains.set(word, [nextWord])
    }
    this.chains = chains;
  }

  //like @classmethod in python
  static choice(arr){
    if(!arr){
      return
    }
    return arr[Math.floor(Math.random() * arr.length)]
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Array.from(this.chains.keys())
    let key = MarkovMachine.choice(keys);//pick a random word to start with
    let out =[]


    while(out.length < numWords && key !== null){
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key))
    }
    return out.join(" ")//  take the arr out and concatenate its elements into a string separated by " "
  }
}



module.exports = {
  MarkovMachine,
}

let mm = new MarkovMachine("the cat in the hat")
console.log(mm.chains)
