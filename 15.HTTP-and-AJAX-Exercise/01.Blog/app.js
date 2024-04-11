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
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts'
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments'

    const loadButtonElement = document.getElementById('btnLoadPosts');
    loadButtonElement.addEventListener('click', loadAllPosts);

    const selectedPostElement = document.getElementById('posts');

    const viewButtonElement = document.getElementById('btnViewPost');
    viewButtonElement.addEventListener('click', viewPost);

    let allPosts = {};

    async function loadAllPosts(event) {

        selectedPostElement.innerHTML = '';

        const allPostsResponse = await fetch(postsURL);
        allPosts = await allPostsResponse.json();

        for (let postArr of Object.entries(allPosts)) {

            let optionElement = document.createElement('option');
            optionElement.textContent = postArr[1].title;
            optionElement.value = postArr[0];
            selectedPostElement.appendChild(optionElement);
        }
    }

    async function viewPost(event) {

        const currentPostObject = document.getElementById('posts');
        let currentPostComments = [];

        let allCommentsResponse = await fetch(commentsURL);
        let allComments = await allCommentsResponse.json();

        for (let commentArr of Object.entries(allComments)) {
            if (commentArr[1].postId === currentPostObject.value) {
                currentPostComments.push(commentArr[1].text);
            }
        }

        let selectedPost = allPosts[currentPostObject.value];

        let titleElement = document.getElementById('post-title');
        titleElement.textContent = selectedPost.title;

        let postContentElement = document.getElementById('post-body');
        postContentElement.textContent = selectedPost.body;

        const ulElement = document.getElementById('post-comments');

        ulElement.innerHTML = '';

        for (let comment of currentPostComments) {
            
            let li = document.createElement('li');
            li.textContent = comment;
            ulElement.appendChild(li);
        }
    }
}

attachEvents();