import { NavLink } from "react-router-dom";

type HeaderButtonProps = {
  to: string,
  page: string
}

function HeaderButton({to, page}: HeaderButtonProps ) {
    return (
        <NavLink to={to} className={({isActive}) => 
            isActive ? "underline mr-18 text-white rounded-2xl hover:cursor-grab hover:bg-gray-300 mt-3 pr-2 pl-2 pb-1 pt-1 font-bold text-lg" : "text-lg mr-18 text-white rounded-2xl hover:cursor-grab hover:bg-gray-300 mt-3 pr-2 pl-2 pb-1 pt-1 font-normal"}>
            {page} 
        </NavLink>
    )
}

export default HeaderButton;
