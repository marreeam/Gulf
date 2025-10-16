"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessCardSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInnerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 100, y: -100, rotation: -10 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 3.2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);


  const handleMouseEnter = () => {
    if (!cardInnerRef.current) return;
    gsap.to(cardInnerRef.current, {
      rotationY: 180,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const handleMouseLeave = () => {
    if (!cardInnerRef.current) return;
    gsap.to(cardInnerRef.current, {
      rotationY: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(cardRef.current, { rotationY: x / 15, rotationX: -y / 15, duration: 0.2 });
  };

  const handleMouseOut = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { rotationY: 0, rotationX: 0, duration: 0.5, ease: "power3.out" });
  };

  return (
    <section className="flex flex-col items-center  p-12 sm:py-40 sm:px-12  rounded-4xl bg-[var(--soft-yellow)]">
      <div className="flex flex-col lg:flex-row items-center sm:gap-12 w-full max-w-7xl">
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <h2 className="titles-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
            გალფის ბიზნეს ბარათი თქვენი ბიზნესისთვის
          </h2>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl">
          Gulf card ი არის კორპორატიული ბარათი, საწვავის
ტალონებით შესყიდვის თანამედროვე შემცვლელი,
რომელიც გაგიმარტივებთ ბიზნესის მართვას.
          </p>
          <div className="flex justify-center lg:justify-start ">
            <Button onClick={() => console.log("Clicked")} className="w-max border ">
              ბარათის შეკვეთა
            </Button>
          </div>
        </div>


        <div
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
          className="flex-1 relative w-full max-w-md h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 cursor-pointer perspective-1500 flex justify-center items-center mt-12 lg:mt-0"
        >
          <div
            ref={cardInnerRef}
            className="relative w-full h-full preserve-3d transition-transform duration-700"
            style={{ transform: "rotateY(0deg) rotateZ(-5deg)" }}
          >
            <div className="absolute w-full h-full rounded-3xl overflow-hidden backface-hidden">
              <Image
                src="/images/businessCard/one-business-card.png"
                alt="Front Card"
                fill
                style={{ objectFit: 'contain' }} 
              />
            </div>

            <div className="absolute w-full h-full rounded-3xl overflow-hidden rotate-y-180 backface-hidden">
              <Image
                src="/images/businessCard/one-business-card-back.png"
                alt="Back Card"
                fill
                style={{ objectFit: 'contain' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}