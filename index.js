window.addEventListener('keydown', (e) => {

    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play()

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing')
    }
    key.classList.add('playing')
    const keys = document.querySelectorAll('.keys')
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
})