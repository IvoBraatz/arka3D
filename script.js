// Garante que o scroll funcione no parallax
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.parallax-container');

    sections.forEach(section => {
        const building = section.querySelector('.building');
        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calcula o progresso dentro do viewport
        const progress = Math.min(Math.max((windowHeight - sectionRect.top) / windowHeight, 0), 1);

        // Define o movimento baseado no progresso
        const translateY = (1 - progress) * 100; // Progressão mais linear e suave
        building.style.transform = `translateY(${translateY}%)`;
    });
});
