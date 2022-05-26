import axios from "axios"

async function getData(user_id) {
    const users = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    return users.data
}


async function getPosts(user_id) {
    const posts = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
    return posts.data
}


async function getUserAndPosts(user_id) {
    const data = await getData(user_id);
    const posts = await getPosts(user_id)
    let dataAndPosts = {...data, ...posts}
    return dataAndPosts
}


export default getUserAndPosts;