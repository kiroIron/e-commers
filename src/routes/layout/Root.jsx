import { Outlet } from "react-router-dom";
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
import NavbarCom from "../../components/navbar/NavbarCom";
import Footer from "../../components/footer/Footer";
function Root() {
  return (
    <div className="max-vw h-100 d-flex flex-column justify-content-start align-items-start">
      <NavbarCom />
      <main className="w-100 min-vh-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
