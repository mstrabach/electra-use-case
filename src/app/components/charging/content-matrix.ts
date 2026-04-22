import { LifecyclePhase, PowerModulator, Incident, StateContent } from './types';

type MatrixKey = `${LifecyclePhase}-${PowerModulator}`;

export const LIFECYCLE_CONTENT: Record<MatrixKey, StateContent> = {
  // Phase 01 - Plugged, in auth
  '01-plugged-nominal': {
    headline: 'Almost there',
    statusLabel: 'Getting you connected',
    statusIcon: 'clock',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '01-plugged-cold': {
    headline: 'Almost there',
    statusLabel: 'Getting you connected',
    statusIcon: 'clock',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '01-plugged-hot': {
    headline: 'Almost there',
    statusLabel: 'Getting you connected',
    statusIcon: 'clock',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '01-plugged-tapering-soc': {
    headline: 'Almost there',
    statusLabel: 'Getting you connected',
    statusIcon: 'clock',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '01-plugged-shared': {
    headline: 'Almost there',
    statusLabel: 'Getting you connected',
    statusIcon: 'clock',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '01-plugged-unknown': {
    headline: 'Almost there',
    statusLabel: 'Getting you connected',
    statusIcon: 'clock',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'neutral'
  },

  // Phase 02 - Handshake / Preco
  '02-handshake-nominal': {
    headline: 'Warming up together',
    statusLabel: 'Preconditioning your battery',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '02-handshake-cold': {
    headline: 'Warming up together',
    deeplink: 'Why preconditioning matters →',
    statusLabel: 'Preconditioning your battery',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '02-handshake-hot': {
    headline: 'Warming up together',
    statusLabel: 'Preconditioning your battery',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '02-handshake-tapering-soc': {
    headline: 'Warming up together',
    statusLabel: 'Preconditioning your battery',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '02-handshake-shared': {
    headline: 'Warming up together',
    statusLabel: 'Preconditioning your battery',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '02-handshake-unknown': {
    headline: 'Warming up together',
    statusLabel: 'Preconditioning your battery',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },

  // Phase 03 - Ramp up
  '03-rampup-nominal': {
    headline: 'Electrons. Electrons everywhere.',
    statusLabel: 'Power ramping up',
    statusIcon: 'lightning',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '03-rampup-cold': {
    headline: 'Gentle start',
    deeplink: 'Cold weather charging →',
    statusLabel: 'Battery warming up',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '03-rampup-hot': {
    headline: 'Cooling before speed',
    deeplink: 'Battery temperature management →',
    statusLabel: 'Battery cooling down',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '03-rampup-tapering-soc': {
    headline: 'Electrons. Electrons everywhere.',
    statusLabel: 'Power ramping up',
    statusIcon: 'lightning',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '03-rampup-shared': {
    headline: 'Sharing power right now',
    deeplink: 'How power sharing works →',
    statusLabel: 'Shared with a neighbor',
    statusIcon: 'users',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },
  '03-rampup-unknown': {
    headline: 'Electrons. Electrons everywhere.',
    statusLabel: 'Analyzing optimal power — charge continues',
    statusIcon: 'lightning',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'green'
  },

  // Phase 04 - Plateau nominal
  '04-plateau-nominal': {
    headline: 'Time for a coffee nearby →',
    statusLabel: 'Charging at full power',
    statusIcon: 'lightning',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '04-plateau-cold': {
    headline: 'Slower today, healthier for longer',
    deeplink: 'Why cold limits charging speed →',
    statusLabel: 'Too cold to charge at full power',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '04-plateau-hot': {
    headline: 'Taking it easy',
    deeplink: 'Battery protecting itself →',
    statusLabel: 'Battery protecting itself',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '04-plateau-tapering-soc': {
    headline: 'Time for a coffee nearby →',
    statusLabel: 'Charging at full power',
    statusIcon: 'lightning',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '04-plateau-shared': {
    headline: 'Time for a coffee nearby →',
    deeplink: 'Power sharing active →',
    statusLabel: 'Shared with a neighbor',
    statusIcon: 'users',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '04-plateau-unknown': {
    headline: 'Everything\'s fine, analysing data',
    statusLabel: 'Optimizing power — will update you soon',
    statusIcon: 'lightning',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },

  // Phase 05 - Tapering (>80%)
  '05-tapering-nominal': {
    headline: 'Almost full — last miles take longer',
    deeplink: 'Why charging slows down at 80% →',
    statusLabel: 'Battery protection active',
    statusIcon: 'lightning',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '05-tapering-cold': {
    headline: 'Almost full — last miles take longer',
    deeplink: 'Tapering + cold weather →',
    statusLabel: 'Too cold + battery protection',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '05-tapering-hot': {
    headline: 'Almost full — last miles take longer',
    deeplink: 'Tapering + heat management →',
    statusLabel: 'Battery protecting itself',
    statusIcon: 'thermometer',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '05-tapering-tapering-soc': {
    headline: 'Almost full — last miles take longer',
    deeplink: 'Why charging slows down at 80% →',
    statusLabel: 'Natural tapering active',
    statusIcon: 'lightning',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '05-tapering-shared': {
    headline: 'Almost full — last miles take longer',
    deeplink: 'Tapering + power sharing →',
    statusLabel: 'Shared with a neighbor',
    statusIcon: 'users',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },
  '05-tapering-unknown': {
    headline: 'Almost full — last miles take longer',
    statusLabel: 'Analyzing power curve — charge continues',
    statusIcon: 'lightning',
    ctaText: 'Stop charging',
    ctaVariant: 'primary',
    color: 'green'
  },

  // Phase 06 - Complete
  '06-complete-nominal': {
    headline: 'Ready. Unplug when you are.',
    statusLabel: 'Charging complete',
    statusIcon: 'lightning',
    ctaText: 'End session',
    ctaVariant: 'primary',
    color: 'green'
  },
  '06-complete-cold': {
    headline: 'Ready. Unplug when you are.',
    statusLabel: 'Charging complete',
    statusIcon: 'lightning',
    ctaText: 'End session',
    ctaVariant: 'primary',
    color: 'green'
  },
  '06-complete-hot': {
    headline: 'Ready. Unplug when you are.',
    statusLabel: 'Charging complete',
    statusIcon: 'lightning',
    ctaText: 'End session',
    ctaVariant: 'primary',
    color: 'green'
  },
  '06-complete-tapering-soc': {
    headline: 'Ready. Unplug when you are.',
    statusLabel: 'Charging complete',
    statusIcon: 'lightning',
    ctaText: 'End session',
    ctaVariant: 'primary',
    color: 'green'
  },
  '06-complete-shared': {
    headline: 'Ready. Unplug when you are.',
    statusLabel: 'Charging complete',
    statusIcon: 'lightning',
    ctaText: 'End session',
    ctaVariant: 'primary',
    color: 'green'
  },
  '06-complete-unknown': {
    headline: 'Ready. Unplug when you are.',
    statusLabel: 'Charging complete',
    statusIcon: 'lightning',
    ctaText: 'End session',
    ctaVariant: 'primary',
    color: 'green'
  },

  // Phase 07 - Post-unplug
  '07-postunplug-nominal': {
    headline: 'See you on the road',
    statusLabel: 'Session ended',
    statusIcon: 'wallet',
    ctaText: 'View receipt',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '07-postunplug-cold': {
    headline: 'See you on the road',
    statusLabel: 'Session ended',
    statusIcon: 'wallet',
    ctaText: 'View receipt',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '07-postunplug-hot': {
    headline: 'See you on the road',
    statusLabel: 'Session ended',
    statusIcon: 'wallet',
    ctaText: 'View receipt',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '07-postunplug-tapering-soc': {
    headline: 'See you on the road',
    statusLabel: 'Session ended',
    statusIcon: 'wallet',
    ctaText: 'View receipt',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '07-postunplug-shared': {
    headline: 'See you on the road',
    statusLabel: 'Session ended',
    statusIcon: 'wallet',
    ctaText: 'View receipt',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  '07-postunplug-unknown': {
    headline: 'See you on the road',
    statusLabel: 'Session ended',
    statusIcon: 'wallet',
    ctaText: 'View receipt',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
};

export const INCIDENT_CONTENT: Record<Exclude<Incident, null>, StateContent> = {
  'i1-comloss': {
    headline: 'Reconnecting…',
    statusLabel: 'Network issue, power held',
    statusIcon: 'alert',
    ctaText: 'Stop charging',
    ctaVariant: 'secondary',
    color: 'amber'
  },
  'i2-payment': {
    headline: "Let's fix your payment",
    statusLabel: 'Card declined',
    statusIcon: 'wallet',
    ctaText: 'Update payment',
    ctaVariant: 'primary',
    color: 'amber'
  },
  'i3-station-fault': {
    headline: 'This station needs a break',
    deeplink: 'Find another station →',
    statusLabel: 'Station error',
    statusIcon: 'alert',
    ctaText: 'Find another station',
    ctaVariant: 'primary',
    color: 'amber'
  },
  'i4-cable': {
    headline: "Let's check the cable",
    statusLabel: 'Connector issue',
    statusIcon: 'alert',
    ctaText: 'Call support',
    ctaVariant: 'primary',
    color: 'amber'
  },
  'i5-overheating': {
    headline: 'Unplug your car now',
    statusLabel: 'Abnormal overheating',
    statusIcon: 'alert',
    ctaText: 'Emergency stop',
    ctaVariant: 'danger',
    color: 'red'
  },
  'i6-queue': {
    headline: "You're next. 7 min.",
    statusLabel: "Someone's finishing up",
    statusIcon: 'clock',
    ctaText: 'Leave queue',
    ctaVariant: 'secondary',
    color: 'neutral'
  },
  'i7-autocharge-off': {
    headline: 'Plugged in. Tap to start.',
    deeplink: 'Enable Autocharge for next time →',
    statusLabel: 'Autocharge is off',
    statusIcon: 'alert',
    ctaText: 'Start charging',
    ctaVariant: 'primary',
    color: 'amber'
  },
};

export function getStateContent(phase: LifecyclePhase, modulator: PowerModulator, incident: Incident): StateContent {
  if (incident) {
    return INCIDENT_CONTENT[incident];
  }

  const key: MatrixKey = `${phase}-${modulator}`;
  return LIFECYCLE_CONTENT[key];
}
