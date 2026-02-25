(function () {
    // ── DOM References ──
    var scrollProgress = document.querySelector('.scroll-progress');
    var currentYearSpan = document.getElementById('current-year');
    var viewHome = document.getElementById('view-home');
    var viewProject = document.getElementById('view-project');
    var routeAnnouncer = document.getElementById('route-announcer');
    var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    var mobileNav = document.querySelector('.mobile-nav');

    var activeFilters = { role: 'all', category: 'all' };
    var homeScrollPosition = 0;
    var isTransitioning = false;
    var originalTitle = document.title;
    var originalDescription = document.querySelector('meta[name="description"]');
    var originalOgTitle = document.querySelector('meta[property="og:title"]');
    var originalDescContent = originalDescription ? originalDescription.getAttribute('content') : '';
    var originalOgTitleContent = originalOgTitle ? originalOgTitle.getAttribute('content') : '';

    // ── DOM Helpers ──

    function el(tag, attrs, children) {
        var node = document.createElement(tag);
        if (attrs) {
            Object.keys(attrs).forEach(function (key) {
                if (key === 'className') {
                    node.className = attrs[key];
                } else if (key === 'textContent') {
                    node.textContent = attrs[key];
                } else if (key === 'style') {
                    Object.assign(node.style, attrs[key]);
                } else {
                    node.setAttribute(key, attrs[key]);
                }
            });
        }
        if (children) {
            children.forEach(function (child) {
                if (typeof child === 'string') {
                    node.appendChild(document.createTextNode(child));
                } else if (child) {
                    node.appendChild(child);
                }
            });
        }
        return node;
    }

    function svgEl(paths, className) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('aria-hidden', 'true');
        if (className) svg.setAttribute('class', className);
        paths.forEach(function (d) {
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', d);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', 'currentColor');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            svg.appendChild(path);
        });
        return svg;
    }

    // ── Router ──

    function parseRoute() {
        var hash = location.hash || '#/';
        if (hash.indexOf('#/project/') === 0) {
            return { view: 'project', slug: hash.replace('#/project/', '') };
        }
        return { view: 'home', slug: null };
    }

    var sectionIds = ['about', 'experience', 'projects'];

    function handleRoute() {
        var route = parseRoute();
        var hash = location.hash || '';
        closeMobileNav();

        if (route.view === 'project' && route.slug) {
            showProjectDetail(route.slug);
            return;
        }

        // Check if hash is a section anchor (e.g. #about, #experience, #projects)
        var sectionId = hash.replace('#', '');
        var isSection = sectionIds.indexOf(sectionId) !== -1;

        if (isSection && viewHome.style.display !== 'none') {
            // Already on home view — just scroll to the section
            var target = document.getElementById(sectionId);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        if (isSection && viewHome.style.display === 'none') {
            // On detail page — switch to home then scroll
            showHomeView();
            setTimeout(function () {
                var target = document.getElementById(sectionId);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }, 250);
            return;
        }

        showHomeView();
    }

    function fadeOut(element, callback) {
        if (isTransitioning) return;
        isTransitioning = true;
        element.classList.add('view-fade-out');
        setTimeout(function () {
            callback();
            isTransitioning = false;
        }, 200);
    }

    function fadeIn(element) {
        element.classList.remove('view-fade-out');
        element.classList.add('view-fade-in');
    }

    function updateSEO(project) {
        if (project) {
            document.title = project.title + ' — Hunter Nilsen';
            if (originalDescription) originalDescription.setAttribute('content', project.summary);
            if (originalOgTitle) originalOgTitle.setAttribute('content', project.title + ' — Hunter Nilsen');
        } else {
            document.title = originalTitle;
            if (originalDescription) originalDescription.setAttribute('content', originalDescContent);
            if (originalOgTitle) originalOgTitle.setAttribute('content', originalOgTitleContent);
        }
    }

    function showHomeView() {
        var doSwitch = function () {
            viewProject.style.display = 'none';
            while (viewProject.firstChild) viewProject.removeChild(viewProject.firstChild);
            viewHome.style.display = '';
            fadeIn(viewHome);
            document.querySelector('.footer').style.display = '';
            window.scrollTo(0, homeScrollPosition);
            updateSEO(null);
            updateActiveNav();
            routeAnnouncer.textContent = 'Returned to portfolio home';
        };

        if (viewProject.style.display !== 'none') {
            fadeOut(viewProject, doSwitch);
        } else {
            doSwitch();
        }
    }

    function showProjectDetail(slug) {
        var project = null;
        var projectIndex = -1;
        for (var i = 0; i < window.PROJECT_DATA.length; i++) {
            if (window.PROJECT_DATA[i].slug === slug) {
                project = window.PROJECT_DATA[i];
                projectIndex = i;
                break;
            }
        }
        if (!project) {
            location.hash = '#/';
            return;
        }

        homeScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        var footer = document.querySelector('.footer');

        var doSwitch = function () {
            viewHome.style.display = 'none';
            if (footer) footer.style.display = 'none';
            while (viewProject.firstChild) viewProject.removeChild(viewProject.firstChild);
            viewProject.appendChild(buildProjectDetail(project, projectIndex));
            viewProject.style.display = '';
            fadeIn(viewProject);
            window.scrollTo(0, 0);

            var heading = viewProject.querySelector('.detail-title');
            if (heading) heading.focus();

            updateSEO(project);
            routeAnnouncer.textContent = 'Viewing project: ' + project.title;
        };

        if (viewHome.style.display !== 'none') {
            fadeOut(viewHome, doSwitch);
        } else {
            // Already on a detail page, just swap content
            if (footer) footer.style.display = 'none';
            while (viewProject.firstChild) viewProject.removeChild(viewProject.firstChild);
            viewProject.appendChild(buildProjectDetail(project, projectIndex));
            window.scrollTo(0, 0);
            var heading = viewProject.querySelector('.detail-title');
            if (heading) heading.focus();
            updateSEO(project);
            routeAnnouncer.textContent = 'Viewing project: ' + project.title;
        }
    }

    function buildProjectDetail(project, projectIndex) {
        // Back button
        var backLink = el('a', { href: '#/', className: 'detail-back' }, [
            svgEl(['M19 12H5M12 19l-7-7 7-7']),
            'Back to Portfolio'
        ]);

        // Title
        var title = el('h1', { className: 'detail-title', tabindex: '-1', textContent: project.title });

        // Tagline
        var tagline = el('p', { className: 'detail-tagline', textContent: project.detail.tagline });

        // Tags row
        var roleBadge = el('span', { className: 'role-badge ' + project.role, textContent: project.roleLabel });
        var tagEls = [roleBadge];
        project.tags.forEach(function (t) {
            tagEls.push(el('span', { className: 'category-tag', textContent: t }));
        });
        var tagsRow = el('div', { className: 'detail-tags' }, tagEls);

        var header = el('div', { className: 'detail-header' }, [title, tagline, tagsRow]);

        // Metrics
        var metricCards = project.detail.metrics.map(function (m) {
            return el('div', { className: 'metric-card' }, [
                el('div', { className: 'metric-value', textContent: m.value }),
                el('div', { className: 'metric-label', textContent: m.label })
            ]);
        });
        var metricsGrid = el('div', { className: 'detail-metrics' }, metricCards);

        // The Problem
        var problemSection = el('div', { className: 'detail-section' }, [
            el('h2', { textContent: 'The Problem' }),
            el('p', { textContent: project.detail.problem })
        ]);

        // The Solution
        var impactItems = project.impactAreas.map(function (area) {
            return el('li', { textContent: area });
        });
        var solutionSection = el('div', { className: 'detail-section' }, [
            el('h2', { textContent: 'The Solution' }),
            el('p', { textContent: project.detail.solution }),
            el('h3', {
                textContent: 'Impact Areas',
                style: { fontSize: '16px', fontWeight: '600', marginTop: '20px', marginBottom: '8px' }
            }),
            el('ul', { className: 'impact-list' }, impactItems)
        ]);

        // Building the Solution
        var buildingSection = el('div', { className: 'detail-section' }, [
            el('h2', { textContent: 'Building the Solution' }),
            el('p', { textContent: project.detail.building })
        ]);

        // Results & Impact
        var resultsSection = el('div', { className: 'detail-section' }, [
            el('h2', { textContent: 'Results & Impact' }),
            el('p', { textContent: project.detail.results })
        ]);

        // Next/Previous navigation
        var data = window.PROJECT_DATA;
        var prevProject = projectIndex > 0 ? data[projectIndex - 1] : null;
        var nextProject = projectIndex < data.length - 1 ? data[projectIndex + 1] : null;

        var navChildren = [];
        if (prevProject) {
            var prevLink = el('a', { href: '#/project/' + prevProject.slug, className: 'detail-nav-link prev' }, [
                el('span', { className: 'detail-nav-label', textContent: 'Previous' }),
                el('span', { className: 'detail-nav-title', textContent: prevProject.title })
            ]);
            navChildren.push(prevLink);
        }
        if (nextProject) {
            var nextLink = el('a', { href: '#/project/' + nextProject.slug, className: 'detail-nav-link next' }, [
                el('span', { className: 'detail-nav-label', textContent: 'Next' }),
                el('span', { className: 'detail-nav-title', textContent: nextProject.title })
            ]);
            navChildren.push(nextLink);
        }
        var detailNav = navChildren.length > 0 ? el('nav', { className: 'detail-nav', 'aria-label': 'Project navigation' }, navChildren) : null;

        // Assemble
        var containerChildren = [
            backLink, header, metricsGrid,
            problemSection, solutionSection, buildingSection, resultsSection
        ];
        if (detailNav) containerChildren.push(detailNav);

        var container = el('div', { className: 'container' }, containerChildren);

        return el('div', { className: 'detail-view' }, [container]);
    }

    // ── Scroll Progress ──

    function updateScrollProgress() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        scrollProgress.style.width = pct + '%';
        scrollProgress.setAttribute('aria-valuenow', Math.round(pct));
    }

    // ── Filtering ──

    function filterProjects() {
        var cards = document.querySelectorAll('#view-home .project-card');
        var roleFilter = activeFilters.role;
        var categoryFilter = activeFilters.category;
        var visibleCount = 0;

        cards.forEach(function (card) {
            var roleMatch = roleFilter === 'all' || card.getAttribute('data-role') === roleFilter;
            var catMatch = categoryFilter === 'all' || card.getAttribute('data-category') === categoryFilter;
            if (roleMatch && catMatch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        updateSectionVisibility();

        // Show/hide empty state
        var emptyState = document.getElementById('filter-empty-state');
        if (emptyState) {
            emptyState.style.display = visibleCount === 0 ? '' : 'none';
        }
    }

    function updateSectionVisibility() {
        var sections = document.querySelectorAll('#view-home .project-category');
        sections.forEach(function (section) {
            var cards = section.querySelectorAll('.project-card');
            var visible = Array.from(cards).some(function (c) { return !c.classList.contains('hidden'); });
            section.style.display = visible ? '' : 'none';
        });
    }

    function handleFilterClick(event) {
        var btn = event.currentTarget;
        var type = btn.getAttribute('data-filter-type');
        var value = btn.getAttribute('data-filter-value');

        document.querySelectorAll('[data-filter-type="' + type + '"]').forEach(function (b) {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        activeFilters[type] = value;
        filterProjects();
    }

    // ── Mobile Nav ──

    function toggleMobileNav() {
        var isOpen = mobileNav.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    }

    function closeMobileNav() {
        if (mobileNav) {
            mobileNav.classList.remove('open');
            if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    }

    // ── Active Nav Highlighting ──

    function updateActiveNav() {
        var navLinks = document.querySelectorAll('.header-nav a');
        if (!navLinks.length) return;

        // Only highlight on home view
        if (viewHome.style.display === 'none') {
            navLinks.forEach(function (link) { link.classList.remove('active'); });
            return;
        }

        var sections = ['about', 'experience', 'projects'];
        var current = '';
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var offset = 120;

        for (var i = sections.length - 1; i >= 0; i--) {
            var section = document.getElementById(sections[i]);
            if (section && section.offsetTop - offset <= scrollTop) {
                current = sections[i];
                break;
            }
        }

        navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === '#' + current) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // ── Intersection Observer ──

    function setupIntersectionObserver() {
        var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var cards = document.querySelectorAll('#view-home .project-card');

        if (prefersReducedMotion) {
            cards.forEach(function (card) {
                card.style.opacity = '1';
                card.style.transform = 'none';
            });
            return;
        }

        // Hide cards before observing so animation goes 0→1 without flash
        cards.forEach(function (card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(24px)';
        });

        var options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

        var sections = document.querySelectorAll('#view-home .project-category');
        sections.forEach(function (section) {
            var sectionCards = section.querySelectorAll('.project-card');
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        Array.from(sectionCards).forEach(function (card, i) {
                            setTimeout(function () {
                                card.classList.add('fade-in-up');
                            }, i * 80);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            observer.observe(section);
        });
    }

    // ── Init ──

    function init() {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }

        window.addEventListener('scroll', function () {
            updateScrollProgress();
            updateActiveNav();
        });
        window.addEventListener('resize', updateScrollProgress);
        window.addEventListener('hashchange', handleRoute);

        document.querySelectorAll('.filter-btn').forEach(function (btn) {
            btn.addEventListener('click', handleFilterClick);
        });

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMobileNav);
        }

        if (mobileNav) {
            mobileNav.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', closeMobileNav);
            });
        }

        // Nav links: if on detail page, go home first then scroll to section
        document.querySelectorAll('.header-nav a, .mobile-nav a').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var route = parseRoute();
                if (route.view === 'project') {
                    e.preventDefault();
                    var targetId = link.getAttribute('href').replace('#', '');
                    location.hash = '#/';
                    // After home view renders, scroll to section
                    setTimeout(function () {
                        var target = document.getElementById(targetId);
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }, 250);
                }
            });
        });

        setupIntersectionObserver();
        updateScrollProgress();
        filterProjects();
        handleRoute();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
