document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const form = document.getElementById('registrationForm');

    nextBtn.addEventListener('click', function() {
        page1.classList.remove('active');
        page2.classList.add('active');
    });

    prevBtn.addEventListener('click', function() {
        page2.classList.remove('active');
        page1.classList.add('active');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        form.reset();
        page1.classList.add('active');
        page2.classList.remove('active');
    });
});


