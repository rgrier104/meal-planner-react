export default function mealPlansReducer(state = { meal_plans: [] }, action) {

    switch (action.type) {
        case 'FETCH_MEAL_PLANS':
            return { meal_plans: action.payload}
 
        default:
            return state
    }

}