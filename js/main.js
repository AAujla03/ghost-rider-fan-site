console.log("🛠️ main.js loaded – found items:",
    document.querySelectorAll('.timeline-item').length);


// Wait for DOM to load
// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const items   = document.querySelectorAll('.timeline-item');
    const detail  = document.getElementById('timeline-detail');
    const titleEl = document.getElementById('detail-title');
    const yearEl  = document.getElementById('detail-year');
    const descEl  = document.getElementById('detail-desc');
    const closeBtn= detail.querySelector('.close-detail');
  
    items.forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();          // ← prevent this click from bubbling
        titleEl.textContent = item.dataset.title;
        yearEl.textContent  = item.dataset.year;
        descEl.textContent  = item.dataset.desc;
        detail.classList.add('active');
      });
    });
  
    closeBtn.addEventListener('click', e => {
      e.stopPropagation();
      detail.classList.remove('active');
    });
  
    // Now this only closes when you click truly elsewhere
    document.body.addEventListener('click', () => {
      detail.classList.remove('active');
    });
  });
  
  // After DOMContentLoaded…
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', e => {
    lightboxImg.src = e.target.src;
    lightbox.style.display = 'flex';
  });
});

// Close on overlay click
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
