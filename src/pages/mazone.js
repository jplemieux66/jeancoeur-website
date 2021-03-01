import React from "react"
import Video from "../components/video"
import SEO from "../components/seo"
import PlatformCard from "../components/platform-card"

import mazoneStyles from "./mazone.module.scss"
import spotifyIcon from "./../images/spotify.svg"
import appleMusicIcon from "./../images/applemusic.svg"
import itunesIcon from "./../images/itunes.svg"
import tidalIcon from "./../images/tidal_icon.svg"
import youtubeMusicIcon from "./../images/youtubemusic_icon.svg"

import "../utils/styles.scss"

const MaZonePage = () => {
  return (
    <div>
      <SEO />
      <div className={mazoneStyles.pageContainer}>
        <div className={mazoneStyles.pageContent}>
          <div className={mazoneStyles.videoContainer}>
            <Video
              videoSrcURL="https://www.youtube.com/embed/B-05tBH3g9w"
              videoTitle="Baggies x JeanCoeur - Ma Zone (Vidéoclip Officiel)"
            />
          </div>
          <div className={mazoneStyles.platformCardsContainer}>
            <PlatformCard
              image={spotifyIcon}
              imageAlt="Spotify"
              url="https://open.spotify.com/track/3Mawe0E5SX8WPJpOUmWH9O?si=x3IUAwYzSvehl5iB-itM_Q"
              ctaText="Écouter"
            ></PlatformCard>
            <PlatformCard
              image={appleMusicIcon}
              imageAlt="Apple Music"
              url="https://geo.music.apple.com/album/1552928775?uo=4&app=music&at=1000lRnf&lId=22836023&cId=none&sr=1&src=Linkfire&itscg=30440&itsct=catchall_p1&ct=LFV_73af7c51fc82975b4868d92af7be34c2&ls=1"
              ctaText="Écouter"
            ></PlatformCard>
            <PlatformCard
              image={itunesIcon}
              imageAlt="Itunes"
              url="https://geo.itunes.apple.com/album/1552928775?uo=4&app=itunes&at=1000lRnf&lId=22836023&cId=none&sr=4&src=Linkfire&itscg=30440&itsct=catchall_p4&ct=LFV_73af7c51fc82975b4868d92af7be34c2&ls=1"
              ctaText="Télécharger"
            ></PlatformCard>
            <PlatformCard
              image={tidalIcon}
              imageAlt="Tidal"
              url="http://listen.tidalhifi.com/track/172820939"
              ctaText="Écouter"
            ></PlatformCard>
            <PlatformCard
              image={youtubeMusicIcon}
              imageAlt="Youtube Music"
              url="https://music.youtube.com/playlist?list=OLAK5uy_kYGK4EUObpkxAbLaMWgUkUy5jrf-5i79Y&src=Linkfire&lId=4079c4ad-59af-4d4d-8df4-5e0358ecf43b&cId=d3d58fd7-4c47-11e6-9fd0-066c3e7a8751"
              ctaText="Écouter"
            ></PlatformCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaZonePage
