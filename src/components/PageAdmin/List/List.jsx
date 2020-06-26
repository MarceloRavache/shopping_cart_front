import React from 'react';
import {Table} from 'react-bootstrap';
import ButtonDelete from './ButtonDelete';
import ButtonCreate from './ButtonCreate';


const PageAdminList = ({listpage})=>{

    const pageList = listpage.map((list) =>(
        <tr>
        <td>{list.title}</td>
        <td><ButtonDelete id={list._id}/></td>
        </tr>))
    return (<div className="pageadmin-list">
        <ButtonCreate/>
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

export default PageAdminList;