


export function GithubAuthPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');
    const returnedState = urlParams.get('state');

    const storedState = sessionStorage.getItem('git_oauth_state');


    useEffect(() => {
            if (returnedState !== storedState) {
                console.error('State parameter does not match. Possible CSRF attack.');
            } else {
                fetch('https://localhost:8084/login/oauth2/code/github', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({code: authorizationCode})
                })
                    .then(response => response.json())
                    .then(data => {
                        sessionStorage.setItem('shsToken', data.token);
                        location.replace(data.redirect_uri)
                    })
                    .catch(error => {
                        console.error('Error fetching token:', error);
                    });
            }
        }
    )


    return (<div/>)

}