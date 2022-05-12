import { useContext } from "react"
import { QueryContext } from "../../../pages/_app"
import style from '../../../styles/Home.module.css'

export const SearchRefinedBy = () => {
	const { curations, filterTime, removeCuration, setFilterTime, } = useContext(QueryContext);
	const filtersArr = [...filterTime, ...curations]

	const removeFilter = (filterParam) => {
		filterParam && filterParam.includes('Last') ? setFilterTime([]) : removeCuration(filterParam)
	}

	return (

		<div className={style.filterByTypes}>
			{filtersArr ? filtersArr.map((filter, index) => {
				return (
					<div key={index} className={style.searchIcon}>
						<span className={`${style.icon} o-icons-icon o-icons-icon--cross demo-icon`}></span>
						<button className={`${style.searchType} o-buttons o-buttons--primary`}
							onClick={() => removeFilter(filter)}
							key={index}
						>{filter}</button>
					</div>
				)
			}) : null}
		</div >
	)
}

export default SearchRefinedBy