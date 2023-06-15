namespace Puntonet.Parameters {
    export interface ColorsForm {
        Description: Serenity.StringEditor;
    }

    export class ColorsForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.Colors';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ColorsForm.init)  {
                ColorsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ColorsForm, [
                    'Description', w0
                ]);
            }
        }
    }
}
