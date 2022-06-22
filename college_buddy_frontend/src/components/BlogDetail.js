import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../service.css";

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
      {detail && (
        <div>

          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" /> */}
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <div class="project-info-box mt-0">
                  <h2>{detail.title}</h2>
                  {/* <p class="mb-0">The Details regarding the {detail.title} is provided below . The {detail.category} is accomodated with all the facilities.</p> */}
                </div>

                <div class="project-info-box">
                  <p><b>Address:</b> {detail.address}</p>
                  <p><b>Category:</b> {detail.category}</p>
                  <p><b>My thought:</b> {detail.blog_data}</p>
                  {/* <p><b>Rating:</b> {detail.rating}</p> */}

                  <p class="mb-0"><b>Budget:</b> 5000-7000</p>
                  <p><b>More details:</b> <a href={detail.urls}>Click here for more details</a></p>
                </div>


              </div>

              <div class="col-md-7">
                <img src={detail.img_src} alt="project-image" class="rounded" />
                {/* <div class="project-info-box">
                <p><b>Categories:</b> Design, Illustration</p>
                <p><b>Skills:</b> Illustrator</p>
            </div> */}
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default BlogDetail