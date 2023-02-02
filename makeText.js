/** Command-line tool to generate Markov text. */


const fs = require("fs")
const markov = require("./markov")
const axios = require("axios")
const process =require("process")


function generateText(text){
    let mm = new markov.MarkovMachine(text)
    console.log(mm.makeText())
}

// read file and generate text from it 
function makeText(path){
    fs.readFile(path, "utf8", (err, content) =>{
        if(err){
            console.error(`Can not read file at : ${path} :${err}`)
            process.exit(1)
        }else generateText(content)
    } )
}


async function makeURLText(url){
    try {
        res = await axios.get(url)
    } catch(err){
        console.error(`Cannot read URL : ${url}: ${err}`)
        process.exit(1)
    }
    generateText(res.data)

}

let [method, path] = process.argv.slice(2);

if (method === "file") {
  makeText(path);
} else if (method === "url") {
  makeURLText(path);
} else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}

