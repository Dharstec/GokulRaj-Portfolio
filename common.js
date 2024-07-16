$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

function showSingleProjDets(id) {
    const url = new URL('singleProjectDets.html', window.location.origin);
    url.searchParams.append('id', id);
    window.location.href = url.toString();
}

function simulateProgress() {
    var progressBar = document.querySelector('.progress-bar');
    var width = 0;
    var interval = setInterval(function() {
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
    cards.forEach(function(card) {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
