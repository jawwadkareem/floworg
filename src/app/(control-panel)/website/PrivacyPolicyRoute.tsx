// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const PrivacyPolicyPage = lazy(() => import("./components/PrivacyPolicyPage/page"));
const PrivacyPolicyRoute: FuseRouteItemType = {
  path: "privacy-policy",
  element: <PrivacyPolicyPage />,
};

export default PrivacyPolicyRoute;
