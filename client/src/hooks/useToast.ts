import { ToastTypeEnum } from "@/components/XMToast";
import EventBus from "@/utils/event";
import EventEnum from "@/constants/event";

const useToast = () => {

    const addMsg = (message: string, type: ToastTypeEnum, timeout: number) => {
        EventBus.publish(EventEnum.NOTICE, {
            message,
            type,
            timeout
        });
    }

    return {
        notice(msg: string, type: ToastTypeEnum, timeout: number = 2000) {
            addMsg(msg, type, timeout);
        },
        success(msg: string, timeout: number = 2000) {
            this.notice(msg, ToastTypeEnum.SUCCESS, timeout);
        },
        error(msg: string, timeout: number = 2000) {
            this.notice(msg, ToastTypeEnum.ERROR, timeout);
        },
        info(msg: string, timeout: number = 2000) {
            this.notice(msg, ToastTypeEnum.INFO, timeout);
        },
        warning(msg: string, timeout: number = 2000) {
            this.notice(msg, ToastTypeEnum.WARNING, timeout);
        }
    };
}

export default useToast;