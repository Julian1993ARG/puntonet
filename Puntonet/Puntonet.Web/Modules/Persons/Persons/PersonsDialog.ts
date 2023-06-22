import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PersonsForm, PersonsRow, PersonsService } from '../../ServerTypes/Persons';

@Decorators.registerClass()
@Decorators.panel()
export class PersonsDialog extends EntityDialog<PersonsRow, any> {
    protected getFormKey() { return PersonsForm.formKey; }
    protected getIdProperty() { return PersonsRow.idProperty; }
    protected getLocalTextPrefix() { return PersonsRow.localTextPrefix; }
    protected getNameProperty() { return PersonsRow.nameProperty; }
    protected getService() { return PersonsService.baseUrl; }
    protected getDeletePermission() { return PersonsRow.deletePermission; }
    protected getInsertPermission() { return PersonsRow.insertPermission; }
    protected getUpdatePermission() { return PersonsRow.updatePermission; }

    protected form = new PersonsForm(this.idPrefix);

}