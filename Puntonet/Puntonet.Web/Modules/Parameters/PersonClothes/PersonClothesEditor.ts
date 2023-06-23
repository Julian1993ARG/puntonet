import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { ClothesRow, PersonClothesColumns, PersonClothesRow } from "../../ServerTypes/Parameters";
import { PersonClothesEditorDialog } from "./PersonClothesEditorDialog";
import { alert, toId, tryFirst } from "@serenity-is/corelib/q";

@Decorators.registerEditor("Puntonet.Persons.PersonAtributtes.PersonClothesEditor")
export class PersonClothesEditor extends GridEditorBase<PersonClothesRow> {
    protected getColumnsKey() { return PersonClothesColumns.columnsKey; }
    protected getDialogType() { return PersonClothesEditorDialog; }
    protected getLocalTextPrefix() { return PersonClothesRow.localTextPrefix; }


    constructor(container: JQuery) {
        super(container);
    }

    protected validateEntity(row: PersonClothesRow, id: number) {
        if (!super.validateEntity(row, id))
            return false;

        row.IdClotheDescription = ClothesRow.getLookup()
            .itemById[row.IdClothe].Description;
        //console.log("lookUp", ClothesRow.getLookup()
        //    .itemById[row.IdClothe].IdColor)

        row.IdColorDescription = ClothesRow.getLookup()
            .itemById[row.IdClothe].IdColorDescription

        console.log("row", ClothesRow.getLookup())

     /*   var ElementoUsado = tryFirst(this.view.getItems(), x => x.IdClothe === row.IdClothe);*/

        let elemento: number = this.view.getItems().findIndex(x => x.IdClothe == row.IdClothe)


        //console.log("row.IdClothe", row);
        //console.log("id", id);
        //console.log("this.view.getItems()", this.view.getItems())
        //console.log("lo que esta ne le if", elemento)


        if (elemento !== -1) {
            alert('This clothe it is in the list already');
            return false;
        }

        return true;
    }




}