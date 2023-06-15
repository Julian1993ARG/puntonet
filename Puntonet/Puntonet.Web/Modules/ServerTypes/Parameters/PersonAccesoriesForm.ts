import { IntegerEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonAccesoriesForm {
    IdPerson: IntegerEditor;
    IdAccesory: IntegerEditor;
}

export class PersonAccesoriesForm extends PrefixedContext {
    static formKey = 'Parameters.PersonAccesories';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonAccesoriesForm.init)  {
            PersonAccesoriesForm.init = true;

            var w0 = IntegerEditor;

            initFormType(PersonAccesoriesForm, [
                'IdPerson', w0,
                'IdAccesory', w0
            ]);
        }
    }
}
