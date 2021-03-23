const register =e=>{


    let data ={
        username: document.getElementById('username').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        ph:document.getElementById('phone-number')
    }

    localStorage.setItem('formData',JSON.stringify(formData));

    
}