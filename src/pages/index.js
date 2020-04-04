import React from "react"
import SEO from "../components/seo"

import indexStyles from "./index.module.scss"

export default () => (
  <div>
    <SEO></SEO>
    <div className={indexStyles.pageContainer}>
      <iframe
        title="beatstars"
        src="https://player.beatstars.com/?storeId=108324"
        width="100%"
        height="800"
        style={{
          maxWidth: "1024px",
        }}
      >
        {" "}
        -- none --{" "}
      </iframe>
    </div>
  </div>
)
