import axios from "axios"
import { useEffect, useState } from "react"
import Post from "./components/Post"
import AddPost from "./components/AddPost"

function App() {
  /*This exercise was done with the help of freeCodeCamp exercises */
  const [posts, setPosts] = useState([])
  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
  })

  useEffect(() => {
    //GET with Axios
    const fetchPost = async () => {
      try {
        let response = await client.get('?_limit=10')
        setPosts(response.data)
        console.log(response.data);
      } catch(error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [])
  //POST with Axios
  const addPosts = async (title, body) => {
    let response = await client.post('',{
      title,
      body
    });
    setPosts([response.data, ...posts])
  }
  //DELETE with Axios
  const deletePost = async (id) => {
    await client.delete(`${id}`);
    setPosts(posts.filter( post => {
      return post.id !== id;
    }));
  }

  return (
    <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]  from-orange-900 via-amber-100 to-orange-900 m-auto p-4">
      <h1 className="text-5xl m-5 ">Consuming REST API with Axios</h1>
      <AddPost addPosts = {addPosts}/>
      <section className="mt-3 mx-auto">
        <h2>Posts</h2>
        <div className="flex flex-wrap justify-center gap-2 p-6">
        {
          posts.map(post => (
              <Post
                key={post.id}
                id = {post.id}
                title = {post.title}
                body = {post.body}
                deletePost={deletePost}
              />
          ))
        }
        </div>
      </section>
    </div>
  )
}

export default App