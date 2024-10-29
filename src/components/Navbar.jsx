import { IoBag } from "react-icons/io5";
import SearchBar from "./SearchBar";
import { FaHeart, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
        <div className="flex justify-between items-center p-4">
            <p className="font-bold text-lg">Trendy Stitch</p>
            <div className="flex items-center">
                <SearchBar />
                <ul className="flex gap-10">
                  <li><FaHeart className="h-6 w-6"/></li>
                  <li><IoBag className="h-6 w-6"/></li>
                  <li><FaUser className="h-6 w-6"/></li>
                </ul>
            </div>
        </div>
          <ul className="flex gap-20 justify-center m-3 text-xl font-medium">
            <li className="">
              <NavLink to="/men" >Men</NavLink>
            </li>
            <li className="">
              <NavLink to="/women" >Women</NavLink>
            </li>
            <li className="">
              <NavLink to="/kids" >Kids</NavLink>
            </li>
          </ul>
        <hr className="border-t-2" />
        </nav>
        
    );
};

export default Navbar;