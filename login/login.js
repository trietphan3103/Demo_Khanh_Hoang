// let user_email_list = ['abc@gmail.com'];
// localStorage.setItem("user_email_list", JSON.stringify(user_email_list));

// let user_password_list = ['abc'];
// localStorage.setItem("user_password_list", JSON.stringify(user_password_list))


let login_form = document.getElementById('login-form');
// if ( login_form !== null ) {
    login_form.addEventListener('submit', function (s) {
        s.preventDefault();
        // lấy input
        let email = document.querySelector('.email-input').value;
        let password = document.querySelector('.password-input').value;


    
        // Lấy data từ local storage
        let user_email_list = localStorage.getItem("user_email_list");
        user_email_list = JSON.parse( user_email_list );
    
        let user_password_list = localStorage.getItem("user_password_list");
        user_password_list = JSON.parse( user_password_list );
        
        if ( email == '' || password == '' ) {
            alert( 'Vui lòng điền đầy đủ thông tin');
            return;
        }
        else {
            for( key in user_password_list ) {
                if ( email == user_email_list[key] && password == user_password_list[key] ) {
                    window.location.assign("http://127.0.0.1:5500/Web/JSA02/SPCK-JSA02/index.html")
                    alert('Đăng nhập thành công');
            
                } else if (email != user_email_list[key] && password == user_password_list[key]) {
                    alert("Tên đăng nhập không trùng khớp")
                } else if (email == user_email_list[key] && password != user_password_list[key]) {
                    alert("Mật khẩu không trùng khớp")
                }
            }
        }
        
    

    })
// } else if (login_form == null){
//     login_form.addEventListener('submit', function (s) {
//         s.preventDefault();
//         console.log("hello");
//         alert("Vui lòng điền đầy đủ thông tin");
//     })
// }

// function checkLogin() {
//     const isLogin = getDataLocalStorage("isLogin");
//     if (isLogin === true) {
//       window.location.href = "index.html";
//     }
//   }
// checkLogin()