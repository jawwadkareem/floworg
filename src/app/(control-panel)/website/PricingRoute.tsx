// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const Pricing = lazy(() => import("./Pricing"));

const ServicesRoute: FuseRouteItemType = {
  path: "pricing", // this means "/home"
  element: <Pricing />,
};

export default ServicesRoute;
