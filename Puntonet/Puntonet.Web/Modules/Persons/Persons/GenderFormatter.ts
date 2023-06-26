import { Decorators } from "@serenity-is/corelib";
import { Formatter } from "@serenity-is/corelib/slick";
import { htmlEncode } from "@serenity-is/corelib/q";
import { FormatterContext } from "@serenity-is/sleekgrid";
import { AccesoriesRow } from "../../ServerTypes/Parameters";
import { PersonsRow } from "../../ServerTypes/Persons";

@Decorators.registerFormatter("Puntonet.Persons.Persons.GenderFormatter")
export class GenderFormatter implements Formatter {
    format(ctx: FormatterContext) {
        // ctx.value es un array de los ids de los accesorios
        // [1,5,8,4]
        console.log(ctx)
        let id = ctx.value as number;

        console.log("id",id)
        if (!id)
            return "There is an error";


        let icon = (id == 2) ? '<i class="fa fa-female text-danger"></i>' : '<i class="fa fa-male text-primary"></i>';

        return icon;
    }
}