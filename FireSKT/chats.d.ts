/// <reference types="node" />
/// <reference types="ws" />
import { BinaryNode } from "../Internal";
import { Chat, WAPresence, LegacySocketConfig, WABusinessProfile, ChatModification, WAMessageKey } from "../Models";
declare const makeChatsSocket: (config: LegacySocketConfig) => {
    sendChatsQuery: (epoch: number) => Promise<string>;
    profilePictureUrl: (jid: string, timeoutMs?: number) => Promise<string>;
    chatRead: (fromMessage: WAMessageKey, count: number) => Promise<void>;
    /**
     * Modify a given chat (archive, pin etc.)
     * @param jid the ID of the person/group you are modifiying
     */
    chatModify: (modification: ChatModification, jid: string, chatInfo: Pick<Chat, 'mute' | 'pin'>, timestampNow?: number) => Promise<void | {
        status: number;
    }>;
    /**
     * Query whether a given number is registered on WhatsApp
     * @param str phone number/jid you want to check for
     * @returns undefined if the number doesn't exists, otherwise the correctly formatted jid
     */
    onWhatsApp: (str: string) => Promise<{
        exists: boolean;
        jid: string;
        isBusiness: boolean;
    }>;
    /**
     * Tell someone about your presence -- online, typing, offline etc.
     * @param jid the ID of the person/group who you are updating
     * @param type your presence
     */
    sendPresenceUpdate: (type: WAPresence, jid: string | undefined) => Promise<string>;
    /**
     * Request updates on the presence of a user
     * this returns nothing, you'll receive updates in chats.update event
     * */
    presenceSubscribe: (jid: string) => Promise<string>;
    /** Query the status of the person (see groupMetadata() for groups) */
    getStatus: (jid: string) => Promise<{
        status: string;
    }>;
    setStatus: (status: string) => Promise<{
        status: number;
    }>;
    /** Updates business profile. */
    updateBusinessProfile: (profile: WABusinessProfile) => Promise<void>;
    updateProfileName: (name: string) => Promise<{
        status: number;
        pushname: string;
    }>;
    /**
     * Update the profile picture
     * @param jid
     * @param img
     */
    updateProfilePicture(jid: string, img: Buffer): Promise<void>;
    /**
     * Add or remove user from blocklist
     * @param jid the ID of the person who you are blocking/unblocking
     * @param type type of operation
     */
    blockUser: (jid: string, type?: 'add' | 'remove') => Promise<void>;
    /**
     * Query Business Profile (Useful for VCards)
     * @param jid Business Jid
     * @returns profile object or undefined if not business account
     */
    getBusinessProfile: (jid: string) => Promise<WABusinessProfile>;
    state: import("../Models").ConnectionState;
    authInfo: import("../Models").LegacyAuthenticationCreds;
    ev: import("../Models").LegacySuperChatsEventEmitter;
    canLogin: () => boolean;
    logout: () => Promise<void>;
    waitForConnectionUpdate: (check: (u: Partial<import("../Models").ConnectionState>) => boolean, timeoutMs?: number) => Promise<void>;
    type: "legacy";
    ws: import("ws");
    sendAdminTest: () => Promise<string>;
    updateKeys: (info: {
        encKey: Buffer;
        macKey: Buffer;
    }) => {
        encKey: Buffer;
        macKey: Buffer;
    };
    waitForSocketOpen: () => Promise<void>;
    sendNode: ({ json, binaryTag, tag, longTag }: import("../Models").SocketSendMessageOptions) => Promise<string>;
    generateMessageTag: (longTag?: boolean) => string;
    waitForMessage: (tag: string, requiresPhoneConnection: boolean, timeoutMs?: number) => {
        promise: Promise<any>;
        cancelToken: () => void;
    };
    query: ({ json, timeoutMs, expect200, tag, longTag, binaryTag, requiresPhoneConnection }: import("../Models").SocketQueryOptions) => Promise<any>;
    setQuery: (nodes: BinaryNode[], binaryTag?: import("../Models").WATag, tag?: string) => Promise<{
        status: number;
    }>;
    currentEpoch: () => number;
    end: (error: Error) => void;
};
export default makeChatsSocket;
