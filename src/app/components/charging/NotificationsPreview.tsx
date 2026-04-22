
interface PushNotification {
  id: string;
  timing: string;
  title: string;
  body: string;
  tone: 'info' | 'action' | 'alert' | 'success';
  action?: { label: string };
}

const NOTIFICATIONS: PushNotification[] = [
  {
    id: 'plugged-autocharge-off',
    timing: 'now',
    title: 'Autocharge not activated',
    body: 'You have to start charging manually.',
    tone: 'action',
    action: { label: 'Start charging' },
  },
  {
    id: 'rampup',
    timing: '1m ago',
    title: 'Charging started',
    body: 'Power ramping up. We\'ll ping you when it\'s ready.',
    tone: 'info',
  },
  {
    id: 'plateau-cold',
    timing: '4m ago',
    title: 'Charging slower today',
    body: 'Battery too cold for full power. Charge is still healthy.',
    tone: 'info',
  },
  {
    id: 'power-limited-unknown',
    timing: '2m ago',
    title: 'Everything\'s fine',
    body: 'Analyzing optimal power for your battery. Will update you in 3 minutes.',
    tone: 'info',
  },
  {
    id: 'tapering',
    timing: '12m ago',
    title: '80% reached',
    body: 'Last miles take longer. Unplug anytime to free the station.',
    tone: 'info',
  },
  {
    id: 'complete',
    timing: '2m ago',
    title: 'Ready to go',
    body: '100% · 42 min · 9.80€. Unplug when you are.',
    tone: 'success',
  },
  {
    id: 'idle-fee-warning',
    timing: 'now',
    title: 'Unplug in 5 min to avoid fees',
    body: 'Idle fees start at 0.40€/min after grace period.',
    tone: 'alert',
  },
  {
    id: 'payment',
    timing: 'now',
    title: 'Payment failed',
    body: 'Update your card to keep charging.',
    tone: 'alert',
  },
  {
    id: 'overheating',
    timing: 'now',
    title: 'Unplug your car now',
    body: 'Abnormal overheating detected. Emergency stop triggered.',
    tone: 'alert',
  },
  {
    id: 'queue',
    timing: '1m ago',
    title: 'A bay just opened up',
    body: 'You\'re next. Head to bay 3.',
    tone: 'action',
  },
];

function toneColor(tone: PushNotification['tone']) {
  switch (tone) {
    case 'alert':
      return '#ff5252';
    case 'action':
      return '#ff9800';
    case 'success':
      return '#3cdea8';
    default:
      return '#665BEB';
  }
}

export default function NotificationsPreview() {
  return (
    <div className="relative w-[375px] h-[812px] rounded-[44px] overflow-hidden shadow-xl">
      {/* Lock screen background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #0b2936 0%, #153a4d 45%, #0b2936 100%)',
        }}
      />
      {/* Subtle decorative glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(600px 300px at 80% 10%, rgba(67, 245, 186, 0.25), transparent 60%)',
        }}
      />

      {/* Status bar */}
      <div className="relative h-[54px] flex items-center justify-between px-[32px] pt-[14px]">
        <p className="font-['SF_Pro_Text',sans-serif] font-semibold text-white text-[15px]">15:44</p>
        <div className="flex items-center gap-1 text-white text-[12px]">
          <span>5G</span>
          <span>·</span>
          <span>84%</span>
        </div>
      </div>

      {/* Time + date */}
      <div className="relative flex flex-col items-center mt-[16px] mb-[20px] text-white">
        <p className="font-['Aeonik',sans-serif] font-light text-[18px] opacity-90">Tuesday, April 21</p>
        <p className="font-['Aeonik',sans-serif] font-light text-[76px] leading-none mt-[4px]">15:44</p>
      </div>

      {/* Notifications stack */}
      <div className="relative flex flex-col gap-[8px] px-[12px] overflow-y-auto" style={{ maxHeight: 'calc(812px - 260px)' }}>
        {NOTIFICATIONS.map((n) => (
          <div
            key={n.id}
            className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.88)] flex flex-col items-start overflow-clip px-[16px] py-[14px] rounded-[20px] cursor-pointer"
          >
            <div className="flex flex-col gap-[12px] items-start w-full">
              <div className="flex gap-[16px] items-center justify-end w-full">
                <div className="flex gap-[6px] items-center flex-1">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute left-px size-[14px] top-px">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path
                          clipRule="evenodd"
                          d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
                          fill={toneColor(n.tone)}
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['SF_Pro_Text',sans-serif] font-normal justify-center leading-[0] shrink-0">
                    <p className="leading-[16px] text-[12px]" style={{ color: toneColor(n.tone) }}>Electra</p>
                  </div>
                  <div className="flex flex-col font-['SF_Pro_Text',sans-serif] font-normal justify-center leading-[0] shrink-0 text-[#595959] text-[12px]">
                    <p className="leading-[16px]">{n.timing}</p>
                  </div>
                </div>
                <button className="flex items-center justify-center shrink-0 -scale-y-100 rotate-180 cursor-pointer">
                  <div className="relative size-[16px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path
                          clipRule="evenodd"
                          d="M12.095 10.895C11.8216 11.1683 11.3784 11.1683 11.105 10.895L7.60001 7.38994L4.09499 10.895C3.82162 11.1683 3.37841 11.1683 3.10504 10.895C2.83167 10.6216 2.83167 10.1784 3.10504 9.90501L7.10503 5.90502C7.3784 5.63165 7.82162 5.63165 8.09498 5.90502L12.095 9.90501C12.3683 10.1784 12.3683 10.6216 12.095 10.895Z"
                          fill="#A1A1A1"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="flex flex-col gap-[4px] items-start overflow-clip w-full">
                <div className="flex items-start">
                  <div className="flex flex-col font-['SF_Pro_Text',sans-serif] font-normal justify-center leading-[0] shrink-0 text-[#222] text-[15px]">
                    <p className="leading-[20px]">{n.title}</p>
                  </div>
                </div>
                <div className="flex h-auto items-start w-full">
                  <div className="flex flex-col font-['SF_Pro_Text',sans-serif] font-normal justify-center leading-[0] text-[#686868] text-[13px]">
                    <p className="leading-[20px]">{n.body}</p>
                  </div>
                </div>
                {n.action && (
                  <button className="mt-[4px] w-full inline-flex items-center justify-center gap-[6px] bg-[rgba(0,0,0,0.08)] text-[#007AFF] rounded-[10px] px-[12px] py-[8px] font-['SF_Pro_Text',sans-serif] text-[15px] font-normal cursor-pointer">
                    {n.action.label}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 h-[5px] w-[134px] rounded-full bg-white/80" />
    </div>
  );
}
