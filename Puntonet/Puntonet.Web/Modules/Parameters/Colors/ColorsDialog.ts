import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { ColorsForm, ColorsRow, ColorsService } from '../../ServerTypes/Parameters';

@Decorators.registerClass("Puntonet.Parameters.ColorsDialog")
export class ColorsDialog extends EntityDialog<ColorsRow, any> {
    protected getFormKey() { return ColorsForm.formKey; }
    protected getIdProperty() { return ColorsRow.idProperty; }
    protected getLocalTextPrefix() { return ColorsRow.localTextPrefix; }
    protected getNameProperty() { return ColorsRow.nameProperty; }
    protected getService() { return ColorsService.baseUrl; }
    protected getDeletePermission() { return ColorsRow.deletePermission; }
    protected getInsertPermission() { return ColorsRow.insertPermission; }
    protected getUpdatePermission() { return ColorsRow.updatePermission; }

    protected form = new ColorsForm(this.idPrefix);

}