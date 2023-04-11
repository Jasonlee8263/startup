function login() {
    const nameEI = document.querySelector('#userName')
    const passwordEI = document.querySelector('#userPassword')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (nameEI.value == '' || passwordEI.value == '') {
        alert('Please enter both username and password.')
    }
    else if (!emailRegex.test(nameEI.value)) {
        alert('Please enter a valid email address.')
    }
}

function create() {
    const nameEI = document.querySelector('#userName')
    const passwordEI = document.querySelector('#userPassword')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (nameEI.value == '' || passwordEI.value == '') {
        alert('Please enter both username and password.')
    }
    else if (!emailRegex.test(nameEI.value)) {
        alert('Please enter a valid email address.')
    }
    else {
        alert('Sign up is complete.')
        window.location.href='signin.html'
    }
}

function authentication() {
    
}
