const arr = new  Array(10);
console.log(arr);

const arr2 = [];
console.log(arr2);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fran',
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light',
        [
            'Dr. Willy',
            'Woodman',
        ],
    ],
];

console.log({arregloCosas});
console.log(arregloCosas[2]);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);