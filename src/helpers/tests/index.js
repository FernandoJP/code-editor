import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";

import reducer from "../../store/reducers/codeEditor";
import theme from "../../theme/theme";

const rootReducer = combineReducers({
    codeEditor: reducer,
});

export const store = createStore(rootReducer);

export const ThemeProviderWrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            {children}
        </Provider>
    </ThemeProvider>
)