import "../styles/globals.css";
import { createContext, useState } from 'react'

export const QueryContext = createContext();

const QueryContextProvider = (props) => {
  const [searchBarValue, setSearchBarValue] = useState('')
  const [curation, setCuration] = useState(null)
  const [APIresult, storeAPIresult] = useState([])
  const [searchByTime, setSearchByTime] = useState(null)
  const [filterTime, setFilterTime] = useState([])

  const allCurations = ["ARTICLES", "BLOGS", "PODCASTS", "VIDEOS"]

  const getCurations = () => {
    if (!curations) {
      return allCurations
    } else {
      return [curation]
    }
  }
  const getQueryString = () => {
    return `${searchBarValue} ${searchByTime && searchByTime}`
  }
  // const storeCuration = (stringCuration) => {
  //   if (!curations.includes(stringCuration)) {
  //     setCurations([...curations, stringCuration])
  //   }
  // }
  const addLastPublishTime = (timeParam) => {
    setSearchByTime(timeParam)
  }
  // const removeCuration = (stringCuration) => {
  //   setCurations(curations.filter(curate => curate !== stringCuration))
  // }
  return (
    <QueryContext.Provider value={{
      allCurations,
      setCuration,
      addLastPublishTime,
      setSearchBarValue,
      searchBarValue,
      storeAPIresult,
      APIresult,
      getCurations,
      getQueryString,
      filterTime,
      setFilterTime
    }}>
      {props.children}
    </QueryContext.Provider>
  );
};

function MyApp({ Component, pageProps }) {

  return (
    <QueryContextProvider>
      <Component {...pageProps} />
    </QueryContextProvider>
  );
}

export default MyApp