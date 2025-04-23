const TentangKami = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-base font-semibold text-blueDark uppercase tracking-wide">
            TENTANG KAMI
          </h2>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Membangun Masa Depan Digital Indonesia
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Sebagai pionir dalam industri telekomunikasi, Telkomsel berkomitmen
            untuk menghubungkan setiap sudut negeri dengan inovasi terdepan.
            Kami terus berkontribusi dalam menciptakan ekosistem digital yang
            inklusif dan mendorong transformasi digital di seluruh lapisan
            masyarakat.
          </p>

          <button className="bg-blueDark text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
            Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
