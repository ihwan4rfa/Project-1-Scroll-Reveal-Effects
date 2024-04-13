// ! Mengatur gerakan dan posisi mouse
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})

// ! Efek scale saat hover elemen a
const mediaIcons = document.querySelectorAll('a');
mediaIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        document.querySelector('.cursor').style.width = '70px';
        document.querySelector('.cursor').style.height = '70px';
    });

    icon.addEventListener('mouseout', () => {
        document.querySelector('.cursor').style.width = '30px';
        document.querySelector('.cursor').style.height = '30px';
    });
});

// ! Efek ease pada setiap section
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 300
});

ScrollReveal().reveal('.main-title, .section-title', { origin: 'left' })
ScrollReveal().reveal('.sec-01 .image', { delay: 400, origin: 'bottom' })
ScrollReveal().reveal('.text-box, .info', { delay: 500, origin: 'right' })
ScrollReveal().reveal('.media-icons i', { delay: 200, origin: 'bottom', interval: 100 })
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 400, origin: 'top' })
ScrollReveal().reveal('.media-info li', { delay: 400, origin: 'left', interval: 100 })