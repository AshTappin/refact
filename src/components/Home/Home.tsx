import * as React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';
import withStyles from '@material-ui/core/styles/withStyles';

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
        <div>

                <p>Test your react knowledge!</p>

                <Button
                    className='TakeQuizButton'
                    variant='contained'
                    color='primary'
                    style={{alignSelf: 'flex-end'}}
                    onClick={() => props.history.push('/question')}
                >Take Test</Button>
        </div>
    );
}

export default withStyles(styles)(withRouter(Home));
  