import { Outlet, useNavigate } from "react-router-dom";

const RootLayout = () => {
  const navigate = useNavigate();

  const changeNavigate = () => {
    navigate("/products");
  };

  return (
    <div>
      Hey there buddy
      <div>
        <Outlet />
      </div>
      <button onClick={changeNavigate}>Navigate to products Page</button>
    </div>
  );
};

export default RootLayout;
