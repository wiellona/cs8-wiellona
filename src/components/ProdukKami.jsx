const ProdukKami = () => {
  const packages = [
    {
      title: "Serba Lima Ribu",
      internet: "Hingga 5 GB",
      masaAktif: "1 Hari",
      price: "Rp 5.000",
      color: "bg-gradient-to-r from-red-800 via-red-500 to-red-600",
    },
    {
      title: "Paket Internet",
      internet: "Hingga 8 GB",
      masaAktif: "1 Hari",
      price: "Rp 7.000",
      color: "bg-gradient-to-r from-red-800 via-red-500 to-red-600",
    },
    {
      title: "Internet Sepuasnya",
      internet: "SEPUASNYA",
      masaAktif: "1 Hari",
      price: "Rp 10.000",
      color: "bg-gradient-to-r from-red-800 via-red-500 to-red-600",
    },
    {
      title: "Super Seru 100",
      internet: "Hingga 100 GB",
      masaAktif: "30 Hari",
      price: "Rp 100.000",
      color: "bg-gradient-to-r from-red-800 via-red-500 to-red-600",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 px-6 md:px-24 mt-8">
      <h2 className="text-3xl font-bold text-black  mb-8 text-center">
        Telkomsel PraBayar
      </h2>
      <p className="text-gray-600 text-center mb-12">
        Satu produk, beragam pilihan paket
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className={`${pkg.color} p-4 rounded-t-xl`}>
              <h3 className="text-lg font-semibold text-white ">{pkg.title}</h3>
            </div>

            <div className="p-4">
              <div className="flex justify-between mb-4">
                <div className="text-gray-600">
                  <p className="font-medium">Internet</p>
                  <p className="text-sm">{pkg.internet}</p>
                </div>
                <div className="text-gray-600">
                  <p className="font-medium">Masa Aktif</p>
                  <p className="text-sm">{pkg.masaAktif}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-xl font-bold text-Red">{pkg.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-Red text-white px-6 py-2 rounded-full transition-colors duration-300">
          Lihat Semua Paket
        </button>
      </div>
    </section>
  );
};

export default ProdukKami;
