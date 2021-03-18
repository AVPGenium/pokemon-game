import {Link} from 'react-router-dom';

import s from './style.module.css';
import cn from 'classnames'

const ROUTES = [
    {url: "/", title: "HOME"},
    {url: "/game", title: "GAME"},
    {url: "/about", title: "ABOUT"},
    {url: "/contact", title: "CONTACT"}
]

function Menu({isOpenMenu, onToggleMenu}) {
    const handleClick = () => {
        onToggleMenu(!isOpenMenu)
    }

    const classNames = cn(s.menuContainer, {[s.active]: isOpenMenu, [s.deactive]: !isOpenMenu})
    return (
        <div className={classNames}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {
                        ROUTES.map((item, index) =>
                            <li key={index} onClick={handleClick}>
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;