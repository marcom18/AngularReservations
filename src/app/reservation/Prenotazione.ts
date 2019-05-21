export class Prenotazione{
    public get Note(): String {
        return this._Note;
    }
    public set Note(value: String) {
        this._Note = value;
    }
    public get Luci(): boolean {
        return this._Luci;
    }
    public set Luci(value: boolean) {
        this._Luci = value;
    }
    public get Pagato(): boolean {
        return this._Pagato;
    }
    public set Pagato(value: boolean) {
        this._Pagato = value;
    }
    public get CostoP(): number {
        return this._CostoP;
    }
    public set CostoP(value: number) {
        this._CostoP = value;
    }
    public get DataEff(): Date {
        return this._DataEff;
    }
    public set DataEff(value: Date) {
        this._DataEff = value;
    }
    public get DataP_1(): Date {
        return this._DataP;
    }
    public set DataP_1(value: Date) {
        this._DataP = value;
    }
    public get DataP(): Date {
        return this._DataP;
    }
    public set DataP(value: Date) {
        this._DataP = value;
    }
    public get NomeCampo(): String {
        return this._NomeCampo;
    }
    public set NomeCampo(value: String) {
        this._NomeCampo = value;
    }
    public get Lezione(): boolean {
        return this._Lezione;
    }
    public set Lezione(value: boolean) {
        this._Lezione = value;
    }
    public get CodCliente(): String {
        return this._CodCliente;
    }
    public set CodCliente(value: String) {
        this._CodCliente = value;
    }
    public get CodPrenotazione(): String {
        return this._CodPrenotazione;
    }
    public set CodPrenotazione(value: String) {
        this._CodPrenotazione = value;
    }

    constructor(private _CodPrenotazione: String, private _CodCliente: String, private _Lezione: boolean, private _NomeCampo: String, private _DataP: Date, private _DataEff: Date, private _CostoP: number, private _Pagato: boolean, private _Luci: boolean, private _Note: String){
        
    }

 


   
}