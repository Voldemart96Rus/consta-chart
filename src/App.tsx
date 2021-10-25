import React from 'react';
import './App.css';
import {Theme, presetGpnDefault} from '@consta/uikit/Theme';
import {Bar} from '@consta/charts/Bar';
export type GraphicItem = {
    group: string | number | null | undefined;
    x: string | number;
    y: number;
};

const App: React.FC = () => {
    const items: GraphicItem[] = [
        {'x': 19, 'y': 14, 'group': '1'},
        {'x': 20, 'y': 36, 'group': '2'},
        {'x': 21, 'y': 100, 'group': '3'},
        {'x': 22, 'y': 238, 'group': '4'},
        {'x': 23, 'y': 465, 'group': '5'},
        {'x': 24, 'y': 661, 'group': '6'},
        {'x': 25, 'y': 954, 'group': '7'},
        {'x': 26, 'y': 1165, 'group': '8'},
        {'x': 27, 'y': 1327, 'group': '9'},
        {'x': 28, 'y': 1422, 'group': '10'},
        {'x': 29, 'y': 1643, 'group': '11'},
        {'x': 30, 'y': 1928, 'group': '12'},
        {'x': 31, 'y': 2176, 'group': '13'},
        {'x': 32, 'y': 2281, 'group': '14'},
        {'x': 33, 'y': 2515, 'group': '15'},
        {'x': 34, 'y': 2777, 'group': '16'},
        {'x': 35, 'y': 2909, 'group': '17'},
        {'x': 36, 'y': 2709, 'group': '18'},
        {'x': 37, 'y': 2691, 'group': '19'},
        {'x': 38, 'y': 2603, 'group': '20'},
        {'x': 39, 'y': 2308, 'group': '21'},
        {'x': 40, 'y': 2165, 'group': '22'},
        {'x': 41, 'y': 2080, 'group': '23'},
        {'x': 42, 'y': 1937, 'group': '24'},
        {'x': 43, 'y': 1893, 'group': '25'},
        {'x': 44, 'y': 1704, 'group': '26'},
        {'x': 45, 'y': 1699, 'group': '27'},
        {'x': 46, 'y': 1543, 'group': '28'},
        {'x': 47, 'y': 1391, 'group': '29'},
        {'x': 48, 'y': 1362, 'group': '30'},
        {'x': 49, 'y': 1286, 'group': '31'},
        {'x': 50, 'y': 1251, 'group': '32'},
        {'x': 51, 'y': 1099, 'group': '33'},
        {'x': 52, 'y': 1025, 'group': '34'},
        {'x': 53, 'y': 941, 'group': '35'},
        {'x': 54, 'y': 874, 'group': '36'},
        {'x': 55, 'y': 855, 'group': '37'},
        {'x': 56, 'y': 786, 'group': '35'},
        {'x': 57, 'y': 680, 'group': '36'},
        {'x': 58, 'y': 646, 'group': '37'},
        {'x': 59, 'y': 574, 'group': '38'},
        {'x': 60, 'y': 510, 'group': '39'},
        {'x': 61, 'y': 400, 'group': '40'},
        {'x': 62, 'y': 254, 'group': '41'},
        {'x': 63, 'y': 210, 'group': '42'},
        {'x': 64, 'y': 150, 'group': '43'},
        {'x': 65, 'y': 106, 'group': '44'},
        {'x': 66, 'y': 57, 'group': '45'},
        {'x': 67, 'y': 38, 'group': '46'},
        {'x': 68, 'y': 30, 'group': '47'},
        {'x': 69, 'y': 28, 'group': '48'},
        {'x': 70, 'y': 15, 'group': '49'},
        {'x': 71, 'y': 8, 'group': '50'},
        {'x': 72, 'y': 9, 'group': '51'},
        {'x': 73, 'y': 5, 'group': '52'},
        {'x': 74, 'y': 2, 'group': '53'},
        {'x': 75, 'y': 4, 'group': '54'},
        {'x': 76, 'y': 3, 'group': '55'},
        {'x': 77, 'y': 2, 'group': '56'},
        {'x': 80, 'y': 1, 'group': '57'},
        {'x': 82, 'y': 1, 'group': '58'},
        {'x': 87, 'y': 1, 'group': '59'},
    ];

    const data = () => {
        if (typeof items[0].x === 'number') {
            return items.map((el) => {
                return {...el, x: el.x + ''};
            });
        }
        return items;
    };

    return (
        <Theme preset={presetGpnDefault}>
            <div className='App'>
                <Bar
                    style={{
                        marginBottom: 'var(--space-m)',
                    }}
                    data={items}
                    // data={data()}
                    legend={{
                        layout: 'horizontal',
                        position: 'top',
                        flipPage: true,
                        maxRow: 2,
                    }}
                    xField='y'
                    yField='x'
                    isGroup
                    seriesField={'group'}
                    minBarWidth={15}
                    label={{
                        position: 'right',
                        style: {
                            fontSize: 14,
                            fontWeight: 'normal',
                        },
                    }}
                />
            </div>
        </Theme>
    );
};

export default App;
