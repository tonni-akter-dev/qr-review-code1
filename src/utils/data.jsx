import {
    ChartLineData02Icon,
    CrownIcon,
    GraduationScrollIcon,
    Hospital02Icon,
    LaptopPhoneSyncIcon,
    QrCodeIcon,
    RepairIcon,
    Restaurant01Icon,
    Settings02Icon,
    Shield01Icon,
    SparklesIcon,
    StarIcon,
    Store01Icon,
    TravelBagIcon,
    WhatsappIcon,

} from "hugeicons-react";

export const superchargeData = [
    {
        title: "Smart QR Codes",
        description: "Custom branded QR codes that seamlessly connect customers to your review system.",
        bg_color: "#F7F0FF",
        icon: (size) => <QrCodeIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#644AE9"
    },
    {
        title: "WhatsApp Integration",
        description: "Automated chat bot that guides customers through the review process naturally.",
        bg_color: "#E7FAEE",
        icon: (size) => <WhatsappIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#1BB960"
    },
    {
        title: "Review Management",
        description: "Intelligent system that routes positive reviews to Google and feedback privately.",
        bg_color: "#FEFCE7",
        icon: (size) => <StarIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#F3C212"
    },
    {
        title: "Reward System",
        description: "Automatically distribute discount codes to customers who leave positive reviews.",
        bg_color: "#EAF3FF",
        icon: (size) => <CrownIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#367BF3"
    },
    {
        title: "Analytics Dashboard",
        description: "Track review statistics, customer sentiment, and reward program performance.",
        bg_color: "#FDF0F7",
        icon: (size) => <ChartLineData02Icon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#E73576"
    },
    {
        title: "Feedback Protection",
        description: "Private channel for constructive feedback to protect your online reputation.",
        bg_color: "#EFFDFA",
        icon: (size) => <Shield01Icon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#12B2A8"
    },
    {
        title: "Custom Workflows",
        description: "Tailor the review process and rewards to match your business needs.",
        bg_color: "#FFF5EA",
        icon: (size) => <Settings02Icon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#F36319"
    },
    {
        title: "Multi-Platform",
        description: "Works with Google Reviews, TripAdvisor, Yelp, and other major platforms.",
        bg_color: "#F0EBFE",
        icon: (size) => <LaptopPhoneSyncIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#8E4DF2"
    }

];

export const buisnessData = [
    {
        title: "Restaurants & Cafés",
        bg_color: "#F6EFFE",
        icon: (size) => <Restaurant01Icon  size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#9351F2"
    },
    {
        title: "Educational Institutions",
        bg_color: "#E9FBEF",
        icon: (size) => <GraduationScrollIcon  size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#12B2A8"
    },
    {
        title: "Hotels & Resorts",
        bg_color: "#FDFAE2",
        icon: (size) => <StarIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#F4C313"
    },
    {
        title: "Medical Services",
        bg_color: "#EBF3FF",
        icon: (size) => <Hospital02Icon  size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#377CF4"
    },
    {
        title: "Beauty, Salon, Wellness ",
        bg_color: "#FCECF4",
        icon: (size) => <SparklesIcon  size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#E73576"
    },
    {
        title: "Travel & Tourism Agencies",
        bg_color: "#E5F9F6",
        icon: (size) => <TravelBagIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#1DBC60"
    },
    {
        title: "IT & Repair Services",
        bg_color: "#FEF3E8",
        icon: (size) => <RepairIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#F46619"
    },
    {
        title: "Retail Stores",
        bg_color: "#E6F2FF",
        icon: (size) => <Store01Icon  size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#8D53F4"
    }

];
