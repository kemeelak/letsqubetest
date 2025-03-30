import React, { useState, useRef } from "react";
import {
  Container,
  Image,
  Header,
  Button,
  ButtonGroup,
  Menu,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import "./hamburger.css";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

const StyledApplicationHeader = styled.div`
  width: 100%;
  height: 60px;
  padding: 5px 15px;
  box-shadow: 0px 0px 10px #d1d8e6;
  z-index: 10;
  img.site-logo {
    display: inline-block;
    width: 40px !important;
    margin-right: 8px;
  }
  .header.pfd {
    font-weight: 900;
    font-size: 20px;
    line-height: 55px;
    align-items: center;
  }
`;

const StyledMobileHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: none;
  height: 60px;
  background-color: white;
  box-shadow: 0px 0px 10px #d1d8e6;
  z-index: 100;
`;

const StyledMobileMenu = styled(Menu)`
  position: absolute;
  z-index: 50;
  background-color: #003cb0;
  top: 45px;
  display: none !important;
  &.open {
    display: block !important;
    width: 100% !important;
    background-color: #003cb0 !important;
    background: none;
    box-shadow: none;
    border-radius: 0;
    .item,
    .item:hover {
      font-size: 18px;
      color: white !important;
    }
  }
`;

const StyledButtonGroup = styled(ButtonGroup)`
  margin-top: 8px !important;
  button {
    font-size: 16px !important;
    background-color: white !important;
    color: #003cb0 !important;
    font-weight: normal !important;
    &.selected {
      font-weight: bold !important;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
`;

const ApplicationHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();
  const headerMenuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(headerMenuRef, () => setMenuOpen(false));

  const onMobileMenuItemClick = (newPath: string) => {
    const pathname = window.location.pathname;
    if (pathname !== newPath) {
      history.push(newPath);
    }
    setMenuOpen(false);
  };

  const isCurrentPage = (pathname: string): string =>
    window.location.pathname === pathname ? "selected" : "";

  return (
    <>
      <StyledApplicationHeader className="mobile-hidden">
        <Container fluid>
          <Header>
            <StyledLink to={"/"}>
              <Image className="site-logo" src={logo} />{" "}
              <span className="header pfd blue-text">Letsqube</span>
            </StyledLink>
            <StyledButtonGroup floated="right">
              <Button
                onClick={() => history.push("/about")}
                className={isCurrentPage("/about")}
              >
                About
              </Button>
              <Button
                onClick={() => history.push("/memories")}
                className={isCurrentPage("/memories")}
              >
                Memories
              </Button>
              <Button
                onClick={() => history.push("/contact")}
                className={isCurrentPage("/contact")}
              >
                Contact
              </Button>
            </StyledButtonGroup>
          </Header>
        </Container>
      </StyledApplicationHeader>
      <span ref={headerMenuRef}>
        <StyledMobileHeader className="mobile-visible">
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-bun"></span>
            <span className="hamburger-patty"></span>
            <span className="hamburger-bun"></span>
          </div>
          <StyledMobileMenu
            className={`${menuOpen ? "open" : ""}`}
            vertical
            stackable
            pointing
          >
            <Menu.Item onClick={() => onMobileMenuItemClick("/")} as="a">
              Home
            </Menu.Item>
            <Menu.Item
              onClick={() => onMobileMenuItemClick("/memories")}
              as="a"
            >
              Memories
            </Menu.Item>
            <Menu.Item onClick={() => onMobileMenuItemClick("/about")} as="a">
              About
            </Menu.Item>
            <Menu.Item onClick={() => onMobileMenuItemClick("/contact")} as="a">
              Contact
            </Menu.Item>
          </StyledMobileMenu>
        </StyledMobileHeader>
      </span>
    </>
  );
};

export default ApplicationHeader;
