import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { AtributesGrid } from './AtributesGrid';

$(function() {
    initFullHeightGridPage(new AtributesGrid($('#GridDiv')).element);
});