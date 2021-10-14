import React from 'react';
import {MenuNavegacaoService, Menus} from '@my-app/components/menu-navegacao';
import {withRouter} from 'next/router';

class LinkComParametroName extends React.Component<any, any>{

    constructor(props){
        super(props);
    }

    componentDidMount(): void {
        MenuNavegacaoService.getInstante().setMenuAtivo(Menus.linkComParametro);
    }

    render() {
        return (
            <div>
                Parâmetro do link: {this.props.router.query.name}
            </div>
        );
    }

}

export default withRouter(LinkComParametroName);