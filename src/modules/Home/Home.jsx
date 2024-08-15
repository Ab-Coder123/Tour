import Main from "../../Components/Main/Main";
import Nav from "../../Components/Navbar/Nav";

import { useEffect, useState } from "react";

const Home = () => {
  //  dark mode

  const [darkblack, setDarkMode] = useState("light");

  useEffect(() => {
    if (darkblack === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkblack]);

  const toggleDarkMode = () => {
    setDarkMode(darkblack === "dark" ? "light" : "dark");
  };
  return (
    <div>

      <div className="bg-none  fixed  top-44 ml-5 z-40">
        <label className="ui-switch">
          <input type="checkbox" />
          <div onClick={toggleDarkMode} className="slider">
            <div className="circle"></div>
          </div>
        </label>
           <div>
    </div>
      </div>
      {/* sections */}
      <Nav />
      <Main />
    </div>
  );
};

export default Home;
