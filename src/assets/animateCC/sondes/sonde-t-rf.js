(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.mcFreaquence = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#666666").ss(10,1,1).p("AjJCPQBYhWB5AAQB8AABXBWAlVAAQCSiODLAAQDCAACMB/");
	this.shape.setTransform(34.2,14.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#009900").ss(10,1,1).p("AgHgHQAHAHAIAI");
	this.shape_1.setTransform(69.2,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhtgiIABgBQAtgsA/AAQA2gBAqAjIALAKIADADIhsBxg");
	this.shape_2.setTransform(35.125,42.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#009900").ss(10,1,1).p("AjRCPQBYhWB5AAQB8AABXBWAldAAQCSiODLAAQDNAACRCO");
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

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_3 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

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


(lib.btSonde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("ADDhjIAADHAjCBkIAAjH");
	this.shape.setTransform(1.225,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#000000"],[0,0.91],0,2.9,0,0,2.9,27.6).s().p("AjCBkIAAjHIGFAAIAADHg");
	this.shape_1.setTransform(1.225,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Calque_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#070706").ss(0.3,1,1).p("ABIgoIAAgiABAhKIAAAiAhCBKQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABIABAAQAHAAAHAAQABAAAAAAIABAAQABAAAAgBAgqBKQACAAACgBQACAAABgBAhHA5IAAAPIAAAAAhHBIQABABABAAQABAAABABIAAAAAgjA9IAAgE");
	this.shape_2.setTransform(13.75,12.4625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.3,1,1).p("ABhg4IAAAGIAIAAIAAgPIgIAAIAAAJIgRAAIAAAxIARAAIAAgIIAIAAIAAAPIgIAAIAAgHAAThSIAcgRIAKAQIgMAIIiCBOIgJAGIgKgQIABAAIAYgPQgBgJAFgJQAFgJALgHIAogZQALgGAJAAQALAAAHAFIhhA8AAtAEQADACAEAAQALAAAIAAIAJAAIAAhGQgBAAgQAAQgMgCgBgMIgFADIAAAAAAtAEQgMgEgBgNQAAgSAAgRQAAgSAAgBIANgIAARAmIASAAQAJgBABgOIAAgTAhVADIAAAUQABAOAKABIARAAIAAArIABAAAAFBkIgKAAIgHAAIgUAAIgEAAIgKAAAgmBgIAAABQgBAAAAABQAAAAgBAAQgBABgBABQgCAAgCAAIAAAAQgBAAAAAAQgBAAgCAAQgFgBgBgDIAAgPIASAAIAkAAIAQAAIADAAIAAgrIhKAAAAOBRQAAACAAADQAAAGAAAEQgBAEgGAAQgBAAAAAAIgBAAQgCAAgCAAIAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIgBAAIAAgBIAAgBQAAgFAAgF");
	this.shape_3.setTransform(10.475,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPABIgDAAIgEABIAAgBIABAAIABAAIABAAIADgBIABAAIABAAIACgBIAAABIAAAAIABAAIAAAAIACABIABAAIgDAAIgBAAIgDABgAgPACIgBgBIgDAAIgBAAIgBAAIACgBIABAAIAAAAIABAAIAAgBIAAAAIAAABIADAAIABAAIAAAAIABAAIABABIACAAIABAAIgBAAIgCAAIAAABgAgPAAIACAAIAAAAIAAAAIgCAAIgCAAIACAAgAAWABIgBAAIAAAAIABAAIAAAAgAgLABIAAAAgAgMAAIAAAAIABABIgBgBgAgMAAg");
	this.shape_4.setTransform(8.375,19.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#8C8C8C","#FFFFFF","#000000"],[0.161,0.533,0.953],4.1,0,-4.7,0).s().p("AAjAWIgSAAIgjAAIgRAAIgCAAIAAgrIBLAAIAAArg");
	this.shape_5.setTransform(8.425,15.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#000000"],[0,0.91],0.6,-1.6,0,0.6,-1.6,7.7).s().p("AgsAPQAFgJAKgGIAogZQAKgGALgBQAKABAIAFIhhA6IgBABQgBgKAFgIg");
	this.shape_6.setTransform(7.4417,4.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#8C8C8C","#FFFFFF","#000000"],[0.161,0.533,0.953],7.1,-0.7,-8.2,-0.7).s().p("AAmA5IhLAAIgRAAQgJgBgBgOIAAgUICBhOIAAAAIgMAIIAAATIAAAiQABAOALAEIAAATQAAAOgKABg");
	this.shape_7.setTransform(8.425,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#8C8C8C","#FFFFFF","#575757"],[0.004,0.408,1],0,2.4,0,-1.7).s().p("AgHAZIAAgxIAPAAIAAAGIAAAiIAAAJg");
	this.shape_8.setTransform(19.325,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#949494","#FCFCFC","#424242"],[0.004,0.431,0.976],4,0.1,-6.4,-0.2).s().p("AhQAmIABAAIAYgPIABgBIBhg6IAcgSIAKARIgNAIIiBBOIgJAFg");
	this.shape_9.setTransform(8.1,5.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#8C8C8C","#FFFFFF","#3B3B3B"],[0.004,0.455,1],0,4.1,0,-3).s().p("AAPArIgSAAIgHgCQgMgEgBgOIAAgiIAAgTIANgIIAFgEQABANALACIARAAIAABGg");
	this.shape_10.setTransform(16.075,6.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DEDEDE").s().p("Ag8BLIgBAAIgBgBIgBAAIgCAAIAAAAIgBAAIAAAAIgBgBIgBAAIgDgBIAAAAIAAAAIAAgPIAkAAIAAAEIAAALIgDABIgEABIgBAAIgBABIgBAAIgBAAIgHAAIgHAAgABAgoIAAgiIAIAAIAAAig");
	this.shape_11.setTransform(13.75,12.4625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ADADAD").s().p("AgsA6IgBAAIgDAAIAAgBIgBAAIgBAAIgCgBIAAgBIgBAAIAAAAIAAgBIAAgKIAAgEIARAAIAAAEIAAAKQgBAEgGAAIgBAAgAAugpIAAgHIAAgJIAIAAIAAAQg");
	this.shape_12.setTransform(15.55,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#707070").s().p("AhGBTIgBAAIgDAAQgFgBgBgDIAAgOIASAAIAAAOIAAABIgBAAIgBABIgCACIgEAAgABJhDIAAgGIAAgJIAIAAIAAAPg");
	this.shape_13.setTransform(12.875,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.3,1,1).p("ABhg4IAAAGIAIAAIAAgQIgIAAIAAAKIgRAAIAAAxIARAAIAAgJIAIAAIAAAQIgIAAIAAgHAAtAEQADABAEAAQALAAAIAAIAJAAIAAhGQgBAAgQAAQgMgBgBgNIgFAEIAAgBIiCBPIgJAFIgKgPIAZgQQgBgJAFgJQAFgJALgGIAogZQALgGAJgBQALAAAHAFIAbgQAAwhjIAJAQIgMAHAAtAEQgMgEgBgOQAAgRAAgSQAAgRAAgBIANgIAARAmIASAAQAJgCABgNIAAgTAhVADIAAAUQABANAKACIARAAIAAArIABAAAAFBkIgKAAIgHAAIgUAAIgEAAIgKAAAgmBgIAAAAQgBAAAAABQAAAAgBABQgBAAgBABQgCAAgCABIAAAAQgBAAAAAAQgBAAgCgBQgFgBgBgCIAAgPIASAAIAkAAIAQAAIADAAIAAgrIhKAAAAOBRQAAACAAADQAAAFAAAFQgBADgGABQgBAAAAAAIgBAAQgCgBgCAAIAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgBAAIAAgBIAAAAQAAgFAAgFAAThTIhhA8");
	this.shape_14.setTransform(10.475,10.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#949494","#FCFCFC","#424242"],[0.004,0.431,0.976],4,0.1,-6.4,-0.2).s().p("AhQAmIAZgQIABAAIBhg7IAagQIACAAIAKAPIgNAIIiBBOIgJAGg");
	this.shape_15.setTransform(8.1,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_15},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-1,41.3,22.1);


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


// stage content:
(lib.sondetrf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// anim
	this.btInfo = new lib.btInvInfo();
	this.btInfo.name = "btInfo";
	this.btInfo.parent = this;
	this.btInfo.setTransform(10.7,14.15,0.2246,0.6667,0,0,0,36.5,14.9);
	new cjs.ButtonHelper(this.btInfo, 0, 1, 2, false, new lib.btInvInfo(), 3);

	this.mcTM_T = new lib.TM_T();
	this.mcTM_T.name = "mcTM_T";
	this.mcTM_T.parent = this;
	this.mcTM_T.setTransform(71.05,10.05,1.0001,1.0006,0,0,0,23.6,7.6);

	this.mcFr = new lib.mcFreaquence();
	this.mcFr.name = "mcFr";
	this.mcFr.parent = this;
	this.mcFr.setTransform(10.75,14.3,0.2343,0.2357,0,0,0,35.2,23.4);

	this.mcTM_T_1 = new lib.TM_T();
	this.mcTM_T_1.name = "mcTM_T_1";
	this.mcTM_T_1.parent = this;
	this.mcTM_T_1.setTransform(71.05,10.05,1.0001,1.0006,0,0,0,23.6,7.6);

	this.btSonde = new lib.btSonde();
	this.btSonde.name = "btSonde";
	this.btSonde.parent = this;
	this.btSonde.setTransform(31.1,11.3,1,1,0,0,0,10.5,10);
	new cjs.ButtonHelper(this.btSonde, 0, 1, 2, false, new lib.btSonde(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btSonde},{t:this.mcTM_T_1},{t:this.mcFr},{t:this.mcTM_T},{t:this.btInfo}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.5,33.4);
// library properties:
lib.properties = {
	id: 'D6624C4551F316468B501D5D33AE6DA0',
	width: 115,
	height: 25,
	fps: 1,
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