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
      position: absolute;
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
  position: relative;

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

export const GallerySection = styled.div`
  background: ${(props) => props.theme.colors.secondary};
`;

export const ItemGallery = styled.div`
  margin-bottom: 30px;
  text-align: center;

  img {
    object-fit: cover;
    border: 2px solid #fff !important;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  .row {
    max-width: 600px;
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    padding: 0 10px;
    font-weight: bold;
    font-size: 13px;
  }

  input {
    height: 40px;
  }
`;

export const ButtonForm = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 8px 20px;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Foot = styled.footer`
  background: ${(props) => props.theme.colors.dark};
  position: relative;

  h1,
  p,
  a,
  h2 {
    color: ${(props) => props.theme.colors.light};
  }

  h1 span {
    color: ${(props) => props.theme.colors.primary};
  }

  h1 small {
    font-size: 12px;
  }

  .footer-midias a + a {
    margin-left: 10px;
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
  }

  .footer-nav a {
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.light};
    font-weight: bold;
  }

  .footer-nav a:hover {
    color: ${(props) => props.theme.colors.light};
  }

  .footer-nav img {
    filter: invert(100%);
  }

  .footer-nav div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .footer-nav div a {
    margin-left: 5px;
  }

  .return-top {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 50px;
    height: 50px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 43px;
    cursor: pointer;
  }
`;

export const Whatsapp = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;

  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-25px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
