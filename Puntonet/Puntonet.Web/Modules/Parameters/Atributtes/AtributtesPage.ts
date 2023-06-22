import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { AtributtesGrid } from './AtributtesGrid';

$(function () {
    initFullHeightGridPage(new AtributtesGrid($('#GridDiv')).element)
})