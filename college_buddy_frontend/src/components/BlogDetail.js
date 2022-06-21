import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://localhost:3000/api/blog/${id}`
      );
      response = await response.json();
      setDetail(response[0]);
    }
    fetchData();
  }, []);

  // const handleClick = () => {
  //       async function deletePost() {
  //           await fetch(`http://localhost:3000/api/blog/${id}`, { method: 'DELETE' });
  //       }
    
  //       deletePost();
  // }
  return (
    <div>
       {detail &&(
        <div>
          <h1>{detail.blog_data}</h1>
        </div>
       )}
    </div>
  )
}

export default BlogDetail