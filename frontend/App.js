import { MainNavigator } from './components/MainNavigator';
import { Provider as StoreProvider } from "react-redux";
import store from './userContext/stores/store';

export default function App() {
    return (
        <StoreProvider store={store}>
            <MainNavigator />
        </StoreProvider>
    );
}
