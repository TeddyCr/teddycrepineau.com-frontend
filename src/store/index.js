import { apiMiddleware } from 'redux-api-middleware'
import { applyMiddleware, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers'

const configureStore = (history) => {

    const reducer = rootReducer(history)

    const store = createStore(
        reducer,
        {},
        applyMiddleware(
            apiMiddleware,
            routerMiddleware(history)
        )
    )

    persistStore(store)

    return store
}

export default configureStore