import Image from "next/image";
import Slider from "react-slick";
import team1 from "../../assets/img/team1.jpg";
import team2 from "../../assets/img/team2.jpg";
import team3 from "../../assets/img/Paul Jackson.jpg";

export default function SliderBanner() {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
  };

  return (
    <section className="mt-20 bg-slate-400 py-16 px-10 md:h-[65vh]">
      <h4 className="text-center text-lg">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent{" "}
        <br /> taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos."
      </h4>

      <div className="mt-8 overflow-hidden">
        <Slider {...settings}>
          <div className="text-center">
            <div className="avatar mb-5">
              <div className="w-24 rounded-full ring ring-primaryColor ring-offset-base-100 ring-offset-2">
                <Image src={team1} alt="" />
              </div>
            </div>
            <p><strong>JENIFFER ANISTON</strong> Fitness Analyst, BELGRAM</p>
          </div>
          <div className="text-center">
            <div className="avatar mb-5">
              <div className="w-24 rounded-full ring ring-primaryColor ring-offset-base-100 ring-offset-2">
                <Image src={team2} alt="" />
              </div>
            </div>
            <p><strong>JAMES WHITE</strong> Fitness Enthuisast, Global Inc</p>
          </div>
          <div className="text-center">
            <div className="avatar mb-5">
              <div className="w-24 rounded-full ring ring-primaryColor ring-offset-base-100 ring-offset-2">
                <Image src={team3} alt="" />
              </div>
            </div>
            <p><strong>PAUL JACKSON</strong> Gymnastics Trainer, Sky Media</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}
