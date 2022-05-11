import { QueryContext } from '../../pages/_app'
import React, { useContext } from 'react'
import { searchFunc } from '../../functions/searchFunc'


export const HeaderSearchBar = () => {
	const { setSearchBarValue, storeAPIresult, getQueryString, getCurations } = useContext(QueryContext)

	const handleInputChange = ({ target: { value } }) => {
		setSearchBarValue(value)
	}

	const handleSearchClick = async (e) => {
		e.preventDefault()
		const queryString = getQueryString()
		const curations = getCurations()
		const searchBody = {
			"queryString": queryString,
			"queryContext": {
				"curations": curations
			},
			"resultContext": {
				"aspects": ["title", "lifecycle", "location", "images", "summary", "editorial"]
			}
		}
		const apiResponse = await searchFunc(searchBody)
		storeAPIresult(apiResponse)
	}


	return (
		<div id="o-header-search" className="o-header__row o-header__search o--if-no-js" role="search">
			<div className="o-header__container">
				<form className="o-header__search-form" action="/search" role="search" aria-label="Site search">
					<label className="o-header__visually-hidden" htmlFor="o-header-search-term">Search the <abbr title="Financial Times">FT</abbr></label>
					<input className="o-header__search-term" id="o-header-search-term" name="q" type="text" placeholder="Search the FT" onChange={handleInputChange} />
					<button className="o-header__search-submit" type="submit" onClick={handleSearchClick}>
						Search
					</button>
				</form>
			</div>
		</div>
	)
}
export default HeaderSearchBar








		// const mutatedApi = apiResponse.map((
		// 	{
		// 		title: { title },
		// 		editorial: { subheading },
		// 		summary: { excerpt },
		// 		images,
		// 		lifecycle
		// 	}
		// ) => {
		// 	const newArticle = {
		// 		title: {},
		// 		editorial: {},
		// 		summary: {}
		// 	}
		// 	const regex = new RegExp(searchBarValue, 'gi');
		// 	newArticle["title"].title = title.replace(regex, `<span className=${style.bgColor}>${searchBarValue}</span>`)
		// 	newArticle["editorial"].subheading = subheading.replace(regex, `<span className=${style.bgColor}>${searchBarValue}</span>`)
		// 	newArticle["summary"].excerpt = excerpt.replace(regex, `<span className=${style.bgColor}>${searchBarValue}</span>`)
		// 	newArticle.images = images
		// 	newArticle.lifecycle = lifecycle
		// 	return newArticle
		// })