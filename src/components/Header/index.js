import s from './style.module.css';

function Header({title, desc}) {
    return (
            <header className={s.root}>
                <div className={s.forest}/>
                <div className={s.container}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </header>
    );
}

export default Header;