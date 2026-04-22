import { useState } from 'react';
import electraLogo from '../../../imports/electra.png';
import ecranImg from '../../../imports/ecran.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ChargingScreen from '../charging/ChargingScreen';
import NotificationsPreview from '../charging/NotificationsPreview';
import { ChargingState } from '../charging/types';

const DEMO_STATES: { name: string; state: ChargingState }[] = [
  {
    name: '04-Plateau nominal',
    state: { phase: '04-plateau', modulator: 'nominal', incident: null, timeElapsed: 25, cost: 2.95, battery: 30, power: 180 },
  },
  {
    name: '04-Plateau cold',
    state: { phase: '04-plateau', modulator: 'cold', incident: null, timeElapsed: 32, cost: 3.80, battery: 28, power: 85 },
  },
  {
    name: '04-Plateau hot',
    state: { phase: '04-plateau', modulator: 'hot', incident: null, timeElapsed: 28, cost: 3.20, battery: 32, power: 95 },
  },
  {
    name: '04-Plateau unknown reason',
    state: { phase: '04-plateau', modulator: 'unknown', incident: null, timeElapsed: 22, cost: 2.65, battery: 26, power: 75 },
  },
  {
    name: '03-Ramp up nominal',
    state: { phase: '03-rampup', modulator: 'nominal', incident: null, timeElapsed: 8, cost: 0.95, battery: 22, power: 150 },
  },
  {
    name: '03-Ramp up cold',
    state: { phase: '03-rampup', modulator: 'cold', incident: null, timeElapsed: 10, cost: 1.20, battery: 20, power: 65 },
  },
  {
    name: '05-Tapering nominal',
    state: { phase: '05-tapering', modulator: 'tapering-soc', incident: null, timeElapsed: 48, cost: 8.45, battery: 87, power: 62 },
  },
  {
    name: '05-Tapering cold',
    state: { phase: '05-tapering', modulator: 'cold', incident: null, timeElapsed: 52, cost: 9.10, battery: 85, power: 45 },
  },
  {
    name: '06-Complete',
    state: { phase: '06-complete', modulator: 'nominal', incident: null, timeElapsed: 52, cost: 9.80, battery: 100, power: 0 },
  },
  {
    name: 'I7-Autocharge off',
    state: { phase: '01-plugged', modulator: 'nominal', incident: 'i7-autocharge-off', timeElapsed: 0, cost: 0, battery: 18, power: 0 },
  },
  {
    name: 'I2-Payment issue',
    state: { phase: '04-plateau', modulator: 'nominal', incident: 'i2-payment', timeElapsed: 15, cost: 1.85, battery: 18, power: 0 },
  },
  {
    name: 'I5-Overheating',
    state: { phase: '04-plateau', modulator: 'nominal', incident: 'i5-overheating', timeElapsed: 18, cost: 2.10, battery: 22, power: 0 },
  },
];

