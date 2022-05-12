import React, { useContext } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { QueryContext } from './_app'
import cardWithImage from '../Components/Card/CardStory'
import style from '../styles/Home.module.css'
import RefineSearch from '../Components/Main/SearchBy/RefineSearch'
import SearchRefinedBy from '../Components/Main/SearchBy/SearchRefinedBy'

export async function getServerSideProps() {
  const apiKey = process.env.API_KEY
  const searchBody = {
    "queryString": "",
    "queryContext": {
      "curations": []
    },
    "resultContext": {
      "aspects": ["title", "lifecycle", "location", "summary", "editorial", "images"],
      "sortOrder": "ASC",
      "sortField": "lastPublishDateTime",
      "maxResults": 100
    }
  }
  const response = await fetch('https://api.ft.com/content/search/v1?', {
    method: "POST",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchBody)
  })
  const { results: [{ results }] } = await response.json()
  return {
    props: {
      response: results
    }
  }
}


export default function Home({ response }) {
  const alternativeImage = "https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&amp;format=svg"
  const { APIresult, storeAPIresult } = useContext(QueryContext);
  storeAPIresult(response)
  return (
    <>
      <Header />
      <div className={style.searchContainer}>
        <SearchRefinedBy />
        <RefineSearch />
      </div>
      <div className={`${style.searchList} o-teaser-collection o-teaser-collection--stream`}>
        <div className="demo-container">
          {APIresult && APIresult.map((article, index) => {
            return (
              cardWithImage({
                id: index,
                title: article.title.title,
                imgURL: article.images[0]?.url || alternativeImage,
                subHeading: article.editorial.subheading,
                summary: article.summary.excerpt,
                timeStamp: article.lifecycle.lastPublishDateTime
              })
            )
          })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}