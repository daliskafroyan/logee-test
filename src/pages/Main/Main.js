import React, { useEffect, useState } from "react";
import styles from "./styles.scoped.css";
import HeadingPort from "@components/elements/HeadingPort";
import { fetchData } from "../../actioncreator/action";
import { useDispatch } from "react-redux";
import { MainContext } from "./context";
import { Typography } from "logeeport-ui";

export default function Main() {
    const [mainInit, setMainInit] = useState("dashboard page");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData("fetchUserList", "", "limit=10", "MainApi"));
    }, []);
    return (
        <MainContext.Provider
            value={{
                mainInit,
                setMainInit,
            }}
        >
            <div className={styles.root}>
                <HeadingPort title={mainInit} />
                <Typography variant="h1">Selamat datang di Logee</Typography>
            </div>
        </MainContext.Provider>
    );
}
