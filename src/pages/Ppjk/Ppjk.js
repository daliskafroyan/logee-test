import React, { useEffect, useState } from "react";
import styles from "./styles.scoped.css";
import { fetchData } from "../../actioncreator/action";
import { useDispatch, connect } from "react-redux";
import DataTable from "@components/elements/DataTable_V2";
import Button from "@components/elements/Button_V2/Button";
import Select from "logeeport-ui";
import Pagination from "@components/elements/Pagination";

function Ppjk(props) {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const inputPropSelectStateAccount = {
        placeholder: "Pilih Status Akun",
        name: "accounStatus",
    };
    const optionsStateAccount = [
        { text: "Aktif", value: "isActive=true" },
        { text: "Belum Aktif", value: "isActive=false" },
    ];

    const [url, setUrl] = useState(props.location.search.substring(1));

    const handleClose = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        dispatch(
            fetchData(
                "fetchUserList",
                "",
                props.location.search.substring(1),
                "UserApi"
            )
        );
    }, [props.location.search]);

    console.log("#debug props", props);

    const { isLoading, data, message } = props?.state?.ppjk;

    let formattedData;

    const formatDate = (d) => {
        const monthName = (mon) => {
            return [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ][mon];
        };

        const formattedDate = new Date(d);
        const date = formattedDate.getUTCDate();
        const month = monthName(formattedDate.getUTCMonth());
        const year = formattedDate.getUTCFullYear();
        const hour =
            formattedDate.getUTCHours() < 10
                ? `0${formattedDate.getUTCHours()}`
                : formattedDate.getUTCHours();
        const minutes =
            formattedDate.getUTCMinutes() < 10
                ? `0${formattedDate.getUTCMinutes()}`
                : formattedDate.getUTCMinutes();

        const fullFormattedDate = `${date} ${month} ${year} ${hour}:${minutes}`;

        return fullFormattedDate;
    };

    const formatRole = (role) => {
        const formattedRole = role.slice(5);
        return formattedRole.toUpperCase();
    };

    const statusBadge = (val) => {
        return (
            <Button
                size="small"
                onClick={() => handleEditAccount(val)}
                className={
                    val.isActive == "Aktif"
                        ? styles.greenBadge
                        : styles.redBadge
                }
            >
                {val.isActive}
            </Button>
        );
    };

    const editAccount = (val) => {
        return (
            <Button size="small" onClick={() => handleEditAccount(val)}>
                Edit
            </Button>
        );
    };

    const handleEditAccount = (val) => {
        console.log("#debug handle edit account", val);
        setOpenModal(true);
    };

    // Metadata Table
    const column = [
        { heading: "Email PPJK", value: "email" },
        { heading: "No. HP PPJK", value: "phone" },
        { heading: "Nama Akun PPJK", value: "companyName" },
        { heading: "Terdaftar", value: "createdAt" },
        { heading: "TPK", value: "roles" },
        { heading: "Akun PPJK", value: "name" },
        { heading: "Status", value: (val) => statusBadge(val) },
        { heading: "", value: (val) => editAccount(val) },
    ];

    if (data?.fetchUserList?.data) {
        formattedData = data.fetchUserList.data.map((element) => {
            return {
                email: element.email,
                phone: element.phone,
                companyName: element.companyName ? element.companyName : "-",
                createdAt: element.createdAt
                    ? formatDate(element.createdAt)
                    : "-",
                roles: formatRole(element.roles[0]),
                name: element.name ? element.name : "-",
                isActive: element.isActive ? "Aktif" : "Belum Aktif",
            };
        });
    }
    // end of metadata table

    return (
        <div className={styles.dashboardBackground}>
            {/* <Select
                inputProps={inputPropSelectStateAccount}
                options={optionsStateAccount}
                onChange={(val) => {
                    console.log("#debug val option", val);
                }}
            /> */}
            <DataTable column={column} data={formattedData}></DataTable>
            <Pagination
                meta={{
                    page: data?.fetchUserList?.meta?.page,
                    totalPage: data?.fetchUserList?.meta?.totalPage,
                }}
                location={{ pathname: "/akun-ppjk" }}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    state,
});

export default connect(mapStateToProps, null)(Ppjk);
