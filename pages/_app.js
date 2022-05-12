import "../styles/globals.css";
import { createContext, useState } from 'react'

export const QueryContext = createContext();

const QueryContextProvider = (props) => {
  const [initialResponse, setInitialResponse] = useState([])
  const [searchBarValue, setSearchBarValue] = useState('')
  const [curations, setCurations] = useState([])
  const [APIresult, storeAPIresult] = useState(null)
  const [searchByTime, setSearchByTime] = useState('')
  const [filterTime, setFilterTime] = useState([])

  const allCurations = ["ARTICLES"]

  const getCurations = () => {
    if (curations.length === 0) {
      return allCurations
    } else {
      return curations
    }
  }

  const getQueryString = () => {
    return `${searchBarValue} ${searchByTime}`
  }
  const addLastPublishTime = (timeParam) => {
    setSearchByTime(timeParam)
  }
  const addCuration = (curParam) => {
    if (!curations.includes(curParam)) {
      setCurations([...curations, curParam])
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
      initialResponse,
      setInitialResponse
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