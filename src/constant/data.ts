import { MenuType } from "@/shared/entityType/menu";
import { SVGIcon } from "@/template/components/svg.template";

export const menuData: MenuType = [
    {
        name: "Home",
        level: 0,
        path: "home",
        icon: SVGIcon.OrderMenuIcon,
    },
    {
        name: "About Us",
        level: 0,
        path: "about",
        icon: SVGIcon.OrderMenuIcon,
    },
    {
        name: "Released Product",
        level: 0,
        path: "released",
        icon: SVGIcon.OrderMenuIcon,
    },
    {
        name: "Mission * Value",
        level: 0,
        path: "",
        icon: SVGIcon.OrderMenuIcon,
    },
    {
        name: "Insight",
        level: 0,
        path: "",
        icon: SVGIcon.OrderMenuIcon,
    },
    {
        name: "Our Teaser website",
        level: 0,
        path: "",
        icon: SVGIcon.OrderMenuIcon,
    },
    {
        name: "Contact",
        level: 0,
        path: "",
        icon: SVGIcon.OrderMenuIcon,
    },
    {
        name: "X",
        level: 0,
        path: "x",
        icon: SVGIcon.OrderMenuIcon,
        data: [
            {
                name: "Y",
                level: 1,
                path: "y",
                icon: SVGIcon.OrderMenuIcon,
                data: [
                    {
                        name: "Z",
                        level: 2,
                        path: "z",
                        icon: SVGIcon.OrderMenuIcon,
                        data: [
                            {
                                name: "A",
                                level: 1,
                                path: "a",
                                icon: SVGIcon.OrderMenuIcon,
                            },
                            {
                                name: "B",
                                level: 1,
                                path: "b",
                                icon: SVGIcon.OrderMenuIcon,
                            },
                            {
                                name: "C",
                                level: 1,
                                path: "c",
                                icon: SVGIcon.OrderMenuIcon,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Business Package",
        level: 0,
        path: "",
        icon: SVGIcon.OrderMenuIcon,
        data: [
            {
                name: "Basic",
                level: 1,
                path: "basic",
                icon: SVGIcon.OrderMenuIcon,
            },
            {
                name: "Advance",
                level: 1,
                path: "advance",
                icon: SVGIcon.OrderMenuIcon,
            },
            {
                name: "WordPress",
                icon: SVGIcon.OrderMenuIcon,
                level: 1,
                path: "wordpress",
            },
            {
                name: "Business To Business",
                level: 1,
                path: "b2b",
                icon: SVGIcon.OrderMenuIcon,
            },
            {
                name: "Business To Company",
                level: 1,
                path: "b2c",
                icon: SVGIcon.OrderMenuIcon,
            },
        ],
    },
    {
        name: "Service",
        level: 0,
        path: "",
        icon: SVGIcon.OrderMenuIcon,
        data: [
            {
                name: "E-Commercial",
                level: 1,
                path: "e-commercial",
                icon: SVGIcon.OrderMenuIcon,
            },
            {
                name: "Promotion",
                level: 1,
                path: "promotion",
                icon: SVGIcon.OrderMenuIcon,
            },
            {
                name: "Event",
                level: 1,
                path: "event",
                icon: SVGIcon.OrderMenuIcon,
            },
            {
                name: "Internal Business",
                level: 1,
                path: "internal-business",
                icon: SVGIcon.OrderMenuIcon,
            },
            {
                name: "Enterprise",
                level: 1,
                path: "enterprise",
                icon: SVGIcon.OrderMenuIcon,
            },
        ],
    },
];
