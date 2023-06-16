import { Decorators } from "@serenity-is/corelib";
import { GridEditorDialog } from "@serenity-is/extensions";
import { PersonClothesForm, PersonClothesRow } from "../../ServerTypes/Parameters";

@Decorators.registerClass("Puntonet.Persons.PersonAtributtes.PersonClothesEditorDialog")
export class PersonClothesEditorDialog extends GridEditorDialog<PersonClothesRow> {
    protected getFormKey() { return PersonClothesForm.formKey; }
    //protected getNameProperty() { return PersonClothesRow.nameProperty; }
    protected getLocalTextPrefix() { return PersonClothesRow.localTextPrefix; }

    protected form: PersonClothesForm = new PersonClothesForm(this.idPrefix);

    constructor() {
        super();
    }
}