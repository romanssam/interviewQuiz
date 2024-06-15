import {SocialMedia} from "../../SocialMedia";
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <SocialMedia />
        </div>
    )
}