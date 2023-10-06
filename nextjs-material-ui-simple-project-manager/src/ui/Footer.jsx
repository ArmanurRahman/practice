import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative",
    },
    footerAdorment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em",
        },
        [theme.breakpoints.down("md")]: {
            width: "15em",
        },
    },
}));

const Footer = (props) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <img
                alt='footer'
                src={"/assets/FooterAdornment.svg"}
                className={classes.footerAdorment}
            />
        </footer>
    );
};

export default Footer;
