import React, { useState } from 'react';
import './Burger.css'
import Top from '../assets/top.jpg';
import Bottom from '../assets/bottom.jpg';
import Cheese from '../assets/cheese.jpg';
import Lettuse from '../assets/lettuse.jpg';
import Meat from '../assets/meat.jpg';
import Tomato from '../assets/tomato.jpg';

export default function Burger() {
  
  const [ ingredients , setIngredients ] = useState({lettuce: 0, meat: 0, tomato: 0, cheese: 0});
  const [burger, setBurger] = useState([])
  
  const addIngredient = (e) => {
    let newIngredients = ingredients;
    newIngredients[e.target.value] += 1;
    setIngredients(newIngredients);
    burgerContent();
  }
  
  const removeIngredient = (e) => {
    let newIngredients = ingredients;
    if(newIngredients[e.target.value] > 0){
      newIngredients[e.target.value] -= 1;
      setIngredients(newIngredients);
    }
    burgerContent();
  }
  
  const burgerContent = ()=> {
    let burger = []
    for(let i = 0; i < ingredients.lettuce; i++){
      burger.push(<img className='ingredients' src={Lettuse} alt='lettuse'/>)
    }
    for(let i = 0; i < ingredients.tomato; i++){
      burger.push(<img className='ingredients' src={Tomato} alt='tomato'/>)
    }
    for(let i = 0; i < ingredients.cheese; i++){
      burger.push(<img className='ingredients' src={Cheese} alt='cheese'/>)
    }
    for(let i = 0; i < ingredients.meat; i++){
      burger.push(<img className='ingredients' src={Meat} alt='meat'/>)
    }
    setBurger(burger);
  }
  
  return (
    <div className='container'>
      <div className="burger-ingredients">
        <img src ={Top} alt= 'Burger top'/>
        {burger.length === 0 ? <p>Start adding ingredients.</p> : burger }
        <img src ={Bottom} alt= 'Burger bottom'/>
      </div>
      <div className="burger-interface">
        <h2>Ingredients</h2>
        <div className="ingredients-group">
          <h3>Lettuce</h3>
          <div className="button-group">
            <button onClick={addIngredient} value= 'lettuce'>Add</button>
            <button onClick={removeIngredient} value= 'lettuce'>Remove</button>
          </div>
        </div>
        <div className="ingredients-group">
          <h3>Tomato</h3>
          <div className="button-group">
            <button onClick={addIngredient} value= 'tomato'>Add</button>
            <button onClick={removeIngredient} value= 'tomato'>Remove</button>
          </div>
        </div>
        <div className="ingredients-group">
          <h3>Cheese</h3>
          <div className="button-group">
            <button onClick={addIngredient} value= 'cheese'>Add</button>
            <button onClick={removeIngredient} value= 'cheese'>Remove</button>
          </div>
        </div>
        <div className="ingredients-group">
          <h3>Meat</h3>
          <div className="button-group">
            <button onClick={addIngredient} value= 'meat'>Add</button>
            <button onClick={removeIngredient} value= 'meat'>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}
