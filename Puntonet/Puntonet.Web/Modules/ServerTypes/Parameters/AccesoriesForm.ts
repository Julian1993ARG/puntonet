import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface AccesoriesForm {
    Description: StringEditor;
}

export class AccesoriesForm extends PrefixedContext {
    static formKey = 'Parameters.Accesories';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!AccesoriesForm.init)  {
            AccesoriesForm.init = true;

            var w0 = StringEditor;

            initFormType(AccesoriesForm, [
                'Description', w0
            ]);
        }
    }
}
