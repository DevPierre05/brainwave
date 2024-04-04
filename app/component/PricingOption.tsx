import clsx from "clsx";
import { rubik } from "../fonts";
import { HiArrowSmallRight } from "react-icons/hi2";
import { ReactNode } from "react";

interface PropTypes {
  title: string;
  amount: string;
  bestOption?: boolean;
  children: ReactNode;
}

export default function PricingOption({
  title,
  amount,
  bestOption = false,
  children,
}: PropTypes) {
  return (
    <div className="h-[37.75rem] w-[21.8rem] rounded-md border border-[#E7E9ED] px-[3.1rem] py-[2.3rem]">
      <h1 className="font-bold uppercase leading-4 tracking-[1.63px] text-[#473BF0]">
        {title}
      </h1>
      <h1 className="mt-10 text-6xl font-bold leading-[65px] -tracking-[2px]">
        <span className="text-2xl -tracking-[2px]">$</span>
        {Number(amount)}
        <span
          className={`${rubik.className} text-[17px] font-normal leading-7 -tracking-[0.09px]`}
        >
          / month
        </span>
      </h1>
      <h4 className="mt-3 text-base">billed monthly</h4>

      {children}

      <div
        className={clsx(
          "mt-9 flex w-[12.8rem] items-center justify-between rounded-md p-5 font-bold",
          {
            "bg-[#473BF0] text-white": bestOption === true,
            "bg-[#473BF0]/10 text-[#473BF0]": !bestOption,
          },
        )}
      >
        <p className="text-lg">Start Free Trial</p>
        <HiArrowSmallRight className="text-xl" />
      </div>

      <p className="mt-3 -tracking-[0.1px] text-[#161C2D]">
        No credit card required
      </p>
    </div>
  );
}
