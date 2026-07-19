function initTagTickers() {
    const isMobile = window.matchMedia('(max-width: 720px)').matches;

    document.querySelectorAll('.section-hero p').forEach(container => {
        const existingTrack = container.querySelector('.ticker-track');

        if (!isMobile) {
            if (existingTrack) {
                while (existingTrack.firstChild) {
                    container.insertBefore(existingTrack.firstChild, existingTrack);
                }
                existingTrack.remove();
            }
            delete container.dataset.tickerInitialized;
            return;
        }

        if (container.dataset.tickerInitialized === 'true') return;

        const track = document.createElement('span');
        track.className = 'ticker-track';

        const nodes = Array.from(container.childNodes);
        nodes.forEach(node => track.appendChild(node));
        container.appendChild(track);

        const clones = Array.from(track.children).map(node => node.cloneNode(true));
        clones.forEach(clone => track.appendChild(clone));

        container.dataset.tickerInitialized = 'true';
    });
}

window.addEventListener('DOMContentLoaded', initTagTickers);
window.addEventListener('resize', initTagTickers);
initTagTickers();