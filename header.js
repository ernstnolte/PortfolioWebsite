// get header template from header.html
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;

        // get active page and header items
        const activePage = window.location.pathname.split('/').pop() || 'index.html';
        const headerItems = document.querySelectorAll('.header-item');

        // loop through header items and apply append active style to active page
        headerItems.forEach(item => {
            if (item.getAttribute('href') === activePage) {
                item.classList.add('active');
            }
        });

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