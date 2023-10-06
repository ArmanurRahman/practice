import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em",
        },
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em",
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em",
        },
    },
    tabContainer: {
        marginLeft: "auto",
    },

    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },

    appBar: {
        zIndex: theme.zIndex.modal + 1,
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <AppBar color='primary' className={classes.appBar}>
                <Toolbar disableGutters>
                    <img
                        className={classes.logo}
                        src={"/assets/logo.svg"}
                        alt='Sky Development'
                    />
                </Toolbar>
            </AppBar>

            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
};

export default Header;
