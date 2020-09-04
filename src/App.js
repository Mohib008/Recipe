import React, { Component } from 'react';
import './App.css';
import Navbar from "./Component/Navbar";
import RecipeList from "./Component/RecipeList";
import RecipeInput from "./Component/recipeInput";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Avocado Toast",
          ingredients: ['Pasta', 'Flour', 'Water'],
          instructions: "Mix ingredients",
          img: "pasta.jpg"
      },
      {
        id: 1,
          title: "Milkshake",
          ingredients: ['Pasta', 'Flour', 'Water'],
          instructions: "Mix ingredients",
          img: "milkshake.jpg"
      },
      {
        id: 2,
          title: "Spaghetti",
          ingredients: ['Pasta', 'Flour', 'Water'],
          instructions: "Mix ingredients",
          img: "spaghetti.jpg"
      }
      ],
      nextRecipeId: 3,
    }
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe){
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return{
        nextRecipeId: prevState.nextRecipeId + 1, 
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }

  render() {
  return (
    <div className="App">
    <Navbar />
    <RecipeInput 
      onSave-={this.handleSave}
      
    />
      <RecipeList recipes ={this.state.recipes} />
      </div>
    );
  } 
}


export default App;