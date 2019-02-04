import * as React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

class Question extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <div className='QuestionText'>What can you use to pass data into a component?</div>
                <List className='AnswerChoices'>
                    <ListItem className='AnswerChoice' button>
                        <ListItemText primary='state'/>
                    </ListItem>
                    <ListItem className='AnswerChoice' button>
                        <ListItemText primary='props'/>
                    </ListItem>
                    <ListItem className='AnswerChoice' button>
                        <ListItemText primary='history'/>
                    </ListItem>
                    <ListItem className='AnswerChoice' button>
                        <ListItemText primary='none of the above'/>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default Question;
  