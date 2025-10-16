"use client";

import { HeroSection } from "./components/HeroCarousel";
import { LoginForm } from "./components/HeroLoginForm";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="px-8 py-12 sm:px-8 sm:py-32">
      <div className="mx-auto flex flex-col lg:flex-row items-start gap-8 lg:flex-nowrap sm:items-center">
        <div className="flex-1 relative max-w-full h-full lg:max-w-5xl">
          <HeroSection />
          <div className="lg:hidden mt-6 flex flex-col justify-center gap-3.5 border border-gray-200 p-4 rounded-4xl">
            <h1 className="titles-black text-[22px]">არ ხარ დარეგისტრირებული? </h1>
            <p className="grey-medium-text">დარეგისტრირდი ახლავე და მიიღე უამრავი ფასაკლება gulf-ის ახალი ბარათით</p>
            <Button onClick={() => setIsModalOpen(true)}>ავტორიზაცია</Button>
          </div>
        </div>

        <div className="hidden lg:block w-full lg:w-1/3 flex-shrink-0">
          <LoginForm />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LoginForm />
      </Modal>
    </main>
  );
}
