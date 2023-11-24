const fs = require('fs')
const readLine = require('readline')
const archiver = require('archiver')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const constantsJsPath = '../src/client/public/scripts/teams/constants.js'
const manifestPath = '../manifest/manifest.json'
const manifestZipPath = './manifest.zip'

const manifestFiles = [
    '../manifest/color.png',
    '../manifest/outline.png',
    '../manifest/manifest.json'
]

const options = [
    "Build with new url",
    "Build with old url"
]

const printMenu = () => {
    console.log()
    options.forEach((option, ind) => {
        console.log(`${ind + 1} - ${option}`)
    })
    console.log('Do CTRL + C to exit \n')
}

let run = true;

const deleteOldManifest = () => {
    if(fs.existsSync(manifestZipPath)){
        fs.unlink(manifestZipPath, (err) => {})
    }
}

const createZip = () => {

    deleteOldManifest()

    const archive = archiver('zip', { zlib: { level : 9 } })

    const outputZipStream = fs.createWriteStream(manifestZipPath);

    outputZipStream.on('close', () => {
        console.log('build succesfull! ')
        process.exit(0)
    })

    archive.pipe(outputZipStream)

    manifestFiles.forEach(filePath => {
        const fileStream = fs.createReadStream(filePath)
        const fileName = filePath.split('/').pop()
        archive.append(fileStream, {name: fileName})
    })

    archive.finalize()

    run = false;
}


const replaceOld = (newUrl) => {

    const ngrokUrlPattern = /(https:\/\/[^\s]*\.ngrok-free\.app[^\s]*)/

    fs.readFile(constantsJsPath, 'utf8', (err, data) => {
        if(err) {
            console.error(err)
            return
        }

        const updatedData = data.replace(ngrokUrlPattern, newUrl + '\'')
        
        fs.writeFile(constantsJsPath, updatedData, 'utf-8', (err) => {
            if(err) {
                console.error(err)
                return
            }
        })
    })

    fs.readFile(manifestPath, 'utf-8', (err, data) => {
        if(err){
            console.error(err);
            return
        }

        const updatedData = data.replace(ngrokUrlPattern, newUrl + '/about\",')
        
        fs.writeFile(manifestPath, updatedData, 'utf-8', (err) => {
            if(err) {
                console.error(err)
                return
            }
        })
    })
}

const enterNewUrl = () => {
    rl.question('Enter new URL: ', async url => {
        replaceOld(url)
        setTimeout(createZip, 1000)
    })
}

const functionsMap = {
    "1" : enterNewUrl,
    "2" : createZip
}




const start = () => {
    printMenu()
    rl.question('Choose option', (input) => {
        input = input.trim()[0]
        
        if(!Object.keys(functionsMap).includes(input)){
            console.log('Invalid input! \n')
            return start()
        }

        console.log(functionsMap[input])
        return functionsMap[input]()
    })

}

console.log("Welcome to builder!")
start()