import React from 'react';
import {Subscription, ReplaySubject} from 'rxjs';
import Link from 'next/link';

export default class MenuNavegacao extends React.Component<any, any>{

    menuNavegacaoService:MenuNavegacaoService;
    menuAtivoSubscription:Subscription|undefined;

    constructor(props){
        super(props);
        this.state = {menuAtivo: Menus.home};
        this.menuNavegacaoService = MenuNavegacaoService.getInstante();
    }

    componentDidMount(): void {
        MenuNavegacaoService.getInstante().setMenuAtivo(Menus.exemploState);

        this.menuAtivoSubscription = this.menuNavegacaoService.getMenuAtivoObservable()
            .subscribe(menuAtivo => this.setState({menuAtivo}))
    }

    componentWillUnmount(): void {
        if(this.menuAtivoSubscription){
            this.menuAtivoSubscription.unsubscribe();
        }
    }

    getMenus(){
        return Object.keys(Menus).map(menuKey => {
            const menu = Menus[menuKey];
            return <Link key={menu.id} href={menu.path}>
                <a className={this.getClassName(menu)}>{menu.name}</a>
            </Link>
        });
    }

    getClassName(menu:any){
        return this.state.menuAtivo.id == menu.id ?
            'list-group-item list-group-item-action active' :
            'list-group-item list-group-item-action';
    }

    render() {
        return (
            <div className="list-group">
                {this.getMenus()}
            </div>
        );
    }
}

export class MenuNavegacaoService{

    private static instance:MenuNavegacaoService;
    private menuAtivoObservable:ReplaySubject<any> = new ReplaySubject<any>(1);

    public static getInstante():MenuNavegacaoService{
        if(this.instance == null){
            this.instance = new MenuNavegacaoService();
        }

        return this.instance;
    }

    public setMenuAtivo(menu:any):void{
        this.menuAtivoObservable.next(menu);
    }

    public getMenuAtivoObservable():ReplaySubject<any>{
        return this.menuAtivoObservable;
    }
}

export const Menus = {
    home:{
        id: 'inicio',
        name: 'Início',
        path: '/'
    },
    exemploState:{
        id: 'exemplo-state',
        name: 'Exemplo State',
        path: '/exemplos/exemplo-state'
    },
    linkComParametro:{
        id: 'link-com-parametro',
        name: 'Link com Parâmetro',
        path: '/exemplos/link-com-parametro/Júlio César',
    },
    buscadorCep:{
        id: 'buscadorCep',
        name: 'Buscador de CEP',
        path: '/exemplos/buscador-cep',
    }
};