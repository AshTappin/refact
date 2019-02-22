import React from 'react';
import {atomDark} from "react-syntax-highlighter/dist/styles/prism";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import * as PropTypes from "prop-types";
import {Paper} from "@material-ui/core";
import {useStyles} from "./CodeDisplay.styles";

export const CodeDisplay = (props) => {

    const styleClasses = useStyles();
    return (
        <Paper className={styleClasses.root} elevation={1}>
            Look at the following code...
            <SyntaxHighlighter language='jsx' showLineNumbers
                               style={atomDark}>{props.code} </SyntaxHighlighter>
        </Paper>
    );
};

CodeDisplay.propTypes = {
    code: PropTypes.string.isRequired
};
