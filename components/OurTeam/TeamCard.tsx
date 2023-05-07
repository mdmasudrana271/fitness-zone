import { FaAward, FaTrophy, FaGraduationCap, FaTwitter, FaFacebookF, FaGooglePlusG } from 'react-icons/fa';

export default function TeamCard({ card }: any) {
  const { name, designation, img, group, Experience, Awards }:any = card;
  return (
    <div className="w-full rounded-md shadow-md group relative cursor-pointer items-center justify-center overflow-hidden image-full">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md"
      />
      <div className="">
        <h2 className="card-title text-center ml-5 px-2 absolute top-[350px] group-hover:top-[170px] duration-500 bg-gray-200 bg-opacity-40 backdrop-blur-md text-black">{name}</h2>
        <div className="absolute inset-0 flex translate-y-[120%] flex-col items-start justify-start pl-9 transition-all duration-500 group-hover:translate-y-[50%] bg-primaryColor  text-white pt-6 text-start">
            <h2 className="text-xl mb-7">{designation}</h2>
            <div className="flex flex-col gap-3 justify-start items-start text-start text-sm">
                <p className='flex justify-start items-center gap-2'><FaTrophy></FaTrophy> <strong>Awards</strong>: {Awards}</p>
                <p className='flex justify-center items-center gap-2'><FaGraduationCap></FaGraduationCap>{group}</p>
                <p className='flex justify-center items-center gap-2'><FaAward></FaAward><strong>Experience</strong>: {Experience}</p>
            </div>
            <div className='flex justify-start items-center gap-16  my-5 pt-2 w-full'>
                <FaTwitter></FaTwitter>
                <FaFacebookF></FaFacebookF>
                <FaGooglePlusG></FaGooglePlusG>
            </div>
        </div>
      </div>
    </div>
  );
}
