import { Link } from "react-router-dom";

import { FaGithub, FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaDiscord />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
];

// eslint-disable-next-line react/prop-types
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link to={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
