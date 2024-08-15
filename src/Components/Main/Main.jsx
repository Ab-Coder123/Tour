import { useState } from "react";
import img1 from "../../assets/Images/female-abu-simbel-temple-southern-egypt-lake-nasser_181624-56071.avif";
import img2 from "../../assets/Images/portrait-young-man-blue-turban-walking-pyramids-giza-cairo-egypt_181624-55528.avif";
import img3 from "../../assets/Images/young-man-walking-egyptian-temple_181624-44493.avif";
import img4 from "../../assets/Images/young-tourist-wearing-blue-turban-standing-near-great-sphinx-giza-cairo-egypt_181624-46822.avif";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      imgSrc: img1,
      title: "Welcome to Toothtown Dental",
      subtitle: "We're here to make it easy for you to SMILE",
    },
    {
      imgSrc: img2,
      title: "Welcome to Toothtown Dental",
      subtitle: "We're here to make it easy for you to SMILE",
    },
    {
      imgSrc: img3,
      title: "Welcome to Toothtown Dental",
      subtitle: "We're here to make it easy for you to SMILE",
    },
    {
      imgSrc: img4,
      title: "Welcome to Toothtown Dental",
      subtitle: "We're here to make it easy for you to SMILE",
    },
  ];

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="my-1">
      <div className="relative w-full">
        <div className="relative h-screen overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.imgSrc}
                className="w-full h-full object-cover"
                alt={slide.title}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-5 bg-gradient-to-t from-black/70 to-transparent">
                <h1 className="text-white font-bold text-4xl sm:text-6xl pb-4 sm:pb-10">
                  {slide.title}
                </h1>
                <p className="text-white text-xl sm:text-4xl pb-3 sm:pb-6">
                  {slide.subtitle}
                </p>
                <button
                  type="button"
                  className="text-white bg-purple-500 w-60 sm:w-60 hover:bg-purple-700 border border-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm px-4 sm:px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-purple-600 dark:bg-purple-800 dark:border-purple-700 dark:text-white dark:hover:bg-purple-700 mb-5 sm:mb-10"
                >
                  MAKE AN APPOINTMENT
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-white"
              }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Main;
