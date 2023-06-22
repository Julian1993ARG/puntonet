import { Decorators } from "@serenity-is/corelib";
import { GridEditorDialog } from "@serenity-is/extensions";
import { PersonAtributtesForm, PersonAtributtesRow } from "../../ServerTypes/Parameters";

@Decorators.registerClass("Puntonet.Parameters.PersonAtributtes.PersonAtributtesDialogEditor")
export class PersonAtributtesDialogEditor extends GridEditorDialog<PersonAtributtesRow> {
    protected getFormKey() { return PersonAtributtesForm.formKey; }
    //protected getNameProperty() { return PersonClothesRow.nameProperty; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }

    protected form: PersonAtributtesForm = new PersonAtributtesForm(this.idPrefix);

    constructor() {
        super();
    }
}