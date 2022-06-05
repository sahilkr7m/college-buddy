import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function BlogDetail() {
  const { id } = useParams();
  return (
    <div>
        <form action={`http://localhost:3000/api/blog/${id}`} method='delete' >
            <button btn-danger>Delete!</button>
        </form>
    </div>
  )
}

export default BlogDetail