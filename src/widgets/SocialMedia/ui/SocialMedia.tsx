import {memo, useMemo} from "react";
import {SocialMediaTypes} from "../model/types/socialMediaTypes.ts";
import {useSocialMediaLinks} from "../model/selectors/socialMediaSelectors.ts";
import {SocialMediaItem} from "./SocialMediaItem/SocialMediaItem.tsx";
import styles from './SocialMedia.module.scss';

export const SocialMedia = memo(() => {
    const socialMediaItemsList: SocialMediaTypes[] = useSocialMediaLinks();

    const itemsList = useMemo(
        () =>
            socialMediaItemsList.map((item) => (
                <SocialMediaItem item={item} key={item.text} />
            )),
        [socialMediaItemsList]
    )

    return (
        <div className={styles.wrapper}>
            {itemsList}
        </div>
    )
});