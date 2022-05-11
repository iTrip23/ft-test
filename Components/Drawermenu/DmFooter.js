export const DmFooter = () => {
	return (
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
	)
}