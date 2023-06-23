import { Decorators } from "@serenity-is/corelib";
import { Formatter } from "@serenity-is/corelib/slick";
import { htmlEncode } from "@serenity-is/corelib/q";
import { FormatterContext } from "@serenity-is/sleekgrid";
import { AccesoriesRow } from "../../ServerTypes/Parameters";

@Decorators.registerFormatter("Puntonet.Persons.Persons.AccesoriesListFormatter")
export class AccesoriesListFormatter implements Formatter {
    format(ctx: FormatterContext) {
        // ctx.value es un array de los ids de los accesorios
        // [1,5,8,4]
        let idList = ctx.value as number[];
        if (!idList || !idList.length)
            return "";

        let byId = AccesoriesRow.getLookup().itemById;


        return idList.map(x => {
            let g = byId[x];
            if (!g)
                return x.toString();

            return htmlEncode(g.Description);
        }).join(", ");
    }
}