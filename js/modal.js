const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => openFullscreen(thumbnail.src));
});

function openFullscreen(imageSrc) {
    const fullscreenImage = document.getElementById('fullscreenImage');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    fullscreenImage.style.display = 'flex';
    fullscreenImage.addEventListener('click', closeFullscreen);
}

function closeFullscreen() {
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.style.display = 'none';
    fullscreenImage.removeEventListener('click', closeFullscreen);
}
