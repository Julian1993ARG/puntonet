import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface AtributtesForm {
    Description: StringEditor;
}

export class AtributtesForm extends PrefixedContext {
    static formKey = 'Parameters.Atributtes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!AtributtesForm.init)  {
            AtributtesForm.init = true;

            var w0 = StringEditor;

            initFormType(AtributtesForm, [
                'Description', w0
            ]);
        }
    }
}