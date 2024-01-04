let form = document.forms.login
let inp_reqs = form.querySelectorAll('.required input')


form.onsubmit = (event) => {
    event.preventDefault();

    let error_count = 0

    inp_reqs.forEach(inp => {
        if (inp.value.length === 0) {
            inp.parentElement.classList.add('error-field')
            error_count++
        } else {
            inp.parentElement.classList.remove('error-field')
        }
    })

    alert('Чушпан')
    submit()
}


function submit() {
    let user = {}
    let showAlert = true;

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
        if (user[key] === '') {
            
            showAlert = false
            return
        }
    })

    if (showAlert) {
        console.log(user);
    }
}
