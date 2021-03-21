import stl from './style.module.css';
import classnames from 'classnames';
import {Link} from "react-router-dom";

const Navbar = ({isOpenMenu, bgActive = false, onToggleMenu}) => {
    const handleClick = () => {
        onToggleMenu(!isOpenMenu)
    }

    return (
        <nav id={stl.navbar} className={classnames({
            [stl.bgActive]: bgActive
        })}>
            <div className={stl.navWrapper}>
                <Link className={stl.brand}  to='/'>
                    LOGO
                </Link>

                <div className={classnames(stl.menuButton, {[stl.active]: isOpenMenu})}
                   onClick={handleClick}>
                    <span />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;