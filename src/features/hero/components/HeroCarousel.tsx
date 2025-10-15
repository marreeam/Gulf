"use client"

import { useState } from "react"
import Button from "@/components/ui/Button"
import SliderControls from "@/components/ui/SliderControls"

const slides = [
  {
    title: "Gulf card-ი დაიბრუნე ქეშბექი ქელების სახით",
    description: "კომპანია გალფი თავის კორპორატიულ მომხმარებელს სთავაზობს ქულების დაგროვების სისტემას.",
    image: "/black-credit-card-with-blue-glow.jpg",
  },
  {
    title: "მიიღე ბონუსები ყოველ ტრანზაქციაზე",
    description: "დააგროვე ქულები და გამოიყენე მომავალი შენაძენებისთვის.",
    image: "/premium-black-card-with-rewards.jpg",
  },
  {
    title: "უსაფრთხო და სწრაფი გადახდები",
    description: "თანამედროვე ტექნოლოგიები თქვენი უსაფრთხოებისთვის.",
    image: "/secure-payment-card-technology.jpg",
  },
  {
    title: "მართე ხარჯები ერთი აპლიკაციით",
    description: "ყველა ტრანზაქცია ხელმისაწვდომია მობილურ აპლიკაციაში.",
    image: "/mobile-app-card-management.jpg",
  },
]

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    return (
      <div className="relative overflow-hidden flex flex-col gap-10 rounded-[62px] bg-gradient-to-br from-black via-gray-900 to-slate-800 p-8 md:p-12 lg:p-16">
        <div className="w-fit rounded-full bg-white/10 px-4 py-2  text-sm font-medium text-white backdrop-blur-sm">
          {currentSlide + 1} / {slides.length}
        </div>
  
        <div className="relative z-10 flex flex-col justify-between  max-w-lg">
          <div className="space-y-6">
            <h1 className="normal-large-text">
              {slides[currentSlide].title}
            </h1>
            <p className="grey-medium-text">
              {slides[currentSlide].description}
            </p>
          </div>

 
        </div>
        <div className="flex justify-between pt-[20px] ">
            <div>
        <Button
            variant="light"
            type="submit"  className="px-8 py-2">
           გაიგე მეტი
          </Button>
          </div>

            <SliderControls
                onPrev={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                onNext={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                bgColor="bg-white/10"
                hoverColor="hover:bg-white/20"
                iconColor="text-white"
            />
          </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 lg:w-[600px] lg:h-[600px] opacity-40">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl" />
            <img
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt="Gulf Card"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    );
  }
  