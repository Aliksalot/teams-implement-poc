await microsoftTeams.app.initialize()

    console.log('HELLO WORLD')

    function setTheme(theme) {
        if (theme) {        
            document.body.className =
                'theme-' + (theme === 'default' ? 'light' : theme);
        }
    }

    microsoftTeams.getContext(function (context) {
        if (context && context.theme) {
            setTheme(context.theme);
        }
    });
    
    microsoftTeams.registerOnThemeChangeHandler(function (theme) {
        setTheme(theme);
    });

    const registerConfig = async(url) => {
        microsoftTeams.pages.config.setValidityState(true)

        microsoftTeams.pages.config.registerOnSaveHandler(async(saveEvent) => {
            const configPromise = microsoftTeams.pages.config.setConfig({
                websiteUrl:url,
                contentUrl:url,
                entityId:url
            })

            configPromise.then((result) => {
                saveEvent.notifySuccess()
            }).catch(error => {
                console.log(error)
                saveEvent.notifyFailure('Fail occured', error)
            })

        })
    }


    const eulaAccept = () => {
        const configPageUrl = `${srcUrl}/config`

        registerConfig(configPageUrl)
    }

    eulaAccept()
    document.getElementById('eula-btn').addEventListener('click', eulaAccept)