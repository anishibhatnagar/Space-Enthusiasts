let threads = [
    { title: 'The Latest on Mars Exploration', replies: [], likes: 10, dislikes: 2, reported: false },
    { title: 'Black Holes Explained', replies: [], likes: 5, dislikes: 1, reported: false },
    { title: 'Future of Space Travel', replies: [], likes: 15, dislikes: 0, reported: false },
    { title: 'The Search for Extraterrestrial Life', replies: [], likes: 8, dislikes: 3, reported: false },
    { title: 'Understanding Dark Matter', replies: [], likes: 12, dislikes: 4, reported: false },
];

function createThread() {
    const title = prompt('Enter thread title:');
    if (title) {
        const newThread = {
            title: title,
            replies: [],
            likes: 0,
            dislikes: 0,
            reported: false
        };
        threads.push(newThread);
        renderThreads();
    }
}

function renderThreads() {
    const threadList = document.getElementById('thread-list');
    threadList.innerHTML = '';
    threads.forEach((thread, index) => {
        const threadItem = document.createElement('div');
        threadItem.classList.add('thread-item');
        threadItem.innerHTML = `
            <h3>${thread.title}</h3>
            <div class="thread-actions">
                <span class="like" onclick="likeThread(${index})">Like (${thread.likes})</span>
                <span class="dislike" onclick="dislikeThread(${index})">Dislike (${thread.dislikes})</span>
                <span class="report" onclick="reportThread(${index})">${thread.reported ? 'Reported' : 'Report'}</span>
            </div>
        `;
        threadList.appendChild(threadItem);
    });
}

function searchThreads() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredThreads = threads.filter(thread => thread.title.toLowerCase().includes(query));
    renderFilteredThreads(filteredThreads);
}

function renderFilteredThreads(filteredThreads) {
    const threadList = document.getElementById('thread-list');
    threadList.innerHTML = '';
    filteredThreads.forEach((thread, index) => {
        const threadItem = document.createElement('div');
        threadItem.classList.add('thread-item');
        threadItem.innerHTML = `
            <h3>${thread.title}</h3>
            <div class="thread-actions">
                <span class="like" onclick="likeThread(${index})">Like (${thread.likes})</span>
                <span class="dislike" onclick="dislikeThread(${index})">Dislike (${thread.dislikes})</span>
                <span class="report" onclick="reportThread(${index})">${thread.reported ? 'Reported' : 'Report'}</span>
            </div>
        `;
        threadList.appendChild(threadItem);
    });
}

function likeThread(index) {
    threads[index].likes++;
    renderThreads();
}

function dislikeThread(index) {
    threads[index].dislikes++;
    renderThreads();
}

function reportThread(index) {
    threads[index].reported = true;
    renderThreads();
}

// Initial render of threads
renderThreads();
