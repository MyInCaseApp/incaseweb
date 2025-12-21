import { whyChooseUs } from "../../utils/constant";

export default function Choose() {
  return (
    <section className="lg:w-297.5 mx-auto lg:my-56.25 my-30 lg:px-0 px-5.25">
      <div className="w-91.25 mx-auto text-center">
        <p className="font-fontspringm font-medium text-[32px] text-dark leading-[120%] tracking-[-5%]">
          Why Choose InCase
        </p>
        <p className="font-poppins text-[#778492] leading-[140%] tracking-[-5%] mt-3 text-base">
          InCase gives you a secure, organised home for the documents that shape
          your life.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        {whyChooseUs?.map((item, i) => (
          <div
            key={i}
            className="w-full bg-[#F8F4F2] px-4 pt-4 pb-7 rounded-xl"
          >
            <div className="w-full h-61.25 overflow-hidden rounded-lg">
              <img
                className="object-[0_-20px] w-full h-full object-cover"
                src={item.img}
                alt="image"
              />
            </div>
            <div className="mt-5">
              <p className="font-fontspring text-dark font-semibold text-xl leading-[140%] tracking-[-5%]">
                {item.name}
              </p>
              <p className="mt-3 font-poppins text-[#778492] leading-[140%] tracking-[-2%]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
