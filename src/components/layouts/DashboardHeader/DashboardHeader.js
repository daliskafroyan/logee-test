import { useCookie, format } from "logeeport-ui";
import React, { useContext } from "react";
import { PageBaseContext } from "../PageBase/Context";
import styles from "./styles.scoped.css";
import { useLocation } from "react-router-dom";
import { navsArray } from "@components/layouts/DashboardMenu/constants";
import { ROLES } from "@utils/constants";

const DashboardHeader = () => {
    const { setShowMenu } = useContext(PageBaseContext);

    const location = useLocation();
    const titleHeader = navsArray[ROLES.TRANSPORT_ADMIN].filter((nav) => {
        return nav.to == location.pathname;
    });

    return (
        <header>
            <div className={styles.logo}>{titleHeader[0].name}</div>
            <div
                className={styles.userAkses}
                onClick={() => setShowMenu((prev) => !prev)}
            >
                <div className={styles.userAksesIcon}>
                    <img src="/assets/profile_circle.png" />
                </div>
                <div className={styles.userAksesName}>
                    {useCookie.getCookie("userLogin")
                        ? format.stringToJson(useCookie.getCookie("userLogin"))
                              .company.name
                        : null}
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
