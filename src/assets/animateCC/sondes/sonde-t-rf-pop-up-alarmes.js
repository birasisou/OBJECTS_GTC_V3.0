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



(lib.btn_CMD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#626262").ss(0.5,0,0,4).p("AL4ENI01tBQgigVgqAPQgrAPgaAqIg6BdQgbAqAFAtQAFAtAiAVIU1NAQAiAWArgPQAqgPAagrIA6hdQAbgqgFgtQgFgsgigVg");
	this.shape.setTransform(0.1085,0.2319,0.2234,0.2246);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#8182FE","#737373","#3C3C3C"],[0,0.553,1],0,0,0,0,0,70).s().p("AI+I1I01tAQgigVgFgtQgFgtAbgqIA6hdQAagqArgPQAqgPAiAVIU1NBQAiAVAFAsQAFAtgbAqIg6BdQgaArgqAPQgSAGgQAAQgXAAgUgNg");
	this.shape_1.setTransform(0.1085,0.2319,0.2234,0.2246);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("ABZBxQgvgVg/gpQhHgogsglQgogwARgVQARggA6ARQA1AWA+A4QBHAeAnAfQAjApgRAgQgLAPgaAAQgOAAgTgEg");
	this.shape_2.setTransform(-0.55,-0.5,1,1,0,0,0,-0.2,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5858FC").s().p("ABNB+Qg6gchBgvQhEgigjggQggguAWghQAZgsA3APQA1ASA7A8QBIAZAqAkQAkAsgYAsQgRAYgoAAQgMAAgNgCg");
	this.shape_3.setTransform(-0.55,-0.5,1,1,0,0,0,-0.4,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5858FC").s().p("AFjKpQingPjEgHQjMgWizheQirhfhsigQhqibg1i+QgzjFAYinQAdiUBIg9QBEhAAnAOQAbAUA2A7QBJAtDFASQCIBRBRCvQBaCpCXBeQCXBNC4AlQCzAnCLClQBdByhPBLQhFBXh7BAQheAtiBAAQgcAAgegDg");
	this.shape_4.setTransform(1.5978,-3.8886,0.1237,0.1238,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7172FD").s().p("ABjJ8QjDgZizheQixhdh2idQhviagvi/QgujIAUigQAXiGBDglQBBgsAvAMQAmANBJAlQBjAcCtARQBTBJAICKQAeCDCZAcQCmAJCaAEQCCAjgLC/QBFBcBgAnQBYA6g9CBQhHCBi9BUQiFAyiGAAQg3AAg3gIg");
	this.shape_5.setTransform(3.5204,-5.5448,0.1527,0.1529,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8B8CFC").s().p("AB/JeQjFgaivheQithch3idQhwiagyi/QgxjJAXicQAdh4BXgPQBUgWBZARQBRATBxAiQCEAWCsAZQBrBYAlCgQA0CXB/AaQCHAFB3gGQBpAZgYDCQAMBcABAgQAAAwg/BoQg/BoiKA9QhgAih8AAQg6AAhAgHg");
	this.shape_6.setTransform(4.6084,-6.817,0.1818,0.1821,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5858FC").s().p("AFjKpQingPjEgHQjMgWizheQirhfhsigQhqibg1i+QgzjFAYinQAdiUBIg9QBEhAAnAOQAbAUA2A7QBJAtDFASQCIBRBRCvQBaCpCXBeQCXBNC4AlQCzAnCLClQBdByhPBLQhFBXh7BAQheAtiBAAQgcAAgegDg");
	this.shape_7.setTransform(-1.0978,3.9386,0.1237,0.1238);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7172FD").s().p("ABjJ8QjDgZizheQixhdh2idQhviagvi/QgujIAUigQAXiGBDglQBBgsAvAMQAmANBJAlQBjAcCtARQBTBJAICKQAeCDCZAcQCmAJCaAEQCCAjgLC/QBFBcBgAnQBYA6g9CBQhHCBi9BUQiFAyiGAAQg3AAg3gIg");
	this.shape_8.setTransform(-3.0204,5.5948,0.1527,0.1529);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8B8CFC").s().p("AB/JeQjFgaivheQithch3idQhwiagyi/QgxjJAXicQAdh4BXgPQBUgWBZARQBRATBxAiQCEAWCsAZQBrBYAlCgQA0CXB/AaQCHAFB3gGQBpAZgYDCQAMBcABAgQAAAwg/BoQg/BoiKA9QhgAih8AAQg6AAhAgHg");
	this.shape_9.setTransform(-4.1084,6.867,0.1818,0.1821);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B4B5FE").s().p("AgZDNQgpgFglgVQgkgVgZghQgZghgKgnQgLgmAFgnQAGgqAVglQAVgkAhgZQAggYAngLQAngLAoAGQApAEAlAWQAkAVAZAhQAYAgALAoQALAmgFAnQgGAqgUAlQgWAkghAZQggAYgnALQgbAHgbAAQgMAAgNgCg");
	this.shape_10.setTransform(0,0.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("Ah4POQjFgYithkQithkh3ieQhziYgyi6Qgyi5AYi9QAYjFBkitQBkitCeh3QCYh0C6gxQC6gyC8AYQDFAYCtBkQCtBkB4CeQBzCYAxC6QAyC5gXC9QgZDFhkCtQhkCtieB3QiYBzi6AyQh+AiiAAAQg7AAg9gIg");
	this.shape_11.setTransform(0.0084,0.1419,0.2255,0.2254);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#888888").s().p("Ah4POQjFgYithkQithkh3ieQhziYgyi6Qgyi5AYi9QAYjFBkitQBkitCeh3QCYh0C6gxQC6gyC8AYQDFAYCtBkQCtBkB4CeQBzCYAxC6QAyC5gXC9QgZDFhkCtQhkCtieB3QiYBzi6AyQh+AiiAAAQg7AAg9gIg");
	this.shape_12.setTransform(0.0848,-0.0085,0.2353,0.2355);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A8A8A8").s().p("AiWTCQj2gfjYh8QjYh8iWjGQiQi/g+jnQg+joAdjtQAfj2B8jYIABgBQB8jYDGiVQC+iQDog+QDog/DsAeQD2AfDYB8QDYB8CWDGQCQC/A+DnQA+DpgdDrQgfD2h8DZIgBABQh8DYjGCVQi+CQjoA+QieAqigAAQhKAAhMgJg");
	this.shape_13.setTransform(-0.0146,0,0.2037,0.2037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.btINV_Info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AvYhOIewAAQAdAAAAAcIAABlQAAAcgdAAI+wAAQgcAAAAgcIAAhlQAAgcAcAAg");
	this.shape.setTransform(101.25,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AvYBPQgcAAAAgcIAAhlQAAgcAcAAIexAAQAbAAABAcIAABlQgBAcgbAAg");
	this.shape_1.setTransform(101.25,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,204.5,17.8);


(lib.btINV_CMD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiwCxQhAhBgIhXIgBgZQABhmBIhKQBKhJBmAAIAZABQBXAIBABAQBKBKgBBmQABBnhKBKQhJBJhnAAQhmAAhKhJg");
	this.shape.setTransform(24.95,25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.9,50);


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


(lib.TR_Tempo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2
	this.sValue = new cjs.Text("S", "bold 12px 'Arial'", "#FFFFFF");
	this.sValue.name = "sValue";
	this.sValue.lineHeight = 20;
	this.sValue.lineWidth = 11;
	this.sValue.parent = this;
	this.sValue.setTransform(48.1,3.7);
	this.sValue.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.sValue).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.TR_Tempo, new cjs.Rectangle(-1,-3.3,82,31), null);


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

	this.timeline.addTween(cjs.Tween.get(this.sValue).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.TR_Temperature, new cjs.Rectangle(-1,-3.3,82,34), null);


(lib.mcTR_Seuils = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.mcTR_T = new lib.TR_Temperature();
	this.mcTR_T.name = "mcTR_T";
	this.mcTR_T.parent = this;
	this.mcTR_T.setTransform(137.25,-1.5);

	this.mcTR_S = new lib.TR_Tempo();
	this.mcTR_S.name = "mcTR_S";
	this.mcTR_S.parent = this;
	this.mcTR_S.setTransform(137.25,32.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEg");
	this.shape.setTransform(114.6015,44.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_1.setTransform(105.975,43.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_2.setTransform(98.8,43.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFADgFQACgEAEAAQAFgDAJgCQAKgCAFgBIAAgCQAAgFgDgCQgCgCgGAAQgEAAgCACQgDACgCAEIgPgDQADgJAGgEQAHgFALAAQAKAAAGADQAFACACAEQACAFAAALIAAARIABAMIADAJIgQAAIgBgFIgBgCQgFAEgEACQgEACgFABQgKAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgCABgEIABgIIAAgDIgKACg");
	this.shape_3.setTransform(92.7,44.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_4.setTransform(87.675,42.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgFQADgEAEAAQAFgDAJgCQAKgCAEgBIAAgCQAAgFgCgCQgCgCgGAAQgEAAgDACQgCACgCAEIgPgDQADgJAGgEQAGgFAMAAQAKAAAGADQAFACACAEQACAFAAALIAAARIABAMIADAJIgQAAIgBgFIgBgCQgFAEgEACQgEACgGABQgJAAgFgGgAAAADQgHACgCACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgCABgEIAAgIIAAgDIgJACg");
	this.shape_5.setTransform(82.7,44.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_6.setTransform(74.025,43.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_7.setTransform(68.325,43.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgFQADgEAEAAQAFgDAIgCQALgCAEgBIAAgCQABgFgDgCQgCgCgFAAQgFAAgDACQgCACgBAEIgQgDQADgJAGgEQAGgFAMAAQALAAAFADQAFACADAEQACAFAAALIAAARIAAAMIADAJIgQAAIgCgFIgBgCQgDAEgGACQgDACgGABQgJAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQACADAFAAQADAAAEgDQADgCABgEIAAgIIAAgDIgJACg");
	this.shape_8.setTransform(61.35,44.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgGAfIgag9IASAAIALAeIADALIACgFIABgGIAMgeIARAAIgYA9g");
	this.shape_9.setTransform(54.65,44.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgFQADgEAEAAQAFgDAJgCQAKgCAEgBIAAgCQAAgFgCgCQgCgCgGAAQgEAAgDACQgCACgCAEIgPgDQADgJAGgEQAGgFAMAAQAKAAAGADQAFACACAEQACAFAAALIAAARIABAMIADAJIgQAAIgBgFIgBgCQgFAEgEACQgEACgGABQgJAAgFgGgAAAADQgHACgCACQgDACAAADQAAAEADACQADADAEAAQADAAAEgDQADgCABgEIAAgIIAAgDIgJACg");
	this.shape_10.setTransform(48.05,44.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgPAcQgIgDgEgIQgEgHAAgKQAAgIAEgIQAEgIAIgDQAGgFAJAAQAOABAJAIQAJAKAAANQAAAOgJAJQgJAKgOAAQgIgBgHgEgAgKgOQgFAGABAIQgBAJAFAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_11.setTransform(37.7,44.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgeAsIAAhVIAQAAIAAAJQADgFAFgCQAFgEAGAAQAKAAAIAJQAIAIAAAQQgBAOgHAJQgIAJgKAAQgFgBgEgCQgEgCgFgEIAAAfgAgJgZQgEAFAAAJQAAAKAEAFQAEAEAFAAQAGAAAEgEQADgEABgKQAAgKgFgFQgEgFgFABQgFgBgEAFg");
	this.shape_12.setTransform(30.5,45.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_13.setTransform(21.325,43.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEg");
	this.shape_14.setTransform(12.6515,44.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgIArIAAhHIgZAAIAAgOIBDAAIAAAOIgZAAIAABHg");
	this.shape_15.setTransform(5.675,42.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_16.setTransform(119.375,9.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_17.setTransform(113.675,9.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_18.setTransform(106.6515,10.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_19.setTransform(98.025,9.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_20.setTransform(89.3515,10.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAMArIAAghQAAgJgBgCQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBADQgCAEAAAIIAAAfIgQAAIAAhVIAQAAIAAAgQAIgJAKAAQAGAAAFACQAEACACADQADADABAEIAAAMIAAAkg");
	this.shape_21.setTransform(82.375,8.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAEQgDAFAAAKQAAAKADAFQAEAEAFAAQAFAAADgDQADgCABgHIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_22.setTransform(75.475,10.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_23.setTransform(68.375,9.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_24.setTransform(61.3515,10.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_25.setTransform(56.375,8.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAEQgDAFAAAKQAAAKADAFQAEAEAFAAQAFAAADgDQADgCABgHIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_26.setTransform(51.475,10.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_27.setTransform(44.375,9.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_28.setTransform(37.3515,10.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_29.setTransform(29.025,8.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_30.setTransform(25.675,8.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_31.setTransform(20.325,10.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_32.setTransform(13.3015,10.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgXAlQgJgHgCgPIARgCQABAJAFAEQAFAEAHAAQAIAAAEgDQAFgEAAgFQAAgDgCgCQgCgDgEgBIgNgEQgOgDgGgEQgIgHAAgKQAAgHAEgGQAEgGAHgDQAHgCAJAAQAQgBAIAIQAIAHAAAMIgRABQgBgHgEgDQgDgDgHAAQgHAAgEADQgDACAAADQAAAEACABQAEADALAEQANACAGADQAGAEAEAEQADAGAAAIQAAAHgEAHQgEAGgIADQgHAEgLAAQgQAAgIgIg");
	this.shape_33.setTransform(5.925,8.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.mcTR_S},{t:this.mcTR_T}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTR_Seuils, new cjs.Rectangle(0,-4.8,217.5,65), null);


(lib.mcTR_Seuil_S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.mcTR_T = new lib.TR_Tempo();
	this.mcTR_T.name = "mcTR_T";
	this.mcTR_T.parent = this;
	this.mcTR_T.setTransform(137.25,-2.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAJAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape.setTransform(114.6015,9.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_1.setTransform(105.975,8.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_2.setTransform(98.8,8.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFADgEQACgFAEAAQAFgDAJgCQAKgCAFgCIAAgBQAAgFgDgCQgCgCgGAAQgEAAgCABQgDADgCAEIgPgDQADgJAGgEQAHgEALgBQAKAAAGADQAFACACAEQACAFAAAKIAAASIABANIADAIIgQAAIgBgFIgBgCQgFAFgEABQgEADgFAAQgKAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgDABgDIABgHIAAgEIgKACg");
	this.shape_3.setTransform(92.7,9.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_4.setTransform(87.675,7.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAEAAQAFgDAJgCQAKgCAEgCIAAgBQAAgFgCgCQgCgCgGAAQgEAAgDABQgCADgCAEIgPgDQADgJAGgEQAGgEAMgBQAKAAAGADQAFACACAEQACAFAAAKIAAASIABANIADAIIgQAAIgBgFIgBgCQgFAFgEABQgEADgGAAQgJAAgFgGgAAAADQgHACgCACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgDABgDIAAgHIAAgEIgJACg");
	this.shape_5.setTransform(82.7,9.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_6.setTransform(74.025,8.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_7.setTransform(68.325,8.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAEAAQAFgDAIgCQALgCAEgCIAAgBQABgFgDgCQgCgCgFAAQgFAAgDABQgCADgBAEIgQgDQADgJAGgEQAGgEAMgBQALAAAFADQAFACADAEQACAFAAAKIAAASIAAANIADAIIgQAAIgCgFIgBgCQgDAFgGABQgDADgGAAQgJAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQACADAFAAQADAAAEgDQADgDABgDIAAgHIAAgEIgJACg");
	this.shape_8.setTransform(61.35,9.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgGAfIgag9IASAAIALAeIADALIACgFIABgGIAMgeIARAAIgYA9g");
	this.shape_9.setTransform(54.65,9.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAEAAQAFgDAJgCQAKgCAEgCIAAgBQAAgFgCgCQgCgCgGAAQgEAAgDABQgCADgCAEIgPgDQADgJAGgEQAGgEAMgBQAKAAAGADQAFACACAEQACAFAAAKIAAASIABANIADAIIgQAAIgBgFIgBgCQgFAFgEABQgEADgGAAQgJAAgFgGgAAAADQgHACgCACQgDACAAADQAAAEADACQADADAEAAQADAAAEgDQADgDABgDIAAgHIAAgEIgJACg");
	this.shape_10.setTransform(48.05,9.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgPAcQgIgDgEgIQgEgHAAgKQAAgIAEgIQAEgIAIgDQAGgEAJgBQAOABAJAIQAJAKAAANQAAAOgJAJQgJAKgOAAQgIAAgHgFgAgKgOQgFAGABAIQgBAJAFAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_11.setTransform(37.7,9.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgeArIAAhUIAQAAIAAAJQADgFAFgCQAFgDAGgBQAKAAAIAJQAIAJAAAOQgBAPgHAJQgIAJgKAAQgFAAgEgDQgEgCgFgEIAAAegAgJgZQgEAFAAAJQAAAKAEAFQAEAEAFAAQAGABAEgFQADgEABgLQAAgJgFgFQgEgEgFAAQgFAAgEAEg");
	this.shape_12.setTransform(30.5,10.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_13.setTransform(21.325,8.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAJAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_14.setTransform(12.6515,9.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgIArIAAhGIgZAAIAAgPIBDAAIAAAPIgZAAIAABGg");
	this.shape_15.setTransform(5.675,7.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.mcTR_T}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTR_Seuil_S, new cjs.Rectangle(0,-5.8,217.5,30), null);


(lib.mcTC_Activ = function(mode,startPosition,loop) {
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

	// BT
	this.btCmd = new lib.btINV_CMD();
	this.btCmd.name = "btCmd";
	this.btCmd.parent = this;
	this.btCmd.setTransform(4.7,3.7,0.8014,0.8001,0,0,0,30.3,30.2);
	new cjs.ButtonHelper(this.btCmd, 0, 1, 2, false, new lib.btINV_CMD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btCmd).wait(3));

	// Calque_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AgWAiQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgDQgDADAAAHIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape.setTransform(57.6015,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AgGAfIgZg9IARAAIALAeIADALIACgFIABgGIAMgeIARAAIgZA9g");
	this.shape_1.setTransform(50.95,1.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_2.setTransform(45.975,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_3.setTransform(42.325,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006600").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAEQgDAFAAAKQAAAKADAFQAEAEAFAAQAFAAADgCQADgDABgHIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_4.setTransform(37.075,1.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("AAZArIgIgUIgiAAIgHAUIgSAAIAihVIARAAIAiBVgAgLAJIAWAAIgLgfg");
	this.shape_5.setTransform(29.3,-0.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgWAiQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgDQgDADAAAHIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_6.setTransform(-31.0985,-0.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgHAfIgZg9IASAAIAMAeIACALIABgFIACgGIANgeIARAAIgZA9g");
	this.shape_7.setTransform(-37.75,1.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_8.setTransform(-42.725,-0.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_9.setTransform(-46.375,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAEQgDAFAAAKQAAAKADAFQAEAEAFAAQAFAAADgCQADgDABgHIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_10.setTransform(-51.625,1.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAEgBQAFgCAIgBQALgDAEgCIAAgBQABgFgDgCQgCgCgGAAQgEAAgDABQgCACgBAFIgQgDQADgJAGgFQAGgDAMAAQALAAAFACQAFADADAEQABADAAALIAAASIABANIADAIIgQAAIgCgFIgBgCQgDAEgGADQgDACgGAAQgJgBgFgFgAAAAEQgGABgDACQgDACAAAEQAAADADACQACADAFAAQADAAAEgDQADgDABgCIAAgIIAAgEIgJADg");
	this.shape_11.setTransform(-58.35,1.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgTAbQgHgFgCgJIAQgDQABAFAEADQADACAFAAQAGAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCQgSgEgGgEQgHgEAAgIQAAgJAGgFQAHgGANABQAMAAAHADQAFAEADAJIgPADQgBgEgEgCQgDgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACAEIAOAEQANADAGAEQAFADAAAIQAAAJgHAGQgHAHgOAAQgMAAgIgGg");
	this.shape_12.setTransform(-65.15,1.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgWAiQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgDQgDADAAAHIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_13.setTransform(-71.6985,-0.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgjArIAAhVIAgAAQAJAAAGABQAIADAFAFQAFAHADAIQADAIAAALQAAALgDAHQgCAJgHAHQgEAEgIACQgGACgIAAgAgSAdIAOAAIAJgBQAEgCADgCQADgCABgGQACgGABgKQgBgJgCgFQgCgGgCgDQgDgCgFgBIgOgBIgIAAg");
	this.shape_14.setTransform(-79.2,-0.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgGAfIgZg9IARAAIALAeIADALIACgFIABgGIAMgeIARAAIgZA9g");
	this.shape_15.setTransform(50.95,1.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAZArIgIgUIgiAAIgHAUIgSAAIAihVIARAAIAiBVgAgLAJIAWAAIgLgfg");
	this.shape_16.setTransform(29.3,-0.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgWAiQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgDQgDADAAAHIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_17.setTransform(-31.0985,-0.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgHAfIgZg9IASAAIAMAeIACALIABgFIACgGIANgeIARAAIgZA9g");
	this.shape_18.setTransform(-37.75,1.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_19.setTransform(-42.725,-0.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_20.setTransform(-46.375,0.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAEQgDAFAAAKQAAAKADAFQAEAEAFAAQAFAAADgCQADgDABgHIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_21.setTransform(-51.625,1.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAEgBQAFgCAIgBQALgDAEgCIAAgBQABgFgDgCQgCgCgGAAQgEAAgDABQgCACgBAFIgQgDQADgJAGgFQAGgDAMAAQALAAAFACQAFADADAEQABADAAALIAAASIABANIADAIIgQAAIgCgFIgBgCQgDAEgGADQgDACgGAAQgJgBgFgFgAAAAEQgGABgDACQgDACAAAEQAAADADACQACADAFAAQADAAAEgDQADgDABgCIAAgIIAAgEIgJADg");
	this.shape_22.setTransform(-58.35,1.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgTAbQgHgFgCgJIAQgDQABAFAEADQADACAFAAQAGAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCQgSgEgGgEQgHgEAAgIQAAgJAGgFQAHgGANABQAMAAAHADQAFAEADAJIgPADQgBgEgEgCQgDgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACAEIAOAEQANADAGAEQAFADAAAIQAAAJgHAGQgHAHgOAAQgMAAgIgGg");
	this.shape_23.setTransform(-65.15,1.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgWAiQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgDQgDADAAAHIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_24.setTransform(-71.6985,-0.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgjArIAAhVIAgAAQAJAAAGABQAIADAFAFQAFAHADAIQADAIAAALQAAALgDAHQgCAJgHAHQgEAEgIACQgGACgIAAgAgSAdIAOAAIAJgBQAEgCADgCQADgCABgGQACgGABgKQgBgJgCgFQgCgGgCgDQgDgCgFgBIgOgBIgIAAg");
	this.shape_25.setTransform(-79.2,-0.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_26.setTransform(-42.725,-0.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_27.setTransform(-46.375,0.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAEQgDAFAAAKQAAAKADAFQAEAEAFAAQAFAAADgCQADgDABgHIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_28.setTransform(-51.625,1.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgWAiQgGgJAAgNQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgDQgDADAAAHIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_29.setTransform(-71.6985,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13,p:{x:-71.6985}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-51.625}},{t:this.shape_9,p:{x:-46.375}},{t:this.shape_8,p:{x:-42.725}},{t:this.shape_7},{t:this.shape_6,p:{x:-31.0985}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_10,p:{x:37.075}},{t:this.shape_9,p:{x:42.325}},{t:this.shape_8,p:{x:45.975}},{t:this.shape_15},{t:this.shape_6,p:{x:57.6015}}]},1).to({state:[{t:this.shape_14},{t:this.shape_29},{t:this.shape_12},{t:this.shape_11},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_7},{t:this.shape_13,p:{x:-31.0985}},{t:this.shape_16},{t:this.shape_10,p:{x:37.075}},{t:this.shape_9,p:{x:42.325}},{t:this.shape_8,p:{x:45.975}},{t:this.shape_15},{t:this.shape_6,p:{x:57.6015}}]},1).wait(1));

	// graph
	this.BP_Off = new lib.btn_CMD();
	this.BP_Off.name = "BP_Off";
	this.BP_Off.parent = this;
	this.BP_Off.setTransform(0,0,0.7317,0.7317,119.9998);
	new cjs.ButtonHelper(this.BP_Off, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BP_Off).wait(1).to({rotation:0,skewX:-119.9998,skewY:60.0008},0).wait(1).to({rotation:58.2636,skewX:0,skewY:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-25.1,176.3,50.3);


(lib.mcPopUpAlarme = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anim
	this.btInfoTR_TempoAvant_T = new lib.btINV_Info();
	this.btInfoTR_TempoAvant_T.name = "btInfoTR_TempoAvant_T";
	this.btInfoTR_TempoAvant_T.parent = this;
	this.btInfoTR_TempoAvant_T.setTransform(88.9,482.85,0.6481,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfoTR_TempoAvant_T, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfoTR_SeuilBas_QS_S = new lib.btINV_Info();
	this.btInfoTR_SeuilBas_QS_S.name = "btInfoTR_SeuilBas_QS_S";
	this.btInfoTR_SeuilBas_QS_S.parent = this;
	this.btInfoTR_SeuilBas_QS_S.setTransform(344,344.65,0.6481,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfoTR_SeuilBas_QS_S, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfoTR_SeuilBas_QS_T = new lib.btINV_Info();
	this.btInfoTR_SeuilBas_QS_T.name = "btInfoTR_SeuilBas_QS_T";
	this.btInfoTR_SeuilBas_QS_T.parent = this;
	this.btInfoTR_SeuilBas_QS_T.setTransform(344,309.65,0.6481,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfoTR_SeuilBas_QS_T, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfoTR_SeuilBas_PS_S = new lib.btINV_Info();
	this.btInfoTR_SeuilBas_PS_S.name = "btInfoTR_SeuilBas_PS_S";
	this.btInfoTR_SeuilBas_PS_S.parent = this;
	this.btInfoTR_SeuilBas_PS_S.setTransform(344,177.85,0.6481,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfoTR_SeuilBas_PS_S, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfoTR_SeuilBas_PS_T = new lib.btINV_Info();
	this.btInfoTR_SeuilBas_PS_T.name = "btInfoTR_SeuilBas_PS_T";
	this.btInfoTR_SeuilBas_PS_T.parent = this;
	this.btInfoTR_SeuilBas_PS_T.setTransform(344,142.85,0.6481,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfoTR_SeuilBas_PS_T, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfoTR_SeuilHaut_S = new lib.btINV_Info();
	this.btInfoTR_SeuilHaut_S.name = "btInfoTR_SeuilHaut_S";
	this.btInfoTR_SeuilHaut_S.parent = this;
	this.btInfoTR_SeuilHaut_S.setTransform(89,177.85,0.6481,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfoTR_SeuilHaut_S, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfoTR_SeuilHaut_T = new lib.btINV_Info();
	this.btInfoTR_SeuilHaut_T.name = "btInfoTR_SeuilHaut_T";
	this.btInfoTR_SeuilHaut_T.parent = this;
	this.btInfoTR_SeuilHaut_T.setTransform(89,142.85,0.6481,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfoTR_SeuilHaut_T, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfoTR_SeuilBas_S = new lib.btINV_Info();
	this.btInfoTR_SeuilBas_S.name = "btInfoTR_SeuilBas_S";
	this.btInfoTR_SeuilBas_S.parent = this;
	this.btInfoTR_SeuilBas_S.setTransform(89,347.85,0.6481,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfoTR_SeuilBas_S, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfoTR_SeuilBas_T = new lib.btINV_Info();
	this.btInfoTR_SeuilBas_T.name = "btInfoTR_SeuilBas_T";
	this.btInfoTR_SeuilBas_T.parent = this;
	this.btInfoTR_SeuilBas_T.setTransform(89,312.85,0.6481,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfoTR_SeuilBas_T, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfo_mcTC_RB = new lib.btINV_Info();
	this.btInfo_mcTC_RB.name = "btInfo_mcTC_RB";
	this.btInfo_mcTC_RB.parent = this;
	this.btInfo_mcTC_RB.setTransform(135.55,404.45,1,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfo_mcTC_RB, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfo_TC_SeuilBas_QS = new lib.btINV_Info();
	this.btInfo_TC_SeuilBas_QS.name = "btInfo_TC_SeuilBas_QS";
	this.btInfo_TC_SeuilBas_QS.parent = this;
	this.btInfo_TC_SeuilBas_QS.setTransform(389.55,234.45,1,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfo_TC_SeuilBas_QS, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfo_TC_SeuilBas_T = new lib.btINV_Info();
	this.btInfo_TC_SeuilBas_T.name = "btInfo_TC_SeuilBas_T";
	this.btInfo_TC_SeuilBas_T.parent = this;
	this.btInfo_TC_SeuilBas_T.setTransform(135.55,234.45,1,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfo_TC_SeuilBas_T, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfo_TC_SeuilBas_PS = new lib.btINV_Info();
	this.btInfo_TC_SeuilBas_PS.name = "btInfo_TC_SeuilBas_PS";
	this.btInfo_TC_SeuilBas_PS.parent = this;
	this.btInfo_TC_SeuilBas_PS.setTransform(389.55,64.45,1,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfo_TC_SeuilBas_PS, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.btInfo_TC_SeuilHaut_T = new lib.btINV_Info();
	this.btInfo_TC_SeuilHaut_T.name = "btInfo_TC_SeuilHaut_T";
	this.btInfo_TC_SeuilHaut_T.parent = this;
	this.btInfo_TC_SeuilHaut_T.setTransform(135.55,64.45,1,1,0,0,0,101.3,7.9);
	new cjs.ButtonHelper(this.btInfo_TC_SeuilHaut_T, 0, 1, 2, false, new lib.btINV_Info(), 3);

	this.mcTR_TempoAvant = new lib.mcTR_Seuil_S();
	this.mcTR_TempoAvant.name = "mcTR_TempoAvant";
	this.mcTR_TempoAvant.parent = this;
	this.mcTR_TempoAvant.setTransform(132.05,499.65,1,1,0,0,0,108.8,26.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAWQgGgJAAgMQAAgPAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPABgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape.setTransform(201.2515,407.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_1.setTransform(196.275,405.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJANAAQALAAAHAGQAHAEADAKIgRADQAAgFgDgCQgDgCgFAAQgFAAgEADQgDAFAAAKQAAAKADAEQAEAFAFAAQAFAAADgCQADgEABgGIAQADQgCALgHAGQgHAFgMAAQgNABgIgJg");
	this.shape_2.setTransform(191.375,407.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_3.setTransform(184.275,407.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgPAcQgIgDgEgIQgEgHAAgKQAAgIAEgIQAEgHAIgEQAGgFAJAAQAOABAJAIQAJAKAAANQAAAOgJAJQgJAKgOgBQgIAAgHgEgAgKgOQgEAGAAAIQAAAJAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgJQAAgIgEgGQgEgEgHAAQgFAAgFAEg");
	this.shape_4.setTransform(176.95,407.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgFApQgFgDgEgFIAAAJIgPAAIAAhVIAQAAIAAAfQAIgIAJAAQAMAAAHAIQAHAIAAAOQAAAQgHAJQgIAJgLAAQgEAAgFgDgAgJgDQgEADAAAKQAAAJADAFQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_5.setTransform(169.725,405.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgWAWQgGgJAAgMQAAgPAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPABgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_6.setTransform(159.2015,407.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgWAjQgHgJAAgPQAAgPAHgIQAIgIALAAQAJAAAIAIIAAgfIAQAAIAABVIgPAAIAAgJQgEAFgFADQgFADgEAAQgLAAgIgJgAgJgDQgEAEAAAJQAAAKADAEQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_7.setTransform(152.075,405.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgWAWQgGgJAAgMQAAgPAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPABgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_8.setTransform(141.8515,407.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAEAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_9.setTransform(136.7,407.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_10.setTransform(130.225,407.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_11.setTransform(124.575,406.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgdAsIAAhVIAPAAIAAAJQADgFAFgCQAFgEAGAAQAKAAAIAJQAIAIAAAQQgBAOgHAJQgIAJgKgBQgFAAgEgCQgEgBgFgGIAAAggAgJgZQgEAFAAAJQAAALAEADQAEAGAFgBQAGAAAEgEQADgEABgKQAAgKgFgFQgEgFgFABQgFgBgEAFg");
	this.shape_12.setTransform(119.05,408.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_13.setTransform(111.525,407.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_14.setTransform(106,407.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgWAWQgGgJAAgMQAAgPAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPABgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_15.setTransform(96.5015,407.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_16.setTransform(87.875,407.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQAEgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_17.setTransform(80.7,407.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgGACgEQADgDAEgBQAFgDAJgCQAKgCAEgBIAAgCQAAgFgCgCQgCgCgGAAQgEAAgDACQgCACgCAEIgPgDQADgJAGgEQAGgFAMAAQAKABAGACQAFACACAEQACAFAAALIAAARIABAMIADAJIgQAAIgBgFIgBgCQgFAEgEACQgEACgGAAQgJABgFgGgAAAADQgHACgCACQgDACAAADQAAAEADADQADACAEAAQADAAAEgDQADgDABgDIAAgIIAAgDIgJACg");
	this.shape_18.setTransform(74.6,407.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_19.setTransform(69.575,405.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAYArIgHgUIghAAIgHAUIgTAAIAihVIARAAIAiBVgAgLAJIAXAAIgMgfg");
	this.shape_20.setTransform(63.55,405.9);

	this.mcTC_RB = new lib.mcTC_Activ();
	this.mcTC_RB.name = "mcTC_RB";
	this.mcTC_RB.parent = this;
	this.mcTC_RB.setTransform(141.05,437.6,1.0766,1.0748);

	this.mcTR_SeuilBas_QS = new lib.mcTR_Seuils();
	this.mcTR_SeuilBas_QS.name = "mcTR_SeuilBas_QS";
	this.mcTR_SeuilBas_QS.parent = this;
	this.mcTR_SeuilBas_QS.setTransform(392.05,329.65,1,1,0,0,0,108.8,26.4);

	this.mcTR_SeuilBas_T = new lib.mcTR_Seuils();
	this.mcTR_SeuilBas_T.name = "mcTR_SeuilBas_T";
	this.mcTR_SeuilBas_T.parent = this;
	this.mcTR_SeuilBas_T.setTransform(132.05,329.65,1,1,0,0,0,108.8,26.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_21.setTransform(481.975,235.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFADgFQACgDAEgBQAFgDAJgCQAKgCAFgBIAAgCQAAgFgDgCQgCgCgGAAQgEAAgCACQgDACgCAEIgPgDQADgJAGgEQAHgFALAAQAKAAAGADQAFACACAEQACAFAAALIAAARIABAMIADAJIgQAAIgBgFIgBgCQgFAEgEACQgEACgFABQgKAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgCABgEIABgIIAAgDIgKACg");
	this.shape_22.setTransform(477,237.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_23.setTransform(469.975,237.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgVAnQgGgFAAgJIAAgCIATACQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQACABAEABQAHAAADgCQACgCABgDIABgHIAAgJQgHAKgLAAQgMAAgIgLQgFgIAAgLQAAgQAHgJQAIgHALgBQAKABAIAJIAAgIIAPAAIAAA3QAAAKgBAGQgCAFgEADQgDAEgFACQgGABgIAAQgPABgHgGgAgJgbQgDAFAAAKQAAAKADADQAEAEAFABQAGgBAEgEQAEgDAAgKQAAgJgEgGQgEgEgGAAQgFAAgEAEg");
	this.shape_24.setTransform(462.475,238.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_25.setTransform(457.275,235.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgXAlQgJgHgCgPIARgCQABAJAFAEQAFAEAHAAQAIAAAEgDQAFgEAAgFQAAgDgCgCQgCgDgEgBIgNgEQgOgDgGgEQgIgHAAgLQAAgGAEgGQAEgFAHgDQAHgDAJAAQAQAAAIAGQAIAIAAAMIgRABQgBgHgEgDQgDgDgHAAQgHAAgEADQgDACAAADQAAADACADQAEACALADQANAEAGACQAGAEAEAEQADAGAAAIQAAAIgEAGQgEAGgIADQgHADgLABQgQAAgIgIg");
	this.shape_26.setTransform(451.525,235.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgWAiQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgDQgDADAAAGIAXAAQAAgGgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_27.setTransform(440.9015,235.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_28.setTransform(435.625,236.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_29.setTransform(431.925,235.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_30.setTransform(428.575,235.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgFQADgDAEgBQAFgDAIgCQALgCAEgBIAAgCQABgFgDgCQgCgCgGAAQgEAAgDACQgCACgBAEIgQgDQADgJAGgEQAGgFAMAAQALAAAFADQAFACADAEQACAFgBALIAAARIABAMIADAJIgQAAIgCgFIgBgCQgDAEgGACQgDACgGABQgJAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQACADAFAAQADAAAEgDQADgCABgEIAAgIIAAgDIgJACg");
	this.shape_31.setTransform(423.6,237.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_32.setTransform(416.575,237.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAdAtIgMgHQgIADgJAAQgUAAgLgLQgMgMAAgVQAAgUAMgMQALgMATAAQATAAALAMQALAMAAAUQAAAKgDAJQgCAGgFAHQAGAEAHADIgGAMIgIgDgAgSgYQgHAGAAAPQAAAPAHAHQAHAIAKgBIAGgBIgKgFIAFgKQAHADAIAGQAEgEACgFQABgGAAgHQAAgPgHgGQgGgIgKAAQgKAAgHAIg");
	this.shape_33.setTransform(408.4,236.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIAQgDQACAFADADQADADAFgBQAGABADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgBQgSgFgFgEQgIgDAAgKQAAgHAHgGQAGgGANAAQAMAAAHAFQAFADADAJIgQACQgBgDgCgCQgEgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIABAEIAOAEQAOADAFAEQAFAEAAAHQAAAJgHAHQgIAFgNABQgMgBgHgFg");
	this.shape_34.setTransform(396.75,237.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgFQACgDAEgBQAFgDAJgCQAKgCAFgBIAAgCQAAgFgDgCQgCgCgGAAQgEAAgCACQgDACgCAEIgOgDQACgJAGgEQAGgFAMAAQAKAAAGADQAFACACAEQACAFAAALIAAARIACAMIACAJIgQAAIgBgFIgBgCQgFAEgEACQgEACgFABQgKAAgGgGgAAAADQgHACgBACQgEACAAADQAAAEADACQACADAEAAQAEAAAEgDQADgCABgEIABgIIAAgDIgKACg");
	this.shape_35.setTransform(390.25,237.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgjArIAAhVIAiAAIAPABQAFABAEACQAEADACAEQADAFAAAFQAAAHgDAFQgEAFgFACQAIACAEAFQAEAGAAAHQAAAGgDAGQgCAFgFAEQgFACgHABIgUABgAgSAdIAQAAIALgBQAEAAADgEQACgCAAgEQAAgFgCgCQgCgDgDgBQgEgBgLgBIgOAAgAgSgHIAMAAIALgBQAFgBACgCQADgDAAgEQAAgEgCgCQgCgDgFgBIgOAAIgKAAg");
	this.shape_36.setTransform(382.725,235.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_37.setTransform(373.225,235.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_38.setTransform(369.875,235.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_39.setTransform(364.525,237.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEg");
	this.shape_40.setTransform(357.5015,237.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgXAlQgJgHgCgPIARgCQABAJAFAEQAFAEAHAAQAIAAAEgDQAFgEAAgFQAAgDgCgCQgCgDgEgBIgNgEQgOgDgGgEQgIgHAAgLQAAgGAEgGQAEgFAHgDQAHgDAJAAQAQAAAIAGQAIAIAAAMIgRABQgBgHgEgDQgDgDgHAAQgHAAgEADQgDACAAADQAAADACADQAEACALADQANAEAGACQAGAEAEAEQADAGAAAIQAAAIgEAGQgEAGgIADQgHADgLABQgQAAgIgIg");
	this.shape_41.setTransform(350.125,235.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEg");
	this.shape_42.setTransform(339.5015,237.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_43.setTransform(330.875,237.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQAEgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_44.setTransform(323.7,237.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgFQADgDAEgBQAFgDAJgCQAKgCAEgBIAAgCQAAgFgCgCQgCgCgGAAQgEAAgDACQgCACgBAEIgQgDQADgJAGgEQAGgFAMAAQAKAAAGADQAFACACAEQACAFAAALIAAARIABAMIADAJIgQAAIgBgFIgBgCQgFAEgEACQgEACgGABQgJAAgFgGgAAAADQgHACgCACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgCABgEIAAgIIAAgDIgJACg");
	this.shape_45.setTransform(317.6,237.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_46.setTransform(312.575,235.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AAYArIgHgUIghAAIgHAUIgTAAIAihVIARAAIAiBVgAgLAJIAXAAIgMgfg");
	this.shape_47.setTransform(306.55,235.9);

	this.mcTC_SeuilBas_QS = new lib.mcTC_Activ();
	this.mcTC_SeuilBas_QS.name = "mcTC_SeuilBas_QS";
	this.mcTC_SeuilBas_QS.parent = this;
	this.mcTC_SeuilBas_QS.setTransform(401.05,267.6,1.0766,1.0748);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEg");
	this.shape_48.setTransform(215.5015,237.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQADgCAFAAQAFAAAFADIgFAPQgEgDgDAAQgEAAgCACQgCACgBAFQgCAFAAAPIAAATg");
	this.shape_49.setTransform(210.35,237.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_50.setTransform(203.875,237.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_51.setTransform(198.225,236.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgFQACgDAFgBQAEgDAIgCQALgCAFgBIAAgCQgBgFgCgCQgCgCgFAAQgFAAgCACQgDACgCAEIgOgDQACgJAGgEQAHgFALAAQALAAAFADQAFACACAEQADAFAAALIAAARIABAMIACAJIgQAAIgCgFIgBgCQgEAEgEACQgEACgFABQgKAAgGgGgAAAADQgHACgBACQgEACAAADQAAAEADACQACADAEAAQAEAAAEgDQADgCABgEIABgIIAAgDIgKACg");
	this.shape_52.setTransform(192.9,237.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQAEgCADAAQAGAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgBAFAAAPIAAATg");
	this.shape_53.setTransform(187.7,237.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgWAiQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgDQgDADAAAGIAXAAQAAgGgDgEQgEgDgFAAQgEAAgEAEgAgIgaIAIgRIASAAIgQARg");
	this.shape_54.setTransform(181.5515,235.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgdAsIAAhVIAPAAIAAAJQADgFAFgCQAFgEAGAAQAKAAAIAJQAIAIAAAQQgBAOgHAJQgIAJgKAAQgFgBgEgCQgFgCgEgEIAAAfgAgJgZQgEAFAAAJQAAAKAEAFQAEAEAFAAQAGAAAEgEQAEgEAAgKQAAgKgFgFQgEgFgFABQgFgBgEAFg");
	this.shape_55.setTransform(174.75,238.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghQAAgJgBgDIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_56.setTransform(165.575,237.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEg");
	this.shape_57.setTransform(156.9015,237.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgIArIAAhHIgZAAIAAgOIBDAAIAAAOIgZAAIAABHg");
	this.shape_58.setTransform(149.925,235.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIARgDQABAFACADQAEADAFgBQAGABADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgFgBQgTgFgFgEQgIgDAAgKQAAgHAHgGQAGgGANAAQAMAAAHAFQAFADADAJIgQACQgBgDgCgCQgDgCgFAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIABAEIAPAEQANADAFAEQAFAEAAAHQAAAJgHAHQgIAFgNABQgMgBgHgFg");
	this.shape_59.setTransform(139.45,237.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgFQACgDAFgBQAEgDAJgCQAKgCAFgBIAAgCQgBgFgCgCQgCgCgFAAQgFAAgCACQgDACgCAEIgOgDQACgJAGgEQAHgFALAAQAKAAAGADQAFACACAEQACAFABALIAAARIABAMIACAJIgQAAIgCgFIAAgCQgEAEgFACQgEACgFABQgKAAgGgGgAAAADQgHACgBACQgEACAAADQAAAEADACQACADAEAAQAEAAAEgDQADgCABgEIABgIIAAgDIgKACg");
	this.shape_60.setTransform(132.95,237.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgjArIAAhVIAiAAIAPABQAFABAEACQAEADACAEQADAFAAAFQAAAHgDAFQgEAFgFACQAIACAEAFQAEAGAAAHQAAAGgDAGQgCAFgFAEQgFACgHABIgUABgAgSAdIAQAAIALgBQAEAAADgEQACgCAAgEQAAgFgCgCQgCgDgDgBQgEgBgLgBIgOAAgAgSgHIAMAAIALgBQAFgBACgCQADgDAAgEQAAgEgCgCQgCgDgFgBIgOAAIgKAAg");
	this.shape_61.setTransform(125.425,235.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_62.setTransform(115.925,235.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_63.setTransform(112.575,235.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_64.setTransform(107.225,237.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEg");
	this.shape_65.setTransform(100.2015,237.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgXAlQgJgHgCgPIARgCQABAJAFAEQAFAEAHAAQAIAAAEgDQAFgEAAgFQAAgDgCgCQgCgDgEgBIgNgEQgOgDgGgEQgIgHAAgLQAAgGAEgGQAEgFAHgDQAHgDAJAAQAQAAAIAGQAIAIAAAMIgRABQgBgHgEgDQgDgDgHAAQgHAAgEADQgDACAAADQAAADACADQAEACALADQANAEAGACQAGAEAEAEQADAGAAAIQAAAIgEAGQgEAGgIADQgHADgLABQgQAAgIgIg");
	this.shape_66.setTransform(92.825,235.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgWAWQgGgJAAgNQAAgOAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEg");
	this.shape_67.setTransform(82.2015,237.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_68.setTransform(73.575,237.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_69.setTransform(66.4,237.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFADgFQACgDAEgBQAFgDAJgCQAKgCAFgBIAAgCQAAgFgDgCQgCgCgGAAQgEAAgCACQgDACgCAEIgPgDQADgJAGgEQAHgFALAAQAKAAAGADQAFACACAEQACAFAAALIAAARIABAMIADAJIgQAAIgBgFIgBgCQgFAEgEACQgEACgFABQgKAAgFgGgAAAADQgGACgDACQgDACAAADQAAAEADACQADADADAAQAEAAAEgDQADgCABgEIABgIIAAgDIgKACg");
	this.shape_70.setTransform(60.3,237.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_71.setTransform(55.275,235.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAYArIgHgUIghAAIgIAUIgSAAIAihVIARAAIAiBVgAgLAJIAWAAIgLgfg");
	this.shape_72.setTransform(49.25,235.9);

	this.mcTC_SeuilBas_T = new lib.mcTC_Activ();
	this.mcTC_SeuilBas_T.name = "mcTC_SeuilBas_T";
	this.mcTC_SeuilBas_T.parent = this;
	this.mcTC_SeuilBas_T.setTransform(141.05,267.6,1.0766,1.0748);

	this.mcTR_SeuilBas_PS = new lib.mcTR_Seuils();
	this.mcTR_SeuilBas_PS.name = "mcTR_SeuilBas_PS";
	this.mcTR_SeuilBas_PS.parent = this;
	this.mcTR_SeuilBas_PS.setTransform(392.05,159.65,1,1,0,0,0,108.8,26.4);

	this.mcTR_SeuilHaut_T = new lib.mcTR_Seuils();
	this.mcTR_SeuilHaut_T.name = "mcTR_SeuilHaut_T";
	this.mcTR_SeuilHaut_T.parent = this;
	this.mcTR_SeuilHaut_T.setTransform(132.05,159.65,1,1,0,0,0,108.8,26.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_73.setTransform(491.825,65.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgGACgEQADgEAFgBQAEgCAIgBQALgCAEgDIAAgBQAAgFgCgCQgCgCgFAAQgFAAgDABQgCADgBAEIgPgDQACgJAGgFQAHgDALAAQALgBAFADQAFADADAEQACADAAAMIAAASIABALIACAJIgQAAIgCgFIgBgCQgEAFgFACQgDABgGAAQgJAAgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADADQADACAEAAQADAAAEgDQADgCABgDIAAgJIAAgDIgJADg");
	this.shape_74.setTransform(486.85,66.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_75.setTransform(479.825,66.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATADQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQACABAEAAQAHAAADgCQACgBABgCIABgIIAAgJQgHAKgLAAQgMAAgIgKQgFgJAAgMQAAgPAHgIQAIgJALABQAKgBAIAKIAAgIIAPAAIAAA2QAAALgBAGQgCAGgEACQgDADgFADQgGACgIAAQgPgBgHgFgAgJgaQgDAEAAAJQAAALADADQAEAFAFgBQAGABAEgFQAEgDAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_76.setTransform(472.325,67.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_77.setTransform(467.125,65.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgXAlQgJgIgCgOIARgBQABAIAFAEQAFAEAHAAQAIAAAEgEQAFgDAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgKQAAgHAEgFQAEgHAHgCQAHgEAJAAQAQAAAIAHQAIAIAAALIgRABQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAACACACQAEAEALACQANADAGAEQAGADAEAFQADAFAAAIQAAAIgEAGQgEAHgIADQgHACgLAAQgQAAgIgHg");
	this.shape_78.setTransform(461.375,65.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_79.setTransform(450.7515,66.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgIANAAQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgDgFAAQgFAAgEAFQgDAEAAAKQAAAKADAEQAEAFAFAAQAFAAADgDQADgDABgGIAQADQgCALgHAFQgHAHgMgBQgNAAgIgIg");
	this.shape_80.setTransform(444.225,66.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_81.setTransform(437.125,66.525);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgGADgEQACgEAFgBQAEgCAIgBQALgCAFgDIAAgBQgBgFgCgCQgCgCgFAAQgFAAgDABQgCADgBAEIgPgDQACgJAGgFQAHgDALAAQALgBAFADQAFADADAEQACADAAAMIAAASIABALIACAJIgQAAIgCgFIgBgCQgEAFgFACQgDABgGAAQgJAAgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADADQACACAFAAQADAAAEgDQADgCABgDIABgJIAAgDIgKADg");
	this.shape_82.setTransform(430.15,66.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgTAcQgHgGgCgJIARgCQAAAFADACQAEACAEABQAHgBADgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgDQgSgEgGgDQgHgFAAgIQAAgJAGgFQAHgFANAAQAMAAAGADQAHAFACAIIgPADQgCgEgDgCQgCgCgFAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACACIAOAFQANADAGAEQAFAEAAAIQAAAIgHAGQgIAHgOgBQgLAAgIgEg");
	this.shape_83.setTransform(423.35,66.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgTAcQgHgGgCgJIAQgCQABAFAEACQADACAFABQAGgBADgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgDQgSgEgGgDQgHgFAAgIQAAgJAGgFQAHgFANAAQAMAAAHADQAGAFACAIIgPADQgBgEgEgCQgCgCgFAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACACIAOAFQANADAGAEQAFAEAAAIQAAAIgHAGQgHAHgOgBQgMAAgIgEg");
	this.shape_84.setTransform(416.7,66.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_85.setTransform(411.825,65.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_86.setTransform(406.475,66.675);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AggArIAAhVIAcAAQAPAAAFACQAHACAFAGQAFAHAAAJQAAAJgDAFQgCAEgFAEQgEACgFABIgRABIgLAAIAAAhgAgOgDIAJAAQAJAAAEgBQADgCACgDQACgDAAgDQAAgFgCgDQgEgDgDgBIgMgBIgIAAg");
	this.shape_87.setTransform(398.95,65.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgTAcQgHgGgCgJIAQgCQABAFAEACQADACAFABQAGgBADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAABgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgDQgSgEgGgDQgHgFAAgIQAAgJAGgFQAHgFANAAQAMAAAHADQAFAFADAIIgPADQgBgEgEgCQgDgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACACIAOAFQANADAGAEQAFAEAAAIQAAAIgHAGQgIAHgNgBQgMAAgIgEg");
	this.shape_88.setTransform(388,66.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgGACgEQADgEAEgBQAFgCAJgBQAKgCAEgDIAAgBQAAgFgCgCQgCgCgGAAQgEAAgDABQgCADgCAEIgPgDQADgJAGgFQAGgDAMAAQAKgBAGADQAFADADAEQABADAAAMIAAASIABALIADAJIgQAAIgBgFIgBgCQgFAFgEACQgEABgGAAQgJAAgFgFgAAAAEQgHABgCABQgDADAAAEQAAADADADQADACADAAQAEAAAEgDQADgCABgDIAAgJIAAgDIgJADg");
	this.shape_89.setTransform(381.5,66.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgjArIAAhVIAiAAIAPABQAFABAEADQAEACACAFQADAEAAAGQAAAGgDAFQgEAFgFADQAIABAEAFQAEAGAAAHQAAAGgDAFQgCAGgFADQgFAEgHABIgUAAgAgSAcIAQAAIALAAQAEAAADgDQACgDAAgFQAAgDgCgEQgCgCgDgBQgEgCgLABIgOAAgAgSgIIAMAAIALAAQAFAAACgDQADgDAAgEQAAgEgCgDQgCgCgFgBIgOAAIgKAAg");
	this.shape_90.setTransform(373.975,65.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_91.setTransform(364.475,65.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_92.setTransform(361.125,65.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_93.setTransform(355.775,66.675);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_94.setTransform(348.7515,66.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgXAlQgJgIgCgOIARgBQABAIAFAEQAFAEAHAAQAIAAAEgEQAFgDAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgKQAAgHAEgFQAEgHAHgCQAHgEAJAAQAQAAAIAHQAIAIAAALIgRABQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAACACACQAEAEALACQANADAGAEQAGADAEAFQADAFAAAIQAAAIgEAGQgEAHgIADQgHACgLAAQgQAAgIgHg");
	this.shape_95.setTransform(341.375,65.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_96.setTransform(330.7515,66.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_97.setTransform(322.125,66.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQADgCAEAAQAGAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgBAFAAAPIAAATg");
	this.shape_98.setTransform(314.95,66.525);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgGACgEQADgEAEgBQAFgCAIgBQALgCAEgDIAAgBQABgFgDgCQgCgCgGAAQgEAAgDABQgCADgBAEIgQgDQADgJAGgFQAGgDAMAAQALgBAFADQAFADADAEQACADgBAMIAAASIABALIADAJIgQAAIgCgFIgBgCQgDAFgGACQgDABgGAAQgJAAgFgFgAAAAEQgGABgDABQgDADAAAEQAAADADADQACACAFAAQADAAAEgDQADgCABgDIAAgJIAAgDIgJADg");
	this.shape_99.setTransform(308.85,66.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_100.setTransform(303.825,65.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AAYArIgHgTIgiAAIgGATIgTAAIAhhVIASAAIAiBVgAgLAJIAXAAIgMgfg");
	this.shape_101.setTransform(297.8,65.4);

	this.mcTC_SeuilBas_PS = new lib.mcTC_Activ();
	this.mcTC_SeuilBas_PS.name = "mcTC_SeuilBas_PS";
	this.mcTC_SeuilBas_PS.parent = this;
	this.mcTC_SeuilBas_PS.setTransform(401.05,97.6,1.0766,1.0748);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_102.setTransform(220.3515,66.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_103.setTransform(215.2,66.525);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_104.setTransform(208.725,66.675);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_105.setTransform(203.075,65.575);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgGADgEQACgEAFgBQAEgCAIgBQALgCAFgDIAAgBQgBgFgCgCQgCgCgFAAQgFAAgCABQgDADgCAEIgOgDQACgJAGgFQAHgDALAAQAKgBAGADQAFADACAEQACADABAMIAAASIABALIACAJIgQAAIgCgFIAAgCQgEAFgFACQgEABgFAAQgKAAgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADADQACACAEAAQAEAAAEgDQADgCABgDIABgJIAAgDIgKADg");
	this.shape_106.setTransform(197.75,66.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQADgCAEAAQAGAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgBAFAAAPIAAATg");
	this.shape_107.setTransform(192.55,66.525);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgWAiQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgDQgDADAAAHIAXAAQAAgHgDgDQgEgEgFAAQgEAAgEAEgAgIgaIAIgSIASAAIgQASg");
	this.shape_108.setTransform(186.4015,65.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgdAsIAAhVIAPAAIAAAJQADgFAFgDQAFgCAGAAQAKAAAIAIQAIAIgBAPQAAAPgHAJQgIAIgKAAQgFAAgEgBQgFgDgEgFIAAAggAgJgZQgEAFAAAJQAAALAEADQAFAFAEABQAGAAAEgFQAEgEAAgLQgBgJgEgFQgDgFgGAAQgFAAgEAFg");
	this.shape_109.setTransform(179.6,67.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_110.setTransform(170.425,66.525);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_111.setTransform(161.7515,66.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgIArIAAhHIgZAAIAAgOIBDAAIAAAOIgZAAIAABHg");
	this.shape_112.setTransform(154.775,65.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_113.setTransform(145.775,65.575);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_114.setTransform(140.075,66.675);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgGACgEQADgEAEgBQAFgCAJgBQAKgCAEgDIAAgBQAAgFgCgCQgCgCgGAAQgEAAgDABQgCADgCAEIgPgDQADgJAGgFQAGgDAMAAQAKgBAGADQAFADACAEQACADAAAMIAAASIABALIADAJIgQAAIgBgFIgBgCQgFAFgEACQgEABgGAAQgJAAgFgFgAAAAEQgHABgCABQgDADAAAEQAAADADADQADACAEAAQADAAAEgDQADgCABgDIAAgJIAAgDIgJADg");
	this.shape_115.setTransform(133.1,66.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AARArIAAglIghAAIAAAlIgRAAIAAhVIARAAIAAAiIAhAAIAAgiIARAAIAABVg");
	this.shape_116.setTransform(125.425,65.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_117.setTransform(116.075,65.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_118.setTransform(112.725,65.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_119.setTransform(107.375,66.675);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_120.setTransform(100.3515,66.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgXAlQgJgIgCgOIARgBQABAIAFAEQAFAEAHAAQAIAAAEgEQAFgDAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgKQAAgHAEgFQAEgHAHgCQAHgEAJAAQAQAAAIAHQAIAIAAALIgRABQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAACACACQAEAEALACQANADAGAEQAGADAEAFQADAFAAAIQAAAIgEAGQgEAHgIADQgHACgLAAQgQAAgIgHg");
	this.shape_121.setTransform(92.975,65.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_122.setTransform(82.3515,66.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_123.setTransform(73.725,66.525);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQADgCAFAAQAFAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgBAFAAAPIAAATg");
	this.shape_124.setTransform(66.55,66.525);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgGACgEQADgEAEgBQAFgCAIgBQALgCAEgDIAAgBQABgFgDgCQgCgCgGAAQgEAAgDABQgCADgBAEIgQgDQADgJAGgFQAGgDAMAAQALgBAFADQAFADADAEQABADAAAMIAAASIABALIADAJIgQAAIgCgFIgBgCQgDAFgGACQgDABgGAAQgJAAgFgFgAAAAEQgGABgDABQgDADAAAEQAAADADADQACACAFAAQADAAAEgDQADgCABgDIAAgJIAAgDIgJADg");
	this.shape_125.setTransform(60.45,66.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_126.setTransform(55.425,65.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AAYArIgHgTIgiAAIgGATIgTAAIAhhVIASAAIAiBVgAgLAJIAXAAIgMgfg");
	this.shape_127.setTransform(49.4,65.4);

	this.mcTC_SeuilHaut_T = new lib.mcTC_Activ();
	this.mcTC_SeuilHaut_T.name = "mcTC_SeuilHaut_T";
	this.mcTC_SeuilHaut_T.parent = this;
	this.mcTC_SeuilHaut_T.setTransform(141.05,97.6,1.0766,1.0748);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgOAuIAOgPIAPAPIgPAPgAgIATIAAhPIASAAIAABPg");
	this.shape_128.setTransform(19.2657,22.3473,1.089,1.0899);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF3D53").s().p("AhtBcIBti3IBtC3gAgOA/IAOAQIAPgQIgPgPgAgJAkIASAAIAAhPIgSAAg");
	this.shape_129.setTransform(19.3201,20.4672,1.089,1.0899);

	this.btFermer = new lib.btFermer();
	this.btFermer.name = "btFermer";
	this.btFermer.parent = this;
	this.btFermer.setTransform(501.6,20.1,0.3872,0.3872,0,0,0,25.8,26.1);
	new cjs.ButtonHelper(this.btFermer, 0, 1, 2, false, new lib.btFermer(), 3);

	this.sTitre = new cjs.Text("REGLAGES ALARMES SONDE TEMPERATURE RADIO FREQUENCE", "bold 11px 'Arial'", "#FFFFFF");
	this.sTitre.name = "sTitre";
	this.sTitre.lineHeight = 15;
	this.sTitre.lineWidth = 435;
	this.sTitre.parent = this;
	this.sTitre.setTransform(36.25,17.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#666666").ss(0.5,1,1).p("ACDrgIAAadMAklAAAEgmngLmMAoqAAAMAklAAAEACDgjuIAAYIEgmnAO9MAoqAAAIAAUy");
	this.shape_130.setTransform(260.5,283.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.sTitre},{t:this.btFermer},{t:this.shape_129},{t:this.shape_128},{t:this.mcTC_SeuilHaut_T},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.mcTC_SeuilBas_PS},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.mcTR_SeuilHaut_T},{t:this.mcTR_SeuilBas_PS},{t:this.mcTC_SeuilBas_T},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.mcTC_SeuilBas_QS},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.mcTR_SeuilBas_T},{t:this.mcTR_SeuilBas_QS},{t:this.mcTC_RB},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.mcTR_TempoAvant},{t:this.btInfo_TC_SeuilHaut_T},{t:this.btInfo_TC_SeuilBas_PS},{t:this.btInfo_TC_SeuilBas_T},{t:this.btInfo_TC_SeuilBas_QS},{t:this.btInfo_mcTC_RB},{t:this.btInfoTR_SeuilBas_T},{t:this.btInfoTR_SeuilBas_S},{t:this.btInfoTR_SeuilHaut_T},{t:this.btInfoTR_SeuilHaut_S},{t:this.btInfoTR_SeuilBas_PS_T},{t:this.btInfoTR_SeuilBas_PS_S},{t:this.btInfoTR_SeuilBas_QS_T},{t:this.btInfoTR_SeuilBas_QS_S},{t:this.btInfoTR_TempoAvant_T}]}).wait(1));

	// fond2
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(0.5,1,1).p("EgodgDHMBQ7AAAIAAGPMhQ7AAAg");
	this.shape_131.setTransform(259,20);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6699FF").s().p("EgodADIIAAmPMBQ7AAAIAAGPg");
	this.shape_132.setTransform(259,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131}]}).wait(1));

	// fond1
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(0.5,1,1).p("EgodgpkMBQ7AAAMAAABTJMhQ7AAAg");
	this.shape_133.setTransform(259,266.15);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EEF7FF").s().p("EgodAplMAAAhTJMBQ7AAAMAAABTJg");
	this.shape_134.setTransform(259,266.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_134},{t:this.shape_133}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcPopUpAlarme, new cjs.Rectangle(-1,-1,520,534.3), null);


// stage content:
(lib.sondetrfpopupalarmes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// popUp
	this.sINPUT9 = new lib.an_TextInput({'id': 'sINPUT9', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT9.setTransform(182.8,482.55,0.3999,0.709,0,0,0,44.4,9.4);

	this.sINPUT8 = new lib.an_TextInput({'id': 'sINPUT8', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT8.setTransform(442.8,347.55,0.3999,0.709,0,0,0,44.4,9.4);

	this.sINPUT7 = new lib.an_TextInput({'id': 'sINPUT7', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT7.setTransform(442.8,313.05,0.3999,0.709,0,0,0,44.4,9.4);

	this.sINPUT6 = new lib.an_TextInput({'id': 'sINPUT6', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT6.setTransform(442.8,177.55,0.3999,0.709,0,0,0,44.4,9.4);

	this.sINPUT5 = new lib.an_TextInput({'id': 'sINPUT5', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT5.setTransform(442.8,143.05,0.3999,0.709,0,0,0,44.4,9.4);

	this.sINPUT4 = new lib.an_TextInput({'id': 'sINPUT4', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT4.setTransform(182.8,347.55,0.3999,0.709,0,0,0,44.4,9.4);

	this.sINPUT3 = new lib.an_TextInput({'id': 'sINPUT3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT3.setTransform(182.8,313.05,0.3999,0.709,0,0,0,44.4,9.4);

	this.sINPUT2 = new lib.an_TextInput({'id': 'sINPUT2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT2.setTransform(182.8,177.55,0.3999,0.709,0,0,0,44.4,9.4);

	this.sINPUT1 = new lib.an_TextInput({'id': 'sINPUT1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.sINPUT1.setTransform(182.8,143.05,0.3999,0.709,0,0,0,44.4,9.4);

	this.mcPopUP = new lib.mcPopUpAlarme();
	this.mcPopUP.name = "mcPopUP";
	this.mcPopUP.parent = this;
	this.mcPopUP.setTransform(251,153,1,1,0,0,0,250,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcPopUP},{t:this.sINPUT1},{t:this.sINPUT2},{t:this.sINPUT3},{t:this.sINPUT4},{t:this.sINPUT5},{t:this.sINPUT6},{t:this.sINPUT7},{t:this.sINPUT8},{t:this.sINPUT9}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.8,272.8,258.49999999999994,262.7);
// library properties:
lib.properties = {
	id: 'D6624C4551F316468B501D5D33AE6DA0',
	width: 520,
	height: 540,
	fps: 1,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"components/lib/jquery-2.2.4.min.js?1557129724501", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1557129724501", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1557129724501", id:"an.TextInput"}
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