import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { AtributesForm, AtributesRow, AtributesService } from '../../ServerTypes/Parameters';

@Decorators.registerClass()
export class AtributesDialog extends EntityDialog<AtributesRow, any> {
    protected getFormKey() { return AtributesForm.formKey; }
    protected getIdProperty() { return AtributesRow.idProperty; }
    protected getLocalTextPrefix() { return AtributesRow.localTextPrefix; }
    protected getNameProperty() { return AtributesRow.nameProperty; }
    protected getService() { return AtributesService.baseUrl; }
    protected getDeletePermission() { return AtributesRow.deletePermission; }
    protected getInsertPermission() { return AtributesRow.insertPermission; }
    protected getUpdatePermission() { return AtributesRow.updatePermission; }

    protected form = new AtributesForm(this.idPrefix);

}