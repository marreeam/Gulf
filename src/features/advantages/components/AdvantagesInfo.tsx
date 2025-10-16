export interface InfoItemProps {
  id?: string;
  number: string;
  title: string;
  description: string;
}

export default function InfoItem({ number, title, description }: InfoItemProps) {
  return (
    <div className="flex flex-col gap-8 ">
      <p className="text-4xl font-bold text-gray-800 border-2 border-black w-fit rounded-full p-4">{number}</p>
      <h2 className="text-xl font-bold ">{title}</h2>
      <p className="text-gray-900 leading-relaxed">{description}</p>
    </div>
  );
}
