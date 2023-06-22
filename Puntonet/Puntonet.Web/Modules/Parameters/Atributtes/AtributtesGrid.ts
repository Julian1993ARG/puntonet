import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { AtributtesColumns, AtributtesRow, AtributtesService } from '../../ServerTypes/Parameters';
import { AtributtesDialog } from './AtributtesDialog';

@Decorators.registerClass('Puntonet.Parameters.AtributtesGrid')
export class AtributtesGrid extends EntityGrid<AtributtesRow, any> {
    protected getColumnsKey() { return AtributtesColumns.columnsKey; }
    protected getDialogType() { return AtributtesDialog; }
    protected getRowDefinition() { return AtributtesRow; }
    protected getService() { return AtributtesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}