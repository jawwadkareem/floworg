// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const IntegrationPage = lazy(() => import("./components/IntegrationPage/page"));
const IntegrationRoute: FuseRouteItemType = {
  path: "integration",
  element: <IntegrationPage />,
};

export default IntegrationRoute;
