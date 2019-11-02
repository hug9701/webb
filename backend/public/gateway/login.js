

$("#btnlogin").on("click", () => {
    var _email = $("#txtEmail").val();
    var _password = $("#txtPassword").val();

    console.log(_email);
    console.log(_password);

    var body = {
        email: _email,
        password: _password
    }

    $.ajax({
        url: 'http://localhost:5555/auth/signin',
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done((data) => {
        localStorage.access_token = data.token
        if (localStorage.access_token !== 'undefined') {
            $.ajax({
                url: 'http://localhost:5555/auth/secured',
                dataType: 'json',
                timeout: 10000,
                headers: {
                    'token': localStorage.access_token
                }
            }).done((data) => {
                location.href = '/'      
            })
        }
    })
})
