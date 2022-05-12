import style from '../../../styles/Home.module.css'
import TypeOfArticle from './TypeOfArticle'
import ByDate from './Date'


export const RefineSearch = () => {
	return (
		<div className={`${style.refineSearch}`}>
			<h2 className="o-teaser-collection__heading o-teaser-collection">Refine your search</h2>
			<div className={style.searchByTypes}>
				<TypeOfArticle />
				<ByDate />
			</div>
		</div>
	)
}

export default RefineSearch