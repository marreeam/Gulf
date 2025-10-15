import { HeroSection } from "./components/HeroCarousel"
import { LoginForm } from "./components/HeroLoginForm"

export default function Hero() {
    return (
      <main className="min-h-screen px-8 py-32 sm:px-8 lg:px-16">
        <div className="mx-auto flex flex-col lg:flex-row items-start gap-8 lg:flex-nowrap sm:items-center">
          <div className="flex-1 relative max-w-full h-full lg:max-w-5xl">
            <HeroSection />
          </div>
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <LoginForm />
          </div>
        </div>
      </main>
    )
  }
  
