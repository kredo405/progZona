import { Outlet } from "react-router-dom";
import VerticalMenu from "../components/PersonalArea/VerticalMenu";
import HorizontalMenu from "../components/PersonalArea/HorizontalMenu";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShow } from "../store/slices/verticalMenuSlice";

const PersonalArea = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col">
            <VerticalMenu />
            <div className="relative z-0">
                <HorizontalMenu />
            </div>
            <div
                className="w-full px-2  md:pl-32 py-10"
                onClick={() => dispatch(setShow(false))}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default PersonalArea;
