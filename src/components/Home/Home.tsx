import * as React from 'react';
import {Button} from '@material-ui/core';
import {inject, Observer} from 'mobx-react';
import useRouter from "use-react-router/use-react-router";

const Home = (props: any) => {

    const {history} = useRouter();

    return (
        <Observer>{() =>(
            <div>
                <Button
                    className='TakeQuizButton'
                    variant='contained'
                    color='primary'
                    onClick={() => {
                        props.quizStore.setQuizInProgress(true);
                        history.push('/question');
                    }}
                >Test your React Knowledge</Button>
            </div>)
        }
        </Observer>
    );
};

export default inject('quizStore')(Home);
  