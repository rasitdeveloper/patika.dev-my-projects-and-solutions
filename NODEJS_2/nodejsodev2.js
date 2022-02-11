const posts = [
    { id: "1", content: "Post 1" },
    { id: "2", content: "Post 2" },
    { id: "3", content: "Post 3" },
];

const listPosts = () => {
    posts.map((post) => {
        console.log(post.content);
    });
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject('BIR HATA OLUSTU');
    });

    return promise1;
};

async function showPosts() {
    try {
        await addPost({ id: "4", content: "Post 4" });
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();