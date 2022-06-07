import { Link } from "react-router-dom";

function MenuItem({ title, to, icon, active }) {
    return (
        <li
            className={`flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 ${
                active
                    ? "bg-light-green-200 text-coco shadow-md"
                    : "text-lightGray hover:bg-light-green-200"
            } `}
        >
            <Link to={to} className="flex items-center gap-2 ">
                <span className="rounded">{icon}</span>
                <span>{title}</span>
            </Link>
        </li>
    );
}

export default MenuItem;
