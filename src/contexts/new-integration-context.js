import React, { useState, createContext } from "react";

export const NewIntegrationContext = createContext();

export const NewIntegrationProvider = (props) => {
    const [page, setPage] = useState(0);
    const [labelInfo, setlabelInfo] = useState({
        sender: {
            name: "",
            street: "",
            city: "",
            state: "",
            zipCode: ""
        },
        recevier: {
            name: "",
            street: "",
            city: "",
            state: "",
            zipCode: ""
        },
        weight: "",
        shippingOption: "1"
    });

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };
    console.log(page, "page");
    const handleChange = (prop) => (event) => {
        setlabelInfo({ ...labelInfo, [prop]: event.target.value });
    };

    const setSenderInfo = (prop) => (event) => {
        setlabelInfo({
            ...labelInfo,
            sender: { ...labelInfo.sender, [prop]: event.target.value }
        });
    };
    const setRecevierInfo = (prop) => (event) => {
        setlabelInfo({
            ...labelInfo,
            recevier: { ...labelInfo.recevier, [prop]: event.target.value }
        });
    };
    const steps = [
        { title: "Install Github-App" },
        { title: "Select Organization" },
        { title: "Install Slack-App" },
        { title: "Success" }
    ];

    return (
        <NewIntegrationContext.Provider
            value={{
                page,
                steps,
                nextPage,
                prevPage,
                labelInfo,
                handleChange,
                setSenderInfo,
                setRecevierInfo
            }}
        >
            {props.children}
        </NewIntegrationContext.Provider>
    );
};
