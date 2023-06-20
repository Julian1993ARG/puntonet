import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PersonAtributtesForm, PersonAtributtesRow, PersonAtributtesService } from '../../ServerTypes/Persons';

@Decorators.registerClass('Puntonet.Persons.PersonAtributtesEditDialog')
export class PersonAtributtesEditDialog extends EntityDialog<PersonAtributtesRow, any> {
    protected getFormKey() { return PersonAtributtesForm.formKey; }
    protected getIdProperty() { return PersonAtributtesRow.idProperty; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }
    protected getService() { return PersonAtributtesService.baseUrl; }

    protected form = new PersonAtributtesForm(this.idPrefix);
}