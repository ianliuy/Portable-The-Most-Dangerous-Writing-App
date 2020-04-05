export default class SegmentTracker {
    constructor(window) {
        this.window = window;
        // console.log("ADDED WINDOW IN SEGMENT", window);
        this.checkSegment();
    }

    checkSegment() {
        if (this.window.analytics === undefined)
            console.log("ERROR: SEGMENT ARE NOT IMPLEMENTED !!!")

        // TODO: add error handler
    }

    trackPage(name, params={}) {
        this.window.analytics.track(name, params);
    }

    trackEvent(name, params={}) {
        this.window.analytics.track(name, params);
    }
}
