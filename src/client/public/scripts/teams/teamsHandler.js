const main = async() => {
    'use strict';
    await microsoftTeams.app.initialize();
    
    await microsoftTeams.pages.config.setValidityState(true)

    const context = await microsoftTeams.app.getContext();

    const url = 'api/demo/sendData'
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(context)
    })
}
main()