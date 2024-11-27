document.querySelectorAll('.btns').forEach(button => {
    button.addEventListener('mouseover', function(){
        const buttonId = button.id;
        const number = buttonId.split('-')[1];
        const targetDiv = document.getElementById(`div-${number}`)
        targetDiv.style.visibility = 'visible';
        targetDiv.style.width = '100%';
    });
    button.addEventListener('mouseout', function(){
        const buttonId = button.id;
        const number = buttonId.split('-')[1];
        const targetDiv = document.getElementById(`div-${number}`)
        targetDiv.style.visibility = 'hidden';
        targetDiv.style.width = 0;
    });
});

var clicked = false;
document.getElementById('btn-open').addEventListener('click', function(){
    const bg = document.getElementById('btn-background-mobile');
    const btns = document.querySelectorAll('.mobile-a');
    if (clicked === false) {
        bg.style.visibility = 'visible';
    btns.forEach(button => {
        button.style.display = 'block';
    });
    setTimeout(function(){
        bg.style.width = '300px';
        btns.forEach(button => {
            button.style.opacity = 1;
        })
    }, 10);
    clicked = true;
    }
    else if (clicked === true) {
        bg.style.width = '0%';
        bg.style.visibility = 'hidden';
        btns.forEach(button => {
            button.style.display = 'none';
            button.style.opacity = 0;
        });
        clicked = false;
    }
})