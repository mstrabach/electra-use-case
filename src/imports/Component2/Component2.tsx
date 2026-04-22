import svgPaths from "./svg-ngzluuc7o8";

export default function Component() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.88)] content-stretch flex flex-col items-start overflow-clip px-[16px] py-[14px] relative rounded-[20px] size-full" data-name="Component 2">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[308px]">
        <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[308px]">
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[276px]">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="smallIcon">
              <div className="absolute left-px size-[14px] top-px" data-name="Exclude">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path clipRule="evenodd" d={svgPaths.p168b2c80} fill="var(--fill-0, #665BEB)" fillRule="evenodd" id="Exclude" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0" data-name="appName">
              <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#665beb] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[16px]">Application name</p>
              </div>
            </div>
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595959] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px]">now</p>
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="relative size-[16px]" data-name="eva:arrow-ios-upward-fill">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="eva:arrow-ios-upward-fill">
                    <path clipRule="evenodd" d={svgPaths.pf533100} fill="var(--fill-0, #A1A1A1)" fillRule="evenodd" id="Rectangle 5 (Stroke) (Stroke)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[308px]">
          <div className="content-stretch flex items-start relative shrink-0" data-name="contentTitle">
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[20px]">Hi Anastassia!</p>
            </div>
          </div>
          <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[328px]" data-name="contentText">
            <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#686868] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}