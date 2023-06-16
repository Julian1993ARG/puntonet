import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PersonAtributtesForm, PersonAtributtesRow, PersonAtributtesService } from '../../ServerTypes/Persons';
import { GridEditorDialog } from "@serenity-is/extensions";
import { toId } from '@serenity-is/corelib/q';

@Decorators.registerClass('Puntonet.Persons.PersonAtributtesEditDialog')
export class PersonAtributtesEditDialog extends EntityDialog<PersonAtributtesRow, any> {
    protected getFormKey() { return PersonAtributtesForm.formKey; }
    protected getIdProperty() { return PersonAtributtesRow.idProperty; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }
    protected getService() { return PersonAtributtesService.baseUrl; }
    protected getDeletePermission() { return PersonAtributtesRow.deletePermission; }
    protected getInsertPermission() { return PersonAtributtesRow.insertPermission; }
    protected getUpdatePermission() { return PersonAtributtesRow.updatePermission; }

    protected form = new PersonAtributtesForm(this.idPrefix);
}