import React from 'react';
import {Button} from 'react-bootstrap';

const ButtonDelete = ({id})=>{
    const onDelete = (e)=>{
        e.preventDefault();
        alert(id);
    }
    return (
        <div className="buttondelete">
            <Button variant="danger" onClick={onDelete}>Delete</Button>
        </div>
    )
}

export default ButtonDelete;