import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";

class IndexPage extends React.Component {

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
        logoDesktop: {
          resize: { src: logoDesktop }
        },
        logoTablet: {
          resize: { src: logoTablet }
        },
        logoMobile: {
          resize: { src: logoMobile }
        },
        site: {
          siteMetadata: { facebook }
        },
        line
      }
    } = this.props;

    const imgs = {
      logoDesktop,
      logoTablet,
      logoMobile
    };

    const WaveWrapper = styled.div`
  ${tw`absolute pin-b w-full`};
  transform: matrix(1, 0, 0, -1, 0, 0);
  width: 100vw
`

const InnerWave = styled.div`
  svg {
    width: auto;
    viewBox="0 0 800 338.05";
    preserveAspectRatio="none"
  },
  path {
    width: auto
    fill:none;fill-opacity:1;stroke:#fc0000;stroke-width:1.05833328;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;
  }
`

//<path id="path819" d="M 15.875 122.375 C 15.875 122.375 27.561418 114.3907 39.6875 114.4375 C 51.813582 114.4843 66.863969 129.51539 84.78071 129.85632 C 101.47963 130.17407 116.22711 114.52001000000001 132.54257 114.71121000000001 C 148.85803 114.90241 163.14333000000002 129.69912 177.74982 130.22126 C 185.9556 130.24096 201.08333 122.375 201.08333 122.375" style="fill:none;fill-opacity:1;stroke:#fc0000;stroke-width:1.05833328;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"><animate attributeType="auto" attributeName="d" values="M 15.875 122.375 C 15.875 122.375 27.561418 114.3907 39.6875 114.4375 C 51.813582 114.4843 66.863969 129.51539 84.78071 129.85632 C 101.47963 130.17407 116.22711 114.52001000000001 132.54257 114.71121000000001 C 148.85803 114.90241 163.14333000000002 129.69912 177.74982 130.22126 C 185.9556 130.24096 201.08333 122.375 201.08333 122.375;m 15.875,122.375 c 0,0 11.686418,7.8907 23.8125,7.9375 12.126082,0.0468 27.35894,-16.12469 45.275681,-15.78377 16.698919,0.31776 30.898989,15.68381 47.214449,15.87501 16.31546,0.1912 30.48672,-16.48838 45.0932,-15.96624 8.20578,0.0197 23.8125,7.9375 23.8125,7.9375;M 15.875 122.375 C 15.875 122.375 27.561418 114.3907 39.6875 114.4375 C 51.813582 114.4843 66.863969 129.51539 84.78071 129.85632 C 101.47963 130.17407 116.22711 114.52001000000001 132.54257 114.71121000000001 C 148.85803 114.90241 163.14333000000002 129.69912 177.74982 130.22126 C 185.9556 130.24096 201.08333 122.375 201.08333 122.375" calcMode="spline" keyTimes="0;0.5;1" keySplines="0 0 1 1;0 0 1 1" dur="5s" begin="0s" repeatCount="indefinite" additive="replace" accumulate="none" fill="freeze" id="animate4683"></animate></path>

    return (
      <React.Fragment>
      {/*<Divider fill="#23262b" speed={0.2} offset={offset}>*/}
      <WaveWrapper>
        <InnerWave>
          {/*<hr className="redLine"/>
          <style jsx>{`
            .redLine {
              height: 5px;
              background-color: #cc0000;
              border: none;
            }
            `}</style>*/}
        </InnerWave>
      </WaveWrapper>
{/*</Divider>*/}
        <ThemeContext.Consumer>
          {theme => (
            <Hero imgs={imgs} theme={theme} />
          )}
        </ThemeContext.Consumer>

        {/*<ThemeContext.Consumer>
          {theme => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer>*/}

        <Seo facebook={facebook} />

      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    logoDesktop: imageSharp(fluid: { originalName: { regex: "/logo/" } }) {
      resize(width: 250, height: 277, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    logoTablet: imageSharp(fluid: { originalName: { regex: "/logo/" } }) {
      resize(width: 200, height: 222, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    logoMobile: imageSharp(fluid: { originalName: { regex: "/logo/" } }) {
      resize(width: 167, height: 185, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;

//hero-background
