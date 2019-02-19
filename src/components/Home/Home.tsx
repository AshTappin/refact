import * as React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';
import withStyles from '@material-ui/core/styles/withStyles';
import { inject, Observer } from 'mobx-react';

const styles = (theme: any) => ({
    root: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 600
    },
});

const Home = (props: any) => {
    return (
        <Observer>{() =>(
            <div>
                <Button
                    className='TakeQuizButton'
                    variant='contained'
                    color='primary'
                    onClick={() => {
                        props.quizStore.setQuizInProgress(true);
                        props.history.push('/question');

                    }}
                >Test your React Knowledge</Button>
            </div>)
        }
        </Observer>
    );
};

export default inject('quizStore')(withStyles(styles)(withRouter(Home)));
  