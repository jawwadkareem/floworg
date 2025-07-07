// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const ProjectsDetailsPage = lazy(() => import("./ProjectsDetailsPage"));
const HomePageRoute: FuseRouteItemType = {
  path: "project-details",
  element: <ProjectsDetailsPage />,
};

export default HomePageRoute;
