import icon1 from "@/public/svg/icon1.svg"
import icon2 from "@/public/svg/icon2.svg"
import icon3 from "@/public/svg/icon3.svg"
import icon4 from "@/public/svg/icon4.svg"
import icon5 from "@/public/svg/icon5.svg"

const Icons = {
    icon1,
    icon2,
    icon3,
    icon4,
    icon5
}

export type IconNames =
    | "icon1"
    | "icon2"
    | "icon3"
    | "icon4"
    | "icon5"

export default Icons as Record<IconNames, string>