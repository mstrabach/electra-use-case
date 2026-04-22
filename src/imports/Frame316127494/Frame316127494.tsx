function Frame() {
  return (
    <div className="bg-[rgba(255,122,0,0.31)] h-[95px] relative rounded-[22px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[7px] items-center p-[8px] relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+106px)] not-italic text-[#0b2936] text-[0px] text-center top-1/2 whitespace-nowrap">
            <p className="font-['Aeonik:Light',sans-serif]">
              <span className="leading-[0.709] text-[40.812px]">{`30 `}</span>
              <span className="leading-[0.709] text-[#0b2936] text-[22.81px]">%</span>
            </p>
          </div>
          <div className="absolute h-[114px] left-[-21px] top-[-12px] w-[133px]" style={{ backgroundImage: "linear-gradient(-90deg, rgb(255, 122, 0) 0%, rgb(255, 214, 176) 83.835%)" }} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ff7a00] border-solid inset-0 pointer-events-none rounded-[22px]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <Frame />
      <div className="absolute bg-[#ff7a00] h-[41px] left-[343px] rounded-br-[8px] rounded-tr-[8px] top-[27px] w-[4px]" />
    </div>
  );
}