(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.mcTSD_NoCOM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AlZhjIKxAAQAfAAAAAZIAACWQAAAYgfAAIqxAAQgdAAAAgYIAAiWQAAgZAdAAg");
	this.shape.setTransform(37.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AlZBkQgdAAAAgZIAAiVQAAgZAdAAIKxAAQAfAAAAAZIAACVQAAAZgfAAg");
	this.shape_1.setTransform(37.5,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC33").s().p("AlZBkQgdAAAAgZIAAiVQAAgZAdAAIKxAAQAfAAAAAZIAACVQAAAZgfAAg");
	this.shape_2.setTransform(37.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,77,22);


(lib.mcFrequence = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(10,1,1).p("AlVAAQCSiODLAAQDCAACMB/AjJCPQBYhWB5AAQB8AABXBW");
	this.shape.setTransform(34.2,14.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#009900").ss(10,1,1).p("AgHgHQAHAHAIAI");
	this.shape_1.setTransform(69.2,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhtgiIABgBQAtgsA/AAQA2gBAqAjIALAKIADADIhsBxg");
	this.shape_2.setTransform(35.125,42.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#009900").ss(10,1,1).p("AldAAQCSiODLAAQDNAACRCOAjRCPQBYhWB5AAQB8AABXBW");
	this.shape_3.setTransform(35,14.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AhtgiIABgBQAtgsA/AAQA2gBAqAjIALAKIADADIhsBxg");
	this.shape_4.setTransform(35.125,42.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF6600").ss(10,1,1).p("AjRArQBXhVB6AAQB7AABXBV");
	this.shape_5.setTransform(35.075,24.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AhtgiIABgBQAtgsA/AAQA2gBAqAjIALAKIADADIhsBxg");
	this.shape_6.setTransform(35.125,42.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhtgiIABgBQAtgsA/AAQA2gBAqAjIALAKIADADIhsBxg");
	this.shape_7.setTransform(35.125,42.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,80,55.9);


(lib.mcAlarmeText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AkihjIJDAAQAaAAAAAZIAACWQAAAYgaAAIpDAAQgYAAAAgYIAAiWQAAgZAYAAg");
	this.shape.setTransform(31.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkiBkQgYAAAAgZIAAiVQAAgZAYAAIJDAAQAaAAAAAZIAACVQAAAZgaAAg");
	this.shape_1.setTransform(31.5,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD800").s().p("AkiBkQgYAAAAgZIAAiVQAAgZAYAAIJDAAQAaAAAAAZIAACVQAAAZgaAAg");
	this.shape_2.setTransform(31.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,65,22);


(lib.btReg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AqChaIUFAAQAeAAAAAeIAAB5QAAAegeAAI0FAAQgeAAAAgeIAAh5QAAgeAeAAg");
	this.shape.setTransform(67.325,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("AqCBbQgeAAAAgfIAAh4QAAgdAeAAIUFAAQAeAAAAAdIAAB4QAAAfgeAAg");
	this.shape_1.setTransform(67.325,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Calque_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIAQgDQACAGADACQADADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCQgSgEgFgEQgIgEAAgIQAAgJAHgFQAGgGANABQAMAAAHADQAFAEADAJIgQADQgBgEgCgCQgEgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIAOAEQAOADAFAEQAFAEAAAIQAAAIgHAGQgIAHgNAAQgMAAgHgGg");
	this.shape_2.setTransform(129,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_3.setTransform(122.4515,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghQAAgJgBgDIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_4.setTransform(113.825,14.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_5.setTransform(106.65,14.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgEQACgFAFgBQAEgCAJgBQAKgCAFgDIAAgBQgBgFgCgCQgCgCgFAAQgFAAgCABQgDACgCAFIgOgDQACgJAGgFQAHgDALAAQAKAAAGACQAFADACAEQACAEABAKIAAASIABANIACAIIgQAAIgCgFIAAgCQgEAFgFACQgEACgFAAQgKgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQACADAEAAQAEAAAEgDQADgCABgDIABgIIAAgEIgKADg");
	this.shape_6.setTransform(100.55,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_7.setTransform(95.525,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAZArIgIgTIgiAAIgHATIgSAAIAihVIARAAIAiBVgAgLAJIAWAAIgLgfg");
	this.shape_8.setTransform(89.5,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgTAbQgHgFgCgJIAQgDQABAGAEACQADADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAABgBQgBgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCQgSgEgGgEQgHgEAAgIQAAgJAGgFQAHgGANABQAMAAAHADQAFAEADAJIgPADQgBgEgEgCQgDgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACADIAOAEQANADAGAEQAFAEAAAIQAAAIgHAGQgHAHgOAAQgMAAgIgGg");
	this.shape_9.setTransform(78.4,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_10.setTransform(71.8515,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgVAnQgGgFAAgJIAAgCIATACQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQACACAEgBQAHAAADgBQACgBABgEIABgHIAAgJQgHAKgLAAQgMAAgIgKQgFgJAAgMQAAgPAHgIQAIgIALAAQAKAAAIAKIAAgJIAPAAIAAA2QAAAMgBAFQgCAGgEADQgDACgFACQgGACgIABQgPAAgHgGgAgJgaQgDAEAAAJQAAALADADQAEAFAFgBQAGABAEgFQAEgEAAgJQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_11.setTransform(64.725,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgEQACgFAFgBQAEgCAIgBQALgCAFgDIAAgBQgBgFgCgCQgCgCgFAAQgFAAgCABQgDACgCAFIgOgDQACgJAGgFQAHgDALAAQALAAAFACQAFADACAEQADAEAAAKIAAASIABANIACAIIgQAAIgCgFIAAgCQgFAFgFACQgDACgFAAQgKgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQACADAEAAQAEAAAEgDQADgCABgDIABgIIAAgEIgKADg");
	this.shape_12.setTransform(57.9,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_13.setTransform(52.875,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgVAnQgGgFAAgJIAAgCIATACQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQACACAEgBQAHAAADgBQACgBABgEIABgHIAAgJQgHAKgLAAQgMAAgIgKQgFgJAAgMQAAgPAHgIQAIgIALAAQAKAAAIAKIAAgJIAPAAIAAA2QAAAMgBAFQgCAGgEADQgDACgFACQgGACgIABQgPAAgHgGgAgJgaQgDAEAAAJQAAALADADQAEAFAFgBQAGABAEgFQAEgEAAgJQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_14.setTransform(47.375,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgWAiQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgDQgDADAAAHIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_15.setTransform(40.5015,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGACQAGADAEAFQADAHABAHQgBAKgFAGQgGAGgLABQAFADAEAEQAEAEAGAKIALARgAgVgGIAOAAQALAAADgBQADgBACgCQABgDAAgEQAAgEgBgDQgDgDgEAAIgMAAIgOAAg");
	this.shape_16.setTransform(33.3,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgSAbQgIgFgCgJIAQgDQACAGADACQADADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCQgSgEgFgEQgIgEAAgIQAAgJAHgFQAGgGANABQAMAAAHADQAFAEADAJIgQADQgBgEgCgCQgEgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIAOAEQAOADAFAEQAFAEAAAIQAAAIgHAGQgIAHgNAAQgMAAgHgGg");
	this.shape_17.setTransform(129,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_18.setTransform(122.4515,14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghQAAgJgBgDIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_19.setTransform(113.825,14.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_20.setTransform(106.65,14.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgXAbQgFgFAAgIQAAgFADgEQACgFAFgBQAEgCAJgBQAKgCAFgDIAAgBQgBgFgCgCQgCgCgFAAQgFAAgCABQgDACgCAFIgOgDQACgJAGgFQAHgDALAAQAKAAAGACQAFADACAEQACAEABAKIAAASIABANIACAIIgQAAIgCgFIAAgCQgEAFgFACQgEACgFAAQgKgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQACADAEAAQAEAAAEgDQADgCABgDIABgIIAAgEIgKADg");
	this.shape_21.setTransform(100.55,14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_22.setTransform(95.525,13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AAZArIgIgTIgiAAIgHATIgSAAIAihVIARAAIAiBVgAgLAJIAWAAIgLgfg");
	this.shape_23.setTransform(89.5,13);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgTAbQgHgFgCgJIAQgDQABAGAEACQADADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAABgBQgBgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCQgSgEgGgEQgHgEAAgIQAAgJAGgFQAHgGANABQAMAAAHADQAFAEADAJIgPADQgBgEgEgCQgDgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACADIAOAEQANADAGAEQAFAEAAAIQAAAIgHAGQgHAHgOAAQgMAAgIgGg");
	this.shape_24.setTransform(78.4,14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_25.setTransform(71.8515,14.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgVAnQgGgFAAgJIAAgCIATACQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQACACAEgBQAHAAADgBQACgBABgEIABgHIAAgJQgHAKgLAAQgMAAgIgKQgFgJAAgMQAAgPAHgIQAIgIALAAQAKAAAIAKIAAgJIAPAAIAAA2QAAAMgBAFQgCAGgEADQgDACgFACQgGACgIABQgPAAgHgGgAgJgaQgDAEAAAJQAAALADADQAEAFAFgBQAGABAEgFQAEgEAAgJQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_26.setTransform(64.725,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgXAbQgFgFAAgIQAAgFADgEQACgFAFgBQAEgCAIgBQALgCAFgDIAAgBQgBgFgCgCQgCgCgFAAQgFAAgCABQgDACgCAFIgOgDQACgJAGgFQAHgDALAAQALAAAFACQAFADACAEQADAEAAAKIAAASIABANIACAIIgQAAIgCgFIAAgCQgFAFgFACQgDACgFAAQgKgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQACADAEAAQAEAAAEgDQADgCABgDIABgIIAAgEIgKADg");
	this.shape_27.setTransform(57.9,14.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_28.setTransform(52.875,13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgVAnQgGgFAAgJIAAgCIATACQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQACACAEgBQAHAAADgBQACgBABgEIABgHIAAgJQgHAKgLAAQgMAAgIgKQgFgJAAgMQAAgPAHgIQAIgIALAAQAKAAAIAKIAAgJIAPAAIAAA2QAAAMgBAFQgCAGgEADQgDACgFACQgGACgIABQgPAAgHgGgAgJgaQgDAEAAAJQAAALADADQAEAFAFgBQAGABAEgFQAEgEAAgJQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_29.setTransform(47.375,15.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgWAiQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgDQgDADAAAHIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_30.setTransform(40.5015,13);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGACQAGADAEAFQADAHABAHQgBAKgFAGQgGAGgLABQAFADAEAEQAEAEAGAKIALARgAgVgGIAOAAQALAAADgBQADgBACgCQABgDAAgEQAAgEgBgDQgDgDgEAAIgMAAIgOAAg");
	this.shape_31.setTransform(33.3,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).wait(3));

	// Calque_2
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA7BrQAAgDgCgCIgGgBIgVgBQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgDAEIgDAGIgOgGIACgHIABgDQAAgEgCgCIgQgRQgDgEgDABIgDAAIgHADIAAAAIgFgQIAHgCIADgDIACgFIAAgVQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgDgDIgHgDIAHgOIAGACIAEABQADAAACgDIARgPQADgCAAgEIAAgDIgDgGIAAgBIAPgFIAAAAIACAHIAEADIAEABIAWABQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAIADgDIAEgHIAAAAIAAAAIAOAHIAAAAIgDAFIAAAEQAAAEACADIAQAPQADAEAFAAIACgBIAGgCIABAAIAFAOIAAABIgGACIgFAEQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgBAWIABAEIAEAEIAGADIABAAIAAAAIgHAOIgGgDIgDgBQgEABgDACIgQAPQgDAEAAAEIAAACIACAHIgPAGgAAhAKQgTAJgBAUIABAKQAJASAUACQAFgBAFgCQATgHAAgUQAAgGgBgFQgJgTgTAAIgKABgAg/AFIAAgFQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgPgFIgCgCQgDABgDACIgDADIgIgIIADgDQACgDAAgCIgBgDIgHgRQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgEgBIgFAAIAAgMIAFAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAGgPIAAgCQAAgDgCgDIgDgDIAIgIIADADQACADADAAIAEgCIAQgHQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgFIAMAAIAAAFQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAPAGIADAAQADAAADgCIADgDIAIAIIgDADQgDADAAACIABAEIAHAQQABAAAAABQAAAAAAABQABAAAAABQABAAAAAAQAAABABAAQABAAAAABQABAAAAAAQABAAAAAAIAEAAIAAAMIgEAAIgEABQAAAAgBAAQAAABgBAAQAAABAAAAQAAABgBAAIgFAPIgBADQAAADACADIADADIgIAIIgDgDQgCgDgDAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgRAHIgDADQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAFgAhSg1QACAWAXACQAVgCADgWQgDgWgVgDQgXADgCAWg");
	this.shape_32.setTransform(12.0602,12.6946,0.72,0.7199);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AA4B0IgDgHIgBgBIgBAAIgVAAIgBAAIAAAAIgEAIQgCADgEAAIgEAAIgNgHQgEgCAAgEIABgEIACgGIAAgCIgBAAIgOgRIgCgBIgBAAIgGADIgDABQgEgBgCgEIgGgPIAAgDQgBgEAGgCIAGgDIABgBIAAgWIAAAAIgHgEQgEgCAAgEIAAgEIAHgMQACgEADAAIgCgCIAAAAIgSAHIAAAGQAAAGgGAAIgNAAQgFAAgBgGIAAgGIgPgGIgBAAIgEAFIgEABQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgJgJQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAIAEgEIAAgBIgHgRIAAAAIAAAAIgHAAQgGAAAAgGIAAgNQAAgFAGgBIAHAAIAAgBIAGgOIAAAAIgFgFQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAJgJQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAIAEAFIAAgBIASgHIAAgHQABgFAFAAIANAAQAGAAAAAFIAAAHIAQAGIAAAAIAFgEQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABABAAIAIAIQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEAEIAAABIAIAQIAAABIAFAAQAGABAAAFIAAANQAAAGgGAAIgFAAIAAAAIgGAQIAAAAIAEAFQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABIAAAAIgJAIIgBABIABABIABAAIABgBIARgRIAAgBIgCgHIgBgDQAAgEAEgCIAQgGIACgBQAFAAACAGIACAGIAAABIAXABIABgBIABAAIACgHQACgEAFAAIADABIAOAGQAEACAAAFIgBADIgCAGIABABIAQARIACABIAGgBIADgBQAEAAACADIAFAPIABACQAAAFgFADIgGABIgBABIAAABIgBAWIABABIAHADQADADABAEIgBACIgHAPQgCAEgEAAIgDgBIgGgCIgCAAIAAAAIgSAQIAAACIAAAAIADAHIAAACQAAAFgFACIgOAFIgDAAQgFAAgBgEgAAzBlIAGABQACACAAADIADAHIAPgGIgCgHIAAgCQAAgEADgEIAQgPQADgCAEgBIADABIAGADIAHgOIAAAAIgBAAIgGgDIgEgEIgBgEIABgWQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFgEIAGgCIAAgBIgFgOIgBAAIgGACIgCABQgFAAgDgEIgQgPQgCgDAAgEIAAgEIADgFIAAAAIgOgHIAAAAIAAAAIgEAHIgDADQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgWgBIgEgBIgEgDIgCgHIAAAAIgPAFIAAABIADAGIAAADQAAAEgDACIgRAPQgCADgDAAIgEgBIgGgCIgHAOIAHADIADADQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAVIgCAFIgDADIgHACIAFAQIAAAAIAHgDIADAAQADgBADAEIAQARQACACAAAEIgBADIgCAHIAOAGIADgGIADgEQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAgAhTgLIAPAFQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAAFIAMAAIAAgFQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIADgDIARgHQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQADAAACADIADADIAIgIIgDgDQgCgDAAgDIABgDIAFgPQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAEgBIAEAAIAAgMIgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgHgQIgBgEQAAgCADgDIADgDIgIgIIgDADQgDACgDAAIgDAAIgPgGQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgFIgMAAIAAAFQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgQAHIgEACQgDAAgCgDIgDgDIgIAIIADADQACADAAADIAAACIgGAPQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgFAAIAAAMIAFAAIAEABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAIAHARIABADQAAACgCADIgDADIAIAIIADgDQADgCADgBIACACgAAOAxIgBgKQABgUATgJIAKgBQATAAAJATQABAFAAAGQAAAUgTAHQgFACgFABQgUgCgJgSgAAjARQgOAHgBAPIABAHQAHAPAPABQADAAAFgCQAPgGAAgPIgBgIQgHgPgPAAIgIABgAhSg1QACgWAXgDQAVADADAWQgDAWgVACQgXgCgCgWgAhLg1QACAQAQABQAPgBACgQQgCgQgPgCQgQACgCAQg");
	this.shape_33.setTransform(12.0602,12.6946,0.72,0.7199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).wait(4));

	// Calque_1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#666666").ss(0.5,1,1).p("AhXh8ICvAAQAlAAAAAlIAACvQAAAlglAAIivAAQglAAAAglIAAivQAAglAlAAg");
	this.shape_34.setTransform(12.5,12.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8080FF").s().p("AhWB9QgmAAAAgmIAAitQAAgmAmAAICtAAQAmAAAAAmIAACtQAAAmgmAAg");
	this.shape_35.setTransform(12.5,12.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6699FF").s().p("AhWB9QgmAAAAgmIAAitQAAgmAmAAICtAAQAmAAAAAmIAACtQAAAmgmAAg");
	this.shape_36.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,136.7,27);


(lib.bt_OK_General = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AgEhjIAJAAIAADHIgJAAg");
	this.shape.setTransform(-10.55,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape_1.setTransform(-10.55,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AALAkIgVgdIgEAGIAAAXIgTAAIAAhHIATAAIAAAhIAZghIAVAAIgcAhIAeAmg");
	this.shape_2.setTransform(2.875,-2.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgbAcQgKgLAAgRQAAgRAKgKQAKgKARAAQARAAAKAKQAKAKAAARQAAARgKALQgKAKgRAAQgRAAgKgKgAgGgWQgDABgCADQgDADgCAFQgBAFAAAFQAAAGABAFQACAFADACIAFAFIAGABIAHgBIAGgFQADgDAAgEQACgFAAgGQAAgGgCgEQgBgFgCgDQgDgDgDgBIgHgBQgDAAgDABg");
	this.shape_3.setTransform(-5.7,-2.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

	// Calque_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(0.5,1,1).p("ABjAAQAAApgeAeQgcAdgpAAQgoAAgdgdQgdgeAAgpQAAgoAdgeQAdgdAoAAQApAAAcAdQAeAeAAAog");
	this.shape_4.setTransform(-2,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#CCCCCC"],[0,1],0,0,0,0,0,10.1).s().p("AhFBHQgdgeAAgpQAAgoAdgeQAdgdAoAAQAoAAAdAdQAeAegBAoQABApgeAeQgdAdgoAAQgoAAgdgdg");
	this.shape_5.setTransform(-2,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-13.4,21.700000000000003,22.1);


(lib.btInvInfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2C2E").ss(1,1,1).p("AlsiVILZAAIAAErIrZAAg");
	this.shape.setTransform(36.5,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlsCWIAAkrILZAAIAAErg");
	this.shape_1.setTransform(36.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,75,32);


(lib.btFermer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAABfIikCmIhdhiIChijIihilIBdhgICkCkIChikIBhBgIilClIClCjIhhBig");
	this.shape.setTransform(25.825,26.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AAABfIikCmIhdhiIChijIihilIBdhgICkCkIChikIBhBgIilClIClCjIhhBig");
	this.shape_1.setTransform(25.825,26.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AirkxIABAAIFEAAIABAAICXAAIAAJjIpjAAIAApjg");
	this.shape_2.setTransform(26.5,30.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AkxEyIAApjICGAAIABAAIFEAAIABAAICXAAIAAJjg");
	this.shape_3.setTransform(26.5,30.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ACjAAIAAAAIABAAgAijAAIABAAIAAAAg");
	this.shape_4.setTransform(25.65,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-0.9,63.2,63.199999999999996);


(lib.TSD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// btInfo
	this.btInfo = new lib.btInvInfo();
	this.btInfo.name = "btInfo";
	this.btInfo.parent = this;
	this.btInfo.setTransform(37.25,9.95,1.0208,0.6667,0,0,0,36.5,14.9);
	new cjs.ButtonHelper(this.btInfo, 0, 1, 2, false, new lib.btInvInfo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btInfo).wait(3));

	// TEXT
	this.sValue = new cjs.Text("NORMAL", "bold 15px 'Arial'", "#FFFFFF");
	this.sValue.name = "sValue";
	this.sValue.textAlign = "center";
	this.sValue.lineHeight = 23;
	this.sValue.lineWidth = 71;
	this.sValue.parent = this;
	this.sValue.setTransform(37.25,3.45);
	this.sValue.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.sValue).wait(1).to({text:"DEFAUT"},0).wait(1).to({text:"NO COM"},0).wait(1));

	// FOND
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AlZhjIKxAAQAfAAAAAZIAACWQAAAYgfAAIqxAAQgdAAAAgYIAAiWQAAgZAdAAg");
	this.shape.setTransform(37.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("AlZBkQgdAAAAgZIAAiVQAAgZAdAAIKxAAQAfAAAAAZIAACVQAAAZgfAAg");
	this.shape_1.setTransform(37.5,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AlZBkQgdAAAAgZIAAiVQAAgZAdAAIKxAAQAfAAAAAZIAACVQAAAZgfAAg");
	this.shape_2.setTransform(37.5,10);

	this.mcO = new lib.mcTSD_NoCOM();
	this.mcO.name = "mcO";
	this.mcO.parent = this;
	this.mcO.setTransform(37.5,10,1,1,0,0,0,37.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.mcO}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-3.5,88,34);


(lib.TR_Temperature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.sValue = new cjs.Text("°C", "bold 12px 'Arial'", "#FFFFFF");
	this.sValue.name = "sValue";
	this.sValue.lineHeight = 20;
	this.sValue.lineWidth = 18;
	this.sValue.parent = this;
	this.sValue.setTransform(45.85,3.7);
	this.sValue.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.sINPUT = new lib.an_TextInput({'id': 'sINPUT', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT.setTransform(20.25,8.75,0.3999,0.709,0,0,0,44.4,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sINPUT},{t:this.sValue}]}).wait(1));

	// Calque_1
	this.btOK = new lib.bt_OK_General();
	this.btOK.name = "btOK";
	this.btOK.parent = this;
	this.btOK.setTransform(72.5,11.9,0.7349,0.7228,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btOK, 0, 1, 2, false, new lib.bt_OK_General(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btOK).wait(1));

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AlwhjILfAAQAhAAAAAZIAACWQAAAYghAAIrfAAQgfAAAAgYIAAiWQAAgZAfAAg");
	this.shape.setTransform(40,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8080FF").s().p("AlwBkQgfAAAAgZIAAiVQAAgZAfAAILfAAQAhAAAAAZIAACVQAAAZghAAg");
	this.shape_1.setTransform(40,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TR_Temperature, new cjs.Rectangle(-2.7,-3.3,83.7,34), null);


(lib.TM_T = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// btInfo
	this.btInfo = new lib.btInvInfo();
	this.btInfo.name = "btInfo";
	this.btInfo.parent = this;
	this.btInfo.setTransform(31.5,9.95,0.863,0.6667,0,0,0,36.5,14.9);
	new cjs.ButtonHelper(this.btInfo, 0, 1, 2, false, new lib.btInvInfo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btInfo).wait(5));

	// TEXT
	this.sValue = new cjs.Text("°C", "bold 15px 'Arial'", "#FFFFFF");
	this.sValue.name = "sValue";
	this.sValue.textAlign = "center";
	this.sValue.lineHeight = 23;
	this.sValue.lineWidth = 61;
	this.sValue.parent = this;
	this.sValue.setTransform(32.25,2.95);
	this.sValue.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.sValue).wait(5));

	// FOND
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AkihjIJDAAQAaAAAAAZIAACWQAAAYgaAAIpDAAQgYAAAAgYIAAiWQAAgZAYAAg");
	this.shape.setTransform(31.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD800").s().p("AkiBkQgYAAAAgZIAAiVQAAgZAYAAIJDAAQAaAAAAAZIAACVQAAAZgaAAg");
	this.shape_1.setTransform(31.5,10);

	this.mcR = new lib.mcAlarmeText();
	this.mcR.name = "mcR";
	this.mcR.parent = this;
	this.mcR.setTransform(31.5,10,1,1,0,0,0,31.5,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8080FF").s().p("AkiBkQgYAAAAgZIAAiVQAAgZAYAAIJDAAQAaAAAAAZIAACVQAAAZgaAAg");
	this.shape_2.setTransform(31.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.mcR}]},3).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-4,78,34);


(lib.TM_Dbm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// btInfo
	this.btInfo = new lib.btInvInfo();
	this.btInfo.name = "btInfo";
	this.btInfo.parent = this;
	this.btInfo.setTransform(37.25,9.95,1.0208,0.6667,0,0,0,36.5,14.9);
	new cjs.ButtonHelper(this.btInfo, 0, 1, 2, false, new lib.btInvInfo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btInfo).wait(3));

	// TEXT
	this.sValue = new cjs.Text(" dBm", "bold 15px 'Arial'", "#FFFFFF");
	this.sValue.name = "sValue";
	this.sValue.textAlign = "center";
	this.sValue.lineHeight = 23;
	this.sValue.lineWidth = 71;
	this.sValue.parent = this;
	this.sValue.setTransform(37.25,3.45);
	this.sValue.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.sValue).wait(3));

	// FOND
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AlZhjIKxAAQAfAAAAAZIAACWQAAAYgfAAIqxAAQgdAAAAgYIAAiWQAAgZAdAAg");
	this.shape.setTransform(37.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD800").s().p("AlZBkQgdAAAAgZIAAiVQAAgZAdAAIKxAAQAfAAAAAZIAACVQAAAZgfAAg");
	this.shape_1.setTransform(37.5,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AlZBkQgdAAAAgZIAAiVQAAgZAdAAIKxAAQAfAAAAAZIAACVQAAAZgfAAg");
	this.shape_2.setTransform(37.5,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(0.5,1,1).p("AkihjIJDAAQAaAAAAAZIAACWQAAAYgaAAIpDAAQgYAAAAgYIAAiWQAAgZAYAAg");
	this.shape_3.setTransform(37.5,10,1.1905,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8080FF").s().p("AkiBkQgYAAAAgZIAAiVQAAgZAYAAIJDAAQAaAAAAAZIAACVQAAAZgaAAg");
	this.shape_4.setTransform(37.5,10,1.1905,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-3.5,88,34);


(lib.TM_Db = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// btInfo
	this.btInfo = new lib.btInvInfo();
	this.btInfo.name = "btInfo";
	this.btInfo.parent = this;
	this.btInfo.setTransform(37.25,9.95,1.0208,0.6667,0,0,0,36.5,14.9);
	new cjs.ButtonHelper(this.btInfo, 0, 1, 2, false, new lib.btInvInfo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btInfo).wait(3));

	// TEXT
	this.sValue = new cjs.Text(" dB", "bold 15px 'Arial'", "#FFFFFF");
	this.sValue.name = "sValue";
	this.sValue.textAlign = "center";
	this.sValue.lineHeight = 23;
	this.sValue.lineWidth = 71;
	this.sValue.parent = this;
	this.sValue.setTransform(37.25,3.45);
	this.sValue.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.sValue).wait(3));

	// FOND
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AlZhjIKxAAQAfAAAAAZIAACWQAAAYgfAAIqxAAQgdAAAAgYIAAiWQAAgZAdAAg");
	this.shape.setTransform(37.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD800").s().p("AlZBkQgdAAAAgZIAAiVQAAgZAdAAIKxAAQAfAAAAAZIAACVQAAAZgfAAg");
	this.shape_1.setTransform(37.5,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AlZBkQgdAAAAgZIAAiVQAAgZAdAAIKxAAQAfAAAAAZIAACVQAAAZgfAAg");
	this.shape_2.setTransform(37.5,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8080FF").s().p("AlZBkQgdAAAAgZIAAiVQAAgZAdAAIKxAAQAfAAAAAZIAACVQAAAZgfAAg");
	this.shape_3.setTransform(37.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-3.5,88,34);


(lib.mcPopUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anim2
	this.btRegAlarmes = new lib.btReg();
	this.btRegAlarmes.name = "btRegAlarmes";
	this.btRegAlarmes.parent = this;
	this.btRegAlarmes.setTransform(61.65,336.25,0.9993,1,0,0,0,39.6,10.5);
	new cjs.ButtonHelper(this.btRegAlarmes, 0, 1, 2, false, new lib.btReg(), 3);

	this.mcF2 = new lib.mcFrequence();
	this.mcF2.name = "mcF2";
	this.mcF2.parent = this;
	this.mcF2.setTransform(250.05,245.85,0.3921,0.3929,0,0,0,35.1,23.1);

	this.mcF1 = new lib.mcFrequence();
	this.mcF1.name = "mcF1";
	this.mcF1.parent = this;
	this.mcF1.setTransform(250.05,200.85,0.3921,0.3929,0,0,0,35.1,23.1);

	this.mcTR_T = new lib.TR_Temperature();
	this.mcTR_T.name = "mcTR_T";
	this.mcTR_T.parent = this;
	this.mcTR_T.setTransform(152,144.75);

	this.mcTSD_5 = new lib.TSD();
	this.mcTSD_5.name = "mcTSD_5";
	this.mcTSD_5.parent = this;
	this.mcTSD_5.setTransform(438.1,291.1,1.0001,1.0006,0,0,0,23.6,7.6);

	this.mcTSD_4 = new lib.TSD();
	this.mcTSD_4.name = "mcTSD_4";
	this.mcTSD_4.parent = this;
	this.mcTSD_4.setTransform(438.1,246.1,1.0001,1.0006,0,0,0,23.6,7.6);

	this.mcTSD_3 = new lib.TSD();
	this.mcTSD_3.name = "mcTSD_3";
	this.mcTSD_3.parent = this;
	this.mcTSD_3.setTransform(438.1,201.1,1.0001,1.0006,0,0,0,23.6,7.6);

	this.mcTSD_2 = new lib.TSD();
	this.mcTSD_2.name = "mcTSD_2";
	this.mcTSD_2.parent = this;
	this.mcTSD_2.setTransform(438.1,156.1,1.0001,1.0006,0,0,0,23.6,7.6);

	this.mcTSD_1 = new lib.TSD();
	this.mcTSD_1.name = "mcTSD_1";
	this.mcTSD_1.parent = this;
	this.mcTSD_1.setTransform(414.5,104.5,1.0001,1.0006);

	this.mcTM_dB = new lib.TM_Db();
	this.mcTM_dB.name = "mcTM_dB";
	this.mcTM_dB.parent = this;
	this.mcTM_dB.setTransform(176.35,246.1,1.0001,1.0006,0,0,0,23.6,7.6);

	this.mcTM_dBm = new lib.TM_Dbm();
	this.mcTM_dBm.name = "mcTM_dBm";
	this.mcTM_dBm.parent = this;
	this.mcTM_dBm.setTransform(176.35,199.5,1.0001,1.0006,0,0,0,23.6,7.6);

	this.mcTM_T = new lib.TM_T();
	this.mcTM_T.name = "mcTM_T";
	this.mcTM_T.parent = this;
	this.mcTM_T.setTransform(176.35,111.1,1.0001,1.0006,0,0,0,23.6,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcTM_T},{t:this.mcTM_dBm},{t:this.mcTM_dB},{t:this.mcTSD_1},{t:this.mcTSD_2},{t:this.mcTSD_3},{t:this.mcTSD_4},{t:this.mcTSD_5},{t:this.mcTR_T},{t:this.mcF1},{t:this.mcF2},{t:this.btRegAlarmes}]}).wait(1));

	// anim
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMgBQANAAAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgHgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape.setTransform(428.3515,67.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgWAjQgHgJAAgPQAAgPAHgIQAIgIALAAQAJAAAIAIIAAgfIAQAAIAABVIgPAAIAAgJQgEAFgFADQgFADgEAAQgLAAgIgJgAgJgDQgEAEAAAJQAAAKADAEQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_1.setTransform(421.225,66.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_2.setTransform(414.025,67.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgPAdQgIgFgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgFQAGgDAJgBQAOAAAJAKQAJAJAAANQAAAOgJAJQgJAJgOAAQgIAAgHgDgAgKgNQgFAEABAJQgBAJAFAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_3.setTransform(406.7,67.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAlQgJgHgCgPIARgBQABAIAFAEQAFAEAHAAQAIAAAEgEQAFgDAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgLQAAgGAEgFQAEgHAHgCQAHgEAJAAQAQABAIAGQAIAIAAALIgRABQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAACACACQAEAEALACQANAEAGADQAGADAEAFQADAFAAAIQAAAHgEAHQgEAHgIADQgHACgLAAQgQAAgIgHg");
	this.shape_4.setTransform(398.925,66.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgSAcQgIgGgCgJIAQgCQACAEADADQADACAFABQAGgBADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgCQgSgFgFgDQgIgFAAgJQAAgHAHgGQAGgFANgBQAMABAHADQAFAFADAIIgQACQgBgDgCgCQgEgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABACIAOAFQAOADAFAEQAFADAAAJQAAAIgHAHQgIAFgNAAQgMAAgHgEg");
	this.shape_5.setTransform(388.2,67.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_6.setTransform(383.025,66.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_7.setTransform(377.325,67.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_8.setTransform(371.675,66.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgGACgEQADgDAFgCQAEgCAIgCQALgBAEgCIAAgCQABgFgDgCQgCgCgFAAQgFAAgDACQgCABgBAFIgPgDQACgJAGgFQAHgDALgBQALABAFACQAFADADAEQACADAAAMIAAASIAAALIADAJIgQAAIgCgFIgBgCQgDAEgGADQgDABgGAAQgJABgGgGgAAAADQgHACgCABQgDADAAADQAAAEADADQADACAEAAQADAAAEgDQADgDABgDIAAgIIAAgDIgJACg");
	this.shape_9.setTransform(366.35,67.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_10.setTransform(361.025,66.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgXAlQgJgHgCgPIARgBQABAIAFAEQAFAEAHAAQAIAAAEgEQAFgDAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgLQAAgGAEgFQAEgHAHgCQAHgEAJAAQAQABAIAGQAIAIAAALIgRABQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAACACACQAEAEALACQANAEAGADQAGADAEAFQADAFAAAIQAAAHgEAHQgEAHgIADQgHACgLAAQgQAAgIgHg");
	this.shape_11.setTransform(354.925,66.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_12.setTransform(376.075,294.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgEQACgFAFAAQAEgDAIgCQALgCAFgCIAAgBQgBgFgCgCQgCgCgFAAQgFAAgCABQgDADgCAEIgOgDQACgJAGgEQAHgEALgBQALAAAFADQAFACACAEQADAFAAAKIAAASIABANIACAIIgQAAIgCgFIgBgCQgEAFgFABQgDADgFAAQgKAAgGgGgAAAADQgHACgBACQgEACAAADQAAAEADACQACADAEAAQAEAAAEgDQADgDABgDIABgHIAAgEIgKACg");
	this.shape_13.setTransform(371.1,295.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_14.setTransform(364.075,295.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATACQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQACABAEABQAHAAADgCQACgCABgDIABgHIAAgJQgHAKgLAAQgMAAgIgLQgFgIAAgMQAAgPAHgJQAIgHALgBQAKAAAIALIAAgJIAPAAIAAA3QAAALgBAFQgCAGgEADQgDADgFABQgGACgIAAQgPABgHgGgAgJgbQgDAFAAAKQAAAKADADQAEAEAFABQAGgBAEgEQAEgDAAgKQAAgJgEgGQgEgEgGAAQgFAAgEAEg");
	this.shape_15.setTransform(356.575,296.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_16.setTransform(351.375,294.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIAQgDQACAFADADQADACAFAAQAGAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgBQgSgFgFgEQgIgEAAgIQAAgJAGgFQAHgGANAAQAMABAHAEQAFADADAJIgQADQAAgEgDgCQgEgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACAEIAOAEQANADAGAEQAFAEAAAHQAAAJgHAGQgIAGgNABQgMgBgHgFg");
	this.shape_17.setTransform(346.25,295.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgWAiQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAJAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgDQgDADAAAGIAXAAQAAgGgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_18.setTransform(336.3515,294.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_19.setTransform(331.075,294.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_20.setTransform(327.375,294.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_21.setTransform(324.025,294.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFADgEQACgFAEAAQAFgDAJgCQAKgCAFgCIAAgBQAAgFgDgCQgCgCgGAAQgEAAgCABQgDADgCAEIgPgDQADgJAGgEQAHgEALgBQAKAAAGADQAFACACAEQACAFAAAKIAAASIABANIADAIIgQAAIgBgFIgBgCQgFAFgEABQgEADgFAAQgKAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgDABgDIABgHIAAgEIgKACg");
	this.shape_22.setTransform(319.05,295.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_23.setTransform(312.025,295.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAdAtIgLgHQgJADgJAAQgUAAgLgLQgLgMAAgVQAAgUALgMQALgMATAAQASAAAMAMQALAMAAAUQAAAKgDAJQgDAGgEAHQAGAEAHADIgGAMIgIgDgAgSgYQgGAGAAAPQAAAPAGAHQAHAIAKAAIAGgCIgKgFIAFgKQAIADAHAGQAEgEACgFQABgGAAgHQAAgPgHgGQgGgIgKAAQgKAAgHAIg");
	this.shape_24.setTransform(303.85,294.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_25.setTransform(394.675,249.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFADgEQACgFAEAAQAFgDAJgCQAKgCAFgBIAAgCQAAgFgDgCQgCgCgGAAQgEAAgCABQgDADgCAEIgPgDQADgJAGgEQAHgEALgBQAKAAAGADQAFACACAEQACAFAAAKIAAASIABANIADAIIgQAAIgBgFIgBgCQgFAFgEABQgEADgFAAQgKAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgDABgDIABgHIAAgEIgKACg");
	this.shape_26.setTransform(389.7,250.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_27.setTransform(382.675,250.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATACQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQACABAEABQAHAAADgCQACgCABgDIABgHIAAgJQgHAKgLAAQgMAAgIgLQgFgIAAgMQAAgPAHgJQAIgHALgBQAKAAAIALIAAgJIAPAAIAAA3QAAALgBAFQgCAGgEADQgDADgFABQgGACgIAAQgPABgHgGgAgJgbQgDAFAAAKQAAAKADADQAEAEAFABQAGgBAEgEQAEgDAAgKQAAgJgEgGQgEgEgGAAQgFAAgEAEg");
	this.shape_28.setTransform(375.175,251.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_29.setTransform(369.975,249.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgTAbQgHgFgCgJIARgDQAAAFADADQAEACAEAAQAHAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgBQgSgFgGgEQgHgEAAgIQAAgJAGgFQAHgGANAAQAMABAGAEQAHADACAJIgPADQgCgEgDgCQgCgCgFAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACAEIAOAEQANADAGAEQAFAEAAAHQAAAJgHAGQgIAGgOABQgLgBgIgFg");
	this.shape_30.setTransform(364.85,250.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAJAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_31.setTransform(354.9515,250.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJANAAQALABAHAEQAHAFADAKIgRADQAAgFgDgCQgDgDgFABQgFAAgEADQgDAFAAAKQAAAKADAFQAEAEAFAAQAFAAADgCQADgDABgHIAQADQgCALgHAFQgHAGgMABQgNAAgIgJg");
	this.shape_32.setTransform(348.425,250.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_33.setTransform(341.325,250.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFADgEQACgFAEAAQAFgDAJgCQAKgCAFgBIAAgCQAAgFgDgCQgCgCgGAAQgEAAgCABQgDADgCAEIgPgDQADgJAGgEQAHgEALgBQAKAAAGADQAFACACAEQACAFAAAKIAAASIABANIADAIIgQAAIgBgFIgBgCQgFAFgEABQgEADgFAAQgKAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgDABgDIABgHIAAgEIgKACg");
	this.shape_34.setTransform(334.35,250.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIARgDQABAFACADQAEACAFAAQAGAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgFgBQgTgFgFgEQgIgEAAgIQAAgJAHgFQAGgGANAAQAMABAGAEQAGADADAJIgQADQgBgEgCgCQgDgCgFAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIABAEIAPAEQANADAFAEQAFAEAAAHQAAAJgHAGQgIAGgNABQgMgBgHgFg");
	this.shape_35.setTransform(327.55,250.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIARgDQABAFACADQAEACAEAAQAHAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgFgBQgTgFgFgEQgIgEAAgIQAAgJAHgFQAGgGANAAQAMABAGAEQAGADADAJIgQADQgBgEgCgCQgEgCgEAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIABAEIAPAEQANADAFAEQAFAEAAAHQAAAJgHAGQgIAGgOABQgLgBgHgFg");
	this.shape_36.setTransform(320.9,250.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_37.setTransform(316.025,249.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_38.setTransform(310.675,250.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AggArIAAhVIAcAAQAPAAAFABQAHACAFAHQAFAGAAALQAAAHgDAGQgDAEgEADQgEAEgFABIgRABIgMAAIAAAggAgPgDIAKAAQAJAAAEgCQADAAACgDQACgEAAgDQAAgFgDgDQgCgDgFgBIgLAAIgJAAg");
	this.shape_39.setTransform(303.15,249.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgTAbQgHgFgCgJIAQgDQABAGADACQAEADAEAAQAHAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgFgCQgTgEgGgEQgHgEAAgIQAAgJAGgFQAHgGANABQAMAAAGADQAHAEACAJIgPADQgCgEgDgCQgCgCgFAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACADIAPAEQAMADAGAEQAFAEAAAIQAAAIgHAGQgIAHgOAAQgLAAgIgGg");
	this.shape_40.setTransform(349.55,203.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAFgBQAEgCAIgBQALgCAEgDIAAgBQABgFgDgCQgCgCgGAAQgEAAgDABQgCACgBAFIgQgDQADgJAGgFQAGgDAMAAQALAAAFACQAFADADAEQABAEABAKIAAASIAAANIADAIIgQAAIgCgFIgBgCQgDAFgGACQgDACgGAAQgJgBgFgFgAAAAEQgGABgDACQgDACAAAEQAAADADACQACADAFAAQADAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_41.setTransform(343.05,203.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgjArIAAhVIAiAAIAPABQAFABAEADQAEACACAEQADAFAAAGQAAAGgDAFQgEAFgFADQAIABAEAFQAEAFAAAIQAAAGgDAFQgCAGgFADQgFADgHACIgUAAgAgSAcIAQAAIALAAQAEAAADgDQACgDAAgEQAAgEgCgEQgCgCgDgBQgEgBgLAAIgOAAgAgSgIIAMAAIALAAQAFgBACgCQADgCAAgFQAAgEgCgDQgCgCgFAAIgOAAIgKAAg");
	this.shape_42.setTransform(335.525,202.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_43.setTransform(326.025,202.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_44.setTransform(322.675,202.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_45.setTransform(317.325,203.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_46.setTransform(310.3015,203.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgXAlQgJgIgCgOIARgCQABAJAFAEQAFAEAHAAQAIAAAEgDQAFgEAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgKQAAgHAEgGQAEgFAHgEQAHgCAJAAQAQgBAIAIQAIAHAAAMIgRAAQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAADACABQAEAEALADQANACAGADQAGAEAEAEQADAGAAAIQAAAIgEAGQgEAGgIAEQgHADgLAAQgQgBgIgHg");
	this.shape_47.setTransform(302.925,202.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_48.setTransform(355.725,159.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_49.setTransform(350.025,160.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgGACgDQADgEAFgCQAEgCAIgBQALgDAEgCIAAgBQABgFgDgCQgCgCgGAAQgEAAgDABQgCACgBAFIgQgDQADgJAGgFQAGgDAMAAQALgBAFADQAFACADAFQABAEABAKIAAATIAAAMIADAIIgQAAIgCgFIgBgCQgDAFgGACQgDABgGAAQgJAAgFgFgAAAAEQgGABgDABQgDADAAAEQAAADADACQACADAFAAQADAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_50.setTransform(343.05,160.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AARArIAAglIghAAIAAAlIgRAAIAAhVIARAAIAAAiIAhAAIAAgiIARAAIAABVg");
	this.shape_51.setTransform(335.375,158.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_52.setTransform(326.025,158.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_53.setTransform(322.675,158.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_54.setTransform(317.325,160.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgIAMAAQANgBAIAKQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKgBQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_55.setTransform(310.3015,160.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgXAlQgJgIgCgOIARgBQABAIAFAEQAFAEAHAAQAIAAAEgDQAFgEAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgKQAAgHAEgGQAEgFAHgEQAHgDAJAAQAQAAAIAIQAIAHAAAMIgRAAQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAACACACQAEADALAEQANACAGAEQAGADAEAFQADAFAAAIQAAAIgEAGQgEAGgIAEQgHACgLAAQgQAAgIgHg");
	this.shape_56.setTransform(302.925,158.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAASIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_57.setTransform(385.0015,116.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_58.setTransform(380.025,115.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgIANAAQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgDgFAAQgFAAgEAFQgDAEAAAKQAAAKADAEQAEAFAFAAQAFAAADgDQADgDABgGIAQADQgCALgHAFQgHAHgMgBQgNAAgIgIg");
	this.shape_59.setTransform(375.125,116.55);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_60.setTransform(368.025,116.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgQAdQgHgFgEgHQgEgIAAgJQAAgIAEgIQAEgHAHgFQAIgDAIAAQAOgBAJAKQAJAJAAANQAAAOgJAJQgJAJgOAAQgIAAgIgDgAgKgNQgFAEABAJQgBAJAFAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_61.setTransform(360.7,116.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgjArIAAhVIAiAAIAPABQAFABAEADQAEACACAFQADAEAAAGQAAAGgDAFQgEAFgFADQAIABAEAFQAEAGAAAHQAAAGgDAFQgCAGgFADQgFAEgHABIgUAAgAgSAcIAQAAIALAAQAEAAADgDQACgDAAgFQAAgDgCgEQgCgCgDgBQgEgCgLABIgOAAgAgSgIIAMAAIALAAQAFAAACgDQADgDAAgEQAAgEgCgDQgCgCgFAAIgOAAIgKAAg");
	this.shape_62.setTransform(352.825,115.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAASIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_63.setTransform(341.6515,116.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_64.setTransform(336.5,116.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_65.setTransform(330.025,116.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_66.setTransform(324.375,115.525);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgdAsIAAhVIAPAAIAAAJQADgFAFgDQAFgCAGAAQAKAAAIAIQAIAIAAAPQgBAPgHAJQgIAIgKAAQgFAAgEgBQgEgDgFgFIAAAggAgJgZQgEAFAAAJQAAALAEADQAEAFAFABQAGAAAEgFQADgEABgLQAAgJgFgFQgEgFgFAAQgFAAgEAFg");
	this.shape_67.setTransform(318.85,117.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_68.setTransform(311.325,116.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGADQAGABAEAHQADAFAAAIQAAAKgFAGQgGAGgLABQAFADAEAFQAEADAGAKIALARgAgVgGIAOAAQALAAADgBQADgBACgCQABgDABgEQgBgEgBgDQgDgCgEgBIgMAAIgOAAg");
	this.shape_69.setTransform(303.75,115.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_70.setTransform(55.275,159.075);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgIAMAAQANgBAIAKQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKgBQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_71.setTransform(49.9015,160.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIARgCQABAFACACQAEADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAAAIgFgDQgTgEgFgEQgIgDAAgJQAAgJAHgFQAGgGANABQAMAAAHADQAFAFADAIIgQADQgBgEgCgCQgDgCgFAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABACIAPAFQANADAFAEQAFAEAAAIQAAAIgHAGQgIAHgNgBQgMABgHgGg");
	this.shape_72.setTransform(43.15,160.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgLAsIAAgxIgJAAIAAgMIAJAAIAAgFQAAgIACgEQACgEAEgCQAEgDAGAAQAHAAAHACIgCAMIgIgBQgEAAgBACQgCABAAAFIAAAFIANAAIAAAMIgNAAIAAAxg");
	this.shape_73.setTransform(38.2,158.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgLAsIAAgxIgJAAIAAgMIAJAAIAAgFQAAgIABgEQACgEAFgCQADgDAHAAQAHAAAHACIgCAMIgIgBQgDAAgCACQgBABgBAFIAAAFIANAAIAAAMIgNAAIAAAxg");
	this.shape_74.setTransform(34.2,158.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgdAhQgMgMAAgVQAAgMAEgIQADgHAFgFQAFgGAGgCQAJgDAJgBQATABALALQAMAMAAAUQAAAVgMAMQgLAMgTgBQgSAAgLgLgAgQgVQgHAHAAAOQAAAOAHAIQAHAIAJgBQALABAGgIQAHgIAAgOQAAgOgHgHQgGgIgLABQgKAAgGAHg");
	this.shape_75.setTransform(27.275,158.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_76.setTransform(139.375,249.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_77.setTransform(133.675,250.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAEAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFAAAPIAAATg");
	this.shape_78.setTransform(128.15,250.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgjArIAAhVIAiAAIAPABQAFABAEACQAEADACAEQADAFAAAFQAAAHgDAFQgEAFgFACQAIACAEAFQAEAGAAAHQAAAGgDAFQgCAGgFADQgFADgHABIgUABgAgSAdIAQAAIALgBQAEAAADgEQACgCAAgEQAAgFgCgCQgCgDgDgBQgEgCgLAAIgOAAgAgSgHIAMAAIALgBQAFgBACgCQADgDAAgEQAAgEgCgCQgCgDgFAAIgOAAIgKAAg");
	this.shape_79.setTransform(121.175,249.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgQAtIAUhYIANAAIgVBYg");
	this.shape_80.setTransform(111.675,249.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_81.setTransform(104.975,249.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFADgEQACgFAEAAQAFgDAJgCQAKgCAFgBIAAgCQAAgFgDgCQgCgCgGAAQgEAAgCABQgDADgCAEIgOgDQACgJAGgEQAGgEAMgBQAKAAAGADQAFACACAEQACAFAAAKIAAASIACANIACAIIgQAAIgBgFIgBgCQgFAFgEABQgEADgFAAQgKAAgFgGgAAAADQgHACgBACQgEACAAADQAAAEADACQACADAEAAQAEAAAEgDQADgDABgDIABgHIAAgEIgKACg");
	this.shape_82.setTransform(100,250.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_83.setTransform(92.975,250.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATACQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQACABAEABQAHAAADgCQACgCABgDIABgHIAAgJQgHAKgLAAQgMAAgIgLQgFgIAAgMQAAgPAHgJQAIgHALgBQAKAAAIALIAAgJIAPAAIAAA3QAAALgBAFQgCAGgEADQgDADgFABQgGACgIAAQgPABgHgGgAgJgbQgDAFAAAKQAAAKADADQAEAEAFABQAGgBAEgEQAEgDAAgKQAAgJgEgGQgEgEgGAAQgFAAgEAEg");
	this.shape_84.setTransform(85.475,251.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_85.setTransform(80.275,249.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgTAbQgHgFgCgJIAQgDQABAFAEADQADACAFAAQAGAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgBQgSgFgGgEQgHgEAAgIQAAgJAGgFQAHgGANAAQAMABAHAEQAGADACAJIgPADQgBgEgEgCQgCgCgFAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACAEIAOAEQANADAGAEQAFAEAAAHQAAAJgHAGQgHAGgOABQgMgBgIgFg");
	this.shape_86.setTransform(75.15,250.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_87.setTransform(66.625,249.225);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgDAAQgEAAgCACQgCACgBAFQgCAFAAAPIAAATg");
	this.shape_88.setTransform(62.75,250.175);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgQAcQgHgDgEgIQgEgHAAgKQAAgIAEgIQAEgIAHgDQAIgEAIgBQAOABAJAIQAJAKAAANQAAAOgJAJQgJAKgOAAQgHAAgJgFgAgKgOQgFAGAAAIQAAAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgFAAgFAEg");
	this.shape_89.setTransform(56.3,250.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgdArIAAhUIAPAAIAAAJQADgFAFgCQAFgDAGgBQAKAAAIAJQAIAJgBAOQAAAPgHAJQgIAJgKAAQgFAAgEgDQgFgCgEgEIAAAegAgJgZQgEAFAAAJQAAAKAEAFQAFAEAEAAQAGABAEgFQAEgEAAgLQgBgJgEgFQgDgEgGAAQgFAAgEAEg");
	this.shape_90.setTransform(49.1,251.35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgdArIAAhUIAPAAIAAAJQADgFAFgCQAFgDAGgBQAKAAAIAJQAIAJAAAOQgBAPgHAJQgIAJgKAAQgFAAgEgDQgEgCgFgEIAAAegAgJgZQgEAFAAAJQAAAKAEAFQAEAEAFAAQAGABAEgFQADgEABgLQAAgJgFgFQgEgEgFAAQgFAAgEAEg");
	this.shape_91.setTransform(41.75,251.35);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgEQACgFAFAAQAEgDAIgCQALgCAEgBIAAgCQAAgFgCgCQgCgCgFAAQgFAAgDABQgCADgBAEIgPgDQACgJAGgEQAHgEALgBQALAAAFADQAFACADAEQACAFAAAKIAAASIABANIACAIIgQAAIgCgFIgBgCQgEAFgFABQgDADgGAAQgJAAgGgGgAAAADQgHACgBACQgEACAAADQAAAEADACQADADAEAAQADAAAEgDQADgDABgDIAAgHIAAgEIgJACg");
	this.shape_92.setTransform(34.6,250.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AASArIgNgTIgIgNIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQAMAAAHACQAGADAEAFQADAHABAHQgBAKgFAGQgGAFgLACQAFAEAEADQAEAEAGAKIALARgAgVgGIANAAQAMAAADAAQADgBACgEQABgCABgDQAAgFgCgDQgDgCgEgBIgMAAIgOAAg");
	this.shape_93.setTransform(27.35,249.05);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_94.setTransform(136.325,202.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFACgEQADgFAFgBQAEgCAIgBQALgCAFgDIAAgBQgBgFgCgCQgCgCgFAAQgFAAgCABQgDACgBAFIgPgDQACgJAGgFQAHgDALAAQALAAAFACQAFADADAEQACAEAAAKIAAASIABANIACAIIgQAAIgCgFIgBgCQgEAFgFACQgDACgFAAQgKgBgGgFgAAAAEQgHABgBACQgEACAAAEQAAADADACQADADAEAAQADAAAEgDQADgCABgDIABgIIAAgEIgKADg");
	this.shape_95.setTransform(131.35,203.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_96.setTransform(124.325,203.575);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgVAnQgGgFAAgJIAAgCIATACQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQACACAEgBQAHAAADgBQACgBABgEIABgHIAAgJQgHAKgLAAQgMAAgIgKQgFgJAAgMQAAgPAHgIQAIgIALAAQAKAAAIAKIAAgJIAPAAIAAA2QAAAMgBAFQgCAGgEADQgDACgFACQgGACgIABQgPAAgHgGgAgJgaQgDAEAAAJQAAALADADQAEAFAFgBQAGABAEgFQAEgEAAgJQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_97.setTransform(116.825,204.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_98.setTransform(111.625,202.45);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIAQgDQACAGADACQADADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCQgSgEgFgEQgIgEAAgIQAAgJAHgFQAGgGANABQAMAAAHADQAFAEADAJIgQADQgBgEgCgCQgEgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIAOAEQAOADAFAEQAFAEAAAIQAAAIgHAGQgIAHgNAAQgMAAgHgGg");
	this.shape_99.setTransform(106.5,203.65);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_100.setTransform(96.275,203.725);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgWAjQgHgJAAgPQAAgPAHgIQAIgIALAAQAJAAAIAIIAAgfIAQAAIAABVIgPAAIAAgJQgEAFgFADQgFADgEAAQgLAAgIgJgAgJgDQgEAEAAAJQAAAKADAEQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_101.setTransform(88.775,202.525);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_102.setTransform(78.5515,203.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAFQgDAEAAAKQAAAKADAFQAEAEAFAAQAFAAADgDQADgDABgGIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_103.setTransform(72.025,203.65);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_104.setTransform(64.925,203.575);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAEgBQAFgCAJgBQAKgCAEgDIAAgBQAAgFgCgCQgCgCgGAAQgEAAgDABQgCACgBAFIgQgDQADgJAGgFQAGgDAMAAQAKAAAGACQAFADACAEQACAEAAAKIAAASIABANIADAIIgQAAIgBgFIgBgCQgFAFgEACQgEACgGAAQgJgBgFgFgAAAAEQgHABgCACQgDACAAAEQAAADADACQADADADAAQAEAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_105.setTransform(57.95,203.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIAQgDQACAGADACQADADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCQgSgEgFgEQgIgEAAgIQAAgJAHgFQAGgGANABQAMAAAHADQAFAEADAJIgQADQgBgEgCgCQgEgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIAOAEQAOADAFAEQAFAEAAAIQAAAIgHAGQgIAHgNAAQgMAAgHgGg");
	this.shape_106.setTransform(51.15,203.65);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIARgDQABAGACACQAEADAEAAQAHAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgFgCQgTgEgFgEQgIgEAAgIQAAgJAHgFQAGgGANABQAMAAAGADQAGAEADAJIgQADQgBgEgCgCQgDgCgFAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIAPAEQANADAFAEQAFAEAAAIQAAAIgHAGQgIAHgOAAQgLAAgHgGg");
	this.shape_107.setTransform(44.5,203.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_108.setTransform(39.625,202.45);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_109.setTransform(34.275,203.725);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AggArIAAhVIAcAAQAPAAAEABQAIACAFAHQAFAGAAAKQAAAJgDAFQgDAEgEAEQgFADgEAAIgRABIgMAAIAAAhgAgPgDIAKAAQAJAAAEgCQADgBACgCQACgDAAgEQAAgFgDgDQgCgDgFgBIgLAAIgJAAg");
	this.shape_110.setTransform(26.75,202.45);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAASIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_111.setTransform(111.8515,116.55);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgWAiQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAASIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgDQgDADAAAHIAXAAQAAgHgDgDQgEgEgFAAQgEAAgEAEgAgIgaIAIgSIASAAIgQASg");
	this.shape_112.setTransform(105.2015,115.35);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACABAEAAQAHAAADgCQACAAABgDIABgIIAAgJQgHAKgLAAQgMAAgIgKQgFgJAAgMQAAgPAHgIQAIgJALABQAKgBAIAKIAAgIIAPAAIAAA2QAAALgBAGQgCAGgEADQgDACgFADQgGACgIAAQgPgBgHgFgAgJgaQgDAEAAAJQAAALADADQAEAFAFgBQAGABAEgFQAEgDAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_113.setTransform(98.075,117.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_114.setTransform(92.875,115.35);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_115.setTransform(89.35,116.475);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_116.setTransform(84.7,116.475);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgQAdQgHgFgEgHQgEgIAAgJQAAgIAEgIQAEgHAHgFQAIgDAIAAQAOgBAJAKQAJAJAAANQAAAOgJAJQgJAJgOAAQgHAAgJgDgAgKgNQgEAEgBAJQABAJAEAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_117.setTransform(78.25,116.55);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgIANAAQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgDgFAAQgFAAgEAFQgDAEAAAKQAAAKADAEQAEAFAFAAQAFAAADgDQADgDABgGIAQADQgCALgHAFQgHAHgMgBQgNAAgIgIg");
	this.shape_118.setTransform(71.325,116.55);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAASIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_119.setTransform(61.2015,116.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_120.setTransform(56.05,116.475);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_121.setTransform(49.575,116.625);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgTAcQgHgGgCgJIARgCQABAFACACQAEACAEABQAHgBADgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgFgDQgTgEgGgDQgHgEAAgKQAAgIAHgFQAGgFANAAQAMAAAGADQAGAFADAIIgQACQgBgDgCgCQgEgCgEAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABACIAPAFQANADAFAEQAFAEAAAIQAAAIgHAGQgHAHgPgBQgLAAgIgEg");
	this.shape_122.setTransform(42.45,116.55);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAASIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_123.setTransform(35.9015,116.55);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AAZArIAAhDIgRBDIgQAAIgRhDIAABDIgPAAIAAhVIAZAAIAPA6IAQg6IAaAAIAABVg");
	this.shape_124.setTransform(27.6,115.35);

	this.btFermer = new lib.btFermer();
	this.btFermer.name = "btFermer";
	this.btFermer.parent = this;
	this.btFermer.setTransform(501.6,20.1,0.3872,0.3872,0,0,0,25.8,26.1);
	new cjs.ButtonHelper(this.btFermer, 0, 1, 2, false, new lib.btFermer(), 3);

	this.sTitre = new cjs.Text("SONDE TEMPERATURE RADIO FREQUENCE", "12px 'Arial'", "#FFFFFF");
	this.sTitre.name = "sTitre";
	this.sTitre.lineHeight = 15;
	this.sTitre.lineWidth = 451;
	this.sTitre.parent = this;
	this.sTitre.setTransform(36.25,17.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF9900").s().p("AgQA0QgGgHgBgJQABgKAGgHIAFgEIAAg9QgBgFAEgEQADgDAFAAQAFAAAEADQADAEAAAFIAAA9IAFAEQAGAHABAKQgBAJgGAHQgIAHgJAAQgJAAgHgHg");
	this.shape_125.setTransform(15.6663,23.9599,1.4071,1.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgYBZQgKgJAAgPQAAgPAKgKIAAgBIAAhyIAAgBQABgJAGgHIABAAQAHgHAJAAQAKAAAHAHQAHAHABAKIAABzQAKAKAAAPQAAAPgKAJQgKALgPAAQgOAAgKgLgAgNhZIAAAAQgFAGAAAIIAAB0IgCACQgJAJAAANQAAAMAJAJQAIAJAMAAQAMAAAJgJQAJgIAAgNQAAgNgJgJIAAgBIgBAAIgBAAIAAh1QABgIgGgGIAAAAQgGgGgIABQgIgBgFAGg");
	this.shape_126.setTransform(15.6663,19.8999,1.4071,1.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgUBWQgJgJAAgMQAAgNAJgJIACgCIAAh0QAAgIAFgFIAAgBQAGgFAHAAQAIAAAGAFIAAABQAGAFAAAJIAAB0IAAAAIABABIABAAQAIAJAAANQAAANgIAIQgJAJgNAAQgLAAgJgJgAgIgZQgDADAAAFIAAA+IgEADQgHAHAAAKQAAAKAHAGQAGAHAJAAQAKAAAHgHQAHgGAAgKQAAgKgHgHIgEgDIAAg+QAAgFgEgDQgDgEgGAAQgEAAgEAEg");
	this.shape_127.setTransform(15.6311,19.8649,1.4071,1.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#666666").ss(0.5,1,1).p("Axw0eMAAAAo9ARxvLI+9AA");
	this.shape_128.setTransform(387.325,185.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.sTitre},{t:this.btFermer},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fond2
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(0.5,1,1).p("EgodgDHMBQ7AAAIAAGPMhQ7AAAg");
	this.shape_129.setTransform(259,20);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6699FF").s().p("EgodADIIAAmPMBQ7AAAIAAGPg");
	this.shape_130.setTransform(259,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129}]}).wait(1));

	// fond1
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(0.5,1,1).p("Egodgc0MBQ7AAAMAAAA5pMhQ7AAAg");
	this.shape_131.setTransform(259,184.475);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EEF7FF").s().p("EgodAc1MAAAg5pMBQ7AAAMAAAA5pg");
	this.shape_132.setTransform(259,184.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcPopUp, new cjs.Rectangle(-1,-1,520,371), null);


// stage content:
(lib.sondetrfpopup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// PopUp2
	this.btOffset = new lib.btInvInfo();
	this.btOffset.name = "btOffset";
	this.btOffset.parent = this;
	this.btOffset.setTransform(43.6,161.7,0.7534,0.6341,0,0,0,36.6,15.2);
	new cjs.ButtonHelper(this.btOffset, 0, 1, 2, false, new lib.btInvInfo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btOffset).wait(2));

	// popUp
	this.mcPopUP = new lib.mcPopUp();
	this.mcPopUP.name = "mcPopUP";
	this.mcPopUP.parent = this;
	this.mcPopUP.setTransform(251,153,1,1,0,0,0,250,150);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2C2E").ss(1,1,1).p("ApNiVISbAAIAAErIybAAg");
	this.shape.setTransform(72,159.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApNCWIAAkrISbAAIAAErg");
	this.shape_1.setTransform(72,159.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.mcPopUP}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.8,190.3,258.49999999999994,181.89999999999998);
// library properties:
lib.properties = {
	id: 'D6624C4551F316468B501D5D33AE6DA0',
	width: 520,
	height: 375,
	fps: 1,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"components/lib/jquery-2.2.4.min.js?1556869262016", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1556869262016", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1556869262016", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D6624C4551F316468B501D5D33AE6DA0'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;