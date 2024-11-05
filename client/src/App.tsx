import {
    RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

import "@/styles/reset.scss";
import "@/styles/main.scss";

import router from "@/router/index";
import store from "@/store/index";
import AuthProvider from "@/provider/AuthProvider";
import LocaleProvider from "@/provider/LocaleProvider";
import XMToast from "@/components/XMToast";
import XMDialog from "@/components/XMDialog";

import useToast from "@/hooks/useToast";

const App = () => {

    const Toast = useToast();

    const handleSWRError = (err: Error) => {
        Toast.error(err.message);
    }

    const swrConfig = {
        onError: handleSWRError
    };

    return (
        <Provider store={store}>
            <FluentProvider theme={webLightTheme}>
                <LocaleProvider>
                    <XMToast />
                    <XMDialog />
                    <SWRConfig value={swrConfig}>
                        <AuthProvider>
                            <RouterProvider router={router} />
                        </AuthProvider>
                    </SWRConfig>
                </LocaleProvider>
            </FluentProvider>
        </Provider>
    );
}

export default App;