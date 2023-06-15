import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PersonAtributteForm, PersonAtributteRow, PersonAtributteService } from '../../ServerTypes/Parameters';

@Decorators.registerClass('Puntonet.Parameters.PersonAtributteDialog')
export class PersonAtributteDialog extends EntityDialog<PersonAtributteRow, any> {
    protected getFormKey() { return PersonAtributteForm.formKey; }
    protected getRowDefinition() { return PersonAtributteRow; }
    protected getService() { return PersonAtributteService.baseUrl; }

    protected form = new PersonAtributteForm(this.idPrefix);
}