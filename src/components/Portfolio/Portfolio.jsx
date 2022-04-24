import React from "react";
import "./index.scss";
import pic from "./item1.png";
import pic2 from "./item2.png";
import pic3 from "./item3.png";
import pic4 from "./item4.png";

export const Portfolio = () => {
  return (
    <>
      <div className="portfolio_wrapper">
        <div className="portfolio_heading" id="portfolio">
          <h1 className="portfolio_heading_name">Referenzen</h1>
          <p className="portfolio_heading_about">
            Von unseren Designern gestaltet, von unseren Entwicklern
            programmiert, von unserem Team realisiert — in enger Abstimmung mit
            dem Kunden. Zum Festpreis.
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
                Wir sind ein wirksames Team von Programmierern und Designer und
                bieten professionelle Dienstlei stungen rund um’s Thema
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
                Wir sind ein wirksames Team von Programmierern und Designer und
                bieten professionelle Dienstlei stungen rund um’s Thema
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
                Wir sind ein wirksames Team von Programmierern und Designer und
                bieten professionelle Dienstlei stungen rund um’s Thema
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
                Wir sind ein wirksames Team von Programmierern und Designer und
                bieten professionelle Dienstlei stungen rund um’s Thema
                Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
