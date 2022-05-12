import { QueryContext } from '../../../pages/_app'
import { useContext } from 'react'
import style from '../../../styles/Home.module.css'

export const TypeOfArticle = () => {
	const { addCuration, allCurations } = useContext(QueryContext)
	return (
		<div className={style.articleTypeColumn}>
			<h2 className="o-teaser-collection">Type</h2>
			{allCurations.map((type, id) => {
				return (
					<div
						className={`${style.searchType} o-labels o-labels--content-premium`}
						key={id}
						onClick={() => addCuration(type)}>
						{type}
					</div>
				)
			})}
		</div>
	)
}

export default TypeOfArticle

