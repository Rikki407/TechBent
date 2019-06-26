export const initialState  = {
    testData: ''
}
export default function (state = initialState, action){
    switch(action.type){
        case "homepageData" :{
            return(
                {
                    ...state,
                    testData: action.payload.data
                }
            )
        }
        
    }
    return state
}
