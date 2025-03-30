import React from "react";
import styled from "styled-components";
import play from "../../../assets/images/play.svg";
import nina from "../../../assets/images/nina.jpeg";
import dennis from "../../../assets/images/dennis.jpg";
import erica from "../../../assets/images/erica.jpeg";
import placeholder from "../../../assets/images/placeholder.svg";
import { Button } from "../../../theme/components";
import { useHistory } from "react-router-dom";
import { Embed, Image } from "semantic-ui-react";
import ApplicationFooter from "../Footer";
import one from "../../../assets/images/1.svg";
import two from "../../../assets/images/2.svg";
import three from "../../../assets/images/3.svg";
import four from "../../../assets/images/4.svg";
import five from "../../../assets/images/5.svg";

const StyledVimeoVideo = styled(Embed)`
  margin-top: 70px;
  border-radius: 5px;
  .video.play.icon:before {
    display: inline-block;
    background-image: url(${play}) !important;
    content: "";
    background-size: 121px 121px !important;
    width: 121px;
    height: 121px;
  }
`;

const StyledAboutPageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: auto;
  top: 60px;
  position: absolute;
  .wrapper {
    @media all and (min-width: 701px) {
      width: 700px;
      margin-left: auto;
      margin-right: auto;
      .steps-info {
        margin-top: 40px;
        img {
          display: inline-block;
          width: 20%;
        }
      }
      .about-card {
        width: 220px;
        display: inline-block;
        margin-left: 20px;
        margin-top: 60px;
        img {
          width: 218px;
          height: 218px;
        }
        &.first {
          margin-left: 0 !important;
        }
      }
    }
    @media all and (max-width: 700px) {
      width: 100%;
      padding: 0 30px 0 20px;
      .steps-info {
        margin-top: 40px;
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }
      .about-card {
        margin-top: 35px;
        img {
          width: 100%;
        }
      }
    }
    .title-text {
      text-align: center;
      margin-top: 50px;
      font-style: normal;
      font-weight: 900;
      font-size: 28px;
      line-height: 30px;
    }
    .about-card {
      img {
        border: 1px solid #eeeff1;
        border-radius: 5px;
      }
      .name {
        margin-top: 20px;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 14px;
      }
      .testimony {
        margin-top: 15px;
        font-family: Roboto;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #003cb0;
      }
    }
    .about-footer {
      margin-top: 60px;
      text-align: center;
      margin-bottom: 60px;
      button {
        width: 275px;
        height: 50px;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 12px;
        display: flex;
        align-items: center;
      }
    }
  }
`;
const AboutPage = () => {
  const history = useHistory();
  return (
    <StyledAboutPageWrapper>
      <div className="wrapper">
        <div className="title-text pfd blue-text">
          Letsqube is a one-stop-shop for organizing potlucks and small
          gatherings.
        </div>
        <div className="steps-info">
          <Image src={one} />
          <Image src={two} />
          <Image src={three} />
          <Image src={four} />
          <Image src={five} />
        </div>
        <div className="about-card first">
          <img src={nina} alt={"about"} />
          <div className="name pfd blue-text">Nina</div>
          <div className="testimony">
            “It was a fun and memorable experience. I look forward to creating
            more memories with my best friends”
          </div>
        </div>
        <div className="about-card">
          <img src={dennis} alt={"about"} />
          <div className="name pfd blue-text">Dennis</div>
          <div className="testimony">
            “I would love to qube again! It enabled me to get together with my
            college buddies and it was epic!”
          </div>
        </div>
        <div className="about-card">
          <img src={erica} alt={"about"} />
          <div className="name pfd blue-text">Erica</div>
          <div className="testimony">
            “It was a great experience and I loved every second of having fun
            with my best friends. I can’t wait to qube again”
          </div>
        </div>
        <StyledVimeoVideo
          id="366151309"
          source="vimeo"
          placeholder={placeholder}
        />
        <div className="title-text pfd blue-text">
          Spend more quality time with your loved ones. Make memoreis that last
          forever.
        </div>
        <div className="about-footer">
          <Button onClick={() => history.push("/")}>Start qubing</Button>
        </div>
      </div>
      <ApplicationFooter />
    </StyledAboutPageWrapper>
  );
};

export default AboutPage;
