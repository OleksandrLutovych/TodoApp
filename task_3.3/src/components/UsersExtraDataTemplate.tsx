import React from 'react';

interface IExtraDataProps {
    dataText: string,
}

const UsersExtraData = (props: IExtraDataProps) => {
    const {dataText} = props
    return (
        <div>
            <li>{dataText}</li>
        </div> 
    );
};

export default UsersExtraData;