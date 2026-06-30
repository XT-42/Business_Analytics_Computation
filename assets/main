// ===== Module Tag Filtering =====
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab[data-filter]');
  const cards = document.querySelectorAll('.article-card[data-mod]');
  const parts = document.querySelectorAll('.part-header[data-mod]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.mod === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

      parts.forEach(part => {
        if (filter === 'all' || part.dataset.mod === filter) {
          part.style.display = '';
        } else {
          part.style.display = 'none';
        }
      });
    });
  });

  // ===== FAQ Accordion =====
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all other items
      faqItems.forEach(i => i.classList.remove('open'));
      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // ===== Sticky Nav Scroll Effect =====
  const nav = document.querySelector('.top-nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 10) {
        nav.style.boxShadow = '0 1px 8px rgba(0,0,0,0.04)';
      } else {
        nav.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }
});
