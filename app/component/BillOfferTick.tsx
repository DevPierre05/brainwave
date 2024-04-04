

export default function BillOfferTick({ detail }: {detail:string}) {
  return (
    <div className=" flex items-center gap-2 whitespace-nowrap">
      <svg
        width="17"
        height="12"
        viewBox="0 0 17 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.20704 11.7692C5.91354 11.7692 5.62062 11.659 5.39648 11.4381L0 6.11882L1.62112 4.52032L6.20704 9.04065L15.3789 0L17 1.5985L7.0176 11.4381C6.79347 11.659 6.50054 11.7692 6.20704 11.7692Z"
          fill="#68D585"
        />
      </svg>

      <p className="w-[7.4rem] overflow-x-hidden whitespace-nowrap text-lg -tracking-[0.2px]">
        {detail}
      </p>
    </div>
  );
}
