import Image from "next/image";
import titlePattern from "../../assets/img/title-pattern.png";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Workout() {
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
  ];

  useEffect(() => {
    fetch("workout.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  console.log(cards);
  return (
    <section className="overflow-hidden">
      <div className="flex justify-center items-center mt-32 mb-20">
        {imgArray.map((img) => (
          <Image src={img.img} alt=""></Image>
        ))}
        <h1 className="md:text-2xl text-xs md:mx-3 md:font-semibold text-gray-400">
          WORKOUT OF THE DAY
        </h1>
        {imgArray.map((img) => (
          <Image src={img.img} alt=""></Image>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-20 md:mx-10 mx-3">
        {
            cards.map(card=> <Card  card={card}></Card>)
        }
      </div>
    </section>
  );
}
