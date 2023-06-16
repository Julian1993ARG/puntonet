import { Decorators, EntityGrid } from "@serenity-is/corelib";
import { PersonAtributtesRow, PersonAtributtesService } from "../../ServerTypes/Persons";
import { PersonAtributtesDialog } from "../PersonAtributtes/PersonAtributtesDialog";

@Decorators.registerEditor("Puntonet.Persons.Persons.PersonAtributteGrid")
export class PersonAtributteGrid extends EntityGrid<PersonAtributtesRow, any>
{
    protected getColumnsKey() { return "Persons.PersonAtributtes"; }
    protected getIdProperty() { return PersonAtributtesRow.idProperty; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }
    protected getService() { return PersonAtributtesService.baseUrl; }
    protected getDeletePermission() { return PersonAtributtesRow.deletePermission; }
    protected getInsertPermission() { return PersonAtributtesRow.insertPermission; }
    protected getUpdatePermission() { return PersonAtributtesRow.updatePermission; }
    protected getDialogType() { return PersonAtributtesDialog }
    protected getAddButtonCaption() { return "Add"; }

    constructor(container: JQuery) {
        super(container);
    }

    //protected getButtons() {
    //    return null;
    //}

    protected getInitialTitle() {
        return null;
    }

    protected usePager() {
        return false;
    }

    protected getGridCanLoad() {
        return this.personID != null;
    }

    private _personID: number;

    get personID() {
        return this._personID;
    }

    set personID(value: number) {
        if (this._personID != value) {
            this._personID = value;
            this.setEquality(PersonAtributtesRow.Fields.IdPerson, value);
            this.refresh();
            console.log("personID", value);
        }
    }
}