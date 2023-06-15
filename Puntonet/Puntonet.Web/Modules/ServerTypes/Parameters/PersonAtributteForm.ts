import { IntegerEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonAtributteForm {
    IdPerson: IntegerEditor;
    IdAtribute: IntegerEditor;
}

export class PersonAtributteForm extends PrefixedContext {
    static formKey = 'Parameters.PersonAtributte';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonAtributteForm.init)  {
            PersonAtributteForm.init = true;

            var w0 = IntegerEditor;

            initFormType(PersonAtributteForm, [
                'IdPerson', w0,
                'IdAtribute', w0
            ]);
        }
    }
}