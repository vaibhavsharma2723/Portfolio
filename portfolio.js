const contents = ['Web Developer','Frontend Developer','Backend Developer']

const typingContent = document.getElementById('job');
let typingIndex = 0;
let charIndex = 0;

function changeName() {
    if(charIndex < contents[typingIndex].length){
        typingContent.innerHTML += contents[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(changeName, 100);
    }else{
        setTimeout(eraseName,3000);
    }
}

function eraseName() {
    if (charIndex > 0) {
        typingContent.textContent = contents[typingIndex].substring(0 , charIndex-1);
        charIndex--;
        setTimeout(eraseName,100)
    }else{
        typingIndex = (typingIndex+1) % contents.length;
        setTimeout(changeName, 100);
    }
}

changeName();