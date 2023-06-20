import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonAtributtesForm {
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

            var w0 = StringEditor;

            initFormType(PersonAtributtesForm, [
                'Description', w0,
                'Value', w0
            ]);
        }
    }
}