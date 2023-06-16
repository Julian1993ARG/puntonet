import { Decorators } from "@serenity-is/corelib";
import { GridEditorDialog } from "@serenity-is/extensions";
import { PersonAtributtesForm, PersonAtributtesRow } from "../../ServerTypes/Persons";

@Decorators.registerClass("Puntonet.Persons.PersonAtributtes.PersonAtributtesEditDialog")
export class PersonAtributtesEditDialog extends GridEditorDialog<PersonAtributtesRow> {
    protected getFormKey() { return PersonAtributtesForm.formKey; }
    protected getNameProperty() { return PersonAtributtesRow.nameProperty; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }

    protected form: PersonAtributtesForm = new PersonAtributtesForm(this.idPrefix);

    constructor() {
        super();
    }
}