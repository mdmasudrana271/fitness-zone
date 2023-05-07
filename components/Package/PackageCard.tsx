import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function PackageCard({ card }: any) {
  const {
    pack,
    duration,
    training,
    price,
    features1,
    features2,
    features3,
    img,
  } = card;
  return (
    <div className="card card-compact w-full rounded-none bg-base-100 shadow-xl group cursor-pointer items-center justify-center ">
      <figure>
        <img src={img} alt="workout image" />
      </figure>
      <div className="w-full px-7 py-4 border-x-2 border-gray-200 border-b-[10px] group-hover:border-primaryColor duration-700 ease-in ">
        <h2 className="card-title text-gray-600 text-2xl">{pack}</h2>
        <p className="text-sm italic text-gray-500">{training}</p>
        <div className="flex flex-col justify-start items-start gap-5 mt-8">
          <p className="flex justify-center items-center gap-3">
            <FaCheckCircle className="text-primaryColor"></FaCheckCircle>{" "}
            <span>{features1}</span>
          </p>
          <p className="flex justify-center items-center gap-3">
            <FaCheckCircle className="text-primaryColor"></FaCheckCircle>{" "}
            <span>{features2}</span>
          </p>
          <p className="flex justify-center items-center gap-3">
            <FaCheckCircle className="text-primaryColor"></FaCheckCircle>{" "}
            <span>{features3}</span>
          </p>
        </div>
        <div className="divider h-0.5 group-hover:bg-primaryColor duration-1000"></div>
        <div className="flex justify-between items-center">
          <p className="text-2xl text-gray-600">
            <sup className="text-gray-400">$</sup> {price}{" "}
            <sub className="text-gray-400">{duration}</sub>
          </p>
            <button className="btn rounded-none border-none text-white bg-primaryColor">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}
