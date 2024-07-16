document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('image-popup');
    var popupImg = document.getElementById('popup-img');
    var closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.popup-trigger').forEach(function(img) {
        img.addEventListener('click', function() {
            popup.style.display = 'block';
            popupImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
