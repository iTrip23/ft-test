import style from '../../../styles/Home.module.css'
import { QueryContext } from '../../../pages/_app'
import { useContext } from 'react'
import moment from 'moment'

export const ByDate = () => {
	const { addLastPublishTime, setFilterTime } = useContext(QueryContext)
	const daysArr = [7, 30, 365];
	const handleTime = (dayParam) => {
		const timeFromNow = moment().subtract(dayParam, 'days').format('YYYY-MM-DD') + "T00:00:00Z"
		addLastPublishTime(`AND lastPublishDateTime:>${timeFromNow}`)
		setFilterTime([`${dayParam <= 30 ? `Last ${dayParam} days` : "Last year"}`])
	}
	return (
		<div className={style.columnCenter}>
			<h1>Date</h1>
			{daysArr.map((days, index) => {
				return (
					<div
						onClick={() => handleTime(days)}
						className={`${style.curateBy} o-labels o-labels--content-premium`}
						key={index}>
						{`${days <= 30 ? `Last ${days} days` : "Last year"}`}
					</div>
				)
			})}
		</div>
	)
}
export default ByDate