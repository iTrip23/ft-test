import { DmFooter } from "./DmFooter"
import { DmHeader } from "./DmHeader"
import { DmPrimary } from "./DmPrimary"
import { DmSearchMobile } from "./DmSearchMobile"
import { DmSubscribe } from "./DmSubscribe"
import { DmSwitch } from "./DmSwitch"

export const DrawerMenuFull = () => {
	return (
		<div className="o-header__drawer" id="o-header-drawer" role="navigation" aria-label="Drawer menu" data-o-header-drawer data-o-header-drawer--no-js>
			<div className="o-header__drawer-inner">
				<DmHeader />
				<DmSubscribe />
				<DmSearchMobile />
				<DmSwitch />
				<DmPrimary />
				<DmFooter />
			</div>
		</div>
	)
}