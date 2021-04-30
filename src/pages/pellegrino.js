import React from "react"
import Video from "../components/video"
import SEO from "../components/seo"
import PlatformCard from "../components/platform-card"
import { Helmet } from "react-helmet"

import landingPageTemplateStyles from "./pellegrino.module.scss"
import spotifyIcon from "./../images/spotify.svg"
import appleMusicIcon from "./../images/applemusic.svg"
import itunesIcon from "./../images/itunes.svg"
import bandcampIcon from "./../images/bandcamp.svg"
import tidalIcon from "./../images/tidal_icon.svg"
import youtubeMusicIcon from "./../images/youtubemusic_icon.svg"

import "../utils/styles.scss"

const PellegrinoPage = () => {
  return (
    <div>
      <SEO
        title="Olivier Orange x JeanCoeur - Pellegrino"
        description="Olivier Orange x JeanCoeur - Pellegrino"
        image="/images/pellegrino_cover.jpg"
      />
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Olivier Orange x JeanCoeur - Pellegrino"
        />
        <title>Olivier Orange x JeanCoeur - Pellegrino</title>
      </Helmet>
      <div className={landingPageTemplateStyles.pageContainer}>
        <div className={landingPageTemplateStyles.pageContent}>
          <div className={landingPageTemplateStyles.videoContainer}>
            <Video
              videoSrcURL="https://www.youtube.com/embed/mVqFmZt9BHE"
              videoTitle="Olivier Orange x JeanCoeur - Pellegrino"
            />
          </div>
          <div className={landingPageTemplateStyles.platformCardsContainer}>
            <PlatformCard
              image={spotifyIcon}
              imageAlt="Spotify"
              url="https://open.spotify.com/track/6RZtRx7UsJs9iNYzmNH8oU?si=3f3aa1b79d194f12"
              ctaText="Écouter"
            ></PlatformCard>
            <PlatformCard
              image={bandcampIcon}
              imageAlt="Bandcamp"
              url="https://olivierorange.bandcamp.com/track/pellegrino"
              ctaText="Acheter"
            ></PlatformCard>
            <PlatformCard
              image={appleMusicIcon}
              imageAlt="Apple Music"
              url="https://music.apple.com/us/album/pellegrino-single/1560931739?uo=4"
              ctaText="Écouter"
            ></PlatformCard>
            <PlatformCard
              image={itunesIcon}
              imageAlt="Itunes"
              url="https://music.apple.com/us/album/pellegrino-single/1560931739?uo=4"
              ctaText="Télécharger"
            ></PlatformCard>
            <PlatformCard
              image={youtubeMusicIcon}
              imageAlt="Youtube Music"
              url="https://music.youtube.com/watch?v=OtUkt7eqk-s&feature=share"
              ctaText="Écouter"
            ></PlatformCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PellegrinoPage
