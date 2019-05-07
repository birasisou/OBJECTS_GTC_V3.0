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


(lib.btIcoP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAAiVQA/AAArAsQAhAhAIAqQADAPAAAPQAAA/gsArQgrAsg/AAQg+AAgrgsQgsgrAAg/QAAgDAAgEQADg5ApgpQArgsA+AAg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFCC00","#FFFFCC"],[0,1],-15,0,15,0).s().p("AhpBqQgsgsAAg+IAAgIQADg4ApgpQArgsA+AAQA+AAAsAsQAgAhAJArQADAPAAAOQAAA+gsAsQgsAsg+AAQg+AAgrgsg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,32);


(lib.mcTM_Temperature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.sText = new cjs.Text("", "14px 'Arial'", "#333333");
	this.sText.name = "sText";
	this.sText.lineHeight = 18;
	this.sText.lineWidth = 95;
	this.sText.parent = this;
	this.sText.setTransform(36.9,6.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgQA0QgGgHgBgJQABgKAGgHIAFgEIAAg9QgBgFAEgEQADgDAFAAQAFAAAEADQADAEAAAFIAAA9IAFAEQAGAHABAKQgBAJgGAHQgIAHgJAAQgJAAgHgHg");
	this.shape.setTransform(14.9,17.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgYBZQgKgJAAgPQAAgPAKgKIAAgBIAAhyIAAgBQABgJAGgHIABAAQAHgHAJAAQAKAAAHAHQAHAHABAKIAABzQAKAKAAAPQAAAPgKAJQgKALgPAAQgOAAgKgLgAgNhZIAAAAQgFAGAAAIIAAB0IgCACQgJAJAAANQAAAMAJAJQAIAJAMAAQAMAAAJgJQAJgIAAgNQAAgNgJgJIAAgBIgBAAIgBAAIAAh1QABgIgGgGIAAAAQgGgGgIABQgIgBgFAGg");
	this.shape_1.setTransform(14.9,14.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBWQgJgJAAgMQAAgNAJgJIACgCIAAh0QAAgIAFgFIAAgBQAGgFAHAAQAIAAAGAFIAAABQAGAFAAAJIAAB0IAAAAIABABIABAAQAIAJAAANQAAANgIAIQgJAJgNAAQgLAAgJgJgAgIgZQgDADAAAFIAAA+IgEADQgHAHAAAKQAAAKAHAGQAGAHAJAAQAKAAAHgHQAHgGAAgKQAAgKgHgHIgEgDIAAg+QAAgFgEgDQgDgEgGAAQgEAAgEAEg");
	this.shape_2.setTransform(14.875,14.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.sText}]}).wait(1));

	// btTrace
	this.btIco = new lib.btIcoP();
	this.btIco.name = "btIco";
	this.btIco.parent = this;
	this.btIco.setTransform(15,15,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.btIco, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btIco).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTM_Temperature, new cjs.Rectangle(-1,-1,134.5,32), null);


