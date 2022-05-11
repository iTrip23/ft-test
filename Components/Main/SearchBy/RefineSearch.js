import style from '../../../styles/Home.module.css'
import TypeOfArticle from './TypeOfArticle'
import ByDate from './Date'


export const RefineSearch = () => {
	return (
		<div className={style.rowCenter}>
			<TypeOfArticle />
			<ByDate />
		</div>
	)
}

export default RefineSearch