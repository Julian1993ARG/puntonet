import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PersonAccesoriesForm, PersonAccesoriesRow, PersonAccesoriesService } from '../../ServerTypes/Parameters';

@Decorators.registerClass()
export class PersonAccesoriesDialog extends EntityDialog<PersonAccesoriesRow, any> {
    protected getFormKey() { return PersonAccesoriesForm.formKey; }
    protected getIdProperty() { return PersonAccesoriesRow.idProperty; }
    protected getLocalTextPrefix() { return PersonAccesoriesRow.localTextPrefix; }
    protected getService() { return PersonAccesoriesService.baseUrl; }
    protected getDeletePermission() { return PersonAccesoriesRow.deletePermission; }
    protected getInsertPermission() { return PersonAccesoriesRow.insertPermission; }
    protected getUpdatePermission() { return PersonAccesoriesRow.updatePermission; }

    protected form = new PersonAccesoriesForm(this.idPrefix);

}