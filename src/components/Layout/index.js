import s from './style.module.css';

function Layout({id, title, desc, urlBg, colorBg}) {
    const styleBg = urlBg ? {backgroundImage: `url(${urlBg})`} : {background: `${colorBg}`}

    return (
        <section className="root" id={id} style={styleBg}>
            <div className={s.wrapper} style={styleBg}>
                <article>
                    <div className={s.title}>
                        <h3>${title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>${desc}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;