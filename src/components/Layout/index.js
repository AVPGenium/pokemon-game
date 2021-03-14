import styles from './style.module.css';

function Layout({id, title, desc, urlBg, colorBg, children}) {
    //const styleBg = urlBg ? {backgroundImage: `url(${urlBg})`} : {background: `${colorBg}`}
    const  s = {};
    if (urlBg) {
        s.backgroundImage = `url(${urlBg})`;
    }
    if (colorBg) {
        s.backgroundColor = colorBg
    }
    return (
        <section className={styles.root} id={id} style={s}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}></span>
                    </div>
                    <div className={`${styles.desc} ${styles.full}`}>
                        <p>{children}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;