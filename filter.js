function filterNews(category) {
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}