const { UserIcon } = require("@heroicons/react/outline");
const { Link } = require("react-router-dom");
const { Icon } = require("../../common/Icon");

function ProfileIcon() {
   return (
      <Link to="/profile">
         <Icon icon={<UserIcon />} />
      </Link>
   );
}

export default ProfileIcon;
