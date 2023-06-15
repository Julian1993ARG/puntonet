import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { AtributesForm, AtributesRow, AtributesService } from '../../ServerTypes/Parameters';

@Decorators.registerClass('Puntonet.Parameters.AtributesDialog')
export class AtributesDialog extends EntityDialog<AtributesRow, any> {
    protected getFormKey() { return AtributesForm.formKey; }
    protected getRowDefinition() { return AtributesRow; }
    protected getService() { return AtributesService.baseUrl; }

    protected form = new AtributesForm(this.idPrefix);
}