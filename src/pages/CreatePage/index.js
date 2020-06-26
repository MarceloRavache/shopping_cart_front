import React from 'react';
import axios from 'axios';

import AdminPageCreate from '../../components/PageAdmin/Create/Create';
import NavbarAdmin from '../../components/Navbar/NavbarMenu';

const CreatePage = ()=>{

    return(
        <div>
            <NavbarAdmin/>
            <AdminPageCreate/>
        </div>
    );
}

export default CreatePage;