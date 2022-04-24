import React from "react";
import "./index.scss";
import pic from "./item1.png";
import pic2 from "./item2.png";
import pic3 from "./item3.png";
import pic4 from "./item4.png";

export const Portfolio = () => {
  return (
    <>
      <div className="forCallButton">
        <div className="portfolio_wrapper">
          <div className="portfolio_heading" id="portfolio">
            <h1 className="portfolio_heading_name">Referenzen</h1>
            <p className="portfolio_heading_about">
              Von unseren Designern gestaltet, von unseren Entwicklern
              programmiert, von unserem Team realisiert — in enger Abstimmung
              mit dem Kunden. Zum Festpreis.
            </p>
          </div>
          <div className="portfolio_content">
            <div className="portfolio_item">
              <figure>
                <img src={pic} alt="portfolio banner" width="628px" />
                <figcaption>Webdesign Agentur</figcaption>
              </figure>
              <div className="portfolio_item_description">
                <h2 className="portfolio_item_name">Webdesign Agentur</h2>
                <p className="portfolio_item_about">
                  Wir sind ein wirksames Team von Programmierern und Designer
                  und bieten professionelle Dienstlei stungen rund um’s Thema
                  Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
                </p>
              </div>
            </div>

            <div className="portfolio_item">
              <figure>
                <img src={pic2} alt="portfolio banner" width="628px" />
                <figcaption>Webdesign Agentur</figcaption>
              </figure>
              <div className="portfolio_item_description">
                <h2 className="portfolio_item_name">Webdesign Agentur</h2>
                <p className="portfolio_item_about">
                  Wir sind ein wirksames Team von Programmierern und Designer
                  und bieten professionelle Dienstlei stungen rund um’s Thema
                  Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
                </p>
              </div>
            </div>

            <div className="portfolio_item">
              <figure>
                <img src={pic3} alt="portfolio banner" width="628px" />
                <figcaption>Webdesign Agentur</figcaption>
              </figure>
              <div className="portfolio_item_description">
                <h2 className="portfolio_item_name">Webdesign Agentur</h2>
                <p className="portfolio_item_about">
                  Wir sind ein wirksames Team von Programmierern und Designer
                  und bieten professionelle Dienstlei stungen rund um’s Thema
                  Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
                </p>
              </div>
            </div>

            <div className="portfolio_item">
              <figure>
                <img src={pic4} alt="portfolio banner" width="628px" />
                <figcaption>Webdesign Agentur</figcaption>
              </figure>
              <div className="portfolio_item_description">
                <h2 className="portfolio_item_name">Webdesign Agentur</h2>
                <p className="portfolio_item_about">
                  Wir sind ein wirksames Team von Programmierern und Designer
                  und bieten professionelle Dienstlei stungen rund um’s Thema
                  Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
                </p>
              </div>
            </div>
          </div>
          <svg
            className="portfolio_callme"
            width="80"
            height="76"
            viewBox="0 0 80 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 0.0688477C17.909 0.0688477 0 16.1254 0 35.9309C0 43.2302 2.43862 50.0151 6.61517 55.6799C6.06621 62.2247 4.48828 71.4426 0 75.9309C0 75.9309 13.7145 74.0068 23.0028 68.3971C23.0124 68.4013 23.0234 68.4054 23.0331 68.4095C26.8455 65.9254 30.6635 63.3668 31.4538 62.7185C31.8676 62.1378 32.6662 61.9626 33.2883 62.3364C33.6966 62.5819 33.9545 63.0302 33.9628 63.5061C33.9766 64.364 33.9559 64.5875 26.2593 69.604C30.5462 71.0109 35.1697 71.793 40 71.793C62.091 71.793 80 55.7364 80 35.9309C80 16.1254 62.091 0.0688477 40 0.0688477Z"
              fill="#6279FF"
            />
            <path
              d="M20.6897 40.0688C22.975 40.0688 24.8276 38.2162 24.8276 35.9309C24.8276 33.6456 22.975 31.793 20.6897 31.793C18.4044 31.793 16.5518 33.6456 16.5518 35.9309C16.5518 38.2162 18.4044 40.0688 20.6897 40.0688Z"
              fill="white"
            />
            <path
              d="M40 40.0688C42.2853 40.0688 44.1379 38.2162 44.1379 35.9309C44.1379 33.6456 42.2853 31.793 40 31.793C37.7147 31.793 35.8621 33.6456 35.8621 35.9309C35.8621 38.2162 37.7147 40.0688 40 40.0688Z"
              fill="white"
            />
            <path
              d="M59.3103 40.0688C61.5956 40.0688 63.4482 38.2162 63.4482 35.9309C63.4482 33.6456 61.5956 31.793 59.3103 31.793C57.025 31.793 55.1724 33.6456 55.1724 35.9309C55.1724 38.2162 57.025 40.0688 59.3103 40.0688Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
