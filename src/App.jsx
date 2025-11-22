import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Employers from './pages/Employers';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import ThankYou from './pages/ThankYou';
import DevOps from './pages/services/DevOps';
import ITConsulting from './pages/services/ITConsulting';
import MobileDevelopment from './pages/services/MobileDevelopment';
import DigitalTransformation from './pages/services/DigitalTransformation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="employers" element={<Employers />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:id" element={<JobDetail />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
        <Route path="services/devops" element={<DevOps />} />
        <Route path="services/consulting" element={<ITConsulting />} />
        <Route path="services/mobile" element={<MobileDevelopment />} />
        <Route path="services/transformation" element={<DigitalTransformation />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="thank-you" element={<ThankYou />} />
      </Route>
    </Routes>
  );
}

export default App;
