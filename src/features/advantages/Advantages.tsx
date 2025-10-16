"use client";

import Image from "next/image";
import { ADVANTAGES } from "@/constants/AdvantagesData";
import InfoItem from "./components/AdvantagesInfo";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GradientCardSection() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Check viewport width
  useEffect(() => {
    const checkWidth = () => setIsVisible(window.innerWidth >= 1200);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    if (!isVisible || !cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: -200, rotation: -5 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      }
    );
  }, [isVisible]);

  // Hover tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(cardRef.current, {
      rotationY: x / 10, // horizontal tilt
      rotationX: -y / 10, // vertical tilt
      x: x / 50,          // subtle horizontal shift
      y: y / 50,          // subtle vertical shift
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  if (!isVisible) return null;

  const gradientStyle: React.CSSProperties = {
    background: `
      radial-gradient(
        ellipse 60% 40% at 50% 0%,
        rgba(0, 0, 38, 1) 20%,
        rgba(27, 35, 68, 0.9) 45%,
        rgba(52, 60, 88, 0.5) 75%,
        rgba(160, 179, 194, 0) 100%
      ),
      radial-gradient(
        ellipse 60% 40% at 50% 100%,
        rgba(0, 0, 38, 1) 20%,
        rgba(27, 35, 68, 0.9) 45%,
        rgba(52, 60, 88, 0.5) 75%,
        rgba(160, 179, 194, 0) 100%
      ),
      rgb(212, 239, 244)
    `,
    backgroundBlendMode: "normal",
  };

  return (
    <section
      className="relative py-24 px-6 sm:px-12 lg:px-20 rounded-4xl overflow-hidden"
      style={gradientStyle}
    >
      <h1 className="titles-black text-3xl sm:text-4xl lg:text-5xl mb-16 text-center lg:text-left">
        უპირატესობები
      </h1>

      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col gap-10 text-left text-gray-900 z-10">
          {ADVANTAGES.slice(0, 2).map((item) => (
            <InfoItem key={item.id} {...item} />
          ))}
        </div>

        {/* CENTER CARD */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex-1 flex justify-center items-center z-10 p-16 opacity-0 cursor-pointer"
        >
          <div className="w-80 lg:w-96 h-auto">
            <Image
              src="/images/businessCard/one-business-card.png"
              alt="Credit Card"
              width={600}
              height={360}
              style={{ objectFit: "contain" }}
              className="mx-auto"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col gap-10 text-left text-gray-900 z-10">
          {ADVANTAGES.slice(2, 4).map((item) => (
            <InfoItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
