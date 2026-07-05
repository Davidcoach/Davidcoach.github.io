document.addEventListener('DOMContentLoaded', function () {
    const pubList = document.getElementById('publications-list');
    const pubYears = document.getElementById('pub-years');
    const pubTopics = document.getElementById('pub-topics');
    const btnSelected = document.getElementById('show-selected');
    const btnDate = document.getElementById('show-date');
    const btnTopic = document.getElementById('show-topic');
    const langButtons = document.querySelectorAll('[data-lang-toggle]');

    const topicLabels = {
        "Image Generation": "图像生成",
        "Image Editing": "图像编辑（精修、去噪）",
        "Video Editing": "视频编辑",
        "Multimodal Generative Models": "多模态生成模型"
    };
    const topicOrder = [
        "Image Generation",
        "Image Editing",
        "Video Editing",
        "Multimodal Generative Models"
    ];

    const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
    const primaryTopicOf = pub => pub.primaryTopic || (pub.topics && pub.topics[0]) || "";
    const discoveredTopics = [...new Set(publications.map(primaryTopicOf).filter(Boolean))];
    const topics = topicOrder
        .filter(topic => discoveredTopics.includes(topic))
        .concat(discoveredTopics.filter(topic => !topicOrder.includes(topic)));
    let currentView = 'selected';
    let currentLang = localStorage.getItem('siteLang') || 'en';

    function langText(en, zh) {
        return currentLang === 'zh' ? zh : en;
    }

    function topicText(topic) {
        return currentLang === 'zh' ? (topicLabels[topic] || topic) : topic;
    }

    function contributionText(type) {
        if (type === 'lead') return langText('First / Co-first Works', '一作 / 共一成果');
        return langText('Collaborative Works', '合作论文');
    }

    function leadPriority(pub) {
        const title = pub.title || '';
        if (title.startsWith('Oxygen TryOn')) return -1;
        if (title.startsWith('ToPMod') || title.startsWith('DFRetouch')) return 3;
        const badge = pub.badge || '';
        if (badge.includes('First author')) return 0;
        if (badge.includes('Co-first author')) return 1;
        return 2;
    }

    function sortLeadWorks(a, b) {
        const priorityDiff = leadPriority(a) - leadPriority(b);
        if (priorityDiff !== 0) return priorityDiff;
        if (b.year !== a.year) return b.year - a.year;
        return publications.indexOf(a) - publications.indexOf(b);
    }

    function setActive(button) {
        [btnSelected, btnDate, btnTopic].forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    }

    function renderControls() {
        pubYears.innerHTML = `<strong>${langText('Year', '年份')}:</strong> ` + years.map(y =>
            `<a href="#year-${y}" class="pub-year-link">${y}</a>`
        ).join(" / ");

        pubTopics.innerHTML = `<strong>${langText('Research Topics', '研究方向')}</strong>: ` +
            topics.map(t =>
                `<a href="#topic-${encodeURIComponent(t)}" class="pub-topic-link">${topicText(t)}</a>`
            ).join(" / ");
    }

    function scrollToPubList() {
        const anchor = document.getElementById('publications-anchor');
        if (anchor) anchor.scrollIntoView();
    }

    function renderSelected() {
        currentView = 'selected';
        setActive(btnSelected);
        const selectedPubs = publications.filter(p => p.selected);
        const leadPubs = selectedPubs.filter(p => p.contribution === 'lead').sort(sortLeadWorks);
        const collaborationPubs = selectedPubs.filter(p => p.contribution !== 'lead');
        pubList.innerHTML = `
            <div class="pub-group-stack">
                ${renderPubGroup('lead', leadPubs)}
                ${renderPubGroup('collaboration', collaborationPubs)}
            </div>
        `;
    }

    function renderPubGroup(type, pubs) {
        return `
            <section class="pub-group">
                <h3 class="pub-group-heading">${contributionText(type)}</h3>
                ${pubs.map(renderPub).join('')}
            </section>
        `;
    }

    function renderByDate() {
        currentView = 'date';
        setActive(btnDate);
        let html = '';
        years.forEach(year => {
            html += `<h3 id="year-${year}" class="pub-sticky-header">${year}</h3>`;
            html += publications.filter(p => p.year === year).map(renderPub).join('');
        });
        pubList.innerHTML = html;
    }

    function renderByTopic() {
        currentView = 'topic';
        setActive(btnTopic);
        let html = '';
        topics.forEach(topic => {
            const topicPubs = publications.filter(pub => primaryTopicOf(pub) === topic);
            html += `<h3 id="topic-${encodeURIComponent(topic)}" class="pub-sticky-header">${topicText(topic)}</h3>`;
            html += topicPubs.map(renderPub).join('');
        });
        pubList.innerHTML = html;
    }

    function rerenderCurrentView() {
        renderControls();
        if (currentView === 'date') renderByDate();
        else if (currentView === 'topic') renderByTopic();
        else renderSelected();
    }

    function renderPub(pub) {
        const description = currentLang === 'zh'
            ? (pub.descriptionZh || pub.description)
            : pub.description;
        const links = pub.links && pub.links.length
            ? `<span class="meta-sep">·</span><span class="publication-links">${pub.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">[${link.label}]</a>`).join(' ')}</span>`
            : '';
        const topicTags = pub.topics && pub.topics.length
            ? `<span class="meta-sep">·</span><span class="pub-tags">${pub.topics.map(topic => `<span class="pub-tag">${topicText(topic)}</span>`).join('')}</span>`
            : '';

        return `
            <article class="publication-card">
                <div class="pub-img-cell">
                    <img src="${pub.image}" alt="${pub.title}" class="pub-img${pub.imageClass ? ` ${pub.imageClass}` : ''}" loading="lazy">
                </div>
                <div class="pub-text-cell">
                    <div class="publication-title">${pub.title}</div>
                    <div class="publication-authors">${pub.authors}</div>
                    <div class="publication-meta">
                        <span class="publication-venue${pub.highlighted ? ' highlighted' : ''}">${pub.shortVenue || pub.venue + ', ' + pub.year}</span>
                        ${links}
                        ${topicTags}
                    </div>
                    ${pub.badge ? `<span class="pub-badge">${pub.badge}</span>` : ''}
                    ${description ? `<div class="publication-desc">${description}</div>` : ''}
                </div>
            </article>
        `;
    }

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('siteLang', lang);
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        document.body.classList.toggle('is-zh', lang === 'zh');
        langButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.langToggle === lang);
        });
        rerenderCurrentView();
    }

    btnSelected.onclick = function (event) {
        event.preventDefault();
        renderSelected();
        setTimeout(scrollToPubList, 0);
    };
    btnDate.onclick = function (event) {
        event.preventDefault();
        renderByDate();
        setTimeout(scrollToPubList, 0);
    };
    btnTopic.onclick = function (event) {
        event.preventDefault();
        renderByTopic();
        setTimeout(scrollToPubList, 0);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => applyLanguage(button.dataset.langToggle));
    });

    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('pub-year-link')) {
            event.preventDefault();
            renderByDate();
            setTimeout(() => {
                document.getElementById(event.target.getAttribute('href').slice(1)).scrollIntoView({ behavior: "smooth", block: "start" });
            }, 10);
        }
        if (event.target.classList.contains('pub-topic-link')) {
            event.preventDefault();
            renderByTopic();
            setTimeout(() => {
                document.getElementById(event.target.getAttribute('href').slice(1)).scrollIntoView({ behavior: "smooth", block: "start" });
            }, 10);
        }
    });

    applyLanguage(currentLang);
});
