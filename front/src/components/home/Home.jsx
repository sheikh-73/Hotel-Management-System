import React, { useEffect, useState } from 'react'
import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";

import axios from "axios";

const Home = () => {

  const [roomTypes, setRoomTypes] = useState([]);
  const [homeSliders, setHomeSliders] = useState([]);
  const [services, setServices] = useState([]);
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:2222/room-category/get")
    .then(result => {
      setRoomTypes(result.data);

      result.data.map((roomType) => (
        console.log(roomType)
      ))
    })
    .catch(error => console.log(error));

    axios.get("http://localhost:2222/home-slider/get")
    .then(result => {
      setHomeSliders(result.data);

      result.data.map((homeSlider) => (
        console.log(homeSlider)
      ))
    });


    axios.get("http://localhost:2222/service/get")
    .then(result => {
      setServices(result.data);

      result.data.map((service) => {
        console.log(service);
      });


    })
    .catch(error => console.log(error));


    axios.get("http://localhost:2222/gallery/get")
    .then(result => {
      setGalleries(result.data);

      result.data.map((gallery) => {
        console.log(gallery);
      });


    })
    .catch(error => console.log(error));




  }, []);  

  return (
    <div className="home" id="home">

      <div className="home-slider">

        <Swiper
          modules={[Navigation, Pagination, Autoplay, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          Navigation
          pagination={{clickable: true}}
          autoplay={{delay: 3000, disableOnInteraction: false}}
          loop={true}
          scrollbar={{ draggable: true }}
          className='swiper'
        >

          {
              homeSliders.map((homeSlider) => (

                <SwiperSlide key={homeSlider._id} >

                  <div className='box'>

                    <img src={`http://localhost:2222/${homeSlider.image}`} alt="" />
                    <div className='flex'>

                      <h3>{homeSlider.heading}</h3>
                      <a href="/availability" className='btn'>check availability</a>

                    </div>

                  </div>


                </SwiperSlide>
 
              ))
          }

        </Swiper>

      </div>

      {/* // availability section starts: */}

      <section className="availability" id="availability">

          <form action='' method='post'>

            <div className="flex">

              <div className="box">
                <p>check in<span>*</span></p>
                <input type="Date" name='check_in' className='input' required/>
              </div>

              <div className="box">
                <p>check out<span>*</span></p>
                <input type="Date" name='check_out' className='input' required/>
              </div>

              <div className="box">
                <p>adults<span>*</span></p>
                <select name='adults' className='input' required>
                  <option value="1">1 adult</option>
                  <option value="2">2 adults</option>
                  <option value="3">3 adults</option>
                  <option value="4">4 adults</option>
                  <option value="5">5 adults</option>
                  <option value="6">6 adults</option>
                </select>
              </div>

              <div className="box">
                <p>childs<span>*</span></p>
                <select name='childs' className='input' required>
                  <option value="-">0 child</option>
                  <option value="1">1 child</option>
                  <option value="2">2 childs</option>
                  <option value="3">3 childs</option>
                  <option value="4">4 childs</option>
                  <option value="5">5 childs</option>
                  <option value="6">6 childs</option>
                </select>
              </div>

              <div className="box">
                <p>rooms<span>*</span></p>
                <select name='rooms' className='input' required>
                  <option value="1">1 room</option>
                  <option value="2">2 rooms</option>
                  <option value="3">3 rooms</option>
                  <option value="4">4 rooms</option>
                  <option value="5">5 rooms</option>
                  <option value="6">6 rooms</option>
                </select>
              </div>

            </div>

            <a href="/availability" className="btn">check availability</a>

          </form>

          {/* <a href="/availability" className="btn">check availability</a> */}

      </section>



      {/* // availability section starts: */}


      {/* about section start: */}

      <section className="about" id="about">

          <div className="row">

            <div className="image">
              <img src="images/about-img-1.jpg" alt="Best Staff" />
            </div>
            <div className="content">
              <h3>best Staff</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quis non delectus a veniam 
                dolorem deleniti.
              </p>
              <a href="/" className="btn">make a reservation</a>

            </div>

          </div>

          <div className="row reverse">

            <div className="image">
              <img src="images/about-img-2.jpg" alt="Best Foods" />
            </div>
            <div className="content">
              <h3>best foods</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quis non delectus a veniam 
                dolorem deleniti.
              </p>
              <a href="/" className="btn">contact us</a>

            </div>

          </div>

          <div className="row">

            <div className="image">
              <img src="images/about-img-3.jpg" alt="swimming pool" />
            </div>
            <div className="content">
              <h3>swimming pool</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quis non delectus a veniam 
                dolorem deleniti.
              </p>
              <a href="/" className="btn">check availability</a>

            </div>

          </div>

      </section>


      {/* about section end: */}




      {/* service section start: */}


      <section className="service" id="service">

          <div className="box-container">

            {

              services.map((service) => (

                <div className='box' key={service._id}>

                    <img src={`http://localhost:2222/${service.image}`} alt='service icon' />
                    <h3>{service.header}</h3>
                    <p>{service.description}</p>

                  </div>


                // <div key={service._id}>
                //   {/* <div className='box'>

                //     <img src={`http://localhost:2222/${service.image}`} alt='service icon' />
                //     <h3>{service.header}</h3>
                //     <p>{service.description}</p>

                //   </div> */}


                // </div>
              ))
            }


          </div>


      </section>



      {/* service section end: */}



      {/* Gallery section start: */}


      <div className="gallery" id="gallery">

        <div className="gallery-slider">

          <Swiper
            modules={[Navigation, Pagination, Autoplay, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            Navigation
            pagination={{clickable: true}}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            loop={true}
            scrollbar={{ draggable: true }}
            className='swiper'
          >

          {
              galleries.map((gallery) => (

                <SwiperSlide key={gallery._id} >


                <img src={`http://localhost:2222/${gallery.image}`} alt="" />

                  {/* <div className='box'>

                    <img src={`http://localhost:2222/${homeSlider.image}`} alt="" />
                    <div className='flex'>

                      <h3>{homeSlider.heading}</h3>
                      <a href="/availability" className='btn'>check availability</a>

                    </div>

                  </div> */}


                </SwiperSlide>
 
              ))
          }

        </Swiper>


        </div>


      </div>



      {/* Gallery Section end: */}


    </div>


  

  )
}

export default Home