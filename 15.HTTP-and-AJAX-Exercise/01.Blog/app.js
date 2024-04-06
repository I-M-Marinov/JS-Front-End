function attachEvents() {

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewPostButton = document.getElementById('btnViewPost');
    const selectPostElement = document.getElementById('posts');
    const postBodyElement = document.getElementById('post-body');
    const postComentsElement = document.getElementById('post-comments');
    const postTitleElement = document.getElementById('post-title');

    loadPostsButton.addEventListener('click', () => {

        fetch(postsUrl)
            .then(response => response.json())
            .then(posts => {
                Object.values(posts)
                    .forEach(post => {
                        const optionElement = document.createElement('option');
                        optionElement.value = post.id;
                        optionElement.textContent = post.title;
                        selectPostElement.appendChild(optionElement);
                    });
            });
    });

    const commentsFragment = document.createDocumentFragment();

    viewPostButton.addEventListener('click', async () => {

        const selectedPostId = selectPostElement.value;
        selectPostElement.value = '';

        const postResponse = await fetch(`${postsUrl}/${selectedPostId}`);
        const selectedPost = await postResponse.json();

        postBodyElement.textContent = selectedPost.body;
        postTitleElement.textContent = selectedPost.title;

        const commentsResponse = await fetch(commentsUrl);
        const comments = await commentsResponse.json();

       Object.values(comments)
            .filter(comment => comment.postId === selectedPostId)
            .forEach(comment => {
                const liElement = document.createElement('li');
                liElement.id = comment.id;
                liElement.textContent = comment.text;

                commentsFragment.appendChild(liElement);
            });
        postComentsElement.appendChild(commentsFragment);
    });


}

attachEvents();