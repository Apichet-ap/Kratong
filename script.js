function launchKrathong() {
    const river = document.getElementById('river');
    const krathong = document.createElement('div');
    krathong.className = 'krathong';
    krathong.style.left = Math.random() * (river.offsetWidth - 50) + 'px';
    krathong.style.top = river.offsetHeight + 'px';

    river.appendChild(krathong);

    let position = river.offsetHeight;
    const interval = setInterval(() => {
        if (position <= -50) {
            clearInterval(interval);
            river.removeChild(krathong);
        } else {
            position -= 1;
            krathong.style.top = position + 'px';
        }
    }, 20);
}
