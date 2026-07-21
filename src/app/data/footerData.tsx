import type { footerProps, resourceProps } from "../types/footer";
import { FaThreads } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const footIcon: footerProps[] = [
    {
        id: 1,
        icons: <FaThreads />,
        url: "#"
    },
    {
        id: 2,
        icons: <SlSocialYoutube />,
        url: "#"
    },
    {
        id: 3,
        icons: <FaTiktok />,
        url: "#"
    },
    {
        id: 4,
        icons: <FaInstagram />,
        url: "#"
    }
]
export const resourceData: resourceProps[] = [
    {
        id: 1,
        title: "Resources",
        category: ["Blog", "Help Center", "API"]
    },
    {
        id: 2,
        title: "Use Cases",
        category: ["Customer Support", "Marketing", "Sales", "IT Support"]
    },
    {
        id: 3,
        title: "Company",
        category: ["About Us", "Careers", "Press", "Contact"]
    },
    {
        id: 4,
        title: "Pricing",
        category: ["Subscription", "Enterprise"]
    }
]