import Image from "next/image";
import moblie from "../../assets/img/iphone.png";
import appstore from "../../assets/img/app-store.jpg";
import google from "../../assets/img/google-play.jpg";
export default function SecondBanner() {

  return (
    <section
      className="overflow-hidden bg-pattern3 bg-no-repeat bg-cover">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={moblie}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-2xl lg:text-left gap-8">
          <h1 className="text-4xl text-gray-800">
            THE BEST FITNESS ZONE WITH ALL THE NECESSARY IN-BUILT FEATURES
          </h1>
          <h3 className="text-xl text-gray-700">
            {" "}
            <strong>Fitness Zone</strong> is a <strong>Trendy Theme</strong>{" "}
            with the latest features and stays updated to the latest
            technological equipments.
          </h3>
          <div className="flex md:justify-start justify-center items-center gap-4">
            <Image className="md:w-40 w-24" src={appstore} alt=""></Image>
            <Image className="md:w-40 w-24" src={google} alt=""></Image>
          </div>
          <p className="text-gray-400 text-xs">
            Note: Occaecati cupiditate non provident, similique sunt in culpa
            qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            Et harum quidem rerum facilis est et expedita distinctio.
          </p>
        </div>
      </div>
    </section>
  );
}
