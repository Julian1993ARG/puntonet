import { LookupEditor, IntegerEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonClothesForm {
    IdPerson: LookupEditor;
    IdClothe: IntegerEditor;
}

export class PersonClothesForm extends PrefixedContext {
    static formKey = 'Parameters.PersonClothes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonClothesForm.init)  {
            PersonClothesForm.init = true;

            var w0 = LookupEditor;
            var w1 = IntegerEditor;

            initFormType(PersonClothesForm, [
                'IdPerson', w0,
                'IdClothe', w1
            ]);
        }
    }
}
