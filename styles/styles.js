import styled from "styled-components";

export const Header = styled.header`
  a {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
  }

  a.active,
  a:hover {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  label {
    font-size: 1.5rem;
  }

  label span {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  small {
    font-size: 12px;
  }

  @media (max-width: 991.98px) {
    .navbar {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

  @media (min-width: 992px) {
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
    }
    a {
      color: ${(props) => props.theme.colors.light} !important;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
    .nav-resolut {
      background: #403e3e90;
    }
  }
`;

export const Section = styled.section`
  .carousel-item img {
    height: 100%;
    object-fit: cover;
  }

  .carousel-item {
    height: 100vh;
  }

  .carousel-indicators {
    display: flex;
    justify-content: start;
    margin-right: 0;
    margin-bottom: 1%;
    margin-left: 1%;
    flex-direction: column;
  }

  .carousel-indicators [data-bs-target] {
    width: 10px;
    height: 30px;
  }

  .carousel {
    position: relative;
  }

  .container-flut {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .content-flut {
    width: 80vw;
    text-align: center;
  }

  .content-flut h1 {
    color: ${(props) => props.theme.colors.light};
    font-size: 6vw;
    line-height: 1;
    margin-bottom: 30px;
  }

  .content-flut a,
  .content-flut p {
    color: ${(props) => props.theme.colors.primary};
  }

  .content-flut a {
    border: 2px solid currentColor;
    padding: 5px 20px;
  }

  .content-flut p,
  .content-flut h1,
  .content-flut a {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    font-weight: bold;
  }

  @media (max-width: 575.98px) {
    .carousel-indicators [data-bs-target] {
      width: 5px;
      height: 10px;
    }
  }

  @media (max-width: 991.98px) {
    .carousel-item {
      height: 50vh;
    }
    .carousel-indicators [data-bs-target] {
      width: 5px;
      height: 20px;
    }
  }
`;
