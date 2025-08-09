// In src/app/main/website/HomeRoute.tsx (or wherever you keep route files)

import { lazy } from "react";
import { FuseRouteItemType } from "@fuse/utils/FuseUtils";

const ReferralProgramPage = lazy(() => import("./components/ReferralProgramPage/page"));
const ReferralProgramRoute: FuseRouteItemType = {
  path: "referral-program",
  element: <ReferralProgramPage />,
};

export default ReferralProgramRoute;
