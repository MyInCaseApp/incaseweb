import type { ReactNode } from "react";
import { FaSquare } from "react-icons/fa";

type StoreBoxProps = {
  icon: ReactNode;
  title: string;
  list?: string[];
};

export default function StoreBox({ icon, title, list }: StoreBoxProps) {
  return (
    <div className="px-5 py-6 rounded-xl shadow-[0_2px_12px_0_#0000000A] bg-white lg:w-69.5 w-full">
      <div className="text-[#227BDA]">{icon}</div>

      <p className="mb-3 mt-6.75 text-base text-dark font-fontspringm font-semibold">
        {title}
      </p>

      <div className="font-poppins font-light text-[#778492] leading-[140%] tracking-[-5%] text-sm mt-3">
        <p>Examples:</p>

        <div className="grid gap-3 mt-1.5">
          {list?.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <FaSquare size={12} className="rotate-45 text-[#E9F2FB]" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
