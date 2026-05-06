/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import IphonePage from './pages/IphonePage';
import AccessoryPage from './pages/AccessoryPage';
import { AppProvider } from './context/AppContext';
import LoginModal from './components/LoginModal';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-black text-white">
          <LoginModal />
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/iphone" element={<IphonePage />} />
              <Route path="/accessories" element={<AccessoryPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              {/* Fallback to home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
