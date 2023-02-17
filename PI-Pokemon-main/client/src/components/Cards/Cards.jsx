 import Card from "../Card/Card";
 import style from "./Cards.module.css";

 const allPokes = [
	{
		"id": 1,
		"name": "bulbasaur",
		"hp": 45,
		"attack": 49,
		"defense": 49,
		"speed": 45,
		"height": 7,
		"weight": 69,
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 2,
		"name": "ivysaur",
		"hp": 60,
		"attack": 62,
		"defense": 63,
		"speed": 60,
		"height": 10,
		"weight": 130,
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 3,
		"name": "venusaur",
		"hp": 80,
		"attack": 82,
		"defense": 83,
		"speed": 80,
		"height": 20,
		"weight": 1000,
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 4,
		"name": "charmander",
		"hp": 39,
		"attack": 52,
		"defense": 43,
		"speed": 65,
		"height": 6,
		"weight": 85,
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
		"types": [
			"fire"
		]
	},
	{
		"id": 5,
		"name": "charmeleon",
		"hp": 58,
		"attack": 64,
		"defense": 58,
		"speed": 80,
		"height": 11,
		"weight": 190,
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
		"types": [
			"fire"
		]
	},
	{
		"id": 6,
		"name": "charizard",
		"hp": 78,
		"attack": 84,
		"defense": 78,
		"speed": 100,
		"height": 17,
		"weight": 905,
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
		"types": [
			"fire",
			"flying"
		]
	},
	{
		"id": 7,
		"name": "squirtle",
		"hp": 44,
		"attack": 48,
		"defense": 65,
		"speed": 43,
		"height": 5,
		"weight": 90,
		"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
		"types": [
			"water"
		]
	}];
// const pokes = useSelector(state => state.pokes)

const Cards = () => {
 return (
    <div className={style.container}>
       {allPokes.map(e => { return <Card 
       id = {e.id}
       name={e.name}
       hp={e.hp}
       attack={e.attack}
       defense={e.defense}
       speed={e.speed}
       height={e.height}
       weight={e.weight}
       img={e.img}
       types={e.types}
       />
       })}
    </div>
 )   
};

export default Cards;