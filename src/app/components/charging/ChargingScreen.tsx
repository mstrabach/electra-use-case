import { useState, useEffect } from 'react';
import { ChargingState } from './types';
import { getStateContent } from './content-matrix';
import { LightningIcon, WalletIcon, BoltToggleIcon } from './icons';
import { Clock, X } from 'lucide-react';

// Add keyframes for battery pulse animation
const batteryPulseStyles = `
  @keyframes battery-pulse {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

interface ChargingScreenProps {
  state: ChargingState;
}

export default function ChargingScreen({ state }: ChargingScreenProps) {
  const [showKwh, setShowKwh] = useState(false);
  const [animatedBattery, setAnimatedBattery] = useState(0);
  const [barOffset, setBarOffset] = useState(0);
  const [livePower, setLivePower] = useState(state.power);

  const content = getStateContent(state.phase, state.modulator, state.incident);

  // Animate battery fill
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedBattery(state.battery);
    }, 100);
    return () => clearTimeout(timer);
  }, [state.battery]);

  // Animate power bars scrolling + realistic power fluctuation (Electra HPC bornes: up to 400kW shared, typical vehicle draw 50-250kW)
  useEffect(() => {
    setLivePower(state.power);
  }, [state.power]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarOffset((prev) => (prev + 1) % 62);
      setLivePower((prev) => {
        if (state.power === 0) return 0;
        // Realistic jitter: ±3% around target power, clamped to Electra capabilities (max 400kW per borne)
        const jitter = (Math.random() - 0.5) * 0.06 * state.power;
        const next = state.power + jitter;
        return Math.max(1, Math.min(400, Math.round(next)));
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [state.power]);

  const getColorClasses = () => {
    switch (content.color) {
      case 'green':
        return {
          battery: 'bg-[#d0fced] border-[#3cdea8]',
          batteryGradientStart: '#3cdea8',
          batteryGradientEnd: '#d0fced',
          power: 'bg-[#d0fced] border-[#3cdea8]',
          barStroke: '#43F5BA',
        };
      case 'amber':
        return {
          battery: 'bg-[rgba(255,200,100,0.31)] border-[#ff9800]',
          batteryGradientStart: '#ff9800',
          batteryGradientEnd: '#ffd9b3',
          power: 'bg-[rgba(255,200,100,0.31)] border-[#ff9800]',
          barStroke: '#ff9800',
        };
      case 'red':
        return {
          battery: 'bg-[rgba(255,82,82,0.31)] border-[#ff5252]',
          batteryGradientStart: '#ff5252',
          batteryGradientEnd: '#ffcdd2',
          power: 'bg-[rgba(255,82,82,0.31)] border-[#ff5252]',
          barStroke: '#ff5252',
        };
      default:
        return {
          battery: 'bg-[rgba(231,234,235,0.31)] border-[#e7eaeb]',
          batteryGradientStart: '#b2b2b2',
          batteryGradientEnd: '#e7eaeb',
          power: 'bg-[rgba(231,234,235,0.31)] border-[#e7eaeb]',
          barStroke: '#B2B2B2',
        };
    }
  };

  const colors = getColorClasses();

  const timeLabel = state.phase === '06-complete' || state.phase === '07-postunplug' ? 'min elapsed' : 'min left';
  const costLabel = state.phase === '07-postunplug' ? 'euros billed' : 'euros';

  // Calculate kWh from power and time (rough estimate)
  const kwh = (livePower * state.timeElapsed / 60).toFixed(1);

  // Generate bar heights proportional to power (0-400kW range — Electra HPC borne max)
  const generateBarHeights = () => {
    const maxHeight = 79; // 90 - 11 (max y value from original)
    const minHeight = 49; // Lower bound for visible bars
    const powerRatio = Math.min(1, livePower / 400); // 0 to 1, capped at Electra max
    const targetHeight = 90 - (11 + (maxHeight - 11) * (1 - powerRatio));

    // Create variation pattern based on original design
    const pattern = [41, 45, 26, 32, 53, 49, 45, 26, 32, 70, 77, 45, 26, 32, 28, 41, 45, 26, 32, 45];

    return Array.from({ length: 62 }).map((_, i) => {
      const baseY = pattern[i % pattern.length];
      // Scale the pattern based on power level
      const scaledY = 90 - ((90 - baseY) * powerRatio);
      return Math.max(11, Math.min(90, scaledY));
    });
  };

  // CTA styling - only red for critical incidents, otherwise classic dark
  const ctaClasses = content.ctaVariant === 'danger'
    ? 'bg-[#ff5252]'
    : 'bg-[#0b2936]';

  const ctaTextClasses = content.ctaVariant === 'danger'
    ? 'text-white'
    : 'text-[#43f5ba]';

  return (
    <div className="bg-white relative rounded-[44px] w-[375px] h-[812px]">
      <style>{batteryPulseStyles}</style>
      <div className="content-stretch flex flex-col gap-[298px] items-start justify-end min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        {/* Main content */}
        <div className="absolute content-stretch flex flex-col gap-[18px] h-[570px] items-center left-0 px-[16px] top-[126px] w-[375px]">
          {/* Headline */}
          <div className="flex-[1_0_0] min-h-px relative w-full">
            <p className={`font-['Aeonik',sans-serif] font-light leading-[45px] not-italic text-[#0b2936] text-[40.5px] ${content.headline.includes('→') ? 'cursor-pointer' : ''}`}>
              {content.headline.includes('→') ? (
                <>
                  <span>{content.headline.split('→')[0]}</span>
                  <span className="[text-decoration-skip-ink:none] decoration-solid underline">
                    {content.headline.split('→')[1]}→
                  </span>
                </>
              ) : (
                content.headline
              )}
            </p>
            {content.deeplink && (
              <p className="font-['Aeonik',sans-serif] font-normal text-[16px] text-[#0b2936] underline mt-2 cursor-pointer">
                {content.deeplink}
              </p>
            )}
          </div>

          {/* Metrics pair */}
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px relative w-full">
            {/* Time card */}
            <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]">
              <div aria-hidden="true" className="absolute border border-[#e7eaeb] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="content-stretch flex flex-col items-start justify-between p-[16px] relative size-full">
                <Clock className="w-5 h-5 text-[#0b2936]" />
                <div className="flex flex-col font-['Aeonik',sans-serif] justify-center leading-[0] not-italic text-[#0b2936] text-[0px] whitespace-nowrap">
                  <p className="font-light leading-[0.509] mb-0 text-[42px]">{state.timeElapsed}</p>
                  <p className="leading-[0.509] mb-0 text-[40.812px]">​</p>
                  <p className="font-light leading-[0.509] text-[18.81px]">{timeLabel}</p>
                </div>
              </div>
            </div>

            {/* Cost/kWh card with status */}
            <button
              onClick={() => setShowKwh(!showKwh)}
              className="cursor-pointer flex-[1_0_0] h-[167px] min-w-px relative rounded-[16px]"
            >
              <div aria-hidden="true" className="absolute border border-[#e7eaeb] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-col justify-end size-full">
                <div className="content-stretch flex flex-col items-start justify-end p-[16px] relative size-full">
                  <div className="flex flex-col font-['Aeonik',sans-serif] justify-center leading-[0] min-w-full not-italic text-[#0b2936] text-[0px] text-left w-[min-content] whitespace-pre-wrap">
                    <p className="font-light leading-[0.509] mb-0 text-[42px]">
                      {showKwh ? kwh : state.cost.toFixed(2)}
                    </p>
                    <p className="leading-[0.509] mb-0 text-[18.81px]">​</p>
                    <p className="leading-[0.509] mb-0 text-[18.81px]">​</p>
                    <p className="font-light leading-[0.509] text-[18.81px]">
                      {showKwh ? 'kWh' : costLabel}
                    </p>
                  </div>

                  {/* Status badge with toggle */}
                  <div className="absolute bg-[rgba(11,41,54,0.07)] content-stretch flex gap-[12px] items-center left-[16px] overflow-clip p-[2px] rounded-[11px] top-[16px]">
                    <div className="flex flex-row items-center self-stretch">
                      <div className={`content-stretch flex flex-col h-full items-center justify-center px-[8px] relative rounded-[10px] shrink-0 transition-all duration-200 ${!showKwh ? 'bg-[#0b2936]' : 'bg-transparent'}`}>
                        <WalletIcon active={!showKwh} />
                      </div>
                    </div>
                    <div className={`content-stretch flex items-center justify-center px-[8px] relative rounded-[32px] shrink-0 transition-all duration-200 ${showKwh ? 'bg-[#0b2936]' : 'bg-transparent'}`}>
                      <BoltToggleIcon active={showKwh} />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Battery + Power cards */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {/* Battery bar with external indicator */}
            <div className="relative w-full">
              <div className={`h-[95px] rounded-[22px] shrink-0 w-full ${colors.battery}`}>
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[7px] items-center p-[8px] relative size-full">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Aeonik',sans-serif] justify-center leading-[0] left-[calc(50%+106px)] not-italic text-[#0b2936] text-[0px] text-center top-1/2 whitespace-nowrap z-10">
                      <p className="font-light">
                        <span className="leading-[0.709] text-[40.812px]">{state.battery} </span>
                        <span className="leading-[0.709] text-[#0b2936] text-[22.81px]">%</span>
                      </p>
                    </div>
                    {/* Animated fill */}
                    <div
                      className="absolute h-[114px] left-[-21px] top-[-12px] transition-all duration-1000 ease-out"
                      style={{
                        width: `${Math.max(10, (animatedBattery / 100) * 385)}px`,
                        backgroundImage: `linear-gradient(-90deg, ${colors.batteryGradientStart} 0%, ${colors.batteryGradientEnd} 50%, ${colors.batteryGradientStart} 100%)`,
                        backgroundSize: '200% 100%',
                        animation: 'battery-pulse 2s ease-in-out infinite'
                      }}
                    />
                  </div>
                </div>
                <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[22px] ${colors.battery.split(' ')[1]}`} />
              </div>
              {/* Battery indicator - outside, makes it look like a battery */}
              <div className="absolute h-[41px] right-[-4px] rounded-br-[8px] rounded-tr-[8px] top-[27px] w-[4px]" style={{ backgroundColor: colors.barStroke }} />
            </div>

            {/* Power bar with animated graph */}
            <div className={`h-[90px] relative rounded-[22px] shrink-0 w-full ${colors.power}`}>
              <div className="overflow-clip relative rounded-[inherit] size-full">
                {/* Animated graph bars */}
                <div className="absolute h-[90px] left-[-47px] top-0 w-[244px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 90">
                    <g>
                      {Array.from({ length: 62 }).map((_, i) => {
                        const x = 0.5 + i * 4;
                        const barHeights = generateBarHeights();
                        const heightIndex = (i + barOffset) % barHeights.length;
                        const y = barHeights[heightIndex];
                        return (
                          <line
                            key={i}
                            stroke={colors.barStroke}
                            x1={x}
                            x2={x}
                            y1={y}
                            y2="90"
                          />
                        );
                      })}
                    </g>
                  </svg>
                </div>

                <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Aeonik',sans-serif] justify-center leading-[0] left-[calc(50%+145.5px)] not-italic text-[#0b2936] text-[0px] text-right top-[calc(50%+0.5px)] w-[128px]">
                  <p className="font-light whitespace-pre-wrap">
                    <span className="leading-[0.709] text-[40.812px]">{livePower}</span>
                    <span className="leading-[0.709] text-[#0b2936] text-[16.81px]">  kW</span>
                  </p>
                </div>

                <div className="-translate-y-1/2 absolute left-[21px] top-[calc(50%+1px)]">
                  <LightningIcon />
                </div>
              </div>
              <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[22px] ${colors.power.split(' ')[1]}`} />
            </div>
          </div>
        </div>

        {/* Top navbar */}
        <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[375px]">
          {/* Status Bar */}
          <div className="h-[44px] relative shrink-0 w-[375px]">
            <p className="absolute font-['SF_Pro_Text',sans-serif] font-semibold leading-[normal] left-[39.5px] not-italic text-[15px] text-black top-[calc(50%-9px)] tracking-[-0.165px] whitespace-nowrap">
              15:44
            </p>
          </div>

          {/* Commands */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-center flex flex-wrap gap-y-[263px] items-center justify-between px-[16px] py-[8px] relative size-full">
                <button className="bg-[rgba(255,255,255,0.9)] relative rounded-[40px] shrink-0 cursor-pointer">
                  <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
                    <X className="w-6 h-6 text-[#0b2936]" />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_0px_8px_0px_rgba(0,31,27,0.05)]" />
                </button>

                <div className="flex flex-col font-['Aeonik',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.55)] whitespace-nowrap">
                  <p className="leading-[normal]">Autocharge started {state.timeElapsed}min ago</p>
                </div>

                <button className="bg-[rgba(255,255,255,0.9)] h-[40px] relative rounded-[40px] shrink-0 cursor-pointer">
                  <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
                    <div className="flex flex-col font-['Aeonik',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b2936] text-[13px] text-center whitespace-nowrap">
                      <p className="leading-[18px]">Help</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_0px_8px_0px_rgba(0,31,27,0.05)]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-center left-0 overflow-clip pt-[16px] px-[16px] right-0">
          <button className={`content-stretch flex gap-[8px] h-[56px] items-center justify-center py-[16px] relative rounded-[80px] shrink-0 w-full cursor-pointer ${ctaClasses}`}>
            <div aria-hidden="true" className="absolute border border-[#021715] border-solid inset-0 pointer-events-none rounded-[80px]" />
            <div className={`flex flex-col font-['Aeonik',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] whitespace-nowrap ${ctaTextClasses}`}>
              <p className="leading-[20px]">{content.ctaText}</p>
            </div>
          </button>
          <div className="h-[34px] relative shrink-0 w-[375px]">
            <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" />
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute border-0 border-[#b50cf8] border-solid inset-0 pointer-events-none rounded-[44px]" />
    </div>
  );
}
