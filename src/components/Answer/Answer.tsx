import React, {useState} from 'react';
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

    const {answer, disabled} = props;
    const [checked, setChecked] = useState(false);

    return (
        <ListItem key={answer.name} className='AnswerChoice RightAnswer' button
                  disabled={disabled} onClick={() => setChecked(!checked)}>
            <ListItemText primary={answer.name} style={{whiteSpace: 'pre-wrap'}}/>
            <ListItemSecondaryAction>
                <Radio
                    disabled={disabled}
                    onChange={() => setChecked(!checked)}
                    checked={checked}/>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default AnswerOption;
  