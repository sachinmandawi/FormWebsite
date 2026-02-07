import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import ImageCompressor from './pages/tools/ImageCompressor';
import ImageToPDF from './pages/tools/ImageToPDF';
import MergePDF from './pages/tools/MergePDF';
import SplitPDF from './pages/tools/SplitPDF';
import PassportPhotoMaker from './pages/tools/PassportPhotoMaker';
import SignPDF from './pages/tools/SignPDF';
import FormatConverter from './pages/tools/FormatConverter';
import ResizeImage from './pages/tools/ResizeImage';
import SignatureCreator from './pages/tools/SignatureCreator';
import ExamGuide from './pages/guides/ExamGuide';
import GuidesHub from './pages/guides/GuidesHub';
import ExamCalendar from './pages/ExamCalendar';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import Terms from './pages/legal/Terms';
import Disclaimer from './pages/legal/Disclaimer';
import Cookies from './pages/legal/Cookies';
import EligibilityChecker from './pages/tools/EligibilityChecker';
import DocumentScanner from './pages/tools/DocumentScanner';
import About from './pages/About';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/image-compressor" element={<ImageCompressor />} />
          <Route path="/tools/image-to-pdf" element={<ImageToPDF />} />
          <Route path="/tools/merge-pdf" element={<MergePDF />} />
          <Route path="/tools/split-pdf" element={<SplitPDF />} />
          <Route path="/tools/passport-photo-maker" element={<PassportPhotoMaker />} />
          <Route path="/tools/sign-pdf" element={<SignPDF />} />
          <Route path="/tools/resize-image" element={<ResizeImage />} />
          <Route path="/tools/jpg-to-png" element={<FormatConverter from="jpg" to="png" />} />
          <Route path="/tools/png-to-jpg" element={<FormatConverter from="png" to="jpg" />} />
          <Route path="/tools/jpg-to-webp" element={<FormatConverter from="jpg" to="webp" />} />
          <Route path="/tools/webp-to-jpg" element={<FormatConverter from="webp" to="jpg" />} />
          <Route path="/tools/png-to-webp" element={<FormatConverter from="png" to="webp" />} />
          <Route path="/tools/webp-to-png" element={<FormatConverter from="webp" to="png" />} />
          <Route path="/tools/image-converter" element={<FormatConverter />} />
          <Route path="/tools/signature-creator" element={<SignatureCreator />} />
          <Route path="/tools/document-scanner" element={<DocumentScanner />} />
          <Route path="/tools/eligibility-checker" element={<EligibilityChecker />} />
          <Route path="/guides" element={<GuidesHub />} />
          <Route path="/guides/:examId" element={<ExamGuide />} />
          <Route path="/exam-calendar" element={<ExamCalendar />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
