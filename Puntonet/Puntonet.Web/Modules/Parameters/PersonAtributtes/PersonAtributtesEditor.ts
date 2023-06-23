import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { AtributtesRow, PersonAtributtesColumns, PersonAtributtesRow} from "../../ServerTypes/Parameters";
import { PersonAtributtesDialogEditor } from "./PersonAtributtesDialogEditor";
import { alert, toId, tryFirst } from "@serenity-is/corelib/q";

@Decorators.registerEditor("Puntonet.Persons.PersonAtributtes.PersonAtributtesEditor")
export class PersonAtributtesEditor extends GridEditorBase<PersonAtributtesRow> {
    protected getColumnsKey() { return PersonAtributtesColumns.columnsKey; }
    protected getDialogType() { return PersonAtributtesDialogEditor; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }


    constructor(container: JQuery) {
        super(container);
    }


    protected validateEntity(row: PersonAtributtesRow, id: number) {
        if (!super.validateEntity(row, id))
            return false;

        row.IdAtributteDescription = AtributtesRow.getLookup()
            .itemById[row.IdAtributte].Description;

        /*   var ElementoUsado = tryFirst(this.view.getItems(), x => x.IdClothe === row.IdClothe);*/

        let elemento: number = this.view.getItems().findIndex(x => x.IdAtributte == row.IdAtributte)


        if (elemento !== -1) {
            alert('This Atributte it is in the list already');
            return false;
        }

        return true;
    }



}