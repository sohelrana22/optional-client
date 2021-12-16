import React from 'react';
import { Container,} from 'react-bootstrap';
import { FaHeart, FaHome, FaUnlockAlt, FaMobile } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import banner from './../../images/banner.jpg';
import stand from './../../images/o2.jpg';

const Home = () => {
    return (
       <div>
            <div
        style={{
          background: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              
                <h1 className="text">Well come to Creative House</h1>
              
                <p className="my-4 text fs-5">
                We all deserve to experience the joy of vacationing with the people we love the most.
That’s why we’re here. With everything your family needs to make those moments together the most meaningful. And a place for everyone.
 </p>
             
                <NavLink
                  to='/item'
                  className="rounded-pill fs-5 btn btn-primary py-2 ">
                  View Features
                </NavLink>
             
            </div>
          </div>
        </Container>
      </div>
     <div>
     <div className='home-body p-5'>
      <div className='home-container'>
      <div className='home-row'>
          <div className='service'>
             <i> <FaUnlockAlt></FaUnlockAlt></i>
              <h2 className='text'>Booking protection guaranteed</h2>
              <p className='text'>Our anti-fraud team ensures every payment made on our platform is protected.</p>
          </div>
          <div className='service'>
              <i><FaHome></FaHome></i>
              <h2 className='text'>Homes that are 100% all yours</h2>
              <p className='text'>All of our rentals are private, so all you have to share is quality time.</p>
          </div>
          <div className='service'>
              <i><FaMobile></FaMobile></i>
              <h2 className='text'>Our app makes planning fun</h2>
              <p className='text'>Everyone loves using Trip Boards to save and share vacation inspiration.</p>
          </div>
          <div className='service'>
             <i> <FaHeart></FaHeart></i>
              <h2 className='text'>A place for everyone</h2>
              <p className='text'>We stand for diversity, inclusion and families everywhere.</p>
          </div>
        </div>
      </div>
      <div className='d-flex mt-5 '>
       <div className='row'>
       <div className='col-lg-6  col-12'>
          <img className='pb-5' width={"100%"} src={stand} alt="" />
       </div>
       <div className='col-lg-6 px-5 col-12 '>
          <h3 className='text-color'>Creative House stands for all families</h3>
          <p className='text'>We all deserve to experience the joy of vacationing with the people we love the most.
That’s why we’re here. With everything your family needs to make those moments together the most meaningful. And a place for everyone.If you're traveling with a large group, you can find rental homes on Creative House that give you the space and comfort you need without sacrificing the amenities that matter most, all within your budget.</p>
       </div>
       </div>
     </div>
     <div>
        <h2 className='text-white text-center p-5'>House Gallery</h2>
      </div>
      </div>
     </div>
     
       </div>
     
    );
};

export default Home;