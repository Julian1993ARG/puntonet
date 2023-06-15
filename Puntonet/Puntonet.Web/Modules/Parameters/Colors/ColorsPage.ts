import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { ColorsGrid } from './ColorsGrid';

$(function() {
    initFullHeightGridPage(new ColorsGrid($('#GridDiv')).element);
});