import React from 'react';
import {MenuNavegacaoService, Menus} from '@my-app/components/menu-navegacao';

export default class ExemploState extends React.Component<any,any>{

    time:any;

    constructor(props){
        super(props);
        this.state = {data: new Date()};
    }

    componentDidMount(): void {
        this.time = setInterval(() => this.setState({data: new Date()}), 1000);
        MenuNavegacaoService.getInstante().setMenuAtivo(Menus.exemploState);
    }

    componentWillUnmount(): void {
        clearInterval(this.time);
    }

    render() {
        return (
            <div>
                Hora atual: {this.state.data.toLocaleTimeString()}
            </div>
        );
    }
}
