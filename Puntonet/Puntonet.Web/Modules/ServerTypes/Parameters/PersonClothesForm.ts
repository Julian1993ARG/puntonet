import { LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonClothesForm {
    IdClothe: LookupEditor;
}

export class PersonClothesForm extends PrefixedContext {
    static formKey = 'Parameters.PersonClothes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonClothesForm.init)  {
            PersonClothesForm.init = true;

            var w0 = LookupEditor;

            initFormType(PersonClothesForm, [
                'IdClothe', w0
            ]);
        }
    }
}