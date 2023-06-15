import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PersonClothesForm, PersonClothesRow, PersonClothesService } from '../../ServerTypes/Parameters';

@Decorators.registerClass()
export class PersonClothesDialog extends EntityDialog<PersonClothesRow, any> {
    protected getFormKey() { return PersonClothesForm.formKey; }
    protected getIdProperty() { return PersonClothesRow.idProperty; }
    protected getLocalTextPrefix() { return PersonClothesRow.localTextPrefix; }
    protected getService() { return PersonClothesService.baseUrl; }
    protected getDeletePermission() { return PersonClothesRow.deletePermission; }
    protected getInsertPermission() { return PersonClothesRow.insertPermission; }
    protected getUpdatePermission() { return PersonClothesRow.updatePermission; }

    protected form = new PersonClothesForm(this.idPrefix);

}