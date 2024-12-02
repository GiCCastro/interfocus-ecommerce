import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importando CartProvider

// Componentes locais // 
import UserRegister from './containers/user/user_register/userRegister';
import Login from './containers/user/login/login';
import Packages from './containers/packages/packages'; 
import SubscriptionStatus from './containers/subscription/subscription_status/subscriptionStatus';
import SubscriptionUpdate from './containers/subscription/subscription_update/subscriptionUpdate';
import Payment from './containers/subscription/payment/payment';
import Home from './containers/home/home';
import LoggedHeader from './components/loggedHeader';
import Footer from './components/footer';
import Contact from './containers/contact/contact';
import ManagePackages from './containers/packages/manage_packages';

// Estilos //
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { containerStyle } from './styles/globalStyles';

const App = () => {
  return (
    <CartProvider> {/* Envolvendo o App com CartProvider */}
      <Router>
        <LoggedHeader /> 
        <div style={containerStyle}>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/user-register" element={<UserRegister />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/packages" element={<Packages />} />
            <Route path="/status" element={<SubscriptionStatus />} />
            <Route path="/subscription-update" element={<SubscriptionUpdate />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/manage_packages" element={<ManagePackages />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
