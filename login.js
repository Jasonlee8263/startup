function login() {
    const nameEI = document.getElementById('userName')
    const passwordEI = document.getElementById('userPassword')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (nameEI.value == '' || passwordEI.value == '') {
        alert('Please enter both username and password.')
    }
    else if (!emailRegex.test(nameEI.value)) {
        alert('Please enter a valid email address.')
    }
}
