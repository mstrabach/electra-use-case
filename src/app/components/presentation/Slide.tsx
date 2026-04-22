import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  background?: 'dark' | 'light' | 'accent';
  layout?: 'default' | 'split' | 'full';
}

export default function Slide({ children, title, subtitle, background = 'dark', layout = 'default' }: SlideProps) {
  const bgClasses = {
    dark: 'bg-[#0b2936]',
    light: 'bg-white',
    accent: 'bg-[#43f5ba]',
  };

  const textClasses = {
    dark: 'text-white',
    light: 'text-[#0b2936]',
    accent: 'text-[#0b2936]',
  };

  return (
    <div className={`w-full h-screen flex flex-col ${bgClasses[background]} ${textClasses[background]}`}>
      {(title || subtitle) && (
        <div className="px-16 pt-16 pb-8">
          {title && (
            <h1 className="font-light text-6xl leading-tight mb-4">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-2xl opacity-70">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={`flex-1 ${layout === 'split' ? 'grid grid-cols-2 gap-8' : ''} ${layout === 'default' ? 'px-16 pb-16' : ''} ${layout === 'full' ? '' : ''}`}>
        {children}
      </div>
    </div>
  );
}
