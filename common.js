$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById('loader');
    loader.classList.add('hidden'); // Hide loader when page is fully loaded
});

function showSingleProjDets(id) {
    const url = new URL('singleProjectDets.html', window.location.origin);
    url.searchParams.append('id', id);
    window.location.href = url.toString();
}