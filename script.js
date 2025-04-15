SVGAnimateMotionElement({
    name: 'SVGAnimateMotionElement',
    type: 'instance',
    interfaces: ['SVGElement', 'SVGAnimationElement', 'SVGAnimateMotionElement'],
    attributes: ['accumulate', 'additive', 'calcMode', 'keyPoints', 'keySplines', 'keyTimes', 'origin', 'repeatCount', 'repeatDur', 'restart', 'values'],
    methods: ['getPathSegAtLength', 'getTotalLength', 'setPathSegAtLength'],
    events: ['SVGDOMAttributeNameChanged', 'SVGDOMNodeInsertedIntoDocument', 'SVGDOMNodeRemovedFromDocument', 'SVGElementInstanceTimeChanged', 'SVGElementInstanceTimeRemoved'],
    prototypes: ['SVGAnimateMotionElementPrototype', 'SVGElementPrototype', 'SVGAnimationElementPrototype'],
    constants: ['SVG_MOTION_PATH_SEGMENT_TYPE', 'SVG_MOTION_PATH_SEGMENT_LENGTH', 'SVG_MOTION_PATH_SEGMENT_X', 'SVG_MOTION_PATH_SEGMENT_Y', 'SVG_MOTION_PATH_SEGMENT_ROTATE', 'SVG_MOTION_PATH_SEGMENT_SCALE'], 
    constructor: function SVGAnimateMotionElement() {
        // Constructor logic here
        this.accumulate = null;
        this.additive = null;
        this.calcMode = null;
        this.keyPoints = null;
        this.keySplines = null;
        this.keyTimes = null;
        this.origin = null;
        this.repeatCount = null;
        this.repeatDur = null;
        this.restart = null;
        this.values = null;
        
    }
})