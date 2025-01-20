import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';




function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/terms-&-condition' element={<TermsPage />} />
                <Route path='/about-us' element={<AboutPage />} />
                <Route path='/services' element={<ServicesPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
