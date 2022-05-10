export default class meucusco {
    constructor(
        private _nome: string,
        private _disposicao: number,
        private _latido: number,
        private _respeito: number,
        private _cansaco: number
    ) { }

    public get nome(): string {
        return this._nome;
    }
    public get disposicao(): number {
        return this._disposicao;
    }
    public get latido(): number {
        return this._latido;
    }
    public get respeito(): number {
        return this._respeito;
    }
    public get cansaco(): number {
        return this._cansaco;
    }

    status(): string {
        return (
            "Raça Chiuhuahua: \n" +
            "Nome: " + this.nome +
            ("\nDisposição: " + this.disposicao.toFixed()) +
            ("\nLatido: " + this.latido.toFixed()) +
            ("\nRespeito: " + this.respeito.toFixed()) +
            ("\nCansaço: " + this.cansaco.toFixed())
        );
    }

    public treinarFisico(hour: number): any {
        this._disposicao += hour * this.randomizar(3);
        this._cansaco += hour
        if (this._cansaco > 7) {
            this.dormindo
        }
    }

    public treinarLatido(): void {
        this._latido += this.randomizar(1);
        this._cansaco -= this.randomizar(1);
        if (this._cansaco > 7) {
            this.dormindo()
        }
    }

    public imporRespeito(): void {
        this._respeito = ((this._latido + this._disposicao) / 2)
        let respect = this._respeito
        if (respect > 10) {
            console.log("Casquinha já consegue intimidar um gato!")
        } else if (respect > 7) {
            console.log("Casquinha já consegue intimidar um coelho!")
        } else if (respect > 4) {
            console.log("Casquinha já consegue intimidar um esquilo!")
        } else {
            console.log("Casquinha não é um cão intimidador...")
        }
    }

    public descansar(hour: number): any {
        this._cansaco += -(hour * this.randomizar(10));
        if (this._cansaco < 0) {
            this._cansaco = 0
            console.log("Casquinha está super disposto!")
        }
    }

    public dormindo(): boolean {
        let statusCansaco = this._cansaco
        if (statusCansaco < 6) {
            console.log("O Casquinha está bem disposto. ")
        } else if (statusCansaco < 10) {
            console.log("Casquinha já quer ficar relaxando. ")
        } else if (statusCansaco < 15) {
            console.log("Põe ele pra descansar, tche! ")
        } else if (statusCansaco <20){
            console.log ("Você vai ser indiciado por crime contra os animais!")
        } else {
            console.log ("Chega de judiar do Casquinha!")
        }

        if (statusCansaco > 20) {
            return true
        } else {
            return false
        }
    }

    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
}