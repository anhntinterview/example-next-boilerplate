import React from "react";

interface MenuItemBase {
    name: string;
    level: number;
    path: string;
    icon: React.ClassType<{}, any, any>;
}

export interface MenuItem extends MenuItemBase {
    data?: Array<MenuItem>;
}

export type ItemLevel02Type = Array<{
    name: string;
    data?: Array<MenuItem>;
    level: number;
    path: string;
    icon: React.ClassType<{}, any, any>;
}>;

export type ItemLevel01Type = Array<{
    name: string;
    data?: ItemLevel02Type | Array<MenuItem>;
    level: number;
    path: string;
    icon: React.ClassType<{}, any, any>;
}>;

export type MenuType = Array<{
    name: string;
    data?: ItemLevel01Type | ItemLevel02Type | Array<MenuItem>;
    level: number;
    path: string;
    icon: React.ClassType<{}, any, any>;
}>;
