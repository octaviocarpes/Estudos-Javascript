window.addEventListener('load',e =>{
    console.log("updateBlogs!")
    updateBlogs();
});

// async function updateBlogs() {
//    return [{"blogName":"Dev.to","blogUrl":"https://dev.to/","blogImgUrl":"https://pbs.twimg.com/profile_images/963989679237246977/0ccebuVz_400x400.jpg"},{"blogName":"Treehouse","blogUrl":"http://blog.teamtreehouse.com/","blogImgUrl":"https://pbs.twimg.com/profile_images/378800000120934863/af36998196339688895927c8adf0ed6d_400x400.png"},{"blogName":"Scotch","blogUrl":"https://scotch.io/","blogImgUrl":"https://avatars1.githubusercontent.com/u/2521724?s=280&v=4"},{"blogName":"Coding Horror","blogUrl":"https://blog.codinghorror.com/","blogImgUrl":"http://devstickers.com/assets/img/pro/imad.png"},{"blogName":"Daily JS","blogUrl":"https://medium.com/dailyjs","blogImgUrl":"https://pbs.twimg.com/profile_images/877477206418653184/W63ZlNa1_400x400.jpg"},{"blogName":"David Walsh","blogUrl":"https://davidwalsh.name/","blogImgUrl":"https://davidwalsh.name/wp-content/themes/punky/images/logo.png"},{"blogName":"Programmable Web","blogUrl":"https://www.programmableweb.com/","blogImgUrl":"https://static1.squarespace.com/static/5123c236e4b02be7ede3128a/t/513a583ce4b06017d0d6cc23/1362778173260/ProgrammableWeb+logo.jpg?format=300w"},{"blogName":"Martin Fowler","blogUrl":"https://martinfowler.com/bliki/","blogImgUrl":"https://martinfowler.com/mf-name-white.png"}]
// }
async function updateBlogs(){
    var responseText = 'Did not work';

    $.ajax({
        type:"GET",
        contentType: 'application/json',
        url:"https://pwa-blog-api-example.herokuapp.com/blogs",
       
        success: function(response){
            console.log(response);

        }
    });
}
