import { Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages";

import { ROUTES } from "@/utils/common/constants";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
};

export default DefaultRoutes;
