document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    axios.post('http://backend_host/api/register', {
        username: username,
        password: password
    })
    .then(function(response) {
        console.log('Registration successful:', response.data);
    })
    .catch(function(error) {
        console.error('Registration failed:', error);
    });
});
