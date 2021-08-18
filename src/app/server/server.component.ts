import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'

})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offline';
    serverName = 'Test Server';

    getServerStatus(){
        return this.serverStatus;
    }
    allowNewServer = false;
    serverCreationStatus = 'Server was not created';
    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 7000)
    }

    onServerCreated(){
        this.serverCreationStatus = 'Server created';
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}