import { MobileSubSign } from './MobileSubSign'
import { HeaderTitleComp } from './HeaderTitleComp'
import { HeaderSearchBar } from './HeaderSearchBar'
import { MobileNavLinks } from './MobileNavLinks'
import { DesktopNavLinks } from './DesktopNavLinks'
import { DrawerMenuFull } from '../Drawermenu/DrawerMenuFull'

const Header = () => {

	return (
		<>
			<header className="o-header" data-o-component="o-header" data-o-header--no-js>
				<MobileSubSign />
				<HeaderTitleComp />
				<HeaderSearchBar />
				<MobileNavLinks />
				<DesktopNavLinks />
			</header>
			<DrawerMenuFull />
		</>
	)
}

export default Header