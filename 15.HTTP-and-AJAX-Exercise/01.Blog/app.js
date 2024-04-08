/* 
Write a program for reading blog content. It needs to make requests to the server and display all blog posts and their comments.
Request URL’s:
Posts - http://localhost:3030/jsonstore/blog/posts
Comments - http://localhost:3030/jsonstore/blog/comments
Examples
The button with ID "btnLoadPosts" should make a GET request to "/posts". The response from the server will be an Object of objects.
 
Each object will be in the following format:
{
  body: {postBody},
  id: {postId},
  title: {postTitle} 
}
Create an <option> for each post using its object key as value and current object title property as text inside the node with ID "posts".

*/

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

        selectPostElement.innerHTML = '';

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
            }).catch(err => console.log(err.message));
    });

    const commentsFragment = document.createDocumentFragment();

    viewPostButton.addEventListener('click', async () => {

        const selectedPostId = selectPostElement.value;

        try {

        const postResponse = await fetch(`${postsUrl}/${selectedPostId}`);
        const selectedPost = await postResponse.json();

        postBodyElement.textContent = selectedPost.body;
        postTitleElement.textContent = selectedPost.title;
            
        } catch (error) {
            console.log(error.message);
        }

        try {
            
            const commentsResponse = await fetch(commentsUrl);
        const comments = await commentsResponse.json();

       Object.values(comments)
            .filter(comment => comment.postId === selectedPostId)
            .forEach(comment => {
                postComentsElement.innerHTML = '';
                const liElement = document.createElement('li');
                liElement.id = comment.id;
                liElement.textContent = comment.text;

                commentsFragment.appendChild(liElement);
            });
            postComentsElement.appendChild(commentsFragment);

        } catch (error) {
            console.log(error.message);
        }
    });


}

attachEvents();