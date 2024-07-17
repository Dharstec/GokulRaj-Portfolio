$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.navbar').addClass('scrolled');
  } else {
    $('.navbar').removeClass('scrolled');
  }
});

// function showSingleProjDets(id) {
//   const url = new URL('singleProjectDets.html', window.location.origin);
//   url.searchParams.append('id', id);
//   window.location.href = url.toString();
// }

function simulateProgress() {
  var progressBar = document.querySelector('.progress-bar');
  var width = 0;
  var interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      document.getElementById('loader').classList.add('hidden');
    } else {
      width++;
      progressBar.style.width = width + '%';
      progressBar.setAttribute('aria-valuenow', width);
    }
  }, 10);
}

document.addEventListener('DOMContentLoaded', simulateProgress);

function filterCards(category) {
  var cards = document.querySelectorAll('.card-item');
  cards.forEach(function (card) {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

const cards = document.querySelectorAll('.card-custom');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const overlay = document.getElementById('overlay');
const closePopup = document.getElementById('closePopup');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        popupImage.src = imgSrc;
        popup.style.display = 'flex';
        overlay.style.display = 'block';
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});