//** 50/100
function attachEvents() {
    const btnLoadPostsRef = document.getElementById(`btnLoadPosts`);
    const btnViewPost = document.getElementById(`btnViewPost`);
    const selectPostsRef = document.getElementById(`posts`);
    const postRef = document.getElementById(`post-title`);
    const postbodyRef = document.getElementById(`post-body`);
    const postCommentsRef = document.getElementById(`post-comments`);

    let URL = {
        posts: `http://localhost:3030/jsonstore/blog/posts`,
        comments: `http://localhost:3030/jsonstore/blog/comments`
    }

    btnLoadPostsRef.addEventListener(`click`, onLoad);
    btnViewPost.addEventListener(`click`, onView);


    async function onLoad(event) {
        let response = await fetch(URL.posts);
        let data = await response.json();

        selectPostsRef.innerHTML = "";

        for (let row of Object.values(data)) {
            let option = document.createElement(`option`);
            option.textContent = row.title;
            option.value = row.id;
            selectPostsRef.appendChild(option);
        }
    }

    async function onView(event) {
        let currentPostId = selectPostsRef.value;
        let responsePost = await fetch(URL.posts + "/" + currentPostId);
        let dataPost = await responsePost.json();

        let responseComments = await fetch(URL.comments);
        let dataComments = await responseComments.json();
      
        let filteredComments = Object.values(dataComments).filter(x => x.postId == currentPostId);

        postCommentsRef.innerHTML = "";

        postRef.textContent = dataPost.title;
        postbodyRef.textContent = dataPost.body;

        for (let comment of filteredComments) {
            let li = document.createElement(`li`);
            li.setAttribute("id", comment.id);
            li.textContent = comment.text;
            postCommentsRef.appendChild(li);
        }
    }
}

attachEvents();

//** 100/100
// function attachEvents() {
//     const postsSelect = document.getElementById('posts'),
//         postH1 = document.getElementById('post-title'),
//         postP = document.getElementById('post-body'),
//         host = 'http://localhost:3030/jsonstore/blog'

//     let posts

//     document.getElementById('btnLoadPosts').addEventListener('click', async () => {
//         posts = await get('/posts')

//         postsSelect.innerHTML = ''
//         for (const p of posts) {
//             postsSelect.appendChild(makePostOption(p.id, p.title))
//         }
//     })

//     document.getElementById('btnViewPost').addEventListener('click', async () => {
//         const post = posts.find(p => p.id == postsSelect.value)

//         postH1.textContent = post.title
//         postP.textContent = post.body
//     })

//     function makePostOption(value, text) {
//         const option = document.createElement('option')
//         option.value = value
//         option.text = text
//         return option
//     }

//     async function get(url) {
//         return (await fetch(host + url)).json()
//     }
// }

// attachEvents();