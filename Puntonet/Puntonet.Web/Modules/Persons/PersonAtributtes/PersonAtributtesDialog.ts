import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PersonAtributtesForm, PersonAtributtesRow, PersonAtributtesService } from '../../ServerTypes/Persons';
import { GridEditorDialog } from "@serenity-is/extensions";
import { toId } from '@serenity-is/corelib/q';

@Decorators.registerClass('Puntonet.Persons.PersonAtributtesDialog')
export class PersonAtributtesDialog extends EntityDialog<PersonAtributtesRow, any> {
    protected getFormKey() { return PersonAtributtesForm.formKey; }
    protected getLocalTextPrefix() { return PersonAtributtesRow.localTextPrefix; }
    protected getRowDefinition() { return PersonAtributtesRow; }
    protected getService() { return PersonAtributtesService.baseUrl; }

    protected form = new PersonAtributtesForm(this.idPrefix);

    protected afterLoadEntity() {
        super.afterLoadEntity();
        console.log(this.entityId)
        this.form.IdPerson.value = this.entityId;
    }

    //constructor() {
    //    super();

    //    this.form = new PersonAtributtesForm(this.idPrefix);

    //    this.form.IdPerson.changeSelect2(async e => {
    //        var personId = toId(this.form.IdPerson.value);
    //    })

    //}


}