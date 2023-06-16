import { Decorators } from "@serenity-is/corelib";
import { toId } from "@serenity-is/corelib/q";
import { GridEditorBase } from "@serenity-is/extensions";
import { PersonAtributteColumn, PersonAtributtesRow } from "../../ServerTypes/Persons";
import { PersonAtributtesDialog } from "./PersonAtributtesDialog";
import { PersonAtributtesEditDialog } from "./PersonAtributtesEditDialog";

@Decorators.registerEditor("Puntonet.Persons.PersonAtributtes.PersonAtributtesEditor")
export class PersonAtributtesEditor extends GridEditorBase<PersonAtributtesRow> {
    protected getColumnsKey() { return PersonAtributteColumn.columnsKey; }
    protected getDialogType() { return PersonAtributtesEditDialog; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }

    constructor(container: JQuery) {
        super(container);
    }
   
}