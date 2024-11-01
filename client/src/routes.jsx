import { HomeIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { Home, Suppliers, SupplierForm } from "@/pages/dashboard";
import { ItemForm, ViewItems, ViewSingleItem } from "./pages";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    title: "Suppliers",
    layout: "dashboard",
    pages: [
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "view suppliers",
        path: "/suppliers",
        element: <Suppliers />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "add Supplier",
        path: "/add-supplier",
        element: <SupplierForm key={"add-supplier"} mode="create" />,
      },
    ],
  },
  {
    title: "Items",
    layout: "dashboard",
    pages: [
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "view Items",
        path: "/items",
        element: <ViewItems />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "add items",
        path: "/add-item",
        element: <ItemForm key={"add-item"} mode="create" />,
      },
    ],
  },
  {
    layout: "hiddenMenus",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "edit Supplier",
        path: "/edit-supplier/:id",
        element: <SupplierForm key={"edit-supplier"} mode="edit" />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "edit Item",
        path: "/edit-item/:id",
        element: <ItemForm key={"edit-item"} mode="edit" />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "view Item",
        path: "/item/:id",
        element: <ViewSingleItem key={"view-item"} />,
      },
    ],
  },
];

export default routes;
