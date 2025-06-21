import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
// import Projects from "@/pages/Projects";
// import Analytics from "@/pages/Analytics";
// import Settings from "@/pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

export default router;
