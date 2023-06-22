import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { PersonAtributtesColumns, PersonAtributtesRow} from "../../ServerTypes/Parameters";
import { PersonAtributtesDialogEditor } from "./PersonAtributtesDialogEditor";

@Decorators.registerEditor("Puntonet.Persons.PersonAtributtes.PersonAtributtesEditor")
export class PersonAtributtesEditor extends GridEditorBase<PersonAtributtesRow> {
    protected getColumnsKey() { return PersonAtributtesColumns.columnsKey; }
    protected getDialogType() { return PersonAtributtesDialogEditor; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }


    constructor(container: JQuery) {
        super(container);
    }




}