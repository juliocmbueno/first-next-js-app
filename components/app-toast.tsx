import React, {RefObject} from "react";
import {Toast} from 'primereact/toast';
import {ReplaySubject} from 'rxjs';
import {Subscription} from 'rxjs';

export default class AppToast extends React.Component<any, any>{

    refToast:RefObject<Toast>;
    sendMessageSubscription:Subscription;

    constructor(props){
        super(props);
        this.refToast = React.createRef<Toast>();
    }

    componentDidMount(): void {
        this.sendMessageSubscription = AppToastService.sendMessageSubscribe((message) => {
            message.life = 3000;

            this.refToast.current.clear();
            this.refToast.current.show(message);
        });
    }

    componentWillUnmount(): void {
        this.sendMessageSubscription.unsubscribe();
    }

    render() {
        return (
            <Toast ref={this.refToast}/>
        );
    }
}

export class AppToastService{

    private static instante:AppToastService;

    private toastMessageObservable:ReplaySubject<any> = new ReplaySubject<any>(0);

    private static getInstance():AppToastService{
        if(this.instante == null){
            this.instante = new AppToastService();
        }

        return this.instante;
    }

    public static sendInfoMessage(message:string):void{
        this.getInstance().toastMessageObservable.next({severity:'info', detail:message});
    }

    public static sendWarnMessage(message:string):void{
        this.getInstance().toastMessageObservable.next({severity:'warn', detail:message});
    }

    public static sendSuccessMessage(message:string):void{
        this.getInstance().toastMessageObservable.next({severity:'success', detail:message});
    }

    public static sendErrorMessage(message:string):void{
        this.getInstance().toastMessageObservable.next({severity:'error', detail:message});
    }

    public static sendMessageSubscribe(callBack:Function):Subscription{
        return this.getInstance().toastMessageObservable.subscribe((mensagem) => callBack(mensagem));
    }
}

