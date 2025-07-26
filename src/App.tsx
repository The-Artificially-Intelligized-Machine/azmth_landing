// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Innovations from "./pages/Innovations.jsx";
import Future from "./pages/Future.jsx";
import Login from "./pages/Login.jsx";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";
const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>AZMTH - 24x7 AI Personal Assistant</title>
        <meta
          name="description"
          content="AZMTH - Your 24x7 AI personal assistant to manage tasks, stay informed, and boost productivity."
        />
        <meta
          name="keywords"
          content="AI personal assistant, task management, productivity, AZMTH"
        />
        <meta property="og:title" content="AZMTH - AI Personal Assistant" />
        <meta
          property="og:description"
          content="Manage your tasks, stay informed, and boost productivity with AZMTH."
        />
        <meta property="og:image" content="/azmth.svg" />
        <meta property="og:url" content="https://azmth.globaltfn.tech" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Helmet>
      <div className="bg-gradient-to-b from-[#0b0f10] to-[#0f3d4c] min-h-screen">
        <Analytics />
        <Navbar />
        <div className="bg-yellow-300 text-black text-center py-3">
          🚧 This website is still under construction. Some text may not be
          visible currectly. 🚧
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/future" element={<Future />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
