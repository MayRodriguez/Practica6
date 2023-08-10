//============para leer un dato de la consola al ejecutar el node========
const fs = require('fs');

const readName  = process.argv.slice(2);
let koder = `${readName[1]}`;
const koderJson = fs.readFileSync("koders.json", "utf-8");
let kodersArray = JSON.parse(koderJson)

switch (readName[0]) {
    case 'add':
        const content = fs.readFileSync("koders.json", "utf-8");
        const contentAsObject = JSON.parse(content);
        contentAsObject.push({name: koder});
        fs.writeFileSync("koders.json", JSON.stringify(contentAsObject), "utf-8");
        console.log(`Se ha agregado el nombre '${koder}' al archivo .json`);
        break;
    case 'ls':
        console.log('Listado de koders: ')
        kodersArray.forEach((koder) => console.log(koder.name))
        break;
    case 'rm':
        namesArray = kodersArray.map((koder) => koder.name)
        namesArray.filter((koderFilter) => {
            if (koderFilter === koder){
                let koderToRemove = kodersArray.filter(koderAcc => koderAcc.name != koder);
                fs.writeFileSync("koders.json", JSON.stringify(koderToRemove), "utf-8");
                console.log(`Se ha removido '${koder}' del archivo .json`);
            }             
        });
        break;
    case 'reset':
        fs.unlinkSync("koders.json");
        fs.writeFileSync("koders.json", "[]", "utf-8");
        console.log('Se han eliminado todos los nombres de la lista')
        break;
    default: 
        console.log(`El comando '${readName[0]}' no existe`)
    } 
