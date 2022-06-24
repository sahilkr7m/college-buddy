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
				<div class="postcard__preview-txt">PG refers to when a person stays in someone else's house/property and pays rent for the accommodation and facilities available with it, such as electricity, water, housekeeping, and food at times. The concept of PG is generally famous in the areas closer to business centres or educational institutes because working professionals and students prefer these locations to reduce their travel time and save some money. </div>
				
			</div>
		</article>
    <article class="postcard dark blue">
			
			<div class="postcard__text">
				<h1 class="postcard__title blue"> <Link to='/hospital'>Hospitals/Clinics</Link></h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.</div>
				
			</div>
		</article>
		<article class="postcard dark blue">
			
			<div class="postcard__text">
				<h1 class="postcard__title blue"> <Link to='/pg'>Food Outlets</Link></h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.</div>
				
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