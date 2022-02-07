import React, { useContext } from "react";
import SideBar from "@layouts/SideBar";
import { clearStorages } from "@utils/storage";
import { useCookie } from "logeeport-ui";
import { navsArray } from "./constants";
import styles from "./styles.scoped.css";
import { PageBaseContext } from "@layouts/PageBase/Context";
import { ROLES } from "@utils/constants";
import { routes } from "@configs/routes";
import IconLogo from "@components/elements/IconLogo";

const DashboardMenu = () => {
    const { showMenu } = useContext(PageBaseContext);
    const _handlerLogout = () => {
        clearStorages();
        useCookie.removeAllCookie();
        window.location.href = routes.LOGIN();
    };

    return (
        <aside
            className={
                [styles.aside, showMenu && styles.showMenu].join(" ") +
                "col-sm-12 col-md-3 col-lg-2"
            }
        >
            <div className={styles.navContainer}>
                <div className={styles.navSide}>
                    <div className={styles.navSideTop}>
                        <a className={styles.handleNavSideButton}>
                            <IconLogo fill={"#fff"} />
                        </a>
                    </div>
                    <div className={styles.navSideBottom}>
                        <a
                            className={styles.handleNavSideButton}
                            onClick={() => _handlerLogout()}
                        >
                            <img alt="logout" src="/assets/ic-exit.svg" />
                        </a>
                    </div>
                </div>
                <SideBar data={navsArray[ROLES.TRANSPORT_ADMIN]} />
            </div>
        </aside>
    );
};

export default DashboardMenu;
