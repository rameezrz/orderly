import { HomeIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { Home, Suppliers, SupplierForm } from "@/pages/dashboard";

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
    layout: "hiddenMenus",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "edit Supplier",
        path: "/edit-supplier/:id",
        element: <SupplierForm key={"edit-supplier"} mode="edit" />,
      },
    ],
  },
];

export default routes;
