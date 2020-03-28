
export function fetchMealPlans() {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/meal_plans')
            .then(resp => resp.json())
            .then(data => dispatch({
                type: 'FETCH_MEAL_PLANS',
                payload: data
            }))
    }

}