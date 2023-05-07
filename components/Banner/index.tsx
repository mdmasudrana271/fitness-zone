import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import banner1 from "../../assets/img/man.png";
import banner2 from "../../assets/img/guy-running.png";
import img1 from "../../assets/img/add1.png"
import img2 from "../../assets/img/add2.jpg"
import img3 from "../../assets/img/add3.jpg"
import titlePattern from "../../assets/img/title-pattern.png"
import analyze from "../../assets/img/icon5.png"
import work from "../../assets/img/icon6.png"
import improve from "../../assets/img/icon7.png"
import achieve from "../../assets/img/icon8.png"

export default function Banner() {

  const imgArray = [
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
    {
      img: titlePattern
    },
  ]

  const processArray = [
    {
      img:analyze,
      title: "ANALYZE YOUR GOAL"
    },
    {
      img:work,
      title: "WORK HARD ON IT"
    },
    {
      img:improve,
      title: "IMPROVE YOUR PERFORMANCE"
    },
    {
      img:achieve,
      title: "ACHIEVE YOUR DESTINY"
    },
  ]

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="overflow-hidden">
      <Slider {...settings}>
        {/* slider one  */}
        <div className="bg-bg_image bg-cover bg-no-repeat">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                  className="py-6"
                >
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm">
                <Image src={banner1} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
        {/* slider two  */}
        <div className="bg-bannerTwo bg-cover bg-no-repeat">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                  className="py-6"
                >
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm">
                <Image src={banner2} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
        {/* slider three  */}
        <div className="bg-bg_image2 bg-cover bg-no-repeat">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                  className="py-6"
                >
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm">
                <Image src={banner1} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* second banner  */}
      <div className="lg:flex justify-center items-center lg:absolute bottom-[-130px] lg:left-[100px] hidden">
        <Image src={img1} alt=""></Image>
        <Image src={img2} alt=""></Image>
        <Image src={img3} alt=""></Image>
      </div>
      <div className="flex justify-center items-center mt-44 mb-20">
        {
          imgArray.map(img=> <Image src={img.img} alt=""></Image>)
        }
        <h1 className="md:text-2xl text-xs md:mx-3 md:font-semibold text-gray-400">OUR PROCESS</h1>
        {
          imgArray.map(img=> <Image src={img.img} alt=""></Image>)
        }
      </div>
      {/* process card  */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {
          processArray.map(card=> <div className="flex flex-col justify-center items-center gap-5">
            <div className="bg-primaryColor flex items-center justify-center w-24 h-24 outline-4 hover:outline-lime-500 border-secondaryColor hover:border-4 hover:border-spacing-10 rounded-full"><Image src={card.img} alt=""></Image></div>
            <p>{card.title}</p>
          </div>)
        }
      </div>
    </section>
  );
}
