const form = document.querySelector('.form-wrapper');
// const emojiWindow = document.querySelectorAll('.emoji-window');

form.addEventListener('click', (e) =>{
    e.preventDefault();
    // Selects only the button element and triggers the click event to show .emoji-window
    if(e.target.tagName == 'BUTTON' && e.target.className == 'button-emoji'){
        let button = e.target;
        let buttonIcon = button.firstElementChild;
        let fieldSet = button.parentNode;
        let emojiWindow = fieldSet.lastElementChild;
        if(emojiWindow.style.display === 'none' || emojiWindow.style.display == ''){
            emojiWindow.style.display = 'flex';
            buttonIcon.className = 'fas fa-arrow-down';
             
        } else {
            emojiWindow.style.display = 'none';
            buttonIcon.className = 'fas fa-smile-wink';
        };
    };
    if (e.target.tagName == 'SPAN'){

        let span = e.target;
        let emojiWindow = span.parentNode;
        let fieldSet = emojiWindow.parentNode;
        let input = fieldSet.children[1];
        let emojiContent = span.textContent;
        // get current text of the input
        let value = input.value;
        // save selection start and end position
        let start = input.selectionStart;
        let end = input.selectionEnd;
        // update the value with our text inserted
        input.value = value.slice(0, start) + emojiContent + value.slice(end);
        // update cursor to be at the end of insertion
        input.selectionStart = input.selectionEnd = start; // insert this at the end of this statement if needed ( + emojiContent.length)

    };
});





