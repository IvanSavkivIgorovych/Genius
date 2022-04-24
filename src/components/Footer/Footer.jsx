import "./index.scss";

import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="footer_wrapper" id="footer">
        <div className="footer_menu">
          <nav>
            <ul className="footer_menu_item">
              <li>
                <a href="#main">Preise</a>
              </li>
              <li>
                <a href="#portfolio">Referenzen</a>
              </li>
              <li>
                <a href="#footer">Kontakt</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer_content">
          <div className="footer_contact">
            <ul className="footer_address">
              <li className="footer_address_item">
                <i className="footer_icon footer_icon--map">
                  <svg
                    width="44"
                    height="60"
                    viewBox="0 0 44 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 0C10.3689 0 0.90625 9.46266 0.90625 21.0938C0.90625 25.0235 1.99481 28.8586 4.05496 32.1858L20.7993 59.169C21.12 59.6859 21.6851 60 22.2929 60C22.2975 60 22.3021 60 22.3068 60C22.9198 59.9952 23.4861 59.6714 23.8009 59.1455L40.1185 31.9008C42.065 28.6439 43.0938 24.9069 43.0938 21.0938C43.0938 9.46266 33.6311 0 22 0ZM37.1015 30.0959L22.2663 54.8655L7.04301 30.3335C5.3282 27.5641 4.39844 24.3691 4.39844 21.0938C4.39844 11.4012 12.3074 3.49219 22 3.49219C31.6926 3.49219 39.5898 11.4012 39.5898 21.0938C39.5898 24.272 38.7214 27.3853 37.1015 30.0959Z"
                      fill="white"
                    />
                    <path
                      d="M22 10.5469C16.1845 10.5469 11.4531 15.2782 11.4531 21.0938C11.4531 26.8721 16.1075 31.6406 22 31.6406C27.9652 31.6406 32.5469 26.8086 32.5469 21.0938C32.5469 15.2782 27.8155 10.5469 22 10.5469ZM22 28.1484C18.1027 28.1484 14.9453 24.9805 14.9453 21.0938C14.9453 17.2167 18.123 14.0391 22 14.0391C25.877 14.0391 29.043 17.2167 29.043 21.0938C29.043 24.9238 25.9591 28.1484 22 28.1484Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <address>
                  Poststr, 45, 44890 <br />
                  Hamburg
                </address>
              </li>
              <li className="footer_address_item">
                <i className="footer_icon footer_icon--mail">
                  <svg
                    width="60"
                    height="46"
                    viewBox="0 0 60 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.6754 0.169678H7.33706C3.28988 0.169678 0 3.45956 0 7.50673V38.4937C0 42.5409 3.28988 45.8307 7.33706 45.8307H52.6629C56.7101 45.8307 60 42.5409 60 38.4937V7.51915C60.0124 3.47197 56.7225 0.169678 52.6754 0.169678ZM56.6605 38.4937C56.6605 40.6911 54.8727 42.4788 52.6754 42.4788H7.33706C5.13966 42.4788 3.35196 40.6911 3.35196 38.4937V7.51915C3.35196 5.32176 5.13966 3.53405 7.33706 3.53405H52.6629C54.8603 3.53405 56.648 5.32176 56.648 7.51915V38.4937H56.6605Z"
                      fill="white"
                    />
                    <path
                      d="M37.8398 22.6153L52.5139 9.45579C53.1967 8.83506 53.2588 7.77981 52.638 7.08459C52.0173 6.40178 50.9621 6.33971 50.2668 6.96044L30.031 25.1231L26.0831 21.5973C26.0707 21.5849 26.0583 21.5725 26.0583 21.5601C25.9714 21.4732 25.8845 21.3987 25.7851 21.3242L9.72059 6.94803C9.02537 6.3273 7.97013 6.38937 7.3494 7.08459C6.72866 7.77981 6.79074 8.83506 7.48596 9.45579L22.3339 22.727L7.54803 36.5694C6.87764 37.2025 6.8404 38.2578 7.47354 38.9406C7.80874 39.2882 8.25567 39.4744 8.70259 39.4744C9.11228 39.4744 9.52196 39.3254 9.84474 39.0275L24.854 24.9865L28.9261 28.624C29.2488 28.9095 29.6461 29.0461 30.0434 29.0461C30.4406 29.0461 30.8503 28.8971 31.1607 28.6116L35.3444 24.8624L50.2668 39.0399C50.5896 39.3503 51.0117 39.4992 51.4214 39.4992C51.8683 39.4992 52.3028 39.3254 52.638 38.9778C53.2712 38.3074 53.2463 37.2398 52.576 36.6066L37.8398 22.6153Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <a href="mailto:hello@tratata.de">hello@tratata.de</a>
              </li>
              <li className="footer_address_item">
                <i className="footer_icon footer_icon--tel">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2261 39.884C18.144 46.9581 25.2679 52.528 33.3989 56.4691C36.4946 57.9362 40.6347 59.6768 45.2472 59.9751C45.5332 59.9876 45.8067 60 46.0926 60C49.1884 60 51.6749 58.9308 53.7014 56.7302C53.7139 56.7178 53.7387 56.6929 53.7512 56.668C54.4723 55.7978 55.2928 55.0145 56.1507 54.1815C56.735 53.622 57.3318 53.0377 57.9037 52.4409C60.5518 49.6809 60.5518 46.1749 57.8788 43.5019L50.4068 36.0298C49.1386 34.712 47.6219 34.0157 46.0305 34.0157C44.4391 34.0157 42.9099 34.712 41.6045 36.0174L37.1536 40.4683C36.7433 40.2321 36.3206 40.0207 35.9227 39.8218C35.4254 39.5731 34.9654 39.3369 34.5551 39.0758C30.5021 36.5023 26.822 33.1455 23.3036 28.8313C21.5257 26.581 20.3322 24.6913 19.4992 22.7642C20.6679 21.7074 21.7619 20.6009 22.8187 19.5193C23.1917 19.1339 23.5771 18.7484 23.9625 18.363C25.3052 17.0203 26.0263 15.4662 26.0263 13.8873C26.0263 12.3083 25.3177 10.7542 23.9625 9.41152L20.2576 5.70659C19.8224 5.27145 19.4122 4.84874 18.9895 4.41359C18.1689 3.56817 17.311 2.69789 16.4656 1.91463C15.1851 0.658931 13.6807 0 12.0893 0C10.5104 0 8.9936 0.658931 7.66331 1.92706L3.0135 6.57688C1.32265 8.26772 0.36534 10.3191 0.166417 12.6937C-0.0698031 15.6651 0.477234 18.823 1.89456 22.6399C4.07027 28.5454 7.35249 34.0282 12.2261 39.884ZM3.19999 12.9548C3.34918 11.3013 3.98324 9.92126 5.17678 8.72772L9.80173 4.10278C10.5228 3.40655 11.3185 3.046 12.0893 3.046C12.8477 3.046 13.6186 3.40655 14.3272 4.12764C15.1602 4.89847 15.9435 5.70659 16.7889 6.56444C17.2116 6.99959 17.6467 7.43473 18.0819 7.8823L21.7868 11.5872C22.5576 12.3581 22.9555 13.1413 22.9555 13.9121C22.9555 14.683 22.5576 15.4662 21.7868 16.2371C21.4014 16.6225 21.016 17.0203 20.6306 17.4057C19.4743 18.5744 18.3927 19.6809 17.1992 20.7377C17.1743 20.7625 17.1619 20.775 17.137 20.7998C16.1051 21.8317 16.2667 22.8139 16.5154 23.5599C16.5278 23.5972 16.5402 23.622 16.5527 23.6593C17.51 25.9594 18.8403 28.1475 20.9165 30.7584C24.6463 35.3585 28.575 38.9266 32.9016 41.6743C33.4362 42.0224 34.0081 42.2959 34.5427 42.5694C35.04 42.8181 35.5 43.0543 35.9103 43.3154C35.96 43.3402 35.9973 43.3651 36.0471 43.39C36.4573 43.6013 36.8552 43.7008 37.253 43.7008C38.2476 43.7008 38.8941 43.0667 39.1055 42.8554L43.7553 38.2056C44.4764 37.4845 45.2597 37.099 46.0305 37.099C46.9754 37.099 47.7462 37.6834 48.2311 38.2056L55.728 45.69C57.2199 47.1819 57.2074 48.7982 55.6907 50.3771C55.1685 50.9366 54.6214 51.4712 54.0371 52.0307C53.1668 52.8761 52.2592 53.7464 51.4387 54.7286C50.0089 56.2702 48.3057 56.9913 46.1051 56.9913C45.8937 56.9913 45.6699 56.9789 45.4586 56.9664C41.3807 56.7053 37.5887 55.114 34.7416 53.7588C27.0085 50.0166 20.2203 44.7078 14.5883 37.9693C9.95092 32.3871 6.83032 27.1902 4.7665 21.6204C3.48594 18.2014 3.00106 15.4538 3.19999 12.9548Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <a href="tel:+380403803344">040 380-33- 44</a>
              </li>
            </ul>
          </div>
          <div className="footer_form">
            <h2 className="footer_header">Schreiben Sie uns!</h2>
            <form action="" method="post">
              <input
                type="text"
                name="organization"
                id="organization"
                placeholder="Firma / Organisation"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <input type="tel" name="tel" id="tel" placeholder="Telefon" />
              <textarea
                name="about"
                id="about"
                cols="30"
                rows="10"
                placeholder="Was ist ihr anliegen?"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
