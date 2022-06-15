import {React} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function BlogDetail() {
  const { id } = useParams();

  const handleClick = () => {
        async function deletePost() {
            await fetch(`http://localhost:3000/api/blog/${id}`, { method: 'DELETE' });
        }
    
        deletePost();
  }
  return (
    <div>
        <button btn-danger onClick={handleClick}>Delete!</button>
    </div>
  )
}

export default BlogDetail