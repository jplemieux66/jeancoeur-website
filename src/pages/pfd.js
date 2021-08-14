import "../utils/styles.scss"

import React from "react"

import PlatformCard from "../components/platform-card"
import SEO from "../components/seo"
import Video from "../components/video"
import appleMusicIcon from "./../images/applemusic.svg"
import itunesIcon from "./../images/itunes.svg"
import spotifyIcon from "./../images/spotify.svg"
import youtubeMusicIcon from "./../images/youtubemusic_icon.svg"
import pfdStyles from "./pfd.module.scss"

const PFDPage = () => {
  return (
    <div>
      <SEO
        title="Georgette x JeanCoeur - PFD"
        description="Listen to Georgette x JeanCoeur - PFD"
        image="/images/pfd_cover.jpg"
        pageName="pfd"
      />
      <div className={pfdStyles.pageContainer}>
        <div className={pfdStyles.pageContent}>
          <div className={pfdStyles.videoContainer}>
            <Video
              videoSrcURL="https://www.youtube.com/embed/2st6BnNHk-g"
              videoTitle="Georgette x JeanCoeur - PFD"
            />
          </div>
          <div className={pfdStyles.platformCardsContainer}>
            <PlatformCard
              image={spotifyIcon}
              imageAlt="Spotify"
              url="https://open.spotify.com/track/52KNiH2HctYmccYAkfVjEm?si=0f3bb2a61da94659"
              ctaText="Listen"
            ></PlatformCard>
            <PlatformCard
              image={appleMusicIcon}
              imageAlt="Apple Music"
              url="http://itunes.apple.com/album/id/1573004455"
              ctaText="Listen"
            ></PlatformCard>
            <PlatformCard
              image={itunesIcon}
              imageAlt="Itunes"
              url="http://itunes.apple.com/album/id1573004455?ls=1&app=itunes"
              ctaText="Download"
            ></PlatformCard>
            <PlatformCard
              image={youtubeMusicIcon}
              imageAlt="Youtube Music"
              url="https://music.youtube.com/watch?v=mm2pJg_wYFQ"
              ctaText="Listen"
            ></PlatformCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PFDPage
