import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import searchFunc from '../functions/searchFunc'
import { QueryContext } from './_app'
import cardWithImage from '../Components/Card/CardStory'
import style from '../styles/Home.module.css'
import RefineSearch from '../Components/Main/SearchBy/RefineSearch'
import SearchRefinedBy from '../Components/Main/SearchBy/SearchRefinedBy'


export default function Home() {
  const { APIresult, storeAPIresult } = useContext(QueryContext);

  const fetchInitialData = async () => {
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
    try {
      const apiResponse = await searchFunc(searchBody)
      storeAPIresult(apiResponse)
    } catch (error) {
      console.error('There was a problem with that request', error)
    }
  }

  useEffect(() => {
    fetchInitialData()
  }, [])

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
                imgURL: article.images[0].url,
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