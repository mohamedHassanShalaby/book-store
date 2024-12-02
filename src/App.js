import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/home/HomePage";
import { About } from "./pages/about/About";
import { Authors } from "./pages/authors/Authors";
import { Cart } from "./pages/cart/Cart";
import { LoginForm } from "./pages/forms/LoginForm";
import { RegisterForm } from "./pages/forms/RegisterForm";
import { Contact } from "./pages/contact/Contact";
import { Book } from "./pages/book/Book";
function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="authors" element={<Authors />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book/:id" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
