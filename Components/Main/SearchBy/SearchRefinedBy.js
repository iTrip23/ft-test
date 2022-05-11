import { useContext } from "react"
import { QueryContext } from "../../../pages/_app"
import style from '../../../styles/Home.module.css'

export const SearchRefinedBy = () => {
	const { curations, filterTime, removeCuration, setFilterTime,  } = useContext(QueryContext);
	const filtersArr = [...filterTime, ...curations]

	const removeFilter = (filterParam) => {
		filterParam && filterParam.includes('Last') ? setFilterTime([]) : removeCuration(filterParam)
	}

	return (

			<div className={style.rowCenter}>
				{filtersArr ? filtersArr.map((filter, index) => {
					return (
						<button className="o-buttons o-buttons--primary"
							onClick={() => removeFilter(filter)}
							key={index}
						>{filter}</button>
					)
				}) : null}
			</div >
	)
}

export default SearchRefinedBy