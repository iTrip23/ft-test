import Image from "next/image";
import style from '../../styles/Home.module.css'


const CardWithImage = ({ title, imgURL, subHeading, summary, timeStamp, id }) => {

	return (
		<div className={`${style.searchListItem} o-teaser o-teaser--small o-teaser--has-image`} data-o-component="o-teaser" key={id}>
			<div className="o-teaser__content">
				<div className="o-teaser__meta">
					<a href="#" className="o-teaser__tag">{subHeading}</a>
				</div>
				<h2 className="o-teaser__heading">
					<a href="#">{title}</a>
				</h2>
				<p className="o-teaser__standfirst">
					<a href="#">
						{summary}
					</a>
				</p>
				<div className="o-teaser__timestamp">
					<time data-o-component="o-date" className="o-teaser__timestamp-date" dateTime="2016-02-29T12:35:48Z">{timeStamp}</time>
				</div>
			</div>
			<div className="o-teaser__image-container">
				<div className="o-teaser__image-placeholder image-placeholder">
					<Image src={imgURL}
						className="o-teaser__image"
						alt="demo image"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
		</div>

	)
}

export default CardWithImage;