export function Icon({ icon, func }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-lightGray cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={func}
        >
            {icon}
        </svg>
    );
}
