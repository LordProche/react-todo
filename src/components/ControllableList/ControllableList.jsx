import React from 'react';
import ControlForm from "../ControlForm/ControlForm";
import FilteredList from "../FilteredList/FilteredList";

const ControllableList = () => {
    return (
        <>
            <ControlForm/>
            <FilteredList/>
        </>
    );
};

export default ControllableList;