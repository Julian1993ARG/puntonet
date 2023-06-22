import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { AtributtesForm, AtributtesRow, AtributtesService } from '../../ServerTypes/Parameters';

@Decorators.registerClass('Puntonet.Parameters.AtributtesDialog')
export class AtributtesDialog extends EntityDialog<AtributtesRow, any> {
    protected getFormKey() { return AtributtesForm.formKey; }
    protected getRowDefinition() { return AtributtesRow; }
    protected getService() { return AtributtesService.baseUrl; }

    protected form = new AtributtesForm(this.idPrefix);
}