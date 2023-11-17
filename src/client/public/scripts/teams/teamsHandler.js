const main = async() => {

    await microsoftTeams.app.initialize();

    const context = await microsoftTeams.app.getContext();

    const data = {teamName: context.team.displayName, meetingId: context.meeting.id, channelName: context.channel.displayName, user: context.user.userPrincipalName}

    //displays data from the context within a <p>
    document.getElementById('meeting-data').textContent += "team name: " + data.teamName
    document.getElementById('meeting-data').textContent += "channel name: " + data.channelName
    document.getElementById('meeting-data').textContent += "user: " + data.user

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

