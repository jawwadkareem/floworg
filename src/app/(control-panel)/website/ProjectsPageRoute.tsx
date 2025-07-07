// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const ProjectsPage = lazy(() => import("./ProjectsPage"));
const HomePageRoute: FuseRouteItemType = {
  path: "projects",
  element: <ProjectsPage />,
};

export default HomePageRoute;
