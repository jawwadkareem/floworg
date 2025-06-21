import React from "react";
import styled from "@emotion/styled";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/routes";
import useTranslation from "@/hooks/useTranslation";

const Root = styled("div")`
  display: flex;
  min-height: 100vh;
  direction: ${({ dir }) => dir};
  transition: all 0.3s ease;
`;

function App() {
  const { dir } = useTranslation();
  return (
    <Root dir={dir}>
      <RouterProvider router={router} />
    </Root>
  );
}

export default App;
