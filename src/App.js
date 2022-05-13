import React from 'react';
import List from "./components/List/List";
import InputForm from "./components/InputForm/InputForm";
import {useDispatch} from "react-redux";
import {addTask} from "./redux/tasksSlice";

const App = () => {
    const dispatch = useDispatch()
    return (
        <>
            <InputForm
                placeholder='Add task'
                onEnter={(message) => dispatch(addTask(message))}
                style={{marginTop: '40px'}}
                withButton={true}
            />
            <InputForm placeholder='Search' onEnter={(message) => dispatch(addTask(message))} style={{marginTop: '10px'}}/>
            <List/>
        </>
    );
};

export default App;