import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { AtributesColumns, AtributesRow, AtributesService } from '../../ServerTypes/Parameters';
import { AtributesDialog } from './AtributesDialog';

@Decorators.registerClass()
export class AtributesGrid extends EntityGrid<AtributesRow, any> {
    protected getColumnsKey() { return AtributesColumns.columnsKey; }
    protected getDialogType() { return AtributesDialog; }
    protected getIdProperty() { return AtributesRow.idProperty; }
    protected getInsertPermission() { return AtributesRow.insertPermission; }
    protected getLocalTextPrefix() { return AtributesRow.localTextPrefix; }
    protected getService() { return AtributesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}