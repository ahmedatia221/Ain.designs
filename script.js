document.addEventListener('DOMContentLoaded', function() {
    // جلب العناصر من الـ HTML
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // التأكد من وجود العناصر قبل إضافة الـ event listeners
    if (hamburger && navLinks) {
        // إضافة مستمع حدث (event listener) لزر الهامبرغر
        hamburger.addEventListener('click', function() {
            // تبديل الكلاس 'active' على قائمة التنقل
            // هذا الكلاس سيتم استخدامه في الـ CSS لإظهار/إخفاء القائمة
            navLinks.classList.toggle('active');
        });

        // هذا الجزء اختياري: لإخفاء القائمة عند الضغط على أحد الروابط فيها
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // تفعيل روابط تبديل اللغة (اختياري - للتحكم في الكلاس النشط فقط)
    const langSwitchLinks = document.querySelectorAll('.lang-switch a');
    langSwitchLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            langSwitchLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // تفعيل تأثير التمرير السلس (Smooth Scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
