// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const TutorialVideosPage = lazy(() => import("./components/TutorialVideosPage/page"));
const TutorialVideosRoute: FuseRouteItemType = {
  path: "tutorial-videos",
  element: <TutorialVideosPage />,
};

export default TutorialVideosRoute;
