import { EventEmitter } from 'events';

export interface SocketProtocol extends EventEmitter {
    /**
     * Sends a message to the AppSocket. This is basically the same as `emit`
     * but asynchronous so that it can wait for the socket to be ready first.
     */
    send(event: string, data?: any): Promise<void>;

    disconnect(): Promise<void>;
}

/**
 * We have some events that are only emitted as xdoc that eventually
 * should be emitted by the sockets themselves. For now, this will
 * map those events to the appropriate client events.
 */
export function mapXdocEvent({ type, value }: { type: string; value: any }) {
    switch (type) {
        case 'deviceInfo':
            return {
                type: 'deviceInfo',
                value,
            };
        case 'sessionRequested':
            return {
                type: 'sessionRequested',
            };
        case 'chromeDevToolsUrl':
            return {
                type: 'networkInspectorUrl',
                value,
            };

        case 'orientationChanged':
            return {
                type: 'orientationChanged',
                value,
            };
    }
}
