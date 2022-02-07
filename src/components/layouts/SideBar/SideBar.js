import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavSider from "../NavSider";
import ExpandSider from "../ExpandSider";
import styles from "./styles.scoped.css";
import IconUser from "@components/elements/IconUser";
import { Typography } from "logeeport-ui";
import { getUserData } from "@utils/storage";

const SideBar = (props) => {
    const data = props.data;
    const userData = getUserData();

    return (
        <div className={styles.sideBarContainer}>
            <div className={styles.menuHeader}>
                <div className={styles.iconWrapper}>
                    <IconUser width={24} />
                </div>

                <div>
                    <div className={styles.nameHeader}>{userData.name}</div>
                    <Typography variant="h5">{userData.email}</Typography>
                </div>
            </div>
            <nav className={styles.nav}>
                {data.map((nav, idx) => (
                    <Fragment key={idx}>
                        {nav.children ? (
                            <ExpandSider data={nav} index={idx} />
                        ) : (
                            <NavSider data={nav} key={idx} />
                        )}
                    </Fragment>
                ))}
            </nav>
        </div>
    );
};

SideBar.defaultProps = {
    data: [],
};

SideBar.propTypes = {
    data: PropTypes.array,
};

export default SideBar;
