import React from "react"
import Video from "../components/video"
import SEO from "../components/seo"
import PlatformCard from "../components/platform-card"
import Image from "../components/image"

import burningHollywoodStyles from "./burning-hollywood.module.scss"
import spotifyIcon from "./../images/spotify.svg"
import appleMusicIcon from "./../images/applemusic.svg"
import googlePlayIcon from "./../images/googleplay.svg"
import itunesIcon from "./../images/itunes.svg"
import beatstarsIcon from "./../images/beatstars.png"

import { useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "../utils/styles.scss"

const BurningHollywoodPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pages/burning_hollywood.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO />
      <BackgroundImage
        Tag="section"
        className={burningHollywoodStyles.pageContainer}
        fluid={data.file.childImageSharp.fluid}
      >
        <div className={burningHollywoodStyles.pageContent}>
          <div className={burningHollywoodStyles.title}>
            <div className={burningHollywoodStyles.titleImageWrapper}>
              <Image src="images/forest_1_square.jpg" />
            </div>
            <h1>JeanCoeur</h1>
            <h2>BURNING HOLLYWOOD</h2>
          </div>
          <div className={burningHollywoodStyles.videoContainer}>
            <Video
              videoSrcURL="https://www.youtube.com/embed/4Om9dAmg0Hw"
              videoTitle="CANDLE JENNER (Instrumental)"
            />
          </div>
          <div className={burningHollywoodStyles.platformCardsContainer}>
            <PlatformCard
              image={spotifyIcon}
              imageAlt="Spotify"
              url="https://open.spotify.com/album/3IhMjyN7iDowv8v420GcI7?si=rZ6Q5UuCQ7ep-EVducbL3Q"
              ctaText="Listen"
            ></PlatformCard>
            <PlatformCard
              image={beatstarsIcon}
              imageAlt="BeatStars"
              url="https://www.beatstars.com/playlists/4288325"
              ctaText="Buy / Lease"
            ></PlatformCard>
            <PlatformCard
              image={appleMusicIcon}
              imageAlt="Apple Music"
              url="https://music.apple.com/us/album/burning-hollywood-ep/1504012236?app=music&ign-mpt=uo%3D4"
              ctaText="Listen"
            ></PlatformCard>
            <PlatformCard
              image={itunesIcon}
              imageAlt="Itunes"
              url="https://music.apple.com/us/album/burning-hollywood-ep/1504012236?uo=4&app=itunes&at=1001lry3&ct=dashboard"
              ctaText="Buy"
            ></PlatformCard>
            <PlatformCard
              image={googlePlayIcon}
              imageAlt="Google Play"
              url="https://play.google.com/store/music/album/JeanCoeur_Burning_Hollywood?id=Bx3pkoxvxmb2mu4edrg6znzz6cy"
              ctaText="Listen"
            ></PlatformCard>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default BurningHollywoodPage
