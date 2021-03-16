import stl from './style.module.css';
import classnames from 'classnames';

const Navbar = ({isOpenMenu, onToggleMenu}) => {
    const handleClick = () => {
        onToggleMenu(!isOpenMenu)
    }

    return (
        <nav id={stl.navbar}>
            <div className={stl.navWrapper}>
                <p className={stl.brand}>
                    LOGO
                </p>

                <a className={classnames(stl.menuButton, {[stl.active]: isOpenMenu})}
                   onClick={handleClick}>
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;