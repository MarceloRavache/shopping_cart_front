import React from 'react';
import {Table} from 'react-bootstrap';
import ButtonDelete from './ButtonDelete';

const ConteudoAdminList = ({listpage})=>{

    const pageList = listpage.map((list) =>(
        <tr>
        <td>{list.title}</td>
        <td><ButtonDelete id={list._id}/></td>
        </tr>))
    return (<div className="categoryadmin-list">
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Titulo</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {pageList}
            </tbody>
        </Table>
    </div>)
}

export default ConteudoAdminList;