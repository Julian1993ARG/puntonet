import { StringEditor, LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { ColorsDialog } from "@/Parameters/Colors/ColorsDialog";
import { initFormType } from "@serenity-is/corelib/q";

export interface ClothesForm {
    Description: StringEditor;
    IdColor: LookupEditor;
}

export class ClothesForm extends PrefixedContext {
    static formKey = 'Parameters.Clothes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ClothesForm.init)  {
            ClothesForm.init = true;

            var w0 = StringEditor;
            var w1 = LookupEditor;

            initFormType(ClothesForm, [
                'Description', w0,
                'IdColor', w1
            ]);
        }
    }
}

[ColorsDialog]; // referenced types