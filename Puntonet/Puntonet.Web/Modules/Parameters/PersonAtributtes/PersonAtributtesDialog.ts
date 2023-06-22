import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PersonAtributtesForm, PersonAtributtesRow, PersonAtributtesService } from '../../ServerTypes/Parameters';

@Decorators.registerClass('Puntonet.Parameters.PersonAtributtesDialog')
export class PersonAtributtesDialog extends EntityDialog<PersonAtributtesRow, any> {
    protected getFormKey() { return PersonAtributtesForm.formKey; }
    protected getRowDefinition() { return PersonAtributtesRow; }
    protected getService() { return PersonAtributtesService.baseUrl; }

    protected form = new PersonAtributtesForm(this.idPrefix);
}