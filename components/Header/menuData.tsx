import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Développement d'applications mobiles standard",
        path: "/services/developpement-applications-mobiles-standard",
        newTab: false,
      },
      {
        id: 22,
        title: "Développement de DApps mobiles (Blockchain)",
        path: "/services/developpement-dapps-mobiles-blockchain",
        newTab: false,
      },
      {
        id: 23,
        title: "Développement d'applications mobiles intégrant l'IA",
        path: "/services/developpement-applications-mobiles-ia",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Projets",
    path: "/projets",
    newTab: false,
  },
  {
    id: 4,
    title: "À propos",
    path: "/a-propos",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
