import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { AccesoriesForm, AccesoriesRow, AccesoriesService } from '../../ServerTypes/Parameters';

@Decorators.registerClass("Puntonet.Parameters.AccesoriesDialog")
export class AccesoriesDialog extends EntityDialog<AccesoriesRow, any> {
    protected getFormKey() { return AccesoriesForm.formKey; }
    protected getIdProperty() { return AccesoriesRow.idProperty; }
    protected getLocalTextPrefix() { return AccesoriesRow.localTextPrefix; }
    protected getNameProperty() { return AccesoriesRow.nameProperty; }
    protected getService() { return AccesoriesService.baseUrl; }
    protected getDeletePermission() { return AccesoriesRow.deletePermission; }
    protected getInsertPermission() { return AccesoriesRow.insertPermission; }
    protected getUpdatePermission() { return AccesoriesRow.updatePermission; }

    protected form = new AccesoriesForm(this.idPrefix);

}