import axios from 'axios';
import {AppToastService} from '@my-app/components/app-toast';

export class ViaCep{
    cep: '';
    logradouro: '';
    complemento: '';
    bairro: '';
    localidade: '';
    uf: '';
    ibge: '';
    gia: '';
    ddd: '';
    siafi: '';
}

export class ViaCepService {

    private static instance:ViaCepService;

    public get(cep:string):Promise<ViaCep>{
        return axios.get<ViaCep, any>(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => resposta.data)
            .catch((error) => {
                AppToastService.sendWarnMessage(`Não foi possível buscar o cep: ${cep}`);
                throw error;
            });
    }

    public static getIntance(){
        if(this.instance == null){
            this.instance = new ViaCepService();
        }

        return this.instance;
    }

}
