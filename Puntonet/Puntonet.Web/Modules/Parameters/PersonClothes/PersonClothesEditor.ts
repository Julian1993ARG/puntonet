import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { PersonClothesColumns, PersonClothesRow } from "../../ServerTypes/Parameters";
import { PersonClothesEditorDialog } from "./PersonClothesEditorDialog";

@Decorators.registerEditor("Puntonet.Persons.PersonAtributtes.PersonClothesEditor")
export class PersonClothesEditor extends GridEditorBase<PersonClothesRow> {
    protected getColumnsKey() { return PersonClothesColumns.columnsKey; }
    protected getDialogType() { return PersonClothesEditorDialog; }
    protected getLocalTextPrefix() { return PersonClothesRow.localTextPrefix; }


    constructor(container: JQuery) {
        super(container);
    }




}