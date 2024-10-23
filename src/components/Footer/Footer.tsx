
import ImgVase from '../../assets/img/FooterImg/imgVaseFooter.svg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.ImgFooter}></div>
        <article className={styles.footerBody}>

            <div className={styles.boxTitle}>

                <h1 className={styles.h1}>Stay Fresh</h1>
                <span className={styles.spanf}>compassinhos@gmail.com</span>
                <span className={styles.spanf}>+55 41 99999-9999</span>

            </div>

            <div className={styles.boxInfo}>
                <div className={styles.boxLinks}>
                    <h1 className={styles.h1}>Links</h1>
                    <a href="/about-us">About us</a>
                    <a href="/products-page">Products</a>
                    <a href="/error">Blogs</a>
                </div>

                <div className={styles.boxCommunity}>
                    <h1 className={styles.h1}>Community</h1>
                    <a href="/about-us">About us</a>
                    <a href="/error">Products</a>
                    <a href="/error">Blogs</a>
                </div>
            </div>

        </article>
            <div className={styles.footerLine}></div>

            <div className={styles.footerCopy}>
                <img src={ImgVase}/>

                <div className={styles.boxCopy}>
                <span className={styles.spanf}>Compassinhos ®. All rights</span>
                <span className={styles.spanf}>reserved</span>
                </div>

            </div>
    </footer>
      
    
  )
}

export default Footer