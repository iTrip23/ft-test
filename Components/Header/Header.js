
const Header = () => {
	return (
		<>
			<header className="o-header" data-o-component="o-header" data-o-header--no-js>
				<div className="o-header__row o-header__anon">
					<ul className="o-header__anon-list">
						<li className="o-header__anon-item">
							<a className="o-header__anon-link" href="#">Subscribe</a>
						</li>
						<li className="o-header__anon-item">
							<a className="o-header__anon-link" href="#">Sign In</a>
						</li>
					</ul>
				</div>

				<div className="o-header__row o-header__top">
					<div className="o-header__container">
						<div className="o-header__top-wrapper">
							<div className="o-header__top-column o-header__top-column--left">
								<a href="#o-header-drawer" className="o-header__top-icon-link o-header__top-icon-link--menu" aria-controls="o-header-drawer" title="Open side navigation menu">
									<span className="o-header__top-link-label">Open side navigation menu</span>
								</a>
							</div>
							<div className="o-header__top-column o-header__top-column--center">
								<a className="o-header__top-logo" href="#" title="Go to Financial Times homepage">
									<span className="o-header__visually-hidden">Financial Times</span>
								</a>
							</div>

							<div className="o-header__top-column o-header__top-column--right">
								<a className="o-header__top-button o-header__top-button--hide-m">Subscribe</a>
								<a className="o-header__top-link o-header__top-link--hide-m">Sign in</a>
							</div>
						</div>
					</div>
				</div>
				<div id="o-header-search" className="o-header__row o-header__search o--if-no-js" role="search">
					<div className="o-header__container">
						<form className="o-header__search-form" action="/search" role="search" aria-label="Site search">
							<label className="o-header__visually-hidden" htmlFor="o-header-search-term">Search the <abbr title="Financial Times">FT</abbr></label>
							<input className="o-header__search-term" id="o-header-search-term" name="q" type="text" placeholder="Search the FT" />
							<button className="o-header__search-submit" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
				<div id="o-header-search-js" className="o-header__row o-header__search" role="search" data-o-header-search>
					<div className="o-header__container">
						<form className="o-header__search-form" action="/search" role="search" aria-label="Site search">
							<label className="o-header__visually-hidden" htmlFor="o-header-search-term-js">Search the <abbr title="Financial Times">FT</abbr></label>
							<input className="o-header__search-term" id="o-header-search-term-js" name="q" type="text" placeholder="Search the FT" />
							<button className="o-header__search-submit" type="submit">
								Search
							</button>
							<button className="o-header__search-close o--if-js" type="button" aria-controls="o-header-search-js" title="Close search bar">
								<span className="o-header__visually-hidden">Close search bar</span>
							</button>
						</form>
					</div>
				</div>

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

				<nav id="o-header-nav-desktop" className="o-header__row o-header__nav o-header__nav--desktop" role="navigation" aria-label="Main navigation">
					<div className="o-header__container">
						<ul className="o-header__nav-list o-header__nav-list--left">
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="#" id="o-header-link-0" aria-label="Home, current page" aria-current="page" data-trackable="Home">Home</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/world" id="o-header-link-1" data-trackable="World">World</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/world/uk" id="o-header-link-2" data-trackable="UK">UK</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/companies" id="o-header-link-3" data-trackable="Companies">Companies</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/technology" id="o-header-link-4" data-trackable="Tech">Tech</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/markets" id="o-header-link-5" data-trackable="Markets">Markets</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/climate-capital" id="o-header-link-6" data-trackable="Climate">Climate</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/opinion" id="o-header-link-7" data-trackable="Opinion">Opinion</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/work-careers" id="o-header-link-8" data-trackable="Work &amp; Careers">Work &amp; Careers</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/life-arts" id="o-header-link-9" data-trackable="Life &amp; Arts">Life &amp; Arts</a>
							</li>
							<li className="o-header__nav-item">
								<a className="o-header__nav-link o-header__nav-link--primary" href="/htsi" id="o-header-link-10" data-trackable="How to Spend It">How to Spend It</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<div className="o-header__drawer" id="o-header-drawer" role="navigation" aria-label="Drawer menu" data-o-header-drawer data-o-header-drawer--no-js>
				<div className="o-header__drawer-inner">
					<div className="o-header__drawer-tools">
						<a className="o-header__drawer-tools-logo" href="#">
							<span className="o-header__visually-hidden">Financial Times</span>
						</a>
						<button type="button" className="o-header__drawer-tools-close" aria-controls="o-header-drawer" title="Close drawer menu">
							<span className="o-header__visually-hidden">Close drawer menu</span>
						</button>
						<p className="o-header__drawer-current-edition">UK Edition</p>
					</div>

					<div className="o-header__drawer-actions">
						<a className="o-header__drawer-button" href="#">Subscribe for full access</a>
					</div>

					<div className="o-header__drawer-search">
						<form className="o-header__drawer-search-form" action="/search" role="search" aria-label="Site search">
							<label className="o-header__visually-hidden" htmlFor="o-header-drawer-search-term">Search the <abbr title="Financial Times">FT</abbr></label>
							<input className="o-header__drawer-search-term" id="o-header-drawer-search-term" name="q" type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="Search the FT" />
							<button className="o-header__drawer-search-submit" type="submit">
								<span className="o-header__visually-hidden">Search</span>
							</button>
						</form>
					</div>

					<nav className="o-header__drawer-menu" aria-label="Edition switcher">
						<ul className="o-header__drawer-menu-list">
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link" href="/edition=international">Switch to International Edition</a>
							</li>
						</ul>
					</nav>

					<nav className="o-header__drawer-menu o-header__drawer-menu--primary">
						<ul className="o-header__drawer-menu-list">
							<li className="o-header__drawer-menu-item o-header__drawer-menu-item--heading">
								Top sections
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--selected" href="#" aria-label="xxxx, current page" aria-current="page">Home</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="ft.com/world" data-trackable="World" tabIndex="-1">World</a>
									<button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-1">
										Show more WWWWWWWWWWWW links
									</button>
								</div>
								<ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-1">
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/global-economy" data-trackable="Global Economy" tabIndex="-1">Global Economy</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world/uk" data-trackable="UK" tabIndex="-1">UK</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world/us" data-trackable="US" tabIndex="-1">US</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world/asia-pacific/china" data-trackable="China" tabIndex="-1">China</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world/africa" data-trackable="Africa" tabIndex="-1">Africa</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world/asia-pacific" data-trackable="Asia Pacific" tabIndex="-1">Asia Pacific</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/emerging-markets" data-trackable="Emerging Markets" tabIndex="-1">Emerging Markets</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world/europe" data-trackable="Europe" tabIndex="-1">Europe</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/war-in-ukraine" data-trackable="War in Ukraine" tabIndex="-1">War in Ukraine</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world/americas" data-trackable="Americas" tabIndex="-1">Americas</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world/mideast" data-trackable="Middle East &amp; North Africa" tabIndex="-1">Middle East &amp; North Africa</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/australia-newzealand" data-trackable="Australia &amp; NZ" tabIndex="-1">Australia &amp; NZ</a>
									</li>
								</ul>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/world/uk" aria-label="UK, current page" aria-current="page" data-trackable="UK" tabIndex="-1">UK</a>
									<button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-2">
										Show more xx links
									</button>
								</div>
								<ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-2">
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/uk-business-economy" data-trackable="UK Business &amp; Economy" tabIndex="-1">UK Business &amp; Economy</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world/uk/politics" data-trackable="UK Politics &amp; Policy" tabIndex="-1">UK Politics &amp; Policy</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/brexit" data-trackable="Brexit" tabIndex="-1">Brexit</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/uk" data-trackable="UK Companies" tabIndex="-1">UK Companies</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/personal-finance" data-trackable="Personal Finance" tabIndex="-1">Personal Finance</a>
									</li>
								</ul>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/companies" data-trackable="Companies" tabIndex="-1">Companies</a>
									<button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-3">
										Show more xxxxxxxxx links
									</button>
								</div>
								<ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-3">
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/energy" data-trackable="Energy" tabIndex="-1">Energy</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/financials" data-trackable="Financials" tabIndex="-1">Financials</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/health" data-trackable="Health" tabIndex="-1">Health</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/industrials" data-trackable="Industrials" tabIndex="-1">Industrials</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/media" data-trackable="Media" tabIndex="-1">Media</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/professional-services" data-trackable="Professional Services" tabIndex="-1">Professional Services</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/retail-consumer" data-trackable="Retail &amp; Consumer" tabIndex="-1">Retail &amp; Consumer</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/technology" data-trackable="Tech Sector" tabIndex="-1">Tech Sector</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/telecoms" data-trackable="Telecoms" tabIndex="-1">Telecoms</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/companies/transport" data-trackable="Transport" tabIndex="-1">Transport</a>
									</li>
								</ul>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/technology" data-trackable="Tech" tabIndex="-1">Tech</a>
								</div>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/markets" data-trackable="Markets" tabIndex="-1">Markets</a>
									<button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-5">
										Show more xxxxxxx links
									</button>
								</div>
								<ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-5">
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/alphaville" data-trackable="Alphaville" tabIndex="-1">Alphaville</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="https://markets.ft.com/data" data-trackable="Markets Data" tabIndex="-1">Markets Data</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/capital-markets" data-trackable="Capital Markets" tabIndex="-1">Capital Markets</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/commodities" data-trackable="Commodities" tabIndex="-1">Commodities</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/currencies" data-trackable="Currencies" tabIndex="-1">Currencies</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/equities" data-trackable="Equities" tabIndex="-1">Equities</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/fund-management" data-trackable="Fund Management" tabIndex="-1">Fund Management</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/ft-trading-room" data-trackable="Trading" tabIndex="-1">Trading</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/moral-money" data-trackable="Moral Money" tabIndex="-1">Moral Money</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="https://etf.ft.com" data-trackable="ETF Hub" tabIndex="-1">ETF Hub</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/cryptocurrencies" data-trackable="Cryptocurrencies" tabIndex="-1">Cryptocurrencies</a>
									</li>
								</ul>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/climate-capital" data-trackable="Climate" tabIndex="-1">Climate</a>
								</div>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/opinion" data-trackable="Opinion" tabIndex="-1">Opinion</a>
									<button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-6">
										links
									</button>
								</div>
								<ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-6">
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/columnists" data-trackable="Columnists" tabIndex="-1">Columnists</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/ft-view" data-trackable="The FT View" tabIndex="-1">The FT View</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/the-big-read" data-trackable="The Big Read" tabIndex="-1">The Big Read</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/lex" data-trackable="Lex" tabIndex="-1">Lex</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/obituaries" data-trackable="Obituaries" tabIndex="-1">Obituaries</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/letters" data-trackable="Letters" tabIndex="-1">Letters</a>
									</li>
								</ul>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/work-careers" data-trackable="Work &amp; Careers" tabIndex="-1">Work &amp; Careers</a>
									<button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-7">
										links
									</button>
								</div>
								<ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-7">
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="https://rankings.ft.com/" data-trackable="Business School Rankings" tabIndex="-1">Business School Rankings</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/business-education" data-trackable="Business Education" tabIndex="-1">Business Education</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/entrepreneurship" data-trackable="Entrepreneurship" tabIndex="-1">Entrepreneurship</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/recruitment" data-trackable="Recruitment" tabIndex="-1">Recruitment</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/business-books" data-trackable="Business Books" tabIndex="-1">Business Books</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/business-travel" data-trackable="Business Travel" tabIndex="-1">Business Travel</a>
									</li>
								</ul>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/life-arts" data-trackable="Life &amp; Arts" tabIndex="-1">Life &amp; Arts</a>
									<button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-8">
										links
									</button>
								</div>
								<ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-8">
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/arts" data-trackable="Arts" tabIndex="-1">Arts</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/books" data-trackable="Books" tabIndex="-1">Books</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/food-drink" data-trackable="Food &amp; Drink" tabIndex="-1">Food &amp; Drink</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/magazine" data-trackable="FT Magazine" tabIndex="-1">FT Magazine</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/house-home" data-trackable="House &amp; Home" tabIndex="-1">House &amp; Home</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/style" data-trackable="Style" tabIndex="-1">Style</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/travel" data-trackable="Travel" tabIndex="-1">Travel</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/globetrotter" data-trackable="FT Globetrotter" tabIndex="-1">FT Globetrotter</a>
									</li>
								</ul>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/personal-finance" data-trackable="Personal Finance" tabIndex="-1">Personal Finance</a>
									<button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-9">
										Show more xxxxxxxx xxxxxxx links
									</button>
								</div>
								<ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-9">
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/personal-finance/mortgages" data-trackable="Property &amp; Mortgages" tabIndex="-1">Property &amp; Mortgages</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/personal-finance/investments" data-trackable="Investments" tabIndex="-1">Investments</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/personal-finance/pensions" data-trackable="Pensions" tabIndex="-1">Pensions</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/personal-finance/tax" data-trackable="Tax" tabIndex="-1">Tax</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/personal-finance/banking-savings" data-trackable="Banking &amp; Savings" tabIndex="-1">Banking &amp; Savings</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/personal-finance/advice-commment" data-trackable="Advice &amp; Comment" tabIndex="-1">Advice &amp; Comment</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/next-act" data-trackable="Next Act" tabIndex="-1">Next Act</a>
									</li>
								</ul>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/htsi" data-trackable="How to Spend It" tabIndex="-1">How to Spend It</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/special-reports" data-trackable="Special Reports" tabIndex="-1">Special Reports</a>
							</li>
							<li className="o-header__drawer-menu-item o-header__drawer-menu-item--heading">FT recommends</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/lex" data-trackable="Lex" tabIndex="-1">Lex</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/alphaville" data-trackable="Alphaville" tabIndex="-1">Alphaville</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/lunch-with-the-ft" data-trackable="Lunch with the FT" tabIndex="-1">Lunch with the FT</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/globetrotter" data-trackable="FT Globetrotter" tabIndex="-1">FT Globetrotter</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="https://www.ft.com/tech-asia" data-trackable="#techAsia" tabIndex="-1">#techAsia</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/moral-money" data-trackable="Moral Money" tabIndex="-1">Moral Money</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/ftfm" data-trackable="FTfm" tabIndex="-1">FTfm</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/newsletters" data-trackable="Newsletters" tabIndex="-1">Newsletters</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/video" data-trackable="Video" tabIndex="-1">Video</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="https://www.ft.com/podcasts" data-trackable="Podcasts" tabIndex="-1">Podcasts</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/news-feed" data-trackable="News feed" tabIndex="-1">News feed</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<div className="o-header__drawer-menu-toggle-wrapper">
									<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/tour/community" data-trackable="FT Community" tabIndex="-1">FT Community</a>
									<button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-11">
										links
									</button>
								</div>
								<ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-11">
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="http://live.ft.com/" data-trackable="FT Live" tabIndex="-1">FT Live</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="https://forums.ft.com/" data-trackable="FT Forums" tabIndex="-1">FT Forums</a>
									</li>
									<li className="o-header__drawer-menu-item">
										<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="https://bdp.ft.com/" data-trackable="Board Director Programme" tabIndex="-1">Board Director Programme</a>
									</li>
								</ul>
							</li>
							<li className="o-header__drawer-menu-item o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="/myft" data-trackable="myFT" tabIndex="-1">myFT</a>
							</li>
							<li className="o-header__drawer-menu-item o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="https://markets.ft.com/data/portfolio/dashboard" data-trackable="Portfolio" tabIndex="-1">Portfolio</a>
							</li>
							<li className="o-header__drawer-menu-item o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="https://www.ft.com/todaysnewspaper" data-trackable="Today's Newspaper (ePaper)" tabIndex="-1">Today's Newspaper (ePaper)</a>
							</li>
							<li className="o-header__drawer-menu-item o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="https://www.ft.com/crossword" data-trackable="Crossword" tabIndex="-1">Crossword</a>
							</li>
							<li className="o-header__drawer-menu-item o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="https://www.ft.com/tour/apps" data-trackable="Our Apps" tabIndex="-1">Our Apps</a>
							</li>
						</ul>
					</nav>
					<nav className="o-header__drawer-menu o-header__drawer-menu--user">
						<ul className="o-header__drawer-menu-list">
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link" href="http://help.ft.com" data-trackable="Help Centre" tabIndex="-1">Help Centre</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link" href="/products?segID=400863&amp;segmentID=190b4443-dc03-bd53-e79b-b4b6fbd04e64">Subscribe</a>
							</li>
							<li className="o-header__drawer-menu-item">
								<a className="o-header__drawer-menu-link" href="/login">Sign In</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	)
}

export default Header