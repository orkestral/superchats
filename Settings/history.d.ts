import { proto } from "../Proto";
import { Chat, Contact } from "../Models";
export declare const downloadHistory: (msg: proto.IHistorySyncNotification) => Promise<proto.HistorySync>;
export declare const processHistoryMessage: (item: proto.IHistorySync, historyCache: Set<string>) => {
    chats: Chat[];
    contacts: Contact[];
    messages: proto.IWebMessageInfo[];
    isLatest: boolean;
};
export declare const downloadAndProcessHistorySyncNotification: (msg: proto.IHistorySyncNotification, historyCache: Set<string>) => Promise<{
    chats: Chat[];
    contacts: Contact[];
    messages: proto.IWebMessageInfo[];
    isLatest: boolean;
}>;
