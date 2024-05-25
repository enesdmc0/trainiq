"use client";
import {useEffect} from "react";
import {motion, stagger, useAnimate} from "framer-motion";
import {cn} from "@/utilities/cn";
import {IconNames} from "@/utilities/icons";
import Mini from "@/components/mini";


export const TextGenerateEffect = ({
                                       words,
                                       className,
    icon
                                   }: {
    words: string;
    className?: string;
    icon: IconNames;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (


        <h2 className={cn(" text-xs sm:text-sm border-b border-color-3 text-color-3 mb-2 tracking-wider flex items-center gap-2", className)}>
            <Mini icon={icon} width={20} height={20} />
            {renderWords()}
        </h2>


    );
};
