import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
        height: 90,
        backgroundColor: "#fff",
        border: "1px solid #f1f1f1",
        padding: "4px 0"
    },
});

const PrettoSlider = withStyles({
    root: {
        color: "#27d3b4",
        "&$vertical": {
            padding: "0 9px"
        }
    },
    vertical: {},
    thumb: {
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

export default function Volume(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <PrettoSlider
                    orientation="vertical"
                    aria-labelledby="vertical-slider"
                    {...props}
                />
            </div>
        </>
    );
}
