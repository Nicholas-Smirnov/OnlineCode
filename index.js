const fs = require('fs')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function CarefulReplace(data) {

}

function CompileData(data) {

    compiledData = data

    // Removing All Defaults
    compiledData = compiledData.replaceAll("console.log", "")
    compiledData = compiledData.replaceAll("eval", "")
    compiledData = compiledData.replaceAll("parse", "")

    // SYSTEM Details
    compiledData = compiledData.replaceAll("SYSTEM.Output", "console.log")
    compiledData = compiledData.replaceAll("SYSTEM.PromptClose", "rl.close")
    compiledData = compiledData.replaceAll("SYSTEM.Prompt", "rl.question")

    // Variable Types

    // Equal Sign
    compiledData = compiledData.replaceAll("..", "=")

    // Statements
    compiledData = compiledData.replaceAll("&", "if")
    compiledData = compiledData.replaceAll("<>", "else")

    // Loops
    compiledData = compiledData.replaceAll("&", "for")
    compiledData = compiledData.replaceAll("$", "while")

    // Comments
    compiledData = compiledData.replaceAll("@@", "//")

    console.log(compiledData)

    return compiledData

}

fs.readFile('C:\\Coding\\LanguageCompileToJS\\main.alpha', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    eval(CompileData(data))
})
