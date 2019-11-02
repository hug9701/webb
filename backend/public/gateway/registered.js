
$(function () {
    $('#registerForm').validate({
        debug: true
        // rules: {
        //     ADDRESS: {
        //         required: true
        //     },
        //     ConfirmPWD: {
        //         required: true,
        //         equalTo: $('#txtPassword')
        //     },
        //     FullName: {
        //         required: true,
        //     },
        //     Email: {
        //         required: true,
        //         email: true
        //     }
        // },
        // messages: {
        //     UID: {
        //         required: 'Please input UID'
        //     },
        //     PWD: {
        //         required: "Chưa nhập mật khẩu.",
        //         minlength: "Mật khẩu phải nhiều hơn 6 ký tự."
        //     },
        //     ConfirmPWD: {
        //         required: "Chưa nhập lại mật khẩu.",
        //         equalTo: "Mật khẩu nhập lại không khớp."
        //     },
        //     FullName: {
        //         required: "Chưa nhập họ tên.",
        //     },
        //     Email: {
        //         required: "Chưa nhập email.",
        //         email: "Email không đúng định dạng."
        //     },
        // },

        // highlight: function (element) { // hightlight error inputs
        //     $(element)
        //         .closest('.form-group')
        //         .addClass('has-error'); // set error class to the control group
        // },

        // success: function (label) {
        //     // var name = label.attr('for');
        //     // $('[name=' + name + ']').closest('.form-group').removeClass('has-error');

        //     label.closest('.form-group').removeClass('has-error')
        //     label.remove();
        // },

        // errorElement: 'span',
        // errorClass: 'help-block'
    });
})

$('#btnRegister').on('click', function () {
    var _fullName = $('#txtFullName').val()
    var _address = $('#txtAdress').val()
    var _email = $('#txtEmail').val()
    var _password = $('#txtPassword').val()
    var _confirmPassword = $('#txtConfirmPWD').val()

    var body = {
        email: _email,
        address: _address,
        password: _password,
        fullname: _fullName
    }

    $.ajax({
        url: 'http://localhost:5555/user/register',
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done((data) => {
        console.log(data);
        if (data.success) {
            swal("Good job!", "You clicked the button!", "success");
        } else {
            swal("Invalid captcha.", "You clicked the button!", "error");
        }
    }).fail((xhr, textStatus, err) => {
        console.log('here')
        console.log(xhr)
        console.log(textStatus)
        console.log(err)
    })
});
