export const HeaderTitleComp = () => {
	return (
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
	)
}