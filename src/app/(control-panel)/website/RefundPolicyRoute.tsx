// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const RefundPolicyPage = lazy(() => import("./components/RefundPolicyPage/page"));
const RefundPolicyRoute: FuseRouteItemType = {
  path: "refund-policy",
  element: <RefundPolicyPage />,
};

export default RefundPolicyRoute;
