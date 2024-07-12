$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     var loader = document.getElementById('loader');
//     loader.classList.add('hidden');
// });

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
    }, 30);
  }

  document.addEventListener('DOMContentLoaded', simulateProgress);