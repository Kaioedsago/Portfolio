import { styled } from "@mui/material";
import React from "react";

const StyledButton = ({ children }) => {

    const StyledButtonComponent = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    return (
        <>
            <StyledButtonComponent>
                {children}
            </StyledButtonComponent>
        </>
    );
};

export default StyledButton;
