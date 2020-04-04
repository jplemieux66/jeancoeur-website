import React from "react"

import platformCardStyles from "./platform-card.module.scss"

const PlatformCard = ({ image, imageAlt, url, ctaText, ...props }) => {
  return (
    <div className={platformCardStyles.platformCard}>
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <img alt={imageAlt} src={image}></img>
        <span className="label">{ctaText}</span>
      </a>
    </div>
  )
}

export default PlatformCard
