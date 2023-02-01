import {
    MenuItem,
    MenuType,
} from "@/shared/entityType/menu";
import Link from "next/link";
import * as React from "react";

export interface IMenuTemplateProps {
    data: MenuType;
}

export function renderMenuItem(itemData: Array<MenuItem>, itemlevel: number) {
    return (
        <ul className={`lv-${itemlevel}`}>
            {itemData.map((item: MenuItem, index) => {
                return (
                    <li key={`${index}-${item}`}>
                        <Link href={`/${item.path}`}>{item.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
}

export function callbackMenuItem(
    menuData: { name: string; data: Array<any> } | MenuType, itemLevel?: number
) {
    if (Array.isArray(menuData)) {
        return menuData.map((item: any, index) => {
            return (
                <li key={`${index}-${item.name}`}>
                    <label htmlFor={`_${item.name}`}>{item.name}</label>
                    {item.data &&
                        (item.data.filter((item: any) => item.data).length === 0
                            ? renderMenuItem(item.data, item.level)
                            : callbackMenuItem(item, item.level))}
                </li>
            );
        });
    } else {
        return menuData.data.map((item: any, index) => {
            return (
                <ul className={`lv-${itemLevel}`}>
                    <li key={`${index}-${item.name}`}>
                        <label htmlFor={`_${item.name}`}>{item.name}</label>
                        {item.data &&
                            (item.data.filter((item: any) => item.data).length === 0
                                ? renderMenuItem(item.data, item.level)
                                : callbackMenuItem(item, item.level))}
                    </li>
                </ul>
            );
        });
    }
}

export default function MenuTemplate(props: IMenuTemplateProps) {
    const { data } = props;
    return (
        <div>
            <ul className="lv-root">{callbackMenuItem(data)}</ul>
        </div>
    );
}
