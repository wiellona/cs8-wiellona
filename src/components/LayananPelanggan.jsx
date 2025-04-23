import { useState } from "react";
import KartuPerdana from "../assets/beli-kartu-perdana.svg";
import eSIM from "../assets/simcard.svg";
import Exchange from "../assets/exchange.svg";
import Indihome from "../assets/indihome-icon.svg";
import CekOrder from "../assets/indihome_cek_order.svg";
import Bill from "../assets/bill.svg";
import Suspend from "../assets/indihome_suspend.svg";
import Orbit from "../assets/access-point.svg";

const LayananPelanggan = () => {
  const [activeCategory, setActiveCategory] = useState("mobile");

  const layanan = {
    mobile: [
      {
        title: "Beli Kartu Perdana",
        desc: "Beli Kartu Halo atau PraBayar baru",
        icon: KartuPerdana,
      },
      {
        title: "Beli eSIM Telkomsel",
        desc: "Beli eSIM PraBayar, Roaming, dan Turis",
        icon: eSIM,
      },
      {
        title: "Registrasi Kartu PraBayar",
        desc: "Aktifkan kartu baru dengan mudah",
        icon: eSIM,
      },
      {
        title: "Ganti Kartu/Migrasi ke 4G",
        desc: "Ganti kartu atau upgrade ke 4G",
        icon: Exchange,
      },
    ],
    indihome: [
      {
        title: "Pasang Baru",
        desc: "Daftar untuk berlangganan IndiHome",
        icon: Indihome,
      },
      {
        title: "Lacak Proses Permintaan",
        desc: "Pasang baru, pindah alamat, dan lainnya",
        icon: CekOrder,
      },
      {
        title: "Cek & Bayar Tagihan",
        desc: "Halo, IndiHome, atau Single Bill",
        icon: Bill,
      },
      {
        title: "Berhenti Langganan Sementara",
        desc: "Isolir layanan",
        icon: Suspend,
      },
    ],
    orbit: [
      {
        title: "Beli Modem Orbit",
        desc: "Dapatkan layanan internet orbit",
        icon: Orbit,
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 mb-36">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Layanan & Informasi
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(layanan).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? "bg-Red text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {layanan[activeCategory].map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            {/* SVG dari assets */}
            <img
              src={service.icon}
              alt="icon"
              className="w-8 h-8 mb-4 text-blue-600"
            />

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LayananPelanggan;
