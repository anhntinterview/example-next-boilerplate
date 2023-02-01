import { menuData } from "@/constant/data";
import MenuTemplate from "@/template/components/menu.template";
import * as React from "react";

export interface IMyHomeProps {}

export default function MyHome(props: IMyHomeProps) {
    return (
        <div>
            <h1>Hi! We're home now!</h1>
            <MenuTemplate data={menuData} />
        </div>
    );
}
