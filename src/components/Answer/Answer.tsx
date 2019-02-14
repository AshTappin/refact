import React from 'react';
import {ListItem, ListItemText, Radio} from "@material-ui/core";
import {Answer} from "../../Interfaces/Answer";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

interface AnswerOptionPropTypes {
    answer : Answer;
    disabled: boolean;
    checked: boolean;
    onSelect: () => void;
}

const AnswerOption = (props: AnswerOptionPropTypes) => {

    const {answer, disabled, checked, onSelect} = props;
    return (
        <ListItem key={answer.name} className='AnswerChoice RightAnswer' button
                  disabled={disabled} onClick={onSelect}>
            <ListItemText primary={answer.name} style={{whiteSpace: 'pre-wrap'}}/>
            <ListItemSecondaryAction>
                <Radio
                    disabled={disabled}
                    onChange={onSelect}
                    checked={checked}/>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default AnswerOption;
  