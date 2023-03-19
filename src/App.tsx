import Spacer from './components/separator/Spacer';
import CvForm from './components/forms/CvForm';

import './_app.scss';

export default function App() {
  return (
    <div className="app">
      <h1>Curriculum Vitae Creator</h1>
      <Spacer />
      <CvForm />
    </div>
  );
}