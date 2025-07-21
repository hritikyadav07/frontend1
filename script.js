document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('feature-video');
    const playPauseBtn = document.getElementById('play-pause-btn');

    if (video && playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            video.play();
        });

        video.addEventListener('click', () => {
            if (!video.paused) {
                video.pause();
            }
        });

        video.addEventListener('play', () => {
            playPauseBtn.classList.add('playing');
        });

        video.addEventListener('pause', () => {
            playPauseBtn.classList.remove('playing');
        });
    }

    let slideIndex = 0;
    let slideInterval;

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("testimonial-slide");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        slideInterval = setTimeout(showSlides, 5000); 
    }

    function currentSlide(n) {
        clearTimeout(slideInterval);
        let i;
        let slides = document.getElementsByClassName("testimonial-slide");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex = n + 1;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        slideInterval = setTimeout(showSlides, 5000);
    }

    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = function() { currentSlide(i); }
    }

    showSlides();

    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('success-modal');
    const closeButton = document.querySelector('.close-button');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.classList.add('no-scroll');
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        });
    }

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });
});
