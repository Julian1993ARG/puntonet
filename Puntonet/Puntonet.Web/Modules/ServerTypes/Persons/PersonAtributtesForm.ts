import { LookupEditor, StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonAtributtesForm {
    IdPerson: LookupEditor;
    Description: StringEditor;
    Value: StringEditor;
}

export class PersonAtributtesForm extends PrefixedContext {
    static formKey = 'Persons.PersonAtributtes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonAtributtesForm.init)  {
            PersonAtributtesForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;

            initFormType(PersonAtributtesForm, [
                'IdPerson', w0,
                'Description', w1,
                'Value', w1
            ]);
        }
    }
}