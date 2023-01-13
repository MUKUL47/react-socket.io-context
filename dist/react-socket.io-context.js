var Dn = Object.defineProperty;
var Fn = (n, e, t) => e in n ? Dn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ht = (n, e, t) => (Fn(n, typeof e != "symbol" ? e + "" : e, t), t), rr = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var z = (n, e, t) => (rr(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Re = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, We = (n, e, t, s) => (rr(n, e, "write to private field"), s ? s.call(n, t) : e.set(n, t), t);
function $n(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Z = {}, Mn = {
  get exports() {
    return Z;
  },
  set exports(n) {
    Z = n;
  }
}, b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function jn() {
  if (nr)
    return b;
  nr = 1;
  var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), v = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), j = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), U = Symbol.iterator;
  function W(o) {
    return o === null || typeof o != "object" ? null : (o = U && o[U] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, Te = {};
  function X(o, l, g) {
    this.props = o, this.context = l, this.refs = Te, this.updater = g || J;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(o, l) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, l, "setState");
  }, X.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function Ae() {
  }
  Ae.prototype = X.prototype;
  function ue(o, l, g) {
    this.props = o, this.context = l, this.refs = Te, this.updater = g || J;
  }
  var fe = ue.prototype = new Ae();
  fe.constructor = ue, ie(fe, X.prototype), fe.isPureReactComponent = !0;
  var Q = Array.isArray, D = Object.prototype.hasOwnProperty, q = { current: null }, ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(o, l, g) {
    var k, _ = {}, S = null, N = null;
    if (l != null)
      for (k in l.ref !== void 0 && (N = l.ref), l.key !== void 0 && (S = "" + l.key), l)
        D.call(l, k) && !ee.hasOwnProperty(k) && (_[k] = l[k]);
    var O = arguments.length - 2;
    if (O === 1)
      _.children = g;
    else if (1 < O) {
      for (var T = Array(O), $ = 0; $ < O; $++)
        T[$] = arguments[$ + 2];
      _.children = T;
    }
    if (o && o.defaultProps)
      for (k in O = o.defaultProps, O)
        _[k] === void 0 && (_[k] = O[k]);
    return { $$typeof: n, type: o, key: S, ref: N, props: _, _owner: q.current };
  }
  function Pe(o, l) {
    return { $$typeof: n, type: o.type, key: l, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function ge(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function Qe(o) {
    var l = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(g) {
      return l[g];
    });
  }
  var xe = /\/+/g;
  function be(o, l) {
    return typeof o == "object" && o !== null && o.key != null ? Qe("" + o.key) : l.toString(36);
  }
  function le(o, l, g, k, _) {
    var S = typeof o;
    (S === "undefined" || S === "boolean") && (o = null);
    var N = !1;
    if (o === null)
      N = !0;
    else
      switch (S) {
        case "string":
        case "number":
          N = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case n:
            case e:
              N = !0;
          }
      }
    if (N)
      return N = o, _ = _(N), o = k === "" ? "." + be(N, 0) : k, Q(_) ? (g = "", o != null && (g = o.replace(xe, "$&/") + "/"), le(_, l, g, "", function($) {
        return $;
      })) : _ != null && (ge(_) && (_ = Pe(_, g + (!_.key || N && N.key === _.key ? "" : ("" + _.key).replace(xe, "$&/") + "/") + o)), l.push(_)), 1;
    if (N = 0, k = k === "" ? "." : k + ":", Q(o))
      for (var O = 0; O < o.length; O++) {
        S = o[O];
        var T = k + be(S, O);
        N += le(S, l, g, T, _);
      }
    else if (T = W(o), typeof T == "function")
      for (o = T.call(o), O = 0; !(S = o.next()).done; )
        S = S.value, T = k + be(S, O++), N += le(S, l, g, T, _);
    else if (S === "object")
      throw l = String(o), Error("Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
    return N;
  }
  function Y(o, l, g) {
    if (o == null)
      return o;
    var k = [], _ = 0;
    return le(o, k, "", "", function(S) {
      return l.call(g, S, _++);
    }), k;
  }
  function te(o) {
    if (o._status === -1) {
      var l = o._result;
      l = l(), l.then(function(g) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = g);
      }, function(g) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = g);
      }), o._status === -1 && (o._status = 0, o._result = l);
    }
    if (o._status === 1)
      return o._result.default;
    throw o._result;
  }
  var y = { current: null }, ae = { transition: null }, Ne = { ReactCurrentDispatcher: y, ReactCurrentBatchConfig: ae, ReactCurrentOwner: q };
  return b.Children = { map: Y, forEach: function(o, l, g) {
    Y(o, function() {
      l.apply(this, arguments);
    }, g);
  }, count: function(o) {
    var l = 0;
    return Y(o, function() {
      l++;
    }), l;
  }, toArray: function(o) {
    return Y(o, function(l) {
      return l;
    }) || [];
  }, only: function(o) {
    if (!ge(o))
      throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } }, b.Component = X, b.Fragment = t, b.Profiler = u, b.PureComponent = ue, b.StrictMode = s, b.Suspense = I, b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ne, b.cloneElement = function(o, l, g) {
    if (o == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var k = ie({}, o.props), _ = o.key, S = o.ref, N = o._owner;
    if (l != null) {
      if (l.ref !== void 0 && (S = l.ref, N = q.current), l.key !== void 0 && (_ = "" + l.key), o.type && o.type.defaultProps)
        var O = o.type.defaultProps;
      for (T in l)
        D.call(l, T) && !ee.hasOwnProperty(T) && (k[T] = l[T] === void 0 && O !== void 0 ? O[T] : l[T]);
    }
    var T = arguments.length - 2;
    if (T === 1)
      k.children = g;
    else if (1 < T) {
      O = Array(T);
      for (var $ = 0; $ < T; $++)
        O[$] = arguments[$ + 2];
      k.children = O;
    }
    return { $$typeof: n, type: o.type, key: _, ref: S, props: k, _owner: N };
  }, b.createContext = function(o) {
    return o = { $$typeof: v, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: h, _context: o }, o.Consumer = o;
  }, b.createElement = oe, b.createFactory = function(o) {
    var l = oe.bind(null, o);
    return l.type = o, l;
  }, b.createRef = function() {
    return { current: null };
  }, b.forwardRef = function(o) {
    return { $$typeof: R, render: o };
  }, b.isValidElement = ge, b.lazy = function(o) {
    return { $$typeof: V, _payload: { _status: -1, _result: o }, _init: te };
  }, b.memo = function(o, l) {
    return { $$typeof: j, type: o, compare: l === void 0 ? null : l };
  }, b.startTransition = function(o) {
    var l = ae.transition;
    ae.transition = {};
    try {
      o();
    } finally {
      ae.transition = l;
    }
  }, b.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, b.useCallback = function(o, l) {
    return y.current.useCallback(o, l);
  }, b.useContext = function(o) {
    return y.current.useContext(o);
  }, b.useDebugValue = function() {
  }, b.useDeferredValue = function(o) {
    return y.current.useDeferredValue(o);
  }, b.useEffect = function(o, l) {
    return y.current.useEffect(o, l);
  }, b.useId = function() {
    return y.current.useId();
  }, b.useImperativeHandle = function(o, l, g) {
    return y.current.useImperativeHandle(o, l, g);
  }, b.useInsertionEffect = function(o, l) {
    return y.current.useInsertionEffect(o, l);
  }, b.useLayoutEffect = function(o, l) {
    return y.current.useLayoutEffect(o, l);
  }, b.useMemo = function(o, l) {
    return y.current.useMemo(o, l);
  }, b.useReducer = function(o, l, g) {
    return y.current.useReducer(o, l, g);
  }, b.useRef = function(o) {
    return y.current.useRef(o);
  }, b.useState = function(o) {
    return y.current.useState(o);
  }, b.useSyncExternalStore = function(o, l, g) {
    return y.current.useSyncExternalStore(o, l, g);
  }, b.useTransition = function() {
    return y.current.useTransition();
  }, b.version = "18.2.0", b;
}
var Se = {}, Vn = {
  get exports() {
    return Se;
  },
  set exports(n) {
    Se = n;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function Un() {
  return sr || (sr = 1, function(n, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.2.0", s = Symbol.for("react.element"), u = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), j = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), X = Symbol.iterator, Ae = "@@iterator";
      function ue(r) {
        if (r === null || typeof r != "object")
          return null;
        var i = X && r[X] || r[Ae];
        return typeof i == "function" ? i : null;
      }
      var fe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Q = {
        transition: null
      }, D = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, q = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ee = {}, oe = null;
      function Pe(r) {
        oe = r;
      }
      ee.setExtraStackFrame = function(r) {
        oe = r;
      }, ee.getCurrentStack = null, ee.getStackAddendum = function() {
        var r = "";
        oe && (r += oe);
        var i = ee.getCurrentStack;
        return i && (r += i() || ""), r;
      };
      var ge = !1, Qe = !1, xe = !1, be = !1, le = !1, Y = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: Q,
        ReactCurrentOwner: q
      };
      Y.ReactDebugCurrentFrame = ee, Y.ReactCurrentActQueue = D;
      function te(r) {
        {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
            a[c - 1] = arguments[c];
          ae("warn", r, a);
        }
      }
      function y(r) {
        {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
            a[c - 1] = arguments[c];
          ae("error", r, a);
        }
      }
      function ae(r, i, a) {
        {
          var c = Y.ReactDebugCurrentFrame, f = c.getStackAddendum();
          f !== "" && (i += "%s", a = a.concat([f]));
          var d = a.map(function(p) {
            return String(p);
          });
          d.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, d);
        }
      }
      var Ne = {};
      function o(r, i) {
        {
          var a = r.constructor, c = a && (a.displayName || a.name) || "ReactClass", f = c + "." + i;
          if (Ne[f])
            return;
          y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, c), Ne[f] = !0;
        }
      }
      var l = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(r) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(r, i, a) {
          o(r, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(r, i, a, c) {
          o(r, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(r, i, a, c) {
          o(r, "setState");
        }
      }, g = Object.assign, k = {};
      Object.freeze(k);
      function _(r, i, a) {
        this.props = r, this.context = i, this.refs = k, this.updater = a || l;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(r, i) {
        if (typeof r != "object" && typeof r != "function" && r != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, i, "setState");
      }, _.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate");
      };
      {
        var S = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, N = function(r, i) {
          Object.defineProperty(_.prototype, r, {
            get: function() {
              te("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
            }
          });
        };
        for (var O in S)
          S.hasOwnProperty(O) && N(O, S[O]);
      }
      function T() {
      }
      T.prototype = _.prototype;
      function $(r, i, a) {
        this.props = r, this.context = i, this.refs = k, this.updater = a || l;
      }
      var Ze = $.prototype = new T();
      Ze.constructor = $, g(Ze, _.prototype), Ze.isPureReactComponent = !0;
      function Tr() {
        var r = {
          current: null
        };
        return Object.seal(r), r;
      }
      var Ar = Array.isArray;
      function Le(r) {
        return Ar(r);
      }
      function Pr(r) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, a = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
          return a;
        }
      }
      function xr(r) {
        try {
          return _t(r), !1;
        } catch {
          return !0;
        }
      }
      function _t(r) {
        return "" + r;
      }
      function Be(r) {
        if (xr(r))
          return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pr(r)), _t(r);
      }
      function Nr(r, i, a) {
        var c = r.displayName;
        if (c)
          return c;
        var f = i.displayName || i.name || "";
        return f !== "" ? a + "(" + f + ")" : a;
      }
      function Et(r) {
        return r.displayName || "Context";
      }
      function re(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case h:
            return "Fragment";
          case u:
            return "Portal";
          case R:
            return "Profiler";
          case v:
            return "StrictMode";
          case U:
            return "Suspense";
          case W:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case j:
              var i = r;
              return Et(i) + ".Consumer";
            case I:
              var a = r;
              return Et(a._context) + ".Provider";
            case V:
              return Nr(r, r.render, "ForwardRef");
            case J:
              var c = r.displayName || null;
              return c !== null ? c : re(r.type) || "Memo";
            case ie: {
              var f = r, d = f._payload, p = f._init;
              try {
                return re(p(d));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var _e = Object.prototype.hasOwnProperty, wt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rt, kt, et;
      et = {};
      function Ct(r) {
        if (_e.call(r, "ref")) {
          var i = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function St(r) {
        if (_e.call(r, "key")) {
          var i = Object.getOwnPropertyDescriptor(r, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function Lr(r, i) {
        var a = function() {
          Rt || (Rt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: a,
          configurable: !0
        });
      }
      function Br(r, i) {
        var a = function() {
          kt || (kt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: a,
          configurable: !0
        });
      }
      function Ir(r) {
        if (typeof r.ref == "string" && q.current && r.__self && q.current.stateNode !== r.__self) {
          var i = re(q.current.type);
          et[i] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, r.ref), et[i] = !0);
        }
      }
      var tt = function(r, i, a, c, f, d, p) {
        var m = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: s,
          // Built-in properties that belong on the element
          type: r,
          key: i,
          ref: a,
          props: p,
          // Record the component responsible for creating this element.
          _owner: d
        };
        return m._store = {}, Object.defineProperty(m._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(m, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.defineProperty(m, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: f
        }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
      };
      function Dr(r, i, a) {
        var c, f = {}, d = null, p = null, m = null, E = null;
        if (i != null) {
          Ct(i) && (p = i.ref, Ir(i)), St(i) && (Be(i.key), d = "" + i.key), m = i.__self === void 0 ? null : i.__self, E = i.__source === void 0 ? null : i.__source;
          for (c in i)
            _e.call(i, c) && !wt.hasOwnProperty(c) && (f[c] = i[c]);
        }
        var C = arguments.length - 2;
        if (C === 1)
          f.children = a;
        else if (C > 1) {
          for (var A = Array(C), P = 0; P < C; P++)
            A[P] = arguments[P + 2];
          Object.freeze && Object.freeze(A), f.children = A;
        }
        if (r && r.defaultProps) {
          var x = r.defaultProps;
          for (c in x)
            f[c] === void 0 && (f[c] = x[c]);
        }
        if (d || p) {
          var L = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          d && Lr(f, L), p && Br(f, L);
        }
        return tt(r, d, p, m, E, q.current, f);
      }
      function Fr(r, i) {
        var a = tt(r.type, i, r.ref, r._self, r._source, r._owner, r.props);
        return a;
      }
      function $r(r, i, a) {
        if (r == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
        var c, f = g({}, r.props), d = r.key, p = r.ref, m = r._self, E = r._source, C = r._owner;
        if (i != null) {
          Ct(i) && (p = i.ref, C = q.current), St(i) && (Be(i.key), d = "" + i.key);
          var A;
          r.type && r.type.defaultProps && (A = r.type.defaultProps);
          for (c in i)
            _e.call(i, c) && !wt.hasOwnProperty(c) && (i[c] === void 0 && A !== void 0 ? f[c] = A[c] : f[c] = i[c]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          f.children = a;
        else if (P > 1) {
          for (var x = Array(P), L = 0; L < P; L++)
            x[L] = arguments[L + 2];
          f.children = x;
        }
        return tt(r.type, d, p, m, E, C, f);
      }
      function he(r) {
        return typeof r == "object" && r !== null && r.$$typeof === s;
      }
      var Ot = ".", Mr = ":";
      function jr(r) {
        var i = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, c = r.replace(i, function(f) {
          return a[f];
        });
        return "$" + c;
      }
      var Tt = !1, Vr = /\/+/g;
      function At(r) {
        return r.replace(Vr, "$&/");
      }
      function rt(r, i) {
        return typeof r == "object" && r !== null && r.key != null ? (Be(r.key), jr("" + r.key)) : i.toString(36);
      }
      function Ie(r, i, a, c, f) {
        var d = typeof r;
        (d === "undefined" || d === "boolean") && (r = null);
        var p = !1;
        if (r === null)
          p = !0;
        else
          switch (d) {
            case "string":
            case "number":
              p = !0;
              break;
            case "object":
              switch (r.$$typeof) {
                case s:
                case u:
                  p = !0;
              }
          }
        if (p) {
          var m = r, E = f(m), C = c === "" ? Ot + rt(m, 0) : c;
          if (Le(E)) {
            var A = "";
            C != null && (A = At(C) + "/"), Ie(E, i, A, "", function(In) {
              return In;
            });
          } else
            E != null && (he(E) && (E.key && (!m || m.key !== E.key) && Be(E.key), E = Fr(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!m || m.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                At("" + E.key) + "/"
              ) : "") + C
            )), i.push(E));
          return 1;
        }
        var P, x, L = 0, F = c === "" ? Ot : c + Mr;
        if (Le(r))
          for (var qe = 0; qe < r.length; qe++)
            P = r[qe], x = F + rt(P, qe), L += Ie(P, i, a, x, f);
        else {
          var lt = ue(r);
          if (typeof lt == "function") {
            var Zt = r;
            lt === Zt.entries && (Tt || te("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tt = !0);
            for (var Ln = lt.call(Zt), er, Bn = 0; !(er = Ln.next()).done; )
              P = er.value, x = F + rt(P, Bn++), L += Ie(P, i, a, x, f);
          } else if (d === "object") {
            var tr = String(r);
            throw new Error("Objects are not valid as a React child (found: " + (tr === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : tr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return L;
      }
      function De(r, i, a) {
        if (r == null)
          return r;
        var c = [], f = 0;
        return Ie(r, c, "", "", function(d) {
          return i.call(a, d, f++);
        }), c;
      }
      function Ur(r) {
        var i = 0;
        return De(r, function() {
          i++;
        }), i;
      }
      function qr(r, i, a) {
        De(r, function() {
          i.apply(this, arguments);
        }, a);
      }
      function Wr(r) {
        return De(r, function(i) {
          return i;
        }) || [];
      }
      function Yr(r) {
        if (!he(r))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return r;
      }
      function zr(r) {
        var i = {
          $$typeof: j,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: r,
          _currentValue2: r,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        i.Provider = {
          $$typeof: I,
          _context: i
        };
        var a = !1, c = !1, f = !1;
        {
          var d = {
            $$typeof: j,
            _context: i
          };
          Object.defineProperties(d, {
            Provider: {
              get: function() {
                return c || (c = !0, y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
              },
              set: function(p) {
                i.Provider = p;
              }
            },
            _currentValue: {
              get: function() {
                return i._currentValue;
              },
              set: function(p) {
                i._currentValue = p;
              }
            },
            _currentValue2: {
              get: function() {
                return i._currentValue2;
              },
              set: function(p) {
                i._currentValue2 = p;
              }
            },
            _threadCount: {
              get: function() {
                return i._threadCount;
              },
              set: function(p) {
                i._threadCount = p;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), i.Consumer;
              }
            },
            displayName: {
              get: function() {
                return i.displayName;
              },
              set: function(p) {
                f || (te("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", p), f = !0);
              }
            }
          }), i.Consumer = d;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var Ee = -1, nt = 0, Pt = 1, Hr = 2;
      function Kr(r) {
        if (r._status === Ee) {
          var i = r._result, a = i();
          if (a.then(function(d) {
            if (r._status === nt || r._status === Ee) {
              var p = r;
              p._status = Pt, p._result = d;
            }
          }, function(d) {
            if (r._status === nt || r._status === Ee) {
              var p = r;
              p._status = Hr, p._result = d;
            }
          }), r._status === Ee) {
            var c = r;
            c._status = nt, c._result = a;
          }
        }
        if (r._status === Pt) {
          var f = r._result;
          return f === void 0 && y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, f), "default" in f || y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, f), f.default;
        } else
          throw r._result;
      }
      function Gr(r) {
        var i = {
          // We use these fields to store the result.
          _status: Ee,
          _result: r
        }, a = {
          $$typeof: ie,
          _payload: i,
          _init: Kr
        };
        {
          var c, f;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(d) {
                y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = d, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return f;
              },
              set: function(d) {
                y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), f = d, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Jr(r) {
        r != null && r.$$typeof === J ? y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof r != "function" ? y("forwardRef requires a render function but was given %s.", r === null ? "null" : typeof r) : r.length !== 0 && r.length !== 2 && y("forwardRef render functions accept exactly two parameters: props and ref. %s", r.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), r != null && (r.defaultProps != null || r.propTypes != null) && y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var i = {
          $$typeof: V,
          render: r
        };
        {
          var a;
          Object.defineProperty(i, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(c) {
              a = c, !r.name && !r.displayName && (r.displayName = c);
            }
          });
        }
        return i;
      }
      var xt;
      xt = Symbol.for("react.module.reference");
      function Nt(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === h || r === R || le || r === v || r === U || r === W || be || r === Te || ge || Qe || xe || typeof r == "object" && r !== null && (r.$$typeof === ie || r.$$typeof === J || r.$$typeof === I || r.$$typeof === j || r.$$typeof === V || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        r.$$typeof === xt || r.getModuleId !== void 0));
      }
      function Xr(r, i) {
        Nt(r) || y("memo: The first argument must be a component. Instead received: %s", r === null ? "null" : typeof r);
        var a = {
          $$typeof: J,
          type: r,
          compare: i === void 0 ? null : i
        };
        {
          var c;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return c;
            },
            set: function(f) {
              c = f, !r.name && !r.displayName && (r.displayName = f);
            }
          });
        }
        return a;
      }
      function M() {
        var r = fe.current;
        return r === null && y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), r;
      }
      function Qr(r) {
        var i = M();
        if (r._context !== void 0) {
          var a = r._context;
          a.Consumer === r ? y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === r && y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(r);
      }
      function Zr(r) {
        var i = M();
        return i.useState(r);
      }
      function en(r, i, a) {
        var c = M();
        return c.useReducer(r, i, a);
      }
      function tn(r) {
        var i = M();
        return i.useRef(r);
      }
      function rn(r, i) {
        var a = M();
        return a.useEffect(r, i);
      }
      function nn(r, i) {
        var a = M();
        return a.useInsertionEffect(r, i);
      }
      function sn(r, i) {
        var a = M();
        return a.useLayoutEffect(r, i);
      }
      function on(r, i) {
        var a = M();
        return a.useCallback(r, i);
      }
      function an(r, i) {
        var a = M();
        return a.useMemo(r, i);
      }
      function cn(r, i, a) {
        var c = M();
        return c.useImperativeHandle(r, i, a);
      }
      function un(r, i) {
        {
          var a = M();
          return a.useDebugValue(r, i);
        }
      }
      function fn() {
        var r = M();
        return r.useTransition();
      }
      function ln(r) {
        var i = M();
        return i.useDeferredValue(r);
      }
      function hn() {
        var r = M();
        return r.useId();
      }
      function pn(r, i, a) {
        var c = M();
        return c.useSyncExternalStore(r, i, a);
      }
      var we = 0, Lt, Bt, It, Dt, Ft, $t, Mt;
      function jt() {
      }
      jt.__reactDisabledLog = !0;
      function dn() {
        {
          if (we === 0) {
            Lt = console.log, Bt = console.info, It = console.warn, Dt = console.error, Ft = console.group, $t = console.groupCollapsed, Mt = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: jt,
              writable: !0
            };
            Object.defineProperties(console, {
              info: r,
              log: r,
              warn: r,
              error: r,
              group: r,
              groupCollapsed: r,
              groupEnd: r
            });
          }
          we++;
        }
      }
      function yn() {
        {
          if (we--, we === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: g({}, r, {
                value: Lt
              }),
              info: g({}, r, {
                value: Bt
              }),
              warn: g({}, r, {
                value: It
              }),
              error: g({}, r, {
                value: Dt
              }),
              group: g({}, r, {
                value: Ft
              }),
              groupCollapsed: g({}, r, {
                value: $t
              }),
              groupEnd: g({}, r, {
                value: Mt
              })
            });
          }
          we < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var st = Y.ReactCurrentDispatcher, it;
      function Fe(r, i, a) {
        {
          if (it === void 0)
            try {
              throw Error();
            } catch (f) {
              var c = f.stack.trim().match(/\n( *(at )?)/);
              it = c && c[1] || "";
            }
          return `
` + it + r;
        }
      }
      var ot = !1, $e;
      {
        var mn = typeof WeakMap == "function" ? WeakMap : Map;
        $e = new mn();
      }
      function Vt(r, i) {
        if (!r || ot)
          return "";
        {
          var a = $e.get(r);
          if (a !== void 0)
            return a;
        }
        var c;
        ot = !0;
        var f = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var d;
        d = st.current, st.current = null, dn();
        try {
          if (i) {
            var p = function() {
              throw Error();
            };
            if (Object.defineProperty(p.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(p, []);
              } catch (F) {
                c = F;
              }
              Reflect.construct(r, [], p);
            } else {
              try {
                p.call();
              } catch (F) {
                c = F;
              }
              r.call(p.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (F) {
              c = F;
            }
            r();
          }
        } catch (F) {
          if (F && c && typeof F.stack == "string") {
            for (var m = F.stack.split(`
`), E = c.stack.split(`
`), C = m.length - 1, A = E.length - 1; C >= 1 && A >= 0 && m[C] !== E[A]; )
              A--;
            for (; C >= 1 && A >= 0; C--, A--)
              if (m[C] !== E[A]) {
                if (C !== 1 || A !== 1)
                  do
                    if (C--, A--, A < 0 || m[C] !== E[A]) {
                      var P = `
` + m[C].replace(" at new ", " at ");
                      return r.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", r.displayName)), typeof r == "function" && $e.set(r, P), P;
                    }
                  while (C >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          ot = !1, st.current = d, yn(), Error.prepareStackTrace = f;
        }
        var x = r ? r.displayName || r.name : "", L = x ? Fe(x) : "";
        return typeof r == "function" && $e.set(r, L), L;
      }
      function vn(r, i, a) {
        return Vt(r, !1);
      }
      function gn(r) {
        var i = r.prototype;
        return !!(i && i.isReactComponent);
      }
      function Me(r, i, a) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return Vt(r, gn(r));
        if (typeof r == "string")
          return Fe(r);
        switch (r) {
          case U:
            return Fe("Suspense");
          case W:
            return Fe("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case V:
              return vn(r.render);
            case J:
              return Me(r.type, i, a);
            case ie: {
              var c = r, f = c._payload, d = c._init;
              try {
                return Me(d(f), i, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Ut = {}, qt = Y.ReactDebugCurrentFrame;
      function je(r) {
        if (r) {
          var i = r._owner, a = Me(r.type, r._source, i ? i.type : null);
          qt.setExtraStackFrame(a);
        } else
          qt.setExtraStackFrame(null);
      }
      function bn(r, i, a, c, f) {
        {
          var d = Function.call.bind(_e);
          for (var p in r)
            if (d(r, p)) {
              var m = void 0;
              try {
                if (typeof r[p] != "function") {
                  var E = Error((c || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                m = r[p](i, p, c, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (C) {
                m = C;
              }
              m && !(m instanceof Error) && (je(f), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", a, p, typeof m), je(null)), m instanceof Error && !(m.message in Ut) && (Ut[m.message] = !0, je(f), y("Failed %s type: %s", a, m.message), je(null));
            }
        }
      }
      function pe(r) {
        if (r) {
          var i = r._owner, a = Me(r.type, r._source, i ? i.type : null);
          Pe(a);
        } else
          Pe(null);
      }
      var at;
      at = !1;
      function Wt() {
        if (q.current) {
          var r = re(q.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
      function _n(r) {
        if (r !== void 0) {
          var i = r.fileName.replace(/^.*[\\\/]/, ""), a = r.lineNumber;
          return `

Check your code at ` + i + ":" + a + ".";
        }
        return "";
      }
      function En(r) {
        return r != null ? _n(r.__source) : "";
      }
      var Yt = {};
      function wn(r) {
        var i = Wt();
        if (!i) {
          var a = typeof r == "string" ? r : r.displayName || r.name;
          a && (i = `

Check the top-level render call using <` + a + ">.");
        }
        return i;
      }
      function zt(r, i) {
        if (!(!r._store || r._store.validated || r.key != null)) {
          r._store.validated = !0;
          var a = wn(i);
          if (!Yt[a]) {
            Yt[a] = !0;
            var c = "";
            r && r._owner && r._owner !== q.current && (c = " It was passed a child from " + re(r._owner.type) + "."), pe(r), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, c), pe(null);
          }
        }
      }
      function Ht(r, i) {
        if (typeof r == "object") {
          if (Le(r))
            for (var a = 0; a < r.length; a++) {
              var c = r[a];
              he(c) && zt(c, i);
            }
          else if (he(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var f = ue(r);
            if (typeof f == "function" && f !== r.entries)
              for (var d = f.call(r), p; !(p = d.next()).done; )
                he(p.value) && zt(p.value, i);
          }
        }
      }
      function Kt(r) {
        {
          var i = r.type;
          if (i == null || typeof i == "string")
            return;
          var a;
          if (typeof i == "function")
            a = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === V || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === J))
            a = i.propTypes;
          else
            return;
          if (a) {
            var c = re(i);
            bn(a, r.props, "prop", c, r);
          } else if (i.PropTypes !== void 0 && !at) {
            at = !0;
            var f = re(i);
            y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Rn(r) {
        {
          for (var i = Object.keys(r.props), a = 0; a < i.length; a++) {
            var c = i[a];
            if (c !== "children" && c !== "key") {
              pe(r), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), pe(null);
              break;
            }
          }
          r.ref !== null && (pe(r), y("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
        }
      }
      function Gt(r, i, a) {
        var c = Nt(r);
        if (!c) {
          var f = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = En(i);
          d ? f += d : f += Wt();
          var p;
          r === null ? p = "null" : Le(r) ? p = "array" : r !== void 0 && r.$$typeof === s ? (p = "<" + (re(r.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : p = typeof r, y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, f);
        }
        var m = Dr.apply(this, arguments);
        if (m == null)
          return m;
        if (c)
          for (var E = 2; E < arguments.length; E++)
            Ht(arguments[E], r);
        return r === h ? Rn(m) : Kt(m), m;
      }
      var Jt = !1;
      function kn(r) {
        var i = Gt.bind(null, r);
        return i.type = r, Jt || (Jt = !0, te("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return te("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: r
            }), r;
          }
        }), i;
      }
      function Cn(r, i, a) {
        for (var c = $r.apply(this, arguments), f = 2; f < arguments.length; f++)
          Ht(arguments[f], c.type);
        return Kt(c), c;
      }
      function Sn(r, i) {
        var a = Q.transition;
        Q.transition = {};
        var c = Q.transition;
        Q.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          r();
        } finally {
          if (Q.transition = a, a === null && c._updatedFibers) {
            var f = c._updatedFibers.size;
            f > 10 && te("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
          }
        }
      }
      var Xt = !1, Ve = null;
      function On(r) {
        if (Ve === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), a = n && n[i];
            Ve = a.call(n, "timers").setImmediate;
          } catch {
            Ve = function(f) {
              Xt === !1 && (Xt = !0, typeof MessageChannel > "u" && y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var d = new MessageChannel();
              d.port1.onmessage = f, d.port2.postMessage(void 0);
            };
          }
        return Ve(r);
      }
      var de = 0, Qt = !1;
      function Tn(r) {
        {
          var i = de;
          de++, D.current === null && (D.current = []);
          var a = D.isBatchingLegacy, c;
          try {
            if (D.isBatchingLegacy = !0, c = r(), !a && D.didScheduleLegacyUpdate) {
              var f = D.current;
              f !== null && (D.didScheduleLegacyUpdate = !1, ft(f));
            }
          } catch (x) {
            throw Ue(i), x;
          } finally {
            D.isBatchingLegacy = a;
          }
          if (c !== null && typeof c == "object" && typeof c.then == "function") {
            var d = c, p = !1, m = {
              then: function(x, L) {
                p = !0, d.then(function(F) {
                  Ue(i), de === 0 ? ct(F, x, L) : x(F);
                }, function(F) {
                  Ue(i), L(F);
                });
              }
            };
            return !Qt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              p || (Qt = !0, y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), m;
          } else {
            var E = c;
            if (Ue(i), de === 0) {
              var C = D.current;
              C !== null && (ft(C), D.current = null);
              var A = {
                then: function(x, L) {
                  D.current === null ? (D.current = [], ct(E, x, L)) : x(E);
                }
              };
              return A;
            } else {
              var P = {
                then: function(x, L) {
                  x(E);
                }
              };
              return P;
            }
          }
        }
      }
      function Ue(r) {
        r !== de - 1 && y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), de = r;
      }
      function ct(r, i, a) {
        {
          var c = D.current;
          if (c !== null)
            try {
              ft(c), On(function() {
                c.length === 0 ? (D.current = null, i(r)) : ct(r, i, a);
              });
            } catch (f) {
              a(f);
            }
          else
            i(r);
        }
      }
      var ut = !1;
      function ft(r) {
        if (!ut) {
          ut = !0;
          var i = 0;
          try {
            for (; i < r.length; i++) {
              var a = r[i];
              do
                a = a(!0);
              while (a !== null);
            }
            r.length = 0;
          } catch (c) {
            throw r = r.slice(i + 1), c;
          } finally {
            ut = !1;
          }
        }
      }
      var An = Gt, Pn = Cn, xn = kn, Nn = {
        map: De,
        forEach: qr,
        count: Ur,
        toArray: Wr,
        only: Yr
      };
      e.Children = Nn, e.Component = _, e.Fragment = h, e.Profiler = R, e.PureComponent = $, e.StrictMode = v, e.Suspense = U, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, e.cloneElement = Pn, e.createContext = zr, e.createElement = An, e.createFactory = xn, e.createRef = Tr, e.forwardRef = Jr, e.isValidElement = he, e.lazy = Gr, e.memo = Xr, e.startTransition = Sn, e.unstable_act = Tn, e.useCallback = on, e.useContext = Qr, e.useDebugValue = un, e.useDeferredValue = ln, e.useEffect = rn, e.useId = hn, e.useImperativeHandle = cn, e.useInsertionEffect = nn, e.useLayoutEffect = sn, e.useMemo = an, e.useReducer = en, e.useRef = tn, e.useState = Zr, e.useSyncExternalStore = pn, e.useTransition = fn, e.version = t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Vn, Se)), Se;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = jn() : n.exports = Un();
})(Mn);
const qn = /* @__PURE__ */ $n(Z);
var ye;
class Je {
  static createContext(e) {
    const t = Z.createContext({ data: null });
    return z(this, ye).set(e, { context: t }), t;
  }
  static removeContext(e) {
    z(this, ye).delete(e);
  }
  static getContextById(e) {
    return z(this, ye).get(e);
  }
}
ye = new WeakMap(), Re(Je, ye, /* @__PURE__ */ new Map());
const G = /* @__PURE__ */ Object.create(null);
G.open = "0";
G.close = "1";
G.ping = "2";
G.pong = "3";
G.message = "4";
G.upgrade = "5";
G.noop = "6";
const He = /* @__PURE__ */ Object.create(null);
Object.keys(G).forEach((n) => {
  He[G[n]] = n;
});
const Wn = { type: "error", data: "parser error" }, Yn = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", zn = typeof ArrayBuffer == "function", Hn = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer, pr = ({ type: n, data: e }, t, s) => Yn && e instanceof Blob ? t ? s(e) : ir(e, s) : zn && (e instanceof ArrayBuffer || Hn(e)) ? t ? s(e) : ir(new Blob([e]), s) : s(G[n] + (e || "")), ir = (n, e) => {
  const t = new FileReader();
  return t.onload = function() {
    const s = t.result.split(",")[1];
    e("b" + s);
  }, t.readAsDataURL(n);
}, or = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ce = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < or.length; n++)
  Ce[or.charCodeAt(n)] = n;
const Kn = (n) => {
  let e = n.length * 0.75, t = n.length, s, u = 0, h, v, R, I;
  n[n.length - 1] === "=" && (e--, n[n.length - 2] === "=" && e--);
  const j = new ArrayBuffer(e), V = new Uint8Array(j);
  for (s = 0; s < t; s += 4)
    h = Ce[n.charCodeAt(s)], v = Ce[n.charCodeAt(s + 1)], R = Ce[n.charCodeAt(s + 2)], I = Ce[n.charCodeAt(s + 3)], V[u++] = h << 2 | v >> 4, V[u++] = (v & 15) << 4 | R >> 2, V[u++] = (R & 3) << 6 | I & 63;
  return j;
}, Gn = typeof ArrayBuffer == "function", dr = (n, e) => {
  if (typeof n != "string")
    return {
      type: "message",
      data: yr(n, e)
    };
  const t = n.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Jn(n.substring(1), e)
  } : He[t] ? n.length > 1 ? {
    type: He[t],
    data: n.substring(1)
  } : {
    type: He[t]
  } : Wn;
}, Jn = (n, e) => {
  if (Gn) {
    const t = Kn(n);
    return yr(t, e);
  } else
    return { base64: !0, data: n };
}, yr = (n, e) => {
  switch (e) {
    case "blob":
      return n instanceof ArrayBuffer ? new Blob([n]) : n;
    case "arraybuffer":
    default:
      return n;
  }
}, mr = String.fromCharCode(30), Xn = (n, e) => {
  const t = n.length, s = new Array(t);
  let u = 0;
  n.forEach((h, v) => {
    pr(h, !1, (R) => {
      s[v] = R, ++u === t && e(s.join(mr));
    });
  });
}, Qn = (n, e) => {
  const t = n.split(mr), s = [];
  for (let u = 0; u < t.length; u++) {
    const h = dr(t[u], e);
    if (s.push(h), h.type === "error")
      break;
  }
  return s;
}, vr = 4;
function B(n) {
  if (n)
    return Zn(n);
}
function Zn(n) {
  for (var e in B.prototype)
    n[e] = B.prototype[e];
  return n;
}
B.prototype.on = B.prototype.addEventListener = function(n, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(e), this;
};
B.prototype.once = function(n, e) {
  function t() {
    this.off(n, t), e.apply(this, arguments);
  }
  return t.fn = e, this.on(n, t), this;
};
B.prototype.off = B.prototype.removeListener = B.prototype.removeAllListeners = B.prototype.removeEventListener = function(n, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t = this._callbacks["$" + n];
  if (!t)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + n], this;
  for (var s, u = 0; u < t.length; u++)
    if (s = t[u], s === e || s.fn === e) {
      t.splice(u, 1);
      break;
    }
  return t.length === 0 && delete this._callbacks["$" + n], this;
};
B.prototype.emit = function(n) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + n], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  if (t) {
    t = t.slice(0);
    for (var s = 0, u = t.length; s < u; ++s)
      t[s].apply(this, e);
  }
  return this;
};
B.prototype.emitReserved = B.prototype.emit;
B.prototype.listeners = function(n) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [];
};
B.prototype.hasListeners = function(n) {
  return !!this.listeners(n).length;
};
const se = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function gr(n, ...e) {
  return e.reduce((t, s) => (n.hasOwnProperty(s) && (t[s] = n[s]), t), {});
}
const es = setTimeout, ts = clearTimeout;
function Xe(n, e) {
  e.useNativeTimers ? (n.setTimeoutFn = es.bind(se), n.clearTimeoutFn = ts.bind(se)) : (n.setTimeoutFn = setTimeout.bind(se), n.clearTimeoutFn = clearTimeout.bind(se));
}
const rs = 1.33;
function ns(n) {
  return typeof n == "string" ? ss(n) : Math.ceil((n.byteLength || n.size) * rs);
}
function ss(n) {
  let e = 0, t = 0;
  for (let s = 0, u = n.length; s < u; s++)
    e = n.charCodeAt(s), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (s++, t += 4);
  return t;
}
class is extends Error {
  constructor(e, t, s) {
    super(e), this.description = t, this.context = s, this.type = "TransportError";
  }
}
class br extends B {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  constructor(e) {
    super(), this.writable = !1, Xe(this, e), this.opts = e, this.query = e.query, this.readyState = "", this.socket = e.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @api protected
   */
  onError(e, t, s) {
    return super.emitReserved("error", new is(e, t, s)), this;
  }
  /**
   * Opens the transport.
   *
   * @api public
   */
  open() {
    return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this;
  }
  /**
   * Closes the transport.
   *
   * @api public
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api public
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @api protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @api protected
   */
  onData(e) {
    const t = dr(e, this.socket.binaryType);
    this.onPacket(t);
  }
  /**
   * Called with a decoded packet.
   *
   * @api protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @api protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
}
const _r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), pt = 64, os = {};
let ar = 0, Ye = 0, cr;
function ur(n) {
  let e = "";
  do
    e = _r[n % pt] + e, n = Math.floor(n / pt);
  while (n > 0);
  return e;
}
function Er() {
  const n = ur(+new Date());
  return n !== cr ? (ar = 0, cr = n) : n + "." + ur(ar++);
}
for (; Ye < pt; Ye++)
  os[_r[Ye]] = Ye;
function wr(n) {
  let e = "";
  for (let t in n)
    n.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
  return e;
}
function as(n) {
  let e = {}, t = n.split("&");
  for (let s = 0, u = t.length; s < u; s++) {
    let h = t[s].split("=");
    e[decodeURIComponent(h[0])] = decodeURIComponent(h[1]);
  }
  return e;
}
let Rr = !1;
try {
  Rr = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const cs = Rr;
function kr(n) {
  const e = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || cs))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new se[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function us() {
}
const fs = function() {
  return new kr({
    xdomain: !1
  }).responseType != null;
}();
class ls extends br {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const s = location.protocol === "https:";
      let u = location.port;
      u || (u = s ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || u !== e.port, this.xs = e.secure !== s;
    }
    const t = e && e.forceBase64;
    this.supportsBinary = fs && !t;
  }
  /**
   * Transport name.
   */
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */
  pause(e) {
    this.readyState = "pausing";
    const t = () => {
      this.readyState = "paused", e();
    };
    if (this.polling || !this.writable) {
      let s = 0;
      this.polling && (s++, this.once("pollComplete", function() {
        --s || t();
      })), this.writable || (s++, this.once("drain", function() {
        --s || t();
      }));
    } else
      t();
  }
  /**
   * Starts polling cycle.
   *
   * @api public
   */
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */
  onData(e) {
    const t = (s) => {
      if (this.readyState === "opening" && s.type === "open" && this.onOpen(), s.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(s);
    };
    Qn(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @api private
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */
  write(e) {
    this.writable = !1, Xn(e, (t) => {
      this.doWrite(t, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */
  uri() {
    let e = this.query || {};
    const t = this.opts.secure ? "https" : "http";
    let s = "";
    this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = Er()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.opts.port && (t === "https" && Number(this.opts.port) !== 443 || t === "http" && Number(this.opts.port) !== 80) && (s = ":" + this.opts.port);
    const u = wr(e), h = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (h ? "[" + this.opts.hostname + "]" : this.opts.hostname) + s + this.opts.path + (u.length ? "?" + u : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts), new K(this.uri(), e);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @api private
   */
  doWrite(e, t) {
    const s = this.request({
      method: "POST",
      data: e
    });
    s.on("success", t), s.on("error", (u, h) => {
      this.onError("xhr post error", u, h);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @api private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (t, s) => {
      this.onError("xhr poll error", t, s);
    }), this.pollXhr = e;
  }
}
class K extends B {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
  constructor(e, t) {
    super(), Xe(this, t), this.opts = t, this.method = t.method || "GET", this.uri = e, this.async = t.async !== !1, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */
  create() {
    const e = gr(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
    const t = this.xhr = new kr(e);
    try {
      t.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
          for (let s in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(s) && t.setRequestHeader(s, this.opts.extraHeaders[s]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          t.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        t.setRequestHeader("Accept", "*/*");
      } catch {
      }
      "withCredentials" in t && (t.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout), t.onreadystatechange = () => {
        t.readyState === 4 && (t.status === 200 || t.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof t.status == "number" ? t.status : 0);
        }, 0));
      }, t.send(this.data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this.onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = K.requestsCount++, K.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @api private
   */
  onError(e) {
    this.emitReserved("error", e, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @api private
   */
  cleanup(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = us, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete K.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @api private
   */
  onLoad() {
    const e = this.xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @api public
   */
  abort() {
    this.cleanup();
  }
}
K.requestsCount = 0;
K.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", fr);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in se ? "pagehide" : "unload";
    addEventListener(n, fr, !1);
  }
}
function fr() {
  for (let n in K.requests)
    K.requests.hasOwnProperty(n) && K.requests[n].abort();
}
const Cr = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, t) => t(e, 0))(), ze = se.WebSocket || se.MozWebSocket, lr = !0, hs = "arraybuffer", hr = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class ps extends br {
  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  constructor(e) {
    super(e), this.supportsBinary = !e.forceBase64;
  }
  /**
   * Transport name.
   *
   * @api public
   */
  get name() {
    return "websocket";
  }
  /**
   * Opens socket.
   *
   * @api private
   */
  doOpen() {
    if (!this.check())
      return;
    const e = this.uri(), t = this.opts.protocols, s = hr ? {} : gr(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
    try {
      this.ws = lr && !hr ? t ? new ze(e, t) : new ze(e) : new ze(e, t, s);
    } catch (u) {
      return this.emitReserved("error", u);
    }
    this.ws.binaryType = this.socket.binaryType || hs, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @api private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */
  write(e) {
    this.writable = !1;
    for (let t = 0; t < e.length; t++) {
      const s = e[t], u = t === e.length - 1;
      pr(s, this.supportsBinary, (h) => {
        const v = {};
        try {
          lr && this.ws.send(h);
        } catch {
        }
        u && Cr(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  /**
   * Closes socket.
   *
   * @api private
   */
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @api private
   */
  uri() {
    let e = this.query || {};
    const t = this.opts.secure ? "wss" : "ws";
    let s = "";
    this.opts.port && (t === "wss" && Number(this.opts.port) !== 443 || t === "ws" && Number(this.opts.port) !== 80) && (s = ":" + this.opts.port), this.opts.timestampRequests && (e[this.opts.timestampParam] = Er()), this.supportsBinary || (e.b64 = 1);
    const u = wr(e), h = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (h ? "[" + this.opts.hostname + "]" : this.opts.hostname) + s + this.opts.path + (u.length ? "?" + u : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */
  check() {
    return !!ze;
  }
}
const ds = {
  websocket: ps,
  polling: ls
}, ys = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ms = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function dt(n) {
  const e = n, t = n.indexOf("["), s = n.indexOf("]");
  t != -1 && s != -1 && (n = n.substring(0, t) + n.substring(t, s).replace(/:/g, ";") + n.substring(s, n.length));
  let u = ys.exec(n || ""), h = {}, v = 14;
  for (; v--; )
    h[ms[v]] = u[v] || "";
  return t != -1 && s != -1 && (h.source = e, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = !0), h.pathNames = vs(h, h.path), h.queryKey = gs(h, h.query), h;
}
function vs(n, e) {
  const t = /\/{2,9}/g, s = e.replace(t, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && s.splice(0, 1), e.slice(-1) == "/" && s.splice(s.length - 1, 1), s;
}
function gs(n, e) {
  const t = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(s, u, h) {
    u && (t[u] = h);
  }), t;
}
let ce = class extends B {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} opts - options
   * @api public
   */
  constructor(e, t = {}) {
    super(), e && typeof e == "object" && (t = e, e = null), e ? (e = dt(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = dt(t.host).host), Xe(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !0
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + "/", typeof this.opts.query == "string" && (this.opts.query = as(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */
  createTransport(e) {
    const t = Object.assign({}, this.opts.query);
    t.EIO = vr, t.transport = e, this.id && (t.sid = this.id);
    const s = Object.assign({}, this.opts.transportOptions[e], this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new ds[e](s);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @api private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && ce.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      e = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      e = this.transports[0];
    this.readyState = "opening";
    try {
      e = this.createTransport(e);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @api private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (t) => this.onClose("transport close", t));
  }
  /**
   * Probes a transport.
   *
   * @param {String} transport name
   * @api private
   */
  probe(e) {
    let t = this.createTransport(e), s = !1;
    ce.priorWebsocketSuccess = !1;
    const u = () => {
      s || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (U) => {
        if (!s)
          if (U.type === "pong" && U.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            ce.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              s || this.readyState !== "closed" && (V(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const W = new Error("probe error");
            W.transport = t.name, this.emitReserved("upgradeError", W);
          }
      }));
    };
    function h() {
      s || (s = !0, V(), t.close(), t = null);
    }
    const v = (U) => {
      const W = new Error("probe error: " + U);
      W.transport = t.name, h(), this.emitReserved("upgradeError", W);
    };
    function R() {
      v("transport closed");
    }
    function I() {
      v("socket closed");
    }
    function j(U) {
      t && U.name !== t.name && h();
    }
    const V = () => {
      t.removeListener("open", u), t.removeListener("error", v), t.removeListener("close", R), this.off("close", I), this.off("upgrading", j);
    };
    t.once("open", u), t.once("error", v), t.once("close", R), this.once("close", I), this.once("upgrading", j), t.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @api private
   */
  onOpen() {
    if (this.readyState = "open", ce.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
      let e = 0;
      const t = this.upgrades.length;
      for (; e < t; e++)
        this.probe(this.upgrades[e]);
    }
  }
  /**
   * Handles a packet.
   *
   * @api private
   */
  onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const t = new Error("server error");
          t.code = e.data, this.onError(t);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @api private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @api private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @api private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @api private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this.getWritablePackets();
      this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let t = 1;
    for (let s = 0; s < this.writeBuffer.length; s++) {
      const u = this.writeBuffer[s].data;
      if (u && (t += ns(u)), s > 0 && t > this.maxPayload)
        return this.writeBuffer.slice(0, s);
      t += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} message.
   * @param {Function} callback function.
   * @param {Object} options.
   * @return {Socket} for chaining.
   * @api public
   */
  write(e, t, s) {
    return this.sendPacket("message", e, t, s), this;
  }
  send(e, t, s) {
    return this.sendPacket("message", e, t, s), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} callback function.
   * @api private
   */
  sendPacket(e, t, s, u) {
    if (typeof t == "function" && (u = t, t = void 0), typeof s == "function" && (u = s, s = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    s = s || {}, s.compress = s.compress !== !1;
    const h = {
      type: e,
      data: t,
      options: s
    };
    this.emitReserved("packetCreate", h), this.writeBuffer.push(h), u && this.once("flush", u), this.flush();
  }
  /**
   * Closes the connection.
   *
   * @api public
   */
  close() {
    const e = () => {
      this.onClose("forced close"), this.transport.close();
    }, t = () => {
      this.off("upgrade", t), this.off("upgradeError", t), e();
    }, s = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? s() : e();
    }) : this.upgrading ? s() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @api private
   */
  onError(e) {
    ce.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @api private
   */
  onClose(e, t) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} server upgrades
   * @api private
   *
   */
  filterUpgrades(e) {
    const t = [];
    let s = 0;
    const u = e.length;
    for (; s < u; s++)
      ~this.transports.indexOf(e[s]) && t.push(e[s]);
    return t;
  }
};
ce.protocol = vr;
function bs(n, e = "", t) {
  let s = n;
  t = t || typeof location < "u" && location, n == null && (n = t.protocol + "//" + t.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = t.protocol + n : n = t.host + n), /^(https?|wss?):\/\//.test(n) || (typeof t < "u" ? n = t.protocol + "//" + n : n = "https://" + n), s = dt(n)), s.port || (/^(http|ws)$/.test(s.protocol) ? s.port = "80" : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")), s.path = s.path || "/";
  const h = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
  return s.id = s.protocol + "://" + h + ":" + s.port + e, s.href = s.protocol + "://" + h + (t && t.port === s.port ? "" : ":" + s.port), s;
}
const _s = typeof ArrayBuffer == "function", Es = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer, Sr = Object.prototype.toString, ws = typeof Blob == "function" || typeof Blob < "u" && Sr.call(Blob) === "[object BlobConstructor]", Rs = typeof File == "function" || typeof File < "u" && Sr.call(File) === "[object FileConstructor]";
function gt(n) {
  return _s && (n instanceof ArrayBuffer || Es(n)) || ws && n instanceof Blob || Rs && n instanceof File;
}
function Ke(n, e) {
  if (!n || typeof n != "object")
    return !1;
  if (Array.isArray(n)) {
    for (let t = 0, s = n.length; t < s; t++)
      if (Ke(n[t]))
        return !0;
    return !1;
  }
  if (gt(n))
    return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return Ke(n.toJSON(), !0);
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && Ke(n[t]))
      return !0;
  return !1;
}
function ks(n) {
  const e = [], t = n.data, s = n;
  return s.data = yt(t, e), s.attachments = e.length, { packet: s, buffers: e };
}
function yt(n, e) {
  if (!n)
    return n;
  if (gt(n)) {
    const t = { _placeholder: !0, num: e.length };
    return e.push(n), t;
  } else if (Array.isArray(n)) {
    const t = new Array(n.length);
    for (let s = 0; s < n.length; s++)
      t[s] = yt(n[s], e);
    return t;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    const t = {};
    for (const s in n)
      Object.prototype.hasOwnProperty.call(n, s) && (t[s] = yt(n[s], e));
    return t;
  }
  return n;
}
function Cs(n, e) {
  return n.data = mt(n.data, e), n.attachments = void 0, n;
}
function mt(n, e) {
  if (!n)
    return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < e.length)
      return e[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let t = 0; t < n.length; t++)
      n[t] = mt(n[t], e);
  else if (typeof n == "object")
    for (const t in n)
      Object.prototype.hasOwnProperty.call(n, t) && (n[t] = mt(n[t], e));
  return n;
}
const Ss = 5;
var w;
(function(n) {
  n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
})(w || (w = {}));
class Os {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === w.EVENT || e.type === w.ACK) && Ke(e) ? (e.type = e.type === w.EVENT ? w.BINARY_EVENT : w.BINARY_ACK, this.encodeAsBinary(e)) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let t = "" + e.type;
    return (e.type === w.BINARY_EVENT || e.type === w.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const t = ks(e), s = this.encodeAsString(t.packet), u = t.buffers;
    return u.unshift(s), u;
  }
}
class bt extends B {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let t;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      t = this.decodeString(e), t.type === w.BINARY_EVENT || t.type === w.BINARY_ACK ? (this.reconstructor = new Ts(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (gt(e) || e.base64)
      if (this.reconstructor)
        t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let t = 0;
    const s = {
      type: Number(e.charAt(0))
    };
    if (w[s.type] === void 0)
      throw new Error("unknown packet type " + s.type);
    if (s.type === w.BINARY_EVENT || s.type === w.BINARY_ACK) {
      const h = t + 1;
      for (; e.charAt(++t) !== "-" && t != e.length; )
        ;
      const v = e.substring(h, t);
      if (v != Number(v) || e.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      s.attachments = Number(v);
    }
    if (e.charAt(t + 1) === "/") {
      const h = t + 1;
      for (; ++t && !(e.charAt(t) === "," || t === e.length); )
        ;
      s.nsp = e.substring(h, t);
    } else
      s.nsp = "/";
    const u = e.charAt(t + 1);
    if (u !== "" && Number(u) == u) {
      const h = t + 1;
      for (; ++t; ) {
        const v = e.charAt(t);
        if (v == null || Number(v) != v) {
          --t;
          break;
        }
        if (t === e.length)
          break;
      }
      s.id = Number(e.substring(h, t + 1));
    }
    if (e.charAt(++t)) {
      const h = this.tryParse(e.substr(t));
      if (bt.isPayloadValid(s.type, h))
        s.data = h;
      else
        throw new Error("invalid payload");
    }
    return s;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, t) {
    switch (e) {
      case w.CONNECT:
        return typeof t == "object";
      case w.DISCONNECT:
        return t === void 0;
      case w.CONNECT_ERROR:
        return typeof t == "string" || typeof t == "object";
      case w.EVENT:
      case w.BINARY_EVENT:
        return Array.isArray(t) && t.length > 0;
      case w.ACK:
      case w.BINARY_ACK:
        return Array.isArray(t);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && this.reconstructor.finishedReconstruction();
  }
}
class Ts {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const t = Cs(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: bt,
  Encoder: Os,
  get PacketType() {
    return w;
  },
  protocol: Ss
}, Symbol.toStringTag, { value: "Module" }));
function H(n, e, t) {
  return n.on(e, t), function() {
    n.off(e, t);
  };
}
const Ps = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Or extends B {
  /**
   * `Socket` constructor.
   */
  constructor(e, t, s) {
    super(), this.connected = !1, this.receiveBuffer = [], this.sendBuffer = [], this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, s && s.auth && (this.auth = s.auth), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      H(e, "open", this.onopen.bind(this)),
      H(e, "packet", this.onpacket.bind(this)),
      H(e, "error", this.onerror.bind(this)),
      H(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...t) {
    if (Ps.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    t.unshift(e);
    const s = {
      type: w.EVENT,
      data: t
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const v = this.ids++, R = t.pop();
      this._registerAckCallback(v, R), s.id = v;
    }
    const u = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!u || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, t) {
    const s = this.flags.timeout;
    if (s === void 0) {
      this.acks[e] = t;
      return;
    }
    const u = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let h = 0; h < this.sendBuffer.length; h++)
        this.sendBuffer[h].id === e && this.sendBuffer.splice(h, 1);
      t.call(this, new Error("operation has timed out"));
    }, s);
    this.acks[e] = (...h) => {
      this.io.clearTimeoutFn(u), t.apply(this, [null, ...h]);
    };
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this.packet({ type: w.CONNECT, data: e });
    }) : this.packet({ type: w.CONNECT, data: this.auth });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, t) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case w.CONNECT:
          if (e.data && e.data.sid) {
            const u = e.data.sid;
            this.onconnect(u);
          } else
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case w.EVENT:
        case w.BINARY_EVENT:
          this.onevent(e);
          break;
        case w.ACK:
        case w.BINARY_ACK:
          this.onack(e);
          break;
        case w.DISCONNECT:
          this.ondisconnect();
          break;
        case w.CONNECT_ERROR:
          this.destroy();
          const s = new Error(e.data.message);
          s.data = e.data.data, this.emitReserved("connect_error", s);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const t = e.data || [];
    e.id != null && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const t = this._anyListeners.slice();
      for (const s of t)
        s.apply(this, e);
    }
    super.emit.apply(this, e);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const t = this;
    let s = !1;
    return function(...u) {
      s || (s = !0, t.packet({
        type: w.ACK,
        id: e,
        data: u
      }));
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const t = this.acks[e.id];
    typeof t == "function" && (t.apply(this, e.data), delete this.acks[e.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e) {
    this.id = e, this.connected = !0, this.emitBuffered(), this.emitReserved("connect");
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: w.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const t = this._anyListeners;
      for (let s = 0; s < t.length; s++)
        if (e === t[s])
          return t.splice(s, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const t = this._anyOutgoingListeners;
      for (let s = 0; s < t.length; s++)
        if (e === t[s])
          return t.splice(s, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const t = this._anyOutgoingListeners.slice();
      for (const s of t)
        s.apply(this, e.data);
    }
  }
}
function ve(n) {
  n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0;
}
ve.prototype.duration = function() {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), t = Math.floor(e * this.jitter * n);
    n = Math.floor(e * 10) & 1 ? n + t : n - t;
  }
  return Math.min(n, this.max) | 0;
};
ve.prototype.reset = function() {
  this.attempts = 0;
};
ve.prototype.setMin = function(n) {
  this.ms = n;
};
ve.prototype.setMax = function(n) {
  this.max = n;
};
ve.prototype.setJitter = function(n) {
  this.jitter = n;
};
class vt extends B {
  constructor(e, t) {
    var s;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Xe(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((s = t.randomizationFactor) !== null && s !== void 0 ? s : 0.5), this.backoff = new ve({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
    const u = t.parser || As;
    this.encoder = new u.Encoder(), this.decoder = new u.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var t;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (t = this.backoff) === null || t === void 0 || t.setMin(e), this);
  }
  randomizationFactor(e) {
    var t;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (t = this.backoff) === null || t === void 0 || t.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var t;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (t = this.backoff) === null || t === void 0 || t.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new ce(this.uri, this.opts);
    const t = this.engine, s = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const u = H(t, "open", function() {
      s.onopen(), e && e();
    }), h = H(t, "error", (v) => {
      s.cleanup(), s._readyState = "closed", this.emitReserved("error", v), e ? e(v) : s.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const v = this._timeout;
      v === 0 && u();
      const R = this.setTimeoutFn(() => {
        u(), t.close(), t.emit("error", new Error("timeout"));
      }, v);
      this.opts.autoUnref && R.unref(), this.subs.push(function() {
        clearTimeout(R);
      });
    }
    return this.subs.push(u), this.subs.push(h), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(H(e, "ping", this.onping.bind(this)), H(e, "data", this.ondata.bind(this)), H(e, "error", this.onerror.bind(this)), H(e, "close", this.onclose.bind(this)), H(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (t) {
      this.onclose("parse error", t);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    Cr(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, t) {
    let s = this.nsps[e];
    return s || (s = new Or(this, e, t), this.nsps[e] = s), s;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const t = Object.keys(this.nsps);
    for (const s of t)
      if (this.nsps[s].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const t = this.encoder.encode(e);
    for (let s = 0; s < t.length; s++)
      this.engine.write(t[s], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(e, t) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const t = this.backoff.duration();
      this._reconnecting = !0;
      const s = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((u) => {
          u ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", u)) : e.onreconnect();
        }));
      }, t);
      this.opts.autoUnref && s.unref(), this.subs.push(function() {
        clearTimeout(s);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const ke = {};
function Ge(n, e) {
  typeof n == "object" && (e = n, n = void 0), e = e || {};
  const t = bs(n, e.path || "/socket.io"), s = t.source, u = t.id, h = t.path, v = ke[u] && h in ke[u].nsps, R = e.forceNew || e["force new connection"] || e.multiplex === !1 || v;
  let I;
  return R ? I = new vt(s, e) : (ke[u] || (ke[u] = new vt(s, e)), I = ke[u]), t.query && !e.query && (e.query = t.queryKey), I.socket(t.path, e);
}
Object.assign(Ge, {
  Manager: vt,
  Socket: Or,
  io: Ge,
  connect: Ge
});
var ne, me, Oe;
class xs {
  constructor({ url: e }) {
    ht(this, "socket");
    Re(this, ne, /* @__PURE__ */ new Set());
    Re(this, me, () => {
    });
    Re(this, Oe, (e) => {
      e.forEach((t) => this.socket.on(t, (s) => {
        var u;
        return (u = z(this, me)) == null ? void 0 : u.call(this, t, s);
      }));
    });
    ht(this, "sentEvent", (e, t) => {
      this.socket.emit(e, t);
    });
    this.socket = Ge(e);
  }
  onEventResponse({ events: e, cb: t }) {
    We(this, me, t), We(this, ne, new Set(e)), z(this, Oe).call(this, z(this, ne));
  }
  updateEvents(e) {
    const t = e.filter(
      (s) => !z(this, ne).has(s)
    );
    t.length !== 0 && (We(this, ne, /* @__PURE__ */ new Set([...Array.from(z(this, ne)), ...t])), z(this, Oe).call(this, t));
  }
  removeEvents(e) {
    e.forEach((t) => this.socket.off(t, z(this, me)));
  }
  getSocket() {
    return this.socket;
  }
}
ne = new WeakMap(), me = new WeakMap(), Oe = new WeakMap();
function Ns({ url: n, socketContextId: e, incomingEvents: t, children: s }) {
  const [u, h] = Z.useState(null), v = Z.useMemo(
    () => Je.createContext(e),
    []
  ), { current: R } = Z.useRef(new xs({ url: n }));
  return Z.useEffect(() => () => {
    Je.removeContext(e), R.socket.disconnect();
  }, []), Z.useMemo(() => {
    R.onEventResponse({
      cb: (I, j) => {
        h({ name: I, response: j });
      },
      events: t
    });
  }, []), /* @__PURE__ */ qn.createElement(
    v.Provider,
    {
      value: {
        data: u,
        socket: R.getSocket(),
        sentEvent: R.sentEvent,
        subscribeEvents: R.updateEvents,
        unsubscribeEvents: R.removeEvents
      }
    },
    s
  );
}
const Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ns
}, Symbol.toStringTag, { value: "Module" }));
function Ls(n) {
  const e = Je.getContextById(n);
  if (!e)
    throw new Error("Socket context not found");
  return (e == null ? void 0 : e.context) || {};
}
const Fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" }));
export {
  Fs as getSocketContext,
  Ds as useSocket
};
