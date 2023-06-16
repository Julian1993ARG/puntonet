import { Decorators } from "@serenity-is/corelib";
import { toId } from "@serenity-is/corelib/q";
import { GridEditorBase } from "@serenity-is/extensions";
import { PersonAtributteColumn, PersonAtributtesRow } from "../../ServerTypes/Persons";
import { ClothesColumns, PersonClothesColumns, PersonClothesRow } from "../../ServerTypes/Parameters";
import { PersonClothesDialog } from "./PersonClothesDialog";

@Decorators.registerEditor("Puntonet.Persons.PersonAtributtes.PersonClothesEditor")
export class PersonClothesEditor extends GridEditorBase<PersonClothesRow> {
    protected getColumnsKey() { return PersonClothesColumns.columnsKey; }
    protected getDialogType() { return PersonClothesDialog; }
    protected getLocalTextPrefix() { return PersonClothesRow.localTextPrefix; }


    constructor(container: JQuery) {
        super(container);
    }




}