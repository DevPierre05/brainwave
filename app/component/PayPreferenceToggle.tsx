
export default function PayPreferenceToggle() {
  return (
    <div className="flex w-[334px] items-center justify-center gap-4">
      <h1 className="text-[1.18rem]">Monthly</h1>
      <div className="flex h-[2rem] w-[4.5rem] items-center rounded-2xl bg-gray-300 px-2">
        <div className="h-[1.4rem] w-[1.4rem] rounded-full bg-white"></div>
      </div>
      <h1 className="text-[1.18rem]">Yearly</h1>
      <div className="flex h-[1.8rem] w-[5.9rem] items-center justify-center rounded-2xl  bg-[#473bf092]/10">
        <h1 className="text-[13px] font-bold uppercase leading-4 tracking-[1.63px] text-[#473BF0]">
          Save 25%
        </h1>
      </div>
    </div>
  );
}
