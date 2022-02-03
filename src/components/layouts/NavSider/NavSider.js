import React from "react";
import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
import styles from "./styles.scoped.css";
import IconUser from "@components/elements/IconUser";
import { Typography } from "logeeport-ui";

const NavSider = ({ data }) => {
    const { pathname } = useLocation();
    const isActive = data.to === pathname.toLowerCase();

    return (
        <>
            <div className={styles.menuHeader}>
                <IconUser width={24} />
                <div>
                    <Typography variant="h5">Port Web Admin</Typography>
                    <Typography variant="h5">port-admin@mail.com</Typography>
                </div>
            </div>
            <Link className={isActive ? styles.active : ""} to={data.to}>
                <section className={styles.menuSection}>
                    <data.icon />
                    {data.name}
                </section>
            </Link>
        </>
    );
};

NavSider.defaultProps = {
    data: {},
};

NavSider.propTypes = {
    data: PropTypes.object,
};
export default NavSider;
