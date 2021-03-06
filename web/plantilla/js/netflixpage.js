define('dartpad_main', ['dart_sdk', 'flutter_web'], (function load__dartpad_main(dart_sdk, flutter_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_view = flutter_web.src__widgets__platform_view;
  const framework = flutter_web.src__widgets__framework;
  const app = flutter_web.src__material__app;
  const media_query = flutter_web.src__widgets__media_query;
  const material = flutter_web.src__material__material;
  const colors = flutter_web.src__material__colors;
  const scroll_view = flutter_web.src__widgets__scroll_view;
  const container = flutter_web.src__widgets__container;
  const basic = flutter_web.src__widgets__basic;
  const edge_insets = flutter_web.src__painting__edge_insets;
  const text = flutter_web.src__widgets__text;
  const text_style = flutter_web.src__painting__text_style;
  const image = flutter_web.src__widgets__image;
  const box_fit = flutter_web.src__painting__box_fit;
  const box_decoration = flutter_web.src__painting__box_decoration;
  const gradient = flutter_web.src__painting__gradient;
  const alignment = flutter_web.src__painting__alignment;
  const gesture_detector = flutter_web.src__widgets__gesture_detector;
  const navigator = flutter_web.src__widgets__navigator;
  const page = flutter_web.src__material__page;
  const border_radius = flutter_web.src__painting__border_radius;
  const flex = flutter_web.src__rendering__flex;
  const wrap = flutter_web.src__rendering__wrap;
  const basic_types = flutter_web.src__painting__basic_types;
  const box_border = flutter_web.src__painting__box_border;
  const borders = flutter_web.src__painting__borders;
  const text_field = flutter_web.src__material__text_field;
  const input_decorator = flutter_web.src__material__input_decorator;
  const input_border = flutter_web.src__material__input_border;
  const icon = flutter_web.src__widgets__icon;
  const icons = flutter_web.src__material__icons;
  const sliver_grid = flutter_web.src__rendering__sliver_grid;
  const decoration_image = flutter_web.src__painting__decoration_image;
  const _network_image_web = flutter_web.src__painting___network_image_web;
  const single_child_scroll_view = flutter_web.src__widgets__single_child_scroll_view;
  const material_button = flutter_web.src__material__material_button;
  const rounded_rectangle_border = flutter_web.src__painting__rounded_rectangle_border;
  const ink_well = flutter_web.src__material__ink_well;
  const events = flutter_web.src__gestures__events;
  const custom_paint = flutter_web.src__rendering__custom_paint;
  const scroll_controller = flutter_web.src__widgets__scroll_controller;
  const scaffold = flutter_web.src__material__scaffold;
  const vector_math_64 = flutter_web.vector_math_64;
  const theme = flutter_web.src__material__theme;
  const bottom_navigation_bar = flutter_web.src__material__bottom_navigation_bar;
  const bottom_navigation_bar_item = flutter_web.src__widgets__bottom_navigation_bar_item;
  const implicit_animations = flutter_web.src__widgets__implicit_animations;
  const focus_manager = flutter_web.src__widgets__focus_manager;
  const animation_controller = flutter_web.src__animation__animation_controller;
  const animation = flutter_web.src__animation__animation;
  const curves = flutter_web.src__animation__curves;
  const tween = flutter_web.src__animation__tween;
  const animations = flutter_web.src__animation__animations;
  const stack = flutter_web.src__rendering__stack;
  const visibility = flutter_web.src__widgets__visibility;
  const transitions = flutter_web.src__widgets__transitions;
  const ticker_provider = flutter_web.src__widgets__ticker_provider;
  const binding = flutter_web.src__widgets__binding;
  var bootstrap = Object.create(dart.library);
  var main = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $play = dartx.play;
  var $add = dartx.add;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $length = dartx.length;
  var $modulo = dartx['%'];
  var $cursor = dartx.cursor;
  var $document = dartx.document;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    HtmlElementL: () => (T.HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))(),
    intL: () => (T.intL = dart.constFn(dart.legacy(core.int)))(),
    intLToHtmlElementL: () => (T.intLToHtmlElementL = dart.constFn(dart.fnType(T.HtmlElementL(), [T.intL()])))(),
    MouseEventL: () => (T.MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))(),
    MouseEventLTovoid: () => (T.MouseEventLTovoid = dart.constFn(dart.fnType(dart.void, [T.MouseEventL()])))(),
    VideoElementL: () => (T.VideoElementL = dart.constFn(dart.legacy(html.VideoElement)))(),
    intLToVideoElementL: () => (T.intLToVideoElementL = dart.constFn(dart.fnType(T.VideoElementL(), [T.intL()])))(),
    WidgetL: () => (T.WidgetL = dart.constFn(dart.legacy(framework.Widget)))(),
    TupleOfWidgetL$VideoElementL: () => (T.TupleOfWidgetL$VideoElementL = dart.constFn(main.Tuple$(T.WidgetL(), T.VideoElementL())))(),
    JSArrayOfWidgetL: () => (T.JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(T.WidgetL())))(),
    ColorL: () => (T.ColorL = dart.constFn(dart.legacy(ui.Color)))(),
    JSArrayOfColorL: () => (T.JSArrayOfColorL = dart.constFn(_interceptors.JSArray$(T.ColorL())))(),
    doubleL: () => (T.doubleL = dart.constFn(dart.legacy(core.double)))(),
    LoginScreenL: () => (T.LoginScreenL = dart.constFn(dart.legacy(main.LoginScreen)))(),
    BuildContextL: () => (T.BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))(),
    BuildContextLToLoginScreenL: () => (T.BuildContextLToLoginScreenL = dart.constFn(dart.fnType(T.LoginScreenL(), [T.BuildContextL()])))(),
    FutureL: () => (T.FutureL = dart.constFn(dart.legacy(async.Future)))(),
    VoidToFutureL: () => (T.VoidToFutureL = dart.constFn(dart.fnType(T.FutureL(), [])))(),
    numL: () => (T.numL = dart.constFn(dart.legacy(core.num)))(),
    CrossAxisAlignmentL: () => (T.CrossAxisAlignmentL = dart.constFn(dart.legacy(flex.CrossAxisAlignment)))(),
    MainAxisAlignmentL: () => (T.MainAxisAlignmentL = dart.constFn(dart.legacy(flex.MainAxisAlignment)))(),
    TextAlignL: () => (T.TextAlignL = dart.constFn(dart.legacy(ui.TextAlign)))(),
    ProfileScreenL: () => (T.ProfileScreenL = dart.constFn(dart.legacy(main.ProfileScreen)))(),
    BuildContextLToProfileScreenL: () => (T.BuildContextLToProfileScreenL = dart.constFn(dart.fnType(T.ProfileScreenL(), [T.BuildContextL()])))(),
    boolL: () => (T.boolL = dart.constFn(dart.legacy(core.bool)))(),
    RouteL: () => (T.RouteL = dart.constFn(dart.legacy(navigator.Route)))(),
    RouteLToboolL: () => (T.RouteLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.RouteL()])))(),
    BrowseScreenL: () => (T.BrowseScreenL = dart.constFn(dart.legacy(main.BrowseScreen)))(),
    BuildContextLToBrowseScreenL: () => (T.BuildContextLToBrowseScreenL = dart.constFn(dart.fnType(T.BrowseScreenL(), [T.BuildContextL()])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    VoidToboolL: () => (T.VoidToboolL = dart.constFn(dart.fnType(T.boolL(), [])))(),
    PointerHoverEventL: () => (T.PointerHoverEventL = dart.constFn(dart.legacy(events.PointerHoverEvent)))(),
    PointerHoverEventLTovoid: () => (T.PointerHoverEventLTovoid = dart.constFn(dart.fnType(dart.void, [T.PointerHoverEventL()])))(),
    PointerExitEventL: () => (T.PointerExitEventL = dart.constFn(dart.legacy(events.PointerExitEvent)))(),
    PointerExitEventLTovoid: () => (T.PointerExitEventLTovoid = dart.constFn(dart.fnType(dart.void, [T.PointerExitEventL()])))(),
    CustomPainterL: () => (T.CustomPainterL = dart.constFn(dart.legacy(custom_paint.CustomPainter)))(),
    VoidTodoubleL: () => (T.VoidTodoubleL = dart.constFn(dart.fnType(T.doubleL(), [])))(),
    VoidTointL: () => (T.VoidTointL = dart.constFn(dart.fnType(T.intL(), [])))(),
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    PlayMovieL: () => (T.PlayMovieL = dart.constFn(dart.legacy(main.PlayMovie)))(),
    BuildContextLToPlayMovieL: () => (T.BuildContextLToPlayMovieL = dart.constFn(dart.fnType(T.PlayMovieL(), [T.BuildContextL()])))(),
    GestureDetectorL: () => (T.GestureDetectorL = dart.constFn(dart.legacy(gesture_detector.GestureDetector)))(),
    BuildContextLAndintLToGestureDetectorL: () => (T.BuildContextLAndintLToGestureDetectorL = dart.constFn(dart.fnType(T.GestureDetectorL(), [T.BuildContextL(), T.intL()])))(),
    BuildContextLAndintLToWidgetL: () => (T.BuildContextLAndintLToWidgetL = dart.constFn(dart.fnType(T.WidgetL(), [T.BuildContextL(), T.intL()])))(),
    BottomNavigationBarItemL: () => (T.BottomNavigationBarItemL = dart.constFn(dart.legacy(bottom_navigation_bar_item.BottomNavigationBarItem)))(),
    JSArrayOfBottomNavigationBarItemL: () => (T.JSArrayOfBottomNavigationBarItemL = dart.constFn(_interceptors.JSArray$(T.BottomNavigationBarItemL())))(),
    PointerHoverEventLToboolL: () => (T.PointerHoverEventLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.PointerHoverEventL()])))(),
    PointerExitEventLToboolL: () => (T.PointerExitEventLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.PointerExitEventL()])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    AnimationStatusL: () => (T.AnimationStatusL = dart.constFn(dart.legacy(animation.AnimationStatus)))(),
    AnimationStatusLToNull: () => (T.AnimationStatusLToNull = dart.constFn(dart.fnType(core.Null, [T.AnimationStatusL()])))(),
    TweenOfdoubleL: () => (T.TweenOfdoubleL = dart.constFn(tween.Tween$(T.doubleL())))(),
    ObjectL: () => (T.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    FadeTransitionL: () => (T.FadeTransitionL = dart.constFn(dart.legacy(transitions.FadeTransition)))(),
    BuildContextLToFadeTransitionL: () => (T.BuildContextLToFadeTransitionL = dart.constFn(dart.fnType(T.FadeTransitionL(), [T.BuildContextL()])))(),
    JSArrayOfdoubleL: () => (T.JSArrayOfdoubleL = dart.constFn(_interceptors.JSArray$(T.doubleL())))(),
    JSArrayOfintL: () => (T.JSArrayOfintL = dart.constFn(_interceptors.JSArray$(T.intL())))()
  };
  var T$Eval = Object.assign({
    _: () => T$Eval
  }, T);
  var S = {
    _: () => S
  };
  var S$Eval = Object.assign({
    _: () => S$Eval
  }, S);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293200149.0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280427042.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285887861.0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288256409.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 30
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 80,
        [EdgeInsets_left]: 70
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 30
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 12,
        [EdgeInsets_left]: 15
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 45,
        [EdgeInsets_left]: 100
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 18,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 18
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 3,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 3
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 40
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 40,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 40
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 3,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 3
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293200148.0
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289857296.0
      });
    }
  }, false);
  var C = Array(24).fill(void 0);
  var I = ["package:dartpad_sample/main.dart"];
  bootstrap.main = function main$() {
    return async.async(dart.void, function* main$() {
      yield ui.webOnlyInitializePlatform();
      main.main();
    });
  };
  var first$ = dart.privateName(main, "Tuple.first");
  var second$ = dart.privateName(main, "Tuple.second");
  const _is_Tuple_default = Symbol('_is_Tuple_default');
  main.Tuple$ = dart.generic((F, S) => {
    var FL = () => (FL = dart.constFn(dart.legacy(F)))();
    var SL = () => (SL = dart.constFn(dart.legacy(S)))();
    class Tuple extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        this[first$] = FL().as(value);
      }
      get second() {
        return this[second$];
      }
      set second(value) {
        this[second$] = SL().as(value);
      }
    }
    (Tuple.new = function(first, second) {
      this[first$] = first;
      this[second$] = second;
      ;
    }).prototype = Tuple.prototype;
    dart.addTypeTests(Tuple);
    Tuple.prototype[_is_Tuple_default] = true;
    dart.addTypeCaches(Tuple);
    dart.setLibraryUri(Tuple, I[0]);
    dart.setFieldSignature(Tuple, () => ({
      __proto__: dart.getFields(Tuple.__proto__),
      first: dart.fieldType(dart.legacy(F)),
      second: dart.fieldType(dart.legacy(S))
    }));
    return Tuple;
  });
  main.Tuple = main.Tuple$();
  dart.addTypeTests(main.Tuple, _is_Tuple_default);
  var Color_value = dart.privateName(ui, "Color.value");
  main.Utils = class Utils extends core.Object {
    static logo() {
      main.Utils.logoId = dart.notNull(main.Utils.logoId) + 1;
      let _image = main.Utils._createImageElement("M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z");
      ui.platformViewRegistry.registerViewFactory("netflix" + dart.str(main.Utils.logoId), dart.fn(viewId => _image, T.intLToHtmlElementL()));
      let element = new platform_view.HtmlElementView.new({key: new framework.UniqueKey.new(), viewType: "netflix" + dart.str(main.Utils.logoId)});
      return element;
    }
    static _createImageElement(path) {
      let t0;
      let data = convert.base64.encode(convert.utf8.encode("<svg viewBox=\"0 0 111 30\" xmlns=\"http://www.w3.org/2000/svg\"><path " + "d=\"" + dart.str(path) + "\" fill=\"#E50915\"/></svg>"));
      t0 = html.ImageElement.new();
      return (() => {
        t0.src = "data:image/svg+xml;base64," + dart.str(data);
        return t0;
      })();
    }
    static svgIcon(svg) {
      main.Utils.iconId = dart.notNull(main.Utils.iconId) + 1;
      ui.platformViewRegistry.registerViewFactory("icon" + dart.str(main.Utils.iconId), dart.fn(viewId => main.Utils._createFromSVG(svg), T.intLToHtmlElementL()));
      let element = new platform_view.HtmlElementView.new({key: new framework.UniqueKey.new(), viewType: "icon" + dart.str(main.Utils.iconId)});
      return element;
    }
    static _createFromSVG(svg) {
      let t0;
      let data = convert.base64.encode(convert.utf8.encode(svg));
      t0 = html.ImageElement.new();
      return (() => {
        t0.src = "data:image/svg+xml;base64," + dart.str(data);
        return t0;
      })();
    }
    static video(url, id, autoPlay) {
      let video = html.VideoElement.new();
      video.autoplay = autoPlay;
      video.loop = true;
      video.src = url;
      video[$onClick].listen(dart.fn(event => dart.test(video.paused) ? video[$play]() : video.pause(), T.MouseEventLTovoid()));
      ui.platformViewRegistry.registerViewFactory("video_tv" + dart.str(url) + dart.str(id), dart.fn(viewId => video, T.intLToVideoElementL()));
      return new (T.TupleOfWidgetL$VideoElementL()).new(new platform_view.HtmlElementView.new({key: new framework.UniqueKey.new(), viewType: "video_tv" + dart.str(url) + dart.str(id)}), video);
    }
  };
  (main.Utils.new = function() {
    ;
  }).prototype = main.Utils.prototype;
  dart.addTypeTests(main.Utils);
  dart.addTypeCaches(main.Utils);
  dart.setLibraryUri(main.Utils, I[0]);
  dart.defineLazy(main.Utils, {
    /*main.Utils.mainRed*/get mainRed() {
      return C[0] || CT.C0;
    },
    /*main.Utils.colorSeparator*/get colorSeparator() {
      return C[1] || CT.C1;
    },
    /*main.Utils.colorAbout*/get colorAbout() {
      return C[2] || CT.C2;
    },
    /*main.Utils.colorLanguage*/get colorLanguage() {
      return C[3] || CT.C3;
    },
    /*main.Utils.logoId*/get logoId() {
      return 0;
    },
    set logoId(_) {},
    /*main.Utils.iconId*/get iconId() {
      return 0;
    },
    set iconId(_) {}
  }, true);
  main.Netflix = class Netflix extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new main.InitScreen.new()});
    }
  };
  (main.Netflix.new = function() {
    main.Netflix.__proto__.new.call(this);
    ;
  }).prototype = main.Netflix.prototype;
  dart.addTypeTests(main.Netflix);
  dart.addTypeCaches(main.Netflix);
  dart.setMethodSignature(main.Netflix, () => ({
    __proto__: dart.getMethods(main.Netflix.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main.Netflix, I[0]);
  main.InitScreen = class InitScreen extends framework.StatefulWidget {
    createState() {
      return new main._InitScreenState.new();
    }
  };
  (main.InitScreen.new = function() {
    main.InitScreen.__proto__.new.call(this);
    ;
  }).prototype = main.InitScreen.prototype;
  dart.addTypeTests(main.InitScreen);
  dart.addTypeCaches(main.InitScreen);
  dart.setMethodSignature(main.InitScreen, () => ({
    __proto__: dart.getMethods(main.InitScreen.__proto__),
    createState: dart.fnType(dart.legacy(main._InitScreenState), [])
  }));
  dart.setLibraryUri(main.InitScreen, I[0]);
  var _logo = dart.privateName(main, "_logo");
  var _videoTv = dart.privateName(main, "_videoTv");
  var _videoDevices = dart.privateName(main, "_videoDevices");
  var _topSectionDesktop = dart.privateName(main, "_topSectionDesktop");
  var _enjoyTVSection = dart.privateName(main, "_enjoyTVSection");
  var _downloadShowsSection = dart.privateName(main, "_downloadShowsSection");
  var _enjoyEverywhereSection = dart.privateName(main, "_enjoyEverywhereSection");
  var _faqSection = dart.privateName(main, "_faqSection");
  var _aboutUs = dart.privateName(main, "_aboutUs");
  var _language = dart.privateName(main, "_language");
  var _tryItNow = dart.privateName(main, "_tryItNow");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _faq = dart.privateName(main, "_faq");
  main._InitScreenState = class _InitScreenState extends framework.State$(dart.legacy(main.InitScreen)) {
    build(context) {
      let size = media_query.MediaQuery.of(context).size;
      return new material.Material.new({color: colors.Colors.black, child: new scroll_view.ListView.new({children: T.JSArrayOfWidgetL().of([this[_topSectionDesktop](size, context), new container.Container.new({height: 10.0, color: main.Utils.colorSeparator}), this[_enjoyTVSection](size), new container.Container.new({height: 40.0, color: colors.Colors.black}), new container.Container.new({height: 10.0, color: main.Utils.colorSeparator}), this[_downloadShowsSection](size), new container.Container.new({height: 40.0, color: colors.Colors.black}), new container.Container.new({height: 10.0, color: main.Utils.colorSeparator}), new container.Container.new({height: 40.0, color: colors.Colors.black}), this[_enjoyEverywhereSection](size), new container.Container.new({height: 40.0, color: colors.Colors.black}), new container.Container.new({height: 10.0, color: main.Utils.colorSeparator}), new container.Container.new({height: 70.0, color: colors.Colors.black}), this[_faqSection](size), new container.Container.new({height: 10.0, color: main.Utils.colorSeparator}), new container.Container.new({height: 40.0, color: colors.Colors.black}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(size.width) * 0.15}), child: new text.Text.new("Questions? Contact us.", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})})}), new container.Container.new({height: 40.0, color: colors.Colors.black}), this[_aboutUs](size), this[_language](size), new container.Container.new({height: 40.0, color: colors.Colors.black})])})});
    }
    [_topSectionDesktop](size, context) {
      let isTablet = dart.notNull(size.width) < 1000;
      return new container.Container.new({height: dart.notNull(size.height) * 0.93, width: size.width, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new container.Container.new({height: size.height, width: size.width, child: new image.Image.network("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/netlix_bg.jpg", {fit: box_fit.BoxFit.cover})}), new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([colors.Colors.black.withOpacity(0.8), colors.Colors.black.withOpacity(0.42), colors.Colors.black.withOpacity(0.9)]), begin: alignment.Alignment.topCenter, end: alignment.Alignment.bottomCenter})})}), new container.Container.new({height: 44.0, width: main.breakpoint(T.doubleL(), size.width, 134.0, 134.0, 110.0), margin: new edge_insets.EdgeInsets.only({left: main.breakpoint(T.doubleL(), size.width, 55.0, 40.0, 30.0), top: 25.0}), child: this[_logo]}), new basic.Positioned.new({top: 0.0, right: 0.0, child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new main.LoginScreen.new(), T.BuildContextLToLoginScreenL())})), T.VoidToFutureL()), child: new container.Container.new({height: 34.0, width: 84.0, margin: new edge_insets.EdgeInsets.only({right: main.breakpoint(T.doubleL(), size.width, 55.0, 40.0, 30.0), top: 25.0}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(4.0), color: main.Utils.mainRed}), child: new main.HandCursor.new({child: new basic.Center.new({child: new text.Text.new("Sign In", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0})})})})})})}), new basic.Center.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(size.width) * dart.notNull(main.breakpoint(T.numL(), size.width, 0.255, 0.15, 0.1))}), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: (() => {
                    let t0 = T.JSArrayOfWidgetL().of([new basic.SizedBox.new({height: 90.0}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: main.breakpoint(T.doubleL(), size.width, 40.0, 30.0, 0.0)}), child: new text.Text.new("Unlimited movies, TV shows, and more.", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 48.0, 40.0, 32.0), fontWeight: ui.FontWeight.w600}), textAlign: ui.TextAlign.center})}), new basic.SizedBox.new({height: 15.0}), new text.Text.new("Watch anywhere. Cancel anytime.", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 26.0, 22.0, 22.0)}), textAlign: ui.TextAlign.center}), new basic.SizedBox.new({height: 30.0})]);
                    if (isTablet) t0[$add](new basic.Column.new({children: T.JSArrayOfWidgetL().of([new text.Text.new("Ready to watch? Enter your email to create or access your account.", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 19.0, 17.0, 17.0)}), textAlign: ui.TextAlign.center}), new basic.SizedBox.new({height: 10.0})])}));
                    t0[$add](this[_tryItNow](size));
                    if (!isTablet) t0[$add](new text.Text.new("Ready to watch? Enter your email to create or access your account.", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 19.0}), textAlign: ui.TextAlign.center}));
                    return t0;
                  })()})})})])})});
    }
    [_enjoyTVSection](size) {
      main._InitScreenState._videoTVId = dart.notNull(main._InitScreenState._videoTVId) + 1;
      return new container.Container.new({color: colors.Colors.black, child: new basic.Wrap.new({alignment: wrap.WrapAlignment.spaceEvenly, verticalDirection: basic_types.VerticalDirection.down, children: T.JSArrayOfWidgetL().of([new container.Container.new({height: main.breakpoint(T.doubleL(), size.width, 400.0, 200.0, 150.0), margin: C[4] || CT.C4, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, crossAxisAlignment: main.breakpoint(T.CrossAxisAlignmentL(), size.width, flex.CrossAxisAlignment.start, flex.CrossAxisAlignment.center, flex.CrossAxisAlignment.center), mainAxisAlignment: main.breakpoint(T.MainAxisAlignmentL(), size.width, flex.MainAxisAlignment.center, flex.MainAxisAlignment.end, flex.MainAxisAlignment.end), children: T.JSArrayOfWidgetL().of([new text.Text.new("Enjoy on your TV.", {textAlign: main.breakpoint(T.TextAlignL(), size.width, ui.TextAlign.start, ui.TextAlign.center, ui.TextAlign.center), style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 45.0, 40.0, 28.0), fontWeight: ui.FontWeight.w600})}), new basic.SizedBox.new({height: 20.0}), new text.Text.new("Watch on Smart TVs, Playstation, Xbox,\nChromecast, Apple TV, Blu-ray players, and\nmore.", {textAlign: main.breakpoint(T.TextAlignL(), size.width, ui.TextAlign.start, ui.TextAlign.center, ui.TextAlign.center), style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 25.0, 20.0, 15.0)})})])})}), new basic.FittedBox.new({child: new container.Container.new({height: 400.0, width: 530.0, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new container.Container.new({height: 220.0, width: 220 * 1.77, margin: C[5] || CT.C5, child: new basic.RepaintBoundary.new({child: this[_videoTv].first})}), new image.Image.network("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/device_tv.png")])})})})])})});
    }
    [_tryItNow](size) {
      let isTable = dart.notNull(size.width) < 1000;
      return new container.Container.new({height: isTable ? null : 60.0, width: size.width, decoration: new box_decoration.BoxDecoration.new({border: isTable ? null : new box_border.Border.new({bottom: new borders.BorderSide.new({color: colors.Colors.black, width: 1.0}), right: new borders.BorderSide.new({color: colors.Colors.black, width: 1.0})})}), child: isTable ? new basic.Column.new({children: T.JSArrayOfWidgetL().of([new container.Container.new({color: colors.Colors.white, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 10.0, right: 10.0, bottom: media_query.MediaQuery.of(this.context).padding.bottom}), child: new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({border: input_border.InputBorder.none, labelText: "Email address"})})})}), new basic.SizedBox.new({height: 20.0}), new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new container.Container.new({width: 125.0, height: 45.0, decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4292740369), borderRadius: new border_radius.BorderRadius.circular(4.0)}), padding: C[6] || CT.C6, child: new basic.Center.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new text.Text.new("TRY IT NOW", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 14.0})}), new icon.Icon.new(icons.Icons.keyboard_arrow_right, {color: colors.Colors.white, size: 20.0})])})})})])}), new basic.SizedBox.new({height: 20.0})])}) : new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(2.0), child: new container.Container.new({color: colors.Colors.white, child: new basic.Row.new({children: T.JSArrayOfWidgetL().of([new basic.Expanded.new({child: new basic.Padding.new({padding: C[7] || CT.C7, child: new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({border: input_border.InputBorder.none, labelText: "Email address"})})})}), new container.Container.new({height: size.height, color: new ui.Color.new(4292740369), padding: C[8] || CT.C8, child: new basic.Center.new({child: new basic.Row.new({children: T.JSArrayOfWidgetL().of([new text.Text.new("TRY IT NOW", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0})}), new icon.Icon.new(icons.Icons.keyboard_arrow_right, {color: colors.Colors.white, size: 35.0})])})})})])})})})});
    }
    [_downloadShowsSection](size) {
      return new container.Container.new({color: colors.Colors.black, child: new basic.Wrap.new({alignment: wrap.WrapAlignment.spaceEvenly, verticalDirection: basic_types.VerticalDirection.down, children: T.JSArrayOfWidgetL().of([new container.Container.new({height: 400.0, width: 530.0, child: new basic.FittedBox.new({child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new image.Image.network("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/mobile.jpg"), new container.Container.new({height: 400.0, width: 530.0, child: new basic.Align.new({alignment: new alignment.Alignment.new(0.8, 1.25), child: new container.Container.new({height: 115.0, width: 400.0, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(14.0), border: box_border.Border.all({color: new ui.Color.new(4282400832), width: 2.5}), color: colors.Colors.black}), padding: C[9] || CT.C9, child: new basic.Row.new({children: T.JSArrayOfWidgetL().of([new image.Image.network("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/stranger.png"), new basic.SizedBox.new({width: 20.0}), new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new text.Text.new("Stranger Things", {style: new text_style.TextStyle.new({fontSize: 19.0, fontWeight: ui.FontWeight.w600, color: colors.Colors.white})}), new basic.SizedBox.new({height: 5.0}), new text.Text.new("Downloading...", {style: new text_style.TextStyle.new({color: new ui.Color.new(4278219243), fontSize: 18.0})})])})}), new image.Image.network("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif", {width: 56.0})])})})})})])})})}), new container.Container.new({height: main.breakpoint(T.doubleL(), size.width, 400.0, 200.0, 150.0), margin: C[4] || CT.C4, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, crossAxisAlignment: main.breakpoint(T.CrossAxisAlignmentL(), size.width, flex.CrossAxisAlignment.start, flex.CrossAxisAlignment.center, flex.CrossAxisAlignment.center), mainAxisAlignment: main.breakpoint(T.MainAxisAlignmentL(), size.width, flex.MainAxisAlignment.center, flex.MainAxisAlignment.end, flex.MainAxisAlignment.end), children: T.JSArrayOfWidgetL().of([new text.Text.new("Download your shows\nto watch offline.", {textAlign: main.breakpoint(T.TextAlignL(), size.width, ui.TextAlign.start, ui.TextAlign.center, ui.TextAlign.center), style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 45.0, 40.0, 28.0), fontWeight: ui.FontWeight.w600})}), new basic.SizedBox.new({height: 20.0}), new text.Text.new("Save your favorites easily and always have\nsomething to watch.", {textAlign: main.breakpoint(T.TextAlignL(), size.width, ui.TextAlign.start, ui.TextAlign.center, ui.TextAlign.center), style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 25.0, 20.0, 15.0)})})])})})])})});
    }
    [_enjoyEverywhereSection](size) {
      main._InitScreenState._videoDevicesId = dart.notNull(main._InitScreenState._videoDevicesId) + 1;
      return new container.Container.new({color: colors.Colors.black, child: new basic.Wrap.new({alignment: wrap.WrapAlignment.spaceEvenly, verticalDirection: basic_types.VerticalDirection.down, children: T.JSArrayOfWidgetL().of([new container.Container.new({height: main.breakpoint(T.doubleL(), size.width, 400.0, 200.0, 150.0), margin: C[4] || CT.C4, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, crossAxisAlignment: main.breakpoint(T.CrossAxisAlignmentL(), size.width, flex.CrossAxisAlignment.start, flex.CrossAxisAlignment.center, flex.CrossAxisAlignment.center), mainAxisAlignment: main.breakpoint(T.MainAxisAlignmentL(), size.width, flex.MainAxisAlignment.center, flex.MainAxisAlignment.end, flex.MainAxisAlignment.end), children: T.JSArrayOfWidgetL().of([new text.Text.new("Watch everywhere.", {textAlign: main.breakpoint(T.TextAlignL(), size.width, ui.TextAlign.start, ui.TextAlign.center, ui.TextAlign.center), style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 45.0, 40.0, 28.0), fontWeight: ui.FontWeight.w600})}), new basic.SizedBox.new({height: 20.0}), new text.Text.new("Stream unlimited movies and TV shows on\nyour phone, tablet, laptop, and TV without\npaying more.", {textAlign: main.breakpoint(T.TextAlignL(), size.width, ui.TextAlign.start, ui.TextAlign.center, ui.TextAlign.center), style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 25.0, 20.0, 15.0)})})])})}), new basic.FittedBox.new({child: new container.Container.new({height: 400.0, width: 530.0, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new container.Container.new({height: 190.0, width: 190 * 1.77, margin: C[10] || CT.C10, child: this[_videoDevices].first}), new image.Image.network("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/devices.png")])})})})])})});
    }
    [_faqSection](size) {
      let isTablet = dart.notNull(size.width) < 1000;
      return new container.Container.new({margin: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(size.width) * dart.notNull(main.breakpoint(T.numL(), size.width, 0.2, 0.15, 0.1))}), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: (() => {
            let t1 = T.JSArrayOfWidgetL().of([new text.Text.new("Frequently Asked Questions", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 50.0, 45.0, 30.0), fontWeight: ui.FontWeight.w600}), textAlign: ui.TextAlign.center}), new basic.SizedBox.new({height: 40.0}), this[_faq]("What is Netflix?", "", size), this[_faq]("How much does Netflix cost?", "", size), this[_faq]("Where can I watch?", "", size), this[_faq]("How do I cancel?", "", size), this[_faq]("What can I watch on Netflix?", "", size), new basic.SizedBox.new({height: 40.0})]);
            if (isTablet) t1[$add](new basic.Column.new({children: T.JSArrayOfWidgetL().of([new text.Text.new("Ready to watch? Enter your email to create or access your account.", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 19.0}), textAlign: ui.TextAlign.center}), new basic.SizedBox.new({height: 10.0})])}));
            t1[$add](new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: main.breakpoint(T.doubleL(), size.width, 60.0, 40.0, 30.0)}), child: this[_tryItNow](size)}));
            t1[$add](new basic.SizedBox.new({height: 10.0}));
            if (!isTablet) t1[$add](new text.Text.new("Ready to watch? Enter your email to create or access your account.", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 19.0}), textAlign: ui.TextAlign.center}));
            t1[$add](new basic.SizedBox.new({height: 60.0}));
            return t1;
          })()})});
    }
    [_faq](title, content, size) {
      return new basic.Column.new({children: T.JSArrayOfWidgetL().of([new container.Container.new({height: 80.0, color: new ui.Color.new(4281348144), padding: new edge_insets.EdgeInsets.symmetric({horizontal: main.breakpoint(T.doubleL(), size.width, 30.0, 20.0, 20.0)}), child: new basic.Row.new({children: T.JSArrayOfWidgetL().of([new basic.Expanded.new({child: new text.Text.new(title, {style: new text_style.TextStyle.new({fontSize: main.breakpoint(T.doubleL(), size.width, 28.0, 22.0, 18.0), color: colors.Colors.white})})}), new icon.Icon.new(icons.Icons.add, {color: colors.Colors.white, size: main.breakpoint(T.doubleL(), size.width, 40.0, 32.0, 26.0)})])})}), new container.Container.new({height: 10.0, color: colors.Colors.black})])});
    }
    [_aboutUs](size) {
      return new container.Container.new({height: 180.0, margin: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(size.width) * 0.15, vertical: 20.0}), child: new scroll_view.GridView.new({gridDelegate: new sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.new({maxCrossAxisExtent: 300.0, childAspectRatio: 7.0}), children: T.JSArrayOfWidgetL().of([new text.Text.new("FAQ", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Help Center", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Account", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Media Center", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Investor Relations", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Jobs", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Ways to Watch", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Terms of Use", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Privacy", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Cookie Preferences", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Corporate Information", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Contact Us", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Speed Test", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Legal Notice", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Netflix Originals", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})})])})});
    }
    [_language](size) {
      return new container.Container.new({margin: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(size.width) * 0.15}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new container.Container.new({height: 60.0, width: 140.0, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: new ui.Color.new(4281545523), width: 2.0})}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.language, {color: main.Utils.colorLanguage}), new basic.SizedBox.new({width: 10.0}), new text.Text.new("English", {style: new text_style.TextStyle.new({color: main.Utils.colorLanguage})}), new icon.Icon.new(icons.Icons.arrow_drop_down, {color: main.Utils.colorLanguage})])})})])})});
    }
  };
  (main._InitScreenState.new = function() {
    this[_logo] = main.Utils.logo();
    this[_videoTv] = main.Utils.video("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/video-tv.m4v", "a" + dart.str(main._InitScreenState._videoTVId), true);
    this[_videoDevices] = main.Utils.video("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/video-devices.m4v", "b" + dart.str(main._InitScreenState._videoDevicesId), true);
    main._InitScreenState.__proto__.new.call(this);
    ;
  }).prototype = main._InitScreenState.prototype;
  dart.addTypeTests(main._InitScreenState);
  dart.addTypeCaches(main._InitScreenState);
  dart.setMethodSignature(main._InitScreenState, () => ({
    __proto__: dart.getMethods(main._InitScreenState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_topSectionDesktop]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size), dart.legacy(framework.BuildContext)]),
    [_enjoyTVSection]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)]),
    [_tryItNow]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)]),
    [_downloadShowsSection]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)]),
    [_enjoyEverywhereSection]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)]),
    [_faqSection]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)]),
    [_faq]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(ui.Size)]),
    [_aboutUs]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)]),
    [_language]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)])
  }));
  dart.setLibraryUri(main._InitScreenState, I[0]);
  dart.setFieldSignature(main._InitScreenState, () => ({
    __proto__: dart.getFields(main._InitScreenState.__proto__),
    [_logo]: dart.finalFieldType(dart.legacy(framework.Widget)),
    [_videoTv]: dart.finalFieldType(dart.legacy(main.Tuple$(dart.legacy(framework.Widget), dart.legacy(html.VideoElement)))),
    [_videoDevices]: dart.finalFieldType(dart.legacy(main.Tuple$(dart.legacy(framework.Widget), dart.legacy(html.VideoElement))))
  }));
  dart.defineLazy(main._InitScreenState, {
    /*main._InitScreenState._videoTVId*/get _videoTVId() {
      return 1;
    },
    set _videoTVId(_) {},
    /*main._InitScreenState._videoDevicesId*/get _videoDevicesId() {
      return 1;
    },
    set _videoDevicesId(_) {}
  }, true);
  main.LoginScreen = class LoginScreen extends framework.StatefulWidget {
    createState() {
      return new main._LoginScreenState.new();
    }
  };
  (main.LoginScreen.new = function() {
    main.LoginScreen.__proto__.new.call(this);
    ;
  }).prototype = main.LoginScreen.prototype;
  dart.addTypeTests(main.LoginScreen);
  dart.addTypeCaches(main.LoginScreen);
  dart.setMethodSignature(main.LoginScreen, () => ({
    __proto__: dart.getMethods(main.LoginScreen.__proto__),
    createState: dart.fnType(dart.legacy(main._LoginScreenState), [])
  }));
  dart.setLibraryUri(main.LoginScreen, I[0]);
  main._LoginScreenState = class _LoginScreenState extends framework.State$(dart.legacy(main.LoginScreen)) {
    build(context) {
      let size = media_query.MediaQuery.of(context).size;
      let isMobile = dart.notNull(size.width) < 650;
      return new material.Material.new({child: new scroll_view.ListView.new({children: T.JSArrayOfWidgetL().of([new container.Container.new({decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/netlix_bg.jpg"), fit: box_fit.BoxFit.cover})}), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([colors.Colors.black.withOpacity(0.8), colors.Colors.black.withOpacity(0.42), colors.Colors.black.withOpacity(0.9)]), begin: alignment.Alignment.topCenter, end: alignment.Alignment.bottomCenter})}), child: new basic.Column.new({children: T.JSArrayOfWidgetL().of([new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: isMobile ? flex.MainAxisAlignment.center : flex.MainAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new container.Container.new({height: 45.0, width: 165.0, margin: new edge_insets.EdgeInsets.only({left: isMobile ? 0.0 : 55.0, top: 25.0}), child: this[_logo]})])}), new basic.SizedBox.new({height: 20.0}), new container.Container.new({width: 450.0, height: 675.0, color: colors.Colors.black.withOpacity(0.8), padding: new edge_insets.EdgeInsets.symmetric({horizontal: main.breakpoint(T.doubleL(), size.width, 60.0, 40.0, 30.0), vertical: 65.0}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new text.Text.new("Sign In", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 32.0, fontWeight: ui.FontWeight.w600})}), new basic.SizedBox.new({height: 30.0}), new container.Container.new({height: 50.0, padding: C[11] || CT.C11, decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4281545523), borderRadius: new border_radius.BorderRadius.circular(4.0)}), child: new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({border: input_border.InputBorder.none, labelText: "Email " + "or phone number", labelStyle: new text_style.TextStyle.new({color: new ui.Color.new(4287401100)})})})}), new basic.SizedBox.new({height: 15.0}), new container.Container.new({height: 50.0, padding: C[11] || CT.C11, decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4281545523), borderRadius: new border_radius.BorderRadius.circular(4.0)}), child: new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({border: input_border.InputBorder.none, labelText: "Password", labelStyle: new text_style.TextStyle.new({color: new ui.Color.new(4287401100)})})})}), new basic.SizedBox.new({height: 40.0}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => navigator.Navigator.of(context).pushAndRemoveUntil(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(_ => new main.ProfileScreen.new(), T.BuildContextLToProfileScreenL())}), dart.fn(_ => false, T.RouteLToboolL())), T.VoidToFutureL()), child: new main.HandCursor.new({child: new container.Container.new({height: 50.0, decoration: new box_decoration.BoxDecoration.new({color: main.Utils.mainRed, borderRadius: new border_radius.BorderRadius.circular(4.0)}), child: new basic.Center.new({child: new text.Text.new("Sign In", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0, fontWeight: ui.FontWeight.w600})})})})})}), new basic.SizedBox.new({height: 15.0}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.check_box, {color: new ui.Color.new(4287401100), size: 20.0}), new basic.SizedBox.new({width: 2.0}), new basic.Expanded.new({child: new text.Text.new("Remember me", {style: new text_style.TextStyle.new({color: new ui.Color.new(4287401100), fontSize: 13.0})})}), new text.Text.new("Need help?", {style: new text_style.TextStyle.new({color: new ui.Color.new(4287401100), fontSize: 13.0})})])}), new basic.SizedBox.new({height: 50.0}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([new image.Image.network("https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png", {width: 20.0}), new basic.SizedBox.new({width: 10.0}), new text.Text.new("Login with Facebook", {style: new text_style.TextStyle.new({color: new ui.Color.new(4285756275), fontSize: 13.0})})])}), new basic.SizedBox.new({height: 20.0}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([new text.Text.new("New to Netflix?", {style: new text_style.TextStyle.new({color: new ui.Color.new(4285756275), fontSize: 17.0})}), new basic.SizedBox.new({width: 4.0}), new text.Text.new("Sign up now.", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 17.0})})])}), new basic.SizedBox.new({height: 15.0}), new basic.Padding.new({padding: C[12] || CT.C12, child: new text.Text.new("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.", {style: new text_style.TextStyle.new({color: new ui.Color.new(4285756275), fontSize: 13.0})})})])})}), new basic.SizedBox.new({height: 100.0}), new container.Container.new({width: size.width, color: colors.Colors.black.withOpacity(0.5), height: 240.0, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new basic.SizedBox.new({height: 20.0}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(size.width) * 0.15}), child: new text.Text.new("Questions? Contact us.", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})})}), new basic.SizedBox.new({height: 20.0}), new container.Container.new({height: 60.0, margin: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(size.width) * 0.15}), child: new scroll_view.GridView.new({gridDelegate: new sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.new({maxCrossAxisExtent: 300.0, childAspectRatio: 7.0}), children: T.JSArrayOfWidgetL().of([new text.Text.new("Gift Card Terms", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Terms of Use", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})}), new text.Text.new("Privacy Statement", {style: new text_style.TextStyle.new({color: main.Utils.colorAbout})})])})}), this[_language](size)])})})])})})})])})});
    }
    [_language](size) {
      return new container.Container.new({margin: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(size.width) * 0.15}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new container.Container.new({height: 60.0, width: 140.0, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black.withOpacity(0.8), border: box_border.Border.all({color: new ui.Color.new(4281545523), width: 2.0})}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.language, {color: main.Utils.colorLanguage}), new basic.SizedBox.new({width: 10.0}), new text.Text.new("English", {style: new text_style.TextStyle.new({color: main.Utils.colorLanguage})}), new icon.Icon.new(icons.Icons.arrow_drop_down, {color: main.Utils.colorLanguage})])})})])})});
    }
  };
  (main._LoginScreenState.new = function() {
    this[_logo] = main.Utils.logo();
    main._LoginScreenState.__proto__.new.call(this);
    ;
  }).prototype = main._LoginScreenState.prototype;
  dart.addTypeTests(main._LoginScreenState);
  dart.addTypeCaches(main._LoginScreenState);
  dart.setMethodSignature(main._LoginScreenState, () => ({
    __proto__: dart.getMethods(main._LoginScreenState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_language]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)])
  }));
  dart.setLibraryUri(main._LoginScreenState, I[0]);
  dart.setFieldSignature(main._LoginScreenState, () => ({
    __proto__: dart.getFields(main._LoginScreenState.__proto__),
    [_logo]: dart.finalFieldType(dart.legacy(framework.Widget))
  }));
  main.ProfileScreen = class ProfileScreen extends framework.StatefulWidget {
    createState() {
      return new main._ProfileScreenState.new();
    }
  };
  (main.ProfileScreen.new = function() {
    main.ProfileScreen.__proto__.new.call(this);
    ;
  }).prototype = main.ProfileScreen.prototype;
  dart.addTypeTests(main.ProfileScreen);
  dart.addTypeCaches(main.ProfileScreen);
  dart.setMethodSignature(main.ProfileScreen, () => ({
    __proto__: dart.getMethods(main.ProfileScreen.__proto__),
    createState: dart.fnType(dart.legacy(main._ProfileScreenState), [])
  }));
  dart.setLibraryUri(main.ProfileScreen, I[0]);
  main._ProfileScreenState = class _ProfileScreenState extends framework.State$(dart.legacy(main.ProfileScreen)) {
    build(context) {
      let size = media_query.MediaQuery.of(context).size;
      let isMobile = dart.notNull(size.width) < 650;
      return new material.Material.new({child: new container.Container.new({color: isMobile ? colors.Colors.black : new ui.Color.new(4279505940), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, children: T.JSArrayOfWidgetL().of([new container.Container.new({height: 70.0, width: size.width, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new container.Container.new({width: size.width, decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([colors.Colors.black.withOpacity(0.8), colors.Colors.transparent]), begin: alignment.Alignment.topCenter, end: alignment.Alignment.bottomCenter})})}), new basic.Align.new({alignment: isMobile ? alignment.Alignment.center : alignment.Alignment.centerLeft, child: new basic.Column.new({children: T.JSArrayOfWidgetL().of([new container.Container.new({width: 100.0, height: 70.0, margin: new edge_insets.EdgeInsets.symmetric({horizontal: dart.notNull(size.width) * 0.042}), child: this[_logo]})])})})])})}), new basic.Expanded.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: (() => {
                      let t2 = T.JSArrayOfWidgetL().of([new basic.SizedBox.new({height: 30.0}), new text.Text.new("Who's watching?", {style: new text_style.TextStyle.new({fontSize: isMobile ? 30.0 : 50.0, color: colors.Colors.white})}), new basic.SizedBox.new({height: 30.0}), new basic.Wrap.new({spacing: 10.0, runSpacing: 20.0, children: T.JSArrayOfWidgetL().of([new gesture_detector.GestureDetector.new({onTap: dart.fn(() => navigator.Navigator.of(context).pushAndRemoveUntil(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(_ => new main.BrowseScreen.new(), T.BuildContextLToBrowseScreenL())}), dart.fn(route => false, T.RouteLToboolL())), T.VoidToFutureL()), child: new main.HandCursor.new({child: new main.ProfileItem.new({name: "Mariano", color: main.Utils.mainRed, isUser: true})})}), new main.ProfileItem.new({name: "FlutterDev", color: new ui.Color.new(4279611362), isUser: true}), new main.ProfileItem.new({isUser: false})])}), new basic.SizedBox.new({height: 40.0})]);
                      if (!isMobile) t2[$add](new material_button.MaterialButton.new({onPressed: dart.fn(() => {
                        }, T.VoidToNull()), color: colors.Colors.transparent, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(0.0), side: new borders.BorderSide.new({color: new ui.Color.new(4285756275), width: 1.0})}), child: new basic.Padding.new({padding: C[13] || CT.C13, child: new text.Text.new("MANAGE PROFILES", {style: new text_style.TextStyle.new({color: new ui.Color.new(4285756275), fontSize: 17.0})})})}));
                      return t2;
                    })()})})}), new basic.SizedBox.new({height: 70.0})])})})});
    }
  };
  (main._ProfileScreenState.new = function() {
    this[_logo] = main.Utils.logo();
    main._ProfileScreenState.__proto__.new.call(this);
    ;
  }).prototype = main._ProfileScreenState.prototype;
  dart.addTypeTests(main._ProfileScreenState);
  dart.addTypeCaches(main._ProfileScreenState);
  dart.setMethodSignature(main._ProfileScreenState, () => ({
    __proto__: dart.getMethods(main._ProfileScreenState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main._ProfileScreenState, I[0]);
  dart.setFieldSignature(main._ProfileScreenState, () => ({
    __proto__: dart.getFields(main._ProfileScreenState.__proto__),
    [_logo]: dart.finalFieldType(dart.legacy(framework.Widget))
  }));
  var name$ = dart.privateName(main, "ProfileItem.name");
  var color$ = dart.privateName(main, "ProfileItem.color");
  var isUser$ = dart.privateName(main, "ProfileItem.isUser");
  main.ProfileItem = class ProfileItem extends framework.StatefulWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get isUser() {
      return this[isUser$];
    }
    set isUser(value) {
      super.isUser = value;
    }
    createState() {
      return new main._ProfileItemState.new();
    }
  };
  (main.ProfileItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let isUser = opts && 'isUser' in opts ? opts.isUser : null;
    this[name$] = name;
    this[color$] = color;
    this[isUser$] = isUser;
    main.ProfileItem.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.ProfileItem.prototype;
  dart.addTypeTests(main.ProfileItem);
  dart.addTypeCaches(main.ProfileItem);
  dart.setMethodSignature(main.ProfileItem, () => ({
    __proto__: dart.getMethods(main.ProfileItem.__proto__),
    createState: dart.fnType(dart.legacy(main._ProfileItemState), [])
  }));
  dart.setLibraryUri(main.ProfileItem, I[0]);
  dart.setFieldSignature(main.ProfileItem, () => ({
    __proto__: dart.getFields(main.ProfileItem.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    color: dart.finalFieldType(dart.legacy(ui.Color)),
    isUser: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var _isHover = dart.privateName(main, "_isHover");
  main._ProfileItemState = class _ProfileItemState extends framework.State$(dart.legacy(main.ProfileItem)) {
    build(context) {
      return new material.Material.new({color: colors.Colors.transparent, child: new basic.Padding.new({padding: C[11] || CT.C11, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new ink_well.InkWell.new({child: new basic.MouseRegion.new({onHover: dart.fn(_ => this.setState(dart.fn(() => this[_isHover] = true, T.VoidToboolL())), T.PointerHoverEventLTovoid()), onExit: dart.fn(_ => this.setState(dart.fn(() => this[_isHover] = false, T.VoidToboolL())), T.PointerExitEventLTovoid()), child: new container.Container.new({width: 133.0, height: 133.0, color: dart.test(this[_isHover]) ? colors.Colors.white : colors.Colors.transparent, padding: C[14] || CT.C14, child: dart.test(this.widget.isUser) ? new basic.SizedBox.new({width: 100.0, height: 100.0, child: new basic.FittedBox.new({child: new basic.CustomPaint.new({size: new ui.Size.new(100.0, 100.0), painter: new main.ProfileFace.new({color: this.widget.color, isSmall: false})})})}) : new icon.Icon.new(icons.Icons.add_circle, {size: 90.0, color: new ui.Color.new(4285756275)})})})}), new basic.SizedBox.new({height: 20.0}), new text.Text.new(dart.test(this.widget.isUser) ? this.widget.name : "Add Profile", {style: new text_style.TextStyle.new({fontSize: 17.0, color: new ui.Color.new(dart.test(this[_isHover]) ? 4294967295 : 4285756275)})})])})})});
    }
  };
  (main._ProfileItemState.new = function() {
    this[_isHover] = false;
    main._ProfileItemState.__proto__.new.call(this);
    ;
  }).prototype = main._ProfileItemState.prototype;
  dart.addTypeTests(main._ProfileItemState);
  dart.addTypeCaches(main._ProfileItemState);
  dart.setMethodSignature(main._ProfileItemState, () => ({
    __proto__: dart.getMethods(main._ProfileItemState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main._ProfileItemState, I[0]);
  dart.setFieldSignature(main._ProfileItemState, () => ({
    __proto__: dart.getFields(main._ProfileItemState.__proto__),
    [_isHover]: dart.fieldType(dart.legacy(core.bool))
  }));
  var color$0 = dart.privateName(main, "ProfileFace.color");
  var isSmall$ = dart.privateName(main, "ProfileFace.isSmall");
  main.ProfileFace = class ProfileFace extends custom_paint.CustomPainter {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get isSmall() {
      return this[isSmall$];
    }
    set isSmall(value) {
      super.isSmall = value;
    }
    paint(canvas, size) {
      let t3, t3$, t3$0, t3$1, t3$2;
      canvas.drawPath((t3 = ui.Path.new(), (() => {
        t3.lineTo(0.0, 0.0);
        t3.lineTo(size.width, 0.0);
        t3.lineTo(size.width, size.height);
        t3.lineTo(0.0, size.height);
        return t3;
      })()), (t3$ = ui.Paint.new(), (() => {
        t3$.color = this.color;
        return t3$;
      })()));
      canvas.drawCircle(new ui.Offset.new(dart.notNull(size.width) * 0.2, dart.notNull(size.height) * 0.3), dart.test(this.isSmall) ? 2.0 : 6.0, (t3$0 = ui.Paint.new(), (() => {
        t3$0.color = colors.Colors.white;
        return t3$0;
      })()));
      canvas.drawCircle(new ui.Offset.new(dart.notNull(size.width) * 0.8, dart.notNull(size.height) * 0.3), dart.test(this.isSmall) ? 2.0 : 6.0, (t3$1 = ui.Paint.new(), (() => {
        t3$1.color = colors.Colors.white;
        return t3$1;
      })()));
      let smilePaint = (t3$2 = ui.Paint.new(), (() => {
        t3$2.style = ui.PaintingStyle.stroke;
        t3$2.strokeWidth = dart.test(this.isSmall) ? 2.0 : 4.0;
        t3$2.strokeCap = ui.StrokeCap.round;
        return t3$2;
      })());
      canvas.drawArc(new ui.Rect.fromLTWH(dart.notNull(size.width) * 0.4, dart.notNull(size.height) * (dart.test(this.isSmall) ? 0.3 : 0.45), dart.notNull(size.width) * 0.42, 10.0), 0.33, 2.4, false, smilePaint);
    }
    shouldRepaint(oldDelegate) {
      T.CustomPainterL().as(oldDelegate);
      return false;
    }
  };
  (main.ProfileFace.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let isSmall = opts && 'isSmall' in opts ? opts.isSmall : null;
    this[color$0] = color;
    this[isSmall$] = isSmall;
    main.ProfileFace.__proto__.new.call(this);
    ;
  }).prototype = main.ProfileFace.prototype;
  dart.addTypeTests(main.ProfileFace);
  dart.addTypeCaches(main.ProfileFace);
  dart.setMethodSignature(main.ProfileFace, () => ({
    __proto__: dart.getMethods(main.ProfileFace.__proto__),
    paint: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(ui.Size)]),
    shouldRepaint: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(main.ProfileFace, I[0]);
  dart.setFieldSignature(main.ProfileFace, () => ({
    __proto__: dart.getFields(main.ProfileFace.__proto__),
    color: dart.finalFieldType(dart.legacy(ui.Color)),
    isSmall: dart.finalFieldType(dart.legacy(core.bool))
  }));
  main.BrowseScreen = class BrowseScreen extends framework.StatefulWidget {
    createState() {
      return new main._BrowseScreenState.new();
    }
  };
  (main.BrowseScreen.new = function() {
    main.BrowseScreen.__proto__.new.call(this);
    ;
  }).prototype = main.BrowseScreen.prototype;
  dart.addTypeTests(main.BrowseScreen);
  dart.addTypeCaches(main.BrowseScreen);
  dart.setMethodSignature(main.BrowseScreen, () => ({
    __proto__: dart.getMethods(main.BrowseScreen.__proto__),
    createState: dart.fnType(dart.legacy(main._BrowseScreenState), [])
  }));
  dart.setLibraryUri(main.BrowseScreen, I[0]);
  var _scrollController = dart.privateName(main, "_scrollController");
  var _threshold = dart.privateName(main, "_threshold");
  var _fadePercentage = dart.privateName(main, "_fadePercentage");
  var _gift = dart.privateName(main, "_gift");
  var _video = dart.privateName(main, "_video");
  var _trending = dart.privateName(main, "_trending");
  var _originals = dart.privateName(main, "_originals");
  var _top = dart.privateName(main, "_top");
  var _topSectionMobile = dart.privateName(main, "_topSectionMobile");
  var _topSection = dart.privateName(main, "_topSection");
  var _appBarMobile = dart.privateName(main, "_appBarMobile");
  var _appBar = dart.privateName(main, "_appBar");
  var _movieInfo = dart.privateName(main, "_movieInfo");
  var _playMovie = dart.privateName(main, "_playMovie");
  main._BrowseScreenState = class _BrowseScreenState extends framework.State$(dart.legacy(main.BrowseScreen)) {
    initState() {
      super.initState();
      this[_scrollController].addListener(dart.fn(() => {
        if (dart.notNull(this[_scrollController].offset) <= 100) {
          this.setState(dart.fn(() => {
            let fade = dart.notNull(this[_scrollController].offset) / dart.notNull(this[_threshold]);
            this[_fadePercentage] = fade < 0 ? 0.0 : fade;
          }, T.VoidToNull()));
        } else {
          this.setState(dart.fn(() => this[_fadePercentage] = 1.0, T.VoidTodoubleL()));
        }
      }, T.VoidToNull()));
      async.scheduleMicrotask(dart.fn(() => this[_video].second.currentTime = 2, T.VoidTointL()));
    }
    build(context) {
      let t3, t3$, t3$0;
      let size = media_query.MediaQuery.of(context).size;
      let isMobile = dart.notNull(size.width) < 650;
      let currentRange = dart.notNull(size.width) / 500;
      let maxRange = 2.8;
      let minRange = 1.5;
      let scaleFactor = 1.0;
      if (currentRange >= minRange && currentRange <= maxRange) {
        scaleFactor = currentRange / maxRange;
      } else if (currentRange > maxRange) {
        scaleFactor = 1.0;
      } else {
        scaleFactor = 0.5;
      }
      return new scaffold.Scaffold.new({backgroundColor: new ui.Color.new(4279505940), body: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new scroll_view.ListView.new({controller: this[_scrollController], children: T.JSArrayOfWidgetL().of([isMobile ? this[_topSectionMobile](size) : this[_topSection](size, scaleFactor), new basic.Transform.new({transform: (t3 = vector_math_64.Matrix4.identity(), (() => {
                    t3.translate(0, isMobile ? 30.0 : -80.0);
                    return t3;
                  })()), child: new basic.Align.new({alignment: alignment.Alignment.bottomLeft, child: new container.Container.new({height: 180.0, width: size.width, margin: C[15] || CT.C15, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new basic.Padding.new({padding: C[16] || CT.C16, child: new text.Text.new("Trending Now", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 20.0, fontWeight: ui.FontWeight.w600})})}), new basic.SizedBox.new({height: 10.0}), new basic.Expanded.new({child: new scroll_view.ListView.new({padding: C[17] || CT.C17, scrollDirection: basic_types.Axis.horizontal, children: this[_trending]})})])})})})}), new basic.Transform.new({transform: (t3$ = vector_math_64.Matrix4.identity(), (() => {
                    t3$.translate(0, isMobile ? 40.0 : -60.0);
                    return t3$;
                  })()), child: new container.Container.new({height: 500.0, width: size.width, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new basic.Padding.new({padding: C[16] || CT.C16, child: new text.Text.new("Netflix Originals", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 20.0, fontWeight: ui.FontWeight.w600})})}), new basic.SizedBox.new({height: 10.0}), new basic.Expanded.new({child: new scroll_view.ListView.builder({itemBuilder: dart.fn((context, index) => {
                              let item = this[_originals][$_get](index);
                              return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                                  T.FutureOfNull().delayed(new core.Duration.new({milliseconds: 500}), dart.fn(() => {
                                    if (!dart.test(this[_video].second.paused)) {
                                      this[_video].second.pause();
                                      this[_video].second[$remove]();
                                    }
                                    navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(_ => new main.PlayMovie.new(), T.BuildContextLToPlayMovieL())}));
                                  }, T.VoidToNull()));
                                }, T.VoidToNull()), child: new main.HandCursor.new({child: item})});
                            }, T.BuildContextLAndintLToGestureDetectorL()), itemCount: this[_originals][$length], padding: C[17] || CT.C17, scrollDirection: basic_types.Axis.horizontal})})])})})}), new basic.Transform.new({transform: (t3$0 = vector_math_64.Matrix4.identity(), (() => {
                    t3$0.translate(0, isMobile ? 70.0 : -20.0);
                    return t3$0;
                  })()), child: new container.Container.new({height: 240.0, width: size.width, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new basic.Padding.new({padding: C[16] || CT.C16, child: new text.Text.new("Top 10 Today", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 20.0, fontWeight: ui.FontWeight.w600})})}), new basic.SizedBox.new({height: 30.0}), new basic.Expanded.new({child: new scroll_view.ListView.new({padding: C[17] || CT.C17, scrollDirection: basic_types.Axis.horizontal, children: this[_top]})})])})})}), new basic.SizedBox.new({height: isMobile ? 100.0 : 20.0}), new container.Container.new({height: 240.0, width: size.width, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new basic.Padding.new({padding: C[16] || CT.C16, child: new text.Text.new("Award-Winning", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 20.0, fontWeight: ui.FontWeight.w600})})}), new basic.SizedBox.new({height: 10.0}), new basic.Expanded.new({child: new scroll_view.ListView.builder({itemBuilder: dart.fn((context, index) => this[_trending][$_get](index), T.BuildContextLAndintLToWidgetL()), itemCount: this[_trending][$length], padding: C[17] || CT.C17, scrollDirection: basic_types.Axis.horizontal})})])})}), new basic.SizedBox.new({height: 20.0})])}), isMobile ? this[_appBarMobile](size) : this[_appBar](size)])}), bottomNavigationBar: isMobile ? new theme.Theme.new({data: theme.Theme.of(context).copyWith({canvasColor: new ui.Color.new(4279505940)}), child: new bottom_navigation_bar.BottomNavigationBar.new({elevation: 0.0, showUnselectedLabels: true, backgroundColor: colors.Colors.black, type: bottom_navigation_bar.BottomNavigationBarType.fixed, selectedItemColor: colors.Colors.white, unselectedItemColor: colors.Colors.grey._get(700), selectedLabelStyle: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 10.0}), unselectedLabelStyle: new text_style.TextStyle.new({color: colors.Colors.grey._get(700), fontSize: 10.0}), items: T.JSArrayOfBottomNavigationBarItemL().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.home), title: new text.Text.new("Home")}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.search), title: new text.Text.new("Search")}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.play_circle_outline), title: new text.Text.new("Coming soon")}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.file_download), title: new text.Text.new("Downloads")}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.menu), title: new text.Text.new("More")})])})}) : null});
    }
    [_appBarMobile](size) {
      return new container.Container.new({height: 50.0, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new implicit_animations.AnimatedOpacity.new({opacity: this[_fadePercentage] === 0 ? 0.0 : 1.0, duration: new core.Duration.new({milliseconds: 250}), child: new container.Container.new({height: 50.0, width: size.width, decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([new ui.Color.new(4278584838).withOpacity(this[_fadePercentage]), new ui.Color.new(4279505940).withOpacity(this[_fadePercentage])]), begin: alignment.Alignment.topCenter, end: alignment.Alignment.bottomCenter})})})}), new container.Container.new({height: 50.0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidgetL().of([new basic.Padding.new({padding: C[18] || CT.C18, child: new image.Image.network("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/logo_net.png")}), new basic.SizedBox.new(), new text.Text.new("TV Shows", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontWeight: ui.FontWeight.w600})}), new text.Text.new("Movies", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontWeight: ui.FontWeight.w600})}), new text.Text.new("My List", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontWeight: ui.FontWeight.w600})}), new basic.SizedBox.new()])})})])})});
    }
    [_appBar](size) {
      let isTablet = dart.notNull(size.width) < 1000;
      return new container.Container.new({height: 60.0, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new implicit_animations.AnimatedOpacity.new({opacity: this[_fadePercentage] === 0 ? 0.0 : 1.0, duration: new core.Duration.new({milliseconds: 250}), child: new container.Container.new({height: 60.0, width: size.width, decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([new ui.Color.new(4278584838).withOpacity(this[_fadePercentage]), new ui.Color.new(4279505940).withOpacity(this[_fadePercentage])]), begin: alignment.Alignment.topCenter, end: alignment.Alignment.bottomCenter})})})}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: T.JSArrayOfWidgetL().of([new basic.SizedBox.new({width: 40.0}), new container.Container.new({width: 90.0, padding: C[19] || CT.C19, child: this[_logo]}), new basic.SizedBox.new({width: 50.0}), new text.Text.new("Home", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), new basic.SizedBox.new({width: 20.0}), new text.Text.new("TV Shows", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), new basic.SizedBox.new({width: 20.0}), new text.Text.new("Movies", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), new basic.SizedBox.new({width: 20.0}), new text.Text.new("Latest", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), new basic.SizedBox.new({width: 20.0}), new text.Text.new("My List", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), new basic.Expanded.new({child: new basic.SizedBox.new()}), isTablet ? new basic.Row.new({children: T.JSArrayOfWidgetL().of([new basic.CustomPaint.new({size: new ui.Size.new(30.0, 30.0), painter: new main.ProfileFace.new({color: main.Utils.mainRed, isSmall: true})}), new basic.SizedBox.new({width: 5.0}), new icon.Icon.new(icons.Icons.arrow_drop_down, {color: colors.Colors.white})])}) : new basic.Row.new({children: T.JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.search, {color: colors.Colors.white, size: 30.0}), new basic.SizedBox.new({width: 25.0}), new container.Container.new({height: 28.0, width: 28.0, child: this[_gift]}), new basic.SizedBox.new({width: 25.0}), new basic.SizedBox.new({height: 25.0, width: 30.0, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.notifications, {color: colors.Colors.white, size: 30.0}), new basic.Align.new({alignment: alignment.Alignment.topRight, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: main.Utils.mainRed, borderRadius: new border_radius.BorderRadius.circular(20.0)}), padding: C[20] || CT.C20, child: new text.Text.new("9+", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 10.0})})})})])})}), new basic.SizedBox.new({width: 25.0}), new basic.CustomPaint.new({size: new ui.Size.new(30.0, 30.0), painter: new main.ProfileFace.new({color: main.Utils.mainRed, isSmall: true})}), new basic.SizedBox.new({width: 5.0}), new icon.Icon.new(icons.Icons.arrow_drop_down, {color: colors.Colors.white})])}), new basic.SizedBox.new({width: 40.0})])})])}), decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([new ui.Color.new(4278584838).withOpacity(0.8), new ui.Color.new(4279505940).withOpacity(0.0)]), begin: alignment.Alignment.topCenter, end: alignment.Alignment.bottomCenter})})});
    }
    [_topSection](size, scaleFactor) {
      let t3;
      return new container.Container.new({width: size.width, height: dart.notNull(size.width) / 1.78, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new basic.IgnorePointer.new({ignoring: main._BrowseScreenState._hoverPlay, child: this[_video].first}), new basic.Transform.new({transform: (t3 = vector_math_64.Matrix4.identity(), (() => {
                t3.translate(0, 1.0);
                return t3;
              })()), child: new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new container.Container.new({height: 2.0, color: new ui.Color.new(4279505940)})})}), new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new container.Container.new({width: size.width, height: 150.0, decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([new ui.Color.new(4279505940).withOpacity(0.0), new ui.Color.new(4279505940)]), begin: alignment.Alignment.topCenter, end: alignment.Alignment.bottomCenter})})})}), this[_movieInfo](size, scaleFactor)])})});
    }
    [_movieInfo](size, scaleFactor) {
      return new basic.Align.new({alignment: alignment.Alignment.centerLeft, child: new container.Container.new({margin: new edge_insets.EdgeInsets.only({left: dart.notNull(size.width) * 0.06}), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisAlignment: flex.MainAxisAlignment.end, children: T.JSArrayOfWidgetL().of([new basic.SizedBox.new({width: dart.notNull(size.width) * 0.22, child: new image.Image.network("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/bbb_title.png")}), new basic.SizedBox.new({height: 30.0}), new basic.SizedBox.new({width: dart.notNull(size.width) * 0.3, child: new text.Text.new("Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 20.0}), textScaleFactor: scaleFactor})}), new basic.SizedBox.new({height: 30.0}), new basic.Transform.scale({scale: scaleFactor, alignment: alignment.Alignment.topLeft, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: T.JSArrayOfWidgetL().of([this[_playMovie](112.0), new basic.SizedBox.new({width: 10.0}), new container.Container.new({width: 150.0, height: 38.0, decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4283650642), borderRadius: new border_radius.BorderRadius.circular(4.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.info_outline, {color: colors.Colors.white, size: 26.0}), new basic.SizedBox.new({width: 8.0}), new text.Text.new("More Info", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0, fontWeight: ui.FontWeight.w600})})])})})])})})])})})});
    }
    [_topSectionMobile](size) {
      let t3;
      return new container.Container.new({width: size.width, height: dart.notNull(size.height) * 0.7, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new container.Container.new({width: size.width, height: size.height, child: new basic.Opacity.new({opacity: 0.7, child: new image.Image.network("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/bbb_top.jpg", {fit: box_fit.BoxFit.cover})})}), new basic.Transform.new({transform: (t3 = vector_math_64.Matrix4.identity(), (() => {
                t3.translate(0, 1.0);
                return t3;
              })()), child: new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new container.Container.new({height: 2.0, color: new ui.Color.new(4279505940)})})}), new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new container.Container.new({width: size.width, height: 150.0, decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([new ui.Color.new(4279505940).withOpacity(0.0), new ui.Color.new(4279505940)]), begin: alignment.Alignment.topCenter, end: alignment.Alignment.bottomCenter})})})}), new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.end, children: T.JSArrayOfWidgetL().of([new basic.SizedBox.new({width: 250.0, child: new image.Image.network("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/bbb_title.png")}), new basic.SizedBox.new({height: 30.0}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidgetL().of([new basic.Column.new({children: T.JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.add, {color: colors.Colors.white}), new basic.SizedBox.new({height: 4.0}), new text.Text.new("My List", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 12.0})})])}), new main.HandCursor.new({child: this[_playMovie](100.0)}), new basic.Column.new({children: T.JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.info_outline, {color: colors.Colors.white}), new basic.SizedBox.new({height: 4.0}), new text.Text.new("Info", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 12.0})})])})])})])})})])})});
    }
    [_playMovie](width) {
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          T.FutureOfNull().delayed(new core.Duration.new({milliseconds: 500}), dart.fn(() => {
            if (!dart.test(this[_video].second.paused)) {
              this[_video].second.pause();
              this[_video].second[$remove]();
            }
            navigator.Navigator.of(this.context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(_ => new main.PlayMovie.new(), T.BuildContextLToPlayMovieL())}));
          }, T.VoidToNull()));
        }, T.VoidToNull()), child: new basic.MouseRegion.new({onHover: dart.fn(_ => main._BrowseScreenState._hoverPlay = true, T.PointerHoverEventLToboolL()), onExit: dart.fn(_ => main._BrowseScreenState._hoverPlay = false, T.PointerExitEventLToboolL()), child: new container.Container.new({width: width, height: 36.0, decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4294967295), borderRadius: new border_radius.BorderRadius.circular(4.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.play_arrow, {color: colors.Colors.black, size: 28.0}), new basic.SizedBox.new({width: 5.0}), new text.Text.new("Play", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 16.0, fontWeight: ui.FontWeight.w600})})])})})})});
    }
    static _movieItem(url) {
      return new container.Container.new({width: 260.0, height: 150.0, child: new image.Image.network(url, {fit: box_fit.BoxFit.cover})});
    }
    static _movieOriginal(url) {
      return new container.Container.new({width: 260.0, height: 480.0, child: new image.Image.network(url, {fit: box_fit.BoxFit.cover})});
    }
    static _movieTop(url, index) {
      return new container.Container.new({width: 260.0, height: 240.0, child: new basic.Stack.new({children: T.JSArrayOfWidgetL().of([new basic.Align.new({alignment: alignment.Alignment.centerLeft, child: new container.Container.new({width: 130.0, height: 240.0, child: new image.Image.network(index)})}), new basic.Align.new({alignment: alignment.Alignment.centerRight, child: new container.Container.new({height: 240.0, width: 130.0, margin: C[12] || CT.C12, child: new image.Image.network(url, {fit: box_fit.BoxFit.cover})})})])})});
    }
  };
  (main._BrowseScreenState.new = function() {
    this[_scrollController] = new scroll_controller.ScrollController.new();
    this[_threshold] = 100.0;
    this[_fadePercentage] = 0.0;
    this[_logo] = main.Utils.logo();
    this[_gift] = main.Utils.svgIcon("<svg viewBox=\"0 0 20 21\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18" + ".0246364,10.087 C18.0246364,10.1733636 17.9519091,10.2460909 17.8655455,10.2460909 L17" + ".6782727,10.2460909 L16.3146364,10.2460909 L3.07372727,10.2460909 L1.71009091,10.2460909 L1" + ".52281818,10.2460909 C1.43645455,10.2460909 1.36372727,10.1733636 1.36372727,10.087 L1" + ".36372727,7.56518182 C1.36372727,7.47790909 1.43645455,7.40518182 1.52281818,7.40518182 L9" + ".01190909,7.40518182 L14.601,7.40518182 L17.8655455,7.40518182 C17.9519091,7.40518182 18" + ".0246364,7.47790909 18.0246364,7.56518182 L18.0246364,10.087 Z M16.3146364,18.6624545 C16" + ".3146364,18.6988182 16.281,18.7324545 16.2446364,18.7324545 L10.3755455,18.7324545 L10.3755455," + "11.6097273 L16.3146364,11.6097273 L16.3146364,18.6624545 Z M9.01190909,18.7324545 L3.14372727,18" + ".7324545 C3.10645455,18.7324545 3.07372727,18.6988182 3.07372727,18.6624545 L3.07372727,11" + ".6097273 L9.01190909,11.6097273 L9.01190909,18.7324545 Z M6.711,1.36336364 C7.94918182,1" + ".36336364 8.95554545,2.37063636 8.95554545,3.60790909 L8.95554545,5.85245455 L6.711,5.85245455 " + "C5.47372727,5.85245455 4.46645455,4.84518182 4.46645455,3.60790909 C4.46645455,2.37063636 5" + ".47372727,1.36336364 6.711,1.36336364 L6.711,1.36336364 Z M10.3755455,4.95790909 C10.3755455,3" + ".86972727 11.261,2.98518182 12.3491818,2.98518182 C13.4382727,2.98518182 14.3228182,3.86972727 " + "14.3228182,4.95790909 C14.3228182,5.36063636 14.1973636,5.73063636 13.9882727,6.04154545 L10" + ".3755455,6.04154545 L10.3755455,4.95790909 Z M17.8655455,6.04154545 L15.4928182,6.04154545 C15" + ".6128182,5.70154545 15.6864545,5.33972727 15.6864545,4.95790909 C15.6864545,3.11790909 14" + ".1891818,1.62063636 12.3491818,1.62063636 C11.491,1.62063636 10.7155455,1.95609091 10.1237273,2" + ".49063636 C9.65009091,1.04972727 8.30827273,-0.000272727273 6.711,-0.000272727273 C4.72190909,-0" + ".000272727273 3.10281818,1.61881818 3.10281818,3.60790909 C3.10281818,4.55245455 3.47736364,5" + ".40245455 4.07554545,6.04154545 L1.52281818,6.04154545 C0.682818182,6.04154545 9.09090909e-05,6" + ".72518182 9.09090909e-05,7.56518182 L9.09090909e-05,10.087 C9.09090909e-05,10.927 0.682818182,11" + ".6097273 1.52281818,11.6097273 L1.71009091,11.6097273 L1.71009091,18.6624545 C1.71009091,19" + ".4533636 2.35281818,20.0960909 3.14372727,20.0960909 L16.2446364,20.0960909 C17.0355455,20" + ".0960909 17.6782727,19.4533636 17.6782727,18.6624545 L17.6782727,11.6097273 L17.8655455,11" + ".6097273 C18.7055455,11.6097273 19.3882727,10.927 19.3882727,10.087 L19.3882727,7.56518182 C19" + ".3882727,6.72518182 18.7055455,6.04154545 17.8655455,6.04154545 L17.8655455,6.04154545 Z\" " + "fill=\"#FFFFFF\"/></svg>");
    this[_video] = main.Utils.video("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "3", true);
    this[_trending] = T.JSArrayOfWidgetL().of([new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieItem("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/netflix_one.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieItem("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/netflix_two.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieItem("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/netflix_three.jpg"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieItem("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/netflix_four.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieItem("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/netflix_five.jpg"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieItem("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/netflix_six.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieItem("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/netflix_seven.jpg"), new basic.SizedBox.new({width: 5.0})])})]);
    this[_originals] = T.JSArrayOfWidgetL().of([new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieOriginal("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/bbb.jpg"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieOriginal("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/original_two.jpg"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieOriginal("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/original_three.jpg"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieOriginal("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/original_four.jpg"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieOriginal("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/original_five.jpg"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieOriginal("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/original_six.jpg"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieOriginal("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/original_seven.jpg"), new basic.SizedBox.new({width: 5.0})])})]);
    this[_top] = T.JSArrayOfWidgetL().of([new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/avengers.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_one.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/blood.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_two.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://a.wattpad.com/cover/214526225-352-k990092.jpg.png?alt=media", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_three.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/john.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_four.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/original_seven.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_five.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/dietodie.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_six.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/break.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_seven.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/capmarvel.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_eight.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfkmPMDfVZLe3FoaHobQqYZ-SGIbeASuzwf21wTcQ8oCTyQmOF&usqp=CAU", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_nine.png"), new basic.SizedBox.new({width: 5.0})])}), new basic.Row.new({children: T.JSArrayOfWidgetL().of([main._BrowseScreenState._movieTop("https://images-na.ssl-images-amazon.com/images/I/71AErpCoZzL._AC_SY679_.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2399829/top_ten.png"), new basic.SizedBox.new({width: 5.0})])})]);
    main._BrowseScreenState.__proto__.new.call(this);
    ;
  }).prototype = main._BrowseScreenState.prototype;
  dart.addTypeTests(main._BrowseScreenState);
  dart.addTypeCaches(main._BrowseScreenState);
  dart.setMethodSignature(main._BrowseScreenState, () => ({
    __proto__: dart.getMethods(main._BrowseScreenState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_appBarMobile]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)]),
    [_appBar]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)]),
    [_topSection]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size), dart.legacy(core.double)]),
    [_movieInfo]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size), dart.legacy(core.double)]),
    [_topSectionMobile]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(ui.Size)]),
    [_playMovie]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.double)])
  }));
  dart.setLibraryUri(main._BrowseScreenState, I[0]);
  dart.setFieldSignature(main._BrowseScreenState, () => ({
    __proto__: dart.getFields(main._BrowseScreenState.__proto__),
    [_scrollController]: dart.finalFieldType(dart.legacy(scroll_controller.ScrollController)),
    [_threshold]: dart.finalFieldType(dart.legacy(core.double)),
    [_fadePercentage]: dart.fieldType(dart.legacy(core.double)),
    [_logo]: dart.finalFieldType(dart.legacy(framework.Widget)),
    [_gift]: dart.finalFieldType(dart.legacy(framework.Widget)),
    [_video]: dart.finalFieldType(dart.legacy(main.Tuple$(dart.legacy(framework.Widget), dart.legacy(html.VideoElement)))),
    [_trending]: dart.fieldType(dart.legacy(core.List$(dart.legacy(framework.Widget)))),
    [_originals]: dart.fieldType(dart.legacy(core.List$(dart.legacy(framework.Widget)))),
    [_top]: dart.fieldType(dart.legacy(core.List$(dart.legacy(framework.Widget))))
  }));
  dart.defineLazy(main._BrowseScreenState, {
    /*main._BrowseScreenState._hoverPlay*/get _hoverPlay() {
      return false;
    },
    set _hoverPlay(_) {}
  }, true);
  main.PlayMovie = class PlayMovie extends framework.StatefulWidget {
    createState() {
      return new main._PlayMovieState.new();
    }
  };
  (main.PlayMovie.new = function() {
    main.PlayMovie.__proto__.new.call(this);
    ;
  }).prototype = main.PlayMovie.prototype;
  dart.addTypeTests(main.PlayMovie);
  dart.addTypeCaches(main.PlayMovie);
  dart.setMethodSignature(main.PlayMovie, () => ({
    __proto__: dart.getMethods(main.PlayMovie.__proto__),
    createState: dart.fnType(dart.legacy(main._PlayMovieState), [])
  }));
  dart.setLibraryUri(main.PlayMovie, I[0]);
  var _movie = dart.privateName(main, "_movie");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(dart.legacy(main.PlayMovie)) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(dart.legacy(main.PlayMovie))[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(dart.legacy(main.PlayMovie)));
  main._PlayMovieState = class _PlayMovieState extends State_TickerProviderStateMixin$36 {
    initState() {
      let t3, t3$;
      super.initState();
      async.scheduleMicrotask(dart.fn(() => this[_movie].second.pause(), T.VoidTovoid()));
      this.focusNode = (t3 = new focus_manager.FocusNode.new(), (() => {
        t3.requestFocus();
        return t3;
      })());
      this.controller = (t3$ = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({seconds: 6})}), (() => {
        t3$.forward();
        t3$.addStatusListener(dart.fn(status => {
          if (status == animation.AnimationStatus.completed || status == animation.AnimationStatus.dismissed) {
            this.setState(dart.fn(() => this.playing = false, T.VoidToboolL()));
          }
          if (status == animation.AnimationStatus.completed) {
            async.scheduleMicrotask(dart.fn(() => this[_movie].second[$play](), T.VoidToFutureL()));
          }
        }, T.AnimationStatusLToNull()));
        return t3$;
      })());
    }
    dispose() {
      this[_movie].second.pause();
      this[_movie].second.currentTime = 0;
      this.controller.dispose();
      super.dispose();
    }
    getTween(begin, end, intBegin, intEnd, curve = C[21] || CT.C21) {
      return new (T.TweenOfdoubleL()).new({begin: begin, end: end}).animate(new animations.CurvedAnimation.new({parent: this.controller, curve: new curves.Interval.new(intBegin, intEnd, {curve: curve})}));
    }
    build(context) {
      let size = media_query.MediaQuery.of(context).size;
      return new material.Material.new({color: colors.Colors.black, child: new basic.Stack.new({fit: stack.StackFit.expand, children: (() => {
            let t3 = T.JSArrayOfWidgetL().of([]);
            if (!dart.test(this.playing)) t3[$add](new basic.Column.new({children: T.JSArrayOfWidgetL().of([new basic.SizedBox.new({height: 40.0, child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new basic.Expanded.new({child: new basic.SizedBox.new()}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => navigator.Navigator.of(context).pop(T.ObjectL()), T.VoidTovoid()), child: new icon.Icon.new(icons.Icons.close, {color: colors.Colors.white, size: 30.0})}), new basic.SizedBox.new({width: 10.0})])})}), new basic.Expanded.new({child: this[_movie].first}), new basic.SizedBox.new({height: 40.0})])}));
            t3[$add](new visibility.Visibility.new({visible: this.playing, child: new container.Container.new({color: colors.Colors.black, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidgetL().of([new basic.SizedBox.new({height: 70.0}), new basic.Expanded.new({child: new basic.Builder.new({builder: dart.fn(context => new transitions.FadeTransition.new({opacity: this.getTween(1.0, 0.0, 0.8, 1.0, curves.Curves.easeOut), child: new basic.CustomPaint.new({painter: new main.NetflixPainter.new(this.controller, new main.AnimProps.new({scale: this.getTween(1.0, 20.0, 0.2, 0.7, curves.Curves.easeInQuint), translate: this.getTween(0.0, 0.2, 0.2, 1.0, curves.Curves.linear), secondaryTranslate: this.getTween(0.0, 3.0, 0.53, 1.0, curves.Curves.easeIn), leftLegClip: this.getTween(1.0, 0.0, 0.0, 0.05), middleLegClip: this.getTween(0.0, 1.0, 0.05, 0.1), rightLegClip: this.getTween(1.0, 0.0, 0.1, 0.15), middleLegReverseClip: this.getTween(0.0, 1.0, 0.44, 0.5), rightLegReverseClip: this.getTween(0.0, 1.0, 0.4, 0.45), leftLegOpacity: this.getTween(1.0, 0.0, 0.45, 0.7, curves.Curves.ease), middleLegOpacity: this.getTween(1.0, 0.0, 0.4, 0.6, curves.Curves.ease), rightLegLinesOffset: this.getTween(0.0, 1.0, 0.3, 0.4), leftLegLinesOffset: this.getTween(0.0, 1.0, 0.35, 0.6), rainbowOffset: this.getTween(1.0, 30.0, 0.53, 1.0), showFinishAnim: this.showFinishAnim})), child: new container.Container.new({height: size.shortestSide, width: size.shortestSide})})}), T.BuildContextLToFadeTransitionL())})}), new container.Container.new({height: 60.0, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.end, children: T.JSArrayOfWidgetL().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(main.breakpoint(T.doubleL(), size.width, 10.0, 12.0, 14.0)), child: new basic.ClipOval.new({clipBehavior: ui.Clip.antiAlias, child: new image.Image.network("https://pbs.twimg" + ".com/profile_images/1188517161192558593/gZC6Far3_400x400.jpg", {fit: box_fit.BoxFit.cover})})}), new basic.SizedBox.new({width: 8.0}), new text.Text.new("Dominik Roszkowski @OrestesGaolin", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: main.breakpoint(T.doubleL(), size.width, 16.0, 14.0, 12.0)})}), new basic.SizedBox.new({width: 20.0})])})}), new basic.SizedBox.new({height: 10.0})])})})}));
            return t3;
          })()})});
    }
  };
  (main._PlayMovieState.new = function() {
    this.controller = null;
    this.playing = true;
    this.showFinishAnim = false;
    this.focusNode = null;
    this[_movie] = main.Utils.video("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", dart.str(main._PlayMovieState._movieId = dart.notNull(main._PlayMovieState._movieId) + 1), false);
    main._PlayMovieState.__proto__.new.call(this);
    ;
  }).prototype = main._PlayMovieState.prototype;
  dart.addTypeTests(main._PlayMovieState);
  dart.addTypeCaches(main._PlayMovieState);
  dart.setMethodSignature(main._PlayMovieState, () => ({
    __proto__: dart.getMethods(main._PlayMovieState.__proto__),
    getTween: dart.fnType(dart.legacy(animation.Animation$(dart.legacy(core.double))), [dart.legacy(core.double), dart.legacy(core.double), dart.legacy(core.double), dart.legacy(core.double)], [dart.legacy(curves.Curve)]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main._PlayMovieState, I[0]);
  dart.setFieldSignature(main._PlayMovieState, () => ({
    __proto__: dart.getFields(main._PlayMovieState.__proto__),
    controller: dart.fieldType(dart.legacy(animation_controller.AnimationController)),
    playing: dart.fieldType(dart.legacy(core.bool)),
    showFinishAnim: dart.fieldType(dart.legacy(core.bool)),
    focusNode: dart.fieldType(dart.legacy(focus_manager.FocusNode)),
    [_movie]: dart.finalFieldType(dart.legacy(main.Tuple$(dart.legacy(framework.Widget), dart.legacy(html.VideoElement))))
  }));
  dart.defineLazy(main._PlayMovieState, {
    /*main._PlayMovieState._movieId*/get _movieId() {
      return 5;
    },
    set _movieId(_) {}
  }, true);
  var showFinishAnim$ = dart.privateName(main, "AnimProps.showFinishAnim");
  var _leftLegClip = dart.privateName(main, "_leftLegClip");
  var _middleLegClip = dart.privateName(main, "_middleLegClip");
  var _rightLegClip = dart.privateName(main, "_rightLegClip");
  var _middleLegReverseClip = dart.privateName(main, "_middleLegReverseClip");
  var _rightLegReverseClip = dart.privateName(main, "_rightLegReverseClip");
  var _leftLegOpacity = dart.privateName(main, "_leftLegOpacity");
  var _middleLegOpacity = dart.privateName(main, "_middleLegOpacity");
  var _rightLegLinesOffset = dart.privateName(main, "_rightLegLinesOffset");
  var _leftLegLinesOffset = dart.privateName(main, "_leftLegLinesOffset");
  var _scale = dart.privateName(main, "_scale");
  var _translate = dart.privateName(main, "_translate");
  var _secondaryTranslate = dart.privateName(main, "_secondaryTranslate");
  var _rainbowOffset = dart.privateName(main, "_rainbowOffset");
  main.AnimProps = class AnimProps extends core.Object {
    get showFinishAnim() {
      return this[showFinishAnim$];
    }
    set showFinishAnim(value) {
      super.showFinishAnim = value;
    }
    get leftLegClip() {
      return this[_leftLegClip].value;
    }
    get middleLegClip() {
      return dart.notNull(this[_middleLegClip].value) - dart.notNull(this[_middleLegReverseClip].value);
    }
    get rightLegClip() {
      return dart.notNull(this[_rightLegClip].value) + dart.notNull(this[_rightLegReverseClip].value);
    }
    get leftLegOpacity() {
      return this[_leftLegOpacity].value;
    }
    get middleLegOpacity() {
      return this[_middleLegOpacity].value;
    }
    get rightLegLinesOffset() {
      return this[_rightLegLinesOffset].value;
    }
    get leftLegLinesOffset() {
      return this[_leftLegLinesOffset].value;
    }
    get scale() {
      return this[_scale].value;
    }
    get translate() {
      return this[_translate].value;
    }
    get secondaryTranslate() {
      return this[_secondaryTranslate].value;
    }
    get rightLegReverseClip() {
      return this[_rightLegReverseClip].value;
    }
    get rainbowOffset() {
      return this[_rainbowOffset].value;
    }
  };
  (main.AnimProps.new = function(opts) {
    let leftLegClip = opts && 'leftLegClip' in opts ? opts.leftLegClip : null;
    let middleLegClip = opts && 'middleLegClip' in opts ? opts.middleLegClip : null;
    let rightLegClip = opts && 'rightLegClip' in opts ? opts.rightLegClip : null;
    let middleLegReverseClip = opts && 'middleLegReverseClip' in opts ? opts.middleLegReverseClip : null;
    let rightLegReverseClip = opts && 'rightLegReverseClip' in opts ? opts.rightLegReverseClip : null;
    let leftLegOpacity = opts && 'leftLegOpacity' in opts ? opts.leftLegOpacity : null;
    let middleLegOpacity = opts && 'middleLegOpacity' in opts ? opts.middleLegOpacity : null;
    let rightLegLinesOffset = opts && 'rightLegLinesOffset' in opts ? opts.rightLegLinesOffset : null;
    let leftLegLinesOffset = opts && 'leftLegLinesOffset' in opts ? opts.leftLegLinesOffset : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let translate = opts && 'translate' in opts ? opts.translate : null;
    let rainbowOffset = opts && 'rainbowOffset' in opts ? opts.rainbowOffset : null;
    let secondaryTranslate = opts && 'secondaryTranslate' in opts ? opts.secondaryTranslate : null;
    let showFinishAnim = opts && 'showFinishAnim' in opts ? opts.showFinishAnim : null;
    this[showFinishAnim$] = showFinishAnim;
    this[_leftLegClip] = leftLegClip;
    this[_middleLegClip] = middleLegClip;
    this[_rightLegClip] = rightLegClip;
    this[_middleLegReverseClip] = middleLegReverseClip;
    this[_rightLegReverseClip] = rightLegReverseClip;
    this[_leftLegOpacity] = leftLegOpacity;
    this[_middleLegOpacity] = middleLegOpacity;
    this[_rightLegLinesOffset] = rightLegLinesOffset;
    this[_leftLegLinesOffset] = leftLegLinesOffset;
    this[_scale] = scale;
    this[_translate] = translate;
    this[_secondaryTranslate] = secondaryTranslate;
    this[_rainbowOffset] = rainbowOffset;
    ;
  }).prototype = main.AnimProps.prototype;
  dart.addTypeTests(main.AnimProps);
  dart.addTypeCaches(main.AnimProps);
  dart.setGetterSignature(main.AnimProps, () => ({
    __proto__: dart.getGetters(main.AnimProps.__proto__),
    leftLegClip: dart.legacy(core.double),
    middleLegClip: dart.legacy(core.double),
    rightLegClip: dart.legacy(core.double),
    leftLegOpacity: dart.legacy(core.double),
    middleLegOpacity: dart.legacy(core.double),
    rightLegLinesOffset: dart.legacy(core.double),
    leftLegLinesOffset: dart.legacy(core.double),
    scale: dart.legacy(core.double),
    translate: dart.legacy(core.double),
    secondaryTranslate: dart.legacy(core.double),
    rightLegReverseClip: dart.legacy(core.double),
    rainbowOffset: dart.legacy(core.double)
  }));
  dart.setLibraryUri(main.AnimProps, I[0]);
  dart.setFieldSignature(main.AnimProps, () => ({
    __proto__: dart.getFields(main.AnimProps.__proto__),
    [_leftLegClip]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_middleLegClip]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_rightLegClip]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_middleLegReverseClip]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_rightLegReverseClip]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_leftLegOpacity]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_middleLegOpacity]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_rightLegLinesOffset]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_leftLegLinesOffset]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_scale]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_translate]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_secondaryTranslate]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    [_rainbowOffset]: dart.finalFieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
    showFinishAnim: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var legWidth = dart.privateName(main, "NetflixPainter.legWidth");
  var letterWidth = dart.privateName(main, "NetflixPainter.letterWidth");
  var letterHeight = dart.privateName(main, "NetflixPainter.letterHeight");
  var bottomArcHeight = dart.privateName(main, "NetflixPainter.bottomArcHeight");
  var redPaint = dart.privateName(main, "NetflixPainter.redPaint");
  var darkRredPaint = dart.privateName(main, "NetflixPainter.darkRredPaint");
  var rainbowColors = dart.privateName(main, "NetflixPainter.rainbowColors");
  var anim$ = dart.privateName(main, "NetflixPainter.anim");
  var _clipBottom = dart.privateName(main, "_clipBottom");
  var _drawLeftLeg = dart.privateName(main, "_drawLeftLeg");
  var _drawRightLeg = dart.privateName(main, "_drawRightLeg");
  var _drawMiddlePathWithShadow = dart.privateName(main, "_drawMiddlePathWithShadow");
  main.NetflixPainter = class NetflixPainter extends custom_paint.CustomPainter {
    get legWidth() {
      return this[legWidth];
    }
    set legWidth(value) {
      super.legWidth = value;
    }
    get letterWidth() {
      return this[letterWidth];
    }
    set letterWidth(value) {
      super.letterWidth = value;
    }
    get letterHeight() {
      return this[letterHeight];
    }
    set letterHeight(value) {
      super.letterHeight = value;
    }
    get bottomArcHeight() {
      return this[bottomArcHeight];
    }
    set bottomArcHeight(value) {
      super.bottomArcHeight = value;
    }
    get redPaint() {
      return this[redPaint];
    }
    set redPaint(value) {
      super.redPaint = value;
    }
    get darkRredPaint() {
      return this[darkRredPaint];
    }
    set darkRredPaint(value) {
      super.darkRredPaint = value;
    }
    get rainbowColors() {
      return this[rainbowColors];
    }
    set rainbowColors(value) {
      this[rainbowColors] = value;
    }
    get anim() {
      return this[anim$];
    }
    set anim(value) {
      super.anim = value;
    }
    paint(canvas, size) {
      let scale = dart.notNull(size.height) / dart.notNull(this.letterHeight);
      canvas.translate(dart.notNull(size.width) / 2 - dart.notNull(this.letterWidth) * scale / 4 - dart.notNull(this.anim.translate) * dart.notNull(size.width), dart.notNull(size.height) / 2 - dart.notNull(this.letterHeight) * scale / 4 * dart.notNull(this.anim.scale));
      canvas.translate(-dart.notNull(this.anim.secondaryTranslate) * dart.notNull(size.width), 0.0);
      canvas.scale(scale / 2);
      canvas.scale(this.anim.scale);
      canvas.save();
      let leftLegOffset = dart.notNull(this.anim.leftLegClip) * dart.notNull(this.letterHeight);
      let rightLegOffset = dart.notNull(this.anim.rightLegClip) * dart.notNull(this.letterHeight);
      let topLeft = new ui.Offset.new(0.0, leftLegOffset);
      let bottomRightFirstLeg = new ui.Offset.new(this.legWidth, this.letterHeight);
      let bottomRight = new ui.Offset.new(this.letterWidth, this.letterHeight);
      let xRightLeg = dart.notNull(this.letterWidth) - dart.notNull(this.legWidth);
      let topLeftSecondLeg = new ui.Offset.new(xRightLeg, rightLegOffset);
      let leftLeg = new ui.Rect.fromPoints(topLeft, bottomRightFirstLeg);
      let rightLeg = new ui.Rect.fromPoints(topLeftSecondLeg, bottomRight);
      this[_clipBottom](canvas);
      this[_drawLeftLeg](canvas, leftLeg);
      this[_drawRightLeg](canvas, rightLeg, xRightLeg);
      this[_drawMiddlePathWithShadow](canvas, xRightLeg);
      canvas.restore();
    }
    [_clipBottom](canvas) {
      let t4;
      let bottomArcClipPath = (t4 = ui.Path.new(), (() => {
        t4.moveTo(0.0, this.letterHeight);
        t4.quadraticBezierTo(dart.notNull(this.letterWidth) / 2, dart.notNull(this.letterHeight) - 2 * dart.notNull(this.bottomArcHeight), this.letterWidth, this.letterHeight);
        t4.lineTo(this.letterWidth, 0.0);
        t4.lineTo(0.0, 0.0);
        t4.lineTo(0.0, this.letterHeight);
        return t4;
      })());
      canvas.clipPath(bottomArcClipPath);
    }
    [_drawMiddlePathWithShadow](canvas, xRightLeg) {
      let t4, t4$, t4$0, t4$1;
      if (dart.notNull(this.anim.middleLegOpacity) > 0) {
        canvas.save();
        let middleLegOffset = dart.notNull(this.anim.middleLegClip) * dart.notNull(this.letterHeight);
        let middleLeg = (t4 = ui.Path.new(), (() => {
          t4.moveTo(0.0, 0.0);
          t4.lineTo(xRightLeg, this.letterHeight);
          t4.lineTo(this.letterWidth, this.letterHeight);
          t4.lineTo(this.legWidth, 0.0);
          t4.close();
          return t4;
        })());
        let middleLegClipPath = new ui.Rect.fromLTWH(0.0, 0.0, this.letterWidth, middleLegOffset);
        let shadowPath = (t4$ = ui.Path.new(), (() => {
          t4$.moveTo(20.0, 0.0);
          t4$.lineTo(dart.notNull(xRightLeg) - 70, this.letterHeight);
          t4$.lineTo(dart.notNull(this.letterWidth) - 20, this.letterHeight);
          t4$.lineTo(dart.notNull(this.legWidth) + 70, 0.0);
          t4$.close();
          return t4$;
        })());
        let shadowPaint = (t4$0 = ui.Paint.new(), (() => {
          t4$0.color = colors.Colors.black.withOpacity(this.anim.middleLegOpacity);
          t4$0.maskFilter = new ui.MaskFilter.blur(ui.BlurStyle.normal, 30.0);
          return t4$0;
        })());
        let middleLegPaint = (t4$1 = ui.Paint.new(), (() => {
          t4$1.color = main.NetflixColors.NetflixDarkRed.withOpacity(this.anim.middleLegOpacity);
          return t4$1;
        })());
        canvas.clipRect(middleLegClipPath);
        canvas.drawPath(shadowPath, shadowPaint);
        canvas.drawPath(middleLeg, middleLegPaint);
        this.drawMiddleLines(xRightLeg, canvas);
        canvas.restore();
      }
    }
    drawMiddleLines(xRightLeg, canvas) {
      let t4, t4$;
      if (dart.notNull(this.anim.middleLegOpacity) > 0) {
        let gradientPaint = new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([colors.Colors.black, colors.Colors.transparent]), stops: T.JSArrayOfdoubleL().of([0.0, 1.0]), begin: alignment.Alignment.bottomRight, end: alignment.Alignment.topCenter});
        let steps = T.JSArrayOfintL().of([20, 55, 80, 180, 190, 205, 280, 300]);
        let stepsE = T.JSArrayOfintL().of([10, 5, 10, 10, 20, 5, 10, 15]);
        let start = (1 - dart.notNull(this.anim.rightLegLinesOffset)) * dart.notNull(this.letterHeight);
        let middleLegLinePath = new ui.Rect.fromLTWH(0.0, start, this.letterWidth, this.letterHeight);
        for (let i = 0; i < dart.notNull(steps[$length]); i = i + 1) {
          let xTop = 20.0 + dart.notNull(steps[$_get](i));
          let xBottom = dart.notNull(xRightLeg) + dart.notNull(steps[$_get](i));
          let middleLinePath = (t4 = ui.Path.new(), (() => {
            t4.moveTo(xTop, 0.0);
            t4.lineTo(xBottom, this.letterHeight);
            t4.lineTo(xBottom + dart.notNull(stepsE[$_get](i)), this.letterHeight);
            t4.lineTo(xTop + dart.notNull(stepsE[$_get](i)), 0.0);
            t4.close();
            return t4;
          })());
          canvas.drawPath(middleLinePath, (t4$ = ui.Paint.new(), (() => {
            t4$.shader = gradientPaint.createShader(middleLegLinePath);
            t4$.maskFilter = new ui.MaskFilter.blur(ui.BlurStyle.outer, 3.0);
            return t4$;
          })()));
        }
      }
    }
    [_drawRightLeg](canvas, rightLeg, xRightLeg) {
      let t4, t4$;
      canvas.save();
      canvas.drawRect(rightLeg, this.darkRredPaint);
      let gradientPaint = new gradient.LinearGradient.new({colors: T.JSArrayOfColorL().of([colors.Colors.black, colors.Colors.transparent]), stops: T.JSArrayOfdoubleL().of([0.0, 1.0]), begin: alignment.Alignment.topCenter, end: alignment.Alignment.bottomCenter});
      let rightLegGradientOffset = dart.notNull(this.letterHeight) * dart.notNull(this.anim.rightLegLinesOffset);
      let steps = T.JSArrayOfintL().of([20, 55, 80, 180, 280, 300]);
      let stepsE = T.JSArrayOfintL().of([25, 60, 120, 230, 290, 340]);
      for (let i = 0; i < dart.notNull(steps[$length]); i = i + 1) {
        let rightShadowPath = new ui.Rect.fromLTRB(dart.notNull(xRightLeg) + dart.notNull(steps[$_get](i)), 0.0, dart.notNull(xRightLeg) + dart.notNull(stepsE[$_get](i)), rightLegGradientOffset);
        canvas.drawRect(rightShadowPath, (t4 = ui.Paint.new(), (() => {
          t4.shader = gradientPaint.createShader(rightShadowPath);
          t4.maskFilter = new ui.MaskFilter.blur(ui.BlurStyle.outer, 3.0);
          return t4;
        })()));
      }
      let rightLegGradient = new ui.Rect.fromLTWH(dart.notNull(rightLeg.left) - 2, dart.notNull(rightLeg.top) - 2, dart.notNull(rightLeg.width) + 4, rightLegGradientOffset - 120);
      canvas.drawRect(rightLegGradient, (t4$ = ui.Paint.new(), (() => {
        t4$.shader = gradientPaint.createShader(rightLegGradient);
        return t4$;
      })()));
      canvas.restore();
    }
    [_drawLeftLeg](canvas, leftLeg) {
      let t4, t4$;
      canvas.save();
      if (dart.notNull(this.anim.leftLegOpacity) > 0) {
        let leftLegPaint = (t4 = ui.Paint.new(), (() => {
          t4.color = main.NetflixColors.NetflixDarkRed.withOpacity(this.anim.leftLegOpacity);
          return t4;
        })());
        canvas.drawRect(leftLeg, leftLegPaint);
      }
      if (this.anim.showFinishAnim === true) {
        if (dart.notNull(this.anim.leftLegOpacity) < 1) {
          canvas.save();
          for (let i = 0; i < 30; i = i + 1) {
            let rect = new ui.Rect.fromLTWH((0.0 + i * 15.0)[$modulo](this.legWidth) * dart.notNull(this.anim.rainbowOffset), 0.0, i[$modulo](10.0), this.letterHeight);
            canvas.drawRect(rect, (t4$ = ui.Paint.new(), (() => {
              t4$.color = this.rainbowColors[$_get](i[$modulo](this.rainbowColors[$length])).withOpacity(1.0 - dart.notNull(this.anim.leftLegOpacity));
              t4$.maskFilter = new ui.MaskFilter.blur(ui.BlurStyle.normal, 3.0);
              return t4$;
            })()));
          }
          canvas.restore();
        }
      }
      canvas.restore();
    }
    shouldRepaint(oldDelegate) {
      T.CustomPainterL().as(oldDelegate);
      return true;
    }
  };
  (main.NetflixPainter.new = function(controller, anim) {
    let t4, t4$;
    this[legWidth] = 355.0;
    this[letterWidth] = 990.0;
    this[letterHeight] = 1800.0;
    this[bottomArcHeight] = 35.0;
    this[redPaint] = (t4 = ui.Paint.new(), (() => {
      t4.color = main.NetflixColors.NetflixRed;
      t4.style = ui.PaintingStyle.fill;
      return t4;
    })());
    this[darkRredPaint] = (t4$ = ui.Paint.new(), (() => {
      t4$.color = main.NetflixColors.NetflixDarkRed;
      t4$.style = ui.PaintingStyle.fill;
      return t4$;
    })());
    this[rainbowColors] = T.JSArrayOfColorL().of([colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.green._get(200), colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.yellow, colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.yellow._get(800), colors.Colors.pink, colors.Colors.red._get(700), colors.Colors.yellow._get(800), colors.Colors.pink._get(300), colors.Colors.purple._get(200), colors.Colors.yellow._get(800), colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.pink._get(100), colors.Colors.red._get(700), colors.Colors.yellow._get(500), colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.blue._get(200), colors.Colors.red._get(900), colors.Colors.blue._get(300), colors.Colors.blue._get(200), colors.Colors.red._get(900), colors.Colors.red._get(900), colors.Colors.blue, colors.Colors.blue._get(400)]);
    this[anim$] = anim;
    main.NetflixPainter.__proto__.new.call(this, {repaint: controller});
    ;
  }).prototype = main.NetflixPainter.prototype;
  dart.addTypeTests(main.NetflixPainter);
  dart.addTypeCaches(main.NetflixPainter);
  dart.setMethodSignature(main.NetflixPainter, () => ({
    __proto__: dart.getMethods(main.NetflixPainter.__proto__),
    paint: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(ui.Size)]),
    [_clipBottom]: dart.fnType(dart.void, [dart.legacy(ui.Canvas)]),
    [_drawMiddlePathWithShadow]: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(core.double)]),
    drawMiddleLines: dart.fnType(dart.void, [dart.legacy(core.double), dart.legacy(ui.Canvas)]),
    [_drawRightLeg]: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(ui.Rect), dart.legacy(core.double)]),
    [_drawLeftLeg]: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(ui.Rect)]),
    shouldRepaint: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(main.NetflixPainter, I[0]);
  dart.setFieldSignature(main.NetflixPainter, () => ({
    __proto__: dart.getFields(main.NetflixPainter.__proto__),
    legWidth: dart.finalFieldType(dart.legacy(core.double)),
    letterWidth: dart.finalFieldType(dart.legacy(core.double)),
    letterHeight: dart.finalFieldType(dart.legacy(core.double)),
    bottomArcHeight: dart.finalFieldType(dart.legacy(core.double)),
    redPaint: dart.finalFieldType(dart.legacy(ui.Paint)),
    darkRredPaint: dart.finalFieldType(dart.legacy(ui.Paint)),
    rainbowColors: dart.fieldType(dart.legacy(core.List$(dart.legacy(ui.Color)))),
    anim: dart.finalFieldType(dart.legacy(main.AnimProps))
  }));
  main.NetflixColors = class NetflixColors extends core.Object {};
  (main.NetflixColors.new = function() {
    ;
  }).prototype = main.NetflixColors.prototype;
  dart.addTypeTests(main.NetflixColors);
  dart.addTypeCaches(main.NetflixColors);
  dart.setLibraryUri(main.NetflixColors, I[0]);
  dart.defineLazy(main.NetflixColors, {
    /*main.NetflixColors.NetflixRed*/get NetflixRed() {
      return C[22] || CT.C22;
    },
    /*main.NetflixColors.NetflixDarkRed*/get NetflixDarkRed() {
      return C[23] || CT.C23;
    }
  }, true);
  var onHover$ = dart.privateName(main, "HandCursor.onHover");
  var enabled$ = dart.privateName(main, "HandCursor.enabled");
  var child$ = dart.privateName(main, "HandCursor.child");
  var _onHover = dart.privateName(main, "_onHover");
  var _onExit = dart.privateName(main, "_onExit");
  main.HandCursor = class HandCursor extends framework.StatelessWidget {
    get onHover() {
      return this[onHover$];
    }
    set onHover(value) {
      super.onHover = value;
    }
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    [_onHover](evt) {
      let t4;
      html.window[$document].documentElement.style[$cursor] = "pointer";
      t4 = this.onHover;
      t4 == null ? null : t4(true);
    }
    [_onExit](evt) {
      let t4;
      html.window[$document].documentElement.style[$cursor] = "auto";
      t4 = this.onHover;
      t4 == null ? null : t4(false);
    }
    build(context) {
      return new basic.MouseRegion.new({onHover: dart.test(this.enabled) ? dart.bind(this, _onHover) : null, onExit: dart.test(this.enabled) ? dart.bind(this, _onExit) : null, child: this.child});
    }
  };
  (main.HandCursor.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onHover = opts && 'onHover' in opts ? opts.onHover : null;
    let enabled = opts && 'enabled' in opts ? opts.enabled : true;
    let child = opts && 'child' in opts ? opts.child : null;
    this[onHover$] = onHover;
    this[enabled$] = enabled;
    this[child$] = child;
    main.HandCursor.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.HandCursor.prototype;
  dart.addTypeTests(main.HandCursor);
  dart.addTypeCaches(main.HandCursor);
  dart.setMethodSignature(main.HandCursor, () => ({
    __proto__: dart.getMethods(main.HandCursor.__proto__),
    [_onHover]: dart.fnType(dart.void, [dart.legacy(events.PointerHoverEvent)]),
    [_onExit]: dart.fnType(dart.void, [dart.legacy(events.PointerExitEvent)]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main.HandCursor, I[0]);
  dart.setFieldSignature(main.HandCursor, () => ({
    __proto__: dart.getFields(main.HandCursor.__proto__),
    onHover: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.bool)]))),
    enabled: dart.finalFieldType(dart.legacy(core.bool)),
    child: dart.finalFieldType(dart.legacy(framework.Widget))
  }));
  main.main = function main$0() {
    return binding.runApp(new main.Netflix.new());
  };
  main.breakpoint = function breakpoint(Input, input, desktop, tablet, mobile) {
    if (dart.notNull(input) > 1000) {
      return desktop;
    } else if (dart.notNull(input) > 650 && dart.notNull(input) < 1000) {
      return tablet;
    } else {
      return mobile;
    }
  };
  dart.trackLibraries("dartpad_main", {
    "package:dartpad_sample/bootstrap.dart": bootstrap,
    "package:dartpad_sample/main.dart": main
  }, {
  }, null);
  // Exports:
  return {
    bootstrap: bootstrap,
    main: main
  };
}));

//# sourceMappingURL=main.dart.js.map
