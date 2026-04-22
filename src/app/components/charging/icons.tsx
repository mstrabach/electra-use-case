export function LightningIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[18.75%_16.67%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
          <path
            d="M12.0381 3.27441H15.25V5.09473H12.0361V9.94336H15.248V11.7588H12.0361V14.0293L5.52832 12.3359C4.62476 12.1009 3.96387 11.2472 3.96387 10.2363V8.41016H0.75V6.59473H3.96387V4.79004C3.96391 3.78295 4.62186 2.93068 5.52344 2.69238L5.52246 2.69141L12.0381 0.973633V3.27441Z"
            fill="#0B2936"
            stroke="#0B2936"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}

export function WalletIcon({ active = true }: { active?: boolean }) {
  const fillColor = active ? 'white' : '#0B2936';
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[20.83%_16.67%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
          <g clipPath="url(#clip0_wallet)">
            <path
              d="M2.95023 2.32427L14.4219 2.31068V1.5534C14.4219 0.699029 13.7028 0 12.8239 0H2.95023C2.22914 0 1.6179 0.532039 1.6179 1.16117C1.6179 1.79029 2.21515 2.32233 2.95023 2.32233V2.32427Z"
              fill={fillColor}
            />
            <path
              d="M0.0195899 1.16132C0.0197103 2.57482 1.19066 3.73824 2.68072 3.86445H14.4219V3.86835C15.2988 3.90136 16.0001 4.60191 16.0001 5.4621V12.4016C16.0001 13.2849 15.2652 14 14.3565 14.0002H1.64361C0.734929 14 5.8673e-05 13.2849 5.8673e-05 12.4016V1.22285C9.31546e-05 1.13172 0.012339 1.04254 0.0322852 0.957221C0.0262927 1.02518 0.0195899 1.09142 0.0195899 1.16132ZM12.7247 7.3791C11.7839 7.3791 11.0001 8.0776 11.0001 8.9455C11.0001 9.81346 11.7838 10.5129 12.7247 10.5129C13.6653 10.5127 14.4483 9.79975 14.4483 8.9455C14.4482 8.07773 13.6653 7.3793 12.7247 7.3791Z"
              fill={fillColor}
            />
          </g>
          <defs>
            <clipPath id="clip0_wallet">
              <rect fill={fillColor} height="14" width="16" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function BoltToggleIcon({ active = false }: { active?: boolean }) {
  const fillColor = active ? 'white' : '#0B2936';
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[16.67%_20.83%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
          <path
            d="M6.25586 6.30957L6.1543 7.15039H12.4268L7.28027 13.501L7.74414 9.69043L7.8457 8.84961H1.57324L6.71875 2.49805L6.25586 6.30957Z"
            fill={fillColor}
            stroke={fillColor}
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
