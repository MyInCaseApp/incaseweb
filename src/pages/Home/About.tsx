import about from "../../assets/about.png";

export default function About() {
  return (
    <section className="py-26.5 px-6.5">
      <div className="lg:w-162 mx-auto">
        <p className="leading-[140%] tracking-[-2%] text-dark font-poppins text-center lg:text-xl">
          Every year millions of Nigerians lose critical documents to accidents
          theft or simple misplacement. Birth certificates swallowed by floods.
          Property documents lost in moves. Contracts destroyed by fire. These
          aren’t just papers, they are your life’s foundation.
        </p>
        <p className="leading-[140%] tracking-[-2%] text-dark font-poppins text-center lg:text-xl font-medium mt-10">
          What happens when you need that document tomorrow?
        </p>
        <button className="bg-dark rounded-full leading-[140%] tracking-[-2%] text-white py-4 px-6 mt-7 mx-auto flex font-poppins text-center">
          <p>Read more about InCase</p>
        </button>
      </div>
      <div className="lg:mt-55.5 mt-30">
        <div className="lg:w-121 w-[306.42px] lg:h-104.25 h-66 mx-auto">
          <img src={about} className="w-full h-full" alt="" />
        </div>
        <p className="text-center font-fredoka leading-[120%] font-medium text-[#778492]">
          You can store anything in InCase
        </p>
      </div>
    </section>
  );
}
