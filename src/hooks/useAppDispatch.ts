import {AppDispatch} from "store/store";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {weatherThunk} from "reducers/weather.reducer";

const actions = {
    ...weatherThunk
}

export const useAppDispatch = () => {
    const dispatch = useDispatch<AppDispatch>()
    return bindActionCreators(actions, dispatch as AppDispatch)
}