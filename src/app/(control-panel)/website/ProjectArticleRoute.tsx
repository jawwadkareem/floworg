// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const ProjectArticlePage = lazy(() => import("./components/ProjectArticlePage/page"));
const ProjectArticleRoute: FuseRouteItemType = {
  path: "project-article",
  element: <ProjectArticlePage />,
};

export default ProjectArticleRoute;
