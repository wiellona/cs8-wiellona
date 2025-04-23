// App.jsx
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProdukKami from "./components/ProdukKami.jsx";
import TentangKami from "./components/TentangKami.jsx";
import LayananPelanggan from "./components/LayananPelanggan.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="produk-kami">
        <ProdukKami />
      </section>

      <section id="tentang-kami">
        <TentangKami />
      </section>

      <section id="layanan-pelanggan">
        <LayananPelanggan />
      </section>

      <Footer />
    </div>
  );
}
