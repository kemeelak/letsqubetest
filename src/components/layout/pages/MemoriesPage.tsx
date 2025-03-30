import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ig from "instagram-scraping";
import { Image, Loader } from "semantic-ui-react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import ApplicationFooter from "../Footer";

const StyledMemoriesPageWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: auto;
  top: 60px;
  position: absolute;
  .memories-wrapper {
    @media all and (min-width: 701px) {
      width: 700px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 60px;
      .memories-container {
        width: 715px;
      }
      .memory {
        margin: 10px;
        width: 218px;
        height: 218px;
        display: inline-block;
      }
    }
    @media all and (max-width: 700px) {
      width: 100%;
      padding: 0 20px;
      .memory {
        margin: 10px 0;
        width: 100%;
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
    .memories-container {
      min-height: calc(100vh - 375px);
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      .memory {
        border-radius: 5px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

interface IInstagramScrapeResponse {
  display_url: string;
  is_video: boolean;
  like_count: number;
  thumbnail: string;
  shortcode: string;
  text: string;
}

const MemoriesPage = () => {
  const [images, setImages] = useState([] as IInstagramScrapeResponse[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ig.scrapeUserPage("letsqube").then(
      (result: { medias: IInstagramScrapeResponse[] }) => {
        setLoading(false);
        const images: IInstagramScrapeResponse[] = result.medias;
        setImages(images);
      }
    );
  }, []);

  const options = {
    showThumbnails: false,
    transitionSpeed: 1000,
    transitionTimingFunction: "linear",
    showDownloadButton: false,
  };

  return (
    <StyledMemoriesPageWrapper>
      <div className="memories-wrapper">
        <div className="title-text pfd blue-text">
          Library of memories by our qubers #qubing #letsqube
        </div>
        <div className="memories-container">
          {loading ? (
            <Loader active={loading} />
          ) : (
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                {images
                  .sort(() => Math.random() - Math.random())
                  .slice(0, 20)
                  .map((media, index) => (
                    <a
                      href={media.thumbnail}
                      data-attribute="SRL"
                      key={media.shortcode}
                    >
                      <Image
                        className="memory"
                        src={media.thumbnail}
                        alt={media.text}
                      />
                    </a>
                  ))}
              </SRLWrapper>
            </SimpleReactLightbox>
          )}
        </div>
      </div>
      <ApplicationFooter />
    </StyledMemoriesPageWrapper>
  );
};

export default MemoriesPage;
