export const DmHeader = () => {
	return (
		<div className="o-header__drawer-tools">
			<a className="o-header__drawer-tools-logo" href="#">
				<span className="o-header__visually-hidden">Financial Times</span>
			</a>
			<button type="button" className="o-header__drawer-tools-close" aria-controls="o-header-drawer" title="Close drawer menu">
				<span className="o-header__visually-hidden">Close drawer menu</span>
			</button>
			<p className="o-header__drawer-current-edition">UK Edition</p>
		</div>
	)
} 