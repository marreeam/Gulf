"use client";

import { Service } from "@/constants/services";
import { ChevronRight, ChevronUpSquare, Layers2 } from "lucide-react";
interface ServiceCardProps {
  service: Service;
  className?: string;
  style?: React.CSSProperties;
}

export default function ServiceCard({
  service,
  className = "",
  style,
}: ServiceCardProps) {
  return (
    <div
      className={`bg-white rounded-4xl p-10 flex flex-col gap-6 ${className}`}
      style={style}
    >
        <div className=" bg-[rgb(253,242,235)] w-fit p-8 rounded-full">
            <Layers2 className="text-[rgb(238,118,62)]"/>
        </div>
      <h3 className="bold-medium-text text-[26px] mt-4">{service.title}</h3>
      <p className="grey-medium-text mt-2 flex-grow min-h-[100px] sm:min-h-[120px] md:min-h-[150px] lg:min-h-[170px] ">{service.description}</p>
      <a href={service.link} className="link-button mt-4 font-semibold leading-[1.5] tracking-[0%] text-[rgb(238,118,62)] hover:text-[rgb(236,178,149)] flex items-center">
       გაიგე მეტი
       <ChevronRight/>
      </a>
    </div>
  );
}
