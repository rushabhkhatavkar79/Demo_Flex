
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";


/**
type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
 * 
 */
/**
 * 
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
-   alignItems?: FlexAlignType;
    alignSelf?: 'auto' | FlexAlignType;
    aspectRatio?: number;
    borderBottomWidth?: number;
    borderEndWidth?: number | string;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderStartWidth?: number | string;
    borderTopWidth?: number;
    borderWidth?: number;
    bottom?: number | string;
-   display?: 'none' | 'flex';
    end?: number | string;
-   flex?: number;
    flexBasis?: number | string;
-   flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flexGrow?: number;
-   flexShrink?: number;
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    height?: number | string;
-   justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    left?: number | string;
    margin?: number | string;
    marginBottom?: number | string;
    marginEnd?: number | string;
    marginHorizontal?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginStart?: number | string;
    marginTop?: number | string;
    marginVertical?: number | string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    overflow?: 'visible' | 'hidden' | 'scroll';
    padding?: number | string;
    paddingBottom?: number | string;
    paddingEnd?: number | string;
    paddingHorizontal?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    paddingStart?: number | string;
    paddingTop?: number | string;
    paddingVertical?: number | string;
    position?: 'absolute' | 'relative';
    right?: number | string;
    start?: number | string;
    top?: number | string;
    width?: number | string;
    zIndex?: number;


    //  * @platform iosdisplay

    direction ?: 'inherit' | 'ltr' | 'rtl';
 */

/**
 * flex direction constants
 */
const flexDirectionLabel = 'flexDirection';
const flextdirectionOptions = {
    Row: 'row',
    Column: 'column',
    RowReverse: 'row-reverse',
    ColumnReverse: 'column-reverse',

};
const defaultFlexDirection = flextdirectionOptions.Column;

/**
 * flex constants
 */
const flexLabel = 'flex';

/**
 * alignItems constants
 */
const alignItemsLabel = 'alignItems'
const alignItemsOptions = {
    FlexStart: 'flex-start',
    FlexEnd: 'flex-end',
    Center: 'center',
    Stretch: 'stretch',
    Baseline: 'baseline'
}
const defaultAlignItems = alignItemsOptions.Stretch;

/**
 * justifyContetnt constants
 */
const justifyContentLabel = 'justifyContent'
const justifyContentOptions = {
    FlexStart: 'flex-start',
    FlexEnd: 'flex-end',
    Center: 'center',
    SpaceBetween: 'space-between',
    SpaceAround: 'space-around',
    SpaceEvenly: 'space-evenly',
}
const defaultJustifyContent = justifyContentOptions.FlexStart;

/**
 * flexGrow constants
 * (Increase the size of child view)
 */
const flexGrowLabel = 'flexGrow'


export const generateKnobs = (groupId) => ({
    display: select('display', { none: 'none', flex: 'flex' }, 'flex', groupId),
    flexDirection: select(flexDirectionLabel, flextdirectionOptions, defaultFlexDirection, groupId),
    flex: number(flexLabel, 1, {}, groupId) || 0,
    alignItems: select(alignItemsLabel, alignItemsOptions, defaultAlignItems, groupId),
    justifyContent: select(justifyContentLabel, justifyContentOptions, defaultJustifyContent, groupId),
    flexGrow: number(flexGrowLabel, 0, {}, groupId) || 0,
})