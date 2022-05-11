import "../styles/globals.css";
import { createContext, useState } from 'react'

export const QueryContext = createContext();

const QueryContextProvider = (props) => {
  const [searchBarValue, setSearchBarValue] = useState('')
  const [curations, setCurations] = useState([])
  const [APIresult, storeAPIresult] = useState([])
  const [searchByTime, setSearchByTime] = useState(null)
  const [filterTime, setFilterTime] = useState(null)
  const [hide, setHide] = useState(true)

  const allCurations = ["ARTICLES", "BLOGS", "PODCASTS", "VIDEOS"]

  const getCurations = () => {
    if (curations.length === 0) {
      return allCurations
    } else {
      return curations
    }
  }

  const getQueryString = () => {
    return `${searchBarValue} ${searchByTime && searchByTime}`
  }
  const addLastPublishTime = (timeParam) => {
    setSearchByTime(timeParam)
  }
  const addCuration = (curParam) => {
    if (!curations.includes(curParam)) {
      setCurations([...curations, curParam])
      setHide(false)
    }
  }
  const removeCuration = (cureParam) => {
    setCurations(curations.filter(cure => cure !== cureParam))
  }
  return (
    <QueryContext.Provider value={{
      allCurations,
      setCurations,
      addCuration,
      removeCuration,
      curations,
      addLastPublishTime,
      setSearchBarValue,
      searchBarValue,
      storeAPIresult,
      APIresult,
      getCurations,
      getQueryString,
      filterTime,
      setFilterTime,
      hide,
      setHide
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