import { LitElement } from 'lit';
interface Feature {
    id: string;
    title: string;
    moreInfoLink: string;
    requiresServerRestart: boolean;
    enabled: boolean;
}
export declare class VaadinDevmodeGizmo extends LitElement {
    static BLUE_HSL: import("lit").CSSResult;
    static GREEN_HSL: import("lit").CSSResult;
    static GREY_HSL: import("lit").CSSResult;
    static YELLOW_HSL: import("lit").CSSResult;
    static RED_HSL: import("lit").CSSResult;
    static MAX_LOG_ROWS: number;
    static get styles(): import("lit").CSSResult;
    static DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE: string;
    static ACTIVE_KEY_IN_SESSION_STORAGE: string;
    static TRIGGERED_KEY_IN_SESSION_STORAGE: string;
    static TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE: string;
    static AUTO_DEMOTE_NOTIFICATION_DELAY: number;
    static HOTSWAP_AGENT: string;
    static JREBEL: string;
    static SPRING_BOOT_DEVTOOLS: string;
    static BACKEND_DISPLAY_NAME: Record<string, string>;
    static get isActive(): boolean;
    static notificationDismissed(persistentId: string): boolean;
    url?: string;
    liveReloadDisabled?: boolean;
    backend?: string;
    springBootLiveReloadPort?: number;
    expanded: boolean;
    messages: Message[];
    splashMessage?: string;
    notifications: Message[];
    frontendStatus: ConnectionStatus;
    javaStatus: ConnectionStatus;
    private tabs;
    private activeTab;
    private serverInfo;
    private features;
    private unreadErrors;
    private root;
    private javaConnection?;
    private frontendConnection?;
    private nextMessageId;
    private disableEventListener?;
    private transitionDuration;
    constructor();
    openWebSocketConnection(): void;
    getDedicatedWebSocketUrl(): string | undefined;
    getSpringBootWebSocketUrl(location: any): string;
    connectedCallback(): void;
    format(o: any): string;
    catchErrors(): void;
    disconnectedCallback(): void;
    toggleExpanded(): void;
    showSplashMessage(msg: string | undefined): void;
    demoteSplashMessage(): void;
    log(type: MessageType, message: string, details?: string, link?: string): void;
    showNotification(type: MessageType, message: string, details?: string, link?: string, persistentId?: string): void;
    dismissNotification(id: number): void;
    findNotificationIndex(id: number): number;
    toggleDontShowAgain(id: number): void;
    setActive(yes: boolean): void;
    getStatusColor(status: ConnectionStatus | undefined): import("lit").CSSResult;
    renderMessage(messageObject: Message): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    renderLog(): import("lit-html").TemplateResult<1>;
    activateLog(): void;
    renderInfo(): import("lit-html").TemplateResult<1>;
    private renderFeatures;
    copyInfoToClipboard(): void;
    toggleFeatureFlag(e: Event, feature: Feature): void;
}
declare enum ConnectionStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    UNAVAILABLE = "unavailable",
    ERROR = "error"
}
declare enum MessageType {
    LOG = "log",
    INFORMATION = "information",
    WARNING = "warning",
    ERROR = "error"
}
interface Message {
    id: number;
    type: MessageType;
    message: string;
    details?: string;
    link?: string;
    persistentId?: string;
    dontShowAgain: boolean;
    deleted: boolean;
}
export {};
