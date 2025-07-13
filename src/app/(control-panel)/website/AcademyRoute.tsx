// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const AcademyPage = lazy(() => import("./components/AcademyPage/page"));
const AcademyRoute: FuseRouteItemType = {
  path: "academy",
  element: <AcademyPage />,
};

export default AcademyRoute;
