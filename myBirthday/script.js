function startAnimation() {
    const balloons = document.getElementById('balloons');
    const confetti = document.getElementById('confetti');

    balloons.classList.add('animate');
    for (let i = 0; i < 50; i++) {
        const confetto = document.createElement('div');
        confetti.appendChild(confetto);
    }
}
