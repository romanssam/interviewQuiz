import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img src="https://wellsoft.pro/Content/images/logo.gif" alt="Логотип компании Wellsoft"/>
            </div>
            <h3 className={styles.title}>Предварительное тестирование</h3>
        </div>
    )
}