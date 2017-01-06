class YourNicknameComponent{
    templateUrl = 'sqGame/directives/your-nickname.html';
    controller = YourNicknameCtrl;
    bindings = {
        setNick: '&'
    }
}

class YourNicknameCtrl{

    setNick:Function;

    constructor(private _http:any){
    }

    setNickname(nickname:string){
        this._http.post('http://localhost:8000/current-user', {nickname})
            .then((res:any) => {
                this.setNick({nick: res.data});
            })
    }
}

YourNicknameCtrl.$inject = ['$http'];

angular.module('app')
    .component('yourNickname', new YourNicknameComponent());
