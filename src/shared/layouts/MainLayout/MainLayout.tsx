import {ReactElement} from "react";
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
    header: ReactElement;
    main: ReactElement;
    footer: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const {
        header,
        main,
        footer
    } = props;

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>{header}</header>
            <main className={styles.main}>{main}</main>
            <footer className={styles.footer}>{footer}</footer>
        </div>
    )
}