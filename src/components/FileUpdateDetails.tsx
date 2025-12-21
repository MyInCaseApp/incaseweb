import { BsDot } from "react-icons/bs";

interface FileUpdateDetailsProps {
  reviewed: string;
  effective: string;
  updated: string;
}

export default function FileUpdateDetails({
  reviewed,
  effective,
  updated,
}: FileUpdateDetailsProps) {
  return (
    <div className="text-[#7F8A95] lg:text-sm text-xs flex items-center flex-wrap justify-center lg:justify-start lg:gap-2 gap-1 font-fredoka leading-[120%]">
      <p>Last Updated: {updated}</p>
      <BsDot size={16} className="text-[#020209]" />
      <p>Effective Date: {effective}</p>
      <BsDot size={16} className="text-[#020209]" />
      <p>Last Reviewed: {reviewed}</p>
    </div>
  );
}
