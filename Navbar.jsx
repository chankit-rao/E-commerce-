import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();


  return (
    <div>
      <div className="flex items-center h-20 max-w-6xl gap-[900px] justify-center">
        <NavLink to="/">
          <div className="relative left-60">
            <img src="../logo.png" alt="" height="160px" width="160px"/>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 relative left-36">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative"pt-12>              
                <FaShoppingCart className="text-2xl"/>
                {/* {
                cart.length > 0 &&
                 <p className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white ">{cart.length}</p>
                 } */}

            </div>
          </NavLink>

        </div>
      </div>
    </div>);
};

export default Navbar;
