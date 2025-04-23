import { useState, useEffect } from "react";
import Logo from "../assets/surprisedeal.png";

export default function Carousel() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const deadline = new Date("2026-07-22T23:59:59");
    const difference = deadline - new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <div className="h-screen bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950  flex items-center justify-center mx-4 md:mx-24 rounded-b-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col-reverse md:flex-row items-center p-8 md:p-16 gap-8 md:gap-16 w-full">
        {/* Text Content */}
        <div className="flex flex-col text-center md:text-left text-white w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
            #SurpriseDeal Nelpon
          </h1>

          {/* Timer */}
          <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
            <p className="text-sm mb-2 opacity-90">Berakhir dalam</p>
            <div className="flex gap-3 justify-center md:justify-start">
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-mono font-bold">
                  {formatTime(timeLeft.days)}
                </span>
                <span className="text-xs opacity-75">Hari</span>
              </div>
              <span className="text-2xl md:text-3xl">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-mono font-bold">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-xs opacity-75">Jam</span>
              </div>
              <span className="text-2xl md:text-3xl">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-mono font-bold">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-xs opacity-75">Menit</span>
              </div>
              <span className="text-2xl md:text-3xl">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-mono font-bold">
                  {formatTime(timeLeft.seconds)}
                </span>
                <span className="text-xs opacity-75">Detik</span>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl mb-6 opacity-95 leading-relaxed">
            Teleponan ke mana aja hingga 20.000 menit!
            <br />
            Aktifkan paketnya pada 24-25 April 2025
          </p>

          <button className="bg-white text-Red hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-bold py-3 px-8 rounded-full text-lg md:text-xl mx-auto md:mx-0 shadow-lg w-fit">
            Beli Sekarang
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center relative group">
          <img
            src={Logo}
            alt="Promo"
            className="w-64 md:w-96 transition-transform duration-500 hover:scale-105 hover:rotate-2"
          />
        </div>
      </div>
    </div>
  );
}
