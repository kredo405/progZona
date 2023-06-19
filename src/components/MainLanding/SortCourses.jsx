import SortInput from "./SortInput.jsx";
import SearchInput from "../SearchInput.jsx";

const SortCourses = () => {
    const menuItemsВirections = ["Фронтенд", "Бекенд", "DevOps"];
    const menuItemsLevels = ["С нуля", "С опытом"];
    return (
        <>
            <div className="flex justify-center border-b-2 border-slate-700 border-solid pb-5">
                <SearchInput />
                <SortInput
                    placeholder="Направление"
                    menuItems={menuItemsВirections}
                    needSeach={true}
                />
                <SortInput
                    placeholder="Уровень"
                    menuItems={menuItemsLevels}
                    needSeach={false}
                />
            </div>
        </>
    );
};

export default SortCourses;
