import s from './style.module.css';
import cn from 'classnames'


function Menu({isOpenMenu}) {
    const classNames = cn(s.menuContainer, {[s.active]: isOpenMenu, [s.deactive]: !isOpenMenu})
    const ROUTES = [
        {url: "#welcome", title: "HOME"},
        {url: "#game", title: "GAME"},
        {url: "#about", title: "ABOUT"},
        {url: "#contact", title: "CONTACT"}
    ]
    return (
        <div className={classNames}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {
                        ROUTES.map(item =>
                            <li>
                                <a href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;