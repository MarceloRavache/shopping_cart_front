import React,{useState,useEffect} from 'react';
import axios from 'axios';

import NavbarAdmin from '../../components/Navbar/NavbarMenu';
import ListAdminPage from '../../components/PageAdmin/List/List';

const ListPage = ()=>{
    const state = []
    useEffect(async ()=>{
        state = await axios.get('http://localhost:3001/admin/page/list-page')
        .then(res=>{
            return res.data.pages;
        })
    });
    return (
        <div>
            <NavbarAdmin/>
            <ListAdminPage listpage={state}/>
        </div>
    );
}

export default ListPage;