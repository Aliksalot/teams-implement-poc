
const getAdmin = () => {
    return localStorage.getItem('admin')
}

const isAdmin = async() => {
    await microsoftTeams.initialize()
    
    const context = await microsoftTeams.app.getContext()

    const user = context.user.userPrincipalName

    console.log(user, getAdmin())

    return user === getAdmin()
}

const chooseView = async() => {
    const _isAdmin = await isAdmin()

    if(_isAdmin && window.location.pathname !== '/admin-panel'){
        window.location.pathname = '/admin-panel'
        return
    }

    if(!_isAdmin && window.location.pathname === '/admin-panel'){
        window.location.pathname = '/survey'
        return
    }

    
}


