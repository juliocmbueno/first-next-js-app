import React from 'react';
import MenuNavegacao from '@my-app/components/menu-navegacao';
import AppToast from '@my-app/components/app-toast';

class Layout extends React.Component<any, any>{

    render() {
        return (
            <div className="container">
                <AppToast/>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <MenuNavegacao/>
                    </div>
                    <div className="col-12 col-md-9">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;