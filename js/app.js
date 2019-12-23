// GLOBAL VARIABLES

const form = document.querySelector('.form-wrapper');
// const emojiWindow = document.querySelectorAll('.emoji-window');


// ENVENT LISTENER FOR CLICKS ON THE FORM
form.addEventListener('click', (e) =>{
    e.preventDefault();

    
    // Selects only the button element and triggers the click event to show .emoji-window

    if(e.target.tagName === 'BUTTON' && e.target.className === 'button-emoji'){
        const button = e.target;
        const buttonIcon = button.firstElementChild;
        const fieldSet = button.parentNode;
        const emojiWindow = fieldSet.lastElementChild;
        const arrowEmoji = document.createElement('img');
        arrowEmoji.src = 'icons/arrow.svg';
        const smileyEmoji = document.createElement('img');
        smileyEmoji.src = 'icons/smiley.svg';
        if(emojiWindow.style.display === 'none' || emojiWindow.style.display == ''){
            emojiWindow.style.display = 'flex';
            button.removeChild(buttonIcon);
            button.appendChild(arrowEmoji);
        } else {
            emojiWindow.style.display = 'none';
            button.removeChild(buttonIcon);
            button.appendChild(smileyEmoji);
        };

    } else if (e.target.className === 'button-clear'){

        const buttonCLear = e.target;
        const input = buttonCLear.previousElementSibling;
        input.value = '';

    } else if (e.target.tagName == 'SPAN'){

        const span = e.target;
        const emojiWindow = span.parentNode;
        const fieldSet = emojiWindow.parentNode;
        const label = fieldSet.firstElementChild;
        const input = label.nextElementSibling;
        const emojiContent = span.textContent;
        const buttonIcon = fieldSet.children[4];
        const iconArrow = buttonIcon.firstElementChild;
        const smileyEmoji = document.createElement('img');
        smileyEmoji.src = 'icons/smiley.svg';

        function insertAtCursor (input, textToInsert) {
            // make sure we have focus in the right input
            input.focus();
            // and just run the command
            document.execCommand('insertText', false /*no UI*/, textToInsert);
          }
        insertAtCursor(input, emojiContent);
        
        emojiWindow.style.display = 'none';
        buttonIcon.removeChild(iconArrow);
        buttonIcon.appendChild(smileyEmoji);

// ADS A NEW BULLET POINT

    } else if (e.target.className === 'add-bullet') {

        const addBullet = e.target;
        const fieldSet = addBullet.parentNode;
        const bulletInput =  fieldSet.previousElementSibling;
        const cta = form.lastElementChild;
        const addBulletPointButton = cta.previousElementSibling;
        const newBulletPoint = bulletInput.cloneNode(true);
        newBulletPoint.firstElementChild.textContent = '';
        const emojiButton = newBulletPoint.children[4];
        emojiButton.style.top = '0px';
        const emojiWindow = newBulletPoint.children[5];
        emojiWindow.style.top = '-50px'
        form.insertBefore(newBulletPoint, addBulletPointButton);

    } else if (e.target.className === 'button-erase') {
        if(form.children.length > 5){
            const buttonErase = e.target;
            const fieldSet = buttonErase.parentNode;
            const form = fieldSet.parentNode;
            form.removeChild(fieldSet);
        };
    };
});




