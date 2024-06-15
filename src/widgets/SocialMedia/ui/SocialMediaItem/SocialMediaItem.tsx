import {SocialMediaTypes} from "../../model/types/socialMediaTypes.ts";
import {memo} from "react";
import styles from './SocialMediaItem.module.scss';

interface SocialMediaItemsProps {
    item: SocialMediaTypes
}

export const SocialMediaItem = memo((props: SocialMediaItemsProps) => {
    const { item } = props;

    return (
        <a className={styles.wrapper} href={item.path} target="_blank">
            {item.Icon && <item.Icon />}
            {item.text}
        </a>
    )
});