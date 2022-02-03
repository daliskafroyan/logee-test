import { routes } from "@configs/routes";
import { ROLES } from "@utils/constants";
import IconLogo from "@components/elements/IconLogo";

export const navsArray = {
    [ROLES.TRANSPORT_ADMIN]: [
        {
            name: "Dashboard",
            to: routes.DASHBOARD(),
            icon: IconLogo,
        },
    ],
};
