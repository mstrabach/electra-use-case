import PresentationApp from './components/presentation/PresentationApp';
import PasswordGate from './components/PasswordGate';

export default function App() {
  return (
    <PasswordGate>
      <PresentationApp />
    </PasswordGate>
  );
}
