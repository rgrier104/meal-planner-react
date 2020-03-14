
export function fetchRecipes() {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/recipes')
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'FETCH_RECIPES',
                payload: data
            }))
    }

}