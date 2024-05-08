// 여러 슬로건을 동일한 위치에서 순차적으로 애니메이션
let currentSlogan = 0;

function showNextSlogan() {
    const slogans = document.querySelectorAll('.slogan');
    slogans.forEach((slogan, index) => {
        slogan.classList.remove('visible');
        slogan.classList.add('hidden');
    });

    slogans[currentSlogan].classList.remove('hidden');
    slogans[currentSlogan].classList.add('visible');
    currentSlogan = (currentSlogan + 1) % slogans.length;
}

function startSloganAnimation() {
    showNextSlogan();
    setInterval(showNextSlogan, 4000); // 3초마다 슬로건 전환
}

// 스크롤 이벤트로 각 섹션 애니메이션 처리
function handleScroll() {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.9;

        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

document.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
    startSloganAnimation();
});
