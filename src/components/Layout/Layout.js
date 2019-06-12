import React from 'react';

const Layout = (props) => (
    <div>
        <div>Navigation</div>
        <main className="content">{props.children}</main>
    </div>
)
export default Layout;