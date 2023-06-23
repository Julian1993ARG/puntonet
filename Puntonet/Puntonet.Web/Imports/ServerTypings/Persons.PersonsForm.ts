namespace Puntonet.Persons {
    export interface PersonsForm {
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Identity: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        Photo: Serenity.StringEditor;
        AccesoriList: Serenity.LookupEditor;
        ClothesList: Serenity.Widget<any>;
        Atributtes: Serenity.Widget<any>;
    }

    export class PersonsForm extends Serenity.PrefixedContext {
        static formKey = 'Persons.Persons';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonsForm.init)  {
                PersonsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.Widget;

                Q.initFormType(PersonsForm, [
                    'Name', w0,
                    'Address', w0,
                    'Phone', w0,
                    'Identity', w0,
                    'Gender', w1,
                    'Photo', w0,
                    'AccesoriList', w2,
                    'ClothesList', w3,
                    'Atributtes', w3
                ]);
            }
        }
    }
}