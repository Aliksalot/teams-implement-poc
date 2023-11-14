const getUserData = () => {
    const name = 'John'
    const url = 'api/demo/getData'
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: name})
    }).then(result => {
        if(result.ok)
            return result.json()
    }).then(data => {
        console.log('response from server' + data.city)
        const log = document.getElementById('result-span')
        log.textContent = `Result: ${data.city}`
        log.style.display = 'inline'
    })
}

document.getElementById('button').addEventListener('click', getUserData)