document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-fill');

    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';

        setTimeout(() => {
            bar.style.width = width;
        }, 500 + index * 200);
    });

    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('course-button')) {
                const button = this.querySelector('.course-button');
                button.click();
            }
        });
    });
});