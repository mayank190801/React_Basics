import { Outlet, useNavigate } from "react-router-dom";

const RootLayout = () => {
  const navigate = useNavigate();

  const changeNavigate = () => {
    navigate("/products");
  };

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
