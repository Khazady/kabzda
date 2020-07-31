type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";

//редьюсер должен выплевывать объект такого же типа, как и принял
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            //возвращаем копию стейта, с перезатертым свойством коллапсед
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            throw new Error("Bad action")
    }
    return state;
}