import { useState , useEffect } from "react"
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([{
        _id : '1' , 
        image : 'https://plus.unsplash.com/premium_photo-1791370944406-e547a7e1d9b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' ,
        caption : 'Neon City'
    }])

    useEffect(() => {

        axios.get('http://localhost:3000/posts')
        .then ((res) =>{
            setPosts(res.data.posts)
        })

    } , [])
  return (
    <div>
      <section className="feed-section">
        <h1>Feed</h1>
        {
            posts.length > 0 ? (
                posts.map( (post) => (
                    <div key = {post._id} className="post-card" >
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
            ) )
            ) : (
                <h1>No Posts Available</h1>
            )

        }

      </section>
    </div>
  )
}

export default Feed
