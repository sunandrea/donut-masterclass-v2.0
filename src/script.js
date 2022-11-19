const btn = document.querySelector('.read-more-btn');

const text = document.querySelector('.about__read-more');

const cardHolder = document.querySelector('.about-card');

cardHolder.addEventListener('click', e => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes('read-more-btn');

  if (!isReadMoreBtn) return;

  const currentText = e.target.parentNode.querySelector('.about__read-more');

  currentText.classList.toggle('about__read-more--open');

  current.textContent = current.textContent.includes('Read More')
    ? 'Less'
    : 'Read More';
});
