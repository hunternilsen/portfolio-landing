(function () {
    const scrollProgress = document.querySelector('.scroll-progress');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectSections = document.querySelectorAll('.project-section');
    const currentYearSpan = document.getElementById('current-year');

    let activeFilters = {
        role: 'all',
        category: 'all'
    };

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        scrollProgress.style.width = scrollPercentage + '%';
        scrollProgress.setAttribute('aria-valuenow', Math.round(scrollPercentage));
    }

    function filterProjects() {
        const roleFilter = activeFilters.role;
        const categoryFilter = activeFilters.category;

        projectCards.forEach(card => {
            const cardRole = card.getAttribute('data-role');
            const cardCategory = card.getAttribute('data-category');

            const roleMatch = roleFilter === 'all' || cardRole === roleFilter;
            const categoryMatch = categoryFilter === 'all' || cardCategory === categoryFilter;

            if (roleMatch && categoryMatch) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        updateSectionVisibility();
    }

    function updateSectionVisibility() {
        projectSections.forEach(section => {
            const cards = section.querySelectorAll('.project-card');
            const visibleCards = Array.from(cards).filter(card => !card.classList.contains('hidden'));

            if (visibleCards.length === 0) {
                section.classList.add('hidden');
            } else {
                section.classList.remove('hidden');
            }
        });
    }

    function handleFilterClick(event) {
        const button = event.currentTarget;
        const filterType = button.getAttribute('data-filter-type');
        const filterValue = button.getAttribute('data-filter-value');

        const groupButtons = document.querySelectorAll(`[data-filter-type="${filterType}"]`);
        groupButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });

        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');

        activeFilters[filterType] = filterValue;

        filterProjects();
    }

    function setupIntersectionObserver() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            projectCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
            return;
        }

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        projectSections.forEach(section => {
            const sectionCards = section.querySelectorAll('.project-card');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = Array.from(sectionCards);
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('fade-in-up');
                            }, index * 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            observer.observe(section);
        });
    }

    function init() {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }

        window.addEventListener('scroll', updateScrollProgress);
        window.addEventListener('resize', updateScrollProgress);

        filterButtons.forEach(button => {
            button.addEventListener('click', handleFilterClick);
        });

        setupIntersectionObserver();
        updateScrollProgress();
        filterProjects();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();