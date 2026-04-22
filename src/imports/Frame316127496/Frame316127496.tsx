import svgPaths from "./svg-yicz8u6mv4";

export default function Frame() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-start justify-end p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[#e7eaeb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Aeonik:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0b2936] text-[0px] text-left w-[min-content] whitespace-pre-wrap">
        <p className="font-['Aeonik:Light',sans-serif] leading-[0.509] mb-0 text-[42px]">2.95</p>
        <p className="leading-[0.509] mb-0 text-[18.81px]">​</p>
        <p className="leading-[0.509] mb-0 text-[18.81px]">​</p>
        <p className="font-['Aeonik:Light',sans-serif] leading-[0.509] text-[18.81px]">euros</p>
      </div>
      <div className="absolute bg-[rgba(11,41,54,0.07)] content-stretch flex gap-[12px] items-center left-[16px] overflow-clip p-[2px] rounded-[11px] top-[16px]">
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[#0b2936] content-stretch flex flex-col h-full items-center justify-center px-[8px] relative rounded-[10px] shrink-0">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="money-wallet">
              <div className="absolute inset-[20.83%_16.67%]" data-name="Calque_1">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                  <g clipPath="url(#clip0_1_779)" id="Calque_1">
                    <path d={svgPaths.p3dc1fa00} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.p3ee4f900} fill="var(--fill-0, white)" id="Subtract" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_779">
                      <rect fill="white" height="14" width="16" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[32px] shrink-0">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
            <div className="absolute inset-[16.67%_20.83%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                <path d={svgPaths.p2e6871c0} fill="var(--fill-0, #0B2936)" id="Vector" stroke="var(--stroke-0, #0B2936)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}