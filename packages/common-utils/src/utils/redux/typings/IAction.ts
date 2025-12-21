export interface IAction {
    type: string;
}

export interface IActionWithPayload<P = any> extends IAction {
    payload: P;
}

export interface IActionWithPayloadAndMeta<P = any, M = any> extends IActionWithPayload<P> {
    meta: M;
}