// constants/services.ts
import { ReactNode } from "react";
import { Cpu, Monitor, Server } from "lucide-react";

export interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export const SERVICES: Service[] = [
  {
    id: "1",
    icon: <Cpu size={32} />,
    title: "Gulf club - ქულების დაგროვების სისტემა",
    description: "Gulf Club ის სახით კომპანია გალფი თავის მომხმარებელს მომენტალური ფასდაკლებისა და ქულების დაგროვების ბარათს სთავაზობს.",
    link: "/services/performance",
  },
  {
    id: "2",
    icon: <Monitor size={32} />,
    title: "Gulf store - ყველაფერი ერთ სივრცეში",
    description: "Gulf store - ყველაფერი ერთ სივრცეში",
    link: "",
  },
  {
    id: "3",
    icon: <Server size={32} />,
    title: "Gulf store - ყველაფერი ერთ სივრცეში",
    description: "Gulf Store კომპანიის ახალი პროექტია, სადაც მომხმარებელი შეხვდება ყოველდღიური მოხმარების სხვადასხვა საგნებს.",
    link: "",
  },
  {
    id: "4",
    icon: <Monitor size={32} />,
    title: "Gulf store - ყველაფერი ერთ სივრცეში",
    description: "Gulf store - ყველაფერი ერთ სივრცეში",
    link: "",
  },
  {
    id: "5",
    icon: <Server size={32} />,
    title: "Gulf store - ყველაფერი ერთ სივრცეში",
    description: "Gulf Store კომპანიის ახალი პროექტია, სადაც მომხმარებელი შეხვდება ყოველდღიური მოხმარების სხვადასხვა საგნებს.",
    link: "",
  },
];
