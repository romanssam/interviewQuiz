import { SocialMediaTypes } from '../types/socialMediaTypes.ts';
import { ReactComponent as GitHubIcon} from '../../../../shared/assets/logos/github-mark.svg';
import { ReactComponent as VkIcon} from '../../../../shared/assets/logos/vkLogo.svg';
import { ReactComponent as HabrIcon} from '../../../../shared/assets/logos/habrLogo.svg';

export const useSocialMediaLinks = () => {
    const socialMediaLinks: SocialMediaTypes[] = [
        {
            path: 'https://github.com/romanssam',
            Icon: GitHubIcon
        },
        {
            path: 'https://vk.com/troubledyouth_h',
            Icon: VkIcon
        },
        {
            path: 'https://career.habr.com/troubledyouth_h',
            Icon: HabrIcon
        },
    ];

    return socialMediaLinks;
}