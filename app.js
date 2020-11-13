let list = document.querySelectorAll('.component--feedback .face li');

list.forEach(li => li.addEventListener('click', evt => {
    if (evt.currentTarget.classList.contains('active')) {
        evt.currentTarget.classList.remove('active');
        evt.currentTarget.parentNode.nextElementSibling.classList.remove('active');
        evt.currentTarget.querySelector('input').checked = false;
    }
    else {
        evt.currentTarget.querySelector('input').checked = true;
        list.forEach(li => li.classList.remove('active'));
        evt.currentTarget.classList.add('active');
        evt.currentTarget.parentNode.nextElementSibling.classList.add('active');
    }

}));