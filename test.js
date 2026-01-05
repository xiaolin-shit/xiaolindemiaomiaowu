// 1. 移动端菜单切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取菜单相关元素
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // 菜单切换点击事件
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            // 切换移动端菜单的显示/隐藏
            mobileMenu.classList.toggle('hidden');
            // 切换菜单图标（汉堡包 ↔ 关闭）
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. 滚动时区域渐显功能（监听滚动事件）
    const fadeSections = document.querySelectorAll('.section-fade');

    function checkSectionVisibility() {
        // 获取视口高度
        const viewportHeight = window.innerHeight;
        // 遍历所有需要渐显的区域
        fadeSections.forEach(section => {
            // 获取元素相对于视口的位置
            const sectionTop = section.getBoundingClientRect().top;
            // 当元素进入视口（距离顶部100px内）时，添加可见类
            if (sectionTop < viewportHeight - 100) {
                section.classList.add('section-visible');
            }
        });
    }

    // 初始加载时检查一次
    checkSectionVisibility();
    // 滚动时实时检查
    window.addEventListener('scroll', checkSectionVisibility);

    // 3. 导航栏粘性增强（滚动时调整样式）
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md');
            header.classList.remove('shadow-sm');
        } else {
            header.classList.remove('shadow-md');
            header.classList.add('shadow-sm');
        }
    });

    // 4. 移动端菜单点击链接后自动关闭
    const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});