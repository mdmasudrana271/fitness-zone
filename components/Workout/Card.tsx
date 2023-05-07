import Image from "next/image";

export default function Card({ card }: any) {
  const { title, img, description, group } = card;
  return (
    <div className="w-full rounded-md shadow-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 transition-all duration-500 group-hover:scale-110"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide text-gray-700 mb-5">
            {title}
          </h2>
          <div className="flex justify-start gap-5 items-center">
            <div className="w-16 h-16 rounded-full text-center border-4 border-gray-400 px-1">
              <p className="text-xs font-bold">4</p>
              <div className="divider text-bold m-0"></div> 
              <p className="text-xs font-bold">STEP</p>
            </div>
            <div className="text-gray-500">
              <h3 className="font-semibold">Muscle Group:</h3>
              <h4>{group}</h4>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-end text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="bg-primaryColor py-10 text-white px-3">{description}</p>
        </div>
      </div>
    </div>
  );
}
