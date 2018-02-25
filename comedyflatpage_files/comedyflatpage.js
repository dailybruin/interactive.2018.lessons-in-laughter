(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,1554);


(lib.Bitmap311 = function() {
	this.initialize(img.Bitmap311);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1606,552);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1021,594);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,562,314);// helper functions:

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


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.129)").s().p("Egj1Aw6MAzvhi7IKaB7MAJiBiIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.4,-320.2,458.8,640.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.129)").s().p("EgoWAy3MBIVhmJIIZG4MgL0Bftg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258.3,-328.3,516.7,656.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap311();
	this.instance.parent = this;
	this.instance.setTransform(-803,-276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-803,-276,1606,552);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,562,314), null);


(lib.Scene_1_brick_ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// brick_ai
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(2040,-192,1,1,0,0,180);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(470,190);

	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-78,-192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApCHYIAAuvISFAAIAAOvg");
	mask.setTransform(57.9,47.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#565656").s().p("Ao4AgIFtntIMEMlIhhB2g");
	this.shape.setTransform(57.9,47.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(1,1,113.9,92.4), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AldFPIAAqdIK7AAIAAKdg");
	mask.setTransform(35,33.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("AjvDmQhjhfAAiHQAAiFBjhgQBkhfCLAAQCMAABjBfQBkBgAACFQAACHhkBfQhjBfiMAAQiLAAhkhfg");
	this.shape.setTransform(35,33.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(1.2,1.1,67.8,65), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.ClipGroup, null, null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EjXnGvQMAAAtefMGvPAAAMAAANefg");
	mask_1.setTransform(1380,2760);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#070404").s().p("ACPGCQingfigiGQihiHg7ifQg7igBMhbQBNhbCoAeQCmAfChCHQChCGA7CfQA7CghMBbQg6BFhtAAQgkAAgqgIg");
	this.shape_1.setTransform(2264.4,368.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(2221.4,329.6,86.2,78.7), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EjXnGvQMAAAtefMGvPAAAMAAANefg");
	mask.setTransform(1380,2760);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBEgQiIhUiqiQQiriPhrh3Qhqh3AUgZQAVgZCIBUQCIBUCqCQQCsCPBqB3QBqB4gUAYQgFAGgLAAQgkAAhphBg");
	this.shape.setTransform(2211.2,439.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(2169.5,404,83.4,70.6), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.129)").s().p("Egs7gsQIJUmFMBQjBkWMhYGAAVg");
	this.shape.setTransform(277.2,1408.6);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(873.7,-678.8,1,1,0,0,0,1438.5,1052);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,1086.4,575.2,644.4);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.129)").s().p("Egj1Aw8MAWbhhRIJwhuMAngBkHg");
	this.shape.setTransform(205.6,1412.9);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(1003.5,-681.2,1,1,0,0,0,1438.5,1052);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,1092.5,458.8,640.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(258.4,328.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,516.7,656.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(229.4,320.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,458.8,640.4), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(435,1733.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(411.2,2825.7,458.8,640.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(564.8,1730.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(554.4,2817.3,575.2,644.4), null);


(lib.Scene_1_Layer_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_17
	this.l3 = new lib.Symbol5();
	this.l3.name = "l3";
	this.l3.parent = this;
	this.l3.setTransform(1082,482.5,1,1,0,0,0,229.4,320.2);
	this.l3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.l3).wait(27).to({alpha:1},0).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_16
	this.l4 = new lib.Symbol6();
	this.l4.name = "l4";
	this.l4.parent = this;
	this.l4.setTransform(1290.7,467.4,1,1,0,0,0,258.4,328.3);
	this.l4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.l4).wait(16).to({alpha:1},0).wait(57));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6_copy
	this.l2 = new lib.Symbol4();
	this.l2.name = "l2";
	this.l2.parent = this;
	this.l2.setTransform(959.2,-931.8,1,1,0,0,0,719.2,1733.2);
	this.l2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.l2).wait(38).to({alpha:1},0).wait(35));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.logo = new lib.Symbol1();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(812,480,1,1,0,0,0,281,157);
	this.logo.filters = [new cjs.ColorFilter(0.87, 0.87, 0.87, 1, 0, 0, 0, 0)];
	this.logo.cache(-2,-2,566,318);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.l1 = new lib.Symbol3();
	this.l1.name = "l1";
	this.l1.parent = this;
	this.l1.setTransform(621.1,-934.1,1,1,0,0,0,719.2,1730.9);
	this.l1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(53).to({alpha:1},0).wait(20));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lamp_ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lamp_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AlnncIACgBIN6LrIAPDLIxCuTg");
	this.shape.setTransform(820.7,157.9,0.705,0.705,-45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020101").s().p("Aohm3IC3giIACgCIN6LrIAQDMg");
	this.shape_1.setTransform(820.7,157.6,0.705,0.705,-45);

	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(1565.7,1732.8,0.705,0.705,-45,0,0,1380,2760.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#010000").s().p("Apvl9ICLimIRUOiIiLClg");
	this.shape_2.setTransform(822.8,166.4,0.705,0.705,-45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010101").s().p("Aq4hGIH6pcIN4LpIn7Jcg");
	this.shape_3.setTransform(816.7,120.7,0.705,0.705,-45);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1565.7,1732.8,0.705,0.705,-45,0,0,1380,2760.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(9,0,0,4).p("AiPAbIBgizICzBAIAHEn");
	this.shape_4.setTransform(803.1,76.9,0.705,0.705,-45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,0,0,4).p("AlnncIACgBIN6LrIAPDLIxCuTg");
	this.shape_5.setTransform(1211.5,159.4,0.705,0.705,-30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020101").s().p("Aohm3IC3giIACgCIN6LrIAQDMg");
	this.shape_6.setTransform(1211.6,159.2,0.705,0.705,-30);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1523.4,1873.7,0.705,0.705,-30,0,0,1380,2760.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#010000").s().p("Apvl9ICLimIRUOiIiLClg");
	this.shape_7.setTransform(1211.3,168.2,0.705,0.705,-30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010101").s().p("Aq4hGIH6pcIN4LpIn7Jcg");
	this.shape_8.setTransform(1217.3,122.4,0.705,0.705,-30);

	this.instance_3 = new lib.ClipGroup_1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1523.4,1873.7,0.705,0.705,-30,0,0,1380,2760.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(9,0,0,4).p("AiPAbIBgizICzBAIAHEn");
	this.shape_9.setTransform(1215.5,76.6,0.705,0.705,-30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,0,0,4).p("AlnncIACgBIN6LrIAPDLIxCuTg");
	this.shape_10.setTransform(478.6,163,0.705,0.705,-75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020101").s().p("Aohm3IC3giIACgCIN6LrIAQDMg");
	this.shape_11.setTransform(478.4,162.7,0.705,0.705,-75);

	this.instance_4 = new lib.ClipGroup_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1911.2,1154.7,0.705,0.705,-75,0,0,1380,2760);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#010000").s().p("Apvl9ICLimIRUOiIiLClg");
	this.shape_12.setTransform(484.7,169.3,0.705,0.705,-75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#010101").s().p("Aq4hGIH6pcIN4LpIn7Jcg");
	this.shape_13.setTransform(456.5,132.7,0.705,0.705,-75);

	this.instance_5 = new lib.ClipGroup_1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1911.2,1154.7,0.705,0.705,-75,0,0,1380,2760);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(9,0,0,4).p("AiPAbIBgizICzBAIAHEn");
	this.shape_14.setTransform(422.9,101.6,0.705,0.705,-75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,0,0,4).p("AlnncIACgBIN6LrIAPDLIxCuTg");
	this.shape_15.setTransform(1520.7,159.6,0.705,0.705);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#020101").s().p("Aohm3IC3giIACgCIN6LrIAQDMg");
	this.shape_16.setTransform(1520.9,159.4,0.705,0.705);

	this.instance_6 = new lib.ClipGroup_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(933.6,1800.2,0.705,0.705,0,0,0,1380,2760);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#010000").s().p("Apvl9ICLimIRUOiIiLClg");
	this.shape_17.setTransform(1516.2,167.1,0.705,0.705);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#010101").s().p("Aq4hGIH6pcIN4LpIn7Jcg");
	this.shape_18.setTransform(1544.2,130.5,0.705,0.705);

	this.instance_7 = new lib.ClipGroup_1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(933.6,1800.2,0.705,0.705,0,0,0,1380,2760);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(9,0,0,4).p("AiPAbIBgizICzBAIAHEn");
	this.shape_19.setTransform(1565.5,89.9,0.705,0.705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.instance_7},{t:this.shape_18},{t:this.shape_17},{t:this.instance_6},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_5},{t:this.shape_13},{t:this.shape_12},{t:this.instance_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_3},{t:this.shape_8},{t:this.shape_7},{t:this.instance_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_chairs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chairs
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(970,1095);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},71).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EjXnGvQMAAAtefMGvPAAAMAAANefg");
	mask_1.setTransform(1380,2760);

	// Layer_3
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(1842.4,1021.1,1,1,0,0,0,57.9,47.1);

	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1792.3,990.5,1,1,0,0,0,35,33.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(1757.3,957,143,111.3), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(-267.7,795.8,0.55,0.55,0,0,0,1380,2760);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282828").s().p("EgA/AsrMAAAhZVIB/AAMAAABZVg");
	this.shape.setTransform(0.1,15.2,0.55,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#565656").s().p("AtDDCQlbhRABhxQgBhwFbhRQFahQHpAAQHqAAFaBQQFaBRAABwQAABxlaBRQlaBQnqAAQnpAAlahQg");
	this.shape_1.setTransform(0,179.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1026.2,-721.3,1517.1,3034.3);


(lib.Scene_1_mic_ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mic_ai
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1259.3,636.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},71).wait(2));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.comedyflatpage = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{sign:0});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.l4 = this.Layer_16.l4;
		this.l3 = this.Layer_17.l3;
		this.l2 = this.Layer_6_copy.l2;
		this.l1 = this.Layer_6.l1;
		this.logo = this.Layer_6_1.logo;
		window.light1 = this.l1
		window.light2 = this.l2
		window.light3 = this.l3
		window.light4 = this.l4
		
		console.log(this.l1)
	}
	this.frame_16 = function() {
		this.l4 = undefined;this.l4 = this.Layer_16.l4;
	}
	this.frame_27 = function() {
		this.l3 = undefined;this.l3 = this.Layer_17.l3;
	}
	this.frame_38 = function() {
		this.l2 = undefined;this.l2 = this.Layer_6_copy.l2;
	}
	this.frame_53 = function() {
		this.l1 = undefined;this.l1 = this.Layer_6.l1;
	}
	this.frame_72 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(11).call(this.frame_27).wait(11).call(this.frame_38).wait(15).call(this.frame_53).wait(19).call(this.frame_72).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(960,540.1,0.972,0.972);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:0.1,regY:0.1,scaleX:0.85,scaleY:0.85,x:960.1,y:540.2},71).wait(2));

	// chairs_obj_
	this.chairs = new lib.Scene_1_chairs();
	this.chairs.name = "chairs";
	this.chairs.parent = this;
	this.chairs.setTransform(970,1095,1,1,0,0,0,970,1095);
	this.chairs.depth = -3;
	this.chairs.isAttachedToCamera = 0
	this.chairs.isAttachedToMask = 0
	this.chairs.layerDepth = 0
	this.chairs.layerIndex = 0
	this.chairs.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.chairs).to({depth:-39},71).wait(2));

	// mic_ai_obj_
	this.mic_ai = new lib.Scene_1_mic_ai();
	this.mic_ai.name = "mic_ai";
	this.mic_ai.parent = this;
	this.mic_ai.setTransform(991.6,1432.5,1,1,0,0,0,991.6,1432.5);
	this.mic_ai.depth = 0;
	this.mic_ai.isAttachedToCamera = 0
	this.mic_ai.isAttachedToMask = 0
	this.mic_ai.layerDepth = 0
	this.mic_ai.layerIndex = 1
	this.mic_ai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.mic_ai).to({depth:-20},71).wait(2));

	// Layer_16_obj_
	this.Layer_16 = new lib.Scene_1_Layer_16();
	this.Layer_16.name = "Layer_16";
	this.Layer_16.parent = this;
	this.Layer_16.setTransform(1290.6,467.4,1,1,0,0,0,1290.6,467.4);
	this.Layer_16.depth = 0;
	this.Layer_16.isAttachedToCamera = 0
	this.Layer_16.isAttachedToMask = 0
	this.Layer_16.layerDepth = 0
	this.Layer_16.layerIndex = 2
	this.Layer_16.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_16).wait(73));

	// Layer_17_obj_
	this.Layer_17 = new lib.Scene_1_Layer_17();
	this.Layer_17.name = "Layer_17";
	this.Layer_17.parent = this;
	this.Layer_17.setTransform(1082,482.4,1,1,0,0,0,1082,482.4);
	this.Layer_17.depth = 0;
	this.Layer_17.isAttachedToCamera = 0
	this.Layer_17.isAttachedToMask = 0
	this.Layer_17.layerDepth = 0
	this.Layer_17.layerIndex = 3
	this.Layer_17.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_17).wait(73));

	// Layer_6_copy_obj_
	this.Layer_6_copy = new lib.Scene_1_Layer_6_copy();
	this.Layer_6_copy.name = "Layer_6_copy";
	this.Layer_6_copy.parent = this;
	this.Layer_6_copy.setTransform(959.2,-931.8,1,1,0,0,0,959.2,-931.8);
	this.Layer_6_copy.depth = 0;
	this.Layer_6_copy.isAttachedToCamera = 0
	this.Layer_6_copy.isAttachedToMask = 0
	this.Layer_6_copy.layerDepth = 0
	this.Layer_6_copy.layerIndex = 4
	this.Layer_6_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6_copy).wait(73));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.setTransform(621.1,-934.1,1,1,0,0,0,621.1,-934.1);
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 5
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(73));

	// lamp_ai_obj_
	this.lamp_ai = new lib.Scene_1_lamp_ai();
	this.lamp_ai.name = "lamp_ai";
	this.lamp_ai.parent = this;
	this.lamp_ai.setTransform(1772.2,1857,1,1,0,0,0,1772.2,1857);
	this.lamp_ai.depth = 0;
	this.lamp_ai.isAttachedToCamera = 0
	this.lamp_ai.isAttachedToMask = 0
	this.lamp_ai.layerDepth = 0
	this.lamp_ai.layerIndex = 6
	this.lamp_ai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lamp_ai).wait(73));

	// Layer_6_obj_
	this.Layer_6_1 = new lib.Scene_1_Layer_6_1();
	this.Layer_6_1.name = "Layer_6_1";
	this.Layer_6_1.parent = this;
	this.Layer_6_1.setTransform(812,480,1,1,0,0,0,812,480);
	this.Layer_6_1.depth = 0;
	this.Layer_6_1.isAttachedToCamera = 0
	this.Layer_6_1.isAttachedToMask = 0
	this.Layer_6_1.layerDepth = 0
	this.Layer_6_1.layerIndex = 7
	this.Layer_6_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6_1).wait(73));

	// brick_ai_obj_
	this.brick_ai = new lib.Scene_1_brick_ai();
	this.brick_ai.name = "brick_ai";
	this.brick_ai.parent = this;
	this.brick_ai.setTransform(981,585,1,1,0,0,0,981,585);
	this.brick_ai.depth = 0;
	this.brick_ai.isAttachedToCamera = 0
	this.brick_ai.isAttachedToMask = 0
	this.brick_ai.layerDepth = 0
	this.brick_ai.layerIndex = 8
	this.brick_ai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.brick_ai).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(461.9,-2125,4540.8,6710.1);
// library properties:
lib.properties = {
	id: '3FF4097AAD9E43C0A0EB516F9C8D1CE5',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#3A3331",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap311.png", id:"Bitmap311"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"}
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
an.compositions['3FF4097AAD9E43C0A0EB516F9C8D1CE5'] = {
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


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;