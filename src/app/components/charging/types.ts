export type LifecyclePhase = '01-plugged' | '02-handshake' | '03-rampup' | '04-plateau' | '05-tapering' | '06-complete' | '07-postunplug';

export type PowerModulator = 'nominal' | 'cold' | 'hot' | 'tapering-soc' | 'shared' | 'unknown';

export type Incident = 'i1-comloss' | 'i2-payment' | 'i3-station-fault' | 'i4-cable' | 'i5-overheating' | 'i6-queue' | 'i7-autocharge-off' | null;

export interface ChargingState {
  phase: LifecyclePhase;
  modulator: PowerModulator;
  incident: Incident;

  // Dynamic values
  timeElapsed: number; // minutes
  cost: number; // euros
  battery: number; // percentage
  power: number; // kW
}

export interface StateContent {
  headline: string;
  deeplink?: string;
  statusLabel: string;
  statusIcon: 'clock' | 'wallet' | 'lightning' | 'thermometer' | 'users' | 'alert';
  ctaText: string;
  ctaVariant: 'primary' | 'secondary' | 'danger';
  color: 'green' | 'amber' | 'red' | 'neutral';
}
