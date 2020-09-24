/** @jsx jsx */
import { jsx } from "@emotion/core";

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "10px 40px",
  img: {
    height: "60px"
  },
  a: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#c4c4c4",
    transition: "all 0.25s",
    svg: {
      fill: "#c4c4c4",
      width: "20px",
      height: "20px",
      margin: "0 12px",
      marginBotton: "5px",
      transition: "all 0.25s"
    },
    ":hover": {
      color: "#ff6d46",
      svg: {
        fill: "#ff6d46"
      }
    }
  },
  "@media (max-width: 768px)": {
    display: "flex",
    justifyContent: "center",
    a: {
      display: "none"
    }
  }
};

function Header() {
  return (
    <header css={container}>
      <img src="/positiva.png" alt="La Positiva" />
      <a href="https://github.com/paulotijero/react-positiva">
        <svg>
          <use xlinkHref="#github" />
        </svg>
        Github
      </a>
    </header>
  );
}

export default Header;
