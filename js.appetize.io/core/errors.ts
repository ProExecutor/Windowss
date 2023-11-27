import { Element, TouchAction } from './api/recorder';
import { ElementSelector } from './api/recorder';

export function captureStackTrace(targetObject, constructorOpt) {
    if ('captureStackTrace' in Error) {
        Error.captureStackTrace(targetObject, constructorOpt);
    } else {
        // @ts-ignore
        const container = new Error();

        Object.defineProperty(targetObject, 'stack', {
            configurable: true,
            get() {
                const { stack } = container;
                Object.defineProperty(this, 'stack', { value: stack });
                return stack;
            },
        });
    }
}

/**
 * Captures the stack trace of an operational error so that when the error is logged to the user,
 * the stack points to the given method instead of the method that threw the error.
 *
 * i.e
 *
 * ```bash
 *  TimeoutError: Timed out after 60 seconds waiting for element
 *  await session.tap({ element: { text: 'hello' } });
 *  ^
 * ```
 */
export async function captureOperationalError(e: unknown, constructorOpt: any) {
    if (e instanceof OperationalError) {
        captureStackTrace(e, constructorOpt);
    }
}

export class OperationalError extends Error {
    /**
     * Whether the error is operational or not.
     * Operational errors are errors that are expected to happen
     * (such as the failed result of an action playback, or timeout error).
     */
    isOperational: boolean;

    constructor(message: string) {
        super(message);
        this.name = 'Error';
        this.isOperational = true;
        captureStackTrace(this, this.constructor);
    }
}

export class ElementNotFoundError extends OperationalError {
    constructor(selector: ElementSelector) {
        super(
            `No element found for selector\n${JSON.stringify(
                selector,
                null,
                2
            )}`
        );
    }
}

export class AmbiguousElementError extends OperationalError {
    constructor(matchedElements: Element[]) {
        super(
            `Action requires 1 unique element but the selector returned ${
                matchedElements.length
            }. Provide a \`matchIndex\` to pick an element below or add additional attributes to your selector.\n\n${formatAmbiguousElements(
                matchedElements
            )}`
        );
    }
}
export class ElementOutOfBoundsError extends OperationalError {
    constructor(action: TouchAction) {
        if (action.localPosition) {
            super(
                `localPosition (${action.localPosition.x}, ${action.localPosition.y}) for the element evaluates to a coordinate outside of screen bounds.`
            );
        } else {
            super(`Element is outside of screen bounds.`);
        }
    }
}

export class TimeoutError extends OperationalError {}

export class RecorderRequiredError extends OperationalError {
    constructor(feature: string) {
        super(
            `App Recorder must be enabled to use ${feature}. Please set "record" to true in the config.`
        );
    }
}

export function formatAmbiguousElements(elements: any[]): string {
    const maxElements = 5;
    const truncatedElements = elements.slice(0, maxElements);
    const truncated = elements.length > maxElements;

    const formatted = truncatedElements.map(
        (e, index) => `// ${index}\n${JSON.stringify(e, null, 2)}`
    );

    return `${formatted.join('\n\n')}${
        truncated ? `\n\n...and ${elements.length - maxElements} more` : ''
    }`;
}
