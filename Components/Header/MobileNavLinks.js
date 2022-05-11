export const MobileNavLinks = () => {
	return (
		<nav id="o-header-nav-mobile" className="o-header__row o-header__nav o-header__nav--mobile" role="navigation" aria-label="Main navigation">
			<ul className="o-header__nav-list">
				<li className="o-header__nav-item">
					<a className="o-header__nav-link o-header__nav-link--primary" href="#" aria-label="Home, current page" aria-current="page" data-trackable="Home">Home</a>
				</li>
				<li className="o-header__nav-item">
					<a className="o-header__nav-link o-header__nav-link--primary" href="https://markets.ft.com/data" data-trackable="Markets Data">Markets Data</a>
				</li>

			</ul>
		</nav>
	)
}