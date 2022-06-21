import React from 'react'
import { Link } from 'react-router-dom'
import '../home.scss'
function Home() {
  return (
	  <div>
    <section class="light">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
	<div class="container py-4">
			<article class="postcard dark blue">
			
			<div class="postcard__text">
				<h1 class="postcard__title blue"> <Link to='/pg'>Hostels/Pg's</Link></h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				
			</div>
		</article>
    <article class="postcard dark blue">
			
			<div class="postcard__text">
				<h1 class="postcard__title blue"> <Link to='/hospital'>Hospitals/Clinics</Link></h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				
			</div>
		</article>
		<article class="postcard dark blue">
			
			<div class="postcard__text">
				<h1 class="postcard__title blue"> <Link to='/pg'>Food Outlets</Link></h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				
			</div>
		</article>
    </div>
    
    {/* <div className='container'>
        <Link to='/pg' className='btn btn-primary mx-3'>Pg</Link>
        <Link to='/hostel' className='btn btn-primary mx-3'>hostel</Link>
    </div> */}
    </section>
	</div>
  )
}

export default Home