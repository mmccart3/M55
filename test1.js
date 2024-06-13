let myPosts = ['post1', 'post2', 'post3']
const allPosts = async () => {
    setTimeout(() => {
        myPosts.map((post) => console.log(post))
    },1000)
}

const createPost = async (post) => {
    setTimeout(() => {
        myPosts.push(`${post}`);
    },2000)
}

const init = async () => {
    await createPost('Post 4')
    allPosts()
}

createPost('post4', allPosts)
init()
