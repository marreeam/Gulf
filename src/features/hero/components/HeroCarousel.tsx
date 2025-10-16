"use client"

import Button from "@/components/ui/Button"
import SliderControls from "@/components/ui/SliderControls"

export function HeroSection() {
  const slide = {
    title: "Gulf card-ი დაიბრუნე ქეშბექი ქელების სახით",
    description: "კომპანია გალფი თავის კორპორატიულ მომხმარებელს სთავაზობს ქულების დაგროვების სისტემას.",
  }

  return (
    <div className="relative overflow-hidden flex flex-col gap-10 rounded-[62px] bg-gradient-to-br from-black via-gray-900 to-slate-800 p-8 md:p-12 lg:p-16">
      <div className="w-fit rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
        1 / 1
      </div>

      <div className="relative z-10 flex flex-col justify-between max-w-lg">
        <div className="space-y-6">
          <h1 className="normal-large-text">{slide.title}</h1>
          <p className="grey-medium-text">{slide.description}</p>
        </div>
      </div>

      <div className="flex justify-between pt-[20px]">
        <div>
        <Button variant="light" type="submit" className="px-8 py-2">
          გაიგე მეტი
        </Button>
        </div>

        <SliderControls
          onPrev={() => null} 
          onNext={() => null} 
          bgColor="bg-white/10"
          iconColor="text-white"
        />
      </div>
    </div>
  )
}
