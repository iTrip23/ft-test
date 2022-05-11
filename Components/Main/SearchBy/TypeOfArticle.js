import { QueryContext } from '../../../pages/_app'
import { useContext } from 'react'
import style from '../../../styles/Home.module.css'

export const TypeOfArticle = () => {
	const { setCuration, allCurations } = useContext(QueryContext)
	return (
		<div className={style.columnCenter}>
			{allCurations.map((type, id) => {
				return (
					<div
						className={`${style.curateBy} o-labels o-labels--content-premium`}
						key={id}
						onClick={() => setCuration(type)}>
						{type}
					</div>
				)
			})}
		</div>
	)
}

export default TypeOfArticle