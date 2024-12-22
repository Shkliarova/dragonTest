const faqItems = document.querySelectorAll('.faq__question-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });


const sidebarToggle = document.querySelector('.sidebar__icon');
const dropdownList = document.querySelector('.sidebar__list-drop-down');

sidebarToggle.addEventListener('click', () => {
    if (dropdownList.classList.contains('collapsed')) {
        dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
        dropdownList.classList.remove('collapsed');
        sidebarToggle.classList.remove('activated');
    } else {
        dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
        setTimeout(() => {
            dropdownList.style.maxHeight = '0';
        }, 0);
        dropdownList.classList.add('collapsed');
        sidebarToggle.classList.add('activated');
    }
});