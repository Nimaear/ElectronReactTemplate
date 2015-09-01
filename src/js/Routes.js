'use babel';

import React from 'react';
import Router, {Route, Redirect, DefaultRoute}  from 'react-router';

import Master from 'Master';
import Test from 'Test';
import Test2 from 'Test2';
import Test3 from 'Test3';

let AppRoutes = (
<Route name='root' path='/' handler={Master}>
  <Route name='test' path='/test' handler={Test} />
  <Route name='test2' path='/test2' handler={Test2}>
    <Route name='test3' handler={Test3} />
  </Route>
</Route>
);

export default AppRoutes;
