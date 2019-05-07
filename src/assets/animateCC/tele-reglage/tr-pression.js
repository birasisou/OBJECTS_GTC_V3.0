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


(lib.mcTM_ConsPression = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#192238").s().p("AgVAnIgYgnIAYgmIArAAIAXAmIgWAng");
	this.shape.setTransform(13.8,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#192238").s().p("AgIAaIAAgSIgRAAIAAgQIARAAIAAgQIARAAIAAAQIARAAIAAAQIgRAAIAAASg");
	this.shape_1.setTransform(6.3,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#192238").s().p("AgVAnIgYgnIAYgmIAsAAIAWAmIgXAng");
	this.shape_2.setTransform(13.8,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#192238").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_3.setTransform(23.3,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#192238").s().p("AgWAnIgWgnIAWgmIAsAAIAXAmIgXAng");
	this.shape_4.setTransform(21.6,16.4);

	this.sText = new cjs.Text("", "14px 'Arial'", "#333333");
	this.sText.name = "sText";
	this.sText.lineHeight = 18;
	this.sText.lineWidth = 95;
	this.sText.parent = this;
	this.sText.setTransform(36.9,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sText},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btTrace
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(1,1,1).p("AAAiVQA/AAArAsQAhAhAIAqQADAPAAAPQAAA/gsArQgrAsg/AAQg+AAgrgsQgsgrAAg/QAAgDAAgEQADg5ApgpQArgsA+AAg");
	this.shape_5.setTransform(15,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#8181FF","#FFFFFF"],[0,1],-15,0,15,0).s().p("AhpBqQgsgsAAg+IAAgIQADg4ApgpQArgsA+AAQA+AAAsAsQAgAhAJArQADAPAAAOQAAA+gsAsQgsAsg+AAQg+AAgrgsg");
	this.shape_6.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTM_ConsPression, new cjs.Rectangle(-1,-1,134.5,32), null);


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



(lib.bt_OK_General = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKAhIgTgaIgEAEIAAAWIgRAAIAAhBIARAAIAAAeIAXgeIATAAIgaAfIAbAig");
	this.shape.setTransform(3.5,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgJgJAAgQQAAgPAJgJQAJgJAPAAQAQAAAJAJQAJAJAAAPQAAAQgJAJQgJAJgQAAQgPAAgJgJgAgFgUIgFAEIgEAHQgBAEAAAFQAAAGABAEQABAEADADIAFAEIAFABIAGgBIAFgEIAEgHIABgKQAAgFgBgEIgEgHIgFgEIgGgBIgFABg");
	this.shape_1.setTransform(-4.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Calque_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#78C2AD").s().p("AhSBuQgbAAAAgbIAAilQAAgbAbAAIClAAQAbAAAAAbIAAClQAAAbgbAAg");
	this.shape_2.setTransform(-0.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5EB69D").s().p("AhSBuQgbAAAAgbIAAilQAAgbAbAAIClAAQAbAAAAAbIAAClQAAAbgbAAg");
	this.shape_3.setTransform(-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-11.4,22,22);


(lib.mcTM_Pression = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.btOK = new lib.bt_OK_General();
	this.btOK.name = "btOK";
	this.btOK.parent = this;
	this.btOK.setTransform(152.3,14.4,1.144,1.126);
	new cjs.ButtonHelper(this.btOK, 0, 1, 2, false, new lib.bt_OK_General(), 3);

	this.sUnit = new cjs.Text("Pa", "bold 15px 'Arial'", "#333333");
	this.sUnit.name = "sUnit";
	this.sUnit.lineHeight = 19;
	this.sUnit.lineWidth = 70;
	this.sUnit.parent = this;
	this.sUnit.setTransform(171.9,6.4);

	this.sINPUT = new lib.an_TextInput({'id': 'sINPUT', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});
	this.sINPUT.setTransform(79.4,12.1,1,1.136,0,0,0,44.4,9.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#192238").s().p("AgVAnIgYgnIAYgmIArAAIAXAmIgWAng");
	this.shape.setTransform(13.8,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#192238").s().p("AgIAaIAAgSIgRAAIAAgQIARAAIAAgQIARAAIAAAQIARAAIAAAQIgRAAIAAASg");
	this.shape_1.setTransform(6.3,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#192238").s().p("AgVAnIgYgnIAYgmIAsAAIAWAmIgXAng");
	this.shape_2.setTransform(13.8,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#192238").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_3.setTransform(23.3,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#192238").s().p("AgWAnIgWgnIAWgmIAsAAIAXAmIgXAng");
	this.shape_4.setTransform(21.6,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.sINPUT},{t:this.sUnit},{t:this.btOK}]}).wait(1));

	// btTrace
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(1,1,1).p("AAAiVQA/AAArAsQAhAhAIAqQADAPAAAPQAAA/gsArQgrAsg/AAQg+AAgrgsQgsgrAAg/QAAgDAAgEQADg5ApgpQArgsA+AAg");
	this.shape_5.setTransform(15,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#8181FF","#FFFFFF"],[0,1],-15,0,15,0).s().p("AhpBqQgsgsAAg+IAAgIQADg4ApgpQArgsA+AAQA+AAAsAsQAgAhAJArQADAPAAAOQAAA+gsAsQgsAsg+AAQg+AAgrgsg");
	this.shape_6.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTM_Pression, new cjs.Rectangle(-1,-1,244.5,32), null);


// stage content:
(lib.trpression = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		this.stop();
		
		/*
		var val="25";
		var sINPUT=this.mcTR.sINPUT._element._$this;
		// INI INPUT 
		sINPUT[0].style.textAlign="right";
		sINPUT[0].style.fontSize="25px";	
		
		
		gestionFocus(sINPUT[0]);
			
		
		if (!sINPUT[0].bFocus) {	
			sINPUT.val(val);
		}	
		
		function gestionFocus(target) {
			target.onfocus = function () {
				target.style.backgroundColor = "#FFFFCC";
				target.bFocus=true;		
			}
			target.onblur = function () {
				target.style.backgroundColor = "#FFFFFF";
				target.bFocus=false;
			}
		}
		
		
		this.mcTR.btOK.addEventListener('click', function () {			
			alert("test="+sINPUT[0].value);	
		})
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Calque_1
	this.sMnemo = new cjs.Text("sMNEMONIC", "bold 15px 'Arial'", "#333333");
	this.sMnemo.name = "sMnemo";
	this.sMnemo.lineHeight = 19;
	this.sMnemo.lineWidth = 261;
	this.sMnemo.parent = this;
	this.sMnemo.setTransform(6,78.5);

	this.mcTR = new lib.mcTM_Pression();
	this.mcTR.name = "mcTR";
	this.mcTR.parent = this;
	this.mcTR.setTransform(100.6,71.6,1.117,1.117,0,0,0,90.1,27.6);

	this.mcTM = new lib.mcTM_ConsPression();
	this.mcTM.name = "mcTM";
	this.mcTM.parent = this;
	this.mcTM.setTransform(100.6,30.8,1.117,1.117,0,0,0,90.1,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcTM},{t:this.mcTR},{t:this.sMnemo}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139.5,49.5,272.5,97.8);
// library properties:
lib.properties = {
	id: 'D6624C4551F316468B501D5D33AE6DA0',
	width: 280,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"components/lib/jquery-2.2.4.min.js?1549548391837", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1549548391837", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1549548391837", id:"an.TextInput"}
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