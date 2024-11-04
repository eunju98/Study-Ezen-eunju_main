// GNB 메뉴 탭 활성화
const gotoLis = document.querySelectorAll('.goto li');
gotoLis.forEach((gotoLi) => {
    gotoLi.addEventListener('click', function () {
        gotoLis.forEach((li) => li.classList.remove('active'));
        this.classList.add('active');
    });
});

// 메뉴버튼 hover 시 전체 메뉴 보이기
const menuBtn = document.querySelector('.menu-btn');
const menuAll = document.querySelector('.menu-all');

menuBtn.addEventListener('mouseenter', () => (menuAll.style.display = 'block'));
menuBtn.addEventListener('mouseleave', () => (menuAll.style.display = 'none'));
menuAll.addEventListener('mouseenter', () => (menuAll.style.display = 'block'));
menuAll.addEventListener('mouseleave', () => (menuAll.style.display = 'none'));
