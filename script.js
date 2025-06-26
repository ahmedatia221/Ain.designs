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
        // (مفيد في صفحات الويب ذات الصفحة الواحدة أو لتجربة مستخدم أفضل على الموبايل)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // فقط أخفِ القائمة إذا كانت نشطة (مرئية) حالياً
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // --- تفعيل روابط تبديل اللغة (اختياري - للتحكم في الكلاس النشط فقط) ---
    // إذا كنت تخطط لتبديل محتوى الصفحة فعليًا بناءً على اللغة، فسيحتاج هذا إلى منطق جافا سكريبت أكثر تعقيدًا.
    // هذا الجزء فقط يقوم بتغيير الكلاس 'active' لتحديد اللغة المختارة بصريًا.
    const langSwitchLinks = document.querySelectorAll('.lang-switch a');
    langSwitchLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // منع السلوك الافتراضي للرابط (عدم الانتقال لصفحة أخرى)
            
            // إزالة الكلاس 'active' من جميع روابط اللغة
            langSwitchLinks.forEach(l => l.classList.remove('active'));
            
            // إضافة الكلاس 'active' للرابط الذي تم النقر عليه
            link.classList.add('active');

            // يمكنك إضافة منطق هنا لتغيير محتوى الصفحة إلى اللغة المطلوبة
            // console.log(`اللغة المختارة: ${link.textContent.trim()}`);
        });
    });

    // --- تفعيل تأثير التمرير السلس (Smooth Scrolling) ---
    // هذا الكود يجعل الانتقال لأقسام الصفحة عند الضغط على روابط التنقل سلسًا بدلاً من القفز المفاجئ.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // منع السلوك الافتراضي للرابط (القفز المفاجئ)

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // استخدام scrollIntoView مع سلوك 'smooth'
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});