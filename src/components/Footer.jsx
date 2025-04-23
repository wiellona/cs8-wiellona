const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Bagian 1 - Tentang Perusahaan */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Telkomsel</h3>
            <p className="text-sm text-white">
              Menghubungkan Indonesia dengan inovasi digital terdepan sejak 1995
            </p>
            <div className="mt-4 space-y-2 text-sm text-white">
              <p className="text-sm">Kantor Pusat:</p>
              <p className="text-xs text-white">
                Jl. Letjen MT. Haryono Kav. 6-8, Jakarta 13340
              </p>
            </div>
          </div>

          {/* Bagian 2 - Produk */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Produk</h3>
            <ul className="space-y-2">
              {["PraBayar", "PascaBayar", "Roaming", "Enterprise"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Bagian 3 - Layanan */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Layanan</h3>
            <ul className="space-y-2">
              {["Bantuan", "Cek Coverage", "Lacak Pesanan", "eSIM"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Bagian 4 - Kontak */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Hubungi Kami</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm">0807 188 1881</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">customercare@telkomsel.co.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-6">
              {["facebook", "twitter", "instagram", "youtube"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-white hover:text-blue-400"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Ikon sosial media */}
                    </svg>
                  </a>
                )
              )}
            </div>
            <p className="text-xs text-white text-center">
              © {new Date().getFullYear()} Telkomsel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
