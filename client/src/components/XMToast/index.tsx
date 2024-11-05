import { useEffect } from "react";
import { Toast, ToastTitle, Toaster, useId, useToastController } from "@fluentui/react-components";

import EventBus from "@/utils/event";
import EventEnum from "@/constants/event";

import classes from "./index.module.scss";

export enum ToastTypeEnum {
    INFO = "info",
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    PROGRESS = "progress",
    AVATAR = "avatar"
}

export interface ToastConfig {
    message: string,
    type: ToastTypeEnum,
    timeout: number
}

const XMToast = () => {

    const toasterId = useId("GLOBAL_TOASTER");
    const { dispatchToast } = useToastController(toasterId);

    useEffect(() => {
        const handler = ({ message, type, timeout }: ToastConfig) => {
            switch (type) {
                case ToastTypeEnum.INFO:
                case ToastTypeEnum.SUCCESS:
                case ToastTypeEnum.ERROR:
                case ToastTypeEnum.WARNING:
                    dispatchToast(
                        <Toast className={classes.toast}>
                            <ToastTitle>{message}</ToastTitle>
                        </Toast>,
                        {
                            intent: type,
                            timeout
                        }
                    )
                    break;
                case ToastTypeEnum.PROGRESS:
                    break;
                case ToastTypeEnum.AVATAR:
                    break;

            }
        };

        EventBus.subscribe(EventEnum.NOTICE, handler);

        return () => EventBus.removeSubscribe(EventEnum.NOTICE, handler);
    }, []);
    
    return <Toaster className={classes.toaster} toasterId={toasterId} position="top" />;
}


export default XMToast;