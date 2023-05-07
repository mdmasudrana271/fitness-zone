import Image from "next/image";
import titlePattern from "../../assets/img/title-pattern.png";
import TeamCard from "./TeamCard";
import { useEffect, useState } from "react";
export default function OurTeam() {
    const [cards, setCards] = useState<
string[]>([]);
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
  ];

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="flex justify-center items-center my-5 mb-20">
        {imgArray.map((img) => (
          <Image src={img.img} alt=""></Image>
        ))}
        <h1 className="md:text-2xl text-xs md:mx-3 md:font-semibold text-gray-400">
        OUR TEAM
        </h1>
        {imgArray.map((img) => (
          <Image src={img.img} alt=""></Image>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-20 md:mx-10 mx-3">
        {cards.map((card) => (
          <TeamCard card={card}></TeamCard>
        ))}
      </div>
    </section>
  );
}
