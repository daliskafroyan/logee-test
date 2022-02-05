import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavSider from "../NavSider";
import ExpandSider from "../ExpandSider";
import styles from "./styles.scoped.css";
import IconUser from "@components/elements/IconUser";
import { Typography } from "logeeport-ui";

const SideBar = ({ data }) => {
    return (
        <div className={styles.sideBarContainer}>
            <div className={styles.menuHeader}>
                <IconUser width={24} />
                <div>
                    <Typography variant="h5">Port Web Admin</Typography>
                    <Typography variant="h5">port-admin@mail.com</Typography>
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
