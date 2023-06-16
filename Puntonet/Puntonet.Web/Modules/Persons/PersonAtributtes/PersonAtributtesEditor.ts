import { Decorators } from "@serenity-is/corelib";
import { toId } from "@serenity-is/corelib/q";
import { GridEditorBase } from "@serenity-is/extensions";
import { PersonAtributteColumn, PersonAtributtesRow } from "../../ServerTypes/Persons";
import { PersonAtributtesDialog } from "./PersonAtributtesDialog";

@Decorators.registerEditor("Puntonet.Persons.PersonAtributtes.PersonAtributtesEditor")
export class PersonAtributtesEditor extends GridEditorBase<PersonAtributtesRow> {
    protected getColumnsKey() { return PersonAtributteColumn.columnsKey; }
    protected getDialogType() { return PersonAtributtesDialog; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }

    constructor(container: JQuery) {
        super(container);
    }

    //validateEntity(row, id) {
    //    row.ProductID = toId(row.ProductID);

    //    var sameProduct = tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
    //    if (sameProduct && this.id(sameProduct) !== id) {
    //        alertDialog('This product is already in order details!');
    //        return false;
    //    }

    //    id ??= row[this.getIdProperty()];

    //    ProductRow.getLookupAsync().then(lookup => {
    //        var item = this.view?.getItemById?.(id);
    //        if (item) {
    //            item.ProductName = lookup.itemById[row.ProductID].ProductName;
    //            this.view.updateItem(id, item);
    //        }
    //    });

    //    row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
    //    return true;
    //}

   
}