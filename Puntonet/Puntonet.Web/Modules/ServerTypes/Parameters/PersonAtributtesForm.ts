import { LookupEditor, StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonAtributtesForm {
    IdAtributte: LookupEditor;
    Value: StringEditor;
}

export class PersonAtributtesForm extends PrefixedContext {
    static formKey = 'Parameters.PersonAtributtes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonAtributtesForm.init)  {
            PersonAtributtesForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;

            initFormType(PersonAtributtesForm, [
                'IdAtributte', w0,
                'Value', w1
            ]);
        }
    }
}