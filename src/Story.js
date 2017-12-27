import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs, number, color } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Layout, Row, Column } from 'simple-flexbox';

storiesOf('Simple Flexbox', module)
    .addDecorator(withKnobs)
    .add('Row X Items',
        withInfo()(
            () => {
                const numberOfItems = number('Items', 4);
                const itemText = text('Row Text', 'DIV ');
                const cellColor = color('Cell background color:', '#FF0000');
                const fontColor = color('Font color:', '#000000');
                const itemHeight = text('Item height', '25px');
                const itemWidth = text('Item width', '60px');
                var items = [];
                for (var i = 0; i < numberOfItems; i++) {
                    items.push(<div key={i} style={{ color: fontColor, backgroundColor: cellColor, height: itemHeight, width: itemWidth}}>{`${itemText} ${i}`}</div>);
                }
                return (
                    <Row
                        reverse={boolean('Row reverse?', false)}

                        wrap={boolean('Wrap?', false)}
                        wrapReverse={boolean('wrapReverse?', false)}

                        horizontal={select('Horizontal align or justify-content: ', [undefined, 'start', 'center', 'end', 'spaced', 'around'], 'start')}
                        vertical={select('Vertical align or align-items: ', [undefined, 'start', 'center', 'end', 'stretch', 'baseline'], 'start')}


                        alignSelf={select('align-self align: ', [undefined, 'start', 'center', 'end', 'stretch', 'baseline'], undefined)}
                        alignContent={select('align-content align: ', [undefined, 'start', 'center', 'end', 'spaced', 'around'], undefined)}

                        style={{
                            width: text('Container with', '300px'),
                            height: text('Container height', '400px'),
                            backgroundColor: color('container background color:', '#C8C7C7')
                        }}
                    >
                        {items}
                    </Row>
                );
            }), { propTables: [Row] });
