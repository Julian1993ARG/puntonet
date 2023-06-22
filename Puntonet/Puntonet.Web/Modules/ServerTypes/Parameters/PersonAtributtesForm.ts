import { StringEditor, IntegerEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonAtributtesForm {
    Value: StringEditor;
    IdPerson: IntegerEditor;
    IdAtributte: IntegerEditor;
}

export class PersonAtributtesForm extends PrefixedContext {
    static formKey = 'Parameters.PersonAtributtes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonAtributtesForm.init)  {
            PersonAtributtesForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;

            initFormType(PersonAtributtesForm, [
                'Value', w0,
                'IdPerson', w1,
                'IdAtributte', w1
            ]);
        }
    }
}