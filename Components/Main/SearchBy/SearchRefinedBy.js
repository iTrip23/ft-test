import { useContext } from "react"
import { QueryContext } from "../../../pages/_app"
import style from '../../../styles/Home.module.css'

export const SearchRefinedBy = () => {
	const { curation, filterTime } = useContext(QueryContext);
	const filtersArr = [curation, filterTime]


	return (
		<div className={style.rowCenter}>
			{/* {curations && curations.map((cure, index) => {
				return (
					<span
						key={index}
						className="o-labels o-labels--content-private"
					>{cure}</span>
				)
			})} */}
			{filtersArr && filtersArr.map((filter, index) => {
				return (
					<span
						key={index}
						className="o-labels o-labels--content-commercial"
					>{filter}</span>
				)
			})}
		</div>
	)
}

export default SearchRefinedBy