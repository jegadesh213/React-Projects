import List from "./List.jsx"

function App() {

  let fruits = [  {id:1,name : "apple",calories : 15},
    {id:2,name : "banana",calories : 25},
    {id:3,name : "pineapple",calories : 35},
    {id:4,name : "watermelon",calories : 55},
    {id:5,name : "coconut",calories : 45}
  ];

  let vegetables = [  {id:1,name : "amla",calories : 15},
    {id:2,name : "brinjal",calories : 25},
    {id:3,name : "carrot",calories : 35},
    {id:4,name : "potato",calories : 55},
    {id:5,name : "cabbage",calories : 45}
  ];

  let name = "FRUITS"
  let name2 = "VEGGIES"

  return (
    <>
    {fruits.length > 0 ? <List listItems={fruits} category={name} /> : NULL}
    {vegetables.length > 0 ? <List listItems={vegetables} category={name2} /> : NULL}
    </>
  )
}

export default App
