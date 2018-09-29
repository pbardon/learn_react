/* jshint esversion: 6, asi: true */
/* globals MY_GLOBAL */
 // Pure React and JavaScript code

// class IngredientsList extends React.Component {

//     renderListItem(ingredient, i) {
//         return React.createElement("li", { key: i }, ingredient)
//     }

//     render() {
//         return React.createElement("ul", {className: "ingredients"},
//             this.props.items.map(this.renderListItem)
//         )
//     }

// }


const { render } = ReactDOM;

const list = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]

// stateless functional component:

const IngredientsList = ({list}) =>
    React.createElement("ul", {className: "ingredients"},
        list.map((ingredient, key) =>
            React.DOM.li({key}, ingredient)
        )
    )

const Ingredients = React.createFactory(IngredientsList)



render(
    Ingredients({list}),
    document.getElementById('react-container')
)