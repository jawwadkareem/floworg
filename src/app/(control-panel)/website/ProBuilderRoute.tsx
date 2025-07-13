// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const ProBuilderPage = lazy(() => import("./components/ProBuilderPage/page"));
const ProBuilderRoute: FuseRouteItemType = {
  path: "probuilder",
  element: <ProBuilderPage />,
};

export default ProBuilderRoute;
