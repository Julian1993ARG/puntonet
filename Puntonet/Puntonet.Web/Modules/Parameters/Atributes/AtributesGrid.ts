import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { AtributesColumns, AtributesRow, AtributesService } from '../../ServerTypes/Parameters';
import { AtributesDialog } from './AtributesDialog';

@Decorators.registerClass('Puntonet.Parameters.AtributesGrid')
export class AtributesGrid extends EntityGrid<AtributesRow, any> {
    protected getColumnsKey() { return AtributesColumns.columnsKey; }
    protected getDialogType() { return AtributesDialog; }
    protected getRowDefinition() { return AtributesRow; }
    protected getService() { return AtributesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}