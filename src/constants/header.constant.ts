import type { NavItem } from "@/types/navbar.type";

export const navigation_items: NavItem[] = [
  {
    id: 1,
    title: "Nosotros",
    url: "/about-us",
    subItems: [
      { id: 1, title: "Nuestra historia", url: "/about-us#our-history" },
      { id: 2, title: "Nuestro trabajo", url: "/about-us#out-work" },
      { id: 3, title: "Blog", url: "/about-us#blog" },
      { id: 4, title: "Preguntas Frecuentes", url: "/about-us#faq" },
    ],
  },
  {
    id: 2,
    title: "Perritos",
    url: "/dogs",
    subItems: [
      { id: 1, title: "Adopta", url: "/dogs#adopt" },
      { id: 2, title: "Casos de éxito", url: "/dogs#success-stories" },
      { id: 3, title: "Historias rescatadas", url: "/dogs#rescued-stories" },
      { id: 4, title: "Conoce a los perritos", url: "/dogs#meet-the-dogs" },
    ],
  },
  {
    id: 3,
    title: "Gatitos",
    url: "/cats",
    subItems: [
      { id: 1, title: "Adopta", url: "/cats#adopt" },
      { id: 2, title: "Casos de éxito", url: "/cats#success-stories" },
      { id: 3, title: "Historias rescatadas", url: "/cats#rescued-stories" },
      { id: 4, title: "Conoce a los gatitos", url: "/cats#meet-the-cats" },
    ],
  },
];

export const support_items = [
  {
    id: 4,
    title: "Apóyanos",
    url: "/ways-to-support",
    subItems: [
      { id: 1, title: "Hazte voluntario", url: "/ways-to-support#volunteer" },
      {
        id: 2,
        title: "Patrocina a un animal",
        url: "/ways-to-support#sponsor",
      },
      {
        id: 3,
        title: "Comparte nuestra misión",
        url: "/ways-to-support#share",
      },
    ],
  },
  {
    id: 5,
    title: "Dona",
    url: "/donate",
  },
];
