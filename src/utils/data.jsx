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


import BHB01 from '../assets/BHB011.png';
import BHB02 from '../assets/BHB022.png';
import BHB03 from '../assets/BHB033.png';

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
        icon: (size) => <Restaurant01Icon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#9351F2"
    },
    {
        title: "Educational Institutions",
        bg_color: "#E9FBEF",
        icon: (size) => <GraduationScrollIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
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
        icon: (size) => <Hospital02Icon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#377CF4"
    },
    {
        title: "Beauty, Salon, Wellness ",
        bg_color: "#FCECF4",
        icon: (size) => <SparklesIcon size={size} color={"#FFFFFF"} variant={"stroke"} />,
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
        icon: (size) => <Store01Icon size={size} color={"#FFFFFF"} variant={"stroke"} />,
        icon_bg: "#8D53F4"
    }

];


export const benefitsData = [
    {
        title: "Increase Reviews",
        description: "Encourage guests to leave positive reviews.",
        image: BHB01
    },
    {
        title: "Collect User Data",
        description: "Gather valuable customer <br/> information.",
        image: BHB02
    },
    {
        title: "Retarget",
        description: "Reach out to customers during off-peak times to boost business.",
        image: BHB03
    }
];

export const faqData = [
    {
      question: 'What are Smart QR Codes for reviews?',
      answer: 'Smart QR Codes for reviews are customized QR codes that redirect customers to review platforms or feedback forms, streamlining the process to collect insights and improve ratings.'
    },
    {
      question: 'Can you review the QR code and provide feedback?',
      answer: 'Yes, I can review the QR code and provide feedback. Please share the QR code with me.'
    },
    {
      question: 'Are Smart QR Codes customizable for branding?',
      answer: 'Yes, Smart QR Codes can be customized for branding. You can usually add your logo, change the colors, and customize the frame around the QR code.'
    },
    {
      question: 'Can QR Codes integrate with review platforms?',
      answer: 'Yes, QR Codes can integrate with review platforms. When a customer scans the QR code, they can be taken directly to the review platform to leave a review.'
    },
    {
      question: 'Are Smart QR Codes mobile-friendly?',
      answer: 'Yes, Smart QR Codes are designed to be mobile-friendly. When a customer scans the QR code with their smartphone, they will be taken to a mobile-optimized page.'
    }
  ];
  