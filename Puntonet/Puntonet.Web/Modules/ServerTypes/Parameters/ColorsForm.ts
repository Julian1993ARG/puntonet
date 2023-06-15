import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface ColorsForm {
    Description: StringEditor;
}

export class ColorsForm extends PrefixedContext {
    static formKey = 'Parameters.Colors';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ColorsForm.init)  {
            ColorsForm.init = true;

            var w0 = StringEditor;

            initFormType(ColorsForm, [
                'Description', w0
            ]);
        }
    }
}
