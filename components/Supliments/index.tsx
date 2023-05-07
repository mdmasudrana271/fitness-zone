import Image from "next/image";
import Slider from "react-slick";
import titlePattern from "../../assets/img/title-pattern.png";
import sup1 from "../../assets/img/supliments/Donec tincidunt sed mauris.png"
import sup2 from "../../assets/img/supliments/client1.png"
import sup3 from "../../assets/img/supliments/client3.png"
import sup4 from "../../assets/img/supliments/client4.png"

export default function Supliments() {
  const imgArray = [
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
    {
      img: titlePattern,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <section>
      <div className="flex justify-center items-center mt-32 mb-16 overflow-hidden">
        {imgArray.map((img) => (
          <Image src={img.img} alt=""></Image>
        ))}
        <h1 className="md:text-2xl text-xs md:mx-3 md:font-semibold text-gray-400">
          SUPPLIMENTS
        </h1>
        {imgArray.map((img) => (
          <Image src={img.img} alt=""></Image>
        ))}
      </div>
      <div className="w-9/12 mx-auto">
      <Slider {...settings}>
          <div>
            <Image src={sup1} alt=""></Image>
          </div>
          <div>
            <Image src={sup2} alt=""></Image>
          </div>
          <div>
            <Image src={sup3} alt=""></Image>
          </div>
          <div>
            <Image src={sup4} alt=""></Image>
          </div>
          <div>
            <Image src={sup1} alt=""></Image>
          </div>
          <div>
            <Image src={sup2} alt=""></Image>
          </div>
          <div>
            <Image src={sup3} alt=""></Image>
          </div>
          <div>
            <Image src={sup4} alt=""></Image>
          </div>
        </Slider>
      </div>
    </section>
  );
}
