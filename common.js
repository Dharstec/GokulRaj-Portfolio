// $(window).scroll(function () {
//   if ($(this).scrollTop() > 50) {
//     $('.navbar').addClass('scrolled');
//   } else {
//     $('.navbar').removeClass('scrolled');
//   }
// });

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


// Project page button filter

function filterCards(category) {
  var cards = document.querySelectorAll('.card-custom');
  if (window.innerWidth > 768) {
      cards.forEach(function (card) {
          card.classList.remove('hidden');
      });
  } else {
      cards.forEach(function (card) {
          if (category === 'all' || card.getAttribute('data-category') === category) {
              card.classList.remove('hidden');
          } else {
              card.classList.add('hidden');
          }
      });
  }
}

// Run filterCards initially to show all cards on larger screens
filterCards('all');

// Listen for window resize events to update card visibility
window.addEventListener('resize', function () {
  filterCards('all'); // Reapply filter based on screen size
});


// POP UP image in single project
const cards = document.querySelectorAll('.card-custom-single');
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