import Image from "next/image";
import titlePattern from "../../assets/img/title-pattern.png";
import { useEffect, useState } from "react";
import PackageCard from "./PackageCard";

export default function Package() {
  const [cards, setCards] = useState<string[]>([]);

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

  useEffect(() => {
    fetch("pack.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);


  return (
    <section className="overflow-hidden">
      <div className="flex justify-start items-center mt-5 mb-20 ml-8">
      <h1 className="md:text-2xl text-xs md:mx-3 md:font-semibold text-gray-400">
          OUR PACKAGES
        </h1>
        {imgArray.map((img) => (
          <Image src={img.img} alt=""></Image>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3  md:mx-10 mx-3">
        {
            cards.map(card=> <PackageCard  card={card}></PackageCard>)
        }
      </div>
    </section>
  );
}
