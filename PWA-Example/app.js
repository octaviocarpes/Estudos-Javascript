const main = document.querySelector('main');

window.addEventListener('load',e =>{
    console.log("updateBlogs!")
    updateBlogs();
    if('serviceWorker' in navigator){
        try {
            navigator.serviceWorker.register('sw.js');
            console.log('SW Registered');
        } catch (error) {
            console.log('SW Failed');
        }
    }
});

async function updateBlogs(){
    const res = await fetch(`https://pwa-blog-api-example.herokuapp.com/blogs`);
    const json = await res.json();
    main.innerHTML = json.map(createBlog).join('\n');
}

function createBlog(blog){
    return `
        <div class="blog">
            <a href="${blog.blogUrl}">
                <img class="blog-img" src="${blog.blogImgUrl}">
            </a>
            <h2>${blog.blogName}</h2>
        </div>
    `;
}
