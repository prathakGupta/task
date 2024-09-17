const apiUrl = 'http://localhost:3000/'; // adjust to your API URL

// Handle login with GitHub
document.querySelector('#github-login').addEventListener('click', () => {
    window.location.href = `${apiUrl}/auth/github`;
});

// Handle login with YouTube
document.querySelector('#youtube-login').addEventListener('click', () => {
    window.location.href = `${apiUrl}/auth/youtube`;
});

// Handle private page access
document.querySelector('#private-page').addEventListener('click', () => {
    fetch(`${apiUrl}/private`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.querySelector('.error-message').innerHTML = data.error.message;
            } else {
                window.location.href = `${apiUrl}/private`;
            }
        })
        .catch(error => {
            console.error(error);
        });
});