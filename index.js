let form = document.forms.login
let inp_reqs = form.querySelectorAll('.required input')
let eror_span = document.querySelector('.eror span')
let succs = document.querySelector('.success span')
let inpu = document.querySelectorAll('input')


form.onsubmit = (event) => {
    event.preventDefault();

    let error_count = 0
    let success = 12

    inpu.forEach(inpu => {
        if (inpu.value.length === 0) {
            success--
        } else {
           
        }
    })

    succs.innerHTML = success
    
    inp_reqs.forEach(inp => {
        if (inp.value.length === 0) {
            inp.parentElement.classList.add('error-field')
            error_count++
        } else {
            inp.parentElement.classList.remove('error-field')
        }
    })
    if(error_count > 0) {
        alert('Дебил?')
    } else {
        submit()
    }
    eror_span.innerHTML = error_count

}

function submit() {
    let user = {};
    let showAlert = true;

    let form = document.forms.login
    let fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
        if (user[key] === '') {
            showAlert = false;
            return;
        }
    });

    if (showAlert) {
        console.log(user);
    }
}


function validateInput(inputElement, regex) {
    let inputval = inputElement.value;
    let valid = regex.test(inputval);

    if (!valid) {
        inputElement.style.border = '1px solid red'
    } else {
        inputElement.style.border = ''
    }
}