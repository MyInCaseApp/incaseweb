import google from "../assets/google.png";
import apple from "../assets/apple.png";

export default function AppLinks() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-[130.6px] h-[38.7px]">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img
            className="w-full h-full object-contain"
            src={google}
            alt="google"
          />
        </a>
      </div>
      <div className="w-[116.09px] h-[38.7px]">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img
            className="w-full h-full object-contain"
            src={apple}
            alt="apple"
          />
        </a>
      </div>
    </div>
  );
}
