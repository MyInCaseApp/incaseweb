import { FaUser } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import StoreBox from "../../components/StoreBox";
import { IoHome } from "react-icons/io5";

export default function Store() {
  return (
    <section className="lg:w-297.5 mx-auto lg:my-56.25 my-30 lg:px-0 px-5.25">
      <div className="lg:w-162 mx-auto text-center">
        <p className="font-fontspringm font-medium text-[32px] text-dark leading-[120%] tracking-[-5%]">
          What You Can Store With Us
        </p>
        <p className="font-poppins text-[#778492] leading-[140%] tracking-[-5%] mt-3 text-sm lg:text-base">
          We secure every category of important documents
        </p>
      </div>

      <div className="w-full flex lg:flex-row flex-col items-center gap-6 mt-10">
        <StoreBox
          icon={<RiGraduationCapFill size={25} />}
          title="Educational Certificates"
          list={[
            "WAEC and GCE",
            "Degrees and transcripts",
            "NYSC",
            "Certifications",
          ]}
        />
        <StoreBox
          icon={<IoHome size={25} />}
          title="Property and Assets"
          list={[
            "C of O",
            "Land and Deeds",
            "Car papers",
            "Tenant verification",
          ]}
        />
        <StoreBox
          icon={<FaUser size={25} />}
          title="Personal and Legal"
          list={[
            "Wills",
            "Birth & marriage certificates",
            "Medical records",
            "ID documents",
          ]}
        />
        <StoreBox
          icon={<RiGraduationCapFill size={25} />}
          title="Business Documents"
          list={[
            "Company registration",
            "Tax records",
            "Contracts",
            "Compliance",
          ]}
        />
      </div>
    </section>
  );
}
