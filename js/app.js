// GLOBAL VARIABLES

const form = document.querySelector('.form-wrapper');
// const emojiWindow = document.querySelectorAll('.emoji-window');


// ENVENT LISTENER FOR CLICKS ON THE FORM
form.addEventListener('click', (e) =>{
    e.preventDefault();

// SHOW THE EMOJI WINDOW
    
    // Selects only the button element and triggers the click event to show .emoji-window

    if(e.target.tagName === 'BUTTON' && e.target.className === 'button-emoji'){
        const button = e.target;
        const buttonIcon = button.firstElementChild;
        const fieldSet = button.parentNode;
        const emojiWindow = fieldSet.lastElementChild;
        if(emojiWindow.style.display === 'none' || emojiWindow.style.display == ''){
            emojiWindow.style.display = 'flex';
            buttonIcon.className = 'fas fa-arrow-down';
             
        } else {
            emojiWindow.style.display = 'none';
            buttonIcon.className = 'fas fa-smile-wink';
        };
    };

// INSERTS EMOJIS INTO INPUT FIELD
    if (e.target.tagName == 'SPAN'){

        const span = e.target;
        const emojiWindow = span.parentNode;
        const fieldSet = emojiWindow.parentNode;
        const label = fieldSet.firstElementChild;
        const input = label.nextElementSibling;
        const emojiContent = span.textContent;
        function insertAtCursor (input, textToInsert) {
            // make sure we have focus in the right input
            input.focus();
            // and just run the command
            document.execCommand('insertText', false /*no UI*/, textToInsert);
          }
        insertAtCursor(input, emojiContent);
    };

    if (e.target.className === 'add-bullet') {

        console.log(e.target);
    }
});





