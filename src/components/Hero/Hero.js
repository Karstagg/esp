import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const { imgs, theme } = props;

  return (
    <React.Fragment>
    <div className="container-container">
      <section className="hero-container">
        <div className="hero-left">
          <h1>
            This is a demo site of&nbsp;the <strong>heroBlog</strong> GatsbyJS starter
          </h1>
        </div>
        <div className="hero-right">
          <img className="logo" src={imgs.logoDesktop} alt="esp logo"/>
        </div>
      </section>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .container-container {
          max-width: 100vw;
          height: 100vh;
        }

        .hero-container {
          background: ${theme.hero.background};
          color: ${theme.text.color.primary.inverse};
          display: flex;
          justify-content: center;
          align-items: center;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        .hero-left {
            flex: 1 0 auto;
            width: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hero-right {
            flex: 1 0 auto;
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo {
          height: 20%
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        @from-width tablet {
          .hero-container {
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero-container {
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Hero;
