// get header template from header.html
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;

        const contactBtn = document.querySelector('.header-item:last-child');
        contactBtn.style.cursor = 'pointer';
        contactBtn.addEventListener('click', () => {
            const footer = document.getElementById('footer-container');
            footer.scrollIntoView({ behavior: 'smooth' });
        });
    })
    // fallback case
    .catch(error => {
        console.error('Error loading header elements:', error);
        document.getElementById('header-container').innerHTML = '<div class="header"><span class="header-title">ERNST NoLTE</span></div>'
    })