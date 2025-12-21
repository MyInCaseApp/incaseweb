interface security {
  title: string;
  text: string;
  custom: string;
}

export default function SecurityTips({ title, text, custom }: security) {
  return (
    <div
      className={`${custom} lg:w-107.5 w-full h-fit p-[16.24px] rounded-xl border-[#212122] border text-white`}
    >
      <p className="font-fontspring font-semibold mb-2">{title}</p>
      <p className="text-[#B7BCC1] text-sm font-poppins">{text}</p>
    </div>
  );
}
