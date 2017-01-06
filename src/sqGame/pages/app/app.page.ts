class AppPage {
    templateUrl = 'sqGame/pages/app/app.page.html';
    controller = AppCtrl;
}

class AppCtrl {

    highScores:any[] = [];
    nick:string;

    constructor(private _http: any) {
    }

    $onInit() {
        this._http.get('http://localhost:8000/high-scores')
            .then((res:any) => {
                this.highScores = res.data;
            });
    }

    setNickname(nick:string) {
        this.nick = nick;
    }

    saveResult(result:number) {
        this._http.post('http://localhost:8000/new-result', {
            lvl: result
        }).then((res:any) => {
            this.highScores = res.data;
        });
    }
}

AppCtrl.$inject = ['$http'];

angular.module('app')
    .component('app', new AppPage());
