import { useContext, useState } from "react"
import { QueryContext } from "../../../pages/_app"
import style from '../../../styles/Home.module.css'

export const SearchRefinedBy = () => {
	const { curations, filterTime, removeCuration, setFilterTime, hide } = useContext(QueryContext);
	const filtersArr = [filterTime , ...curations]
	
	const removeFilter = (filterParam) => {
		filterParam && filterParam.includes('Last') ? setFilterTime(null) : removeCuration(filterParam)
	}

	return (
		<div className={hide && style.displayNone}>
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
		</div>
	)
}

export default SearchRefinedBy