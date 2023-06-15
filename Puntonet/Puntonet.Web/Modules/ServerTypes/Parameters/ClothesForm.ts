import { StringEditor, IntegerEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface ClothesForm {
    Description: StringEditor;
    IdColor: IntegerEditor;
}

export class ClothesForm extends PrefixedContext {
    static formKey = 'Parameters.Clothes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ClothesForm.init)  {
            ClothesForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;

            initFormType(ClothesForm, [
                'Description', w0,
                'IdColor', w1
            ]);
        }
    }
}
