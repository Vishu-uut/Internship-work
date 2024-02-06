import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import img1 from '../images/hq720.jpg';
import img2 from '../images/123.jpg';
import img3 from '../images/a.webp';
import img4 from '../images/1x1.avif';
import img5 from '../images/image1.jpg';
import rightImage from '../images/abc.png';
// ... import other images similarly
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#1cbbb4" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#1cbbb4" }}
        onClick={onClick}
      />
    );
  }
  

const Home = () => {
  // ... settings remain the same
  const settings = {
    nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };


  return (
    <div className="home">
      <div className="top-section">
        <div className="text-content">
          <h1>Welcome to Savy-Skills</h1>
          
          <h2>where education meets innovation! We're on a mission to revolutionize learning experiences...</h2>
          <button className="explore-button">Explore Courses</button>
        </div>
        <div className="image-content">
          <img src={rightImage} alt="Educational" /> {/* Image added here */}
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div><img src={img1} alt="Slide 1" className="slider-image"/></div>
          <div><img src={img2} alt="Slide 2" className="slider-image"/></div>
          <div><img src={img3} alt="Slide 2" className="slider-image"/></div>
          <div><img src={img4} alt="Slide 2" className="slider-image"/></div>
          <div><img src={img5} alt="Slide 2" className="slider-image"/></div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