// stage content:
(lib.popuptemperature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		// this.mcTM.sText.text="34 Bars";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Calque_3
	this.mcTM_T2 = new lib.mcTM_Temperature();
	this.mcTM_T2.name = "mcTM_T2";
	this.mcTM_T2.parent = this;
	this.mcTM_T2.setTransform(330.6,151.05,1.1166,1.1166,0,0,0,90.1,27.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDBFQgGgCgDgEQgDgFgBgHQgBgEAAgPIAAgsIgNAAIAAgVIANAAIAAgWIAagPIAAAlIAUAAIAAAVIgUAAIAAApQAAANACACQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACABACAAQAEAAAIgCIACAVQgKAFgMAAQgIAAgEgDg");
	this.shape.setTransform(76.4,134.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_1.setTransform(67.4284,136.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAuQgNgJgEgPIAcgEQACAIAGAEQAEAEAKAAQAKAAAFgEQAEgCAAgFQAAgDgCgCQgCgCgHgCQgggHgJgGQgNgIAAgOQAAgOALgJQALgJAWAAQAVAAAKAHQAKAHAEANIgaAFQgBgGgFgDQgFgEgIAAQgKAAgFADQgDADAAADQAAADADACQAEADAUAFQAXAFAIAHQAJAGAAANQgBAPgMAKQgLAKgXAAQgVAAgMgIg");
	this.shape_2.setTransform(56.15,136.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTBJIAAhRIgPAAIAAgWIAPAAIAAgIQAAgNADgGQACgHAIgEQAHgEALAAQAMAAALAEIgDATIgOgCQgFAAgDADQgCADgBAIIAAAHIAVAAIAAAWIgVAAIAABRg");
	this.shape_3.setTransform(47.95,134.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTBJIAAhRIgPAAIAAgWIAPAAIAAgIQAAgNADgGQADgHAHgEQAHgEALAAQALAAAMAEIgDATIgOgCQgGAAgCADQgCADgBAIIAAAHIAVAAIAAAWIgVAAIAABRg");
	this.shape_4.setTransform(41.3,134.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyA3QgSgUAAgiQAAgVAGgPQAFgLAIgIQAJgJAKgFQAOgFAQAAQAfAAATAUQAUATgBAiQABAjgUAUQgSATgfAAQggAAgTgTgAgcgkQgKAMgBAYQABAYAKANQAMAMAQAAQARAAAMgMQALgMgBgZQAAgYgKgMQgLgNgSAAQgQAAgMANg");
	this.shape_5.setTransform(29.8,134.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_6.setTransform(170.7284,85.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglA4QgKgOAAgWQAAgZANgOQAOgPAUAAQAWAAAOAQQANAPgBAeIhDAAQAAANAGAGQAHAIAIAAQAHgBAEgDQAEgDADgJIAbAFQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgGQgGAGAAALIAoAAQAAgLgGgHQgGgFgIgBQgIAAgGAHgAgNgsIANgdIAeAAIgaAdg");
	this.shape_7.setTransform(159.6284,83.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjBBQgLgJAAgOIAAgDIAfAEQABAFADACQAEADAHAAQALAAAFgDQAEgDACgEQABgDAAgKIAAgPQgMARgSAAQgVAAgMgSQgKgOAAgTQAAgaANgPQANgNASAAQASAAANARIAAgOIAaAAIAABbQAAATgDAJQgDAJgGAFQgFAFgJADQgKADgOAAQgZAAgLgJgAgPgsQgGAHAAAQQAAAQAGAHQAGAIAJAAQAKAAAHgIQAHgHAAgQQAAgPgHgIQgHgIgKAAQgJAAgGAIg");
	this.shape_8.setTransform(147.825,87.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBIIAAhnIAbAAIAABngAgNgtIAAgaIAbAAIAAAag");
	this.shape_9.setTransform(139.225,83.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghA1IAAhmIAaAAIAAAOQAGgLAFgDQAFgDAHAAQAJAAAJAFIgJAYQgHgFgGAAQgGAAgEAEQgDADgCAIQgCAIAAAaIAAAgg");
	this.shape_10.setTransform(133.275,85.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghA1IAAhmIAaAAIAAAOQAGgLAFgDQAFgDAHAAQAJAAAJAFIgJAYQgHgFgGAAQgGAAgEAEQgDADgCAIQgCAIAAAaIAAAgg");
	this.shape_11.setTransform(125.475,85.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAwQgNgHgHgMQgHgNABgRQgBgNAHgNQAHgNAMgHQAMgGAPAAQAYAAAPAPQAOAPAAAXQAAAXgOAQQgQAPgXAAQgNAAgNgGgAgRgXQgIAIABAPQgBAPAIAJQAIAIAJAAQALAAAHgIQAIgJgBgPQABgPgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_12.setTransform(114.75,85.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiAoQgOgPAAgZQAAgZAOgOQANgOAWAAQATAAAMAIQALAIAFARIgcAFQgBgJgFgEQgFgEgHAAQgKAAgGAHQgGAHAAARQAAARAHAIQAGAIAJAAQAIAAAFgFQAFgEACgLIAbAFQgEASgMAKQgMAJgUAAQgWAAgNgOg");
	this.shape_13.setTransform(103.225,85.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_14.setTransform(86.3284,85.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghA1IAAhmIAaAAIAAAOQAGgLAFgDQAFgDAHAAQAJAAAJAFIgJAYQgHgFgGAAQgGAAgEAEQgDADgCAIQgCAIAAAaIAAAgg");
	this.shape_15.setTransform(77.725,85.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAxQgJgGgDgIQgEgIAAgOIAAhBIAbAAIAAAwQAAAUACAGQABAEAEADQAEADAGAAQAHAAAFgEQAFgEACgGQACgFABgWIAAgrIAbAAIAABnIgZAAIAAgQQgGAIgJAFQgJAFgKAAQgKAAgIgEg");
	this.shape_16.setTransform(66.95,85.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfAuQgNgJgDgPIAbgEQACAIAGAEQAFAEAIAAQALAAAFgEQAEgCAAgFQAAgDgCgCQgCgCgHgCQghgHgIgGQgNgIAAgOQAAgOALgJQALgJAWAAQAUAAALAHQAKAHAEANIgaAFQgCgGgEgDQgFgEgIAAQgKAAgFADQgDADAAADQAAADACACQAFADAUAFQAWAFAJAHQAJAGAAANQAAAPgNAKQgMAKgXAAQgUAAgMgIg");
	this.shape_17.setTransform(55.05,85.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_18.setTransform(44.1284,85.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAqBIIAAhwIgcBwIgbAAIgchwIAABwIgbAAIAAiPIArAAIAZBhIAahhIArAAIAACPg");
	this.shape_19.setTransform(30.325,83.2);

	this.mcTM_T = new lib.mcTM_Temperature();
	this.mcTM_T.name = "mcTM_T";
	this.mcTM_T.parent = this;
	this.mcTM_T.setTransform(330.6,101.05,1.1166,1.1166,0,0,0,90.1,27.6);

	this.sTitre = new cjs.Text("Pop up test", "24px 'Arial'", "#FFFFFF");
	this.sTitre.name = "sTitre";
	this.sTitre.lineHeight = 29;
	this.sTitre.lineWidth = 284;
	this.sTitre.parent = this;
	this.sTitre.setTransform(9.25,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sTitre},{t:this.mcTM_T},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.mcTM_T2}]}).wait(2));

	// Calque_4
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6699FF").s().p("EgnDADNIAAmZMBOHAAAIAAGZg");
	this.shape_20.setTransform(250,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(2));

	// Calque_5
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EEF7FF").s().p("EgnDAXcMAAAgu3MBOHAAAMAAAAu3g");
	this.shape_21.setTransform(250,150);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,150,250,150);
// library properties:
lib.properties = {
	id: 'D6624C4551F316468B501D5D33AE6DA0',
	width: 500,
	height: 300,
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