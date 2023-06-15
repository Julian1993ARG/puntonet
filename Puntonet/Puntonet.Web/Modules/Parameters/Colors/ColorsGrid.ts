import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ColorsColumns, ColorsRow, ColorsService } from '../../ServerTypes/Parameters';
import { ColorsDialog } from './ColorsDialog';

@Decorators.registerClass()
export class ColorsGrid extends EntityGrid<ColorsRow, any> {
    protected getColumnsKey() { return ColorsColumns.columnsKey; }
    protected getDialogType() { return ColorsDialog; }
    protected getIdProperty() { return ColorsRow.idProperty; }
    protected getInsertPermission() { return ColorsRow.insertPermission; }
    protected getLocalTextPrefix() { return ColorsRow.localTextPrefix; }
    protected getService() { return ColorsService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}