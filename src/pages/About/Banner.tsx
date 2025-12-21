import cube from "../../assets/cube.png";

export default function Banner() {
  return (
    <div className="lg:mb-56.25 mb-30 lg:px-0 px-5.25 bg-dark text-white lg:h-93.25 h-fit py-[40.5px] grid place-items-center">
      <div className="lg:w-191.25 w-83.25 mx-auto text-center font-fontspringm lg:text-2xl text-xl font-medium leading-[145%] tracking-[-2%]">
        <div className="w-17.5 h-17.5 mx-auto mb-5">
          <img src={cube} className="w-full h-full" alt="icon" />
        </div>
        <p>
          We protect your documents with the seriousness they deserve. Your{" "}
          <span className="text-[#E47CE5]">
            educational certificates, property documents, and personal papers
          </span>{" "}
          are encrypted and accessible only to you. We never share your
          documents with third parties without your permission.
        </p>
      </div>
    </div>
  );
}
