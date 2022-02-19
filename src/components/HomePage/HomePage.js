import { React } from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Left from "../../images/Product Image-Left.png";
import Middle from "../../images/Product Image-Middle.png";
import Right from "../../images/Product Image-Right.png";
import Social from "../../images/Social.png";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center flex-col">
        <div className="w-96 md:w-full">
          <div
            style={{
              fontFamily: "OpenSansBold",
            }}
            className="f1 white text-center mb5"
          >
            Facebook events without Facebook.
          </div>
          <div
            style={{
              fontFamily: "OpenSansRegular",
            }}
            className="f4 white mb5 center"
          >
            Easily host and share events with your friends across any social
            media.
          </div>
          <Link to={"/create"}>
            <a
              style={{
                background:
                  "linear-gradient(107.04deg, #06D6A0 48.99%, #5794F7 118.32%)",
                fontFamily: "OpenSansBold",
              }}
              className="f4 link dim br-pill ph3 pv2 mb2 dib white mr4 pointer"
              href="#0"
            >
              🎉 &nbsp;Create my next event
            </a>
          </Link>
          <>
            {/* <img src={Social} alt={"Social media icons"} /> */}
            <div className="mt4 flex justify-center center bg-no-repeat bg-center mb5">
              <img
                style={{ width: "15%", height: "90%" }}
                className="mt5"
                src={Left}
                alt={"Left"}
              />
              <img style={{ width: "20%" }} src={Middle} alt={"Middle"} />
              <img
                style={{ width: "15%", height: "90%" }}
                className="mt5"
                src={Right}
                alt={"Right"}
              />
            </div>
          </>
        </div>
      </main>
    </>
  );
};

export default HomePage;
