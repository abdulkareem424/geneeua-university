document.addEventListener('DOMContentLoaded', () => {
    const courseItems = document.querySelectorAll('.course-item');
    const teamItems = document.querySelectorAll('.team-item');
    const courseInfoPopup = document.getElementById('course-info');
    const teamInfoPopup = document.getElementById('team-info');

    courseItems.forEach(item => {
        item.addEventListener('click', () => {
            courseInfoPopup.textContent = item.dataset.info;
            courseInfoPopup.classList.add('active');
            setTimeout(() => {
                courseInfoPopup.classList.remove('active');
            }, 3000);
        });
    });

    teamItems.forEach(item => {
        item.addEventListener('click', () => {
            teamInfoPopup.textContent = item.dataset.info;
            teamInfoPopup.classList.add('active');
            setTimeout(() => {
                teamInfoPopup.classList.remove('active');
            }, 3000);
        });
    });
});
