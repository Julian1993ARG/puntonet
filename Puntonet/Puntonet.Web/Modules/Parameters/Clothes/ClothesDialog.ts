import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { ClothesForm, ClothesRow, ClothesService } from '../../ServerTypes/Parameters';

@Decorators.registerClass()
export class ClothesDialog extends EntityDialog<ClothesRow, any> {
    protected getFormKey() { return ClothesForm.formKey; }
    protected getIdProperty() { return ClothesRow.idProperty; }
    protected getLocalTextPrefix() { return ClothesRow.localTextPrefix; }
    protected getNameProperty() { return ClothesRow.nameProperty; }
    protected getService() { return ClothesService.baseUrl; }
    protected getDeletePermission() { return ClothesRow.deletePermission; }
    protected getInsertPermission() { return ClothesRow.insertPermission; }
    protected getUpdatePermission() { return ClothesRow.updatePermission; }

    protected form = new ClothesForm(this.idPrefix);

}