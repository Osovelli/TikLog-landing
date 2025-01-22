import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import PrivacyPage from './pages/PrivacyPage';
import DeliveryPolicyPage from './pages/DeliveryPolicy';




function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/terms-&-condition' element={<TermsPage />} />
                <Route path='/about-us' element={<AboutPage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/privacy-policy' element={<PrivacyPage />} />
                <Route path='/delivery-policy' element={<DeliveryPolicyPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
