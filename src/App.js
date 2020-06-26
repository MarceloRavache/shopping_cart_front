import React from 'react';

import PageAdminEdit from './components/PageAdmin/List/List';
import NavabarMenu from './components/Navbar/NavbarMenu';

const App = ()=> {

  const result = [{
    "_id":5,
    "title":"title_change",
    "slog":"slog_change",
    "content":"content_change"
  }]

  return (
    <div className="App">
      <NavabarMenu/>
      <PageAdminEdit listpage={result}/>
    </div>
  );
}

export default App;
