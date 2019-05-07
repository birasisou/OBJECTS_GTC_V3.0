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


(lib.mcTM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btInfo
	this.btInfo = new lib.btInvInfo();
	this.btInfo.name = "btInfo";
	this.btInfo.parent = this;
	this.btInfo.setTransform(31.5,9.95,0.863,0.6667,0,0,0,36.5,14.9);
	new cjs.ButtonHelper(this.btInfo, 0, 1, 2, false, new lib.btInvInfo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btInfo).wait(1));

	// TEXT
	this.sValue = new cjs.Text("small", "bold 15px 'Arial'", "#FFFFFF");
	this.sValue.name = "sValue";
	this.sValue.textAlign = "center";
	this.sValue.lineHeight = 23;
	this.sValue.lineWidth = 61;
	this.sValue.parent = this;
	this.sValue.setTransform(32.25,2.95);
	this.sValue.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.sValue).wait(1));

	// FOND
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AkihjIJDAAQAaAAAAAZIAACWQAAAYgaAAIpDAAQgYAAAAgYIAAiWQAAgZAYAAg");
	this.shape.setTransform(31.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD800").s().p("AkiBkQgYAAAAgZIAAiVQAAgZAYAAIJDAAQAaAAAAAZIAACVQAAAZgaAAg");
	this.shape_1.setTransform(31.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTM, new cjs.Rectangle(-5,-4,78,34), null);


// stage content:
(lib.tmsmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mcTMsmall
	this.mcTM = new lib.mcTM();
	this.mcTM.name = "mcTM";
	this.mcTM.parent = this;
	this.mcTM.setTransform(27.6,10.6,1.0001,1.0006,0,0,0,23.6,7.6);

	this.timeline.addTween(cjs.Tween.get(this.mcTM).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,11.5,43,22.5);
// library properties:
lib.properties = {
	id: 'D6624C4551F316468B501D5D33AE6DA0',
	width: 70,
	height: 25,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;