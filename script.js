function toggleGallery(galleryId, btn) {
    const allGalleries = document.querySelectorAll('.gif-gallery');
    const targetGallery = document.getElementById(galleryId);
    const isAlreadyActive = targetGallery.classList.contains('active');

    allGalleries.forEach(el => {
        el.style.overflow = 'hidden';
        el.classList.remove('active');
    });
    document.querySelectorAll('.gear-btn').forEach(b => b.classList.remove('active-gear'));

    if (!isAlreadyActive) {
        targetGallery.classList.add('active');
        btn.classList.add('active-gear');

        setTimeout(() => {
            if (targetGallery.classList.contains('active')) {
                targetGallery.style.overflow = 'visible';
            }
        }, 400);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.getElementById('modalClose');

    const galleryImages = document.querySelectorAll('.gif-placeholder img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
            modalCaption.textContent = img.alt || 'Без описания';
        });
    });

    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.classList.remove('active');
    });
});