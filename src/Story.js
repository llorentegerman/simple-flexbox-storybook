import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs, number, color } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Row, Column } from 'simple-flexbox';

storiesOf('Simple Flexbox', module)
    .addDecorator(withKnobs)
    .add('Row with X Items', withInfo()(
        () => {
            const numberOfItems = number('Items', 4);
            const itemText = text('Row Text', 'DIV ');
            const cellColor = color('Cell background color:', '#FF0000');
            const fontColor = color('Font color:', '#000000');
            const itemHeight = text('Item height', '25px');
            const itemWidth = text('Item width', '60px');
            var items = [];
            for (var i = 0; i < numberOfItems; i++) {
                items.push(<div key={i} style={{ color: fontColor, backgroundColor: cellColor, height: itemHeight, width: itemWidth }}>{`${itemText} ${i}`}</div>);
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
                        width: text('Container width', '300px'),
                        height: text('Container height', '400px'),
                        backgroundColor: color('container background color:', '#C8C7C7')
                    }}
                >
                    {items}
                </Row>
            );
        }), {
        propTables: [Row]
    })
    .add('Column with X Items', withInfo()(
        () => {
            const numberOfItems = number('Items', 4);
            const itemText = text('Column Text', 'DIV ');
            const cellColor = color('Cell background color:', '#FF0000');
            const fontColor = color('Font color:', '#000000');
            const itemHeight = text('Item height', '25px');
            const itemWidth = text('Item width', '60px');
            var items = [];
            for (var i = 0; i < numberOfItems; i++) {
                items.push(<div key={i} style={{ color: fontColor, backgroundColor: cellColor, height: itemHeight, width: itemWidth }}>{`${itemText} ${i}`}</div>);
            }
            return (
                <Column
                    reverse={boolean('Column reverse?', false)}

                    wrap={boolean('Wrap?', false)}
                    wrapReverse={boolean('wrapReverse?', false)}

                    vertical={select('Vertical align or justify-content: ', [undefined, 'start', 'center', 'end', 'spaced', 'around'], 'start')}
                    horizontal={select('Horizontal align or align-items: ', [undefined, 'start', 'center', 'end', 'stretch', 'baseline'], 'start')}


                    alignSelf={select('align-self align: ', [undefined, 'start', 'center', 'end', 'stretch', 'baseline'], undefined)}
                    alignContent={select('align-content align: ', [undefined, 'start', 'center', 'end', 'spaced', 'around'], undefined)}

                    style={{
                        width: text('Container width', '300px'),
                        height: text('Container height', '400px'),
                        backgroundColor: color('container background color:', '#C8C7C7')
                    }}
                >
                    {items}
                </Column>
            );
        }), { propTables: [Column] })
    .add('Two Columns Items', withInfo()(
        () => {
            const containerHeight = text('Container height', '300px');
            const containerWidth = text('Container width', '100%');
            const containerBackground = color('Container background color', '#D57171');
            const containerVertical = select('Container Vertical align or align-items: ', [undefined, 'start', 'center', 'end', 'stretch', 'baseline'], 'center');
            const containerHorizontal = select('Container Horizontal align or justify-content: ', [undefined, 'start', 'center', 'end', 'spaced', 'around'], 'spaced');
            
            const numberOfItems = number('Column1 Items', 8);
            const numberOfItems2 = number('Column2 Items', 8);
            const itemText = text('Column1 Item Text', 'DIV ');
            const itemText2 = text('Column2 Item Text', 'DIV ');
            const cellColor = color('Column1 Cell background color:', '#653EFF');
            const cellColor2 = color('Column2 Cell background color:', '#FF0000');
            const fontColor = color('Column1 Font color:', '#000000');
            const fontColor2 = color('Column2 Font color:', '#000000');
            const itemHeight = text('Column1 Item height', '25px');
            const itemHeight2 = text('Column2 Item height', '25px');
            const itemWidth = text('Column1 Item width', '50%');
            const itemWidth2 = text('Column2 Item width', '50%');
            
            const column1Reverse = boolean('Column1 reverse?', false);
            const column2Reverse = boolean('column2 reverse?', false);
            const column1Wrap = boolean('Column1 Wrap?', false);
            const column2Wrap = boolean('column2 Wrap?', false);
            const column1WrapReverse = boolean('Column1 wrapReverse?', false);
            const column2WrapReverse = boolean('column2 wrapReverse?', false);
            const column1Vertical = select('Column1 Vertical align or justify-content: ', [undefined, 'start', 'center', 'end', 'spaced', 'around'], 'start');
            const column2Vertical = select('column2 Vertical align or justify-content: ', [undefined, 'start', 'center', 'end', 'spaced', 'around'], 'spaced');
            const column1Horizontal = select('Column1 Horizontal align or align-items: ', [undefined, 'start', 'center', 'end', 'stretch', 'baseline'], 'center');
            const column2Horizontal = select('column2 Horizontal align or align-items: ', [undefined, 'start', 'center', 'end', 'stretch', 'baseline'], 'center');
            const column1AlignSelf = select('Column1 align-self align: ', [undefined, 'start', 'center', 'end', 'stretch', 'baseline'], undefined);
            const column2AlignSelf = select('column2 align-self align: ', [undefined, 'start', 'center', 'end', 'stretch', 'baseline'], undefined);
            const column1AlignContent = select('Column1 align-content align: ', [undefined, 'start', 'center', 'end', 'spaced', 'around'], undefined);
            const column2AlignContent = select('column2 align-content align: ', [undefined, 'start', 'center', 'end', 'spaced', 'around'], undefined);
            const column1ContainerWidth = text('Column1 Container width', '100%');
            const column2ContainerWidth = text('column2 Container width', '100%');
            const column1ContainerHeight = text('Column1 Container height', '400px');
            const column2ContainerHeight = text('column2 Container height', '400px');
            
            const column1ContainerMaxWidth = text('Column1 Container max-width', '250px');
            const column2ContainerMaxWidth = text('column2 Container max-width', '250px');
            const column1ContainerMaxHeight = text('Column1 Container max-height', '100%');
            const column2ContainerMaxHeight = text('column2 Container max-height', '300px');
            
            const column1ContainerBackground = color('Column1 container background color', '#49AFAF');
            const column2ContainerBackground = color('column2 container background color', '#C8C7C7');
            
            var items1 = [];
            for (var i = 0; i < numberOfItems; i++) {
                items1.push(<div key={i} style={{ color: fontColor, backgroundColor: cellColor, height: itemHeight, width: itemWidth }}>{`${itemText} ${i}`}</div>);
            }

            var items2 = [];
            for (var j = 0; j < numberOfItems2; j++) {
                items2.push(<div key={j} style={{ color: fontColor2, backgroundColor: cellColor2, height: itemHeight2, width: itemWidth2 }}>{`${itemText2} ${j}`}</div>);
            }

            return (
                <Row style={{ width: containerWidth, height: containerHeight, backgroundColor: containerBackground }} vertical={containerVertical} horizontal={containerHorizontal}>
                    <Column
                        reverse={column1Reverse}

                        wrap={column1Wrap}
                        wrapReverse={column1WrapReverse}

                        vertical={column1Vertical}
                        horizontal={column1Horizontal}


                        alignSelf={column1AlignSelf}
                        alignContent={column1AlignContent}

                        style={{
                            width: column1ContainerWidth,
                            height: column1ContainerHeight,
                            backgroundColor: column1ContainerBackground,
                            maxWidth: column1ContainerMaxWidth,
                            maxHeight: column1ContainerMaxHeight
                        }}
                    >
                        {items1}
                    </Column>

                    <Column
                        reverse={column2Reverse}

                        wrap={column2Wrap}
                        wrapReverse={column2WrapReverse}

                        vertical={column2Vertical}
                        horizontal={column2Horizontal}


                        alignSelf={column2AlignSelf}
                        alignContent={column2AlignContent}

                        style={{
                            width: column2ContainerWidth,
                            height: column2ContainerHeight,
                            backgroundColor: column2ContainerBackground,
                            maxWidth: column2ContainerMaxWidth,
                            maxHeight: column2ContainerMaxHeight
                        }}
                    >
                        {items2}
                    </Column>
                </Row>
            );
        }), { propTables: [Column] });
