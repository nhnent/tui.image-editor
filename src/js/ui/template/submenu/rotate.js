/**
 * @param {Locale} locale - Translate text
 * @param {Object} normal - iconStyle
 * @param {Object} active - iconStyle
 * @returns {string}
 */
export default ({locale, iconStyle: {normal, active}}) => (`
    <ul class="tui-image-editor-submenu-item">
        <li class="tie-retate-button">
            <div class="tui-image-editor-button clockwise">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="#ic-rotate-clockwise" class="normal normal-color"/>
                        <use xlink:href="#ic-rotate-clockwise" class="active active-color"/>
                    </svg>
                </div>
                <label> 30 </label>
            </div>
            <div class="tui-image-editor-button counterclockwise">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="#ic-rotate-counterclockwise" class="normal normal-color"/>
                        <use xlink:href="#ic-rotate-counterclockwise" class="active active-color"/>
                    </svg>
                </div>
                <label> -30 </label>
            </div>
        </li>
        <li class="tui-image-editor-partition only-left-right">
            <div></div>
        </li>
        <li class="tui-image-editor-newline tui-image-editor-range-wrap">
            <label class="range">${locale.localize('Range')}</label>
            <div class="tie-rotate-range"></div>
            <input class="tie-ratate-range-value tui-image-editor-range-value" value="0" />
        </li>
    </ul>
`);
