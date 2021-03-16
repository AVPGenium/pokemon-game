import s from './style.module.css';

const Header = ({title, desc, onClickStartGame}) => {
    const handleClick = () => {
        onClickStartGame && onClickStartGame('game');
    }

    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{desc}</p>

                <button onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header;