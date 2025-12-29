const we = {
  name: "",
  are: {
    the: {
      best: "Koda",
    },
  },
};


const { are: { the: { best } } } = we;
console.log(best);



const hello = {
    world : "Hello World"
}

const {world} = hello
console.log(world)


const obj = {
  str: [
    "",
    "",
    "",
    [
      "",
      [
        "",
        "",
        { man: [{ tech: { academy: "Tech Academy" } }, "ngoding"] },
      ],
    ],
  ],
};

const {
  str: [
    , , ,
    [
      ,
      [
        , ,
        {
          man: [
            { tech: { academy } }
          ]
        }
      ]
    ]
  ]
} = obj;

console.log(academy); 


const my = [
  {
    favorite: ["", "", "", { fruit: { is: "Apple" } }],
  },
  "",
];

const [
  {
    favorite: [
      , , ,
      { fruit: { is } }
    ]
  }
] = my;

console.log(is); 


