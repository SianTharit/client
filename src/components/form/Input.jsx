import { Icon } from "../common/Icon";
export function Input({
    placeholder,
    type,
    name,
    value,
    onChange,
    icon,
    color,
    rounded,
}) {
    return (
        <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Icon icon={icon} />
            </span>
            <input
                className={`placeholder:italic placeholder:text-slate-400 block bg-${color} w-full border border-hidden rounded-${rounded} py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-none sm:text-sm`}
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}
