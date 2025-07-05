
import { useParams,Link } from 'react-router-dom'

const Post = () => {

  return (
    <div>
       <ul>
        <Link to="/post/1"><li>POST 1</li></Link>
        <Link to="/post/2"><li>POST 2</li></Link>
        <Link to="/post/3"><li>POST 3</li></Link>
       </ul>
    </div>
  )
}

export default Post
