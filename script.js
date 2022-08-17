document.getElementById('btn-submit').addEventListener('click',function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //danger: do not verify email password on the client side
    if (email === 'arif@gmail.com' && password === 'arif') {
        window.location.href = 'bank.html'
        console.log('valid user');
    }else{
        alert('invalid user');
    }
    
})