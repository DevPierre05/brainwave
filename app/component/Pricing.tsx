import BillOfferDeny from "./BillOfferDeny";
import BillOfferTick from "./BillOfferTick";
import PayPreferenceToggle from "./PayPreferenceToggle";
import PricingOption from "./PricingOption";

export default function Pricing() {
  return (
    <section>
      <div className="mx-auto mt-24  h-[12.63rem] w-[38rem] text-center text-[#161C2D]">
        <h1 className="text-[3.75rem] font-bold leading-[65px]">
          Pricing & Plans
        </h1>
        <p className="mt-11 text-[1.2rem] -tracking-[0.2px]">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
      </div>

      <div className="mx-auto mt-[3.3rem] flex h-[43.2rem] w-[69.3rem] flex-col items-center">
        <PayPreferenceToggle />

        <div className="mt-[3.3rem] grid h-full w-full grid-cols-3 gap-8 rounded-md">
          <PricingOption title="Starter" amount="19">
            <div className="mt-9 flex flex-col gap-4">
              <BillOfferTick detail="Commercial License" />
              <BillOfferTick detail="100+ HTML UI Elements" />
              <BillOfferTick detail="01 Domain Support" />
              <BillOfferDeny detail="6 Month Premium Support" />
              <BillOfferDeny detail="Lifetime Updates" />
            </div>
          </PricingOption>
          <PricingOption title="Standard" amount="49" bestOption>
            <div className="mt-9 flex flex-col gap-4">
              <BillOfferTick detail="Commercial License" />
              <BillOfferTick detail="100+ HTML UI Elements" />
              <BillOfferTick detail="Unlimited Domain Support" />
              <BillOfferTick detail="6 Month Premium Support" />
              <BillOfferDeny detail="Lifetime Updates" />
            </div>
          </PricingOption>
          <PricingOption title="Premium" amount="99">
            <div className="mt-9 flex flex-col gap-4">
              <BillOfferTick detail="Commercial License" />
              <BillOfferTick detail="100+ HTML UI Elements" />
              <BillOfferTick detail="Unlimited Domain Support" />
              <BillOfferTick detail="6 Month Premium Support" />
              <BillOfferTick detail="Lifetime Updates" />
            </div>
          </PricingOption>
        </div>
      </div>
    </section>
  );
}
