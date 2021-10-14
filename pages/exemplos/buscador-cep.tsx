import React from "react";
import {MenuNavegacaoService, Menus} from '@my-app/components/menu-navegacao';
import {ViaCep, ViaCepService} from '@my-app/components/via-cep/via-cep';

export default class BuscadorCep extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {viacep: new ViaCep()};
    }

    onViaCEPModelChange(event, model):void{
        const viacep = this.state.viacep;
        viacep[model] = event.target.value;
        this.setState({viacep});
    }

    onSubmit(event):void{
        const cep = this.state.viacep.cep;
        if(cep && cep.length > 0){
            ViaCepService.getIntance().get(this.state.viacep.cep)
                .then(viacep => this.setState({viacep}))
                .catch(() => this.clearStateViacep());

        } else {
            this.clearStateViacep();

        }

        event.preventDefault();
    }

    clearStateViacep(){
        const viacep = this.state.viacep;
        Object.keys(viacep).forEach(key => {
            if(key != 'cep'){
                viacep[key] = '';
            }
        });
        this.setState({viacep});
    }

    componentDidMount(): void {
        MenuNavegacaoService.getInstante().setMenuAtivo(Menus.buscadorCep);
    }

    render() {
        return (
            <form onSubmit={(event) => this.onSubmit(event)}>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="mb-3">
                            <label htmlFor="input-cep" className="form-label">CEP</label>
                            <input type="text" className="form-control" id="input-cep" value={this.state.viacep.cep} onChange={(event) => this.onViaCEPModelChange(event, 'cep')}/>
                        </div>
                    </div>
                    <div className="col-auto align-self-end">
                        <div className="mb-3">
                            <button type="submit" className="btn btn-sm btn-primary">Buscar CEP</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <label htmlFor="input-logradouro" className="form-label">Logradouro</label>
                            <input disabled type="text" className="form-control" id="input-logradouro" value={this.state.viacep.logradouro}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <label htmlFor="input-complemento" className="form-label">Complemento</label>
                            <input disabled type="text" className="form-control" id="input-complemento" value={this.state.viacep.complemento}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <label htmlFor="input-bairro" className="form-label">Bairro</label>
                            <input disabled type="text" className="form-control" id="input-bairro" value={this.state.viacep.bairro}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <label htmlFor="input-localidade" className="form-label">Localidade</label>
                            <input disabled type="text" className="form-control" id="input-localidade" value={this.state.viacep.localidade}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <label htmlFor="input-uf" className="form-label">UF</label>
                            <input disabled type="text" className="form-control" id="input-uf" value={this.state.viacep.uf}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <label htmlFor="input-ibge" className="form-label">IBGE</label>
                            <input disabled type="text" className="form-control" id="input-ibge" value={this.state.viacep.ibge}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <label htmlFor="input-gia" className="form-label">GIA</label>
                            <input disabled type="text" className="form-control" id="input-gia" value={this.state.viacep.gia}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <label htmlFor="input-ddd" className="form-label">DDD</label>
                            <input disabled type="text" className="form-control" id="input-ddd" value={this.state.viacep.ddd}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <label htmlFor="input-siafi" className="form-label">SIAFI</label>
                            <input disabled type="text" className="form-control" id="input-siafi" value={this.state.viacep.siafi}/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
 }