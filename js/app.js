const form = document.querySelector('.form-wrapper');
// const emojiWindow = document.querySelectorAll('.emoji-window');

form.addEventListener('click', (e) =>{
    e.preventDefault();
    if(e.target.tagName == 'BUTTON' && e.target.className == 'button-emoji'){
        let button = e.target;
        let fieldSet = button.parentNode;
        let emojiWindow = fieldSet.lastElementChild;
        if(emojiWindow.style.display === 'none'){
            emojiWindow.style.display = 'flex'
        } else {
            emojiWindow.style.display = 'none'
        };
    };
});





