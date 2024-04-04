export default function BillOfferDeny({ detail }: {detail:string}) {
  return (
    <div className=" flex items-center gap-2 whitespace-nowrap">
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1L0 13"
          stroke="#D5D7DD"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 13L0 1"
          stroke="#D5D7DD"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p className="w-[7.4rem] overflow-x-hidden whitespace-nowrap text-lg -tracking-[0.2px]">
        {detail}
      </p>
    </div>
  );
}
