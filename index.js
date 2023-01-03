
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('emailId');
const validEmailFormat = /^[A-Za-z0-9][\w+]*@[A-Za-z0-9]{3,}\.[A-Za-z]{2,}$/i;
const password = document.getElementById('pass');
const submit = document.getElementById('submitButton');
const errorBox1 = document.getElementById("errorBox1");
const errorBox2 = document.getElementById("errorBox2");
const errorBox3 = document.getElementById("errorBox3");
const errorBox4 = document.getElementById("errorBox4");

function validateEmailAddress(a){
    const submittedEmailAddress = email.value;    
    const isValidEmailAddress = validEmailFormat.test(submittedEmailAddress);
    if(email.value == '' || !isValidEmailAddress){
        errorBox3.style.display = 'block';  
        email.style.color = 'var(--Red)';
        email.style.border = '2px solid var(--Red)';
        a.preventDefault();
    }else{    
        errorBox3.style.display = 'none';
        email.style.color = '';
        email.style.color = 'var(--Green)';
        email.style.border = '1px solid var(--Shadow)';
    }
}

submit.onclick = (e) => {
    if(firstname.value == ''){
        errorBox1.style.display = 'block';
        firstname.style.border = '2px solid var(--Red)';
        e.preventDefault();
    }else{    
        errorBox1.style.display = 'none';        
        firstname.style.border = '1px solid var(--Shadow)';
    }
    if(lastname.value == ''){
        errorBox2.style.display = 'block';
        lastname.style.border = '2px solid var(--Red)';
        e.preventDefault();
    }else{    
        errorBox2.style.display = 'none';        
        lastname.style.border = '1px solid var(--Shadow)';
    }
    validateEmailAddress(e);
    
    if(password.value == '' || password.value.length < 8){
        errorBox4.style.display = 'block';        
        password.style.border = '2px solid var(--Red)';
        e.preventDefault();
    }else{        
        errorBox4.style.display = 'none';        
        password.style.border = '1px solid var(--Shadow)';
    }    
}

