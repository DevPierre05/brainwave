import { rubik } from "../fonts";

export default function Nav() {
  return (
    <nav className="w-[68.75rem] h-[3.13rem] mx-auto mt-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1
          className={`${rubik.className} text-2xl font-bold leading-7 tracking-tightLogo`}
        >
          Brainwave.io
        </h1>
      </div>

      <div className="flex items-center gap-8 text-[0.94rem] h-full text-[#161C2D] font-bold">
        <ul className="flex gap-8 px-4 leading-[26px] border-r border-[#D5D7DD]">
          <li className="">Demos</li>
          <li className="">Pages</li>
          <li className="">Support</li>
          <li className="">Contact</li>
        </ul>
        <div className="flex gap-8">
          <button className="">Sign In</button>
          <button className="bg-[#473BF0] w-[7.75rem] h-[3.13rem] text-white rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
