import { FaFacebook, FaGithub, FaGitlab } from 'react-icons/fa';
import Link from 'next/link';
const socials = [
    {
        icon: <FaGitlab />,
        path: "https://gitlab.com/nhatkhanhcm2001",
    },
    {
        icon: <FaGithub />,
        path: "https://github.com/nhatkhanh2001",
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/nhatkhanh6357",
    },
]
const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} target='_blank' href={item.path} className={iconStyles}
                    >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
}

export default Social;