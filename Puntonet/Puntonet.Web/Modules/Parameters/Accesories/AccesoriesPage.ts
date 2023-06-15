import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { AccesoriesGrid } from './AccesoriesGrid';

$(function() {
    initFullHeightGridPage(new AccesoriesGrid($('#GridDiv')).element);
});