export default function PresentationApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);

  const currentDemoState = DEMO_STATES[selectedStateIndex].state;

  const nextState = () => {
    if (selectedStateIndex < DEMO_STATES.length - 1) {
      setSelectedStateIndex(selectedStateIndex + 1);
    }
  };

  const prevState = () => {
    if (selectedStateIndex > 0) {
      setSelectedStateIndex(selectedStateIndex - 1);
    }
  };

  const slides = [
    // Slide 1: Cover
    {
      id: 'cover',
      bg: 'bg-[#0b2936]',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-8xl font-light mb-8">Charging Screen</h1>
          <p className="text-4xl text-[#43f5ba] mb-16">From data to feelings</p>
          <p className="text-xl opacity-60">Product Design Case Study · Electra EV Charging</p>
        </div>
      ),
    },

    // Slide 2: Problem reframing
    {
      id: 'problem',
      bg: 'bg-[#0b2936]',
      content: (
        <div className="px-16 py-16 text-white">
          <h2 className="text-6xl font-light mb-12">Reframing the real problem</h2>
          <div className="grid grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-2xl line-through opacity-50 mb-4">"Show the data"</p>
              <p className="text-xl opacity-70">The implicit brief</p>
              <div className="mt-6 space-y-2 text-base opacity-60">
                <p>• 180 kW</p>
                <p>• 30%</p>
                <p>• 25 min</p>
                <p>• 2.95€</p>
              </div>
            </div>
            <div>
              <p className="text-2xl text-[#43f5ba] mb-4">"Answer the feelings"</p>
              <p className="text-xl opacity-70">The real brief</p>
              <div className="mt-6 space-y-2 text-base text-[#43f5ba]/80">
                <p>• Is everything normal?</p>
                <p>• Should I worry?</p>
                <p>• Can I leave?</p>
                <p>• Will it cost more?</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-8">
            <p className="text-xl leading-relaxed">
              Users don't need more <span className="text-[#43f5ba]">data</span> — they need to understand
              what it <span className="text-[#43f5ba]">means</span>. The screen must translate technical
              states into emotional answers: normal, healthy, safe, done.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 3: Personas
    {
      id: 'personas',
      bg: 'bg-[#0b2936]',
      content: (
        <div className="px-16 py-16 text-white">
          <h2 className="text-6xl font-light mb-4">User research</h2>
          <p className="text-2xl opacity-70 mb-12">Two profiles, one need</p>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-light mb-2">Thomas, 38</h3>
                <p className="opacity-60">Field sales rep · Tesla Model 3 · iOS</p>
                <p className="opacity-60">EV expert · 3–4 charges/week</p>
              </div>
              <div className="bg-[#43f5ba]/20 rounded-xl p-6">
                <p className="text-2xl italic text-[#43f5ba]">"What I hate is uncertainty."</p>
              </div>
              <div className="space-y-2">
                <p>• Checks the app 2–3× per session</p>
                <p>• Wants contextual interpretation</p>
                <p>• Autocharge is non-negotiable</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-light mb-2">Amina, 31</h3>
                <p className="opacity-60">Physiotherapist · Megane E-Tech · Android</p>
                <p className="opacity-60">Intermediate · 1–2 charges/week</p>
              </div>
              <div className="bg-[#43f5ba]/20 rounded-xl p-6">
                <p className="text-2xl italic text-[#43f5ba]">"I need the app to tell me one sentence."</p>
              </div>
              <div className="space-y-2">
                <p>• Doesn't read power output spontaneously</p>
                <p>• Wants a single summary sentence</p>
                <p>• Cost visibility is essential</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 4: Strong signals
    {
      id: 'insights',
      bg: 'bg-[#0b2936]',
      content: (
        <div className="px-16 py-16 text-white">
          <h2 className="text-6xl font-light mb-4">Prioritization synthesis</h2>
          <p className="text-2xl opacity-70 mb-12">Strong signals · Shared insights, profile-independent</p>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl p-8 border-l-4 border-[#43f5ba]">
              <h4 className="text-xl text-[#43f5ba] mb-4">① Reading hierarchy is identical despite opposite profiles</h4>
              <p className="text-lg opacity-90 leading-relaxed">
                Both: <span className="text-[#43f5ba]">Time remaining &gt; battery % &gt; remainder.</span> kW/power output are not read spontaneously.
                The current information architecture — which surfaces power first — is the inverse of actual usage.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border-l-4 border-[#ff9800]">
              <h4 className="text-xl text-[#ff9800] mb-4">② Slowness without context is perceived as a breakdown</h4>
              <p className="text-lg opacity-90 leading-relaxed">
                Both: Neither user spontaneously understands why charging slows down. Thomas wants
                "just an indication that it's normal." The app shows <span className="line-through opacity-50">data</span> but doesn't
                answer the <span className="text-[#ff9800]">feeling</span>: "Should I worry?"
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border-l-4 border-[#ff5252]">
              <h4 className="text-xl text-[#ff5252] mb-4">③ "I don't know what I'm missing" signals adaptation, not satisfaction</h4>
              <p className="text-lg opacity-90 leading-relaxed">
                Both answer that nothing is missing. But their verbatims reveal anxiety, misunderstandings,
                and workaround behaviors. Users have adapted to limitations.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5: Matrix concept
    {
      id: 'matrix',
      bg: 'bg-[#E7FFFC]',
      content: (
        <div className="flex flex-col items-center justify-center h-full w-full px-16 py-16 text-white">
          <h2 className="text-6xl font-light mb-12 text-[#0b2936]">Concept explorations</h2>
          <div className="flex-1 flex items-center justify-center w-full">
            <img 
              src={electraLogo} 
              alt="Concept explorations" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      ),
    },

    // Slide 6: Final choice
    {
      id: 'final-choice',
      bg: 'bg-[#0b2936]',
      content: (
        <div className="flex flex-col h-full w-full px-16 py-10">
          <h2 className="text-4xl font-light text-white mb-6">Final choice</h2>
          <div className="flex-1 flex items-center justify-center min-h-0">
            <img src={ecranImg} alt="Final choice" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      ),
    },

    // Slide 7: High-fidelity interactive
    {
      id: 'hifi-interactive',
      bg: 'bg-[#0b2936]',
      content: (
        <div className="relative h-full">
          <div className="flex items-center justify-between h-full px-16">
            <div className="w-[45%] space-y-6 text-white">
              <div>
                <h2 className="text-4xl font-light mb-4 leading-tight">
                  Data <span className="opacity-40">(kW, %, time)</span> transformed into feelings <span className="text-[#43f5ba]">(normal, healthy, safe)</span>
                </h2>
                <p className="text-lg opacity-60 mb-4">Platform: iOS · Interactive demo</p>
                <div className="bg-[#43f5ba]/10 rounded-xl p-4 border-l-4 border-[#43f5ba]">
                  <p className="font-medium text-lg mb-2">Current state:</p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-2xl text-[#43f5ba]">{DEMO_STATES[selectedStateIndex].name}</p>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={prevState}
                        disabled={selectedStateIndex === 0}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                      >
                        <ChevronLeft className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={nextState}
                        disabled={selectedStateIndex === DEMO_STATES.length - 1}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                      >
                        <ChevronRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-[#43f5ba]">NAVIGATE STATES</h4>
                <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-2">
                  {DEMO_STATES.map((demo, index) => (
                    <button
                      key={demo.name}
                      onClick={() => setSelectedStateIndex(index)}
                      className={`text-left p-3 rounded-lg text-sm cursor-pointer transition-all ${
                        index === selectedStateIndex
                          ? 'bg-[#43f5ba] text-white'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      {demo.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs opacity-60">
                <p>Use the grid above to explore all 12 key states</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ChargingScreen state={currentDemoState} />
            </div>
          </div>

        </div>
      ),
    },

    // Slide 7: Notifications
    {
      id: 'notifications',
      bg: 'bg-[#0b2936]',
      content: (
        <div className="flex items-center justify-between h-full px-16">
          <div className="w-[45%] space-y-6 text-white">
            <div>
              <h2 className="text-5xl font-light mb-4">Native push notifications</h2>
              <p className="text-xl opacity-60">Platform: iOS · Native style</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-[#43f5ba]">DESIGN DECISIONS</h4>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#43f5ba] flex items-center justify-center text-white text-xs shrink-0">1</div>
                  <div>
                    <p className="font-medium">Tone-coded icons</p>
                    <p className="opacity-70">Color by urgency: Info, Action, Alert, Success. Instant triage.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#43f5ba] flex items-center justify-center text-white text-xs shrink-0">2</div>
                  <div>
                    <p className="font-medium">Autocharge off with action</p>
                    <p className="opacity-70">"Start charging" button in notification. No app needed.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#43f5ba] flex items-center justify-center text-white text-xs shrink-0">3</div>
                  <div>
                    <p className="font-medium">Feelings over data</p>
                    <p className="opacity-70">"Battery too cold for full power. Charge is still healthy." — reassures while explaining.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#43f5ba] flex items-center justify-center text-white text-xs shrink-0">4</div>
                  <div>
                    <p className="font-medium">Complete ecosystem</p>
                    <p className="opacity-70">9 notification types covering all phases and critical incidents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <NotificationsPreview />
          </div>
        </div>
      ),
    },

    // Slide 8: Thank you
    {
      id: 'thanks',
      bg: 'bg-[#0b2936]',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-7xl font-light mb-8">Thank you</h1>
          <p className="text-3xl text-[#43f5ba] mb-4">From data to feelings</p>
          <p className="text-lg opacity-60">EV Charging Screen Redesign · Product Design Case Study</p>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const current = slides[currentSlide];

  if (!current) {
    return (
      <div className="w-full h-screen bg-[#0b2936] flex items-center justify-center text-white">
        <p>Loading...</p>
      </div>
    );
  }

  const isLightBg = current.bg.includes('bg-white');

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Current slide */}
      <div className={`w-full h-full ${current.bg}`}>
        {current.content}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 backdrop-blur-md rounded-full px-6 py-3 bg-[#0b2936]/80">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all ${
            isLightBg ? 'hover:bg-white/20' : 'hover:bg-white/20'
          }`}
        >
          <ChevronLeft className={`w-6 h-6 ${isLightBg ? 'text-white' : 'text-white'}`} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentSlide
                  ? 'w-8 bg-[#43f5ba]'
                  : isLightBg
                  ? 'w-2 bg-white/60 hover:bg-white/80'
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all ${
            isLightBg ? 'hover:bg-white/20' : 'hover:bg-white/20'
          }`}
        >
          <ChevronRight className={`w-6 h-6 ${isLightBg ? 'text-white' : 'text-white'}`} />
        </button>
      </div>

      {/* Slide counter */}
      <div className={`absolute top-8 right-8 text-sm ${
        isLightBg ? 'text-[#0b2936]/60' : 'text-white/60'
      }`}>
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}