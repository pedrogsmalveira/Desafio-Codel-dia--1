const allBtns = document.querySelectorAll('.curtir')

function like(event) {
    event.target.classList.toggle("active")
}

allBtns.forEach(btn => btn.addEventListener('click',like))