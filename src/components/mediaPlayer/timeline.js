import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
    },
    margin: {
        height: "5px",
    },
}));

const PrettoSlider = withStyles({
    root: {
        color: "#27d3b4"
    },
    thumb: {
        display: "none",
        height: 12,
        width: 12,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -3,
        marginLeft: -6,
        "&:focus,&:hover,&$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        height: 6,
        borderRadius: 4,
    },
    rail: {
        height: 6,
        borderRadius: 4,
    },
})(Slider);



export default function Timeline(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PrettoSlider {...props} />
        </div>
    );
}
