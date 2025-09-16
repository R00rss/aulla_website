import type { SocialNetWorkItem } from "@/types/social-network.type";
import InstagramIcon from "@/assets/icons/social-network/instagram.svg";
import FacebookIcon from "@/assets/icons/social-network/facebook.svg";
import YoutubeIcon from "@/assets/icons/social-network/youtube.svg";
import TikTokIcon from "@/assets/icons/social-network/tik-tok.svg";

export const social_network_items: SocialNetWorkItem[] = [
  {
    id: 1,
    title: "Instagram",
    url: "https://www.instagram.com/aullaec/",
    logo: {
      src: InstagramIcon,
      height: 26,
      width: 26,
    },
  },
  {
    id: 2,
    title: "Facebook",
    url: "https://www.facebook.com/aullaec",
    logo: {
      src: FacebookIcon,
      height: 36,
      width: 36,
    },
  },
  {
    id: 3,
    title: "Youtube",
    url: "https://www.youtube.com/@AULLAECUADOR",
    logo: {
      src: YoutubeIcon,
      height: 36,
      width: 36,
    },
  },
  {
    id: 4,
    title: "TikTok",
    url: "https://www.tiktok.com/@aullaec",
    logo: {
      src: TikTokIcon,
      height: 31,
      width: 31,
    },
  },
];
