import React from "react";
import Image from "next/image";
import {cn} from "@/utilities/cn";
import Icons, {IconNames} from "@/utilities/icons";

interface MiniProps {
    width?: number;
    height?: number;
    icon: IconNames;
    className?: string;
    onClick?: () => void;
}

const Mini: React.FC<MiniProps> = ({
                                       width,
                                       height,
                                       icon,
                                       onClick,
                                       className,

                                   }) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "transition-all ease-out duration-200",
                className,
            )}
        >
            <Image
                src={Icons[icon]}
                alt={icon}
                width={width}
                height={height}
            />
        </div>
    );
};

export default Mini;