// components/ToolBoxITem.jsx
import Image from "next/image";

export default function ToolBoxITem({ title, image }) {
  return (
    <div className="flex items-center gap-2 px-3 h-[45px] rounded-full overflow-hidden border border-white/10 bg-white/5">
      {/* Image */}
      <div className="relative w-[50px] h-[45px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="50px"
          className="object-cover rounded-lg"
        />
      </div>
      {/* Text */}
      <p className="text-white text-sm whitespace-nowrap">{title}</p>
    </div>
  );
}
