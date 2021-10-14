import React from 'react'
import {MenuNavegacaoService, Menus} from '@my-app/components/menu-navegacao';

export default class Home extends React.Component<any, any> {

    componentDidMount(): void {
        MenuNavegacaoService.getInstante().setMenuAtivo(Menus.home);
    }

    render() {
        return (
            <div>Hello word!!!</div>
        );
    }
}
