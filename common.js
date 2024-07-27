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
// const cards = document.querySelectorAll('.card-custom-single');
// const popup = document.getElementById('popup');
// const popupImage = document.getElementById('popupImage');
// const overlay = document.getElementById('overlay');
// const closePopup = document.getElementById('closePopup');

// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         const imgSrc = card.querySelector('img').src;
//         popupImage.src = imgSrc;
//         popup.style.display = 'flex';
//         overlay.style.display = 'block';
//     });
// });

// closePopup.addEventListener('click', () => {
//     popup.style.display = 'none';
//     overlay.style.display = 'none';
// });

// overlay.addEventListener('click', () => {
//     popup.style.display = 'none';
//     overlay.style.display = 'none';
// });

$(document).ready(function() {
  const cards = document.querySelectorAll('.card-custom-single img');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const closePopup = document.getElementById('closePopup');
  const carousel = $('.owl-carousel');

  carousel.owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      navText: ['<button class="prev">Previous</button>', '<button class="next">Next</button>'],
      dots: false
  });

  let currentIndex = 0;

  function showPopup(index) {
      carousel.trigger('to.owl.carousel', index);
      popup.style.display = 'flex';
      overlay.style.display = 'block';
      currentIndex = index;

      // Apply transform effect
      requestAnimationFrame(() => {
          popup.style.transform = 'translate(-50%, -50%) scale(1)';
      });
  }

  cards.forEach((card, index) => {
      card.addEventListener('click', () => {
          showPopup(index);
      });
  });

  closePopup.addEventListener('click', () => {
      closePopupFunction();
  });

  overlay.addEventListener('click', () => {
      closePopupFunction();
  });

  function closePopupFunction() {
      popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
      setTimeout(() => {
          popup.style.display = 'none';
          overlay.style.display = 'none';
      }, 300); // Match this with the transition duration in CSS
  }
});


// home page scroll content
window.addEventListener('scroll', function() {
    const leftScroll = document.getElementById('left-scroll');
    const rightScroll = document.getElementById('right-scroll');
    const offsetTop = leftScroll.getBoundingClientRect().top;

    if (window.innerWidth >= 768) {
        if (offsetTop <= 0) {
            leftScroll.classList.add('left-fixed');
            rightScroll.classList.add('right-scroll');
        } else {
            leftScroll.classList.remove('left-fixed');
            rightScroll.classList.remove('right-scroll');
        }
    }
});

window.addEventListener('resize', function() {
    const leftScroll = document.getElementById('left-scroll');
    const rightScroll = document.getElementById('right-scroll');

    if (window.innerWidth < 768) {
        leftScroll.classList.remove('left-fixed');
        rightScroll.classList.remove('right-scroll');
    }
});

// Single project video img popup

document.addEventListener('DOMContentLoaded', function() {
    const viewMoreElements = document.querySelectorAll('.view-more');
    const closeElements = document.querySelectorAll('.close');

    viewMoreElements.forEach(element => {
        element.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
            if (target) {
                target.style.display = 'block';
            }
        });
    });

    closeElements.forEach(element => {
        element.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
            if (target) {
                target.style.display = 'none';
            }
        });
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    }
});

