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
import ExamGuide from './pages/guides/ExamGuide';
import GuidesHub from './pages/guides/GuidesHub';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/guides" element={<GuidesHub />} />
          <Route path="/guides/:examId" element={<ExamGuide />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
