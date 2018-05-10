!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 78));
})([
  function(t, e, n) {
    'use strict';
    (function(t) {
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(1),
        i = n(2),
        o = n(3);
      e.root =
        ('object' == typeof self && self.self === self && self) ||
        ('object' == typeof t && t.global === t && t) ||
        this;
      var a = e.root.angular || {};
      function s(t, e) {
        return -1 !== t.indexOf(e);
      }
      function u(t, e) {
        var n = t.indexOf(e);
        return n >= 0 && t.splice(n, 1), t;
      }
      function c(t, e) {
        return t.push(e), e;
      }
      function l(t, e) {
        var n = {};
        for (var r in t) -1 !== e.indexOf(r) && (n[r] = t[r]);
        return n;
      }
      function f(t, n, i) {
        return (
          (i = i || (r.isArray(t) ? [] : {})),
          e.forEach(t, function(t, e) {
            return (i[e] = n(t, e));
          }),
          i
        );
      }
      function h(t, e) {
        return t.push(e), t;
      }
      function p(t, e) {
        return (
          void 0 === e && (e = 'assert failure'),
          function(n) {
            var i = t(n);
            if (!i) throw new Error(r.isFunction(e) ? e(n) : e);
            return i;
          }
        );
      }
      function d() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (0 === t.length) return [];
        for (
          var n = t.reduce(function(t, e) {
              return Math.min(e.length, t);
            }, 9007199254740991),
            r = [],
            i = function(e) {
              switch (t.length) {
                case 1:
                  r.push([t[0][e]]);
                  break;
                case 2:
                  r.push([t[0][e], t[1][e]]);
                  break;
                case 3:
                  r.push([t[0][e], t[1][e], t[2][e]]);
                  break;
                case 4:
                  r.push([t[0][e], t[1][e], t[2][e], t[3][e]]);
                  break;
                default:
                  r.push(
                    t.map(function(t) {
                      return t[e];
                    })
                  );
              }
            },
            o = 0;
          o < n;
          o++
        )
          i(o);
        return r;
      }
      function v(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          if (n) for (var r = Object.keys(n), i = 0; i < r.length; i++) t[r[i]] = n[r[i]];
        }
        return t;
      }
      function $(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t != t && e != e) return !0;
        var n = typeof t;
        if (n !== typeof e || 'object' !== n) return !1;
        var o,
          a,
          s = [t, e];
        if (i.all(r.isArray)(s))
          return (
            (a = e),
            (o = t).length === a.length &&
              d(o, a).reduce(function(t, e) {
                return t && $(e[0], e[1]);
              }, !0)
          );
        if (i.all(r.isDate)(s)) return t.getTime() === e.getTime();
        if (i.all(r.isRegExp)(s)) return t.toString() === e.toString();
        if (i.all(r.isFunction)(s)) return !0;
        if (
          [r.isFunction, r.isArray, r.isDate, r.isRegExp].map(i.any).reduce(function(t, e) {
            return t || !!e(s);
          }, !1)
        )
          return !1;
        var u = {};
        for (var c in t) {
          if (!$(t[c], e[c])) return !1;
          u[c] = !0;
        }
        for (var c in e) if (!u[c]) return !1;
        return !0;
      }
      (e.fromJson = a.fromJson || JSON.parse.bind(JSON)),
        (e.toJson = a.toJson || JSON.stringify.bind(JSON)),
        (e.forEach =
          a.forEach ||
          function(t, e, n) {
            if (r.isArray(t)) return t.forEach(e, n);
            Object.keys(t).forEach(function(n) {
              return e(t[n], n);
            });
          }),
        (e.extend = Object.assign || v),
        (e.equals = a.equals || $),
        (e.identity = function(t) {
          return t;
        }),
        (e.noop = function() {}),
        (e.createProxyFunctions = function(t, e, n, r, i) {
          void 0 === i && (i = !1);
          var o = function(e) {
            return t()[e].bind(n());
          };
          return (r = r || Object.keys(t())).reduce(function(t, n) {
            var r;
            return (
              (t[n] = i
                ? ((r = n),
                  function() {
                    return (e[r] = o(r)), e[r].apply(null, arguments);
                  })
                : o(n)),
              t
            );
          }, e);
        }),
        (e.inherit = function(t, n) {
          return e.extend(Object.create(t), n);
        }),
        (e.inArray = i.curry(s)),
        (e._inArray = s),
        (e.removeFrom = i.curry(u)),
        (e._removeFrom = u),
        (e.pushTo = i.curry(c)),
        (e._pushTo = c),
        (e.deregAll = function(t) {
          return t.slice().forEach(function(n) {
            'function' == typeof n && n(), e.removeFrom(t, n);
          });
        }),
        (e.defaults = function(t) {
          for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          var i = n.concat({}).reverse(),
            o = e.extend.apply(null, i);
          return e.extend({}, o, l(t || {}, Object.keys(o)));
        }),
        (e.mergeR = function(t, n) {
          return e.extend(t, n);
        }),
        (e.ancestors = function(t, e) {
          var n = [];
          for (var r in t.path) {
            if (t.path[r] !== e.path[r]) break;
            n.push(t.path[r]);
          }
          return n;
        }),
        (e.pick = l),
        (e.omit = function(t, n) {
          return Object.keys(t)
            .filter(i.not(e.inArray(n)))
            .reduce(function(e, n) {
              return (e[n] = t[n]), e;
            }, {});
        }),
        (e.pluck = function(t, e) {
          return f(t, i.prop(e));
        }),
        (e.filter = function(t, n) {
          var i = r.isArray(t),
            o = i ? [] : {},
            a = i
              ? function(t) {
                  return o.push(t);
                }
              : function(t, e) {
                  return (o[e] = t);
                };
          return (
            e.forEach(t, function(t, e) {
              n(t, e) && a(t, e);
            }),
            o
          );
        }),
        (e.find = function(t, n) {
          var r;
          return (
            e.forEach(t, function(t, e) {
              r || (n(t, e) && (r = t));
            }),
            r
          );
        }),
        (e.mapObj = f),
        (e.map = f),
        (e.values = function(t) {
          return Object.keys(t).map(function(e) {
            return t[e];
          });
        }),
        (e.allTrueR = function(t, e) {
          return t && e;
        }),
        (e.anyTrueR = function(t, e) {
          return t || e;
        }),
        (e.unnestR = function(t, e) {
          return t.concat(e);
        }),
        (e.flattenR = function(t, n) {
          return r.isArray(n) ? t.concat(n.reduce(e.flattenR, [])) : h(t, n);
        }),
        (e.pushR = h),
        (e.uniqR = function(t, n) {
          return e.inArray(t, n) ? t : h(t, n);
        }),
        (e.unnest = function(t) {
          return t.reduce(e.unnestR, []);
        }),
        (e.flatten = function(t) {
          return t.reduce(e.flattenR, []);
        }),
        (e.assertPredicate = p),
        (e.assertMap = p),
        (e.assertFn = p),
        (e.pairs = function(t) {
          return Object.keys(t).map(function(e) {
            return [e, t[e]];
          });
        }),
        (e.arrayTuples = d),
        (e.applyPairs = function(t, e) {
          var n, i;
          if ((r.isArray(e) && ((n = e[0]), (i = e[1])), !r.isString(n)))
            throw new Error('invalid parameters to applyPairs');
          return (t[n] = i), t;
        }),
        (e.tail = function(t) {
          return (t.length && t[t.length - 1]) || void 0;
        }),
        (e.copy = function(t, n) {
          return (
            n &&
              Object.keys(n).forEach(function(t) {
                return delete n[t];
              }),
            n || (n = {}),
            e.extend(n, t)
          );
        }),
        (e._extend = v),
        (e.silenceUncaughtInPromise = function(t) {
          return (
            t.catch(function(t) {
              return 0;
            }) && t
          );
        }),
        (e.silentRejection = function(t) {
          return e.silenceUncaughtInPromise(o.services.$q.reject(t));
        });
    }.call(this, n(74)));
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(2),
      i = n(25),
      o = Object.prototype.toString,
      a = function(t) {
        return function(e) {
          return typeof e === t;
        };
      };
    (e.isUndefined = a('undefined')),
      (e.isDefined = r.not(e.isUndefined)),
      (e.isNull = function(t) {
        return null === t;
      }),
      (e.isNullOrUndefined = r.or(e.isNull, e.isUndefined)),
      (e.isFunction = a('function')),
      (e.isNumber = a('number')),
      (e.isString = a('string')),
      (e.isObject = function(t) {
        return null !== t && 'object' == typeof t;
      }),
      (e.isArray = Array.isArray),
      (e.isDate = function(t) {
        return '[object Date]' === o.call(t);
      }),
      (e.isRegExp = function(t) {
        return '[object RegExp]' === o.call(t);
      }),
      (e.isState = i.StateObject.isState),
      (e.isInjectable = function(t) {
        if (e.isArray(t) && t.length) {
          var n = t.slice(0, -1),
            i = t.slice(-1);
          return !(n.filter(r.not(e.isString)).length || i.filter(r.not(e.isFunction)).length);
        }
        return e.isFunction(t);
      }),
      (e.isPromise = r.and(e.isObject, r.pipe(r.prop('then'), e.isFunction)));
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      var e = [].slice.apply(arguments, [1]),
        n = t.length;
      return (function e(r) {
        return r.length >= n
          ? t.apply(null, r)
          : function() {
              return e(r.concat([].slice.apply(arguments)));
            };
      })(e);
    }
    function i() {
      var t = arguments,
        e = t.length - 1;
      return function() {
        for (var n = e, r = t[e].apply(this, arguments); n--; ) r = t[n].call(this, r);
        return r;
      };
    }
    function o() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return i.apply(null, [].slice.call(arguments).reverse());
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.curry = r),
      (e.compose = i),
      (e.pipe = o),
      (e.prop = function(t) {
        return function(e) {
          return e && e[t];
        };
      }),
      (e.propEq = r(function(t, e, n) {
        return n && n[t] === e;
      })),
      (e.parse = function(t) {
        return o.apply(null, t.split('.').map(e.prop));
      }),
      (e.not = function(t) {
        return function() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          return !t.apply(null, e);
        };
      }),
      (e.and = function(t, e) {
        return function() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return t.apply(null, n) && e.apply(null, n);
        };
      }),
      (e.or = function(t, e) {
        return function() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return t.apply(null, n) || e.apply(null, n);
        };
      }),
      (e.all = function(t) {
        return function(e) {
          return e.reduce(function(e, n) {
            return e && !!t(n);
          }, !0);
        };
      }),
      (e.any = function(t) {
        return function(e) {
          return e.reduce(function(e, n) {
            return e || !!t(n);
          }, !1);
        };
      }),
      (e.is = function(t) {
        return function(e) {
          return (null != e && e.constructor === t) || e instanceof t;
        };
      }),
      (e.eq = function(t) {
        return function(e) {
          return t === e;
        };
      }),
      (e.val = function(t) {
        return function() {
          return t;
        };
      }),
      (e.invoke = function(t, e) {
        return function(n) {
          return n[t].apply(n, e);
        };
      }),
      (e.pattern = function(t) {
        return function(e) {
          for (var n = 0; n < t.length; n++) if (t[n][0](e)) return t[n][1](e);
        };
      });
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.notImplemented = function(t) {
        return function() {
          throw new Error(t + '(): No coreservices implementation for UI-Router is loaded.');
        };
      });
    var r = { $q: void 0, $injector: void 0 };
    e.services = r;
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      r(n(0)),
      r(n(3)),
      r(n(24)),
      r(n(2)),
      r(n(1)),
      r(n(23)),
      r(n(5)),
      r(n(6));
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(1),
      i = n(10),
      o = n(0),
      a = n(2),
      s = n(17),
      u = n(11);
    function c(t) {
      var e = l(t),
        n = e.match(/^(function [^ ]+\([^)]*\))/),
        r = n ? n[1] : e,
        i = t.name || '';
      return i && r.match(/function \(/) ? 'function ' + i + r.substr(9) : r;
    }
    function l(t) {
      var e = r.isArray(t) ? t.slice(-1)[0] : t;
      return (e && e.toString()) || 'undefined';
    }
    (e.maxLength = function(t, e) {
      return e.length <= t ? e : e.substr(0, t - 3) + '...';
    }),
      (e.padString = function(t, e) {
        for (; e.length < t; ) e += ' ';
        return e;
      }),
      (e.kebobString = function(t) {
        return t
          .replace(/^([A-Z])/, function(t) {
            return t.toLowerCase();
          })
          .replace(/([A-Z])/g, function(t) {
            return '-' + t.toLowerCase();
          });
      }),
      (e.functionToString = c),
      (e.fnToString = l);
    var f = null,
      h = function(t) {
        var e = i.Rejection.isRejectionPromise;
        return (f =
          f ||
          a.pattern([
            [a.not(r.isDefined), a.val('undefined')],
            [r.isNull, a.val('null')],
            [r.isPromise, a.val('[Promise]')],
            [
              e,
              function(t) {
                return t._transitionRejection.toString();
              }
            ],
            [a.is(i.Rejection), a.invoke('toString')],
            [a.is(s.Transition), a.invoke('toString')],
            [a.is(u.Resolvable), a.invoke('toString')],
            [r.isInjectable, c],
            [a.val(!0), o.identity]
          ]))(t);
      };
    (e.stringify = function(t) {
      var e = [];
      return JSON.stringify(t, function(t, n) {
        return (function(t) {
          if (r.isObject(t)) {
            if (-1 !== e.indexOf(t)) return '[circular ref]';
            e.push(t);
          }
          return h(t);
        })(n);
      }).replace(/\\"/g, '"');
    }),
      (e.beforeAfterSubstr = function(t) {
        return function(e) {
          if (!e) return ['', ''];
          var n = e.indexOf(t);
          return -1 === n ? [e, ''] : [e.substr(0, n), e.substr(n + 1)];
        };
      }),
      (e.hostRegex = new RegExp('^(?:[a-z]+:)?//[^/]+/')),
      (e.stripLastPathElement = function(t) {
        return t.replace(/\/[^/]*$/, '');
      }),
      (e.splitHash = e.beforeAfterSubstr('#')),
      (e.splitQuery = e.beforeAfterSubstr('?')),
      (e.splitEqual = e.beforeAfterSubstr('=')),
      (e.trimHashVal = function(t) {
        return t ? t.replace(/^#/, '') : '';
      }),
      (e.splitOnDelim = function(t) {
        var e = new RegExp('(' + t + ')', 'g');
        return function(t) {
          return t.split(e).filter(o.identity);
        };
      }),
      (e.joinNeighborsR = function(t, e) {
        return r.isString(o.tail(t)) && r.isString(e)
          ? t.slice(0, -1).concat(o.tail(t) + e)
          : o.pushR(t, e);
      });
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(2),
      i = n(1),
      o = n(5);
    function a(t) {
      if (!t) return 'ui-view (defunct)';
      var e = t.creationContext ? t.creationContext.name || '(root)' : '(none)';
      return '[ui-view#' + t.id + ' ' + t.$type + ':' + t.fqn + ' (' + t.name + '@' + e + ')]';
    }
    function s(t) {
      return i.isNumber(t) ? u[t] : u[u[t]];
    }
    var u,
      c = Function.prototype.bind.call(console.log, console),
      l = i.isFunction(console.table) ? console.table.bind(console) : c.bind(console);
    !(function(t) {
      (t[(t.RESOLVE = 0)] = 'RESOLVE'),
        (t[(t.TRANSITION = 1)] = 'TRANSITION'),
        (t[(t.HOOK = 2)] = 'HOOK'),
        (t[(t.UIVIEW = 3)] = 'UIVIEW'),
        (t[(t.VIEWCONFIG = 4)] = 'VIEWCONFIG');
    })((u = e.Category || (e.Category = {})));
    var f = r.parse('$id'),
      h = r.parse('router.$id'),
      p = function(t) {
        return 'Transition #' + f(t) + '-' + h(t);
      },
      d = (function() {
        function t() {
          (this._enabled = {}), (this.approximateDigests = 0);
        }
        return (
          (t.prototype._set = function(t, e) {
            var n = this;
            e.length ||
              (e = Object.keys(u)
                .map(function(t) {
                  return parseInt(t, 10);
                })
                .filter(function(t) {
                  return !isNaN(t);
                })
                .map(function(t) {
                  return u[t];
                })),
              e.map(s).forEach(function(e) {
                return (n._enabled[e] = t);
              });
          }),
          (t.prototype.enable = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this._set(!0, t);
          }),
          (t.prototype.disable = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this._set(!1, t);
          }),
          (t.prototype.enabled = function(t) {
            return !!this._enabled[s(t)];
          }),
          (t.prototype.traceTransitionStart = function(t) {
            this.enabled(u.TRANSITION) && console.log(p(t) + ': Started  -> ' + o.stringify(t));
          }),
          (t.prototype.traceTransitionIgnored = function(t) {
            this.enabled(u.TRANSITION) && console.log(p(t) + ': Ignored  <> ' + o.stringify(t));
          }),
          (t.prototype.traceHookInvocation = function(t, e, n) {
            if (this.enabled(u.HOOK)) {
              var i = r.parse('traceData.hookType')(n) || 'internal',
                a =
                  r.parse('traceData.context.state.name')(n) ||
                  r.parse('traceData.context')(n) ||
                  'unknown',
                s = o.functionToString(t.registeredHook.callback);
              console.log(
                p(e) + ':   Hook -> ' + i + ' context: ' + a + ', ' + o.maxLength(200, s)
              );
            }
          }),
          (t.prototype.traceHookResult = function(t, e, n) {
            this.enabled(u.HOOK) &&
              console.log(p(e) + ':   <- Hook returned: ' + o.maxLength(200, o.stringify(t)));
          }),
          (t.prototype.traceResolvePath = function(t, e, n) {
            this.enabled(u.RESOLVE) &&
              console.log(p(n) + ':         Resolving ' + t + ' (' + e + ')');
          }),
          (t.prototype.traceResolvableResolved = function(t, e) {
            this.enabled(u.RESOLVE) &&
              console.log(
                p(e) +
                  ':               <- Resolved  ' +
                  t +
                  ' to: ' +
                  o.maxLength(200, o.stringify(t.data))
              );
          }),
          (t.prototype.traceError = function(t, e) {
            this.enabled(u.TRANSITION) &&
              console.log(p(e) + ': <- Rejected ' + o.stringify(e) + ', reason: ' + t);
          }),
          (t.prototype.traceSuccess = function(t, e) {
            this.enabled(u.TRANSITION) &&
              console.log(p(e) + ': <- Success  ' + o.stringify(e) + ', final state: ' + t.name);
          }),
          (t.prototype.traceUIViewEvent = function(t, e, n) {
            void 0 === n && (n = ''),
              this.enabled(u.UIVIEW) &&
                console.log('ui-view: ' + o.padString(30, t) + ' ' + a(e) + n);
          }),
          (t.prototype.traceUIViewConfigUpdated = function(t, e) {
            this.enabled(u.UIVIEW) &&
              this.traceUIViewEvent('Updating', t, " with ViewConfig from context='" + e + "'");
          }),
          (t.prototype.traceUIViewFill = function(t, e) {
            this.enabled(u.UIVIEW) &&
              this.traceUIViewEvent('Fill', t, ' with: ' + o.maxLength(200, e));
          }),
          (t.prototype.traceViewSync = function(t) {
            if (this.enabled(u.VIEWCONFIG)) {
              var e = 'uiview component fqn',
                n = t
                  .map(function(t) {
                    var n,
                      r = t.uiView,
                      i = t.viewConfig,
                      o = r && r.fqn,
                      a = i && i.viewDecl.$context.name + ': (' + i.viewDecl.$name + ')';
                    return ((n = {})[e] = o), (n['view config state (view name)'] = a), n;
                  })
                  .sort(function(t, n) {
                    return (t[e] || '').localeCompare(n[e] || '');
                  });
              l(n);
            }
          }),
          (t.prototype.traceViewServiceEvent = function(t, e) {
            this.enabled(u.VIEWCONFIG) &&
              console.log(
                'VIEWCONFIG: ' +
                  t +
                  ' ' +
                  (function(t) {
                    var e = t.viewDecl,
                      n = e.$context.name || '(root)';
                    return (
                      '[View#' +
                      t.$id +
                      " from '" +
                      n +
                      "' state]: target ui-view: '" +
                      e.$uiViewName +
                      '@' +
                      e.$uiViewContextAnchor +
                      "'"
                    );
                  })(e)
              );
          }),
          (t.prototype.traceViewServiceUIViewEvent = function(t, e) {
            this.enabled(u.VIEWCONFIG) && console.log('VIEWCONFIG: ' + t + ' ' + a(e));
          }),
          t
        );
      })();
    e.Trace = d;
    var v = new d();
    e.trace = v;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r,
      i = n(0),
      o = n(2),
      a = n(1),
      s = n(3),
      u = n(20),
      c = Object.prototype.hasOwnProperty,
      l = function(t) {
        return 0 === ['value', 'type', 'squash', 'array', 'dynamic'].filter(c.bind(t || {})).length;
      };
    !(function(t) {
      (t[(t.PATH = 0)] = 'PATH'), (t[(t.SEARCH = 1)] = 'SEARCH'), (t[(t.CONFIG = 2)] = 'CONFIG');
    })((r = e.DefType || (e.DefType = {})));
    var f = (function() {
      function t(t, e, n, s, c) {
        e = (function(t, e, n, i, o) {
          if (t.type && e && 'string' !== e.name)
            throw new Error("Param '" + i + "' has two type configurations.");
          if (t.type && e && 'string' === e.name && o.type(t.type)) return o.type(t.type);
          if (e) return e;
          if (!t.type) {
            var a =
              n === r.CONFIG ? 'any' : n === r.PATH ? 'path' : n === r.SEARCH ? 'query' : 'string';
            return o.type(a);
          }
          return t.type instanceof u.ParamType ? t.type : o.type(t.type);
        })(
          (n = (function(t) {
            function e() {
              return t.value;
            }
            return (
              (t = (l(t) && { value: t }) || t),
              (e.__cacheable = !0),
              i.extend(t, { $$fn: a.isInjectable(t.value) ? t.value : e })
            );
          })(n)),
          e,
          s,
          t,
          c.paramTypes
        );
        var f,
          h,
          p = ((f = { array: s === r.SEARCH && 'auto' }),
          (h = t.match(/\[\]$/) ? { array: !0 } : {}),
          i.extend(f, h, n).array);
        e = p ? e.$asArray(p, s === r.SEARCH) : e;
        var d = void 0 !== n.value || s === r.SEARCH,
          v = a.isDefined(n.dynamic) ? !!n.dynamic : !!e.dynamic,
          $ = a.isDefined(n.raw) ? !!n.raw : !!e.raw,
          m = (function(t, e, n) {
            var r = t.squash;
            if (!e || !1 === r) return !1;
            if (!a.isDefined(r) || null == r) return n;
            if (!0 === r || a.isString(r)) return r;
            throw new Error(
              "Invalid squash policy: '" + r + "'. Valid policies: false, true, or arbitrary string"
            );
          })(n, d, c.defaultSquashPolicy()),
          g = (function(t, e, n, r) {
            var s = [
                { from: '', to: n || e ? void 0 : '' },
                { from: null, to: n || e ? void 0 : '' }
              ],
              u = a.isArray(t.replace) ? t.replace : [];
            a.isString(r) && u.push({ from: r, to: void 0 });
            var c = i.map(u, o.prop('from'));
            return i
              .filter(s, function(t) {
                return -1 === c.indexOf(t.from);
              })
              .concat(u);
          })(n, p, d, m),
          y = a.isDefined(n.inherit) ? !!n.inherit : !!e.inherit;
        i.extend(this, {
          id: t,
          type: e,
          location: s,
          isOptional: d,
          dynamic: v,
          raw: $,
          squash: m,
          replace: g,
          inherit: y,
          array: p,
          config: n
        });
      }
      return (
        (t.values = function(t, e) {
          void 0 === e && (e = {});
          for (var n = {}, r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            n[o.id] = o.value(e[o.id]);
          }
          return n;
        }),
        (t.changed = function(t, e, n) {
          return (
            void 0 === e && (e = {}),
            void 0 === n && (n = {}),
            t.filter(function(t) {
              return !t.type.equals(e[t.id], n[t.id]);
            })
          );
        }),
        (t.equals = function(e, n, r) {
          return (
            void 0 === n && (n = {}), void 0 === r && (r = {}), 0 === t.changed(e, n, r).length
          );
        }),
        (t.validates = function(t, e) {
          return (
            void 0 === e && (e = {}),
            t
              .map(function(t) {
                return t.validates(e[t.id]);
              })
              .reduce(i.allTrueR, !0)
          );
        }),
        (t.prototype.isDefaultValue = function(t) {
          return this.isOptional && this.type.equals(this.value(), t);
        }),
        (t.prototype.value = function(t) {
          var e = this;
          return (
            (t = (function(t) {
              for (var n = 0, r = e.replace; n < r.length; n++) {
                var i = r[n];
                if (i.from === t) return i.to;
              }
              return t;
            })(t)),
            a.isUndefined(t)
              ? (function() {
                  if (e._defaultValueCache) return e._defaultValueCache.defaultValue;
                  if (!s.services.$injector)
                    throw new Error('Injectable functions cannot be called at configuration time');
                  var t = s.services.$injector.invoke(e.config.$$fn);
                  if (null !== t && void 0 !== t && !e.type.is(t))
                    throw new Error(
                      'Default value (' +
                        t +
                        ") for parameter '" +
                        e.id +
                        "' is not an instance of ParamType (" +
                        e.type.name +
                        ')'
                    );
                  return (
                    e.config.$$fn.__cacheable && (e._defaultValueCache = { defaultValue: t }), t
                  );
                })()
              : this.type.$normalize(t)
          );
        }),
        (t.prototype.isSearch = function() {
          return this.location === r.SEARCH;
        }),
        (t.prototype.validates = function(t) {
          if ((a.isUndefined(t) || null === t) && this.isOptional) return !0;
          var e = this.type.$normalize(t);
          if (!this.type.is(e)) return !1;
          var n = this.type.encode(e);
          return !(a.isString(n) && !this.type.pattern.exec(n));
        }),
        (t.prototype.toString = function() {
          return (
            '{Param:' +
            this.id +
            ' ' +
            this.type +
            " squash: '" +
            this.squash +
            "' optional: " +
            this.isOptional +
            '}'
          );
        }),
        t
      );
    })();
    e.Param = f;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(1),
      i = n(5),
      o = n(4),
      a = (function() {
        function t(t, e, n, r) {
          (this._stateRegistry = t),
            (this._identifier = e),
            (this._identifier = e),
            (this._params = o.extend({}, n || {})),
            (this._options = o.extend({}, r || {})),
            (this._definition = t.matcher.find(e, this._options.relative));
        }
        return (
          (t.prototype.name = function() {
            return (this._definition && this._definition.name) || this._identifier;
          }),
          (t.prototype.identifier = function() {
            return this._identifier;
          }),
          (t.prototype.params = function() {
            return this._params;
          }),
          (t.prototype.$state = function() {
            return this._definition;
          }),
          (t.prototype.state = function() {
            return this._definition && this._definition.self;
          }),
          (t.prototype.options = function() {
            return this._options;
          }),
          (t.prototype.exists = function() {
            return !(!this._definition || !this._definition.self);
          }),
          (t.prototype.valid = function() {
            return !this.error();
          }),
          (t.prototype.error = function() {
            var t = this.options().relative;
            if (!this._definition && t) {
              var e = t.name ? t.name : t;
              return "Could not resolve '" + this.name() + "' from state '" + e + "'";
            }
            return this._definition
              ? this._definition.self
                ? void 0
                : "State '" + this.name() + "' has an invalid definition"
              : "No such state '" + this.name() + "'";
          }),
          (t.prototype.toString = function() {
            return "'" + this.name() + "'" + i.stringify(this.params());
          }),
          (t.prototype.withState = function(e) {
            return new t(this._stateRegistry, e, this._params, this._options);
          }),
          (t.prototype.withParams = function(e, n) {
            void 0 === n && (n = !1);
            var r = n ? e : o.extend({}, this._params, e);
            return new t(this._stateRegistry, this._identifier, r, this._options);
          }),
          (t.prototype.withOptions = function(e, n) {
            void 0 === n && (n = !1);
            var r = n ? e : o.extend({}, this._options, e);
            return new t(this._stateRegistry, this._identifier, this._params, r);
          }),
          (t.isDef = function(t) {
            return t && t.state && (r.isString(t.state) || r.isString(t.state.name));
          }),
          t
        );
      })();
    e.TargetState = a;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (function(t) {
        (t[(t.CREATE = 0)] = 'CREATE'),
          (t[(t.BEFORE = 1)] = 'BEFORE'),
          (t[(t.RUN = 2)] = 'RUN'),
          (t[(t.SUCCESS = 3)] = 'SUCCESS'),
          (t[(t.ERROR = 4)] = 'ERROR');
      })(e.TransitionHookPhase || (e.TransitionHookPhase = {})),
      (function(t) {
        (t[(t.TRANSITION = 0)] = 'TRANSITION'), (t[(t.STATE = 1)] = 'STATE');
      })(e.TransitionHookScope || (e.TransitionHookScope = {}));
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r,
      i = n(0),
      o = n(5),
      a = n(2);
    !(function(t) {
      (t[(t.SUPERSEDED = 2)] = 'SUPERSEDED'),
        (t[(t.ABORTED = 3)] = 'ABORTED'),
        (t[(t.INVALID = 4)] = 'INVALID'),
        (t[(t.IGNORED = 5)] = 'IGNORED'),
        (t[(t.ERROR = 6)] = 'ERROR');
    })((r = e.RejectType || (e.RejectType = {})));
    var s = 0,
      u = (function() {
        function t(t, e, n) {
          (this.$id = s++), (this.type = t), (this.message = e), (this.detail = n);
        }
        return (
          (t.isRejectionPromise = function(e) {
            return e && 'function' == typeof e.then && a.is(t)(e._transitionRejection);
          }),
          (t.superseded = function(e, n) {
            var i = new t(
              r.SUPERSEDED,
              'The transition has been superseded by a different transition',
              e
            );
            return n && n.redirected && (i.redirected = !0), i;
          }),
          (t.redirected = function(e) {
            return t.superseded(e, { redirected: !0 });
          }),
          (t.invalid = function(e) {
            return new t(r.INVALID, 'This transition is invalid', e);
          }),
          (t.ignored = function(e) {
            return new t(r.IGNORED, 'The transition was ignored', e);
          }),
          (t.aborted = function(e) {
            return new t(r.ABORTED, 'The transition has been aborted', e);
          }),
          (t.errored = function(e) {
            return new t(r.ERROR, 'The transition errored', e);
          }),
          (t.normalize = function(e) {
            return a.is(t)(e) ? e : t.errored(e);
          }),
          (t.prototype.toString = function() {
            var t,
              e =
                (t = this.detail) && t.toString !== Object.prototype.toString
                  ? t.toString()
                  : o.stringify(t);
            return (
              'Transition Rejection($id: ' +
              this.$id +
              ' type: ' +
              this.type +
              ', message: ' +
              this.message +
              ', detail: ' +
              e +
              ')'
            );
          }),
          (t.prototype.toPromise = function() {
            return i.extend(i.silentRejection(this), { _transitionRejection: this });
          }),
          t
        );
      })();
    e.Rejection = u;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(3),
      o = n(6),
      a = n(5),
      s = n(1),
      u = n(1);
    e.defaultResolvePolicy = { when: 'LAZY', async: 'WAIT' };
    var c = (function() {
      function t(e, n, o, a, c) {
        if (((this.resolved = !1), (this.promise = void 0), e instanceof t)) r.extend(this, e);
        else if (s.isFunction(n)) {
          if (u.isNullOrUndefined(e))
            throw new Error('new Resolvable(): token argument is required');
          if (!s.isFunction(n))
            throw new Error('new Resolvable(): resolveFn argument must be a function');
          (this.token = e),
            (this.policy = a),
            (this.resolveFn = n),
            (this.deps = o || []),
            (this.data = c),
            (this.resolved = void 0 !== c),
            (this.promise = this.resolved ? i.services.$q.when(this.data) : void 0);
        } else if (
          s.isObject(e) &&
          e.token &&
          (e.hasOwnProperty('resolveFn') || e.hasOwnProperty('data'))
        ) {
          var l = e;
          return new t(l.token, l.resolveFn, l.deps, l.policy, l.data);
        }
      }
      return (
        (t.prototype.getPolicy = function(t) {
          var n = this.policy || {},
            r = (t && t.resolvePolicy) || {};
          return {
            when: n.when || r.when || e.defaultResolvePolicy.when,
            async: n.async || r.async || e.defaultResolvePolicy.async
          };
        }),
        (t.prototype.resolve = function(t, e) {
          var n = this,
            a = i.services.$q,
            s = t.findNode(this),
            u = s && s.state,
            c =
              'RXWAIT' === this.getPolicy(u).async
                ? function(t) {
                    var e = t.cache(1);
                    return e
                      .take(1)
                      .toPromise()
                      .then(function() {
                        return e;
                      });
                  }
                : r.identity;
          return (this.promise = a
            .when()
            .then(function() {
              return a.all(
                t.getDependencies(n).map(function(n) {
                  return n.get(t, e);
                })
              );
            })
            .then(function(t) {
              return n.resolveFn.apply(null, t);
            })
            .then(c)
            .then(function(t) {
              return (
                (n.data = t),
                (n.resolved = !0),
                (n.resolveFn = null),
                o.trace.traceResolvableResolved(n, e),
                n.data
              );
            }));
        }),
        (t.prototype.get = function(t, e) {
          return this.promise || this.resolve(t, e);
        }),
        (t.prototype.toString = function() {
          return (
            'Resolvable(token: ' +
            a.stringify(this.token) +
            ', requires: [' +
            this.deps.map(a.stringify) +
            '])'
          );
        }),
        (t.prototype.clone = function() {
          return new t(this);
        }),
        (t.fromData = function(e, n) {
          return new t(
            e,
            function() {
              return n;
            },
            null,
            null,
            n
          );
        }),
        t
      );
    })();
    e.Resolvable = c;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(9),
      i = n(0),
      o = n(5),
      a = n(1),
      s = n(2),
      u = n(6),
      c = n(3),
      l = n(10),
      f = n(8),
      h = { current: i.noop, transition: null, traceData: {}, bind: null },
      p = (function() {
        function t(t, e, n, o) {
          var a = this;
          (this.transition = t),
            (this.stateContext = e),
            (this.registeredHook = n),
            (this.options = o),
            (this.isSuperseded = function() {
              return (
                a.type.hookPhase === r.TransitionHookPhase.RUN && !a.options.transition.isActive()
              );
            }),
            (this.options = i.defaults(o, h)),
            (this.type = n.eventType);
        }
        return (
          (t.chain = function(t, e) {
            return t.reduce(function(t, e) {
              return t.then(function() {
                return e.invokeHook();
              });
            }, e || c.services.$q.when());
          }),
          (t.invokeHooks = function(e, n) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r].invokeHook();
              if (a.isPromise(i)) {
                var o = e.slice(r + 1);
                return t.chain(o, i).then(n);
              }
            }
            return n();
          }),
          (t.runAllHooks = function(t) {
            t.forEach(function(t) {
              return t.invokeHook();
            });
          }),
          (t.prototype.logError = function(t) {
            this.transition.router.stateService.defaultErrorHandler()(t);
          }),
          (t.prototype.invokeHook = function() {
            var t = this,
              e = this.registeredHook;
            if (!e._deregistered) {
              var n = this.getNotCurrentRejection();
              if (n) return n;
              var r = this.options;
              u.trace.traceHookInvocation(this, this.transition, r);
              var i = function(n) {
                  return e.eventType.getErrorHandler(t)(n);
                },
                o = function(n) {
                  return e.eventType.getResultHandler(t)(n);
                };
              try {
                var s = e.callback.call(r.bind, t.transition, t.stateContext);
                return !this.type.synchronous && a.isPromise(s)
                  ? s
                      .catch(function(t) {
                        return l.Rejection.normalize(t).toPromise();
                      })
                      .then(o, i)
                  : o(s);
              } catch (t) {
                return i(l.Rejection.normalize(t));
              } finally {
                e.invokeLimit && ++e.invokeCount >= e.invokeLimit && e.deregister();
              }
            }
          }),
          (t.prototype.handleHookResult = function(t) {
            var e = this,
              n = this.getNotCurrentRejection();
            return (
              n ||
              (a.isPromise(t)
                ? t.then(function(t) {
                    return e.handleHookResult(t);
                  })
                : (u.trace.traceHookResult(t, this.transition, this.options),
                  !1 === t
                    ? l.Rejection.aborted('Hook aborted transition').toPromise()
                    : s.is(f.TargetState)(t)
                      ? l.Rejection.redirected(t).toPromise()
                      : void 0))
            );
          }),
          (t.prototype.getNotCurrentRejection = function() {
            var t = this.transition.router;
            return t._disposed
              ? l.Rejection.aborted(
                  'UIRouter instance #' + t.$id + ' has been stopped (disposed)'
                ).toPromise()
              : this.transition._aborted
                ? l.Rejection.aborted().toPromise()
                : this.isSuperseded()
                  ? l.Rejection.superseded(this.options.current()).toPromise()
                  : void 0;
          }),
          (t.prototype.toString = function() {
            var t = this.options,
              e = this.registeredHook,
              n = s.parse('traceData.hookType')(t) || 'internal',
              r =
                s.parse('traceData.context.state.name')(t) ||
                s.parse('traceData.context')(t) ||
                'unknown',
              i = o.fnToString(e.callback);
            return n + ' context: ' + r + ', ' + o.maxLength(200, i);
          }),
          (t.HANDLE_RESULT = function(t) {
            return function(e) {
              return t.handleHookResult(e);
            };
          }),
          (t.LOG_REJECTED_RESULT = function(t) {
            return function(e) {
              a.isPromise(e) &&
                e.catch(function(e) {
                  return t.logError(l.Rejection.normalize(e));
                });
            };
          }),
          (t.LOG_ERROR = function(t) {
            return function(e) {
              return t.logError(e);
            };
          }),
          (t.REJECT_ERROR = function(t) {
            return function(t) {
              return i.silentRejection(t);
            };
          }),
          (t.THROW_ERROR = function(t) {
            return function(t) {
              throw t;
            };
          }),
          t
        );
      })();
    e.TransitionHook = p;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(4),
      i = n(18),
      o = (function() {
        function t(t, e) {
          var n = this;
          (this.fireAfterUpdate = e),
            (this._listeners = []),
            (this._listener = function(t) {
              return n._listeners.forEach(function(e) {
                return e(t);
              });
            }),
            (this.hash = function() {
              return i.parseUrl(n._get()).hash;
            }),
            (this.path = function() {
              return i.parseUrl(n._get()).path;
            }),
            (this.search = function() {
              return i.getParams(i.parseUrl(n._get()).search);
            }),
            (this._location = r.root.location),
            (this._history = r.root.history);
        }
        return (
          (t.prototype.url = function(t, e) {
            return (
              void 0 === e && (e = !0),
              r.isDefined(t) &&
                t !== this._get() &&
                (this._set(null, null, t, e),
                this.fireAfterUpdate &&
                  this._listeners.forEach(function(e) {
                    return e({ url: t });
                  })),
              i.buildUrl(this)
            );
          }),
          (t.prototype.onChange = function(t) {
            var e = this;
            return (
              this._listeners.push(t),
              function() {
                return r.removeFrom(e._listeners, t);
              }
            );
          }),
          (t.prototype.dispose = function(t) {
            r.deregAll(this._listeners);
          }),
          t
        );
      })();
    e.BaseLocationServices = o;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(2),
      o = n(1),
      a = n(7),
      s = n(5);
    function u(t, e) {
      var n = ['', ''],
        r = t.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
      if (!e) return r;
      switch (e.squash) {
        case !1:
          n = ['(', ')' + (e.isOptional ? '?' : '')];
          break;
        case !0:
          (r = r.replace(/\/$/, '')), (n = ['(?:/(', ')|/)?']);
          break;
        default:
          n = ['(' + e.squash + '|', ')?'];
      }
      return r + n[0] + e.type.pattern.source + n[1];
    }
    var c = s.splitOnDelim('/'),
      l = (function() {
        function t(e, n, o, a) {
          var s = this;
          (this.config = a),
            (this._cache = { path: [this] }),
            (this._children = []),
            (this._params = []),
            (this._segments = []),
            (this._compiled = []),
            (this.pattern = e),
            (this.config = r.defaults(this.config, {
              params: {},
              strict: !0,
              caseInsensitive: !1,
              paramMap: r.identity
            }));
          for (
            var c,
              l,
              f,
              h = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
              p = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
              d = [],
              v = 0,
              $ = function(n) {
                if (!t.nameValidator.test(n))
                  throw new Error("Invalid parameter name '" + n + "' in pattern '" + e + "'");
                if (r.find(s._params, i.propEq('id', n)))
                  throw new Error("Duplicate parameter name '" + n + "' in pattern '" + e + "'");
              },
              m = function(t, i) {
                var o,
                  a = t[2] || t[3],
                  u = i ? t[4] : t[4] || ('*' === t[1] ? '[\\s\\S]*' : null);
                return {
                  id: a,
                  regexp: u,
                  cfg: s.config.params[a],
                  segment: e.substring(v, t.index),
                  type: u
                    ? n.type(u) ||
                      ((o = u),
                      r.inherit(n.type(i ? 'query' : 'path'), {
                        pattern: new RegExp(o, s.config.caseInsensitive ? 'i' : void 0)
                      }))
                    : null
                };
              };
            (c = h.exec(e)) && !((l = m(c, !1)).segment.indexOf('?') >= 0);

          )
            $(l.id),
              this._params.push(o.fromPath(l.id, l.type, this.config.paramMap(l.cfg, !1))),
              this._segments.push(l.segment),
              d.push([l.segment, r.tail(this._params)]),
              (v = h.lastIndex);
          var g = (f = e.substring(v)).indexOf('?');
          if (g >= 0) {
            var y = f.substring(g);
            if (((f = f.substring(0, g)), y.length > 0))
              for (v = 0; (c = p.exec(y)); )
                $((l = m(c, !0)).id),
                  this._params.push(o.fromSearch(l.id, l.type, this.config.paramMap(l.cfg, !0))),
                  (v = h.lastIndex);
          }
          this._segments.push(f),
            (this._compiled = d
              .map(function(t) {
                return u.apply(null, t);
              })
              .concat(u(f)));
        }
        return (
          (t.encodeDashes = function(t) {
            return encodeURIComponent(t).replace(/-/g, function(t) {
              return (
                '%5C%' +
                t
                  .charCodeAt(0)
                  .toString(16)
                  .toUpperCase()
              );
            });
          }),
          (t.pathSegmentsAndParams = function(t) {
            var e = t._segments,
              n = t._params.filter(function(t) {
                return t.location === a.DefType.PATH;
              });
            return r
              .arrayTuples(e, n.concat(void 0))
              .reduce(r.unnestR, [])
              .filter(function(t) {
                return '' !== t && o.isDefined(t);
              });
          }),
          (t.queryParams = function(t) {
            return t._params.filter(function(t) {
              return t.location === a.DefType.SEARCH;
            });
          }),
          (t.compare = function(e, n) {
            var i = function(e) {
                return (e._cache.weights =
                  e._cache.weights ||
                  (function(e) {
                    return (e._cache.segments =
                      e._cache.segments ||
                      e._cache.path
                        .map(t.pathSegmentsAndParams)
                        .reduce(r.unnestR, [])
                        .reduce(s.joinNeighborsR, [])
                        .map(function(t) {
                          return o.isString(t) ? c(t) : t;
                        })
                        .reduce(r.unnestR, []));
                  })(e).map(function(t) {
                    return '/' === t ? 1 : o.isString(t) ? 2 : t instanceof a.Param ? 3 : void 0;
                  }));
              },
              u = i(e),
              l = i(n);
            !(function(t, e, n) {
              for (var r = Math.max(t.length, e.length); t.length < r; ) t.push(n);
              for (; e.length < r; ) e.push(n);
            })(u, l, 0);
            var f,
              h,
              p = r.arrayTuples(u, l);
            for (h = 0; h < p.length; h++) if (0 !== (f = p[h][0] - p[h][1])) return f;
            return 0;
          }),
          (t.prototype.append = function(t) {
            return (
              this._children.push(t),
              (t._cache = { path: this._cache.path.concat(t), parent: this, pattern: null }),
              t
            );
          }),
          (t.prototype.isRoot = function() {
            return this._cache.path[0] === this;
          }),
          (t.prototype.toString = function() {
            return this.pattern;
          }),
          (t.prototype.exec = function(t, e, n, a) {
            var s = this;
            void 0 === e && (e = {}), void 0 === a && (a = {});
            var u,
              c,
              l,
              f = ((u = this._cache),
              (c = 'pattern'),
              (l = function() {
                return new RegExp(
                  [
                    '^',
                    r.unnest(s._cache.path.map(i.prop('_compiled'))).join(''),
                    !1 === s.config.strict ? '/?' : '',
                    '$'
                  ].join(''),
                  s.config.caseInsensitive ? 'i' : void 0
                );
              }),
              (u[c] = u[c] || l())).exec(t);
            if (!f) return null;
            var h,
              p,
              d,
              v = this.parameters(),
              $ = v.filter(function(t) {
                return !t.isSearch();
              }),
              m = v.filter(function(t) {
                return t.isSearch();
              }),
              g = this._cache.path
                .map(function(t) {
                  return t._segments.length - 1;
                })
                .reduce(function(t, e) {
                  return t + e;
                }),
              y = {};
            if (g !== f.length - 1)
              throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
            for (var b = 0; b < g; b++) {
              for (var w = $[b], S = f[b + 1], x = 0; x < w.replace.length; x++)
                w.replace[x].from === S && (S = w.replace[x].to);
              S &&
                !0 === w.array &&
                (void 0,
                void 0,
                void 0,
                (p = (h = function(t) {
                  return t
                    .split('')
                    .reverse()
                    .join('');
                })(S).split(/-(?!\\)/)),
                (d = r.map(p, h)),
                (S = r
                  .map(d, function(t) {
                    return t.replace(/\\-/g, '-');
                  })
                  .reverse())),
                o.isDefined(S) && (S = w.type.decode(S)),
                (y[w.id] = w.value(S));
            }
            return (
              m.forEach(function(t) {
                for (var n = e[t.id], r = 0; r < t.replace.length; r++)
                  t.replace[r].from === n && (n = t.replace[r].to);
                o.isDefined(n) && (n = t.type.decode(n)), (y[t.id] = t.value(n));
              }),
              n && (y['#'] = n),
              y
            );
          }),
          (t.prototype.parameters = function(t) {
            return (
              void 0 === t && (t = {}),
              !1 === t.inherit
                ? this._params
                : r.unnest(
                    this._cache.path.map(function(t) {
                      return t._params;
                    })
                  )
            );
          }),
          (t.prototype.parameter = function(t, e) {
            var n = this;
            void 0 === e && (e = {});
            var r = this._cache.parent;
            return (
              (function() {
                for (var e = 0, r = n._params; e < r.length; e++) {
                  var i = r[e];
                  if (i.id === t) return i;
                }
              })() ||
              (!1 !== e.inherit && r && r.parameter(t, e)) ||
              null
            );
          }),
          (t.prototype.validates = function(t) {
            return (
              (t = t || {}),
              this.parameters()
                .filter(function(e) {
                  return t.hasOwnProperty(e.id);
                })
                .map(function(e) {
                  return (n = e), (r = t[e.id]), !n || n.validates(r);
                  var n, r;
                })
                .reduce(r.allTrueR, !0)
            );
          }),
          (t.prototype.format = function(e) {
            void 0 === e && (e = {});
            var n = this._cache.path,
              i = n
                .map(t.pathSegmentsAndParams)
                .reduce(r.unnestR, [])
                .map(function(t) {
                  return o.isString(t) ? t : s(t);
                }),
              a = n
                .map(t.queryParams)
                .reduce(r.unnestR, [])
                .map(s);
            if (
              i.concat(a).filter(function(t) {
                return !1 === t.isValid;
              }).length
            )
              return null;
            function s(t) {
              var n = t.value(e[t.id]),
                r = t.validates(n),
                i = t.isDefaultValue(n);
              return {
                param: t,
                value: n,
                isValid: r,
                isDefaultValue: i,
                squash: !!i && t.squash,
                encoded: t.type.encode(n)
              };
            }
            var u = i.reduce(function(e, n) {
                if (o.isString(n)) return e + n;
                var i = n.squash,
                  a = n.encoded,
                  s = n.param;
                return !0 === i
                  ? e.match(/\/$/)
                    ? e.slice(0, -1)
                    : e
                  : o.isString(i)
                    ? e + i
                    : !1 !== i
                      ? e
                      : null == a
                        ? e
                        : o.isArray(a)
                          ? e + r.map(a, t.encodeDashes).join('-')
                          : s.raw
                            ? e + a
                            : e + encodeURIComponent(a);
              }, ''),
              c = a
                .map(function(t) {
                  var e = t.param,
                    n = t.squash,
                    i = t.encoded,
                    a = t.isDefaultValue;
                  if (
                    !(null == i || (a && !1 !== n)) &&
                    (o.isArray(i) || (i = [i]), 0 !== i.length)
                  )
                    return (
                      e.raw || (i = r.map(i, encodeURIComponent)),
                      i.map(function(t) {
                        return e.id + '=' + t;
                      })
                    );
                })
                .filter(r.identity)
                .reduce(r.unnestR, [])
                .join('&');
            return u + (c ? '?' + c : '') + (e['#'] ? '#' + e['#'] : '');
          }),
          (t.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/),
          t
        );
      })();
    e.UrlMatcher = l;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(2),
      o = n(6),
      a = n(3),
      s = n(50),
      u = n(11),
      c = n(16),
      l = n(5),
      f = n(4),
      h = s.resolvePolicies.when,
      p = [h.EAGER, h.LAZY],
      d = [h.EAGER];
    e.NATIVE_INJECTOR_TOKEN = 'Native Injector';
    var v = (function() {
      function t(t) {
        this._path = t;
      }
      return (
        (t.prototype.getTokens = function() {
          return this._path
            .reduce(function(t, e) {
              return t.concat(
                e.resolvables.map(function(t) {
                  return t.token;
                })
              );
            }, [])
            .reduce(r.uniqR, []);
        }),
        (t.prototype.getResolvable = function(t) {
          var e = this._path
            .map(function(t) {
              return t.resolvables;
            })
            .reduce(r.unnestR, [])
            .filter(function(e) {
              return e.token === t;
            });
          return r.tail(e);
        }),
        (t.prototype.getPolicy = function(t) {
          var e = this.findNode(t);
          return t.getPolicy(e.state);
        }),
        (t.prototype.subContext = function(e) {
          return new t(
            c.PathUtils.subPath(this._path, function(t) {
              return t.state === e;
            })
          );
        }),
        (t.prototype.addResolvables = function(t, e) {
          var n = r.find(this._path, i.propEq('state', e)),
            o = t.map(function(t) {
              return t.token;
            });
          n.resolvables = n.resolvables
            .filter(function(t) {
              return -1 === o.indexOf(t.token);
            })
            .concat(t);
        }),
        (t.prototype.resolvePath = function(t, e) {
          var n = this;
          void 0 === t && (t = 'LAZY');
          var u = (r.inArray(p, t) ? t : 'LAZY') === s.resolvePolicies.when.EAGER ? d : p;
          o.trace.traceResolvePath(this._path, t, e);
          var c = function(t, e) {
              return function(i) {
                return r.inArray(t, n.getPolicy(i)[e]);
              };
            },
            l = this._path.reduce(function(t, r) {
              var o = r.resolvables.filter(c(u, 'when')),
                a = o.filter(c(['NOWAIT'], 'async')),
                s = o.filter(i.not(c(['NOWAIT'], 'async'))),
                l = n.subContext(r.state),
                f = function(t) {
                  return t.get(l, e).then(function(e) {
                    return { token: t.token, value: e };
                  });
                };
              return a.forEach(f), t.concat(s.map(f));
            }, []);
          return a.services.$q.all(l);
        }),
        (t.prototype.injector = function() {
          return this._injector || (this._injector = new $(this));
        }),
        (t.prototype.findNode = function(t) {
          return r.find(this._path, function(e) {
            return r.inArray(e.resolvables, t);
          });
        }),
        (t.prototype.getDependencies = function(t) {
          var e = this,
            n = this.findNode(t),
            i = (
              c.PathUtils.subPath(this._path, function(t) {
                return t === n;
              }) || this._path
            )
              .reduce(function(t, e) {
                return t.concat(e.resolvables);
              }, [])
              .filter(function(e) {
                return e !== t;
              });
          return t.deps.map(function(t) {
            var n = i.filter(function(e) {
              return e.token === t;
            });
            if (n.length) return r.tail(n);
            var o = e.injector().getNative(t);
            if (f.isUndefined(o))
              throw new Error('Could not find Dependency Injection token: ' + l.stringify(t));
            return new u.Resolvable(
              t,
              function() {
                return o;
              },
              [],
              o
            );
          });
        }),
        t
      );
    })();
    e.ResolveContext = v;
    var $ = (function() {
      function t(t) {
        (this.context = t),
          (this.native = this.get(e.NATIVE_INJECTOR_TOKEN) || a.services.$injector);
      }
      return (
        (t.prototype.get = function(t) {
          var e = this.context.getResolvable(t);
          if (e) {
            if ('NOWAIT' === this.context.getPolicy(e).async) return e.get(this.context);
            if (!e.resolved)
              throw new Error('Resolvable async .get() not complete:' + l.stringify(e.token));
            return e.data;
          }
          return this.getNative(t);
        }),
        (t.prototype.getAsync = function(t) {
          var e = this.context.getResolvable(t);
          return e ? e.get(this.context) : a.services.$q.when(this.native.get(t));
        }),
        (t.prototype.getNative = function(t) {
          return this.native && this.native.get(t);
        }),
        t
      );
    })();
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(2),
      o = n(8),
      a = n(21),
      s = (function() {
        function t() {}
        return (
          (t.makeTargetState = function(t, e) {
            var n = r.tail(e).state;
            return new o.TargetState(t, n, e.map(i.prop('paramValues')).reduce(r.mergeR, {}), {});
          }),
          (t.buildPath = function(t) {
            var e = t.params();
            return t.$state().path.map(function(t) {
              return new a.PathNode(t).applyRawParams(e);
            });
          }),
          (t.buildToPath = function(e, n) {
            var r = t.buildPath(n);
            return n.options().inherit ? t.inheritParams(e, r, Object.keys(n.params())) : r;
          }),
          (t.applyViewConfigs = function(e, n, i) {
            n
              .filter(function(t) {
                return r.inArray(i, t.state);
              })
              .forEach(function(i) {
                var o = r.values(i.state.views || {}),
                  a = t.subPath(n, function(t) {
                    return t === i;
                  }),
                  s = o.map(function(t) {
                    return e.createViewConfig(a, t);
                  });
                i.views = s.reduce(r.unnestR, []);
              });
          }),
          (t.inheritParams = function(t, e, n) {
            void 0 === n && (n = []);
            var o = t
              .map(function(t) {
                return t.paramSchema;
              })
              .reduce(r.unnestR, [])
              .filter(function(t) {
                return !t.inherit;
              })
              .map(i.prop('id'));
            return e.map(function(e) {
              var s = r.extend({}, e && e.paramValues),
                u = r.pick(s, n);
              s = r.omit(s, n);
              var c,
                l,
                f,
                h = r.omit(
                  ((c = t),
                  (l = e.state),
                  (f = r.find(c, i.propEq('state', l))),
                  r.extend({}, f && f.paramValues) || {}),
                  o
                ),
                p = r.extend(s, h, u);
              return new a.PathNode(e.state).applyRawParams(p);
            });
          }),
          (t.treeChanges = function(e, n, r) {
            for (
              var i, o, a, s, u, c, l = Math.min(e.length, n.length), f = 0;
              f < l &&
              e[f].state !== r &&
              ((i = e[f]), (o = n[f]), i.equals(o, t.nonDynamicParams));

            )
              f++;
            (s = (a = e).slice(0, f)), (u = a.slice(f));
            var h = s.map(function(t, e) {
              var r = t.clone();
              return (r.paramValues = n[e].paramValues), r;
            });
            return (
              (c = n.slice(f)),
              {
                from: a,
                to: h.concat(c),
                retained: s,
                retainedWithToParams: h,
                exiting: u,
                entering: c
              }
            );
          }),
          (t.matching = function(t, e, n) {
            var i = !1;
            return r.arrayTuples(t, e).reduce(function(t, e) {
              var r = e[0],
                o = e[1];
              return (i = i || !r.equals(o, n)) ? t : t.concat(r);
            }, []);
          }),
          (t.equals = function(e, n, r) {
            return e.length === n.length && t.matching(e, n, r).length === e.length;
          }),
          (t.subPath = function(t, e) {
            var n = r.find(t, e),
              i = t.indexOf(n);
            return -1 === i ? void 0 : t.slice(0, i + 1);
          }),
          (t.nonDynamicParams = function(t) {
            return t.state.parameters({ inherit: !1 }).filter(function(t) {
              return !t.dynamic;
            });
          }),
          (t.paramValues = function(t) {
            return t.reduce(function(t, e) {
              return r.extend(t, e.paramValues);
            }, {});
          }),
          t
        );
      })();
    e.PathUtils = s;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(6),
      i = n(3),
      o = n(5),
      a = n(0),
      s = n(1),
      u = n(2),
      c = n(9),
      l = n(12),
      f = n(22),
      h = n(51),
      p = n(16),
      d = n(7),
      v = n(11),
      $ = n(15),
      m = n(10),
      g = u.prop('self'),
      y = (function() {
        function t(t, e, n) {
          var r = this;
          if (
            ((this._deferred = i.services.$q.defer()),
            (this.promise = this._deferred.promise),
            (this._registeredHooks = {}),
            (this._hookBuilder = new h.HookBuilder(this)),
            (this.isActive = function() {
              return r.router.globals.transition === r;
            }),
            (this.router = n),
            (this._targetState = e),
            !e.valid())
          )
            throw new Error(e.error());
          (this._options = a.extend({ current: u.val(this) }, e.options())),
            (this.$id = n.transitionService._transitionCount++);
          var o = p.PathUtils.buildToPath(t, e);
          (this._treeChanges = p.PathUtils.treeChanges(t, o, this._options.reloadState)),
            this.createTransitionHookRegFns();
          var s = this._hookBuilder.buildHooksForPhase(c.TransitionHookPhase.CREATE);
          l.TransitionHook.invokeHooks(s, function() {
            return null;
          }),
            this.applyViewConfigs(n);
        }
        return (
          (t.prototype.onBefore = function(t, e, n) {}),
          (t.prototype.onStart = function(t, e, n) {}),
          (t.prototype.onExit = function(t, e, n) {}),
          (t.prototype.onRetain = function(t, e, n) {}),
          (t.prototype.onEnter = function(t, e, n) {}),
          (t.prototype.onFinish = function(t, e, n) {}),
          (t.prototype.onSuccess = function(t, e, n) {}),
          (t.prototype.onError = function(t, e, n) {}),
          (t.prototype.createTransitionHookRegFns = function() {
            var t = this;
            this.router.transitionService._pluginapi
              ._getEvents()
              .filter(function(t) {
                return t.hookPhase !== c.TransitionHookPhase.CREATE;
              })
              .forEach(function(e) {
                return f.makeEvent(t, t.router.transitionService, e);
              });
          }),
          (t.prototype.getHooks = function(t) {
            return this._registeredHooks[t];
          }),
          (t.prototype.applyViewConfigs = function(t) {
            var e = this._treeChanges.entering.map(function(t) {
              return t.state;
            });
            p.PathUtils.applyViewConfigs(t.transitionService.$view, this._treeChanges.to, e);
          }),
          (t.prototype.$from = function() {
            return a.tail(this._treeChanges.from).state;
          }),
          (t.prototype.$to = function() {
            return a.tail(this._treeChanges.to).state;
          }),
          (t.prototype.from = function() {
            return this.$from().self;
          }),
          (t.prototype.to = function() {
            return this.$to().self;
          }),
          (t.prototype.targetState = function() {
            return this._targetState;
          }),
          (t.prototype.is = function(e) {
            return e instanceof t
              ? this.is({ to: e.$to().name, from: e.$from().name })
              : !(
                  (e.to && !f.matchState(this.$to(), e.to)) ||
                  (e.from && !f.matchState(this.$from(), e.from))
                );
          }),
          (t.prototype.params = function(t) {
            return (
              void 0 === t && (t = 'to'),
              Object.freeze(this._treeChanges[t].map(u.prop('paramValues')).reduce(a.mergeR, {}))
            );
          }),
          (t.prototype.injector = function(t, e) {
            void 0 === e && (e = 'to');
            var n = this._treeChanges[e];
            return (
              t &&
                (n = p.PathUtils.subPath(n, function(e) {
                  return e.state === t || e.state.name === t;
                })),
              new $.ResolveContext(n).injector()
            );
          }),
          (t.prototype.getResolveTokens = function(t) {
            return (
              void 0 === t && (t = 'to'), new $.ResolveContext(this._treeChanges[t]).getTokens()
            );
          }),
          (t.prototype.addResolvable = function(t, e) {
            void 0 === e && (e = ''), (t = u.is(v.Resolvable)(t) ? t : new v.Resolvable(t));
            var n = 'string' == typeof e ? e : e.name,
              r = this._treeChanges.to,
              i = a.find(r, function(t) {
                return t.state.name === n;
              });
            new $.ResolveContext(r).addResolvables([t], i.state);
          }),
          (t.prototype.redirectedFrom = function() {
            return this._options.redirectedFrom || null;
          }),
          (t.prototype.originalTransition = function() {
            var t = this.redirectedFrom();
            return (t && t.originalTransition()) || this;
          }),
          (t.prototype.options = function() {
            return this._options;
          }),
          (t.prototype.entering = function() {
            return a.map(this._treeChanges.entering, u.prop('state')).map(g);
          }),
          (t.prototype.exiting = function() {
            return a
              .map(this._treeChanges.exiting, u.prop('state'))
              .map(g)
              .reverse();
          }),
          (t.prototype.retained = function() {
            return a.map(this._treeChanges.retained, u.prop('state')).map(g);
          }),
          (t.prototype.views = function(t, e) {
            void 0 === t && (t = 'entering');
            var n = this._treeChanges[t];
            return (n = e ? n.filter(u.propEq('state', e)) : n)
              .map(u.prop('views'))
              .filter(a.identity)
              .reduce(a.unnestR, []);
          }),
          (t.prototype.treeChanges = function(t) {
            return t ? this._treeChanges[t] : this._treeChanges;
          }),
          (t.prototype.redirect = function(t) {
            for (var e = 1, n = this; null != (n = n.redirectedFrom()); )
              if (++e > 20) throw new Error('Too many consecutive Transition redirects (20+)');
            var r = { redirectedFrom: this, source: 'redirect' };
            'url' === this.options().source &&
              !1 !== t.options().location &&
              (r.location = 'replace');
            var i = a.extend({}, this.options(), t.options(), r);
            t = t.withOptions(i, !0);
            var o,
              s = this.router.transitionService.create(this._treeChanges.from, t),
              c = this._treeChanges.entering,
              l = s._treeChanges.entering;
            return (
              p.PathUtils.matching(l, c, p.PathUtils.nonDynamicParams)
                .filter(
                  u.not(
                    ((o = t.options().reloadState),
                    function(t) {
                      return o && t.state.includes[o.name];
                    })
                  )
                )
                .forEach(function(t, e) {
                  t.resolvables = c[e].resolvables;
                }),
              s
            );
          }),
          (t.prototype._changedParams = function() {
            var t = this._treeChanges;
            if (
              !this._options.reload &&
              (!t.exiting.length &&
                !t.entering.length &&
                t.to.length === t.from.length &&
                !a
                  .arrayTuples(t.to, t.from)
                  .map(function(t) {
                    return t[0].state !== t[1].state;
                  })
                  .reduce(a.anyTrueR, !1))
            ) {
              var e = t.to.map(function(t) {
                  return t.paramSchema;
                }),
                n = [t.to, t.from].map(function(t) {
                  return t.map(function(t) {
                    return t.paramValues;
                  });
                }),
                r = n[0],
                i = n[1];
              return a
                .arrayTuples(e, r, i)
                .map(function(t) {
                  var e = t[0],
                    n = t[1],
                    r = t[2];
                  return d.Param.changed(e, n, r);
                })
                .reduce(a.unnestR, []);
            }
          }),
          (t.prototype.dynamic = function() {
            var t = this._changedParams();
            return (
              !!t &&
              t
                .map(function(t) {
                  return t.dynamic;
                })
                .reduce(a.anyTrueR, !1)
            );
          }),
          (t.prototype.ignored = function() {
            return !!this._ignoredReason();
          }),
          (t.prototype._ignoredReason = function() {
            var t = this.router.globals.transition,
              e = this._options.reloadState,
              n = function(t, n) {
                if (t.length !== n.length) return !1;
                var r = p.PathUtils.matching(t, n);
                return (
                  t.length ===
                  r.filter(function(t) {
                    return !e || !t.state.includes[e.name];
                  }).length
                );
              },
              r = this.treeChanges(),
              i = t && t.treeChanges();
            return i && n(i.to, r.to) && n(i.exiting, r.exiting)
              ? 'SameAsPending'
              : 0 === r.exiting.length && 0 === r.entering.length && n(r.from, r.to)
                ? 'SameAsCurrent'
                : void 0;
          }),
          (t.prototype.run = function() {
            var t = this,
              e = l.TransitionHook.runAllHooks,
              n = function(e) {
                return t._hookBuilder.buildHooksForPhase(e);
              },
              o = n(c.TransitionHookPhase.BEFORE);
            return (
              l.TransitionHook.invokeHooks(o, function() {
                var e = t.router.globals;
                return (
                  (e.lastStartedTransitionId = t.$id),
                  (e.transition = t),
                  e.transitionHistory.enqueue(t),
                  r.trace.traceTransitionStart(t),
                  i.services.$q.when(void 0)
                );
              })
                .then(function() {
                  var t = n(c.TransitionHookPhase.RUN);
                  return l.TransitionHook.invokeHooks(t, function() {
                    return i.services.$q.when(void 0);
                  });
                })
                .then(
                  function() {
                    r.trace.traceSuccess(t.$to(), t),
                      (t.success = !0),
                      t._deferred.resolve(t.to()),
                      e(n(c.TransitionHookPhase.SUCCESS));
                  },
                  function(i) {
                    r.trace.traceError(i, t),
                      (t.success = !1),
                      t._deferred.reject(i),
                      (t._error = i),
                      e(n(c.TransitionHookPhase.ERROR));
                  }
                ),
              this.promise
            );
          }),
          (t.prototype.valid = function() {
            return !this.error() || void 0 !== this.success;
          }),
          (t.prototype.abort = function() {
            s.isUndefined(this.success) && (this._aborted = !0);
          }),
          (t.prototype.error = function() {
            var t = this.$to();
            if (t.self.abstract)
              return m.Rejection.invalid("Cannot transition to abstract state '" + t.name + "'");
            var e = t.parameters(),
              n = this.params(),
              r = e.filter(function(t) {
                return !t.validates(n[t.id]);
              });
            if (r.length) {
              var i = r
                  .map(function(t) {
                    return '[' + t.id + ':' + o.stringify(n[t.id]) + ']';
                  })
                  .join(', '),
                a = "The following parameter values are not valid for state '" + t.name + "': " + i;
              return m.Rejection.invalid(a);
            }
            return !1 === this.success ? this._error : void 0;
          }),
          (t.prototype.toString = function() {
            var t = this.from(),
              e = this.to(),
              n = function(t) {
                return null !== t['#'] && void 0 !== t['#'] ? t : a.omit(t, ['#']);
              };
            return (
              'Transition#' +
              this.$id +
              "( '" +
              (s.isObject(t) ? t.name : t) +
              "'" +
              o.stringify(
                n(this._treeChanges.from.map(u.prop('paramValues')).reduce(a.mergeR, {}))
              ) +
              ' -> ' +
              (this.valid() ? '' : '(X) ') +
              "'" +
              (s.isObject(e) ? e.name : e) +
              "'" +
              o.stringify(n(this.params())) +
              ' )'
            );
          }),
          (t.diToken = t),
          t
        );
      })();
    e.Transition = y;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(4);
    (e.keyValsToObjectR = function(t, e) {
      var n = e[0],
        i = e[1];
      return (
        t.hasOwnProperty(n) ? (r.isArray(t[n]) ? t[n].push(i) : (t[n] = [t[n], i])) : (t[n] = i), t
      );
    }),
      (e.getParams = function(t) {
        return t
          .split('&')
          .filter(r.identity)
          .map(r.splitEqual)
          .reduce(e.keyValsToObjectR, {});
      }),
      (e.parseUrl = function(t) {
        var e = function(t) {
            return t || '';
          },
          n = r.splitHash(t).map(e),
          i = n[0],
          o = n[1],
          a = r.splitQuery(i).map(e);
        return { path: a[0], search: a[1], hash: o, url: t };
      }),
      (e.buildUrl = function(t) {
        var e = t.path(),
          n = t.search(),
          i = t.hash(),
          o = Object.keys(n)
            .map(function(t) {
              var e = n[t];
              return (r.isArray(e) ? e : [e]).map(function(e) {
                return t + '=' + e;
              });
            })
            .reduce(r.unnestR, [])
            .join('&');
        return e + (o ? '?' + o : '') + (i ? '#' + i : '');
      }),
      (e.locationPluginFactory = function(t, e, n, r) {
        return function(i) {
          var o = (i.locationService = new n(i)),
            a = (i.locationConfig = new r(i, e));
          return {
            name: t,
            service: o,
            configuration: a,
            dispose: function(t) {
              t.dispose(o), t.dispose(a);
            }
          };
        };
      });
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(9),
      i = n(17),
      o = n(22),
      a = n(70),
      s = n(69),
      u = n(68),
      c = n(67),
      l = n(66),
      f = n(65),
      h = n(64),
      p = n(34),
      d = n(33),
      v = n(12),
      $ = n(1),
      m = n(0),
      g = n(2),
      y = n(63),
      b = n(62);
    e.defaultTransOpts = {
      location: !0,
      relative: null,
      inherit: !1,
      notify: !0,
      reload: !1,
      custom: {},
      current: function() {
        return null;
      },
      source: 'unknown'
    };
    var w = (function() {
      function t(t) {
        (this._transitionCount = 0),
          (this._eventTypes = []),
          (this._registeredHooks = {}),
          (this._criteriaPaths = {}),
          (this._router = t),
          (this.$view = t.viewService),
          (this._deregisterHookFns = {}),
          (this._pluginapi = m.createProxyFunctions(g.val(this), {}, g.val(this), [
            '_definePathType',
            '_defineEvent',
            '_getPathTypes',
            '_getEvents',
            'getHooks'
          ])),
          this._defineCorePaths(),
          this._defineCoreEvents(),
          this._registerCoreTransitionHooks(),
          t.globals.successfulTransitions.onEvict(a.treeChangesCleanup);
      }
      return (
        (t.prototype.onCreate = function(t, e, n) {}),
        (t.prototype.onBefore = function(t, e, n) {}),
        (t.prototype.onStart = function(t, e, n) {}),
        (t.prototype.onExit = function(t, e, n) {}),
        (t.prototype.onRetain = function(t, e, n) {}),
        (t.prototype.onEnter = function(t, e, n) {}),
        (t.prototype.onFinish = function(t, e, n) {}),
        (t.prototype.onSuccess = function(t, e, n) {}),
        (t.prototype.onError = function(t, e, n) {}),
        (t.prototype.dispose = function(t) {
          m.values(this._registeredHooks).forEach(function(t) {
            return t.forEach(function(e) {
              (e._deregistered = !0), m.removeFrom(t, e);
            });
          });
        }),
        (t.prototype.create = function(t, e) {
          return new i.Transition(t, e, this._router);
        }),
        (t.prototype._defineCoreEvents = function() {
          var t = r.TransitionHookPhase,
            e = v.TransitionHook,
            n = this._criteriaPaths;
          this._defineEvent(
            'onCreate',
            t.CREATE,
            0,
            n.to,
            !1,
            e.LOG_REJECTED_RESULT,
            e.THROW_ERROR,
            !0
          ),
            this._defineEvent('onBefore', t.BEFORE, 0, n.to),
            this._defineEvent('onStart', t.RUN, 0, n.to),
            this._defineEvent('onExit', t.RUN, 100, n.exiting, !0),
            this._defineEvent('onRetain', t.RUN, 200, n.retained),
            this._defineEvent('onEnter', t.RUN, 300, n.entering),
            this._defineEvent('onFinish', t.RUN, 400, n.to),
            this._defineEvent(
              'onSuccess',
              t.SUCCESS,
              0,
              n.to,
              !1,
              e.LOG_REJECTED_RESULT,
              e.LOG_ERROR,
              !0
            ),
            this._defineEvent(
              'onError',
              t.ERROR,
              0,
              n.to,
              !1,
              e.LOG_REJECTED_RESULT,
              e.LOG_ERROR,
              !0
            );
        }),
        (t.prototype._defineCorePaths = function() {
          var t = r.TransitionHookScope.STATE,
            e = r.TransitionHookScope.TRANSITION;
          this._definePathType('to', e),
            this._definePathType('from', e),
            this._definePathType('exiting', t),
            this._definePathType('retained', t),
            this._definePathType('entering', t);
        }),
        (t.prototype._defineEvent = function(t, e, n, r, i, a, s, u) {
          void 0 === i && (i = !1),
            void 0 === a && (a = v.TransitionHook.HANDLE_RESULT),
            void 0 === s && (s = v.TransitionHook.REJECT_ERROR),
            void 0 === u && (u = !1);
          var c = new d.TransitionEventType(t, e, n, r, i, a, s, u);
          this._eventTypes.push(c), o.makeEvent(this, this, c);
        }),
        (t.prototype._getEvents = function(t) {
          return ($.isDefined(t)
            ? this._eventTypes.filter(function(e) {
                return e.hookPhase === t;
              })
            : this._eventTypes.slice()
          ).sort(function(t, e) {
            var n = t.hookPhase - e.hookPhase;
            return 0 === n ? t.hookOrder - e.hookOrder : n;
          });
        }),
        (t.prototype._definePathType = function(t, e) {
          this._criteriaPaths[t] = { name: t, scope: e };
        }),
        (t.prototype._getPathTypes = function() {
          return this._criteriaPaths;
        }),
        (t.prototype.getHooks = function(t) {
          return this._registeredHooks[t];
        }),
        (t.prototype._registerCoreTransitionHooks = function() {
          var t = this._deregisterHookFns;
          (t.addCoreResolves = a.registerAddCoreResolvables(this)),
            (t.ignored = y.registerIgnoredTransitionHook(this)),
            (t.invalid = b.registerInvalidTransitionHook(this)),
            (t.redirectTo = s.registerRedirectToHook(this)),
            (t.onExit = u.registerOnExitHook(this)),
            (t.onRetain = u.registerOnRetainHook(this)),
            (t.onEnter = u.registerOnEnterHook(this)),
            (t.eagerResolve = c.registerEagerResolvePath(this)),
            (t.lazyResolve = c.registerLazyResolveState(this)),
            (t.resolveAll = c.registerResolveRemaining(this)),
            (t.loadViews = l.registerLoadEnteringViews(this)),
            (t.activateViews = l.registerActivateViews(this)),
            (t.updateGlobals = f.registerUpdateGlobalState(this)),
            (t.updateUrl = h.registerUpdateUrl(this)),
            (t.lazyLoad = p.registerLazyLoadHook(this));
        }),
        t
      );
    })();
    e.TransitionService = w;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(1),
      o = (function() {
        function t(t) {
          (this.pattern = /.*/), (this.inherit = !0), r.extend(this, t);
        }
        return (
          (t.prototype.is = function(t, e) {
            return !0;
          }),
          (t.prototype.encode = function(t, e) {
            return t;
          }),
          (t.prototype.decode = function(t, e) {
            return t;
          }),
          (t.prototype.equals = function(t, e) {
            return t == e;
          }),
          (t.prototype.$subPattern = function() {
            var t = this.pattern.toString();
            return t.substr(1, t.length - 2);
          }),
          (t.prototype.toString = function() {
            return '{ParamType:' + this.name + '}';
          }),
          (t.prototype.$normalize = function(t) {
            return this.is(t) ? t : this.decode(t);
          }),
          (t.prototype.$asArray = function(t, e) {
            if (!t) return this;
            if ('auto' === t && !e)
              throw new Error("'auto' array mode is for query parameters only");
            return new function(t, e) {
              var n = this;
              function o(t) {
                return i.isArray(t) ? t : i.isDefined(t) ? [t] : [];
              }
              function a(t, n) {
                return function(a) {
                  if (i.isArray(a) && 0 === a.length) return a;
                  var s = o(a),
                    u = r.map(s, t);
                  return !0 === n
                    ? 0 ===
                        r.filter(u, function(t) {
                          return !t;
                        }).length
                    : (function(t) {
                        switch (t.length) {
                          case 0:
                            return;
                          case 1:
                            return 'auto' === e ? t[0] : t;
                          default:
                            return t;
                        }
                      })(u);
                };
              }
              function s(t) {
                return function(e, n) {
                  var r = o(e),
                    i = o(n);
                  if (r.length !== i.length) return !1;
                  for (var a = 0; a < r.length; a++) if (!t(r[a], i[a])) return !1;
                  return !0;
                };
              }
              ['encode', 'decode', 'equals', '$normalize'].forEach(function(e) {
                var r = t[e].bind(t),
                  i = 'equals' === e ? s : a;
                n[e] = i(r);
              }),
                r.extend(this, {
                  dynamic: t.dynamic,
                  name: t.name,
                  pattern: t.pattern,
                  inherit: t.inherit,
                  is: a(t.is.bind(t), !0),
                  $arrayMode: e
                });
            }(this, t);
          }),
          t
        );
      })();
    e.ParamType = o;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(2),
      o = n(7),
      a = (function() {
        function t(e) {
          if (e instanceof t) {
            var n = e;
            (this.state = n.state),
              (this.paramSchema = n.paramSchema.slice()),
              (this.paramValues = r.extend({}, n.paramValues)),
              (this.resolvables = n.resolvables.slice()),
              (this.views = n.views && n.views.slice());
          } else {
            var i = e;
            (this.state = i),
              (this.paramSchema = i.parameters({ inherit: !1 })),
              (this.paramValues = {}),
              (this.resolvables = i.resolvables.map(function(t) {
                return t.clone();
              }));
          }
        }
        return (
          (t.prototype.clone = function() {
            return new t(this);
          }),
          (t.prototype.applyRawParams = function(t) {
            return (
              (this.paramValues = this.paramSchema.reduce(function(e, n) {
                return r.applyPairs(e, [(i = n).id, i.value(t[i.id])]);
                var i;
              }, {})),
              this
            );
          }),
          (t.prototype.parameter = function(t) {
            return r.find(this.paramSchema, i.propEq('id', t));
          }),
          (t.prototype.equals = function(t, e) {
            var n = this.diff(t, e);
            return n && 0 === n.length;
          }),
          (t.prototype.diff = function(t, e) {
            if (this.state !== t.state) return !1;
            var n = e ? e(this) : this.paramSchema;
            return o.Param.changed(n, this.paramValues, t.paramValues);
          }),
          (t.clone = function(t) {
            return t.clone();
          }),
          t
        );
      })();
    e.PathNode = a;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(4),
      i = n(9);
    function o(t, e) {
      var n = r.isString(e) ? [e] : e;
      return !!(r.isFunction(n)
        ? n
        : function(t) {
            for (var e = n, i = 0; i < e.length; i++) {
              var o = new r.Glob(e[i]);
              if ((o && o.matches(t.name)) || (!o && e[i] === t.name)) return !0;
            }
            return !1;
          })(t);
    }
    e.matchState = o;
    var a = (function() {
      function t(t, e, n, r, i, o) {
        void 0 === o && (o = {}),
          (this.tranSvc = t),
          (this.eventType = e),
          (this.callback = n),
          (this.matchCriteria = r),
          (this.removeHookFromRegistry = i),
          (this.invokeCount = 0),
          (this._deregistered = !1),
          (this.priority = o.priority || 0),
          (this.bind = o.bind || null),
          (this.invokeLimit = o.invokeLimit);
      }
      return (
        (t.prototype._matchingNodes = function(t, e) {
          if (!0 === e) return t;
          var n = t.filter(function(t) {
            return o(t.state, e);
          });
          return n.length ? n : null;
        }),
        (t.prototype._getDefaultMatchCriteria = function() {
          return r.mapObj(this.tranSvc._pluginapi._getPathTypes(), function() {
            return !0;
          });
        }),
        (t.prototype._getMatchingNodes = function(t) {
          var e = this,
            n = r.extend(this._getDefaultMatchCriteria(), this.matchCriteria);
          return r.values(this.tranSvc._pluginapi._getPathTypes()).reduce(function(o, a) {
            var s = a.scope === i.TransitionHookScope.STATE,
              u = t[a.name] || [],
              c = s ? u : [r.tail(u)];
            return (o[a.name] = e._matchingNodes(c, n[a.name])), o;
          }, {});
        }),
        (t.prototype.matches = function(t) {
          var e = this._getMatchingNodes(t);
          return r.values(e).every(r.identity) ? e : null;
        }),
        (t.prototype.deregister = function() {
          this.removeHookFromRegistry(this), (this._deregistered = !0);
        }),
        t
      );
    })();
    (e.RegisteredHook = a),
      (e.makeEvent = function(t, e, n) {
        var i = ((t._registeredHooks = t._registeredHooks || {})[n.name] = []),
          o = r.removeFrom(i);
        function s(t, r, s) {
          void 0 === s && (s = {});
          var u = new a(e, n, r, t, o, s);
          return i.push(u), u.deregister.bind(u);
        }
        return (t[n.name] = s), s;
      });
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = (function() {
        function t(t, e) {
          void 0 === t && (t = []),
            void 0 === e && (e = null),
            (this._items = t),
            (this._limit = e),
            (this._evictListeners = []),
            (this.onEvict = r.pushTo(this._evictListeners));
        }
        return (
          (t.prototype.enqueue = function(t) {
            var e = this._items;
            return e.push(t), this._limit && e.length > this._limit && this.evict(), t;
          }),
          (t.prototype.evict = function() {
            var t = this._items.shift();
            return (
              this._evictListeners.forEach(function(e) {
                return e(t);
              }),
              t
            );
          }),
          (t.prototype.dequeue = function() {
            if (this.size()) return this._items.splice(0, 1)[0];
          }),
          (t.prototype.clear = function() {
            var t = this._items;
            return (this._items = []), t;
          }),
          (t.prototype.size = function() {
            return this._items.length;
          }),
          (t.prototype.remove = function(t) {
            var e = this._items.indexOf(t);
            return e > -1 && this._items.splice(e, 1)[0];
          }),
          (t.prototype.peekTail = function() {
            return this._items[this._items.length - 1];
          }),
          (t.prototype.peekHead = function() {
            if (this.size()) return this._items[0];
          }),
          t
        );
      })();
    e.Queue = i;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = (function() {
      function t(t) {
        (this.text = t), (this.glob = t.split('.'));
        var e = this.text
          .split('.')
          .map(function(t) {
            return '**' === t ? '(?:|(?:\\.[^.]*)*)' : '*' === t ? '\\.[^.]*' : '\\.' + t;
          })
          .join('');
        this.regexp = new RegExp('^' + e + '$');
      }
      return (
        (t.is = function(t) {
          return !!/[!,*]+/.exec(t);
        }),
        (t.fromString = function(e) {
          return t.is(e) ? new t(e) : null;
        }),
        (t.prototype.matches = function(t) {
          return this.regexp.test('.' + t);
        }),
        t
      );
    })();
    e.Glob = r;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(2),
      o = n(24),
      a = n(1),
      s = (function() {
        function t(e) {
          return t.create(e || {});
        }
        return (
          (t.create = function(e) {
            e = t.isStateClass(e) ? new e() : e;
            var n = r.inherit(r.inherit(e, t.prototype));
            return (
              (e.$$state = function() {
                return n;
              }),
              (n.self = e),
              (n.__stateObjectCache = { nameGlob: o.Glob.fromString(n.name) }),
              n
            );
          }),
          (t.prototype.is = function(t) {
            return this === t || this.self === t || this.fqn() === t;
          }),
          (t.prototype.fqn = function() {
            if (!(this.parent && this.parent instanceof this.constructor)) return this.name;
            var t = this.parent.fqn();
            return t ? t + '.' + this.name : this.name;
          }),
          (t.prototype.root = function() {
            return (this.parent && this.parent.root()) || this;
          }),
          (t.prototype.parameters = function(t) {
            return (
              ((t = r.defaults(t, { inherit: !0, matchingKeys: null })).inherit &&
                this.parent &&
                this.parent.parameters()) ||
              []
            )
              .concat(r.values(this.params))
              .filter(function(e) {
                return !t.matchingKeys || t.matchingKeys.hasOwnProperty(e.id);
              });
          }),
          (t.prototype.parameter = function(t, e) {
            return (
              void 0 === e && (e = {}),
              (this.url && this.url.parameter(t, e)) ||
                r.find(r.values(this.params), i.propEq('id', t)) ||
                (e.inherit && this.parent && this.parent.parameter(t))
            );
          }),
          (t.prototype.toString = function() {
            return this.fqn();
          }),
          (t.isStateClass = function(t) {
            return a.isFunction(t) && !0 === t.__uiRouterState;
          }),
          (t.isState = function(t) {
            return a.isObject(t.__stateObjectCache);
          }),
          t
        );
      })();
    e.StateObject = s;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(1),
      i = (function() {
        function t(t, e) {
          void 0 === e && (e = !1),
            (this._isHtml5 = e),
            (this._baseHref = void 0),
            (this._hashPrefix = '');
        }
        return (
          (t.prototype.port = function() {
            return location.port ? Number(location.port) : 'https' === this.protocol() ? 443 : 80;
          }),
          (t.prototype.protocol = function() {
            return location.protocol.replace(/:/g, '');
          }),
          (t.prototype.host = function() {
            return location.hostname;
          }),
          (t.prototype.html5Mode = function() {
            return this._isHtml5;
          }),
          (t.prototype.hashPrefix = function(t) {
            return r.isDefined(t) ? (this._hashPrefix = t) : this._hashPrefix;
          }),
          (t.prototype.baseHref = function(t) {
            return r.isDefined(t)
              ? (this._baseHref = t)
              : r.isDefined(this._baseHref)
                ? this._baseHref
                : this.applyDocumentBaseHref();
          }),
          (t.prototype.applyDocumentBaseHref = function() {
            var t = document.getElementsByTagName('base')[0];
            return (this._baseHref = t
              ? t.href.substr(location.origin.length)
              : location.pathname || '/');
          }),
          (t.prototype.dispose = function() {}),
          t
        );
      })();
    e.BrowserLocationConfig = i;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(1),
      i = n(0),
      o = (function() {
        return function() {
          var t = this;
          (this.dispose = i.noop),
            (this._baseHref = ''),
            (this._port = 80),
            (this._protocol = 'http'),
            (this._host = 'localhost'),
            (this._hashPrefix = ''),
            (this.port = function() {
              return t._port;
            }),
            (this.protocol = function() {
              return t._protocol;
            }),
            (this.host = function() {
              return t._host;
            }),
            (this.baseHref = function() {
              return t._baseHref;
            }),
            (this.html5Mode = function() {
              return !1;
            }),
            (this.hashPrefix = function(e) {
              return r.isDefined(e) ? (t._hashPrefix = e) : t._hashPrefix;
            });
        };
      })();
    e.MemoryLocationConfig = o;
  },
  function(t, e, n) {
    'use strict';
    var r,
      i =
        (this && this.__extends) ||
        ((r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          }),
        function(t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var o = n(13),
      a = n(4),
      s = (function(t) {
        function e(e) {
          var n = t.call(this, e, !0) || this;
          return (
            (n._config = e.urlService.config),
            a.root.addEventListener('popstate', n._listener, !1),
            n
          );
        }
        return (
          i(e, t),
          (e.prototype._getBasePrefix = function() {
            return a.stripLastPathElement(this._config.baseHref());
          }),
          (e.prototype._get = function() {
            var t = this._location,
              e = t.pathname,
              n = t.hash,
              r = t.search;
            (r = a.splitQuery(r)[1]), (n = a.splitHash(n)[1]);
            var i = this._getBasePrefix(),
              o = e === this._config.baseHref(),
              s = e.substr(0, i.length) === i;
            return (
              (e = o ? '/' : s ? e.substring(i.length) : e) +
              (r ? '?' + r : '') +
              (n ? '#' + n : '')
            );
          }),
          (e.prototype._set = function(t, e, n, r) {
            var i = this._getBasePrefix(),
              o = n && '/' !== n[0] ? '/' : '',
              a = '' === n || '/' === n ? this._config.baseHref() : i + o + n;
            r ? this._history.replaceState(t, e, a) : this._history.pushState(t, e, a);
          }),
          (e.prototype.dispose = function(e) {
            t.prototype.dispose.call(this, e),
              a.root.removeEventListener('popstate', this._listener);
          }),
          e
        );
      })(o.BaseLocationServices);
    e.PushStateLocationService = s;
  },
  function(t, e, n) {
    'use strict';
    var r,
      i =
        (this && this.__extends) ||
        ((r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          }),
        function(t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var o = (function(t) {
      function e(e) {
        return t.call(this, e, !0) || this;
      }
      return (
        i(e, t),
        (e.prototype._get = function() {
          return this._url;
        }),
        (e.prototype._set = function(t, e, n, r) {
          this._url = n;
        }),
        e
      );
    })(n(13).BaseLocationServices);
    e.MemoryLocationService = o;
  },
  function(t, e, n) {
    'use strict';
    var r,
      i =
        (this && this.__extends) ||
        ((r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          }),
        function(t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, '__esModule', { value: !0 });
    var o = n(4),
      a = (function(t) {
        function e(e) {
          var n = t.call(this, e, !1) || this;
          return o.root.addEventListener('hashchange', n._listener, !1), n;
        }
        return (
          i(e, t),
          (e.prototype._get = function() {
            return o.trimHashVal(this._location.hash);
          }),
          (e.prototype._set = function(t, e, n, r) {
            this._location.hash = n;
          }),
          (e.prototype.dispose = function(e) {
            t.prototype.dispose.call(this, e),
              o.root.removeEventListener('hashchange', this._listener);
          }),
          e
        );
      })(n(13).BaseLocationServices);
    e.HashLocationService = a;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(4),
      i = {},
      o = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      a = /([^\s,]+)/g;
    e.$injector = {
      get: function(t) {
        return i[t];
      },
      has: function(t) {
        return null != e.$injector.get(t);
      },
      invoke: function(t, n, o) {
        var a = r.extend({}, i, o || {}),
          s = e.$injector.annotate(t),
          u = r.assertPredicate(
            function(t) {
              return a.hasOwnProperty(t);
            },
            function(t) {
              return "DI can't find injectable: '" + t + "'";
            }
          ),
          c = s.filter(u).map(function(t) {
            return a[t];
          });
        return r.isFunction(t) ? t.apply(n, c) : t.slice(-1)[0].apply(n, c);
      },
      annotate: function(t) {
        if (!r.isInjectable(t)) throw new Error('Not an injectable function: ' + t);
        if (t && t.$inject) return t.$inject;
        if (r.isArray(t)) return t.slice(0, -1);
        var e = t.toString().replace(o, '');
        return e.slice(e.indexOf('(') + 1, e.indexOf(')')).match(a) || [];
      }
    };
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(4);
    e.$q = {
      when: function(t) {
        return new Promise(function(e, n) {
          return e(t);
        });
      },
      reject: function(t) {
        return new Promise(function(e, n) {
          n(t);
        });
      },
      defer: function() {
        var t = {};
        return (
          (t.promise = new Promise(function(e, n) {
            (t.resolve = e), (t.reject = n);
          })),
          t
        );
      },
      all: function(t) {
        if (r.isArray(t)) return Promise.all(t);
        if (r.isObject(t)) {
          var n = Object.keys(t).map(function(e) {
            return t[e].then(function(t) {
              return { key: e, val: t };
            });
          });
          return e.$q.all(n).then(function(t) {
            return t.reduce(function(t, e) {
              return (t[e.key] = e.val), t;
            }, {});
          });
        }
      }
    };
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(12),
      i = (function() {
        return function(t, e, n, i, o, a, s, u) {
          void 0 === o && (o = !1),
            void 0 === a && (a = r.TransitionHook.HANDLE_RESULT),
            void 0 === s && (s = r.TransitionHook.REJECT_ERROR),
            void 0 === u && (u = !1),
            (this.name = t),
            (this.hookPhase = e),
            (this.hookOrder = n),
            (this.criteriaMatchPath = i),
            (this.reverseSort = o),
            (this.getResultHandler = a),
            (this.getErrorHandler = s),
            (this.synchronous = u);
        };
      })();
    e.TransitionEventType = i;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(3),
      i = function(t) {
        var e = t.router;
        var n = t
          .entering()
          .filter(function(t) {
            return !!t.$$state().lazyLoad;
          })
          .map(function(e) {
            return o(t, e);
          });
        return r.services.$q.all(n).then(function() {
          if ('url' !== t.originalTransition().options().source) {
            var n = t.targetState();
            return e.stateService.target(n.identifier(), n.params(), n.options());
          }
          var r = e.urlService,
            i = r.match(r.parts()),
            o = i && i.rule;
          if (o && 'STATE' === o.type) {
            var a = o.state,
              s = i.match;
            return e.stateService.target(a, s, t.options());
          }
          e.urlService.sync();
        });
      };
    function o(t, e) {
      var n = e.$$state().lazyLoad,
        i = n._promise;
      if (!i) {
        i = n._promise = r.services.$q
          .when(n(t, e))
          .then(function(e) {
            e &&
              Array.isArray(e.states) &&
              e.states.forEach(function(e) {
                return t.router.stateRegistry.register(e);
              });
            return e;
          })
          .then(
            function(t) {
              return delete e.lazyLoad, delete e.$$state().lazyLoad, delete n._promise, t;
            },
            function(t) {
              return delete n._promise, r.services.$q.reject(t);
            }
          );
      }
      return i;
    }
    (e.registerLazyLoadHook = function(t) {
      return t.onBefore(
        {
          entering: function(t) {
            return !!t.lazyLoad;
          }
        },
        i
      );
    }),
      (e.lazyLoadState = o);
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(3),
      i = n(0),
      o = function(t) {
        return t.reduce(
          function(t, e) {
            return (t[e] = r.notImplemented(e)), t;
          },
          { dispose: i.noop }
        );
      },
      a = ['url', 'path', 'search', 'hash', 'onChange'],
      s = ['port', 'protocol', 'host', 'baseHref', 'html5Mode', 'hashPrefix'],
      u = ['type', 'caseInsensitive', 'strictMode', 'defaultSquashPolicy'],
      c = ['sort', 'when', 'initial', 'otherwise', 'rules', 'rule', 'removeRule'],
      l = ['deferIntercept', 'listen', 'sync', 'match'],
      f = (function() {
        function t(t, e) {
          void 0 === e && (e = !0), (this.router = t), (this.rules = {}), (this.config = {});
          var n = function() {
            return t.locationService;
          };
          i.createProxyFunctions(n, this, n, a, e);
          var r = function() {
            return t.locationConfig;
          };
          i.createProxyFunctions(r, this.config, r, s, e);
          var o = function() {
            return t.urlMatcherFactory;
          };
          i.createProxyFunctions(o, this.config, o, u);
          var f = function() {
            return t.urlRouter;
          };
          i.createProxyFunctions(f, this.rules, f, c), i.createProxyFunctions(f, this, f, l);
        }
        return (
          (t.prototype.url = function(t, e, n) {}),
          (t.prototype.path = function() {}),
          (t.prototype.search = function() {}),
          (t.prototype.hash = function() {}),
          (t.prototype.onChange = function(t) {}),
          (t.prototype.parts = function() {
            return { path: this.path(), search: this.search(), hash: this.hash() };
          }),
          (t.prototype.dispose = function() {}),
          (t.prototype.sync = function(t) {}),
          (t.prototype.listen = function(t) {}),
          (t.prototype.deferIntercept = function(t) {}),
          (t.prototype.match = function(t) {}),
          (t.locationServiceStub = o(a)),
          (t.locationConfigStub = o(s)),
          t
        );
      })();
    e.UrlService = f;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(48),
      i = n(23),
      o = (function() {
        function t() {
          (this.params = new r.StateParams()),
            (this.lastStartedTransitionId = -1),
            (this.transitionHistory = new i.Queue([], 1)),
            (this.successfulTransitions = new i.Queue([], 1));
        }
        return (
          (t.prototype.dispose = function() {
            this.transitionHistory.clear(),
              this.successfulTransitions.clear(),
              (this.transition = null);
          }),
          t
        );
      })();
    e.UIRouterGlobals = o;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(2),
      o = n(1),
      a = n(6),
      s = (function() {
        function t() {
          var t = this;
          (this._uiViews = []),
            (this._viewConfigs = []),
            (this._viewConfigFactories = {}),
            (this._listeners = []),
            (this._pluginapi = {
              _rootViewContext: this._rootViewContext.bind(this),
              _viewConfigFactory: this._viewConfigFactory.bind(this),
              _registeredUIViews: function() {
                return t._uiViews;
              },
              _activeViewConfigs: function() {
                return t._viewConfigs;
              },
              _onSync: function(e) {
                return (
                  t._listeners.push(e),
                  function() {
                    return r.removeFrom(t._listeners, e);
                  }
                );
              }
            });
        }
        return (
          (t.normalizeUIViewTarget = function(t, e) {
            void 0 === e && (e = '');
            var n = e.split('@'),
              r = n[0] || '$default',
              i = o.isString(n[1]) ? n[1] : '^',
              a = /^(\^(?:\.\^)*)\.(.*$)/.exec(r);
            a && ((i = a[1]), (r = a[2])), '!' === r.charAt(0) && ((r = r.substr(1)), (i = ''));
            /^(\^(?:\.\^)*)$/.exec(i)
              ? (i = i.split('.').reduce(function(t, e) {
                  return t.parent;
                }, t).name)
              : '.' === i && (i = t.name);
            return { uiViewName: r, uiViewContextAnchor: i };
          }),
          (t.prototype._rootViewContext = function(t) {
            return (this._rootContext = t || this._rootContext);
          }),
          (t.prototype._viewConfigFactory = function(t, e) {
            this._viewConfigFactories[t] = e;
          }),
          (t.prototype.createViewConfig = function(t, e) {
            var n = this._viewConfigFactories[e.$type];
            if (!n)
              throw new Error('ViewService: No view config factory registered for type ' + e.$type);
            var r = n(t, e);
            return o.isArray(r) ? r : [r];
          }),
          (t.prototype.deactivateViewConfig = function(t) {
            a.trace.traceViewServiceEvent('<- Removing', t), r.removeFrom(this._viewConfigs, t);
          }),
          (t.prototype.activateViewConfig = function(t) {
            a.trace.traceViewServiceEvent('-> Registering', t), this._viewConfigs.push(t);
          }),
          (t.prototype.sync = function() {
            var e = this,
              n = this._uiViews
                .map(function(t) {
                  return [t.fqn, t];
                })
                .reduce(r.applyPairs, {});
            function o(t) {
              for (var e = t.viewDecl.$context, n = 0; ++n && e.parent; ) e = e.parent;
              return n;
            }
            var s = i.curry(function(t, e, n, r) {
                return e * (t(n) - t(r));
              }),
              u = this._uiViews
                .sort(
                  s(function(t) {
                    var e = function(t) {
                      return t && t.parent ? e(t.parent) + 1 : 1;
                    };
                    return 1e4 * t.fqn.split('.').length + e(t.creationContext);
                  }, 1)
                )
                .map(function(r) {
                  var i = e._viewConfigs.filter(t.matches(n, r));
                  return i.length > 1 && i.sort(s(o, -1)), { uiView: r, viewConfig: i[0] };
                }),
              c = u.map(function(t) {
                return t.viewConfig;
              }),
              l = this._viewConfigs
                .filter(function(t) {
                  return !r.inArray(c, t);
                })
                .map(function(t) {
                  return { uiView: void 0, viewConfig: t };
                });
            u.forEach(function(t) {
              -1 !== e._uiViews.indexOf(t.uiView) && t.uiView.configUpdated(t.viewConfig);
            });
            var f = u.concat(l);
            this._listeners.forEach(function(t) {
              return t(f);
            }),
              a.trace.traceViewSync(f);
          }),
          (t.prototype.registerUIView = function(t) {
            a.trace.traceViewServiceUIViewEvent('-> Registering', t);
            var e = this._uiViews;
            return (
              e.filter(function(e) {
                return e.fqn === t.fqn && e.$type === t.$type;
              }).length && a.trace.traceViewServiceUIViewEvent('!!!! duplicate uiView named:', t),
              e.push(t),
              this.sync(),
              function() {
                -1 !== e.indexOf(t)
                  ? (a.trace.traceViewServiceUIViewEvent('<- Deregistering', t), r.removeFrom(e)(t))
                  : a.trace.traceViewServiceUIViewEvent('Tried removing non-registered uiView', t);
              }
            );
          }),
          (t.prototype.available = function() {
            return this._uiViews.map(i.prop('fqn'));
          }),
          (t.prototype.active = function() {
            return this._uiViews.filter(i.prop('$config')).map(i.prop('name'));
          }),
          (t.matches = function(t, e) {
            return function(n) {
              if (e.$type !== n.viewDecl.$type) return !1;
              var i = n.viewDecl,
                o = i.$uiViewName.split('.'),
                a = e.fqn.split('.');
              if (!r.equals(o, a.slice(0 - o.length))) return !1;
              var s = 1 - o.length || void 0,
                u = a.slice(0, s).join('.'),
                c = t[u].creationContext;
              return i.$uiViewContextAnchor === (c && c.name);
            };
          }),
          t
        );
      })();
    e.ViewService = s;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(14),
      i = n(1),
      o = n(0),
      a = n(2),
      s = (function() {
        function t(t) {
          this.router = t;
        }
        return (
          (t.prototype.compile = function(t) {
            return this.router.urlMatcherFactory.compile(t);
          }),
          (t.prototype.create = function(t, e) {
            var n = this,
              o = a.pattern([
                [
                  i.isString,
                  function(t) {
                    return o(n.compile(t));
                  }
                ],
                [
                  a.is(r.UrlMatcher),
                  function(t) {
                    return n.fromUrlMatcher(t, e);
                  }
                ],
                [
                  i.isState,
                  function(t) {
                    return n.fromState(t, n.router);
                  }
                ],
                [
                  a.is(RegExp),
                  function(t) {
                    return n.fromRegExp(t, e);
                  }
                ],
                [
                  i.isFunction,
                  function(t) {
                    return new u(t, e);
                  }
                ]
              ]),
              s = o(t);
            if (!s) throw new Error("invalid 'what' in when()");
            return s;
          }),
          (t.prototype.fromUrlMatcher = function(t, e) {
            var n = e;
            i.isString(e) && (e = this.router.urlMatcherFactory.compile(e)),
              a.is(r.UrlMatcher)(e) &&
                (n = function(t) {
                  return e.format(t);
                });
            var s = {
              urlMatcher: t,
              matchPriority: function(e) {
                var n = t.parameters().filter(function(t) {
                  return t.isOptional;
                });
                return n.length
                  ? n.filter(function(t) {
                      return e[t.id];
                    }).length / n.length
                  : 1e-6;
              },
              type: 'URLMATCHER'
            };
            return o.extend(
              new u(function(e) {
                var n = t.exec(e.path, e.search, e.hash);
                return t.validates(n) && n;
              }, n),
              s
            );
          }),
          (t.prototype.fromState = function(t, e) {
            var n = { state: t, type: 'STATE' };
            return o.extend(
              this.fromUrlMatcher(t.url, function(n) {
                var r = e.stateService,
                  i = e.globals;
                r.href(t, n) !== r.href(i.current, i.params) &&
                  r.transitionTo(t, n, { inherit: !0, source: 'url' });
              }),
              n
            );
          }),
          (t.prototype.fromRegExp = function(t, e) {
            if (t.global || t.sticky) throw new Error('Rule RegExp must not be global or sticky');
            var n = i.isString(e)
                ? function(t) {
                    return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                      return t['$' === n ? 0 : Number(n)];
                    });
                  }
                : e,
              r = { regexp: t, type: 'REGEXP' };
            return o.extend(
              new u(function(e) {
                return t.exec(e.path);
              }, n),
              r
            );
          }),
          (t.isUrlRule = function(t) {
            return (
              t &&
              ['type', 'match', 'handler'].every(function(e) {
                return i.isDefined(t[e]);
              })
            );
          }),
          t
        );
      })();
    e.UrlRuleFactory = s;
    var u = (function() {
      return function(t, e) {
        var n = this;
        (this.match = t),
          (this.type = 'RAW'),
          (this.matchPriority = function(t) {
            return 0 - n.$id;
          }),
          (this.handler = e || o.identity);
      };
    })();
    e.BaseUrlRule = u;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(1),
      o = n(14),
      a = n(2),
      s = n(38),
      u = n(8),
      c = n(4);
    var l;
    l = function(t, e) {
      var n = (function(t, e) {
        return (e.priority || 0) - (t.priority || 0);
      })(t, e);
      return 0 !== n
        ? n
        : 0 !==
          (n = (function(t, e) {
            var n = { STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1 };
            return (n[t.type] || 0) - (n[e.type] || 0);
          })(t, e))
          ? n
          : 0 !==
            (n = (function(t, e) {
              return t.urlMatcher && e.urlMatcher
                ? o.UrlMatcher.compare(t.urlMatcher, e.urlMatcher)
                : 0;
            })(t, e))
            ? n
            : (function(t, e) {
                var n = { STATE: !0, URLMATCHER: !0 };
                return n[t.type] && n[e.type] ? 0 : (t.$id || 0) - (e.$id || 0);
              })(t, e);
    };
    var f = (function() {
      function t(e) {
        (this._sortFn = l),
          (this._rules = []),
          (this.interceptDeferred = !1),
          (this._id = 0),
          (this._sorted = !1),
          (this._router = e),
          (this.urlRuleFactory = new s.UrlRuleFactory(e)),
          r.createProxyFunctions(a.val(t.prototype), this, a.val(this));
      }
      return (
        (t.prototype.dispose = function() {
          this.listen(!1), (this._rules = []), delete this._otherwiseFn;
        }),
        (t.prototype.sort = function(t) {
          (this._rules = this.stableSort(this._rules, (this._sortFn = t || this._sortFn))),
            (this._sorted = !0);
        }),
        (t.prototype.ensureSorted = function() {
          this._sorted || this.sort();
        }),
        (t.prototype.stableSort = function(t, e) {
          var n = t.map(function(t, e) {
            return { elem: t, idx: e };
          });
          return (
            n.sort(function(t, n) {
              var r = e(t.elem, n.elem);
              return 0 === r ? t.idx - n.idx : r;
            }),
            n.map(function(t) {
              return t.elem;
            })
          );
        }),
        (t.prototype.match = function(t) {
          var e = this;
          this.ensureSorted(), (t = r.extend({ path: '', search: {}, hash: '' }, t));
          var n = this.rules();
          this._otherwiseFn && n.push(this._otherwiseFn);
          for (var i, o, a, s = 0; s < n.length && (!i || 0 === this._sortFn(n[s], i.rule)); s++) {
            var u = ((o = n[s]),
            void 0,
            (a = o.match(t, e._router)) && { match: a, rule: o, weight: o.matchPriority(a) });
            i = !i || (u && u.weight > i.weight) ? u : i;
          }
          return i;
        }),
        (t.prototype.sync = function(t) {
          if (!t || !t.defaultPrevented) {
            var e = this._router,
              n = e.urlService,
              r = e.stateService,
              o = { path: n.path(), search: n.search(), hash: n.hash() },
              s = this.match(o);
            a.pattern([
              [
                i.isString,
                function(t) {
                  return n.url(t, !0);
                }
              ],
              [
                u.TargetState.isDef,
                function(t) {
                  return r.go(t.state, t.params, t.options);
                }
              ],
              [
                a.is(u.TargetState),
                function(t) {
                  return r.go(t.state(), t.params(), t.options());
                }
              ]
            ])(s && s.rule.handler(s.match, o, e));
          }
        }),
        (t.prototype.listen = function(t) {
          var e = this;
          if (!1 !== t)
            return (this._stopFn =
              this._stopFn ||
              this._router.urlService.onChange(function(t) {
                return e.sync(t);
              }));
          this._stopFn && this._stopFn(), delete this._stopFn;
        }),
        (t.prototype.update = function(t) {
          var e = this._router.locationService;
          t ? (this.location = e.url()) : e.url() !== this.location && e.url(this.location, !0);
        }),
        (t.prototype.push = function(t, e, n) {
          var r = n && !!n.replace;
          this._router.urlService.url(t.format(e || {}), r);
        }),
        (t.prototype.href = function(t, e, n) {
          var r = t.format(e);
          if (null == r) return null;
          n = n || { absolute: !1 };
          var i = this._router.urlService.config,
            o = i.html5Mode();
          if (
            (o || null === r || (r = '#' + i.hashPrefix() + r),
            (r = (function(t, e, n, r) {
              return '/' === r ? t : e ? c.stripLastPathElement(r) + t : n ? r.slice(1) + t : t;
            })(r, o, n.absolute, i.baseHref())),
            !n.absolute || !r)
          )
            return r;
          var a = !o && r ? '/' : '',
            s = i.port(),
            u = 80 === s || 443 === s ? '' : ':' + s;
          return [i.protocol(), '://', i.host(), u, a, r].join('');
        }),
        (t.prototype.rule = function(t) {
          var e = this;
          if (!s.UrlRuleFactory.isUrlRule(t)) throw new Error('invalid rule');
          return (
            (t.$id = this._id++),
            (t.priority = t.priority || 0),
            this._rules.push(t),
            (this._sorted = !1),
            function() {
              return e.removeRule(t);
            }
          );
        }),
        (t.prototype.removeRule = function(t) {
          r.removeFrom(this._rules, t);
        }),
        (t.prototype.rules = function() {
          return this.ensureSorted(), this._rules.slice();
        }),
        (t.prototype.otherwise = function(t) {
          var e = h(t);
          (this._otherwiseFn = this.urlRuleFactory.create(a.val(!0), e)), (this._sorted = !1);
        }),
        (t.prototype.initial = function(t) {
          var e = h(t);
          this.rule(
            this.urlRuleFactory.create(function(t, e) {
              return 0 === e.globals.transitionHistory.size() && !!/^\/?$/.exec(t.path);
            }, e)
          );
        }),
        (t.prototype.when = function(t, e, n) {
          var r = this.urlRuleFactory.create(t, e);
          return i.isDefined(n && n.priority) && (r.priority = n.priority), this.rule(r), r;
        }),
        (t.prototype.deferIntercept = function(t) {
          void 0 === t && (t = !0), (this.interceptDeferred = t);
        }),
        t
      );
    })();
    function h(t) {
      if (!(i.isFunction(t) || i.isString(t) || a.is(u.TargetState)(t) || u.TargetState.isDef(t)))
        throw new Error(
          "'handler' must be a string, function, TargetState, or have a state: 'newtarget' property"
        );
      return i.isFunction(t) ? t : a.val(t);
    }
    e.UrlRouter = f;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(1),
      o = n(14),
      a = n(7),
      s = n(49),
      u = (function() {
        function t() {
          var t = this;
          (this.paramTypes = new s.ParamTypes()),
            (this._isCaseInsensitive = !1),
            (this._isStrictMode = !0),
            (this._defaultSquashPolicy = !1),
            (this.paramFactory = {
              fromConfig: function(e, n, r) {
                return new a.Param(e, n, r, a.DefType.CONFIG, t);
              },
              fromPath: function(e, n, r) {
                return new a.Param(e, n, r, a.DefType.PATH, t);
              },
              fromSearch: function(e, n, r) {
                return new a.Param(e, n, r, a.DefType.SEARCH, t);
              }
            }),
            (this._getConfig = function(e) {
              return r.extend(
                { strict: t._isStrictMode, caseInsensitive: t._isCaseInsensitive },
                e
              );
            }),
            r.extend(this, { UrlMatcher: o.UrlMatcher, Param: a.Param });
        }
        return (
          (t.prototype.caseInsensitive = function(t) {
            return (this._isCaseInsensitive = i.isDefined(t) ? t : this._isCaseInsensitive);
          }),
          (t.prototype.strictMode = function(t) {
            return (this._isStrictMode = i.isDefined(t) ? t : this._isStrictMode);
          }),
          (t.prototype.defaultSquashPolicy = function(t) {
            if (i.isDefined(t) && !0 !== t && !1 !== t && !i.isString(t))
              throw new Error(
                'Invalid squash policy: ' + t + '. Valid policies: false, true, arbitrary-string'
              );
            return (this._defaultSquashPolicy = i.isDefined(t) ? t : this._defaultSquashPolicy);
          }),
          (t.prototype.compile = function(t, e) {
            return new o.UrlMatcher(t, this.paramTypes, this.paramFactory, this._getConfig(e));
          }),
          (t.prototype.isMatcher = function(t) {
            if (!i.isObject(t)) return !1;
            var e = !0;
            return (
              r.forEach(o.UrlMatcher.prototype, function(n, r) {
                i.isFunction(n) && (e = e && i.isDefined(t[r]) && i.isFunction(t[r]));
              }),
              e
            );
          }),
          (t.prototype.type = function(t, e, n) {
            var r = this.paramTypes.type(t, e, n);
            return i.isDefined(e) ? this : r;
          }),
          (t.prototype.$get = function() {
            return (this.paramTypes.enqueue = !1), this.paramTypes._flushTypeQueue(), this;
          }),
          (t.prototype.dispose = function() {
            this.paramTypes.dispose();
          }),
          t
        );
      })();
    e.UrlMatcherFactory = u;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(40),
      i = n(39),
      o = n(19),
      a = n(37),
      s = n(43),
      u = n(42),
      c = n(36),
      l = n(0),
      f = n(1),
      h = n(35),
      p = n(6),
      d = 0,
      v = (function() {
        function t(t, e) {
          void 0 === t && (t = h.UrlService.locationServiceStub),
            void 0 === e && (e = h.UrlService.locationConfigStub),
            (this.locationService = t),
            (this.locationConfig = e),
            (this.$id = d++),
            (this._disposed = !1),
            (this._disposables = []),
            (this.trace = p.trace),
            (this.viewService = new a.ViewService()),
            (this.globals = new c.UIRouterGlobals()),
            (this.transitionService = new o.TransitionService(this)),
            (this.urlMatcherFactory = new r.UrlMatcherFactory()),
            (this.urlRouter = new i.UrlRouter(this)),
            (this.stateRegistry = new s.StateRegistry(this)),
            (this.stateService = new u.StateService(this)),
            (this.urlService = new h.UrlService(this)),
            (this._plugins = {}),
            this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),
            (this.globals.$current = this.stateRegistry.root()),
            (this.globals.current = this.globals.$current.self),
            this.disposable(this.globals),
            this.disposable(this.stateService),
            this.disposable(this.stateRegistry),
            this.disposable(this.transitionService),
            this.disposable(this.urlRouter),
            this.disposable(t),
            this.disposable(e);
        }
        return (
          (t.prototype.disposable = function(t) {
            this._disposables.push(t);
          }),
          (t.prototype.dispose = function(t) {
            var e = this;
            t && f.isFunction(t.dispose)
              ? t.dispose(this)
              : ((this._disposed = !0),
                this._disposables.slice().forEach(function(t) {
                  try {
                    'function' == typeof t.dispose && t.dispose(e), l.removeFrom(e._disposables, t);
                  } catch (t) {}
                }));
          }),
          (t.prototype.plugin = function(t, e) {
            void 0 === e && (e = {});
            var n = new t(this, e);
            if (!n.name) throw new Error('Required property `name` missing on plugin: ' + n);
            return this._disposables.push(n), (this._plugins[n.name] = n);
          }),
          (t.prototype.getPlugin = function(t) {
            return t ? this._plugins[t] : l.values(this._plugins);
          }),
          t
        );
      })();
    e.UIRouter = v;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(1),
      o = n(23),
      a = n(3),
      s = n(16),
      u = n(21),
      c = n(19),
      l = n(10),
      f = n(8),
      h = n(7),
      p = n(24),
      d = n(15),
      v = n(34),
      $ = n(2),
      m = (function() {
        function t(e) {
          (this.router = e),
            (this.invalidCallbacks = []),
            (this._defaultErrorHandler = function(t) {
              t instanceof Error && t.stack
                ? (console.error(t), console.error(t.stack))
                : t instanceof l.Rejection
                  ? (console.error(t.toString()),
                    t.detail && t.detail.stack && console.error(t.detail.stack))
                  : console.error(t);
            });
          var n = Object.keys(t.prototype).filter(
            $.not(r.inArray(['current', '$current', 'params', 'transition']))
          );
          r.createProxyFunctions($.val(t.prototype), this, $.val(this), n);
        }
        return (
          Object.defineProperty(t.prototype, 'transition', {
            get: function() {
              return this.router.globals.transition;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'params', {
            get: function() {
              return this.router.globals.params;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'current', {
            get: function() {
              return this.router.globals.current;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, '$current', {
            get: function() {
              return this.router.globals.$current;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.dispose = function() {
            this.defaultErrorHandler(r.noop), (this.invalidCallbacks = []);
          }),
          (t.prototype._handleInvalidTargetState = function(t, e) {
            var n = this,
              r = s.PathUtils.makeTargetState(this.router.stateRegistry, t),
              i = this.router.globals,
              u = function() {
                return i.transitionHistory.peekTail();
              },
              c = u(),
              h = new o.Queue(this.invalidCallbacks.slice()),
              p = new d.ResolveContext(t).injector(),
              v = function(t) {
                if (t instanceof f.TargetState) {
                  var e = t;
                  return (e = n.target(e.identifier(), e.params(), e.options())).valid()
                    ? u() !== c
                      ? l.Rejection.superseded().toPromise()
                      : n.transitionTo(e.identifier(), e.params(), e.options())
                    : l.Rejection.invalid(e.error()).toPromise();
                }
              };
            return (function t() {
              var n = h.dequeue();
              return void 0 === n
                ? l.Rejection.invalid(e.error()).toPromise()
                : a.services.$q
                    .when(n(e, r, p))
                    .then(v)
                    .then(function(e) {
                      return e || t();
                    });
            })();
          }),
          (t.prototype.onInvalid = function(t) {
            return (
              this.invalidCallbacks.push(t),
              function() {
                r.removeFrom(this.invalidCallbacks)(t);
              }.bind(this)
            );
          }),
          (t.prototype.reload = function(t) {
            return this.transitionTo(this.current, this.params, {
              reload: !i.isDefined(t) || t,
              inherit: !1,
              notify: !1
            });
          }),
          (t.prototype.go = function(t, e, n) {
            var i = { relative: this.$current, inherit: !0 },
              o = r.defaults(n, i, c.defaultTransOpts);
            return this.transitionTo(t, e, o);
          }),
          (t.prototype.target = function(t, e, n) {
            if ((void 0 === n && (n = {}), i.isObject(n.reload) && !n.reload.name))
              throw new Error('Invalid reload state object');
            var r = this.router.stateRegistry;
            if (
              ((n.reloadState = !0 === n.reload ? r.root() : r.matcher.find(n.reload, n.relative)),
              n.reload && !n.reloadState)
            )
              throw new Error(
                "No such reload state '" + (i.isString(n.reload) ? n.reload : n.reload.name) + "'"
              );
            return new f.TargetState(this.router.stateRegistry, t, e, n);
          }),
          (t.prototype.getCurrentPath = function() {
            var t = this,
              e = this.router.globals.successfulTransitions.peekTail();
            return e ? e.treeChanges().to : [new u.PathNode(t.router.stateRegistry.root())];
          }),
          (t.prototype.transitionTo = function(t, e, n) {
            var i = this;
            void 0 === e && (e = {}), void 0 === n && (n = {});
            var o = this.router,
              s = o.globals;
            n = r.defaults(n, c.defaultTransOpts);
            n = r.extend(n, {
              current: function() {
                return s.transition;
              }
            });
            var u = this.target(t, e, n),
              h = this.getCurrentPath();
            if (!u.exists()) return this._handleInvalidTargetState(h, u);
            if (!u.valid()) return r.silentRejection(u.error());
            var p = function(t) {
                return function(e) {
                  if (e instanceof l.Rejection) {
                    var n = o.globals.lastStartedTransitionId === t.$id;
                    if (e.type === l.RejectType.IGNORED)
                      return n && o.urlRouter.update(), a.services.$q.when(s.current);
                    var r = e.detail;
                    if (
                      e.type === l.RejectType.SUPERSEDED &&
                      e.redirected &&
                      r instanceof f.TargetState
                    ) {
                      var u = t.redirect(r);
                      return u.run().catch(p(u));
                    }
                    if (e.type === l.RejectType.ABORTED)
                      return n && o.urlRouter.update(), a.services.$q.reject(e);
                  }
                  return i.defaultErrorHandler()(e), a.services.$q.reject(e);
                };
              },
              d = this.router.transitionService.create(h, u),
              v = d.run().catch(p(d));
            return r.silenceUncaughtInPromise(v), r.extend(v, { transition: d });
          }),
          (t.prototype.is = function(t, e, n) {
            n = r.defaults(n, { relative: this.$current });
            var o = this.router.stateRegistry.matcher.find(t, n.relative);
            if (i.isDefined(o)) {
              if (this.$current !== o) return !1;
              if (!e) return !0;
              var a = o.parameters({ inherit: !0, matchingKeys: e });
              return h.Param.equals(a, h.Param.values(a, e), this.params);
            }
          }),
          (t.prototype.includes = function(t, e, n) {
            n = r.defaults(n, { relative: this.$current });
            var o = i.isString(t) && p.Glob.fromString(t);
            if (o) {
              if (!o.matches(this.$current.name)) return !1;
              t = this.$current.name;
            }
            var a = this.router.stateRegistry.matcher.find(t, n.relative),
              s = this.$current.includes;
            if (i.isDefined(a)) {
              if (!i.isDefined(s[a.name])) return !1;
              if (!e) return !0;
              var u = a.parameters({ inherit: !0, matchingKeys: e });
              return h.Param.equals(u, h.Param.values(u, e), this.params);
            }
          }),
          (t.prototype.href = function(t, e, n) {
            var o = { lossy: !0, inherit: !0, absolute: !1, relative: this.$current };
            (n = r.defaults(n, o)), (e = e || {});
            var a = this.router.stateRegistry.matcher.find(t, n.relative);
            if (!i.isDefined(a)) return null;
            n.inherit && (e = this.params.$inherit(e, this.$current, a));
            var s = a && n.lossy ? a.navigable : a;
            return s && void 0 !== s.url && null !== s.url
              ? this.router.urlRouter.href(s.url, e, { absolute: n.absolute })
              : null;
          }),
          (t.prototype.defaultErrorHandler = function(t) {
            return (this._defaultErrorHandler = t || this._defaultErrorHandler);
          }),
          (t.prototype.get = function(t, e) {
            var n = this.router.stateRegistry;
            return 0 === arguments.length ? n.get() : n.get(t, e || this.$current);
          }),
          (t.prototype.lazyLoad = function(t, e) {
            var n = this.get(t);
            if (!n || !n.lazyLoad) throw new Error('Can not lazy load ' + t);
            var r = this.getCurrentPath(),
              i = s.PathUtils.makeTargetState(this.router.stateRegistry, r);
            return (e = e || this.router.transitionService.create(r, i)), v.lazyLoadState(e, n);
          }),
          t
        );
      })();
    e.StateService = m;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(45),
      i = n(46),
      o = n(44),
      a = n(0),
      s = n(2),
      u = (function() {
        function t(t) {
          (this._router = t),
            (this.states = {}),
            (this.listeners = []),
            (this.matcher = new r.StateMatcher(this.states)),
            (this.builder = new i.StateBuilder(this.matcher, t.urlMatcherFactory)),
            (this.stateQueue = new o.StateQueueManager(
              this,
              t.urlRouter,
              this.states,
              this.builder,
              this.listeners
            )),
            this._registerRoot();
        }
        return (
          (t.prototype._registerRoot = function() {
            (this._root = this.stateQueue.register({
              name: '',
              url: '^',
              views: null,
              params: { '#': { value: null, type: 'hash', dynamic: !0 } },
              abstract: !0
            })).navigable = null;
          }),
          (t.prototype.dispose = function() {
            var t = this;
            this.stateQueue.dispose(),
              (this.listeners = []),
              this.get().forEach(function(e) {
                return t.get(e) && t.deregister(e);
              });
          }),
          (t.prototype.onStatesChanged = function(t) {
            return (
              this.listeners.push(t),
              function() {
                a.removeFrom(this.listeners)(t);
              }.bind(this)
            );
          }),
          (t.prototype.root = function() {
            return this._root;
          }),
          (t.prototype.register = function(t) {
            return this.stateQueue.register(t);
          }),
          (t.prototype._deregisterTree = function(t) {
            var e = this,
              n = this.get().map(function(t) {
                return t.$$state();
              }),
              r = function(t) {
                var e = n.filter(function(e) {
                  return -1 !== t.indexOf(e.parent);
                });
                return 0 === e.length ? e : e.concat(r(e));
              },
              i = r([t]),
              o = [t].concat(i).reverse();
            return (
              o.forEach(function(t) {
                var n = e._router.urlRouter;
                n
                  .rules()
                  .filter(s.propEq('state', t))
                  .forEach(n.removeRule.bind(n)),
                  delete e.states[t.name];
              }),
              o
            );
          }),
          (t.prototype.deregister = function(t) {
            var e = this.get(t);
            if (!e) throw new Error("Can't deregister state; not found: " + t);
            var n = this._deregisterTree(e.$$state());
            return (
              this.listeners.forEach(function(t) {
                return t(
                  'deregistered',
                  n.map(function(t) {
                    return t.self;
                  })
                );
              }),
              n
            );
          }),
          (t.prototype.get = function(t, e) {
            var n = this;
            if (0 === arguments.length)
              return Object.keys(this.states).map(function(t) {
                return n.states[t].self;
              });
            var r = this.matcher.find(t, e);
            return (r && r.self) || null;
          }),
          (t.prototype.decorator = function(t, e) {
            return this.builder.builder(t, e);
          }),
          t
        );
      })();
    e.StateRegistry = u;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(1),
      o = n(25),
      a = n(2),
      s = (function() {
        function t(t, e, n, r, i) {
          (this.$registry = t),
            (this.$urlRouter = e),
            (this.states = n),
            (this.builder = r),
            (this.listeners = i),
            (this.queue = []),
            (this.matcher = t.matcher);
        }
        return (
          (t.prototype.dispose = function() {
            this.queue = [];
          }),
          (t.prototype.register = function(t) {
            var e = this.queue,
              n = o.StateObject.create(t),
              s = n.name;
            if (!i.isString(s)) throw new Error('State must have a valid name');
            if (this.states.hasOwnProperty(s) || r.inArray(e.map(a.prop('name')), s))
              throw new Error("State '" + s + "' is already defined");
            return e.push(n), this.flush(), n;
          }),
          (t.prototype.flush = function() {
            for (
              var t = this,
                e = this.queue,
                n = this.states,
                r = this.builder,
                i = [],
                o = [],
                a = {},
                s = function(e) {
                  return t.states.hasOwnProperty(e) && t.states[e];
                },
                u = function() {
                  i.length &&
                    t.listeners.forEach(function(t) {
                      return t(
                        'registered',
                        i.map(function(t) {
                          return t.self;
                        })
                      );
                    });
                };
              e.length > 0;

            ) {
              var c = e.shift(),
                l = c.name,
                f = r.build(c),
                h = o.indexOf(c);
              if (f) {
                var p = s(l);
                if (p && p.name === l) throw new Error("State '" + l + "' is already defined");
                var d = s(l + '.**');
                d && this.$registry.deregister(d),
                  (n[l] = c),
                  this.attachRoute(c),
                  h >= 0 && o.splice(h, 1),
                  i.push(c);
              } else {
                var v = a[l];
                if (((a[l] = e.length), h >= 0 && v === e.length)) return e.push(c), u(), n;
                h < 0 && o.push(c), e.push(c);
              }
            }
            return u(), n;
          }),
          (t.prototype.attachRoute = function(t) {
            !t.abstract && t.url && this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(t));
          }),
          t
        );
      })();
    e.StateQueueManager = s;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(1),
      i = n(0),
      o = (function() {
        function t(t) {
          this._states = t;
        }
        return (
          (t.prototype.isRelative = function(t) {
            return 0 === (t = t || '').indexOf('.') || 0 === t.indexOf('^');
          }),
          (t.prototype.find = function(t, e, n) {
            if ((void 0 === n && (n = !0), t || '' === t)) {
              var o = r.isString(t),
                a = o ? t : t.name;
              this.isRelative(a) && (a = this.resolvePath(a, e));
              var s = this._states[a];
              if (s && (o || !(o || (s !== t && s.self !== t)))) return s;
              if (o && n) {
                var u = i.values(this._states).filter(function(t) {
                  return t.__stateObjectCache.nameGlob && t.__stateObjectCache.nameGlob.matches(a);
                });
                return (
                  u.length > 1 &&
                    console.log(
                      'stateMatcher.find: Found multiple matches for ' + a + ' using glob: ',
                      u.map(function(t) {
                        return t.name;
                      })
                    ),
                  u[0]
                );
              }
            }
          }),
          (t.prototype.resolvePath = function(t, e) {
            if (!e) throw new Error("No reference point given for path '" + t + "'");
            for (var n = this.find(e), r = t.split('.'), i = r.length, o = 0, a = n; o < i; o++)
              if ('' !== r[o] || 0 !== o) {
                if ('^' !== r[o]) break;
                if (!a.parent)
                  throw new Error("Path '" + t + "' not valid for state '" + n.name + "'");
                a = a.parent;
              } else a = n;
            var s = r.slice(o).join('.');
            return a.name + (a.name && s ? '.' : '') + s;
          }),
          t
        );
      })();
    e.StateMatcher = o;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(1),
      o = n(5),
      a = n(2),
      s = n(11),
      u = n(3);
    function c(t) {
      return t.name;
    }
    function l(t) {
      return (
        (t.self.$$state = function() {
          return t;
        }),
        t.self
      );
    }
    function f(t) {
      return (
        t.parent && t.parent.data && (t.data = t.self.data = r.inherit(t.parent.data, t.data)),
        t.data
      );
    }
    var h = function(t, e) {
        return function(n) {
          var o = n;
          o && o.url && o.name && o.name.match(/\.\*\*$/) && (o.url += '{remainder:any}');
          var a = (function(t) {
              if (!i.isString(t)) return !1;
              var e = '^' === t.charAt(0);
              return { val: e ? t.substring(1) : t, root: e };
            })(o.url),
            s = n.parent,
            u = a
              ? t.compile(a.val, {
                  params: n.params || {},
                  paramMap: function(t, e) {
                    return (
                      !1 === o.reloadOnSearch && e && (t = r.extend(t || {}, { dynamic: !0 })), t
                    );
                  }
                })
              : o.url;
          if (!u) return null;
          if (!t.isMatcher(u)) throw new Error("Invalid url '" + u + "' in state '" + n + "'");
          return a && a.root ? u : ((s && s.navigable) || e()).url.append(u);
        };
      },
      p = function(t) {
        return function(e) {
          return !t(e) && e.url ? e : e.parent ? e.parent.navigable : null;
        };
      },
      d = function(t) {
        return function(e) {
          var n = (e.url && e.url.parameters({ inherit: !1 })) || [],
            i = r.values(
              r.mapObj(r.omit(e.params || {}, n.map(a.prop('id'))), function(e, n) {
                return t.fromConfig(n, null, e);
              })
            );
          return n
            .concat(i)
            .map(function(t) {
              return [t.id, t];
            })
            .reduce(r.applyPairs, {});
        };
      };
    function v(t) {
      return t.parent ? t.parent.path.concat(t) : [t];
    }
    function $(t) {
      var e = t.parent ? r.extend({}, t.parent.includes) : {};
      return (e[t.name] = !0), e;
    }
    function m(t) {
      var e,
        n,
        c = function(t) {
          return t.provide || t.token;
        },
        l = a.pattern([
          [
            a.prop('resolveFn'),
            function(t) {
              return new s.Resolvable(c(t), t.resolveFn, t.deps, t.policy);
            }
          ],
          [
            a.prop('useFactory'),
            function(t) {
              return new s.Resolvable(c(t), t.useFactory, t.deps || t.dependencies, t.policy);
            }
          ],
          [
            a.prop('useClass'),
            function(t) {
              return new s.Resolvable(
                c(t),
                function() {
                  return new t.useClass();
                },
                [],
                t.policy
              );
            }
          ],
          [
            a.prop('useValue'),
            function(t) {
              return new s.Resolvable(
                c(t),
                function() {
                  return t.useValue;
                },
                [],
                t.policy,
                t.useValue
              );
            }
          ],
          [
            a.prop('useExisting'),
            function(t) {
              return new s.Resolvable(c(t), r.identity, [t.useExisting], t.policy);
            }
          ]
        ]),
        f = a.pattern([
          [
            a.pipe(a.prop('val'), i.isString),
            function(t) {
              return new s.Resolvable(t.token, r.identity, [t.val], t.policy);
            }
          ],
          [
            a.pipe(a.prop('val'), i.isArray),
            function(t) {
              return new s.Resolvable(t.token, r.tail(t.val), t.val.slice(0, -1), t.policy);
            }
          ],
          [
            a.pipe(a.prop('val'), i.isFunction),
            function(t) {
              return new s.Resolvable(
                t.token,
                t.val,
                ((e = t.val),
                (n = u.services.$injector),
                e.$inject || (n && n.annotate(e, n.strictDi)) || 'deferred'),
                t.policy
              );
              var e, n;
            }
          ]
        ]),
        h = a.pattern([
          [
            a.is(s.Resolvable),
            function(t) {
              return t;
            }
          ],
          [
            function(t) {
              return !(!t.token || !t.resolveFn);
            },
            l
          ],
          [
            function(t) {
              return !(
                (!t.provide && !t.token) ||
                !(t.useValue || t.useFactory || t.useExisting || t.useClass)
              );
            },
            l
          ],
          [
            function(t) {
              return !!(
                t &&
                t.val &&
                (i.isString(t.val) || i.isArray(t.val) || i.isFunction(t.val))
              );
            },
            f
          ],
          [
            a.val(!0),
            function(t) {
              throw new Error('Invalid resolve value: ' + o.stringify(t));
            }
          ]
        ]),
        p = t.resolve;
      return (i.isArray(p)
        ? p
        : ((e = p),
          (n = t.resolvePolicy || {}),
          Object.keys(e || {}).map(function(t) {
            return { token: t, val: e[t], deps: void 0, policy: n[t] };
          }))
      ).map(h);
    }
    e.resolvablesBuilder = m;
    var g = (function() {
      function t(t, e) {
        this.matcher = t;
        var n = this,
          r = function() {
            return t.find('');
          },
          i = function(t) {
            return '' === t.name;
          };
        this.builders = {
          name: [c],
          self: [l],
          parent: [
            function(e) {
              return i(e) ? null : t.find(n.parentName(e)) || r();
            }
          ],
          data: [f],
          url: [h(e, r)],
          navigable: [p(i)],
          params: [d(e.paramFactory)],
          views: [],
          path: [v],
          includes: [$],
          resolvables: [m]
        };
      }
      return (
        (t.prototype.builder = function(t, e) {
          var n = this.builders,
            r = n[t] || [];
          return i.isString(t) && !i.isDefined(e)
            ? r.length > 1
              ? r
              : r[0]
            : i.isString(t) && i.isFunction(e)
              ? ((n[t] = r),
                n[t].push(e),
                function() {
                  return n[t].splice(n[t].indexOf(e, 1)) && null;
                })
              : void 0;
        }),
        (t.prototype.build = function(t) {
          var e = this.matcher,
            n = this.builders,
            i = this.parentName(t);
          if (i && !e.find(i, void 0, !1)) return null;
          for (var o in n)
            if (n.hasOwnProperty(o)) {
              var a = n[o].reduce(function(t, e) {
                return function(n) {
                  return e(n, t);
                };
              }, r.noop);
              t[o] = a(t);
            }
          return t;
        }),
        (t.prototype.parentName = function(t) {
          var e = t.name || '',
            n = e.split('.');
          if (('**' === n.pop() && n.pop(), n.length)) {
            if (t.parent)
              throw new Error(
                "States that specify the 'parent:' property should not have a '.' in their name (" +
                  e +
                  ')'
              );
            return n.join('.');
          }
          return t.parent ? (i.isString(t.parent) ? t.parent : t.parent.name) : '';
        }),
        (t.prototype.name = function(t) {
          var e = t.name;
          if (-1 !== e.indexOf('.') || !t.parent) return e;
          var n = i.isString(t.parent) ? t.parent : t.parent.name;
          return n ? n + '.' + e : e;
        }),
        t
      );
    })();
    e.StateBuilder = g;
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }), r(n(50)), r(n(11)), r(n(15));
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = (function() {
        function t(t) {
          void 0 === t && (t = {}), r.extend(this, t);
        }
        return (
          (t.prototype.$inherit = function(t, e, n) {
            var i,
              o = r.ancestors(e, n),
              a = {},
              s = [];
            for (var u in o)
              if (o[u] && o[u].params && (i = Object.keys(o[u].params)).length)
                for (var c in i) s.indexOf(i[c]) >= 0 || (s.push(i[c]), (a[i[c]] = this[i[c]]));
            return r.extend({}, a, t);
          }),
          t
        );
      })();
    e.StateParams = i;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r,
      i = n(0),
      o = n(1),
      a = n(2),
      s = n(3),
      u = n(20),
      c = (function() {
        function t() {
          (this.enqueue = !0),
            (this.typeQueue = []),
            (this.defaultTypes = i.pick(t.prototype, [
              'hash',
              'string',
              'query',
              'path',
              'int',
              'bool',
              'date',
              'json',
              'any'
            ]));
          this.types = i.inherit(
            i.map(this.defaultTypes, function(t, e) {
              return new u.ParamType(i.extend({ name: e }, t));
            }),
            {}
          );
        }
        return (
          (t.prototype.dispose = function() {
            this.types = {};
          }),
          (t.prototype.type = function(t, e, n) {
            if (!o.isDefined(e)) return this.types[t];
            if (this.types.hasOwnProperty(t))
              throw new Error("A type named '" + t + "' has already been defined.");
            return (
              (this.types[t] = new u.ParamType(i.extend({ name: t }, e))),
              n &&
                (this.typeQueue.push({ name: t, def: n }), this.enqueue || this._flushTypeQueue()),
              this
            );
          }),
          (t.prototype._flushTypeQueue = function() {
            for (; this.typeQueue.length; ) {
              var t = this.typeQueue.shift();
              if (t.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
              i.extend(this.types[t.name], s.services.$injector.invoke(t.def));
            }
          }),
          t
        );
      })();
    (e.ParamTypes = c),
      (r = function(t) {
        var e = function(t) {
            return null != t ? t.toString() : t;
          },
          n = {
            encode: e,
            decode: e,
            is: a.is(String),
            pattern: /.*/,
            equals: function(t, e) {
              return t == e;
            }
          };
        return i.extend({}, n, t);
      }),
      i.extend(c.prototype, {
        string: r({}),
        path: r({ pattern: /[^/]*/ }),
        query: r({}),
        hash: r({ inherit: !1 }),
        int: r({
          decode: function(t) {
            return parseInt(t, 10);
          },
          is: function(t) {
            return !o.isNullOrUndefined(t) && this.decode(t.toString()) === t;
          },
          pattern: /-?\d+/
        }),
        bool: r({
          encode: function(t) {
            return t ? 1 : 0;
          },
          decode: function(t) {
            return 0 !== parseInt(t, 10);
          },
          is: a.is(Boolean),
          pattern: /0|1/
        }),
        date: r({
          encode: function(t) {
            return this.is(t)
              ? [
                  t.getFullYear(),
                  ('0' + (t.getMonth() + 1)).slice(-2),
                  ('0' + t.getDate()).slice(-2)
                ].join('-')
              : void 0;
          },
          decode: function(t) {
            if (this.is(t)) return t;
            var e = this.capture.exec(t);
            return e ? new Date(e[1], e[2] - 1, e[3]) : void 0;
          },
          is: function(t) {
            return t instanceof Date && !isNaN(t.valueOf());
          },
          equals: function(t, e) {
            return ['getFullYear', 'getMonth', 'getDate'].reduce(function(n, r) {
              return n && t[r]() === e[r]();
            }, !0);
          },
          pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
          capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
        }),
        json: r({
          encode: i.toJson,
          decode: i.fromJson,
          is: a.is(Object),
          equals: i.equals,
          pattern: /[^/]*/
        }),
        any: r({
          encode: i.identity,
          decode: i.identity,
          is: function() {
            return !0;
          },
          equals: i.equals
        })
      });
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.resolvePolicies = {
        when: { LAZY: 'LAZY', EAGER: 'EAGER' },
        async: { WAIT: 'WAIT', NOWAIT: 'NOWAIT', RXWAIT: 'RXWAIT' }
      });
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(1),
      o = n(9),
      a = n(12),
      s = (function() {
        function t(t) {
          this.transition = t;
        }
        return (
          (t.prototype.buildHooksForPhase = function(t) {
            var e = this;
            return this.transition.router.transitionService._pluginapi
              ._getEvents(t)
              .map(function(t) {
                return e.buildHooks(t);
              })
              .reduce(r.unnestR, [])
              .filter(r.identity);
          }),
          (t.prototype.buildHooks = function(t) {
            var e = this.transition,
              n = e.treeChanges(),
              i = this.getMatchingHooks(t, n);
            if (!i) return [];
            var s = { transition: e, current: e.options().current };
            return i
              .map(function(i) {
                return i.matches(n)[t.criteriaMatchPath.name].map(function(n) {
                  var u = r.extend(
                      { bind: i.bind, traceData: { hookType: t.name, context: n } },
                      s
                    ),
                    c =
                      t.criteriaMatchPath.scope === o.TransitionHookScope.STATE
                        ? n.state.self
                        : null,
                    l = new a.TransitionHook(e, c, i, u);
                  return { hook: i, node: n, transitionHook: l };
                });
              })
              .reduce(r.unnestR, [])
              .sort(
                (function(t) {
                  void 0 === t && (t = !1);
                  return function(e, n) {
                    var r = t ? -1 : 1,
                      i = (e.node.state.path.length - n.node.state.path.length) * r;
                    return 0 !== i ? i : n.hook.priority - e.hook.priority;
                  };
                })(t.reverseSort)
              )
              .map(function(t) {
                return t.transitionHook;
              });
          }),
          (t.prototype.getMatchingHooks = function(t, e) {
            var n = t.hookPhase === o.TransitionHookPhase.CREATE,
              a = this.transition.router.transitionService;
            return (n ? [a] : [this.transition, a])
              .map(function(e) {
                return e.getHooks(t.name);
              })
              .filter(r.assertPredicate(i.isArray, 'broken event named: ' + t.name))
              .reduce(r.unnestR, [])
              .filter(function(t) {
                return t.matches(e);
              });
          }),
          t
        );
      })();
    e.HookBuilder = s;
  },
  function(t, e, n) {
    n(77), (t.exports = angular);
  },
  ,
  ,
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = (function() {
      function t() {}
      return (t.prototype.dispose = function(t) {}), t;
    })();
    e.UIRouterPluginBase = r;
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(26),
      i = n(30),
      o = n(18),
      a = n(28),
      s = n(29),
      u = n(27),
      c = n(31),
      l = n(32),
      f = n(3);
    (e.servicesPlugin = function(t) {
      return (
        (f.services.$injector = c.$injector),
        (f.services.$q = l.$q),
        {
          name: 'vanilla.services',
          $q: l.$q,
          $injector: c.$injector,
          dispose: function() {
            return null;
          }
        }
      );
    }),
      (e.hashLocationPlugin = o.locationPluginFactory(
        'vanilla.hashBangLocation',
        !1,
        i.HashLocationService,
        r.BrowserLocationConfig
      )),
      (e.pushStateLocationPlugin = o.locationPluginFactory(
        'vanilla.pushStateLocation',
        !0,
        a.PushStateLocationService,
        r.BrowserLocationConfig
      )),
      (e.memoryLocationPlugin = o.locationPluginFactory(
        'vanilla.memoryLocation',
        !1,
        s.MemoryLocationService,
        u.MemoryLocationConfig
      ));
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      r(n(32)),
      r(n(31)),
      r(n(13)),
      r(n(30)),
      r(n(29)),
      r(n(28)),
      r(n(27)),
      r(n(26)),
      r(n(18)),
      r(n(56));
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (function(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      })(n(57));
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (function(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      })(n(37));
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      r(n(14)),
      r(n(40)),
      r(n(39)),
      r(n(38)),
      r(n(35));
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      r(n(9)),
      r(n(51)),
      r(n(22)),
      r(n(10)),
      r(n(17)),
      r(n(12)),
      r(n(33)),
      r(n(19));
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      if (!t.valid()) throw new Error(t.error().toString());
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.registerInvalidTransitionHook = function(t) {
        return t.onBefore({}, r, { priority: -1e4 });
      });
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(6),
      i = n(10);
    function o(t) {
      var e = t._ignoredReason();
      if (e) {
        r.trace.traceTransitionIgnored(t);
        var n = t.router.globals.transition;
        return 'SameAsCurrent' === e && n && n.abort(), i.Rejection.ignored().toPromise();
      }
    }
    e.registerIgnoredTransitionHook = function(t) {
      return t.onBefore({}, o, { priority: -9999 });
    };
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = function(t) {
      var e = t.options(),
        n = t.router.stateService,
        r = t.router.urlRouter;
      if ('url' !== e.source && e.location && n.$current.navigable) {
        var i = { replace: 'replace' === e.location };
        r.push(n.$current.navigable.url, n.params, i);
      }
      r.update(!0);
    };
    e.registerUpdateUrl = function(t) {
      return t.onSuccess({}, r, { priority: 9999 });
    };
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = function(t) {
        var e = t.router.globals,
          n = function() {
            e.transition === t && (e.transition = null);
          };
        t.onSuccess(
          {},
          function() {
            e.successfulTransitions.enqueue(t),
              (e.$current = t.$to()),
              (e.current = e.$current.self),
              r.copy(t.params(), e.params);
          },
          { priority: 1e4 }
        ),
          t.promise.then(n, n);
      };
    e.registerUpdateGlobalState = function(t) {
      return t.onCreate({}, i);
    };
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(3),
      o = function(t) {
        var e = i.services.$q,
          n = t.views('entering');
        if (n.length)
          return e
            .all(
              n.map(function(t) {
                return e.when(t.load());
              })
            )
            .then(r.noop);
      };
    e.registerLoadEnteringViews = function(t) {
      return t.onFinish({}, o);
    };
    var a = function(t) {
      var e = t.views('entering'),
        n = t.views('exiting');
      if (e.length || n.length) {
        var r = t.router.viewService;
        n.forEach(function(t) {
          return r.deactivateViewConfig(t);
        }),
          e.forEach(function(t) {
            return r.activateViewConfig(t);
          }),
          r.sync();
      }
    };
    e.registerActivateViews = function(t) {
      return t.onSuccess({}, a);
    };
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(0),
      i = n(15),
      o = n(2);
    e.RESOLVE_HOOK_PRIORITY = 1e3;
    var a = function(t) {
      return new i.ResolveContext(t.treeChanges().to).resolvePath('EAGER', t).then(r.noop);
    };
    e.registerEagerResolvePath = function(t) {
      return t.onStart({}, a, { priority: e.RESOLVE_HOOK_PRIORITY });
    };
    var s = function(t, e) {
      return new i.ResolveContext(t.treeChanges().to)
        .subContext(e.$$state())
        .resolvePath('LAZY', t)
        .then(r.noop);
    };
    e.registerLazyResolveState = function(t) {
      return t.onEnter({ entering: o.val(!0) }, s, { priority: e.RESOLVE_HOOK_PRIORITY });
    };
    var u = function(t) {
      return new i.ResolveContext(t.treeChanges().to).resolvePath('LAZY', t).then(r.noop);
    };
    e.registerResolveRemaining = function(t) {
      return t.onFinish({}, u, { priority: e.RESOLVE_HOOK_PRIORITY });
    };
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      return function(e, n) {
        return (0, n.$$state()[t])(e, n);
      };
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = r('onExit');
    e.registerOnExitHook = function(t) {
      return t.onExit(
        {
          exiting: function(t) {
            return !!t.onExit;
          }
        },
        i
      );
    };
    var o = r('onRetain');
    e.registerOnRetainHook = function(t) {
      return t.onRetain(
        {
          retained: function(t) {
            return !!t.onRetain;
          }
        },
        o
      );
    };
    var a = r('onEnter');
    e.registerOnEnterHook = function(t) {
      return t.onEnter(
        {
          entering: function(t) {
            return !!t.onEnter;
          }
        },
        a
      );
    };
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(1),
      i = n(3),
      o = n(8),
      a = function(t) {
        var e = t.to().redirectTo;
        if (e) {
          var n = t.router.stateService;
          return r.isFunction(e) ? i.services.$q.when(e(t)).then(a) : a(e);
        }
        function a(e) {
          if (e)
            return e instanceof o.TargetState
              ? e
              : r.isString(e)
                ? n.target(e, t.params(), t.options())
                : e.state || e.params
                  ? n.target(e.state || t.to(), e.params || t.params(), t.options())
                  : void 0;
        }
      };
    e.registerRedirectToHook = function(t) {
      return t.onStart(
        {
          to: function(t) {
            return !!t.redirectTo;
          }
        },
        a
      );
    };
  },
  function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = n(17),
      i = n(41),
      o = n(47),
      a = n(4);
    function s(t) {
      t.addResolvable(o.Resolvable.fromData(i.UIRouter, t.router), ''),
        t.addResolvable(o.Resolvable.fromData(r.Transition, t), ''),
        t.addResolvable(o.Resolvable.fromData('$transition$', t), ''),
        t.addResolvable(o.Resolvable.fromData('$stateParams', t.params()), ''),
        t.entering().forEach(function(e) {
          t.addResolvable(o.Resolvable.fromData('$state$', e), e);
        });
    }
    e.registerAddCoreResolvables = function(t) {
      return t.onCreate({}, s);
    };
    var u = ['$transition$', r.Transition],
      c = a.inArray(u);
    e.treeChangesCleanup = function(t) {
      var e = function(t) {
        return c(t.token) ? o.Resolvable.fromData(t.token, null) : t;
      };
      a
        .values(t.treeChanges())
        .reduce(a.unnestR, [])
        .reduce(a.uniqR, [])
        .forEach(function(t) {
          t.resolvables = t.resolvables.map(e);
        });
    };
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      r(n(46)),
      r(n(25)),
      r(n(45)),
      r(n(44)),
      r(n(43)),
      r(n(42)),
      r(n(8));
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }), r(n(21)), r(n(16));
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }), r(n(7)), r(n(49)), r(n(48)), r(n(20));
  },
  function(t, e) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      r(n(4)),
      r(n(73)),
      r(n(72)),
      r(n(47)),
      r(n(71)),
      r(n(61)),
      r(n(60)),
      r(n(59)),
      r(n(36)),
      r(n(41)),
      r(n(58)),
      r(n(55));
  },
  function(t, e, n) {
    /**
     * State-based routing for AngularJS 1.x
     * This bundle requires the ui-router-core.js bundle from the @uirouter/core package.
     * @version v1.0.16
     * @link https://ui-router.github.io
     * @license MIT License, http://www.opensource.org/licenses/MIT
     */
    !(function(t, e, n) {
      'use strict';
      var r = angular,
        i = e && e.module ? e : r;
      function o() {
        var t = null;
        return function(e, r) {
          return (t = t || n.services.$injector.get('$templateFactory')), [new c(e, r, t)];
        };
      }
      var a = function(t, e) {
        return t.reduce(function(t, r) {
          return t || n.isDefined(e[r]);
        }, !1);
      };
      function s(t) {
        if (!t.parent) return {};
        var e = ['component', 'bindings', 'componentProvider'],
          r = ['templateProvider', 'templateUrl', 'template', 'notify', 'async'].concat([
            'controller',
            'controllerProvider',
            'controllerAs',
            'resolveAs'
          ]),
          i = e.concat(r);
        if (n.isDefined(t.views) && a(i, t))
          throw new Error(
            "State '" +
              t.name +
              "' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  " +
              i
                .filter(function(e) {
                  return n.isDefined(t[e]);
                })
                .join(', ')
          );
        var o = {},
          s = t.views || { $default: n.pick(t, i) };
        return (
          n.forEach(s, function(i, s) {
            if (
              ((s = s || '$default'),
              n.isString(i) && (i = { component: i }),
              (i = n.extend({}, i)),
              a(e, i) && a(r, i))
            )
              throw new Error(
                'Cannot combine: ' +
                  e.join('|') +
                  ' with: ' +
                  r.join('|') +
                  " in stateview: '" +
                  s +
                  '@' +
                  t.name +
                  "'"
              );
            (i.resolveAs = i.resolveAs || '$resolve'),
              (i.$type = 'ng1'),
              (i.$context = t),
              (i.$name = s);
            var u = n.ViewService.normalizeUIViewTarget(i.$context, i.$name);
            (i.$uiViewName = u.uiViewName),
              (i.$uiViewContextAnchor = u.uiViewContextAnchor),
              (o[s] = i);
          }),
          o
        );
      }
      var u = 0,
        c = (function() {
          function t(t, e, n) {
            var r = this;
            (this.path = t),
              (this.viewDecl = e),
              (this.factory = n),
              (this.$id = u++),
              (this.loaded = !1),
              (this.getTemplate = function(t, e) {
                return r.component
                  ? r.factory.makeComponentTemplate(t, e, r.component, r.viewDecl.bindings)
                  : r.template;
              });
          }
          return (
            (t.prototype.load = function() {
              var t = this,
                e = n.services.$q,
                r = new n.ResolveContext(this.path),
                i = this.path.reduce(function(t, e) {
                  return n.extend(t, e.paramValues);
                }, {}),
                o = {
                  template: e.when(this.factory.fromConfig(this.viewDecl, i, r)),
                  controller: e.when(this.getController(r))
                };
              return e.all(o).then(function(e) {
                return (
                  n.trace.traceViewServiceEvent('Loaded', t),
                  (t.controller = e.controller),
                  n.extend(t, e.template),
                  t
                );
              });
            }),
            (t.prototype.getController = function(t) {
              var e = this.viewDecl.controllerProvider;
              if (!n.isInjectable(e)) return this.viewDecl.controller;
              var r = n.services.$injector.annotate(e),
                i = n.isArray(e) ? n.tail(e) : e,
                o = new n.Resolvable('', i, r);
              return o.get(t);
            }),
            t
          );
        })(),
        l = (function() {
          function t() {
            var t = this;
            (this._useHttp = i.version.minor < 3),
              (this.$get = [
                '$http',
                '$templateCache',
                '$injector',
                function(e, n, r) {
                  return (
                    (t.$templateRequest =
                      r.has && r.has('$templateRequest') && r.get('$templateRequest')),
                    (t.$http = e),
                    (t.$templateCache = n),
                    t
                  );
                }
              ]);
          }
          return (
            (t.prototype.useHttpService = function(t) {
              this._useHttp = t;
            }),
            (t.prototype.fromConfig = function(t, e, r) {
              var i = function(t) {
                  return n.services.$q.when(t).then(function(t) {
                    return { template: t };
                  });
                },
                o = function(t) {
                  return n.services.$q.when(t).then(function(t) {
                    return { component: t };
                  });
                };
              return n.isDefined(t.template)
                ? i(this.fromString(t.template, e))
                : n.isDefined(t.templateUrl)
                  ? i(this.fromUrl(t.templateUrl, e))
                  : n.isDefined(t.templateProvider)
                    ? i(this.fromProvider(t.templateProvider, e, r))
                    : n.isDefined(t.component)
                      ? o(t.component)
                      : n.isDefined(t.componentProvider)
                        ? o(this.fromComponentProvider(t.componentProvider, e, r))
                        : i('<ui-view></ui-view>');
            }),
            (t.prototype.fromString = function(t, e) {
              return n.isFunction(t) ? t(e) : t;
            }),
            (t.prototype.fromUrl = function(t, e) {
              return (
                n.isFunction(t) && (t = t(e)),
                null == t
                  ? null
                  : this._useHttp
                    ? this.$http
                        .get(t, { cache: this.$templateCache, headers: { Accept: 'text/html' } })
                        .then(function(t) {
                          return t.data;
                        })
                    : this.$templateRequest(t)
              );
            }),
            (t.prototype.fromProvider = function(t, e, r) {
              var i = n.services.$injector.annotate(t),
                o = n.isArray(t) ? n.tail(t) : t,
                a = new n.Resolvable('', o, i);
              return a.get(r);
            }),
            (t.prototype.fromComponentProvider = function(t, e, r) {
              var i = n.services.$injector.annotate(t),
                o = n.isArray(t) ? n.tail(t) : t,
                a = new n.Resolvable('', o, i);
              return a.get(r);
            }),
            (t.prototype.makeComponentTemplate = function(t, e, r, o) {
              o = o || {};
              var a = i.version.minor >= 3 ? '::' : '',
                s = function(t) {
                  var e = n.kebobString(t);
                  return /^(x|data)-/.exec(e) ? 'x-' + e : e;
                },
                u = (function(t) {
                  var e = n.services.$injector.get(t + 'Directive');
                  if (!e || !e.length)
                    throw new Error("Unable to find component named '" + t + "'");
                  return e.map(f).reduce(n.unnestR, []);
                })(r)
                  .map(function(r) {
                    var i = r.name,
                      u = r.type,
                      c = s(i);
                    if (t.attr(c) && !o[i]) return c + "='" + t.attr(c) + "'";
                    var l = o[i] || i;
                    if ('@' === u) return c + "='{{" + a + '$resolve.' + l + "}}'";
                    if ('&' === u) {
                      var f = e.getResolvable(l),
                        h = f && f.data,
                        p = (h && n.services.$injector.annotate(h)) || [],
                        d = n.isArray(h) ? '[' + (h.length - 1) + ']' : '';
                      return c + "='$resolve." + l + d + '(' + p.join(',') + ")'";
                    }
                    return c + "='" + a + '$resolve.' + l + "'";
                  })
                  .join(' '),
                c = s(r);
              return '<' + c + ' ' + u + '></' + c + '>';
            }),
            t
          );
        })(),
        f = function(t) {
          return n.isObject(t.bindToController) ? h(t.bindToController) : h(t.scope);
        },
        h = function(t) {
          return Object.keys(t || {})
            .map(function(e) {
              return [e, /^([=<@&])[?]?(.*)/.exec(t[e])];
            })
            .filter(function(t) {
              return n.isDefined(t) && n.isArray(t[1]);
            })
            .map(function(t) {
              return { name: t[1][2] || t[0], type: t[1][1] };
            });
        },
        p = (function() {
          function t(e, r) {
            (this.stateRegistry = e),
              (this.stateService = r),
              n.createProxyFunctions(n.val(t.prototype), this, n.val(this));
          }
          return (
            (t.prototype.decorator = function(t, e) {
              return this.stateRegistry.decorator(t, e) || this;
            }),
            (t.prototype.state = function(t, e) {
              return n.isObject(t) ? (e = t) : (e.name = t), this.stateRegistry.register(e), this;
            }),
            (t.prototype.onInvalid = function(t) {
              return this.stateService.onInvalid(t);
            }),
            t
          );
        })(),
        d = function(t) {
          return function(e, r) {
            var i = e[t],
              o = 'onExit' === t ? 'from' : 'to';
            return i
              ? function(t, e) {
                  var r = new n.ResolveContext(t.treeChanges(o)).subContext(e.$$state()),
                    a = n.extend(A(r), { $state$: e, $transition$: t });
                  return n.services.$injector.invoke(i, this, a);
                }
              : void 0;
          };
        },
        v = (function() {
          function t(t) {
            (this._urlListeners = []), (this.$locationProvider = t);
            var e = n.val(t);
            n.createProxyFunctions(e, this, e, ['hashPrefix']);
          }
          return (
            (t.monkeyPatchPathParameterType = function(t) {
              var e = t.urlMatcherFactory.type('path');
              (e.encode = function(t) {
                return null != t
                  ? t.toString().replace(/(~|\/)/g, function(t) {
                      return { '~': '~~', '/': '~2F' }[t];
                    })
                  : t;
              }),
                (e.decode = function(t) {
                  return null != t
                    ? t.toString().replace(/(~~|~2F)/g, function(t) {
                        return { '~~': '~', '~2F': '/' }[t];
                      })
                    : t;
                });
            }),
            (t.prototype.dispose = function() {}),
            (t.prototype.onChange = function(t) {
              var e = this;
              return (
                this._urlListeners.push(t),
                function() {
                  return n.removeFrom(e._urlListeners)(t);
                }
              );
            }),
            (t.prototype.html5Mode = function() {
              var t = this.$locationProvider.html5Mode();
              return (t = n.isObject(t) ? t.enabled : t) && this.$sniffer.history;
            }),
            (t.prototype.url = function(t, e, r) {
              return (
                void 0 === e && (e = !1),
                n.isDefined(t) && this.$location.url(t),
                e && this.$location.replace(),
                r && this.$location.state(r),
                this.$location.url()
              );
            }),
            (t.prototype._runtimeServices = function(t, e, r, i) {
              var o = this;
              (this.$location = e),
                (this.$sniffer = r),
                t.$on('$locationChangeSuccess', function(t) {
                  return o._urlListeners.forEach(function(e) {
                    return e(t);
                  });
                });
              var a = n.val(e),
                s = n.val(i);
              n.createProxyFunctions(a, this, a, ['replace', 'path', 'search', 'hash']),
                n.createProxyFunctions(a, this, a, ['port', 'protocol', 'host']),
                n.createProxyFunctions(s, this, s, ['baseHref']);
            }),
            t
          );
        })(),
        $ = (function() {
          function t(t) {
            (this._router = t), (this._urlRouter = t.urlRouter);
          }
          return (
            (t.injectableHandler = function(t, e) {
              return function(r) {
                return n.services.$injector.invoke(e, null, {
                  $match: r,
                  $stateParams: t.globals.params
                });
              };
            }),
            (t.prototype.$get = function() {
              var t = this._urlRouter;
              return t.update(!0), t.interceptDeferred || t.listen(), t;
            }),
            (t.prototype.rule = function(t) {
              var e = this;
              if (!n.isFunction(t)) throw new Error("'rule' must be a function");
              var r = new n.BaseUrlRule(function() {
                return t(n.services.$injector, e._router.locationService);
              }, n.identity);
              return this._urlRouter.rule(r), this;
            }),
            (t.prototype.otherwise = function(t) {
              var e = this,
                r = this._urlRouter;
              if (n.isString(t)) r.otherwise(t);
              else {
                if (!n.isFunction(t)) throw new Error("'rule' must be a string or function");
                r.otherwise(function() {
                  return t(n.services.$injector, e._router.locationService);
                });
              }
              return this;
            }),
            (t.prototype.when = function(e, r) {
              return (
                (n.isArray(r) || n.isFunction(r)) && (r = t.injectableHandler(this._router, r)),
                this._urlRouter.when(e, r),
                this
              );
            }),
            (t.prototype.deferIntercept = function(t) {
              this._urlRouter.deferIntercept(t);
            }),
            t
          );
        })();
      i.module('ui.router.angular1', []);
      var m = i.module('ui.router.init', []),
        g = i.module('ui.router.util', ['ng', 'ui.router.init']),
        y = i.module('ui.router.router', ['ui.router.util']),
        b = i.module('ui.router.state', [
          'ui.router.router',
          'ui.router.util',
          'ui.router.angular1'
        ]),
        w = i.module('ui.router', ['ui.router.init', 'ui.router.state', 'ui.router.angular1']),
        S = (i.module('ui.router.compat', ['ui.router']), null);
      function x(t) {
        ((S = this.router = new n.UIRouter()).stateProvider = new p(
          S.stateRegistry,
          S.stateService
        )),
          S.stateRegistry.decorator('views', s),
          S.stateRegistry.decorator('onExit', d('onExit')),
          S.stateRegistry.decorator('onRetain', d('onRetain')),
          S.stateRegistry.decorator('onEnter', d('onEnter')),
          S.viewService._pluginapi._viewConfigFactory('ng1', o());
        var e = (S.locationService = S.locationConfig = new v(t));
        function r(t, n, r, i, o, a) {
          return e._runtimeServices(i, t, r, n), delete S.router, delete S.$get, S;
        }
        return (
          v.monkeyPatchPathParameterType(S),
          (S.router = S),
          (S.$get = r),
          (r.$inject = [
            '$location',
            '$browser',
            '$sniffer',
            '$rootScope',
            '$http',
            '$templateCache'
          ]),
          S
        );
      }
      x.$inject = ['$locationProvider'];
      var _ = function(t) {
        return [
          '$uiRouterProvider',
          function(e) {
            var n = e.router[t];
            return (
              (n.$get = function() {
                return n;
              }),
              n
            );
          }
        ];
      };
      function E(t, e, r) {
        (n.services.$injector = t),
          (n.services.$q = e),
          r.stateRegistry
            .get()
            .map(function(t) {
              return t.$$state().resolvables;
            })
            .reduce(n.unnestR, [])
            .filter(function(t) {
              return 'deferred' === t.deps;
            })
            .forEach(function(e) {
              return (e.deps = t.annotate(e.resolveFn, t.strictDi));
            });
      }
      function C(t) {
        t.$watch(function() {
          n.trace.approximateDigests++;
        });
      }
      (E.$inject = ['$injector', '$q', '$uiRouter']),
        (C.$inject = ['$rootScope']),
        m.provider('$uiRouter', x),
        y.provider('$urlRouter', [
          '$uiRouterProvider',
          function(t) {
            return (t.urlRouterProvider = new $(t));
          }
        ]),
        g.provider('$urlService', _('urlService')),
        g.provider('$urlMatcherFactory', [
          '$uiRouterProvider',
          function() {
            return S.urlMatcherFactory;
          }
        ]),
        g.provider('$templateFactory', function() {
          return new l();
        }),
        b.provider('$stateRegistry', _('stateRegistry')),
        b.provider('$uiRouterGlobals', _('globals')),
        b.provider('$transitions', _('transitionService')),
        b.provider('$state', [
          '$uiRouterProvider',
          function() {
            return n.extend(S.stateProvider, {
              $get: function() {
                return S.stateService;
              }
            });
          }
        ]),
        b.factory('$stateParams', [
          '$uiRouter',
          function(t) {
            return t.globals.params;
          }
        ]),
        w.factory('$view', function() {
          return S.viewService;
        }),
        w.service('$trace', function() {
          return n.trace;
        }),
        w.run(C),
        g.run(['$urlMatcherFactory', function(t) {}]),
        b.run(['$state', function(t) {}]),
        y.run(['$urlRouter', function(t) {}]),
        m.run(E);
      var O,
        R,
        k,
        P,
        A = function(t) {
          var e = t.getTokens().filter(n.isString),
            r = e.map(function(e) {
              var n = t.getResolvable(e),
                r = t.getPolicy(n).async;
              return [e, 'NOWAIT' === r ? n.promise : n.data];
            });
          return r.reduce(n.applyPairs, {});
        };
      function T(t) {
        var e,
          n = t.match(/^\s*({[^}]*})\s*$/);
        if (
          (n && (t = '(' + n[1] + ')'),
          !(e = t.replace(/\n/g, ' ').match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/)) || 4 !== e.length)
        )
          throw new Error("Invalid state ref '" + t + "'");
        return { state: e[1] || null, paramExpr: e[3] || null };
      }
      function j(t) {
        var e = t.parent().inheritedData('$uiView'),
          r = n.parse('$cfg.path')(e);
        return r ? n.tail(r).state.name : void 0;
      }
      function V(t, e, r) {
        var i = r.uiState || t.current.name,
          o = n.extend(
            (function(t, e) {
              return { relative: j(t) || e.$current, inherit: !0, source: 'sref' };
            })(e, t),
            r.uiStateOpts || {}
          ),
          a = t.href(i, r.uiStateParams, o);
        return { uiState: i, uiStateParams: r.uiStateParams, uiStateOpts: o, href: a };
      }
      function M(t) {
        var e = '[object SVGAnimatedString]' === Object.prototype.toString.call(t.prop('href')),
          n = 'FORM' === t[0].nodeName;
        return {
          attr: n ? 'action' : e ? 'xlink:href' : 'href',
          isAnchor: 'A' === t.prop('tagName').toUpperCase(),
          clickable: !n
        };
      }
      function I(t, e, n, r, i) {
        return function(o) {
          var a = o.which || o.button,
            s = i();
          if (!(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || t.attr('target'))) {
            var u = n(function() {
              e.go(s.uiState, s.uiStateParams, s.uiStateOpts);
            });
            o.preventDefault();
            var c = r.isAnchor && !s.href ? 1 : 0;
            o.preventDefault = function() {
              c-- <= 0 && n.cancel(u);
            };
          }
        };
      }
      function N(t, e, r, i) {
        var o;
        i && (o = i.events), n.isArray(o) || (o = ['click']);
        for (var a = t.on ? 'on' : 'bind', s = 0, u = o; s < u.length; s++) {
          var c = u[s];
          t[a](c, r);
        }
        e.$on('$destroy', function() {
          for (var e = t.off ? 'off' : 'unbind', n = 0, i = o; n < i.length; n++) {
            var a = i[n];
            t[e](a, r);
          }
        });
      }
      function D(t) {
        var e = function(e, n, r) {
          return t.is(e, n, r);
        };
        return (e.$stateful = !0), e;
      }
      function U(t) {
        var e = function(e, n, r) {
          return t.includes(e, n, r);
        };
        return (e.$stateful = !0), e;
      }
      function H(t, e, r, o, a, s) {
        var u = n.parse('viewDecl.controllerAs'),
          c = n.parse('viewDecl.resolveAs');
        return {
          restrict: 'ECA',
          priority: -400,
          compile: function(o) {
            var s = o.html();
            return (
              o.empty(),
              function(o, l) {
                var f = l.data('$uiView');
                if (!f) return l.html(s), void t(l.contents())(o);
                var h = f.$cfg || { viewDecl: {}, getTemplate: n.noop },
                  p = h.path && new n.ResolveContext(h.path);
                l.html(h.getTemplate(l, p) || s), n.trace.traceUIViewFill(f.$uiView, l.html());
                var d = t(l.contents()),
                  v = h.controller,
                  $ = u(h),
                  m = c(h),
                  g = p && A(p);
                if (((o[m] = g), v)) {
                  var y = e(v, n.extend({}, g, { $scope: o, $element: l }));
                  $ && ((o[$] = y), (o[$][m] = g)),
                    l.data('$ngControllerController', y),
                    l.children().data('$ngControllerController', y),
                    L(a, r, y, o, h);
                }
                if (n.isString(h.viewDecl.component))
                  var b = h.viewDecl.component,
                    w = n.kebobString(b),
                    S = new RegExp('^(x-|data-)?' + w + '$', 'i'),
                    x = o.$watch(
                      function() {
                        var t = [].slice.call(l[0].children).filter(function(t) {
                          return t && t.tagName && S.exec(t.tagName);
                        });
                        return t && i.element(t).data('$' + b + 'Controller');
                      },
                      function(t) {
                        t && (L(a, r, t, o, h), x());
                      }
                    );
                d(o);
              }
            );
          }
        };
      }
      (O = [
        '$uiRouter',
        '$timeout',
        function(t, e) {
          var r = t.stateService;
          return {
            restrict: 'A',
            require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
            link: function(i, o, a, s) {
              var u,
                c = M(o),
                l = s[1] || s[0],
                f = null,
                h = {},
                p = function() {
                  return V(r, o, h);
                },
                d = T(a.uiSref);
              function v() {
                var t = p();
                f && f(),
                  l && (f = l.$$addStateInfo(t.uiState, t.uiStateParams)),
                  null != t.href && a.$set(c.attr, t.href);
              }
              (h.uiState = d.state),
                (h.uiStateOpts = a.uiSrefOpts ? i.$eval(a.uiSrefOpts) : {}),
                d.paramExpr &&
                  (i.$watch(
                    d.paramExpr,
                    function(t) {
                      (h.uiStateParams = n.extend({}, t)), v();
                    },
                    !0
                  ),
                  (h.uiStateParams = n.extend({}, i.$eval(d.paramExpr)))),
                v(),
                i.$on('$destroy', t.stateRegistry.onStatesChanged(v)),
                i.$on('$destroy', t.transitionService.onSuccess({}, v)),
                c.clickable && ((u = I(o, r, e, c, p)), N(o, i, u, h.uiStateOpts));
            }
          };
        }
      ]),
        (R = [
          '$uiRouter',
          '$timeout',
          function(t, e) {
            var r = t.stateService;
            return {
              restrict: 'A',
              require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
              link: function(i, o, a, s) {
                var u,
                  c = M(o),
                  l = s[1] || s[0],
                  f = null,
                  h = {},
                  p = function() {
                    return V(r, o, h);
                  },
                  d = ['uiState', 'uiStateParams', 'uiStateOpts'],
                  v = d.reduce(function(t, e) {
                    return (t[e] = n.noop), t;
                  }, {});
                function $() {
                  var t = p();
                  f && f(),
                    l && (f = l.$$addStateInfo(t.uiState, t.uiStateParams)),
                    null != t.href && a.$set(c.attr, t.href);
                }
                d.forEach(function(t) {
                  (h[t] = a[t] ? i.$eval(a[t]) : null),
                    a.$observe(t, function(e) {
                      v[t](),
                        (v[t] = i.$watch(
                          e,
                          function(e) {
                            (h[t] = e), $();
                          },
                          !0
                        ));
                    });
                }),
                  $(),
                  i.$on('$destroy', t.stateRegistry.onStatesChanged($)),
                  i.$on('$destroy', t.transitionService.onSuccess({}, $)),
                  c.clickable && ((u = I(o, r, e, c, p)), N(o, i, u, h.uiStateOpts));
              }
            };
          }
        ]),
        (k = [
          '$state',
          '$stateParams',
          '$interpolate',
          '$uiRouter',
          function(t, e, r, i) {
            return {
              restrict: 'A',
              controller: [
                '$scope',
                '$element',
                '$attrs',
                function(e, o, a) {
                  var s,
                    u,
                    c,
                    l,
                    f,
                    h = [];
                  s = r(a.uiSrefActiveEq || '', !1)(e);
                  try {
                    u = e.$eval(a.uiSrefActive);
                  } catch (t) {}
                  function p(t) {
                    t.promise.then(m, n.noop);
                  }
                  function d() {
                    v(u);
                  }
                  function v(t) {
                    n.isObject(t) &&
                      ((h = []),
                      n.forEach(t, function(t, r) {
                        var i = function(t, n) {
                          var r = T(t);
                          $(r.state, e.$eval(r.paramExpr), n);
                        };
                        n.isString(t)
                          ? i(t, r)
                          : n.isArray(t) &&
                            n.forEach(t, function(t) {
                              i(t, r);
                            });
                      }));
                  }
                  function $(e, r, i) {
                    var a = t.get(e, j(o)),
                      s = { state: a || { name: e }, params: r, activeClass: i };
                    return (
                      h.push(s),
                      function() {
                        n.removeFrom(h)(s);
                      }
                    );
                  }
                  function m() {
                    var r = function(t) {
                        return t.split(/\s/).filter(n.identity);
                      },
                      i = function(t) {
                        return t
                          .map(function(t) {
                            return t.activeClass;
                          })
                          .map(r)
                          .reduce(n.unnestR, []);
                      },
                      a = i(h)
                        .concat(r(s))
                        .reduce(n.uniqR, []),
                      u = i(
                        h.filter(function(e) {
                          return t.includes(e.state.name, e.params);
                        })
                      ),
                      c = !!h.filter(function(e) {
                        return t.is(e.state.name, e.params);
                      }).length,
                      l = c ? r(s) : [],
                      f = u.concat(l).reduce(n.uniqR, []),
                      p = a.filter(function(t) {
                        return !n.inArray(f, t);
                      });
                    e.$evalAsync(function() {
                      f.forEach(function(t) {
                        return o.addClass(t);
                      }),
                        p.forEach(function(t) {
                          return o.removeClass(t);
                        });
                    });
                  }
                  v((u = u || r(a.uiSrefActive || '', !1)(e))),
                    (this.$$addStateInfo = function(t, e) {
                      if (!(n.isObject(u) && h.length > 0)) {
                        var r = $(t, e, u);
                        return m(), r;
                      }
                    }),
                    e.$on(
                      '$destroy',
                      ((c = i.stateRegistry.onStatesChanged(d)),
                      (l = i.transitionService.onStart({}, p)),
                      (f = e.$on('$stateChangeSuccess', m)),
                      function() {
                        c(), l(), f();
                      })
                    ),
                    i.globals.transition && p(i.globals.transition),
                    m();
                }
              ]
            };
          }
        ]),
        i
          .module('ui.router.state')
          .directive('uiSref', O)
          .directive('uiSrefActive', k)
          .directive('uiSrefActiveEq', k)
          .directive('uiState', R),
        (D.$inject = ['$state']),
        (U.$inject = ['$state']),
        i
          .module('ui.router.state')
          .filter('isState', D)
          .filter('includedByState', U),
        (P = [
          '$view',
          '$animate',
          '$uiViewScroll',
          '$interpolate',
          '$q',
          function(t, e, r, o, a) {
            var s = {
                $cfg: { viewDecl: { $context: t._pluginapi._rootViewContext() } },
                $uiView: {}
              },
              u = {
                count: 0,
                restrict: 'ECA',
                terminal: !0,
                priority: 400,
                transclude: 'element',
                compile: function(l, f, h) {
                  return function(l, f, p) {
                    var d,
                      v,
                      $,
                      m,
                      g,
                      y = p.onload || '',
                      b = p.autoscroll,
                      w = {
                        enter: function(t, n, r) {
                          i.version.minor > 2
                            ? e.enter(t, null, n).then(r)
                            : e.enter(t, null, n, r);
                        },
                        leave: function(t, n) {
                          i.version.minor > 2 ? e.leave(t).then(n) : e.leave(t, n);
                        }
                      },
                      S = f.inheritedData('$uiView') || s,
                      x = o(p.uiView || p.name || '')(l) || '$default',
                      _ = {
                        $type: 'ng1',
                        id: u.count++,
                        name: x,
                        fqn: S.$uiView.fqn ? S.$uiView.fqn + '.' + x : x,
                        config: null,
                        configUpdated: function(t) {
                          (!t || t instanceof c) &&
                            (m !== t &&
                              (n.trace.traceUIViewConfigUpdated(
                                _,
                                t && t.viewDecl && t.viewDecl.$context
                              ),
                              (m = t),
                              E(t)));
                        },
                        get creationContext() {
                          var t = n.parse('$cfg.viewDecl.$context')(S),
                            e = n.parse('$uiView.creationContext')(S);
                          return t || e;
                        }
                      };
                    function E(t) {
                      var e = l.$new(),
                        i = a.defer(),
                        o = a.defer(),
                        s = { $cfg: t, $uiView: _ },
                        u = { $animEnter: i.promise, $animLeave: o.promise, $$animLeave: o };
                      e.$emit('$viewContentLoading', x);
                      var c = h(e, function(t) {
                        t.data('$uiViewAnim', u),
                          t.data('$uiView', s),
                          w.enter(t, f, function() {
                            i.resolve(),
                              $ && $.$emit('$viewContentAnimationEnded'),
                              ((n.isDefined(b) && !b) || l.$eval(b)) && r(t);
                          }),
                          (function() {
                            if (
                              (d &&
                                (n.trace.traceUIViewEvent(
                                  'Removing (previous) el',
                                  d.data('$uiView')
                                ),
                                d.remove(),
                                (d = null)),
                              $ &&
                                (n.trace.traceUIViewEvent('Destroying scope', _),
                                $.$destroy(),
                                ($ = null)),
                              v)
                            ) {
                              var t = v.data('$uiViewAnim');
                              n.trace.traceUIViewEvent('Animate out', t),
                                w.leave(v, function() {
                                  t.$$animLeave.resolve(), (d = null);
                                }),
                                (d = v),
                                (v = null);
                            }
                          })();
                      });
                      (v = c), ($ = e).$emit('$viewContentLoaded', t || m), $.$eval(y);
                    }
                    n.trace.traceUIViewEvent('Linking', _),
                      f.data('$uiView', { $uiView: _ }),
                      E(),
                      (g = t.registerUIView(_)),
                      l.$on('$destroy', function() {
                        n.trace.traceUIViewEvent('Destroying/Unregistering', _), g();
                      });
                  };
                }
              };
            return u;
          }
        ]),
        (H.$inject = ['$compile', '$controller', '$transitions', '$view', '$q', '$timeout']);
      var F = 'function' == typeof i.module('ui.router').component,
        q = 0;
      function L(t, e, r, i, o) {
        !n.isFunction(r.$onInit) || (o.viewDecl.component && F) || r.$onInit();
        var a = n.tail(o.path).state.self,
          s = { bind: r };
        if (n.isFunction(r.uiOnParamsChanged)) {
          var u = new n.ResolveContext(o.path),
            c = u.getResolvable('$transition$').data;
          i.$on(
            '$destroy',
            e.onSuccess(
              {},
              function(t) {
                if (t !== c && -1 === t.exiting().indexOf(a)) {
                  var e = t.params('to'),
                    i = t.params('from'),
                    o = function(t) {
                      return t.paramSchema;
                    },
                    s = t
                      .treeChanges('to')
                      .map(o)
                      .reduce(n.unnestR, []),
                    u = t
                      .treeChanges('from')
                      .map(o)
                      .reduce(n.unnestR, []),
                    l = s.filter(function(t) {
                      var n = u.indexOf(t);
                      return -1 === n || !u[n].type.equals(e[t.id], i[t.id]);
                    });
                  if (l.length) {
                    var f = l.map(function(t) {
                        return t.id;
                      }),
                      h = n.filter(e, function(t, e) {
                        return -1 !== f.indexOf(e);
                      });
                    r.uiOnParamsChanged(h, t);
                  }
                }
              },
              s
            )
          );
        }
        if (n.isFunction(r.uiCanExit)) {
          var l = q++,
            f = function(t) {
              return (
                !!t && ((t._uiCanExitIds && !0 === t._uiCanExitIds[l]) || f(t.redirectedFrom()))
              );
            },
            h = { exiting: a.name };
          i.$on(
            '$destroy',
            e.onBefore(
              h,
              function(e) {
                var n,
                  i = (e._uiCanExitIds = e._uiCanExitIds || {});
                return (
                  f(e) ||
                    (n = t.when(r.uiCanExit(e))).then(function(t) {
                      return (i[l] = !1 !== t);
                    }),
                  n
                );
              },
              s
            )
          );
        }
      }
      i.module('ui.router.state').directive('uiView', P),
        i.module('ui.router.state').directive('uiView', H),
        i.module('ui.router.state').provider('$uiViewScroll', function() {
          var t = !1;
          (this.useAnchorScroll = function() {
            t = !0;
          }),
            (this.$get = [
              '$anchorScroll',
              '$timeout',
              function(e, n) {
                return t
                  ? e
                  : function(t) {
                      return n(
                        function() {
                          t[0].scrollIntoView();
                        },
                        0,
                        !1
                      );
                    };
              }
            ]);
        }),
        Object.keys(n).forEach(function(e) {
          t[e] = n[e];
        }),
        (t.core = n),
        (t.default = 'ui.router'),
        (t.watchDigests = C),
        (t.getLocals = A),
        (t.getNg1ViewConfigFactory = o),
        (t.ng1ViewsBuilder = s),
        (t.Ng1ViewConfig = c),
        (t.StateProvider = p),
        (t.UrlRouterProvider = $),
        Object.defineProperty(t, '__esModule', { value: !0 });
    })(e, n(52), n(75));
  },
  function(t, e) {
    /**
     * @license AngularJS v1.6.10
     * (c) 2010-2018 Google, Inc. http://angularjs.org
     * License: MIT
     */
    !(function(t) {
      'use strict';
      var e = { objectMaxDepth: 5 };
      function n(t) {
        if (!H(t)) return e;
        U(t.objectMaxDepth) && (e.objectMaxDepth = r(t.objectMaxDepth) ? t.objectMaxDepth : NaN);
      }
      function r(t) {
        return L(t) && t > 0;
      }
      function i(t, n) {
        n = n || Error;
        var r = 'https://errors.angularjs.org/1.6.10/',
          i = r.replace('.', '\\.') + '[\\s\\S]*',
          o = new RegExp(i, 'g');
        return function() {
          var i,
            a,
            s = arguments[0],
            u = arguments[1],
            c = '[' + (t ? t + ':' : '') + s + '] ',
            l = ht(arguments, 2).map(function(t) {
              return Kt(t, e.objectMaxDepth);
            });
          for (
            c += u.replace(/\{\d+\}/g, function(t) {
              var e = +t.slice(1, -1);
              return e < l.length ? l[e].replace(o, '') : t;
            }),
              c += '\n' + r + (t ? t + '/' : '') + s,
              a = 0,
              i = '?';
            a < l.length;
            a++, i = '&'
          )
            c += i + 'p' + a + '=' + encodeURIComponent(l[a]);
          return new n(c);
        };
      }
      var o = /^\/(.+)\/([a-z]*)$/,
        a = 'validity',
        s = Object.prototype.hasOwnProperty,
        u = function(t) {
          return q(t) ? t.toLowerCase() : t;
        },
        c = function(t) {
          return q(t) ? t.toUpperCase() : t;
        };
      'i' !== 'I'.toLowerCase() &&
        ((u = function(t) {
          return q(t)
            ? t.replace(/[A-Z]/g, function(t) {
                return String.fromCharCode(32 | t.charCodeAt(0));
              })
            : t;
        }),
        (c = function(t) {
          return q(t)
            ? t.replace(/[a-z]/g, function(t) {
                return String.fromCharCode(-33 & t.charCodeAt(0));
              })
            : t;
        }));
      var l,
        f,
        h,
        p,
        d = [].slice,
        v = [].splice,
        $ = [].push,
        m = Object.prototype.toString,
        g = Object.getPrototypeOf,
        y = i('ng'),
        b = t.angular || (t.angular = {}),
        w = 0;
      function S(t) {
        if (null == t || K(t)) return !1;
        if (z(t) || q(t) || (f && t instanceof f)) return !0;
        var e = 'length' in Object(t) && t.length;
        return (
          L(e) && ((e >= 0 && (e - 1 in t || t instanceof Array)) || 'function' == typeof t.item)
        );
      }
      function x(t, e, n) {
        var r, i;
        if (t)
          if (G(t))
            for (r in t)
              'prototype' !== r &&
                'length' !== r &&
                'name' !== r &&
                t.hasOwnProperty(r) &&
                e.call(n, t[r], r, t);
          else if (z(t) || S(t)) {
            var o = 'object' != typeof t;
            for (r = 0, i = t.length; r < i; r++) (o || r in t) && e.call(n, t[r], r, t);
          } else if (t.forEach && t.forEach !== x) t.forEach(e, n, t);
          else if (F(t)) for (r in t) e.call(n, t[r], r, t);
          else if ('function' == typeof t.hasOwnProperty)
            for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
          else for (r in t) s.call(t, r) && e.call(n, t[r], r, t);
        return t;
      }
      function _(t, e, n) {
        for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
        return r;
      }
      function E(t) {
        return function(e, n) {
          t(n, e);
        };
      }
      function C() {
        return ++w;
      }
      function O(t, e) {
        e ? (t.$$hashKey = e) : delete t.$$hashKey;
      }
      function R(t, e, n) {
        for (var r = t.$$hashKey, i = 0, o = e.length; i < o; ++i) {
          var a = e[i];
          if (H(a) || G(a))
            for (var s = Object.keys(a), u = 0, c = s.length; u < c; u++) {
              var l = s[u],
                f = a[l];
              n && H(f)
                ? B(f)
                  ? (t[l] = new Date(f.valueOf()))
                  : J(f)
                    ? (t[l] = new RegExp(f))
                    : f.nodeName
                      ? (t[l] = f.cloneNode(!0))
                      : nt(f)
                        ? (t[l] = f.clone())
                        : (H(t[l]) || (t[l] = z(f) ? [] : {}), R(t[l], [f], !0))
                : (t[l] = f);
            }
        }
        return O(t, r), t;
      }
      function k(t) {
        return R(t, d.call(arguments, 1), !1);
      }
      function P(t) {
        return R(t, d.call(arguments, 1), !0);
      }
      function A(t) {
        return parseInt(t, 10);
      }
      l = t.document.documentMode;
      var T =
        Number.isNaN ||
        function(t) {
          return t != t;
        };
      function j(t, e) {
        return k(Object.create(t), e);
      }
      function V() {}
      function M(t) {
        return t;
      }
      function I(t) {
        return function() {
          return t;
        };
      }
      function N(t) {
        return G(t.toString) && t.toString !== m;
      }
      function D(t) {
        return void 0 === t;
      }
      function U(t) {
        return void 0 !== t;
      }
      function H(t) {
        return null !== t && 'object' == typeof t;
      }
      function F(t) {
        return null !== t && 'object' == typeof t && !g(t);
      }
      function q(t) {
        return 'string' == typeof t;
      }
      function L(t) {
        return 'number' == typeof t;
      }
      function B(t) {
        return '[object Date]' === m.call(t);
      }
      (V.$inject = []), (M.$inject = []);
      var z = Array.isArray;
      function W(t) {
        switch (m.call(t)) {
          case '[object Error]':
          case '[object Exception]':
          case '[object DOMException]':
            return !0;
          default:
            return t instanceof Error;
        }
      }
      function G(t) {
        return 'function' == typeof t;
      }
      function J(t) {
        return '[object RegExp]' === m.call(t);
      }
      function K(t) {
        return t && t.window === t;
      }
      function Y(t) {
        return t && t.$evalAsync && t.$watch;
      }
      function Z(t) {
        return 'boolean' == typeof t;
      }
      function Q(t) {
        return t && G(t.then);
      }
      var X = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/;
      var tt = function(t) {
          return q(t) ? t.trim() : t;
        },
        et = function(t) {
          return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
        };
      function nt(t) {
        return !(!t || !(t.nodeName || (t.prop && t.attr && t.find)));
      }
      function rt(t) {
        return u(t.nodeName || (t[0] && t[0].nodeName));
      }
      function it(t, e) {
        return -1 !== Array.prototype.indexOf.call(t, e);
      }
      function ot(t, e) {
        var n = t.indexOf(e);
        return n >= 0 && t.splice(n, 1), n;
      }
      function at(t, e, n) {
        var i,
          o,
          a = [],
          u = [];
        if (((n = r(n) ? n : NaN), e)) {
          if (
            ((o = e) && L(o.length) && X.test(m.call(o))) ||
            ((i = e), '[object ArrayBuffer]' === m.call(i))
          )
            throw y('cpta', "Can't copy! TypedArray destination cannot be mutated.");
          if (t === e) throw y('cpi', "Can't copy! Source and destination are identical.");
          return (
            z(e)
              ? (e.length = 0)
              : x(e, function(t, n) {
                  '$$hashKey' !== n && delete e[n];
                }),
            a.push(t),
            u.push(e),
            c(t, e, n)
          );
        }
        return l(t, n);
        function c(t, e, n) {
          if (--n < 0) return '...';
          var r,
            i = e.$$hashKey;
          if (z(t)) for (var o = 0, a = t.length; o < a; o++) e.push(l(t[o], n));
          else if (F(t)) for (r in t) e[r] = l(t[r], n);
          else if (t && 'function' == typeof t.hasOwnProperty)
            for (r in t) t.hasOwnProperty(r) && (e[r] = l(t[r], n));
          else for (r in t) s.call(t, r) && (e[r] = l(t[r], n));
          return O(e, i), e;
        }
        function l(t, e) {
          if (!H(t)) return t;
          var n = a.indexOf(t);
          if (-1 !== n) return u[n];
          if (K(t) || Y(t))
            throw y(
              'cpws',
              "Can't copy! Making copies of Window or Scope instances is not supported."
            );
          var r = !1,
            i = (function(t) {
              switch (m.call(t)) {
                case '[object Int8Array]':
                case '[object Int16Array]':
                case '[object Int32Array]':
                case '[object Float32Array]':
                case '[object Float64Array]':
                case '[object Uint8Array]':
                case '[object Uint8ClampedArray]':
                case '[object Uint16Array]':
                case '[object Uint32Array]':
                  return new t.constructor(l(t.buffer), t.byteOffset, t.length);
                case '[object ArrayBuffer]':
                  if (!t.slice) {
                    var e = new ArrayBuffer(t.byteLength);
                    return new Uint8Array(e).set(new Uint8Array(t)), e;
                  }
                  return t.slice(0);
                case '[object Boolean]':
                case '[object Number]':
                case '[object String]':
                case '[object Date]':
                  return new t.constructor(t.valueOf());
                case '[object RegExp]':
                  var n = new RegExp(t.source, t.toString().match(/[^/]*$/)[0]);
                  return (n.lastIndex = t.lastIndex), n;
                case '[object Blob]':
                  return new t.constructor([t], { type: t.type });
              }
              if (G(t.cloneNode)) return t.cloneNode(!0);
            })(t);
          return (
            void 0 === i && ((i = z(t) ? [] : Object.create(g(t))), (r = !0)),
            a.push(t),
            u.push(i),
            r ? c(t, i, e) : i
          );
        }
      }
      function st(t, e) {
        return t === e || (t != t && e != e);
      }
      function ut(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t != t && e != e) return !0;
        var n,
          r,
          i,
          o = typeof t;
        if (o === typeof e && 'object' === o) {
          if (!z(t)) {
            if (B(t)) return !!B(e) && st(t.getTime(), e.getTime());
            if (J(t)) return !!J(e) && t.toString() === e.toString();
            if (Y(t) || Y(e) || K(t) || K(e) || z(e) || B(e) || J(e)) return !1;
            for (r in ((i = Ft()), t))
              if ('$' !== r.charAt(0) && !G(t[r])) {
                if (!ut(t[r], e[r])) return !1;
                i[r] = !0;
              }
            for (r in e) if (!(r in i) && '$' !== r.charAt(0) && U(e[r]) && !G(e[r])) return !1;
            return !0;
          }
          if (!z(e)) return !1;
          if ((n = t.length) === e.length) {
            for (r = 0; r < n; r++) if (!ut(t[r], e[r])) return !1;
            return !0;
          }
        }
        return !1;
      }
      var ct = function() {
          if (!U(ct.rules)) {
            var e =
              t.document.querySelector('[ng-csp]') || t.document.querySelector('[data-ng-csp]');
            if (e) {
              var n = e.getAttribute('ng-csp') || e.getAttribute('data-ng-csp');
              ct.rules = {
                noUnsafeEval: !n || -1 !== n.indexOf('no-unsafe-eval'),
                noInlineStyle: !n || -1 !== n.indexOf('no-inline-style')
              };
            } else
              ct.rules = {
                noUnsafeEval: (function() {
                  try {
                    return new Function(''), !1;
                  } catch (t) {
                    return !0;
                  }
                })(),
                noInlineStyle: !1
              };
          }
          return ct.rules;
        },
        lt = function() {
          if (U(lt.name_)) return lt.name_;
          var e,
            n,
            r,
            i,
            o = Ot.length;
          for (n = 0; n < o; ++n)
            if (
              ((r = Ot[n]), (e = t.document.querySelector('[' + r.replace(':', '\\:') + 'jq]')))
            ) {
              i = e.getAttribute(r + 'jq');
              break;
            }
          return (lt.name_ = i);
        };
      function ft(t, e, n) {
        return t.concat(d.call(e, n));
      }
      function ht(t, e) {
        return d.call(t, e || 0);
      }
      function pt(t, e) {
        var n = arguments.length > 2 ? ht(arguments, 2) : [];
        return !G(e) || e instanceof RegExp
          ? e
          : n.length
            ? function() {
                return arguments.length ? e.apply(t, ft(n, arguments, 0)) : e.apply(t, n);
              }
            : function() {
                return arguments.length ? e.apply(t, arguments) : e.call(t);
              };
      }
      function dt(e, n) {
        var r = n;
        return (
          'string' == typeof e && '$' === e.charAt(0) && '$' === e.charAt(1)
            ? (r = void 0)
            : K(n)
              ? (r = '$WINDOW')
              : n && t.document === n
                ? (r = '$DOCUMENT')
                : Y(n) && (r = '$SCOPE'),
          r
        );
      }
      function vt(t, e) {
        if (!D(t)) return L(e) || (e = e ? 2 : null), JSON.stringify(t, dt, e);
      }
      function $t(t) {
        return q(t) ? JSON.parse(t) : t;
      }
      var mt = /:/g;
      function gt(t, e) {
        t = t.replace(mt, '');
        var n = Date.parse('Jan 01, 1970 00:00:00 ' + t) / 6e4;
        return T(n) ? e : n;
      }
      function yt(t, e) {
        return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t;
      }
      function bt(t, e, n) {
        n = n ? -1 : 1;
        var r = t.getTimezoneOffset();
        return yt(t, n * (gt(e, r) - r));
      }
      function wt(t) {
        t = f(t)
          .clone()
          .empty();
        var e = f('<div></div>')
          .append(t)
          .html();
        try {
          return t[0].nodeType === Bt
            ? u(e)
            : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(t, e) {
                return '<' + u(e);
              });
        } catch (t) {
          return u(e);
        }
      }
      function St(t) {
        try {
          return decodeURIComponent(t);
        } catch (t) {}
      }
      function xt(t) {
        var e = {};
        return (
          x((t || '').split('&'), function(t) {
            var n, r, i;
            t &&
              ((r = t = t.replace(/\+/g, '%20')),
              -1 !== (n = t.indexOf('=')) && ((r = t.substring(0, n)), (i = t.substring(n + 1))),
              U((r = St(r))) &&
                ((i = !U(i) || St(i)),
                s.call(e, r) ? (z(e[r]) ? e[r].push(i) : (e[r] = [e[r], i])) : (e[r] = i)));
          }),
          e
        );
      }
      function _t(t) {
        var e = [];
        return (
          x(t, function(t, n) {
            z(t)
              ? x(t, function(t) {
                  e.push(Ct(n, !0) + (!0 === t ? '' : '=' + Ct(t, !0)));
                })
              : e.push(Ct(n, !0) + (!0 === t ? '' : '=' + Ct(t, !0)));
          }),
          e.length ? e.join('&') : ''
        );
      }
      function Et(t) {
        return Ct(t, !0)
          .replace(/%26/gi, '&')
          .replace(/%3D/gi, '=')
          .replace(/%2B/gi, '+');
      }
      function Ct(t, e) {
        return encodeURIComponent(t)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%20/g, e ? '%20' : '+');
      }
      var Ot = ['ng-', 'data-ng-', 'ng:', 'x-ng-'];
      var Rt = (function(e) {
        var n = e.currentScript;
        if (!n) return !0;
        if (!(n instanceof t.HTMLScriptElement || n instanceof t.SVGScriptElement)) return !1;
        var r = n.attributes;
        return [r.getNamedItem('src'), r.getNamedItem('href'), r.getNamedItem('xlink:href')].every(
          function(t) {
            if (!t) return !0;
            if (!t.value) return !1;
            var n = e.createElement('a');
            if (((n.href = t.value), e.location.origin === n.origin)) return !0;
            switch (n.protocol) {
              case 'http:':
              case 'https:':
              case 'ftp:':
              case 'blob:':
              case 'file:':
              case 'data:':
                return !0;
              default:
                return !1;
            }
          }
        );
      })(t.document);
      function kt(e, n) {
        var r,
          i,
          o = {};
        if (
          (x(Ot, function(t) {
            var n = t + 'app';
            !r && e.hasAttribute && e.hasAttribute(n) && ((r = e), (i = e.getAttribute(n)));
          }),
          x(Ot, function(t) {
            var n,
              o = t + 'app';
            !r &&
              (n = e.querySelector('[' + o.replace(':', '\\:') + ']')) &&
              ((r = n), (i = n.getAttribute(o)));
          }),
          r)
        ) {
          if (!Rt)
            return void t.console.error(
              'AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.'
            );
          (o.strictDi =
            null !==
            (function(t, e) {
              var n,
                r,
                i = Ot.length;
              for (r = 0; r < i; ++r) if (((n = Ot[r] + e), q((n = t.getAttribute(n))))) return n;
              return null;
            })(r, 'strict-di')),
            n(r, i ? [i] : [], o);
        }
      }
      function Pt(e, n, r) {
        H(r) || (r = {});
        r = k({ strictDi: !1 }, r);
        var i = function() {
            if ((e = f(e)).injector()) {
              var i = e[0] === t.document ? 'document' : wt(e);
              throw y(
                'btstrpd',
                "App already bootstrapped with this element '{0}'",
                i.replace(/</, '&lt;').replace(/>/, '&gt;')
              );
            }
            (n = n || []).unshift([
              '$provide',
              function(t) {
                t.value('$rootElement', e);
              }
            ]),
              r.debugInfoEnabled &&
                n.push([
                  '$compileProvider',
                  function(t) {
                    t.debugInfoEnabled(!0);
                  }
                ]),
              n.unshift('ng');
            var o = Ze(n, r.strictDi);
            return (
              o.invoke([
                '$rootScope',
                '$rootElement',
                '$compile',
                '$injector',
                function(t, e, n, r) {
                  t.$apply(function() {
                    e.data('$injector', r), n(e)(t);
                  });
                }
              ]),
              o
            );
          },
          o = /^NG_ENABLE_DEBUG_INFO!/,
          a = /^NG_DEFER_BOOTSTRAP!/;
        if (
          (t && o.test(t.name) && ((r.debugInfoEnabled = !0), (t.name = t.name.replace(o, ''))),
          t && !a.test(t.name))
        )
          return i();
        (t.name = t.name.replace(a, '')),
          (b.resumeBootstrap = function(t) {
            return (
              x(t, function(t) {
                n.push(t);
              }),
              i()
            );
          }),
          G(b.resumeDeferredBootstrap) && b.resumeDeferredBootstrap();
      }
      function At() {
        (t.name = 'NG_ENABLE_DEBUG_INFO!' + t.name), t.location.reload();
      }
      function Tt(t) {
        var e = b.element(t).injector();
        if (!e) throw y('test', 'no injector found for element argument to getTestability');
        return e.get('$$testability');
      }
      var jt = /[A-Z]/g;
      function Vt(t, e) {
        return (
          (e = e || '_'),
          t.replace(jt, function(t, n) {
            return (n ? e : '') + t.toLowerCase();
          })
        );
      }
      var Mt = !1;
      function It(t, e, n) {
        if (!t) throw y('areq', "Argument '{0}' is {1}", e || '?', n || 'required');
        return t;
      }
      function Nt(t, e, n) {
        return (
          n && z(t) && (t = t[t.length - 1]),
          It(
            G(t),
            e,
            'not a function, got ' +
              (t && 'object' == typeof t ? t.constructor.name || 'Object' : typeof t)
          ),
          t
        );
      }
      function Dt(t, e) {
        if ('hasOwnProperty' === t) throw y('badname', 'hasOwnProperty is not a valid {0} name', e);
      }
      function Ut(t, e, n) {
        if (!e) return t;
        for (var r, i = e.split('.'), o = t, a = i.length, s = 0; s < a; s++)
          (r = i[s]), t && (t = (o = t)[r]);
        return !n && G(t) ? pt(o, t) : t;
      }
      function Ht(t) {
        for (var e, n = t[0], r = t[t.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)
          (e || t[i] !== n) && (e || (e = f(d.call(t, 0, i))), e.push(n));
        return e || t;
      }
      function Ft() {
        return Object.create(null);
      }
      function qt(t) {
        if (null == t) return '';
        switch (typeof t) {
          case 'string':
            break;
          case 'number':
            t = '' + t;
            break;
          default:
            t = !N(t) || z(t) || B(t) ? vt(t) : t.toString();
        }
        return t;
      }
      var Lt = 1,
        Bt = 3,
        zt = 8,
        Wt = 9,
        Gt = 11;
      function Jt(t, e) {
        if (z(t)) {
          e = e || [];
          for (var n = 0, r = t.length; n < r; n++) e[n] = t[n];
        } else if (H(t))
          for (var i in ((e = e || {}), t))
            ('$' === i.charAt(0) && '$' === i.charAt(1)) || (e[i] = t[i]);
        return e || t;
      }
      function Kt(t, e) {
        return 'function' == typeof t
          ? t.toString().replace(/ \{[\s\S]*$/, '')
          : D(t)
            ? 'undefined'
            : 'string' != typeof t
              ? (function(t, e) {
                  var n = [];
                  return (
                    r(e) && (t = b.copy(t, null, e)),
                    JSON.stringify(t, function(t, e) {
                      if (H((e = dt(t, e)))) {
                        if (n.indexOf(e) >= 0) return '...';
                        n.push(e);
                      }
                      return e;
                    })
                  );
                })(t, e)
              : t;
      }
      var Yt = { full: '1.6.10', major: 1, minor: 6, dot: 10, codeName: 'crystalline-persuasion' };
      de.expando = 'ng339';
      var Zt = (de.cache = {}),
        Qt = 1;
      de._data = function(t) {
        return this.cache[t[this.expando]] || {};
      };
      var Xt = /-([a-z])/g,
        te = /^-ms-/,
        ee = { mouseleave: 'mouseout', mouseenter: 'mouseover' },
        ne = i('jqLite');
      function re(t, e) {
        return e.toUpperCase();
      }
      function ie(t) {
        return t.replace(Xt, re);
      }
      var oe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ae = /<|&#?\w+;/,
        se = /<([\w:-]+)/,
        ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ce = {
          option: [1, '<select multiple="multiple">', '</select>'],
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', '']
        };
      function le(t) {
        return !ae.test(t);
      }
      function fe(t) {
        var e = t.nodeType;
        return e === Lt || !e || e === Wt;
      }
      function he(t, e) {
        var n,
          r,
          i,
          o,
          a = e.createDocumentFragment(),
          s = [];
        if (le(t)) s.push(e.createTextNode(t));
        else {
          for (
            n = a.appendChild(e.createElement('div')),
              r = (se.exec(t) || ['', ''])[1].toLowerCase(),
              i = ce[r] || ce._default,
              n.innerHTML = i[1] + t.replace(ue, '<$1></$2>') + i[2],
              o = i[0];
            o--;

          )
            n = n.lastChild;
          (s = ft(s, n.childNodes)), ((n = a.firstChild).textContent = '');
        }
        return (
          (a.textContent = ''),
          (a.innerHTML = ''),
          x(s, function(t) {
            a.appendChild(t);
          }),
          a
        );
      }
      (ce.optgroup = ce.option),
        (ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead),
        (ce.th = ce.td);
      var pe =
        t.Node.prototype.contains ||
        function(t) {
          return !!(16 & this.compareDocumentPosition(t));
        };
      function de(e) {
        if (e instanceof de) return e;
        var n, r, i, o;
        if ((q(e) && ((e = tt(e)), (n = !0)), !(this instanceof de))) {
          if (n && '<' !== e.charAt(0))
            throw ne(
              'nosel',
              'Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element'
            );
          return new de(e);
        }
        n
          ? _e(
              this,
              ((r = e),
              (i = i || t.document),
              (o = oe.exec(r)) ? [i.createElement(o[1])] : (o = he(r, i)) ? o.childNodes : [])
            )
          : G(e)
            ? ke(e)
            : _e(this, e);
      }
      function ve(t) {
        return t.cloneNode(!0);
      }
      function $e(t, e) {
        !e && fe(t) && f.cleanData([t]), t.querySelectorAll && f.cleanData(t.querySelectorAll('*'));
      }
      function me(t, e, n, r) {
        if (U(r)) throw ne('offargs', 'jqLite#off() does not support the `selector` argument');
        var i = ye(t),
          o = i && i.events,
          a = i && i.handle;
        if (a)
          if (e) {
            var s = function(e) {
              var r = o[e];
              U(n) && ot(r || [], n),
                (U(n) && r && r.length > 0) || (t.removeEventListener(e, a), delete o[e]);
            };
            x(e.split(' '), function(t) {
              s(t), ee[t] && s(ee[t]);
            });
          } else for (e in o) '$destroy' !== e && t.removeEventListener(e, a), delete o[e];
      }
      function ge(t, e) {
        var n = t.ng339,
          r = n && Zt[n];
        if (r) {
          if (e) return void delete r.data[e];
          r.handle && (r.events.$destroy && r.handle({}, '$destroy'), me(t)),
            delete Zt[n],
            (t.ng339 = void 0);
        }
      }
      function ye(t, e) {
        var n = t.ng339,
          r = n && Zt[n];
        return (
          e && !r && ((t.ng339 = n = ++Qt), (r = Zt[n] = { events: {}, data: {}, handle: void 0 })),
          r
        );
      }
      function be(t, e, n) {
        if (fe(t)) {
          var r,
            i = U(n),
            o = !i && e && !H(e),
            a = !e,
            s = ye(t, !o),
            u = s && s.data;
          if (i) u[ie(e)] = n;
          else {
            if (a) return u;
            if (o) return u && u[ie(e)];
            for (r in e) u[ie(r)] = e[r];
          }
        }
      }
      function we(t, e) {
        return (
          !!t.getAttribute &&
          (' ' + (t.getAttribute('class') || '') + ' ')
            .replace(/[\n\t]/g, ' ')
            .indexOf(' ' + e + ' ') > -1
        );
      }
      function Se(t, e) {
        if (e && t.setAttribute) {
          var n = (' ' + (t.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' '),
            r = n;
          x(e.split(' '), function(t) {
            (t = tt(t)), (r = r.replace(' ' + t + ' ', ' '));
          }),
            r !== n && t.setAttribute('class', tt(r));
        }
      }
      function xe(t, e) {
        if (e && t.setAttribute) {
          var n = (' ' + (t.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' '),
            r = n;
          x(e.split(' '), function(t) {
            (t = tt(t)), -1 === r.indexOf(' ' + t + ' ') && (r += t + ' ');
          }),
            r !== n && t.setAttribute('class', tt(r));
        }
      }
      function _e(t, e) {
        if (e)
          if (e.nodeType) t[t.length++] = e;
          else {
            var n = e.length;
            if ('number' == typeof n && e.window !== e) {
              if (n) for (var r = 0; r < n; r++) t[t.length++] = e[r];
            } else t[t.length++] = e;
          }
      }
      function Ee(t, e) {
        return Ce(t, '$' + (e || 'ngController') + 'Controller');
      }
      function Ce(t, e, n) {
        t.nodeType === Wt && (t = t.documentElement);
        for (var r = z(e) ? e : [e]; t; ) {
          for (var i = 0, o = r.length; i < o; i++) if (U((n = f.data(t, r[i])))) return n;
          t = t.parentNode || (t.nodeType === Gt && t.host);
        }
      }
      function Oe(t) {
        for ($e(t, !0); t.firstChild; ) t.removeChild(t.firstChild);
      }
      function Re(t, e) {
        e || $e(t);
        var n = t.parentNode;
        n && n.removeChild(t);
      }
      function ke(e) {
        function n() {
          t.document.removeEventListener('DOMContentLoaded', n),
            t.removeEventListener('load', n),
            e();
        }
        'complete' === t.document.readyState
          ? t.setTimeout(e)
          : (t.document.addEventListener('DOMContentLoaded', n), t.addEventListener('load', n));
      }
      var Pe = (de.prototype = {
          ready: ke,
          toString: function() {
            var t = [];
            return (
              x(this, function(e) {
                t.push('' + e);
              }),
              '[' + t.join(', ') + ']'
            );
          },
          eq: function(t) {
            return f(t >= 0 ? this[t] : this[this.length + t]);
          },
          length: 0,
          push: $,
          sort: [].sort,
          splice: [].splice
        }),
        Ae = {};
      x('multiple,selected,checked,disabled,readOnly,required,open'.split(','), function(t) {
        Ae[u(t)] = t;
      });
      var Te = {};
      x('input,select,option,textarea,button,form,details'.split(','), function(t) {
        Te[t] = !0;
      });
      var je = {
        ngMinlength: 'minlength',
        ngMaxlength: 'maxlength',
        ngMin: 'min',
        ngMax: 'max',
        ngPattern: 'pattern',
        ngStep: 'step'
      };
      function Ve(t, e) {
        var n = Ae[e.toLowerCase()];
        return n && Te[rt(t)] && n;
      }
      function Me(t, e, n) {
        n.call(t, e);
      }
      function Ie(t, e, n) {
        var r = e.relatedTarget;
        (r && (r === t || pe.call(t, r))) || n.call(t, e);
      }
      function Ne() {
        this.$get = function() {
          return k(de, {
            hasClass: function(t, e) {
              return t.attr && (t = t[0]), we(t, e);
            },
            addClass: function(t, e) {
              return t.attr && (t = t[0]), xe(t, e);
            },
            removeClass: function(t, e) {
              return t.attr && (t = t[0]), Se(t, e);
            }
          });
        };
      }
      function De(t, e) {
        var n = t && t.$$hashKey;
        if (n) return 'function' == typeof n && (n = t.$$hashKey()), n;
        var r = typeof t;
        return (n =
          'function' === r || ('object' === r && null !== t)
            ? (t.$$hashKey = r + ':' + (e || C)())
            : r + ':' + t);
      }
      x(
        {
          data: be,
          removeData: ge,
          hasData: function(t) {
            for (var e in Zt[t.ng339]) return !0;
            return !1;
          },
          cleanData: function(t) {
            for (var e = 0, n = t.length; e < n; e++) ge(t[e]);
          }
        },
        function(t, e) {
          de[e] = t;
        }
      ),
        x(
          {
            data: be,
            inheritedData: Ce,
            scope: function(t) {
              return f.data(t, '$scope') || Ce(t.parentNode || t, ['$isolateScope', '$scope']);
            },
            isolateScope: function(t) {
              return f.data(t, '$isolateScope') || f.data(t, '$isolateScopeNoTemplate');
            },
            controller: Ee,
            injector: function(t) {
              return Ce(t, '$injector');
            },
            removeAttr: function(t, e) {
              t.removeAttribute(e);
            },
            hasClass: we,
            css: function(t, e, n) {
              if (
                ((e = (function(t) {
                  return ie(t.replace(te, 'ms-'));
                })(e)),
                !U(n))
              )
                return t.style[e];
              t.style[e] = n;
            },
            attr: function(t, e, n) {
              var r,
                i = t.nodeType;
              if (i !== Bt && 2 !== i && i !== zt && t.getAttribute) {
                var o = u(e),
                  a = Ae[o];
                if (!U(n))
                  return (
                    (r = t.getAttribute(e)), a && null !== r && (r = o), null === r ? void 0 : r
                  );
                null === n || (!1 === n && a) ? t.removeAttribute(e) : t.setAttribute(e, a ? o : n);
              }
            },
            prop: function(t, e, n) {
              if (!U(n)) return t[e];
              t[e] = n;
            },
            text: (function() {
              return (t.$dv = ''), t;
              function t(t, e) {
                if (D(e)) {
                  var n = t.nodeType;
                  return n === Lt || n === Bt ? t.textContent : '';
                }
                t.textContent = e;
              }
            })(),
            val: function(t, e) {
              if (D(e)) {
                if (t.multiple && 'select' === rt(t)) {
                  var n = [];
                  return (
                    x(t.options, function(t) {
                      t.selected && n.push(t.value || t.text);
                    }),
                    n
                  );
                }
                return t.value;
              }
              t.value = e;
            },
            html: function(t, e) {
              if (D(e)) return t.innerHTML;
              $e(t, !0), (t.innerHTML = e);
            },
            empty: Oe
          },
          function(t, e) {
            de.prototype[e] = function(e, n) {
              var r,
                i,
                o = this.length;
              if (t !== Oe && D(2 === t.length && t !== we && t !== Ee ? e : n)) {
                if (H(e)) {
                  for (r = 0; r < o; r++)
                    if (t === be) t(this[r], e);
                    else for (i in e) t(this[r], i, e[i]);
                  return this;
                }
                for (var a = t.$dv, s = D(a) ? Math.min(o, 1) : o, u = 0; u < s; u++) {
                  var c = t(this[u], e, n);
                  a = a ? a + c : c;
                }
                return a;
              }
              for (r = 0; r < o; r++) t(this[r], e, n);
              return this;
            };
          }
        ),
        x(
          {
            removeData: ge,
            on: function(t, e, n, r) {
              if (U(r))
                throw ne(
                  'onargs',
                  'jqLite#on() does not support the `selector` or `eventData` parameters'
                );
              if (fe(t)) {
                var i = ye(t, !0),
                  o = i.events,
                  a = i.handle;
                a ||
                  (a = i.handle = (function(t, e) {
                    var n = function(n, r) {
                      n.isDefaultPrevented = function() {
                        return n.defaultPrevented;
                      };
                      var i = e[r || n.type],
                        o = i ? i.length : 0;
                      if (o) {
                        if (D(n.immediatePropagationStopped)) {
                          var a = n.stopImmediatePropagation;
                          n.stopImmediatePropagation = function() {
                            (n.immediatePropagationStopped = !0),
                              n.stopPropagation && n.stopPropagation(),
                              a && a.call(n);
                          };
                        }
                        n.isImmediatePropagationStopped = function() {
                          return !0 === n.immediatePropagationStopped;
                        };
                        var s = i.specialHandlerWrapper || Me;
                        o > 1 && (i = Jt(i));
                        for (var u = 0; u < o; u++)
                          n.isImmediatePropagationStopped() || s(t, n, i[u]);
                      }
                    };
                    return (n.elem = t), n;
                  })(t, o));
                for (
                  var s = e.indexOf(' ') >= 0 ? e.split(' ') : [e],
                    u = s.length,
                    c = function(e, r, i) {
                      var s = o[e];
                      s ||
                        (((s = o[e] = []).specialHandlerWrapper = r),
                        '$destroy' === e || i || t.addEventListener(e, a)),
                        s.push(n);
                    };
                  u--;

                )
                  (e = s[u]), ee[e] ? (c(ee[e], Ie), c(e, void 0, !0)) : c(e);
              }
            },
            off: me,
            one: function(t, e, n) {
              (t = f(t)).on(e, function r() {
                t.off(e, n), t.off(e, r);
              }),
                t.on(e, n);
            },
            replaceWith: function(t, e) {
              var n,
                r = t.parentNode;
              $e(t),
                x(new de(e), function(e) {
                  n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), (n = e);
                });
            },
            children: function(t) {
              var e = [];
              return (
                x(t.childNodes, function(t) {
                  t.nodeType === Lt && e.push(t);
                }),
                e
              );
            },
            contents: function(t) {
              return t.contentDocument || t.childNodes || [];
            },
            append: function(t, e) {
              var n = t.nodeType;
              if (n === Lt || n === Gt)
                for (var r = 0, i = (e = new de(e)).length; r < i; r++) {
                  var o = e[r];
                  t.appendChild(o);
                }
            },
            prepend: function(t, e) {
              if (t.nodeType === Lt) {
                var n = t.firstChild;
                x(new de(e), function(e) {
                  t.insertBefore(e, n);
                });
              }
            },
            wrap: function(t, e) {
              var n, r, i;
              (n = t),
                (r = f(e)
                  .eq(0)
                  .clone()[0]),
                (i = n.parentNode) && i.replaceChild(r, n),
                r.appendChild(n);
            },
            remove: Re,
            detach: function(t) {
              Re(t, !0);
            },
            after: function(t, e) {
              var n = t,
                r = t.parentNode;
              if (r)
                for (var i = 0, o = (e = new de(e)).length; i < o; i++) {
                  var a = e[i];
                  r.insertBefore(a, n.nextSibling), (n = a);
                }
            },
            addClass: xe,
            removeClass: Se,
            toggleClass: function(t, e, n) {
              e &&
                x(e.split(' '), function(e) {
                  var r = n;
                  D(r) && (r = !we(t, e)), (r ? xe : Se)(t, e);
                });
            },
            parent: function(t) {
              var e = t.parentNode;
              return e && e.nodeType !== Gt ? e : null;
            },
            next: function(t) {
              return t.nextElementSibling;
            },
            find: function(t, e) {
              return t.getElementsByTagName ? t.getElementsByTagName(e) : [];
            },
            clone: ve,
            triggerHandler: function(t, e, n) {
              var r,
                i,
                o,
                a = e.type || e,
                s = ye(t),
                u = s && s.events,
                c = u && u[a];
              c &&
                ((r = {
                  preventDefault: function() {
                    this.defaultPrevented = !0;
                  },
                  isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                  },
                  stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                  },
                  isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped;
                  },
                  stopPropagation: V,
                  type: a,
                  target: t
                }),
                e.type && (r = k(r, e)),
                (i = Jt(c)),
                (o = n ? [r].concat(n) : [r]),
                x(i, function(e) {
                  r.isImmediatePropagationStopped() || e.apply(t, o);
                }));
            }
          },
          function(t, e) {
            de.prototype[e] = function(e, n, r) {
              for (var i, o = 0, a = this.length; o < a; o++)
                D(i) ? U((i = t(this[o], e, n, r))) && (i = f(i)) : _e(i, t(this[o], e, n, r));
              return U(i) ? i : this;
            };
          }
        ),
        (de.prototype.bind = de.prototype.on),
        (de.prototype.unbind = de.prototype.off);
      var Ue = Object.create(null);
      function He() {
        (this._keys = []), (this._values = []), (this._lastKey = NaN), (this._lastIndex = -1);
      }
      He.prototype = {
        _idx: function(t) {
          return t === this._lastKey
            ? this._lastIndex
            : ((this._lastKey = t), (this._lastIndex = this._keys.indexOf(t)), this._lastIndex);
        },
        _transformKey: function(t) {
          return T(t) ? Ue : t;
        },
        get: function(t) {
          t = this._transformKey(t);
          var e = this._idx(t);
          if (-1 !== e) return this._values[e];
        },
        set: function(t, e) {
          t = this._transformKey(t);
          var n = this._idx(t);
          -1 === n && (n = this._lastIndex = this._keys.length),
            (this._keys[n] = t),
            (this._values[n] = e);
        },
        delete: function(t) {
          t = this._transformKey(t);
          var e = this._idx(t);
          return (
            -1 !== e &&
            (this._keys.splice(e, 1),
            this._values.splice(e, 1),
            (this._lastKey = NaN),
            (this._lastIndex = -1),
            !0)
          );
        }
      };
      var Fe = He,
        qe = [
          function() {
            this.$get = [
              function() {
                return Fe;
              }
            ];
          }
        ],
        Le = /^([^(]+?)=>/,
        Be = /^[^(]*\(\s*([^)]*)\)/m,
        ze = /,/,
        We = /^\s*(_?)(\S+?)\1\s*$/,
        Ge = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Je = i('$injector');
      function Ke(t) {
        return Function.prototype.toString.call(t);
      }
      function Ye(t) {
        var e = Ke(t).replace(Ge, '');
        return e.match(Le) || e.match(Be);
      }
      function Ze(t, e) {
        e = !0 === e;
        var n = {},
          r = 'Provider',
          i = [],
          o = new Fe(),
          a = {
            $provide: {
              provider: d(v),
              factory: d($),
              service: d(function(t, e) {
                return $(t, [
                  '$injector',
                  function(t) {
                    return t.instantiate(e);
                  }
                ]);
              }),
              value: d(function(t, e) {
                return $(t, I(e), !1);
              }),
              constant: d(function(t, e) {
                Dt(t, 'constant'), (a[t] = e), (u[t] = e);
              }),
              decorator: function(t, e) {
                var n = s.get(t + r),
                  i = n.$get;
                n.$get = function() {
                  var t = f.invoke(i, n);
                  return f.invoke(e, null, { $delegate: t });
                };
              }
            }
          },
          s = (a.$injector = g(a, function(t, e) {
            throw (b.isString(e) && i.push(e), Je('unpr', 'Unknown provider: {0}', i.join(' <- ')));
          })),
          u = {},
          c = g(u, function(t, e) {
            var n = s.get(t + r, e);
            return f.invoke(n.$get, n, void 0, t);
          }),
          f = c;
        (a['$injector' + r] = { $get: I(c) }), (f.modules = s.modules = Ft());
        var h = m(t);
        return (
          ((f = c.get('$injector')).strictDi = e),
          x(h, function(t) {
            t && f.invoke(t);
          }),
          (f.loadNewModules = function(t) {
            x(m(t), function(t) {
              t && f.invoke(t);
            });
          }),
          f
        );
        function d(t) {
          return function(e, n) {
            if (!H(e)) return t(e, n);
            x(e, E(t));
          };
        }
        function v(t, e) {
          if ((Dt(t, 'service'), (G(e) || z(e)) && (e = s.instantiate(e)), !e.$get))
            throw Je('pget', "Provider '{0}' must define $get factory method.", t);
          return (a[t + r] = e);
        }
        function $(t, e, n) {
          return v(t, {
            $get:
              !1 !== n
                ? (function(t, e) {
                    return function() {
                      var n = f.invoke(e, this);
                      if (D(n))
                        throw Je(
                          'undef',
                          "Provider '{0}' must return a value from $get factory method.",
                          t
                        );
                      return n;
                    };
                  })(t, e)
                : e
          });
        }
        function m(t) {
          It(D(t) || z(t), 'modulesToLoad', 'not an array');
          var e,
            n = [];
          return (
            x(t, function(t) {
              if (!o.get(t)) {
                o.set(t, !0);
                try {
                  q(t)
                    ? ((e = p(t)),
                      (f.modules[t] = e),
                      (n = n.concat(m(e.requires)).concat(e._runBlocks)),
                      r(e._invokeQueue),
                      r(e._configBlocks))
                    : G(t)
                      ? n.push(s.invoke(t))
                      : z(t)
                        ? n.push(s.invoke(t))
                        : Nt(t, 'module');
                } catch (e) {
                  throw (z(t) && (t = t[t.length - 1]),
                  e.message &&
                    e.stack &&
                    -1 === e.stack.indexOf(e.message) &&
                    (e = e.message + '\n' + e.stack),
                  Je(
                    'modulerr',
                    'Failed to instantiate module {0} due to:\n{1}',
                    t,
                    e.stack || e.message || e
                  ));
                }
              }
              function r(t) {
                var e, n;
                for (e = 0, n = t.length; e < n; e++) {
                  var r = t[e],
                    i = s.get(r[0]);
                  i[r[1]].apply(i, r[2]);
                }
              }
            }),
            n
          );
        }
        function g(t, o) {
          function s(e, r) {
            if (t.hasOwnProperty(e)) {
              if (t[e] === n)
                throw Je('cdep', 'Circular dependency found: {0}', e + ' <- ' + i.join(' <- '));
              return t[e];
            }
            try {
              return i.unshift(e), (t[e] = n), (t[e] = o(e, r)), t[e];
            } catch (r) {
              throw (t[e] === n && delete t[e], r);
            } finally {
              i.shift();
            }
          }
          function u(t, n, r) {
            for (var i = [], o = Ze.$$annotate(t, e, r), a = 0, u = o.length; a < u; a++) {
              var c = o[a];
              if ('string' != typeof c)
                throw Je(
                  'itkn',
                  'Incorrect injection token! Expected service name as string, got {0}',
                  c
                );
              i.push(n && n.hasOwnProperty(c) ? n[c] : s(c, r));
            }
            return i;
          }
          return {
            invoke: function(t, e, n, r) {
              'string' == typeof n && ((r = n), (n = null));
              var i = u(t, n, r);
              return (
                z(t) && (t = t[t.length - 1]),
                (function(t) {
                  if (l || 'function' != typeof t) return !1;
                  var e = t.$$ngIsClass;
                  return Z(e) || (e = t.$$ngIsClass = /^(?:class\b|constructor\()/.test(Ke(t))), e;
                })(t)
                  ? (i.unshift(null), new (Function.prototype.bind.apply(t, i))())
                  : t.apply(e, i)
              );
            },
            instantiate: function(t, e, n) {
              var r = z(t) ? t[t.length - 1] : t,
                i = u(t, e, n);
              return i.unshift(null), new (Function.prototype.bind.apply(r, i))();
            },
            get: s,
            annotate: Ze.$$annotate,
            has: function(e) {
              return a.hasOwnProperty(e + r) || t.hasOwnProperty(e);
            }
          };
        }
      }
      function Qe() {
        var e = !0;
        (this.disableAutoScrolling = function() {
          e = !1;
        }),
          (this.$get = [
            '$window',
            '$location',
            '$rootScope',
            function(n, r, i) {
              var o = n.document;
              function a(t) {
                if (t) {
                  t.scrollIntoView();
                  var e = (function() {
                    var t = s.yOffset;
                    if (G(t)) t = t();
                    else if (nt(t)) {
                      var e = t[0];
                      t =
                        'fixed' !== n.getComputedStyle(e).position
                          ? 0
                          : e.getBoundingClientRect().bottom;
                    } else L(t) || (t = 0);
                    return t;
                  })();
                  if (e) {
                    var r = t.getBoundingClientRect().top;
                    n.scrollBy(0, r - e);
                  }
                } else n.scrollTo(0, 0);
              }
              function s(t) {
                var e, n, i;
                (t = q(t) ? t : L(t) ? t.toString() : r.hash())
                  ? (e = o.getElementById(t))
                    ? a(e)
                    : ((n = o.getElementsByName(t)),
                      (i = null),
                      Array.prototype.some.call(n, function(t) {
                        if ('a' === rt(t)) return (i = t), !0;
                      }),
                      (e = i) ? a(e) : 'top' === t && a(null))
                  : a(null);
              }
              return (
                e &&
                  i.$watch(
                    function() {
                      return r.hash();
                    },
                    function(e, n) {
                      var r, o;
                      (e === n && '' === e) ||
                        ((r = function() {
                          i.$evalAsync(s);
                        }),
                        'complete' === (o = o || t).document.readyState
                          ? o.setTimeout(r)
                          : f(o).on('load', r));
                    }
                  ),
                s
              );
            }
          ]);
      }
      Ze.$$annotate = function(t, e, n) {
        var r, i;
        if ('function' == typeof t) {
          if (!(r = t.$inject)) {
            if (((r = []), t.length)) {
              if (e)
                throw ((q(n) && n) ||
                  (n =
                    t.name ||
                    (function(t) {
                      var e = Ye(t);
                      return e ? 'function(' + (e[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn';
                    })(t)),
                Je(
                  'strictdi',
                  '{0} is not using explicit annotation and cannot be invoked in strict mode',
                  n
                ));
              x(Ye(t)[1].split(ze), function(t) {
                t.replace(We, function(t, e, n) {
                  r.push(n);
                });
              });
            }
            t.$inject = r;
          }
        } else z(t) ? (Nt(t[(i = t.length - 1)], 'fn'), (r = t.slice(0, i))) : Nt(t, 'fn', !0);
        return r;
      };
      var Xe = i('$animate'),
        tn = 1;
      function en(t, e) {
        return t || e
          ? t
            ? e
              ? (z(t) && (t = t.join(' ')), z(e) && (e = e.join(' ')), t + ' ' + e)
              : t
            : e
          : '';
      }
      function nn(t) {
        return H(t) ? t : {};
      }
      var rn = function() {
          this.$get = V;
        },
        on = function() {
          var t = new Fe(),
            e = [];
          this.$get = [
            '$$AnimateRunner',
            '$rootScope',
            function(n, r) {
              return {
                enabled: V,
                on: V,
                off: V,
                pin: V,
                push: function(a, s, u, c) {
                  c && c(),
                    (u = u || {}).from && a.css(u.from),
                    u.to && a.css(u.to),
                    (u.addClass || u.removeClass) &&
                      (function(n, a, s) {
                        var u = t.get(n) || {},
                          c = i(u, a, !0),
                          l = i(u, s, !1);
                        (c || l) && (t.set(n, u), e.push(n), 1 === e.length && r.$$postDigest(o));
                      })(a, u.addClass, u.removeClass);
                  var l = new n();
                  return l.complete(), l;
                }
              };
              function i(t, e, n) {
                var r = !1;
                return (
                  e &&
                    x((e = q(e) ? e.split(' ') : z(e) ? e : []), function(e) {
                      e && ((r = !0), (t[e] = n));
                    }),
                  r
                );
              }
              function o() {
                x(e, function(e) {
                  var n = t.get(e);
                  if (n) {
                    var r = (function(t) {
                        q(t) && (t = t.split(' '));
                        var e = Ft();
                        return (
                          x(t, function(t) {
                            t.length && (e[t] = !0);
                          }),
                          e
                        );
                      })(e.attr('class')),
                      i = '',
                      o = '';
                    x(n, function(t, e) {
                      t !== !!r[e] &&
                        (t ? (i += (i.length ? ' ' : '') + e) : (o += (o.length ? ' ' : '') + e));
                    }),
                      x(e, function(t) {
                        i && xe(t, i), o && Se(t, o);
                      }),
                      t.delete(e);
                  }
                }),
                  (e.length = 0);
              }
            }
          ];
        },
        an = [
          '$provide',
          function(t) {
            var e = this,
              n = null,
              r = null;
            (this.$$registeredAnimations = Object.create(null)),
              (this.register = function(n, r) {
                if (n && '.' !== n.charAt(0))
                  throw Xe('notcsel', "Expecting class selector starting with '.' got '{0}'.", n);
                var i = n + '-animation';
                (e.$$registeredAnimations[n.substr(1)] = i), t.factory(i, r);
              }),
              (this.customFilter = function(t) {
                return 1 === arguments.length && (r = G(t) ? t : null), r;
              }),
              (this.classNameFilter = function(t) {
                if (
                  1 === arguments.length &&
                  ((n = t instanceof RegExp ? t : null) &&
                    new RegExp('[(\\s|\\/)]ng-animate[(\\s|\\/)]').test(n.toString()))
                )
                  throw ((n = null),
                  Xe(
                    'nongcls',
                    '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',
                    'ng-animate'
                  ));
                return n;
              }),
              (this.$get = [
                '$$animateQueue',
                function(t) {
                  function e(t, e, n) {
                    if (n) {
                      var r = (function(t) {
                        for (var e = 0; e < t.length; e++) {
                          var n = t[e];
                          if (n.nodeType === tn) return n;
                        }
                      })(n);
                      !r || r.parentNode || r.previousElementSibling || (n = null);
                    }
                    n ? n.after(t) : e.prepend(t);
                  }
                  return {
                    on: t.on,
                    off: t.off,
                    pin: t.pin,
                    enabled: t.enabled,
                    cancel: function(t) {
                      t.end && t.end();
                    },
                    enter: function(n, r, i, o) {
                      return (
                        (r = r && f(r)),
                        (i = i && f(i)),
                        e(n, (r = r || i.parent()), i),
                        t.push(n, 'enter', nn(o))
                      );
                    },
                    move: function(n, r, i, o) {
                      return (
                        (r = r && f(r)),
                        (i = i && f(i)),
                        e(n, (r = r || i.parent()), i),
                        t.push(n, 'move', nn(o))
                      );
                    },
                    leave: function(e, n) {
                      return t.push(e, 'leave', nn(n), function() {
                        e.remove();
                      });
                    },
                    addClass: function(e, n, r) {
                      return ((r = nn(r)).addClass = en(r.addclass, n)), t.push(e, 'addClass', r);
                    },
                    removeClass: function(e, n, r) {
                      return (
                        ((r = nn(r)).removeClass = en(r.removeClass, n)),
                        t.push(e, 'removeClass', r)
                      );
                    },
                    setClass: function(e, n, r, i) {
                      return (
                        ((i = nn(i)).addClass = en(i.addClass, n)),
                        (i.removeClass = en(i.removeClass, r)),
                        t.push(e, 'setClass', i)
                      );
                    },
                    animate: function(e, n, r, i, o) {
                      return (
                        ((o = nn(o)).from = o.from ? k(o.from, n) : n),
                        (o.to = o.to ? k(o.to, r) : r),
                        (i = i || 'ng-inline-animate'),
                        (o.tempClasses = en(o.tempClasses, i)),
                        t.push(e, 'animate', o)
                      );
                    }
                  };
                }
              ]);
          }
        ],
        sn = function() {
          this.$get = [
            '$$rAF',
            function(t) {
              var e = [];
              function n(n) {
                e.push(n),
                  e.length > 1 ||
                    t(function() {
                      for (var t = 0; t < e.length; t++) e[t]();
                      e = [];
                    });
              }
              return function() {
                var t = !1;
                return (
                  n(function() {
                    t = !0;
                  }),
                  function(e) {
                    t ? e() : n(e);
                  }
                );
              };
            }
          ];
        },
        un = function() {
          this.$get = [
            '$q',
            '$sniffer',
            '$$animateAsyncRun',
            '$$isDocumentHidden',
            '$timeout',
            function(t, e, n, r, i) {
              function o(t) {
                this.setHost(t);
                var e = n();
                (this._doneCallbacks = []),
                  (this._tick = function(t) {
                    r()
                      ? (function(t) {
                          i(t, 0, !1);
                        })(t)
                      : e(t);
                  }),
                  (this._state = 0);
              }
              return (
                (o.chain = function(t, e) {
                  var n = 0;
                  !(function r() {
                    if (n === t.length) return void e(!0);
                    t[n](function(t) {
                      !1 !== t ? (n++, r()) : e(!1);
                    });
                  })();
                }),
                (o.all = function(t, e) {
                  var n = 0,
                    r = !0;
                  function i(i) {
                    (r = r && i), ++n === t.length && e(r);
                  }
                  x(t, function(t) {
                    t.done(i);
                  });
                }),
                (o.prototype = {
                  setHost: function(t) {
                    this.host = t || {};
                  },
                  done: function(t) {
                    2 === this._state ? t() : this._doneCallbacks.push(t);
                  },
                  progress: V,
                  getPromise: function() {
                    if (!this.promise) {
                      var e = this;
                      this.promise = t(function(t, n) {
                        e.done(function(e) {
                          !1 === e ? n() : t();
                        });
                      });
                    }
                    return this.promise;
                  },
                  then: function(t, e) {
                    return this.getPromise().then(t, e);
                  },
                  catch: function(t) {
                    return this.getPromise().catch(t);
                  },
                  finally: function(t) {
                    return this.getPromise().finally(t);
                  },
                  pause: function() {
                    this.host.pause && this.host.pause();
                  },
                  resume: function() {
                    this.host.resume && this.host.resume();
                  },
                  end: function() {
                    this.host.end && this.host.end(), this._resolve(!0);
                  },
                  cancel: function() {
                    this.host.cancel && this.host.cancel(), this._resolve(!1);
                  },
                  complete: function(t) {
                    var e = this;
                    0 === e._state &&
                      ((e._state = 1),
                      e._tick(function() {
                        e._resolve(t);
                      }));
                  },
                  _resolve: function(t) {
                    2 !== this._state &&
                      (x(this._doneCallbacks, function(e) {
                        e(t);
                      }),
                      (this._doneCallbacks.length = 0),
                      (this._state = 2));
                  }
                }),
                o
              );
            }
          ];
        },
        cn = function() {
          this.$get = [
            '$$rAF',
            '$q',
            '$$AnimateRunner',
            function(t, e, n) {
              return function(e, r) {
                var i = r || {};
                i.$$prepared || (i = at(i)),
                  i.cleanupStyles && (i.from = i.to = null),
                  i.from && (e.css(i.from), (i.from = null));
                var o,
                  a = new n();
                return { start: s, end: s };
                function s() {
                  return (
                    t(function() {
                      !(function() {
                        i.addClass && (e.addClass(i.addClass), (i.addClass = null));
                        i.removeClass && (e.removeClass(i.removeClass), (i.removeClass = null));
                        i.to && (e.css(i.to), (i.to = null));
                      })(),
                        o || a.complete(),
                        (o = !0);
                    }),
                    a
                  );
                }
              };
            }
          ];
        };
      function ln() {
        this.$get = [
          '$window',
          '$log',
          '$sniffer',
          '$document',
          function(t, e, n, r) {
            return new function(t, e, n, r) {
              var i = this,
                o = t.location,
                a = t.history,
                s = t.setTimeout,
                u = t.clearTimeout,
                c = {};
              i.isMock = !1;
              var l = 0,
                h = [];
              function p(t) {
                try {
                  t.apply(null, ht(arguments, 1));
                } finally {
                  if (0 == --l)
                    for (; h.length; )
                      try {
                        h.pop()();
                      } catch (t) {
                        n.error(t);
                      }
                }
              }
              (i.$$completeOutstandingRequest = p),
                (i.$$incOutstandingRequestCount = function() {
                  l++;
                }),
                (i.notifyWhenNoOutstandingRequests = function(t) {
                  0 === l ? t() : h.push(t);
                });
              var d,
                v,
                $ = o.href,
                m = e.find('base'),
                g = null,
                y = r.history
                  ? function() {
                      try {
                        return a.state;
                      } catch (t) {}
                    }
                  : V;
              E(),
                (i.url = function(e, n, s) {
                  if (
                    (D(s) && (s = null),
                    o !== t.location && (o = t.location),
                    a !== t.history && (a = t.history),
                    e)
                  ) {
                    var u = v === s;
                    if ($ === e && (!r.history || u)) return i;
                    var c = $ && or($) === or(e);
                    return (
                      ($ = e),
                      (v = s),
                      !r.history || (c && u)
                        ? (c || (g = e),
                          n
                            ? o.replace(e)
                            : c
                              ? (o.hash = (function(t) {
                                  var e = t.indexOf('#');
                                  return -1 === e ? '' : t.substr(e);
                                })(e))
                              : (o.href = e),
                          o.href !== e && (g = e))
                        : (a[n ? 'replaceState' : 'pushState'](s, '', e), E()),
                      g && (g = e),
                      i
                    );
                  }
                  return g || o.href.replace(/%27/g, "'");
                }),
                (i.state = function() {
                  return d;
                });
              var b = [],
                w = !1;
              function S() {
                (g = null), C();
              }
              var _ = null;
              function E() {
                ut((d = D((d = y())) ? null : d), _) && (d = _), (_ = d), (v = d);
              }
              function C() {
                var t = v;
                E(),
                  ($ === i.url() && t === d) ||
                    (($ = i.url()),
                    (v = d),
                    x(b, function(t) {
                      t(i.url(), d);
                    }));
              }
              (i.onUrlChange = function(e) {
                return (
                  w || (r.history && f(t).on('popstate', S), f(t).on('hashchange', S), (w = !0)),
                  b.push(e),
                  e
                );
              }),
                (i.$$applicationDestroyed = function() {
                  f(t).off('hashchange popstate', S);
                }),
                (i.$$checkUrlChange = C),
                (i.baseHref = function() {
                  var t = m.attr('href');
                  return t ? t.replace(/^(https?:)?\/\/[^/]*/, '') : '';
                }),
                (i.defer = function(t, e) {
                  var n;
                  return (
                    l++,
                    (n = s(function() {
                      delete c[n], p(t);
                    }, e || 0)),
                    (c[n] = !0),
                    n
                  );
                }),
                (i.defer.cancel = function(t) {
                  return !!c[t] && (delete c[t], u(t), p(V), !0);
                });
            }(t, r, e, n);
          }
        ];
      }
      function fn() {
        this.$get = function() {
          var t = {};
          function e(e, n) {
            if (e in t) throw i('$cacheFactory')('iid', "CacheId '{0}' is already taken!", e);
            var r = 0,
              o = k({}, n, { id: e }),
              a = Ft(),
              s = (n && n.capacity) || Number.MAX_VALUE,
              u = Ft(),
              c = null,
              l = null;
            return (t[e] = {
              put: function(t, e) {
                if (!D(e)) {
                  if (s < Number.MAX_VALUE) f(u[t] || (u[t] = { key: t }));
                  return t in a || r++, (a[t] = e), r > s && this.remove(l.key), e;
                }
              },
              get: function(t) {
                if (s < Number.MAX_VALUE) {
                  var e = u[t];
                  if (!e) return;
                  f(e);
                }
                return a[t];
              },
              remove: function(t) {
                if (s < Number.MAX_VALUE) {
                  var e = u[t];
                  if (!e) return;
                  e === c && (c = e.p), e === l && (l = e.n), h(e.n, e.p), delete u[t];
                }
                t in a && (delete a[t], r--);
              },
              removeAll: function() {
                (a = Ft()), (r = 0), (u = Ft()), (c = l = null);
              },
              destroy: function() {
                (a = null), (o = null), (u = null), delete t[e];
              },
              info: function() {
                return k({}, o, { size: r });
              }
            });
            function f(t) {
              t !== c &&
                (l ? l === t && (l = t.n) : (l = t), h(t.n, t.p), h(t, c), ((c = t).n = null));
            }
            function h(t, e) {
              t !== e && (t && (t.p = e), e && (e.n = t));
            }
          }
          return (
            (e.info = function() {
              var e = {};
              return (
                x(t, function(t, n) {
                  e[n] = t.info();
                }),
                e
              );
            }),
            (e.get = function(e) {
              return t[e];
            }),
            e
          );
        };
      }
      function hn() {
        this.$get = [
          '$cacheFactory',
          function(t) {
            return t('templates');
          }
        ];
      }
      var pn = i('$compile');
      var dn = new function() {}();
      function vn(e, n) {
        var r = {},
          i = 'Directive',
          o = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
          a = /(([\w-]+)(?::([^;]+))?;?)/,
          c = (function(t) {
            var e,
              n = {},
              r = t.split(',');
            for (e = 0; e < r.length; e++) n[r[e]] = !0;
            return n;
          })('ngSrc,ngSrcset,src,srcset'),
          h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
          p = /^(on[a-z]+|formaction)$/,
          d = Ft();
        function v(t, e, n) {
          var r = /^([@&<]|=(\*?))(\??)\s*([\w$]*)$/,
            i = Ft();
          return (
            x(t, function(t, o) {
              if ((t = t.trim()) in d) i[o] = d[t];
              else {
                var a = t.match(r);
                if (!a)
                  throw pn(
                    'iscp',
                    "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",
                    e,
                    o,
                    t,
                    n ? 'controller bindings definition' : 'isolate scope definition'
                  );
                (i[o] = {
                  mode: a[1][0],
                  collection: '*' === a[2],
                  optional: '?' === a[3],
                  attrName: a[4] || o
                }),
                  a[4] && (d[t] = i[o]);
              }
            }),
            i
          );
        }
        function $(t, e) {
          var n = { isolateScope: null, bindToController: null };
          if (
            (H(t.scope) &&
              (!0 === t.bindToController
                ? ((n.bindToController = v(t.scope, e, !0)), (n.isolateScope = {}))
                : (n.isolateScope = v(t.scope, e, !1))),
            H(t.bindToController) && (n.bindToController = v(t.bindToController, e, !0)),
            n.bindToController && !t.controller)
          )
            throw pn('noctrl', "Cannot bind to controller without directive '{0}'s controller.", e);
          return n;
        }
        (this.directive = function t(n, o) {
          return (
            It(n, 'name'),
            Dt(n, 'directive'),
            q(n)
              ? (!(function(t) {
                  var e = t.charAt(0);
                  if (!e || e !== u(e))
                    throw pn(
                      'baddir',
                      "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter",
                      t
                    );
                  if (t !== t.trim())
                    throw pn(
                      'baddir',
                      "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",
                      t
                    );
                })(n),
                It(o, 'directiveFactory'),
                r.hasOwnProperty(n) ||
                  ((r[n] = []),
                  e.factory(n + i, [
                    '$injector',
                    '$exceptionHandler',
                    function(t, e) {
                      var i = [];
                      return (
                        x(r[n], function(r, o) {
                          try {
                            var a = t.invoke(r);
                            G(a)
                              ? (a = { compile: I(a) })
                              : !a.compile && a.link && (a.compile = I(a.link)),
                              (a.priority = a.priority || 0),
                              (a.index = o),
                              (a.name = a.name || n),
                              (a.require = (function(t) {
                                var e = t.require || (t.controller && t.name);
                                return (
                                  !z(e) &&
                                    H(e) &&
                                    x(e, function(t, n) {
                                      var r = t.match(h);
                                      t.substring(r[0].length) || (e[n] = r[0] + n);
                                    }),
                                  e
                                );
                              })(a)),
                              (a.restrict = (function(t, e) {
                                if (t && (!q(t) || !/[EACM]/.test(t)))
                                  throw pn(
                                    'badrestrict',
                                    "Restrict property '{0}' of directive '{1}' is invalid",
                                    t,
                                    e
                                  );
                                return t || 'EA';
                              })(a.restrict, n)),
                              (a.$$moduleName = r.$$moduleName),
                              i.push(a);
                          } catch (t) {
                            e(t);
                          }
                        }),
                        i
                      );
                    }
                  ])),
                r[n].push(o))
              : x(n, E(t)),
            this
          );
        }),
          (this.component = function t(e, n) {
            if (!q(e)) return x(e, E(pt(this, t))), this;
            var r = n.controller || function() {};
            function i(t) {
              function e(e) {
                return G(e) || z(e)
                  ? function(n, r) {
                      return t.invoke(e, this, { $element: n, $attrs: r });
                    }
                  : e;
              }
              var i = n.template || n.templateUrl ? n.template : '',
                o = {
                  controller: r,
                  controllerAs:
                    (function(t, e) {
                      if (e && q(e)) return e;
                      if (q(t)) {
                        var n = xn.exec(t);
                        if (n) return n[3];
                      }
                    })(n.controller) ||
                    n.controllerAs ||
                    '$ctrl',
                  template: e(i),
                  templateUrl: e(n.templateUrl),
                  transclude: n.transclude,
                  scope: {},
                  bindToController: n.bindings || {},
                  restrict: 'E',
                  require: n.require
                };
              return (
                x(n, function(t, e) {
                  '$' === e.charAt(0) && (o[e] = t);
                }),
                o
              );
            }
            return (
              x(n, function(t, e) {
                '$' === e.charAt(0) && ((i[e] = t), G(r) && (r[e] = t));
              }),
              (i.$inject = ['$injector']),
              this.directive(e, i)
            );
          }),
          (this.aHrefSanitizationWhitelist = function(t) {
            return U(t) ? (n.aHrefSanitizationWhitelist(t), this) : n.aHrefSanitizationWhitelist();
          }),
          (this.imgSrcSanitizationWhitelist = function(t) {
            return U(t)
              ? (n.imgSrcSanitizationWhitelist(t), this)
              : n.imgSrcSanitizationWhitelist();
          });
        var g = !0;
        this.debugInfoEnabled = function(t) {
          return U(t) ? ((g = t), this) : g;
        };
        var y = !1;
        this.preAssignBindingsEnabled = function(t) {
          return U(t) ? ((y = t), this) : y;
        };
        var b = !1;
        this.strictComponentBindingsEnabled = function(t) {
          return U(t) ? ((b = t), this) : b;
        };
        var w = 10;
        this.onChangesTtl = function(t) {
          return arguments.length ? ((w = t), this) : w;
        };
        var S = !0;
        this.commentDirectivesEnabled = function(t) {
          return arguments.length ? ((S = t), this) : S;
        };
        var _ = !0;
        (this.cssClassDirectivesEnabled = function(t) {
          return arguments.length ? ((_ = t), this) : _;
        }),
          (this.$get = [
            '$injector',
            '$interpolate',
            '$exceptionHandler',
            '$templateRequest',
            '$parse',
            '$controller',
            '$rootScope',
            '$sce',
            '$animate',
            '$$sanitizeUri',
            function(e, n, d, v, E, C, O, R, P, A) {
              var T,
                I = /^\w/,
                N = t.document.createElement('div'),
                F = S,
                L = _,
                B = w;
              function J() {
                try {
                  if (!--B)
                    throw ((T = void 0),
                    pn('infchng', '{0} $onChanges() iterations reached. Aborting!\n', w));
                  O.$apply(function() {
                    for (var t = 0, e = T.length; t < e; ++t)
                      try {
                        T[t]();
                      } catch (t) {
                        d(t);
                      }
                    T = void 0;
                  });
                } finally {
                  B++;
                }
              }
              function K(t, e) {
                if (e) {
                  var n,
                    r,
                    i,
                    o = Object.keys(e);
                  for (n = 0, r = o.length; n < r; n++) this[(i = o[n])] = e[i];
                } else this.$attr = {};
                this.$$element = t;
              }
              function Q(t, e) {
                try {
                  t.addClass(e);
                } catch (t) {}
              }
              K.prototype = {
                $normalize: yn,
                $addClass: function(t) {
                  t && t.length > 0 && P.addClass(this.$$element, t);
                },
                $removeClass: function(t) {
                  t && t.length > 0 && P.removeClass(this.$$element, t);
                },
                $updateClass: function(t, e) {
                  var n = bn(t, e);
                  n && n.length && P.addClass(this.$$element, n);
                  var r = bn(e, t);
                  r && r.length && P.removeClass(this.$$element, r);
                },
                $set: function(t, e, n, r) {
                  var i,
                    o = Ve(this.$$element[0], t),
                    a = je[t],
                    s = t;
                  if (
                    (o ? (this.$$element.prop(t, e), (r = o)) : a && ((this[a] = e), (s = a)),
                    (this[t] = e),
                    r
                      ? (this.$attr[t] = r)
                      : (r = this.$attr[t]) || (this.$attr[t] = r = Vt(t, '-')),
                    ('a' === (i = rt(this.$$element)) && ('href' === t || 'xlinkHref' === t)) ||
                      ('img' === i && 'src' === t))
                  )
                    this[t] = e = null == e ? e : A(e, 'src' === t);
                  else if ('img' === i && 'srcset' === t && U(e)) {
                    for (
                      var u = '',
                        c = tt(e),
                        l = /\s/.test(c) ? /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/ : /(,)/,
                        f = c.split(l),
                        h = Math.floor(f.length / 2),
                        p = 0;
                      p < h;
                      p++
                    ) {
                      var v = 2 * p;
                      (u += A(tt(f[v]), !0)), (u += ' ' + tt(f[v + 1]));
                    }
                    var $ = tt(f[2 * p]).split(/\s/);
                    (u += A(tt($[0]), !0)),
                      2 === $.length && (u += ' ' + tt($[1])),
                      (this[t] = e = u);
                  }
                  !1 !== n &&
                    (null == e
                      ? this.$$element.removeAttr(r)
                      : I.test(r)
                        ? this.$$element.attr(r, e)
                        : (function(t, e, n) {
                            N.innerHTML = '<span ' + e + '>';
                            var r = N.firstChild.attributes,
                              i = r[0];
                            r.removeNamedItem(i.name), (i.value = n), t.attributes.setNamedItem(i);
                          })(this.$$element[0], r, e));
                  var m = this.$$observers;
                  m &&
                    x(m[s], function(t) {
                      try {
                        t(e);
                      } catch (t) {
                        d(t);
                      }
                    });
                },
                $observe: function(t, e) {
                  var n = this,
                    r = n.$$observers || (n.$$observers = Ft()),
                    i = r[t] || (r[t] = []);
                  return (
                    i.push(e),
                    O.$evalAsync(function() {
                      i.$$inter || !n.hasOwnProperty(t) || D(n[t]) || e(n[t]);
                    }),
                    function() {
                      ot(i, e);
                    }
                  );
                }
              };
              var X = n.startSymbol(),
                et = n.endSymbol(),
                nt =
                  '{{' === X && '}}' === et
                    ? M
                    : function(t) {
                        return t.replace(/\{\{/g, X).replace(/}}/g, et);
                      },
                it = /^ngAttr[A-Z]/,
                at = /^(.+)Start$/;
              return (
                (ct.$$addBindingInfo = g
                  ? function(t, e) {
                      var n = t.data('$binding') || [];
                      z(e) ? (n = n.concat(e)) : n.push(e), t.data('$binding', n);
                    }
                  : V),
                (ct.$$addBindingClass = g
                  ? function(t) {
                      Q(t, 'ng-binding');
                    }
                  : V),
                (ct.$$addScopeInfo = g
                  ? function(t, e, n, r) {
                      var i = n ? (r ? '$isolateScopeNoTemplate' : '$isolateScope') : '$scope';
                      t.data(i, e);
                    }
                  : V),
                (ct.$$addScopeClass = g
                  ? function(t, e) {
                      Q(t, e ? 'ng-isolate-scope' : 'ng-scope');
                    }
                  : V),
                (ct.$$createComment = function(e, n) {
                  var r = '';
                  return (
                    g && ((r = ' ' + (e || '') + ': '), n && (r += n + ' ')),
                    t.document.createComment(r)
                  );
                }),
                ct
              );
              function ct(t, e, n, r, i) {
                t instanceof f || (t = f(t));
                var o = lt(t, e, t, n, r, i);
                ct.$$addScopeClass(t);
                var a = null;
                return function(e, n, r) {
                  if (!t) throw pn('multilink', 'This element has already been linked.');
                  It(e, 'scope'), i && i.needsNewScope && (e = e.$parent.$new());
                  var s,
                    u,
                    c,
                    l = (r = r || {}).parentBoundTranscludeFn,
                    h = r.transcludeControllers,
                    p = r.futureParentElement;
                  if (
                    (l && l.$$boundTransclude && (l = l.$$boundTransclude),
                    a ||
                      ((u = (s = p) && s[0]),
                      (a =
                        u && 'foreignobject' !== rt(u) && m.call(u).match(/SVG/) ? 'svg' : 'html')),
                    (c =
                      'html' !== a
                        ? f(
                            kt(
                              a,
                              f('<div></div>')
                                .append(t)
                                .html()
                            )
                          )
                        : n
                          ? Pe.clone.call(t)
                          : t),
                    h)
                  )
                    for (var d in h) c.data('$' + d + 'Controller', h[d].instance);
                  return (
                    ct.$$addScopeInfo(c, e),
                    n && n(c, e),
                    o && o(e, c, c, l),
                    n || (t = o = null),
                    c
                  );
                };
              }
              function lt(t, e, n, r, i, o) {
                for (
                  var a, s, u, c, h, p, d, v = [], $ = z(t) || t instanceof f, m = 0;
                  m < t.length;
                  m++
                )
                  (a = new K()),
                    11 === l && ft(t, m, $),
                    (u = (s = vt(t[m], [], a, 0 === m ? r : void 0, i)).length
                      ? yt(s, t[m], a, e, n, null, [], [], o)
                      : null) &&
                      u.scope &&
                      ct.$$addScopeClass(a.$$element),
                    (h =
                      (u && u.terminal) || !(c = t[m].childNodes) || !c.length
                        ? null
                        : lt(
                            c,
                            u
                              ? (u.transcludeOnThisElement || !u.templateOnThisElement) &&
                                u.transclude
                              : e
                          )),
                    (u || h) && (v.push(m, u, h), (p = !0), (d = d || u)),
                    (o = null);
                return p
                  ? function(t, n, r, i) {
                      var o, a, s, u, c, l, h, p, $;
                      if (d) {
                        var m = n.length;
                        for ($ = new Array(m), c = 0; c < v.length; c += 3)
                          (h = v[c]), ($[h] = n[h]);
                      } else $ = n;
                      for (c = 0, l = v.length; c < l; )
                        (s = $[v[c++]]),
                          (o = v[c++]),
                          (a = v[c++]),
                          o
                            ? (o.scope ? ((u = t.$new()), ct.$$addScopeInfo(f(s), u)) : (u = t),
                              (p = o.transcludeOnThisElement
                                ? dt(t, o.transclude, i)
                                : !o.templateOnThisElement && i
                                  ? i
                                  : !i && e
                                    ? dt(t, e)
                                    : null),
                              o(a, u, s, r, p))
                            : a && a(t, s.childNodes, void 0, i);
                    }
                  : null;
              }
              function ft(t, e, n) {
                var r,
                  i = t[e],
                  o = i.parentNode;
                if (i.nodeType === Bt)
                  for (; (r = o ? i.nextSibling : t[e + 1]) && r.nodeType === Bt; )
                    (i.nodeValue = i.nodeValue + r.nodeValue),
                      r.parentNode && r.parentNode.removeChild(r),
                      n && r === t[e + 1] && t.splice(e + 1, 1);
              }
              function dt(t, e, n) {
                function r(r, i, o, a, s) {
                  return (
                    r || ((r = t.$new(!1, s)).$$transcluded = !0),
                    e(r, i, {
                      parentBoundTranscludeFn: n,
                      transcludeControllers: o,
                      futureParentElement: a
                    })
                  );
                }
                var i = (r.$$slots = Ft());
                for (var o in e.$$slots)
                  e.$$slots[o] ? (i[o] = dt(t, e.$$slots[o], n)) : (i[o] = null);
                return r;
              }
              function vt(t, e, r, i, s) {
                var u,
                  c,
                  l,
                  f = t.nodeType,
                  h = r.$attr;
                switch (f) {
                  case Lt:
                    xt(e, yn((c = rt(t))), 'E', i, s);
                    for (
                      var p, d, v, $, m, g, y = t.attributes, b = 0, w = y && y.length;
                      b < w;
                      b++
                    ) {
                      var S = !1,
                        x = !1;
                      (d = (p = y[b]).name),
                        (m = p.value),
                        ($ = yn(d)),
                        (g = it.test($)) &&
                          (d = d
                            .replace(mn, '')
                            .substr(8)
                            .replace(/_(.)/g, function(t, e) {
                              return e.toUpperCase();
                            }));
                      var _ = $.match(at);
                      _ &&
                        _t(_[1]) &&
                        ((S = d),
                        (x = d.substr(0, d.length - 5) + 'end'),
                        (d = d.substr(0, d.length - 6))),
                        (h[(v = yn(d.toLowerCase()))] = d),
                        (!g && r.hasOwnProperty(v)) || ((r[v] = m), Ve(t, v) && (r[v] = !0)),
                        Pt(t, e, m, v, g),
                        xt(e, v, 'A', i, s, S, x);
                    }
                    if (
                      ('input' === c &&
                        'hidden' === t.getAttribute('type') &&
                        t.setAttribute('autocomplete', 'off'),
                      !L)
                    )
                      break;
                    if ((H((l = t.className)) && (l = l.animVal), q(l) && '' !== l))
                      for (; (u = a.exec(l)); )
                        xt(e, (v = yn(u[2])), 'C', i, s) && (r[v] = tt(u[3])),
                          (l = l.substr(u.index + u[0].length));
                    break;
                  case Bt:
                    !(function(t, e) {
                      var r = n(e, !0);
                      r &&
                        t.push({
                          priority: 0,
                          compile: function(t) {
                            var e = t.parent(),
                              n = !!e.length;
                            return (
                              n && ct.$$addBindingClass(e),
                              function(t, e) {
                                var i = e.parent();
                                n || ct.$$addBindingClass(i),
                                  ct.$$addBindingInfo(i, r.expressions),
                                  t.$watch(r, function(t) {
                                    e[0].nodeValue = t;
                                  });
                              }
                            );
                          }
                        });
                    })(e, t.nodeValue);
                    break;
                  case zt:
                    if (!F) break;
                    !(function(t, e, n, r, i) {
                      try {
                        var a = o.exec(t.nodeValue);
                        if (a) {
                          var s = yn(a[1]);
                          xt(e, s, 'M', r, i) && (n[s] = tt(a[2]));
                        }
                      } catch (t) {}
                    })(t, e, r, i, s);
                }
                return e.sort(Ot), e;
              }
              function $t(t, e, n) {
                var r = [],
                  i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e))
                  do {
                    if (!t)
                      throw pn(
                        'uterdir',
                        "Unterminated attribute, found '{0}' but no matching '{1}' found.",
                        e,
                        n
                      );
                    t.nodeType === Lt && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--),
                      r.push(t),
                      (t = t.nextSibling);
                  } while (i > 0);
                else r.push(t);
                return f(r);
              }
              function mt(t, e, n) {
                return function(r, i, o, a, s) {
                  return (i = $t(i[0], e, n)), t(r, i, o, a, s);
                };
              }
              function gt(t, e, n, r, i, o) {
                var a;
                return t
                  ? ct(e, n, r, i, o)
                  : function() {
                      return (
                        a || ((a = ct(e, n, r, i, o)), (e = n = o = null)), a.apply(this, arguments)
                      );
                    };
              }
              function yt(t, e, n, r, i, o, a, s, u) {
                u = u || {};
                for (
                  var c,
                    l,
                    h,
                    p,
                    v,
                    $ = -Number.MAX_VALUE,
                    m = u.newScopeDirective,
                    g = u.controllerDirectives,
                    b = u.newIsolateScopeDirective,
                    w = u.templateDirective,
                    S = u.nonTlbTranscludeDirective,
                    _ = !1,
                    E = !1,
                    O = u.hasElementTranscludeDirective,
                    R = (n.$$element = f(e)),
                    P = o,
                    A = r,
                    T = !1,
                    j = !1,
                    V = 0,
                    M = t.length;
                  V < M;
                  V++
                ) {
                  var I = (c = t[V]).$$start,
                    N = c.$$end;
                  if ((I && (R = $t(e, I, N)), (h = void 0), $ > c.priority)) break;
                  if (
                    ((v = c.scope) &&
                      (c.templateUrl ||
                        (H(v)
                          ? (Rt('new/isolated scope', b || m, c, R), (b = c))
                          : Rt('new/isolated scope', b, c, R)),
                      (m = m || c)),
                    (l = c.name),
                    !T &&
                      ((c.replace && (c.templateUrl || c.template)) || (c.transclude && !c.$$tlb)))
                  ) {
                    for (var U, F = V + 1; (U = t[F++]); )
                      if (
                        (U.transclude && !U.$$tlb) ||
                        (U.replace && (U.templateUrl || U.template))
                      ) {
                        j = !0;
                        break;
                      }
                    T = !0;
                  }
                  if (
                    (!c.templateUrl &&
                      c.controller &&
                      ((g = g || Ft()), Rt("'" + l + "' controller", g[l], c, R), (g[l] = c)),
                    (v = c.transclude))
                  )
                    if (
                      ((_ = !0), c.$$tlb || (Rt('transclusion', S, c, R), (S = c)), 'element' === v)
                    )
                      (O = !0),
                        ($ = c.priority),
                        (h = R),
                        (R = n.$$element = f(ct.$$createComment(l, n[l]))),
                        (e = R[0]),
                        At(i, ht(h), e),
                        (h[0].$$parentNode = h[0].parentNode),
                        (A = gt(j, h, r, $, P && P.name, { nonTlbTranscludeDirective: S }));
                    else {
                      var q = Ft();
                      if (H(v)) {
                        h = [];
                        var L = Ft(),
                          B = Ft();
                        for (var W in (x(v, function(t, e) {
                          var n = '?' === t.charAt(0);
                          (t = n ? t.substring(1) : t), (L[t] = e), (q[e] = null), (B[e] = n);
                        }),
                        x(R.contents(), function(t) {
                          var e = L[yn(rt(t))];
                          e ? ((B[e] = !0), (q[e] = q[e] || []), q[e].push(t)) : h.push(t);
                        }),
                        x(B, function(t, e) {
                          if (!t)
                            throw pn(
                              'reqslot',
                              'Required transclusion slot `{0}` was not filled.',
                              e
                            );
                        }),
                        q))
                          q[W] && (q[W] = gt(j, q[W], r));
                      } else h = f(ve(e)).contents();
                      R.empty(),
                        ((A = gt(j, h, r, void 0, void 0, {
                          needsNewScope: c.$$isolateScope || c.$$newScope
                        })).$$slots = q);
                    }
                  if (c.template)
                    if (
                      ((E = !0),
                      Rt('template', w, c, R),
                      (w = c),
                      (v = G(c.template) ? c.template(R, n) : c.template),
                      (v = nt(v)),
                      c.replace)
                    ) {
                      if (
                        ((P = c),
                        (h = le(v) ? [] : wn(kt(c.templateNamespace, tt(v)))),
                        (e = h[0]),
                        1 !== h.length || e.nodeType !== Lt)
                      )
                        throw pn(
                          'tplrt',
                          "Template for directive '{0}' must have exactly one root element. {1}",
                          l,
                          ''
                        );
                      At(i, R, e);
                      var J = { $attr: {} },
                        Z = vt(e, [], J),
                        Q = t.splice(V + 1, t.length - (V + 1));
                      (b || m) && St(Z, b, m),
                        (t = t.concat(Z).concat(Q)),
                        Et(n, J),
                        (M = t.length);
                    } else R.html(v);
                  if (c.templateUrl)
                    (E = !0),
                      Rt('template', w, c, R),
                      (w = c),
                      c.replace && (P = c),
                      (it = Ct(t.splice(V, t.length - V), R, n, i, _ && A, a, s, {
                        controllerDirectives: g,
                        newScopeDirective: m !== c && m,
                        newIsolateScopeDirective: b,
                        templateDirective: w,
                        nonTlbTranscludeDirective: S
                      })),
                      (M = t.length);
                  else if (c.compile)
                    try {
                      p = c.compile(R, n, A);
                      var X = c.$$originalDirective || c;
                      G(p) ? et(null, pt(X, p), I, N) : p && et(pt(X, p.pre), pt(X, p.post), I, N);
                    } catch (t) {
                      d(t, wt(R));
                    }
                  c.terminal && ((it.terminal = !0), ($ = Math.max($, c.priority)));
                }
                return (
                  (it.scope = m && !0 === m.scope),
                  (it.transcludeOnThisElement = _),
                  (it.templateOnThisElement = E),
                  (it.transclude = A),
                  (u.hasElementTranscludeDirective = O),
                  it
                );
                function et(t, e, n, r) {
                  t &&
                    (n && (t = mt(t, n, r)),
                    (t.require = c.require),
                    (t.directiveName = l),
                    (b === c || c.$$isolateScope) && (t = Tt(t, { isolateScope: !0 })),
                    a.push(t)),
                    e &&
                      (n && (e = mt(e, n, r)),
                      (e.require = c.require),
                      (e.directiveName = l),
                      (b === c || c.$$isolateScope) && (e = Tt(e, { isolateScope: !0 })),
                      s.push(e));
                }
                function it(t, r, i, o, u) {
                  var c, l, h, p, v, $, S, _, E, R;
                  for (var P in (e === i
                    ? ((E = n), (_ = n.$$element))
                    : (E = new K((_ = f(i)), n)),
                  (v = r),
                  b ? (p = r.$new(!0)) : m && (v = r.$parent),
                  u &&
                    (((S = function(t, e, n, r) {
                      var i;
                      Y(t) || ((r = n), (n = e), (e = t), (t = void 0));
                      O && (i = $);
                      n || (n = O ? _.parent() : _);
                      if (!r) return u(t, e, i, n, M);
                      var o = u.$$slots[r];
                      if (o) return o(t, e, i, n, M);
                      if (D(o))
                        throw pn(
                          'noslot',
                          'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',
                          r,
                          wt(_)
                        );
                    }).$$boundTransclude = u),
                    (S.isSlotFilled = function(t) {
                      return !!u.$$slots[t];
                    })),
                  g &&
                    ($ = (function(t, e, n, r, i, o, a) {
                      var s = Ft();
                      for (var u in r) {
                        var c = r[u],
                          l = {
                            $scope: c === a || c.$$isolateScope ? i : o,
                            $element: t,
                            $attrs: e,
                            $transclude: n
                          },
                          f = c.controller;
                        '@' === f && (f = e[c.name]);
                        var h = C(f, l, !0, c.controllerAs);
                        (s[c.name] = h), t.data('$' + c.name + 'Controller', h.instance);
                      }
                      return s;
                    })(_, E, S, g, p, r, b)),
                  b &&
                    (ct.$$addScopeInfo(_, p, !0, !(w && (w === b || w === b.$$originalDirective))),
                    ct.$$addScopeClass(_, !0),
                    (p.$$isolateBindings = b.$$isolateBindings),
                    (R = Nt(r, E, p, p.$$isolateBindings, b)).removeWatches &&
                      p.$on('$destroy', R.removeWatches)),
                  $)) {
                    var A = g[P],
                      T = $[P],
                      j = A.$$bindings.bindToController;
                    if (y) {
                      T.bindingInfo = j ? Nt(v, E, T.instance, j, A) : {};
                      var V = T();
                      V !== T.instance &&
                        ((T.instance = V),
                        _.data('$' + A.name + 'Controller', V),
                        T.bindingInfo.removeWatches && T.bindingInfo.removeWatches(),
                        (T.bindingInfo = Nt(v, E, T.instance, j, A)));
                    } else
                      (T.instance = T()),
                        _.data('$' + A.name + 'Controller', T.instance),
                        (T.bindingInfo = Nt(v, E, T.instance, j, A));
                  }
                  for (
                    x(g, function(t, e) {
                      var n = t.require;
                      t.bindToController && !z(n) && H(n) && k($[e].instance, bt(e, n, _, $));
                    }),
                      x($, function(t) {
                        var e = t.instance;
                        if (G(e.$onChanges))
                          try {
                            e.$onChanges(t.bindingInfo.initialChanges);
                          } catch (t) {
                            d(t);
                          }
                        if (G(e.$onInit))
                          try {
                            e.$onInit();
                          } catch (t) {
                            d(t);
                          }
                        G(e.$doCheck) &&
                          (v.$watch(function() {
                            e.$doCheck();
                          }),
                          e.$doCheck()),
                          G(e.$onDestroy) &&
                            v.$on('$destroy', function() {
                              e.$onDestroy();
                            });
                      }),
                      c = 0,
                      l = a.length;
                    c < l;
                    c++
                  )
                    jt(
                      (h = a[c]),
                      h.isolateScope ? p : r,
                      _,
                      E,
                      h.require && bt(h.directiveName, h.require, _, $),
                      S
                    );
                  var M = r;
                  for (
                    b && (b.template || null === b.templateUrl) && (M = p),
                      t && t(M, i.childNodes, void 0, u),
                      c = s.length - 1;
                    c >= 0;
                    c--
                  )
                    jt(
                      (h = s[c]),
                      h.isolateScope ? p : r,
                      _,
                      E,
                      h.require && bt(h.directiveName, h.require, _, $),
                      S
                    );
                  x($, function(t) {
                    var e = t.instance;
                    G(e.$postLink) && e.$postLink();
                  });
                }
              }
              function bt(t, e, n, r) {
                var i;
                if (q(e)) {
                  var o = e.match(h),
                    a = e.substring(o[0].length),
                    s = o[1] || o[3],
                    u = '?' === o[2];
                  if (('^^' === s ? (n = n.parent()) : (i = (i = r && r[a]) && i.instance), !i)) {
                    var c = '$' + a + 'Controller';
                    i = s ? n.inheritedData(c) : n.data(c);
                  }
                  if (!i && !u)
                    throw pn(
                      'ctreq',
                      "Controller '{0}', required by directive '{1}', can't be found!",
                      a,
                      t
                    );
                } else if (z(e)) {
                  i = [];
                  for (var l = 0, f = e.length; l < f; l++) i[l] = bt(t, e[l], n, r);
                } else
                  H(e) &&
                    ((i = {}),
                    x(e, function(e, o) {
                      i[o] = bt(t, e, n, r);
                    }));
                return i || null;
              }
              function St(t, e, n) {
                for (var r = 0, i = t.length; r < i; r++)
                  t[r] = j(t[r], { $$isolateScope: e, $$newScope: n });
              }
              function xt(t, n, o, a, s, u, c) {
                if (n === s) return null;
                var l = null;
                if (r.hasOwnProperty(n))
                  for (var f, h = e.get(n + i), p = 0, d = h.length; p < d; p++)
                    if (((f = h[p]), (D(a) || a > f.priority) && -1 !== f.restrict.indexOf(o))) {
                      if ((u && (f = j(f, { $$start: u, $$end: c })), !f.$$bindings)) {
                        var v = (f.$$bindings = $(f, f.name));
                        H(v.isolateScope) && (f.$$isolateBindings = v.isolateScope);
                      }
                      t.push(f), (l = f);
                    }
                return l;
              }
              function _t(t) {
                if (r.hasOwnProperty(t))
                  for (var n = e.get(t + i), o = 0, a = n.length; o < a; o++)
                    if (n[o].multiElement) return !0;
                return !1;
              }
              function Et(t, e) {
                var n = e.$attr,
                  r = t.$attr;
                x(t, function(r, i) {
                  '$' !== i.charAt(0) &&
                    (e[i] &&
                      e[i] !== r &&
                      (r.length ? (r += ('style' === i ? ';' : ' ') + e[i]) : (r = e[i])),
                    t.$set(i, r, !0, n[i]));
                }),
                  x(e, function(e, i) {
                    t.hasOwnProperty(i) ||
                      '$' === i.charAt(0) ||
                      ((t[i] = e), 'class' !== i && 'style' !== i && (r[i] = n[i]));
                  });
              }
              function Ct(t, e, n, r, i, o, a, s) {
                var u,
                  c,
                  l = [],
                  h = e[0],
                  p = t.shift(),
                  $ = j(p, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: p
                  }),
                  m = G(p.templateUrl) ? p.templateUrl(e, n) : p.templateUrl,
                  g = p.templateNamespace;
                return (
                  e.empty(),
                  v(m)
                    .then(function(d) {
                      var v, y, b, w;
                      if (((d = nt(d)), p.replace)) {
                        if (
                          ((b = le(d) ? [] : wn(kt(g, tt(d)))),
                          (v = b[0]),
                          1 !== b.length || v.nodeType !== Lt)
                        )
                          throw pn(
                            'tplrt',
                            "Template for directive '{0}' must have exactly one root element. {1}",
                            p.name,
                            m
                          );
                        (y = { $attr: {} }), At(r, e, v);
                        var S = vt(v, [], y);
                        H(p.scope) && St(S, !0), (t = S.concat(t)), Et(n, y);
                      } else (v = h), e.html(d);
                      for (
                        t.unshift($),
                          u = yt(t, v, n, i, e, p, o, a, s),
                          x(r, function(t, n) {
                            t === v && (r[n] = e[0]);
                          }),
                          c = lt(e[0].childNodes, i);
                        l.length;

                      ) {
                        var _ = l.shift(),
                          E = l.shift(),
                          C = l.shift(),
                          O = l.shift(),
                          R = e[0];
                        if (!_.$$destroyed) {
                          if (E !== h) {
                            var k = E.className;
                            (s.hasElementTranscludeDirective && p.replace) || (R = ve(v)),
                              At(C, f(E), R),
                              Q(f(R), k);
                          }
                          (w = u.transcludeOnThisElement ? dt(_, u.transclude, O) : O),
                            u(c, _, R, r, w);
                        }
                      }
                      l = null;
                    })
                    .catch(function(t) {
                      W(t) && d(t);
                    }),
                  function(t, e, n, r, i) {
                    var o = i;
                    e.$$destroyed ||
                      (l
                        ? l.push(e, n, r, o)
                        : (u.transcludeOnThisElement && (o = dt(e, u.transclude, i)),
                          u(c, e, n, r, o)));
                  }
                );
              }
              function Ot(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n
                  ? n
                  : t.name !== e.name
                    ? t.name < e.name
                      ? -1
                      : 1
                    : t.index - e.index;
              }
              function Rt(t, e, n, r) {
                function i(t) {
                  return t ? ' (module: ' + t + ')' : '';
                }
                if (e)
                  throw pn(
                    'multidir',
                    'Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}',
                    e.name,
                    i(e.$$moduleName),
                    n.name,
                    i(n.$$moduleName),
                    t,
                    wt(r)
                  );
              }
              function kt(e, n) {
                switch ((e = u(e || 'html'))) {
                  case 'svg':
                  case 'math':
                    var r = t.document.createElement('div');
                    return (
                      (r.innerHTML = '<' + e + '>' + n + '</' + e + '>'), r.childNodes[0].childNodes
                    );
                  default:
                    return n;
                }
              }
              function Pt(t, e, r, i, o) {
                var a = (function(t, e) {
                    if ('srcdoc' === e) return R.HTML;
                    var n = rt(t);
                    if ('src' === e || 'ngSrc' === e) {
                      if (-1 === ['img', 'video', 'audio', 'source', 'track'].indexOf(n))
                        return R.RESOURCE_URL;
                    } else if (
                      'xlinkHref' === e ||
                      ('form' === n && 'action' === e) ||
                      ('link' === n && 'href' === e)
                    )
                      return R.RESOURCE_URL;
                  })(t, i),
                  s = !o,
                  u = c[i] || o,
                  l = n(r, s, a, u);
                if (l) {
                  if ('multiple' === i && 'select' === rt(t))
                    throw pn(
                      'selmulti',
                      "Binding to the 'multiple' attribute is not supported. Element: {0}",
                      wt(t)
                    );
                  if (p.test(i))
                    throw pn(
                      'nodomevents',
                      'Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.'
                    );
                  e.push({
                    priority: 100,
                    compile: function() {
                      return {
                        pre: function(t, e, o) {
                          var s = o.$$observers || (o.$$observers = Ft()),
                            c = o[i];
                          c !== r && ((l = c && n(c, !0, a, u)), (r = c)),
                            l &&
                              ((o[i] = l(t)),
                              ((s[i] || (s[i] = [])).$$inter = !0),
                              ((o.$$observers && o.$$observers[i].$$scope) || t).$watch(l, function(
                                t,
                                e
                              ) {
                                'class' === i && t !== e ? o.$updateClass(t, e) : o.$set(i, t);
                              }));
                        }
                      };
                    }
                  });
                }
              }
              function At(e, n, r) {
                var i,
                  o,
                  a = n[0],
                  s = n.length,
                  u = a.parentNode;
                if (e)
                  for (i = 0, o = e.length; i < o; i++)
                    if (e[i] === a) {
                      e[i++] = r;
                      for (var c = i, l = c + s - 1, h = e.length; c < h; c++, l++)
                        l < h ? (e[c] = e[l]) : delete e[c];
                      (e.length -= s - 1), e.context === a && (e.context = r);
                      break;
                    }
                u && u.replaceChild(r, a);
                var p = t.document.createDocumentFragment();
                for (i = 0; i < s; i++) p.appendChild(n[i]);
                for (
                  f.hasData(a) && (f.data(r, f.data(a)), f(a).off('$destroy')),
                    f.cleanData(p.querySelectorAll('*')),
                    i = 1;
                  i < s;
                  i++
                )
                  delete n[i];
                (n[0] = r), (n.length = 1);
              }
              function Tt(t, e) {
                return k(
                  function() {
                    return t.apply(null, arguments);
                  },
                  t,
                  e
                );
              }
              function jt(t, e, n, r, i, o) {
                try {
                  t(e, n, r, i, o);
                } catch (t) {
                  d(t, wt(n));
                }
              }
              function Mt(t, e) {
                if (b)
                  throw pn(
                    'missingattr',
                    "Attribute '{0}' of '{1}' is non-optional and must be set!",
                    t,
                    e
                  );
              }
              function Nt(t, e, r, i, o) {
                var a,
                  u = [],
                  c = {};
                function l(e, n, i) {
                  G(r.$onChanges) &&
                    !st(n, i) &&
                    (T || (t.$$postDigest(J), (T = [])),
                    a || ((a = {}), T.push(f)),
                    a[e] && (i = a[e].previousValue),
                    (a[e] = new $n(i, n)));
                }
                function f() {
                  r.$onChanges(a), (a = void 0);
                }
                return (
                  x(i, function(i, a) {
                    var f,
                      h,
                      p,
                      d,
                      v,
                      $ = i.attrName,
                      m = i.optional;
                    switch (i.mode) {
                      case '@':
                        m || s.call(e, $) || (Mt($, o.name), (r[a] = e[$] = void 0)),
                          (v = e.$observe($, function(t) {
                            if (q(t) || Z(t)) {
                              var e = r[a];
                              l(a, t, e), (r[a] = t);
                            }
                          })),
                          (e.$$observers[$].$$scope = t),
                          q((f = e[$])) ? (r[a] = n(f)(t)) : Z(f) && (r[a] = f),
                          (c[a] = new $n(dn, r[a])),
                          u.push(v);
                        break;
                      case '=':
                        if (!s.call(e, $)) {
                          if (m) break;
                          Mt($, o.name), (e[$] = void 0);
                        }
                        if (m && !e[$]) break;
                        (h = E(e[$])),
                          (d = h.literal ? ut : st),
                          (p =
                            h.assign ||
                            function() {
                              throw ((f = r[a] = h(t)),
                              pn(
                                'nonassign',
                                "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",
                                e[$],
                                $,
                                o.name
                              ));
                            }),
                          (f = r[a] = h(t));
                        var g = function(e) {
                          return d(e, r[a]) || (d(e, f) ? p(t, (e = r[a])) : (r[a] = e)), (f = e);
                        };
                        (g.$stateful = !0),
                          (v = i.collection
                            ? t.$watchCollection(e[$], g)
                            : t.$watch(E(e[$], g), null, h.literal)),
                          u.push(v);
                        break;
                      case '<':
                        if (!s.call(e, $)) {
                          if (m) break;
                          Mt($, o.name), (e[$] = void 0);
                        }
                        if (m && !e[$]) break;
                        var y = (h = E(e[$])).literal,
                          b = (r[a] = h(t));
                        (c[a] = new $n(dn, r[a])),
                          (v = t.$watch(
                            h,
                            function(t, e) {
                              if (e === t) {
                                if (e === b || (y && ut(e, b))) return;
                                e = b;
                              }
                              l(a, t, e), (r[a] = t);
                            },
                            y
                          )),
                          u.push(v);
                        break;
                      case '&':
                        if (
                          (m || s.call(e, $) || Mt($, o.name),
                          (h = e.hasOwnProperty($) ? E(e[$]) : V) === V && m)
                        )
                          break;
                        r[a] = function(e) {
                          return h(t, e);
                        };
                    }
                  }),
                  {
                    initialChanges: c,
                    removeWatches:
                      u.length &&
                      function() {
                        for (var t = 0, e = u.length; t < e; ++t) u[t]();
                      }
                  }
                );
              }
            }
          ]);
      }
      function $n(t, e) {
        (this.previousValue = t), (this.currentValue = e);
      }
      (vn.$inject = ['$provide', '$$sanitizeUriProvider']),
        ($n.prototype.isFirstChange = function() {
          return this.previousValue === dn;
        });
      var mn = /^((?:x|data)[:\-_])/i,
        gn = /[:\-_]+(.)/g;
      function yn(t) {
        return t.replace(mn, '').replace(gn, function(t, e, n) {
          return n ? e.toUpperCase() : e;
        });
      }
      function bn(t, e) {
        var n = '',
          r = t.split(/\s+/),
          i = e.split(/\s+/);
        t: for (var o = 0; o < r.length; o++) {
          for (var a = r[o], s = 0; s < i.length; s++) if (a === i[s]) continue t;
          n += (n.length > 0 ? ' ' : '') + a;
        }
        return n;
      }
      function wn(t) {
        var e = (t = f(t)).length;
        if (e <= 1) return t;
        for (; e--; ) {
          var n = t[e];
          (n.nodeType === zt || (n.nodeType === Bt && '' === n.nodeValue.trim())) &&
            v.call(t, e, 1);
        }
        return t;
      }
      var Sn = i('$controller'),
        xn = /^(\S+)(\s+as\s+([\w$]+))?$/;
      function _n() {
        var t = {},
          e = !1;
        (this.has = function(e) {
          return t.hasOwnProperty(e);
        }),
          (this.register = function(e, n) {
            Dt(e, 'controller'), H(e) ? k(t, e) : (t[e] = n);
          }),
          (this.allowGlobals = function() {
            e = !0;
          }),
          (this.$get = [
            '$injector',
            '$window',
            function(n, r) {
              return function(i, a, s, u) {
                var c, l, f, h;
                if (((s = !0 === s), u && q(u) && (h = u), q(i))) {
                  if (!(l = i.match(xn)))
                    throw Sn(
                      'ctrlfmt',
                      "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",
                      i
                    );
                  if (
                    ((f = l[1]),
                    (h = h || l[3]),
                    !(i = t.hasOwnProperty(f)
                      ? t[f]
                      : Ut(a.$scope, f, !0) || (e ? Ut(r, f, !0) : void 0)))
                  )
                    throw Sn('ctrlreg', "The controller with the name '{0}' is not registered.", f);
                  Nt(i, f, !0);
                }
                if (s) {
                  var p = (z(i) ? i[i.length - 1] : i).prototype;
                  return (
                    (c = Object.create(p || null)),
                    h && o(a, h, c, f || i.name),
                    k(
                      function() {
                        var t = n.invoke(i, c, a, f);
                        return (
                          t !== c && (H(t) || G(t)) && ((c = t), h && o(a, h, c, f || i.name)), c
                        );
                      },
                      { instance: c, identifier: h }
                    )
                  );
                }
                return (c = n.instantiate(i, a, f)), h && o(a, h, c, f || i.name), c;
              };
              function o(t, e, n, r) {
                if (!t || !H(t.$scope))
                  throw i('$controller')(
                    'noscp',
                    "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",
                    r,
                    e
                  );
                t.$scope[e] = n;
              }
            }
          ]);
      }
      function En() {
        this.$get = [
          '$window',
          function(t) {
            return f(t.document);
          }
        ];
      }
      function Cn() {
        this.$get = [
          '$document',
          '$rootScope',
          function(t, e) {
            var n = t[0],
              r = n && n.hidden;
            function i() {
              r = n.hidden;
            }
            return (
              t.on('visibilitychange', i),
              e.$on('$destroy', function() {
                t.off('visibilitychange', i);
              }),
              function() {
                return r;
              }
            );
          }
        ];
      }
      function On() {
        this.$get = [
          '$log',
          function(t) {
            return function(e, n) {
              t.error.apply(t, arguments);
            };
          }
        ];
      }
      var Rn = function() {
          this.$get = [
            '$document',
            function(t) {
              return function(e) {
                return (
                  e ? !e.nodeType && e instanceof f && (e = e[0]) : (e = t[0].body),
                  e.offsetWidth + 1
                );
              };
            }
          ];
        },
        kn = 'application/json',
        Pn = { 'Content-Type': kn + ';charset=utf-8' },
        An = /^\[|^\{(?!\{)/,
        Tn = { '[': /]$/, '{': /}$/ },
        jn = /^\)]\}',?\n/,
        Vn = i('$http');
      function Mn(t) {
        return H(t) ? (B(t) ? t.toISOString() : vt(t)) : t;
      }
      function In() {
        this.$get = function() {
          return function(t) {
            if (!t) return '';
            var e = [];
            return (
              _(t, function(t, n) {
                null === t ||
                  D(t) ||
                  G(t) ||
                  (z(t)
                    ? x(t, function(t) {
                        e.push(Ct(n) + '=' + Ct(Mn(t)));
                      })
                    : e.push(Ct(n) + '=' + Ct(Mn(t))));
              }),
              e.join('&')
            );
          };
        };
      }
      function Nn() {
        this.$get = function() {
          return function(t) {
            if (!t) return '';
            var e = [];
            return (
              (function t(n, r, i) {
                if (null === n || D(n)) return;
                z(n)
                  ? x(n, function(e, n) {
                      t(e, r + '[' + (H(e) ? n : '') + ']');
                    })
                  : H(n) && !B(n)
                    ? _(n, function(e, n) {
                        t(e, r + (i ? '' : '[') + n + (i ? '' : ']'));
                      })
                    : e.push(Ct(r) + '=' + Ct(Mn(n)));
              })(t, '', !0),
              e.join('&')
            );
          };
        };
      }
      function Dn(t, e) {
        if (q(t)) {
          var n = t.replace(jn, '').trim();
          if (n) {
            var r = e('Content-Type'),
              i = r && 0 === r.indexOf(kn);
            if (i || ((a = (o = n).match(An)) && Tn[a[0]].test(o)))
              try {
                t = $t(n);
              } catch (e) {
                if (!i) return t;
                throw Vn(
                  'baddata',
                  'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"',
                  t,
                  e
                );
              }
          }
        }
        var o, a;
        return t;
      }
      function Un(t) {
        var e,
          n = Ft();
        function r(t, e) {
          t && (n[t] = n[t] ? n[t] + ', ' + e : e);
        }
        return (
          q(t)
            ? x(t.split('\n'), function(t) {
                (e = t.indexOf(':')), r(u(tt(t.substr(0, e))), tt(t.substr(e + 1)));
              })
            : H(t) &&
              x(t, function(t, e) {
                r(u(e), tt(t));
              }),
          n
        );
      }
      function Hn(t) {
        var e;
        return function(n) {
          if ((e || (e = Un(t)), n)) {
            var r = e[u(n)];
            return void 0 === r && (r = null), r;
          }
          return e;
        };
      }
      function Fn(t, e, n, r) {
        return G(r)
          ? r(t, e, n)
          : (x(r, function(r) {
              t = r(t, e, n);
            }),
            t);
      }
      function qn(t) {
        return 200 <= t && t < 300;
      }
      function Ln() {
        var t = (this.defaults = {
            transformResponse: [Dn],
            transformRequest: [
              function(t) {
                return !H(t) ||
                  ((e = t), '[object File]' === m.call(e)) ||
                  (function(t) {
                    return '[object Blob]' === m.call(t);
                  })(t) ||
                  (function(t) {
                    return '[object FormData]' === m.call(t);
                  })(t)
                  ? t
                  : vt(t);
                var e;
              }
            ],
            headers: {
              common: { Accept: 'application/json, text/plain, */*' },
              post: Jt(Pn),
              put: Jt(Pn),
              patch: Jt(Pn)
            },
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            paramSerializer: '$httpParamSerializer',
            jsonpCallbackParam: 'callback'
          }),
          e = !1;
        this.useApplyAsync = function(t) {
          return U(t) ? ((e = !!t), this) : e;
        };
        var n = (this.interceptors = []),
          r = (this.xsrfWhitelistedOrigins = []);
        this.$get = [
          '$browser',
          '$httpBackend',
          '$$cookieReader',
          '$cacheFactory',
          '$rootScope',
          '$q',
          '$injector',
          '$sce',
          function(o, a, s, l, f, h, p, d) {
            var v = l('$http');
            t.paramSerializer = q(t.paramSerializer) ? p.get(t.paramSerializer) : t.paramSerializer;
            var $ = [];
            x(n, function(t) {
              $.unshift(q(t) ? p.get(t) : p.invoke(t));
            });
            var m,
              g = ((m = [ri].concat(r.map(ii))),
              function(t) {
                var e = ii(t);
                return m.some(oi.bind(null, e));
              });
            function y(n) {
              if (!H(n))
                throw i('$http')(
                  'badreq',
                  'Http request configuration must be an object.  Received: {0}',
                  n
                );
              if (!q(d.valueOf(n.url)))
                throw i('$http')(
                  'badreq',
                  'Http request configuration url must be a string or a $sce trusted object.  Received: {0}',
                  n.url
                );
              var r = k(
                {
                  method: 'get',
                  transformRequest: t.transformRequest,
                  transformResponse: t.transformResponse,
                  paramSerializer: t.paramSerializer,
                  jsonpCallbackParam: t.jsonpCallbackParam
                },
                n
              );
              (r.headers = (function(e) {
                var n,
                  r,
                  i,
                  o = t.headers,
                  a = k({}, e.headers);
                o = k({}, o.common, o[u(e.method)]);
                t: for (n in o) {
                  for (i in ((r = u(n)), a)) if (u(i) === r) continue t;
                  a[n] = o[n];
                }
                return (function(t, e) {
                  var n,
                    r = {};
                  return (
                    x(t, function(t, i) {
                      G(t) ? null != (n = t(e)) && (r[i] = n) : (r[i] = t);
                    }),
                    r
                  );
                })(a, Jt(e));
              })(n)),
                (r.method = c(r.method)),
                (r.paramSerializer = q(r.paramSerializer)
                  ? p.get(r.paramSerializer)
                  : r.paramSerializer),
                o.$$incOutstandingRequestCount();
              var l = [],
                m = [],
                b = h.resolve(r);
              return (
                x($, function(t) {
                  (t.request || t.requestError) && l.unshift(t.request, t.requestError),
                    (t.response || t.responseError) && m.push(t.response, t.responseError);
                }),
                (b = (b = w(
                  (b = (b = w(b, l)).then(function(n) {
                    var r = n.headers,
                      i = Fn(n.data, Hn(r), void 0, n.transformRequest);
                    D(i) &&
                      x(r, function(t, e) {
                        'content-type' === u(e) && delete r[e];
                      });
                    D(n.withCredentials) &&
                      !D(t.withCredentials) &&
                      (n.withCredentials = t.withCredentials);
                    return (function(n, r) {
                      var i,
                        o,
                        c = h.defer(),
                        l = c.promise,
                        p = n.headers,
                        $ = 'jsonp' === u(n.method),
                        m = n.url;
                      $ ? (m = d.getTrustedResourceUrl(m)) : q(m) || (m = d.valueOf(m));
                      (m = (function(t, e) {
                        return e.length > 0 && (t += (-1 === t.indexOf('?') ? '?' : '&') + e), t;
                      })(m, n.paramSerializer(n.params))),
                        $ &&
                          (m = (function(t, e) {
                            var n = t.split('?');
                            if (n.length > 2)
                              throw Vn(
                                'badjsonp',
                                'Illegal use more than one "?", in url, "{1}"',
                                t
                              );
                            return (
                              x(xt(n[1]), function(n, r) {
                                if ('JSON_CALLBACK' === n)
                                  throw Vn(
                                    'badjsonp',
                                    'Illegal use of JSON_CALLBACK in url, "{0}"',
                                    t
                                  );
                                if (r === e)
                                  throw Vn(
                                    'badjsonp',
                                    'Illegal use of callback param, "{0}", in url, "{1}"',
                                    e,
                                    t
                                  );
                              }),
                              (t += (-1 === t.indexOf('?') ? '?' : '&') + e + '=JSON_CALLBACK')
                            );
                          })(m, n.jsonpCallbackParam));
                      y.pendingRequests.push(n),
                        l.then(E, E),
                        (!n.cache && !t.cache) ||
                          !1 === n.cache ||
                          ('GET' !== n.method && 'JSONP' !== n.method) ||
                          (i = H(n.cache) ? n.cache : H(t.cache) ? t.cache : v);
                      i &&
                        (U((o = i.get(m)))
                          ? Q(o)
                            ? o.then(_, _)
                            : z(o)
                              ? S(o[1], o[0], Jt(o[2]), o[3], o[4])
                              : S(o, 200, {}, 'OK', 'complete')
                          : i.put(m, l));
                      if (D(o)) {
                        var b = g(n.url) ? s()[n.xsrfCookieName || t.xsrfCookieName] : void 0;
                        b && (p[n.xsrfHeaderName || t.xsrfHeaderName] = b),
                          a(
                            n.method,
                            m,
                            r,
                            function(t, n, r, o, a) {
                              i && (qn(t) ? i.put(m, [t, n, Un(r), o, a]) : i.remove(m));
                              function s() {
                                S(n, t, r, o, a);
                              }
                              e ? f.$applyAsync(s) : (s(), f.$$phase || f.$apply());
                            },
                            p,
                            n.timeout,
                            n.withCredentials,
                            n.responseType,
                            w(n.eventHandlers),
                            w(n.uploadEventHandlers)
                          );
                      }
                      return l;
                      function w(t) {
                        if (t) {
                          var n = {};
                          return (
                            x(t, function(t, r) {
                              n[r] = function(n) {
                                function r() {
                                  t(n);
                                }
                                e ? f.$applyAsync(r) : f.$$phase ? r() : f.$apply(r);
                              };
                            }),
                            n
                          );
                        }
                      }
                      function S(t, e, r, i, o) {
                        (qn((e = e >= -1 ? e : 0)) ? c.resolve : c.reject)({
                          data: t,
                          status: e,
                          headers: Hn(r),
                          config: n,
                          statusText: i,
                          xhrStatus: o
                        });
                      }
                      function _(t) {
                        S(t.data, t.status, Jt(t.headers()), t.statusText, t.xhrStatus);
                      }
                      function E() {
                        var t = y.pendingRequests.indexOf(n);
                        -1 !== t && y.pendingRequests.splice(t, 1);
                      }
                    })(n, i).then(S, S);
                  })),
                  m
                )).finally(function() {
                  o.$$completeOutstandingRequest(V);
                }))
              );
              function w(t, e) {
                for (var n = 0, r = e.length; n < r; ) {
                  var i = e[n++],
                    o = e[n++];
                  t = t.then(i, o);
                }
                return (e.length = 0), t;
              }
              function S(t) {
                var e = k({}, t);
                return (
                  (e.data = Fn(t.data, t.headers, t.status, r.transformResponse)),
                  qn(t.status) ? e : h.reject(e)
                );
              }
            }
            return (
              (y.pendingRequests = []),
              (function(t) {
                x(arguments, function(t) {
                  y[t] = function(e, n) {
                    return y(k({}, n || {}, { method: t, url: e }));
                  };
                });
              })('get', 'delete', 'head', 'jsonp'),
              (function(t) {
                x(arguments, function(t) {
                  y[t] = function(e, n, r) {
                    return y(k({}, r || {}, { method: t, url: e, data: n }));
                  };
                });
              })('post', 'put', 'patch'),
              (y.defaults = t),
              y
            );
          }
        ];
      }
      function Bn() {
        this.$get = function() {
          return function() {
            return new t.XMLHttpRequest();
          };
        };
      }
      function zn() {
        this.$get = [
          '$browser',
          '$jsonpCallbacks',
          '$document',
          '$xhrFactory',
          function(t, e, n, r) {
            return (function(t, e, n, r, i) {
              return function(o, a, s, c, l, f, h, p, d, v) {
                if (((a = a || t.url()), 'jsonp' === u(o)))
                  var $ = r.createCallback(a),
                    m = (function(t, e, n) {
                      t = t.replace('JSON_CALLBACK', e);
                      var o = i.createElement('script'),
                        a = null;
                      return (
                        (o.type = 'text/javascript'),
                        (o.src = t),
                        (o.async = !0),
                        (a = function(t) {
                          o.removeEventListener('load', a),
                            o.removeEventListener('error', a),
                            i.body.removeChild(o),
                            (o = null);
                          var s = -1,
                            u = 'unknown';
                          t &&
                            ('load' !== t.type || r.wasCalled(e) || (t = { type: 'error' }),
                            (u = t.type),
                            (s = 'error' === t.type ? 404 : 200)),
                            n && n(s, u);
                        }),
                        o.addEventListener('load', a),
                        o.addEventListener('error', a),
                        i.body.appendChild(o),
                        a
                      );
                    })(a, $, function(t, e) {
                      var n = 200 === t && r.getResponse($);
                      S(c, t, n, '', e, 'complete'), r.removeCallback($);
                    });
                else {
                  var g = e(o, a),
                    y = !1;
                  g.open(o, a, !0),
                    x(l, function(t, e) {
                      U(t) && g.setRequestHeader(e, t);
                    }),
                    (g.onload = function() {
                      var t = g.statusText || '',
                        e = 'response' in g ? g.response : g.responseText,
                        n = 1223 === g.status ? 204 : g.status;
                      0 === n && (n = e ? 200 : 'file' === ii(a).protocol ? 404 : 0),
                        S(c, n, e, g.getAllResponseHeaders(), t, 'complete');
                    });
                  if (
                    ((g.onerror = function() {
                      S(c, -1, null, null, '', 'error');
                    }),
                    (g.ontimeout = function() {
                      S(c, -1, null, null, '', 'timeout');
                    }),
                    (g.onabort = function() {
                      S(c, -1, null, null, '', y ? 'timeout' : 'abort');
                    }),
                    x(d, function(t, e) {
                      g.addEventListener(e, t);
                    }),
                    x(v, function(t, e) {
                      g.upload.addEventListener(e, t);
                    }),
                    h && (g.withCredentials = !0),
                    p)
                  )
                    try {
                      g.responseType = p;
                    } catch (t) {
                      if ('json' !== p) throw t;
                    }
                  g.send(D(s) ? null : s);
                }
                if (f > 0)
                  var b = n(function() {
                    w('timeout');
                  }, f);
                else
                  Q(f) &&
                    f.then(function() {
                      w(U(f.$$timeoutId) ? 'timeout' : 'abort');
                    });
                function w(t) {
                  (y = 'timeout' === t), m && m(), g && g.abort();
                }
                function S(t, e, r, i, o, a) {
                  U(b) && n.cancel(b), (m = g = null), t(e, r, i, o, a);
                }
              };
            })(t, r, t.defer, e, n[0]);
          }
        ];
      }
      var Wn = (b.$interpolateMinErr = i('$interpolate'));
      function Gn() {
        var t = '{{',
          e = '}}';
        (this.startSymbol = function(e) {
          return e ? ((t = e), this) : t;
        }),
          (this.endSymbol = function(t) {
            return t ? ((e = t), this) : e;
          }),
          (this.$get = [
            '$parse',
            '$exceptionHandler',
            '$sce',
            function(n, r, i) {
              var o = t.length,
                a = e.length,
                s = new RegExp(t.replace(/./g, c), 'g'),
                u = new RegExp(e.replace(/./g, c), 'g');
              function c(t) {
                return '\\\\\\' + t;
              }
              function l(n) {
                return n.replace(s, t).replace(u, e);
              }
              function f(t, e, n, r) {
                var i = t.$watch(
                  function(t) {
                    return i(), r(t);
                  },
                  e,
                  n
                );
                return i;
              }
              function h(s, u, c, h) {
                if (!s.length || -1 === s.indexOf(t)) {
                  var p;
                  if (!u) ((p = I(l(s))).exp = s), (p.expressions = []), (p.$$watchDelegate = f);
                  return p;
                }
                h = !!h;
                for (var d, v, $, m = 0, g = [], y = [], b = s.length, w = [], S = []; m < b; ) {
                  if (-1 === (d = s.indexOf(t, m)) || -1 === (v = s.indexOf(e, d + o))) {
                    m !== b && w.push(l(s.substring(m)));
                    break;
                  }
                  m !== d && w.push(l(s.substring(m, d))),
                    ($ = s.substring(d + o, v)),
                    g.push($),
                    y.push(n($, E)),
                    (m = v + a),
                    S.push(w.length),
                    w.push('');
                }
                if ((c && w.length > 1 && Wn.throwNoconcat(s), !u || g.length)) {
                  var x = function(t) {
                      for (var e = 0, n = g.length; e < n; e++) {
                        if (h && D(t[e])) return;
                        w[S[e]] = t[e];
                      }
                      return w.join('');
                    },
                    _ = function(t) {
                      return c ? i.getTrusted(c, t) : i.valueOf(t);
                    };
                  return k(
                    function(t) {
                      var e = 0,
                        n = g.length,
                        i = new Array(n);
                      try {
                        for (; e < n; e++) i[e] = y[e](t);
                        return x(i);
                      } catch (t) {
                        r(Wn.interr(s, t));
                      }
                    },
                    {
                      exp: s,
                      expressions: g,
                      $$watchDelegate: function(t, e) {
                        var n;
                        return t.$watchGroup(y, function(r, i) {
                          var o = x(r);
                          e.call(this, o, r !== i ? n : o, t), (n = o);
                        });
                      }
                    }
                  );
                }
                function E(t) {
                  try {
                    return (t = _(t)), h && !U(t) ? t : qt(t);
                  } catch (t) {
                    r(Wn.interr(s, t));
                  }
                }
              }
              return (
                (h.startSymbol = function() {
                  return t;
                }),
                (h.endSymbol = function() {
                  return e;
                }),
                h
              );
            }
          ]);
      }
      function Jn() {
        this.$get = [
          '$rootScope',
          '$window',
          '$q',
          '$$q',
          '$browser',
          function(t, e, n, r, i) {
            var o = {};
            function a(a, s, u, c) {
              var l = arguments.length > 4,
                f = l ? ht(arguments, 4) : [],
                h = e.setInterval,
                p = e.clearInterval,
                d = 0,
                v = U(c) && !c,
                $ = (v ? r : n).defer(),
                m = $.promise;
              return (
                (u = U(u) ? u : 0),
                (m.$$intervalId = h(function() {
                  v ? i.defer(g) : t.$evalAsync(g),
                    $.notify(d++),
                    u > 0 && d >= u && ($.resolve(d), p(m.$$intervalId), delete o[m.$$intervalId]),
                    v || t.$apply();
                }, s)),
                (o[m.$$intervalId] = $),
                m
              );
              function g() {
                l ? a.apply(null, f) : a(d);
              }
            }
            return (
              (a.cancel = function(t) {
                return (
                  !!(t && t.$$intervalId in o) &&
                  (Hr(o[t.$$intervalId].promise),
                  o[t.$$intervalId].reject('canceled'),
                  e.clearInterval(t.$$intervalId),
                  delete o[t.$$intervalId],
                  !0)
                );
              }),
              a
            );
          }
        ];
      }
      (Wn.throwNoconcat = function(t) {
        throw Wn(
          'noconcat',
          'Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce',
          t
        );
      }),
        (Wn.interr = function(t, e) {
          return Wn('interr', "Can't interpolate: {0}\n{1}", t, e.toString());
        });
      var Kn = function() {
          this.$get = function() {
            var t = b.callbacks,
              e = {};
            return {
              createCallback: function(n) {
                var r = '_' + (t.$$counter++).toString(36),
                  i = 'angular.callbacks.' + r,
                  o = (function(t) {
                    var e = function(t) {
                      (e.data = t), (e.called = !0);
                    };
                    return (e.id = t), e;
                  })(r);
                return (e[i] = t[r] = o), i;
              },
              wasCalled: function(t) {
                return e[t].called;
              },
              getResponse: function(t) {
                return e[t].data;
              },
              removeCallback: function(n) {
                var r = e[n];
                delete t[r.id], delete e[n];
              }
            };
          };
        },
        Yn = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
        Zn = { http: 80, https: 443, ftp: 21 },
        Qn = i('$location');
      function Xn(t) {
        for (var e = t.split('/'), n = e.length; n--; ) e[n] = Et(e[n].replace(/%2F/g, '/'));
        return e.join('/');
      }
      function tr(t, e) {
        var n = ii(t);
        (e.$$protocol = n.protocol),
          (e.$$host = n.hostname),
          (e.$$port = A(n.port) || Zn[n.protocol] || null);
      }
      var er = /^\s*[\\/]{2,}/;
      function nr(t, e, n) {
        if (er.test(t)) throw Qn('badpath', 'Invalid url "{0}".', t);
        var r = '/' !== t.charAt(0);
        r && (t = '/' + t);
        var i = ii(t),
          o = r && '/' === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname;
        (e.$$path = (function(t, e) {
          for (var n = t.split('/'), r = n.length; r--; )
            (n[r] = decodeURIComponent(n[r])), e && (n[r] = n[r].replace(/\//g, '%2F'));
          return n.join('/');
        })(o, n)),
          (e.$$search = xt(i.search)),
          (e.$$hash = decodeURIComponent(i.hash)),
          e.$$path && '/' !== e.$$path.charAt(0) && (e.$$path = '/' + e.$$path);
      }
      function rr(t, e) {
        return t.slice(0, e.length) === e;
      }
      function ir(t, e) {
        if (rr(e, t)) return e.substr(t.length);
      }
      function or(t) {
        var e = t.indexOf('#');
        return -1 === e ? t : t.substr(0, e);
      }
      function ar(t) {
        return t.replace(/(#.+)|#$/, '$1');
      }
      function sr(t, e, n) {
        (this.$$html5 = !0),
          (n = n || ''),
          tr(t, this),
          (this.$$parse = function(t) {
            var n = ir(e, t);
            if (!q(n)) throw Qn('ipthprfx', 'Invalid url "{0}", missing path prefix "{1}".', t, e);
            nr(n, this, !0), this.$$path || (this.$$path = '/'), this.$$compose();
          }),
          (this.$$compose = function() {
            var t = _t(this.$$search),
              n = this.$$hash ? '#' + Et(this.$$hash) : '';
            (this.$$url = Xn(this.$$path) + (t ? '?' + t : '') + n),
              (this.$$absUrl = e + this.$$url.substr(1)),
              (this.$$urlUpdatedByLocation = !0);
          }),
          (this.$$parseLinkUrl = function(r, i) {
            return i && '#' === i[0]
              ? (this.hash(i.slice(1)), !0)
              : (U((o = ir(t, r)))
                  ? ((a = o), (s = n && U((o = ir(n, o))) ? e + (ir('/', o) || o) : t + a))
                  : U((o = ir(e, r)))
                    ? (s = e + o)
                    : e === r + '/' && (s = e),
                s && this.$$parse(s),
                !!s);
            var o, a, s;
          });
      }
      function ur(t, e, n) {
        tr(t, this),
          (this.$$parse = function(r) {
            var i,
              o = ir(t, r) || ir(e, r);
            D(o) || '#' !== o.charAt(0)
              ? this.$$html5
                ? (i = o)
                : ((i = ''), D(o) && ((t = r), this.replace()))
              : D((i = ir(n, o))) && (i = o),
              nr(i, this, !1),
              (this.$$path = (function(t, e, n) {
                var r,
                  i = /^\/[A-Z]:(\/.*)/;
                rr(e, n) && (e = e.replace(n, ''));
                if (i.exec(e)) return t;
                return (r = i.exec(t)) ? r[1] : t;
              })(this.$$path, i, t)),
              this.$$compose();
          }),
          (this.$$compose = function() {
            var e = _t(this.$$search),
              r = this.$$hash ? '#' + Et(this.$$hash) : '';
            (this.$$url = Xn(this.$$path) + (e ? '?' + e : '') + r),
              (this.$$absUrl = t + (this.$$url ? n + this.$$url : '')),
              (this.$$urlUpdatedByLocation = !0);
          }),
          (this.$$parseLinkUrl = function(e, n) {
            return or(t) === or(e) && (this.$$parse(e), !0);
          });
      }
      function cr(t, e, n) {
        (this.$$html5 = !0),
          ur.apply(this, arguments),
          (this.$$parseLinkUrl = function(r, i) {
            return i && '#' === i[0]
              ? (this.hash(i.slice(1)), !0)
              : (t === or(r)
                  ? (o = r)
                  : (a = ir(e, r))
                    ? (o = t + n + a)
                    : e === r + '/' && (o = e),
                o && this.$$parse(o),
                !!o);
            var o, a;
          }),
          (this.$$compose = function() {
            var e = _t(this.$$search),
              r = this.$$hash ? '#' + Et(this.$$hash) : '';
            (this.$$url = Xn(this.$$path) + (e ? '?' + e : '') + r),
              (this.$$absUrl = t + n + this.$$url),
              (this.$$urlUpdatedByLocation = !0);
          });
      }
      var lr = {
        $$absUrl: '',
        $$html5: !1,
        $$replace: !1,
        absUrl: fr('$$absUrl'),
        url: function(t) {
          if (D(t)) return this.$$url;
          var e = Yn.exec(t);
          return (
            (e[1] || '' === t) && this.path(decodeURIComponent(e[1])),
            (e[2] || e[1] || '' === t) && this.search(e[3] || ''),
            this.hash(e[5] || ''),
            this
          );
        },
        protocol: fr('$$protocol'),
        host: fr('$$host'),
        port: fr('$$port'),
        path: hr('$$path', function(t) {
          return '/' === (t = null !== t ? t.toString() : '').charAt(0) ? t : '/' + t;
        }),
        search: function(t, e) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (q(t) || L(t)) (t = t.toString()), (this.$$search = xt(t));
              else {
                if (!H(t))
                  throw Qn(
                    'isrcharg',
                    'The first argument of the `$location#search()` call must be a string or an object.'
                  );
                x((t = at(t, {})), function(e, n) {
                  null == e && delete t[n];
                }),
                  (this.$$search = t);
              }
              break;
            default:
              D(e) || null === e ? delete this.$$search[t] : (this.$$search[t] = e);
          }
          return this.$$compose(), this;
        },
        hash: hr('$$hash', function(t) {
          return null !== t ? t.toString() : '';
        }),
        replace: function() {
          return (this.$$replace = !0), this;
        }
      };
      function fr(t) {
        return function() {
          return this[t];
        };
      }
      function hr(t, e) {
        return function(n) {
          return D(n) ? this[t] : ((this[t] = e(n)), this.$$compose(), this);
        };
      }
      function pr() {
        var t = '!',
          e = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
        (this.hashPrefix = function(e) {
          return U(e) ? ((t = e), this) : t;
        }),
          (this.html5Mode = function(t) {
            return Z(t)
              ? ((e.enabled = t), this)
              : H(t)
                ? (Z(t.enabled) && (e.enabled = t.enabled),
                  Z(t.requireBase) && (e.requireBase = t.requireBase),
                  (Z(t.rewriteLinks) || q(t.rewriteLinks)) && (e.rewriteLinks = t.rewriteLinks),
                  this)
                : e;
          }),
          (this.$get = [
            '$rootScope',
            '$browser',
            '$sniffer',
            '$rootElement',
            '$window',
            function(n, r, i, o, a) {
              var s,
                u,
                c,
                l,
                h = r.baseHref(),
                p = r.url();
              if (e.enabled) {
                if (!h && e.requireBase)
                  throw Qn(
                    'nobase',
                    '$location in HTML5 mode requires a <base> tag to be present!'
                  );
                (c = (l = p).substring(0, l.indexOf('/', l.indexOf('//') + 2)) + (h || '/')),
                  (u = i.history ? sr : cr);
              } else (c = or(p)), (u = ur);
              var d = (function(t) {
                return t.substr(0, or(t).lastIndexOf('/') + 1);
              })(c);
              (s = new u(c, d, '#' + t)).$$parseLinkUrl(p, p), (s.$$state = r.state());
              var v = /^\s*(javascript|mailto):/i;
              function $(t, e, n) {
                var i = s.url(),
                  o = s.$$state;
                try {
                  r.url(t, e, n), (s.$$state = r.state());
                } catch (t) {
                  throw (s.url(i), (s.$$state = o), t);
                }
              }
              o.on('click', function(t) {
                var i = e.rewriteLinks;
                if (
                  i &&
                  !t.ctrlKey &&
                  !t.metaKey &&
                  !t.shiftKey &&
                  2 !== t.which &&
                  2 !== t.button
                ) {
                  for (var u = f(t.target); 'a' !== rt(u[0]); )
                    if (u[0] === o[0] || !(u = u.parent())[0]) return;
                  if (!q(i) || !D(u.attr(i))) {
                    var c = u.prop('href'),
                      l = u.attr('href') || u.attr('xlink:href');
                    H(c) &&
                      '[object SVGAnimatedString]' === c.toString() &&
                      (c = ii(c.animVal).href),
                      v.test(c) ||
                        !c ||
                        u.attr('target') ||
                        t.isDefaultPrevented() ||
                        (s.$$parseLinkUrl(c, l) &&
                          (t.preventDefault(),
                          s.absUrl() !== r.url() &&
                            (n.$apply(), (a.angular['ff-684208-preventDefault'] = !0))));
                  }
                }
              }),
                ar(s.absUrl()) !== ar(p) && r.url(s.absUrl(), !0);
              var m = !0;
              return (
                r.onUrlChange(function(t, e) {
                  rr(t, d)
                    ? (n.$evalAsync(function() {
                        var r,
                          i = s.absUrl(),
                          o = s.$$state;
                        (t = ar(t)),
                          s.$$parse(t),
                          (s.$$state = e),
                          (r = n.$broadcast('$locationChangeStart', t, i, e, o).defaultPrevented),
                          s.absUrl() === t &&
                            (r
                              ? (s.$$parse(i), (s.$$state = o), $(i, !1, o))
                              : ((m = !1), g(i, o)));
                      }),
                      n.$$phase || n.$digest())
                    : (a.location.href = t);
                }),
                n.$watch(function() {
                  if (m || s.$$urlUpdatedByLocation) {
                    s.$$urlUpdatedByLocation = !1;
                    var t = ar(r.url()),
                      e = ar(s.absUrl()),
                      o = r.state(),
                      a = s.$$replace,
                      u = t !== e || (s.$$html5 && i.history && o !== s.$$state);
                    (m || u) &&
                      ((m = !1),
                      n.$evalAsync(function() {
                        var e = s.absUrl(),
                          r = n.$broadcast('$locationChangeStart', e, t, s.$$state, o)
                            .defaultPrevented;
                        s.absUrl() === e &&
                          (r
                            ? (s.$$parse(t), (s.$$state = o))
                            : (u && $(e, a, o === s.$$state ? null : s.$$state), g(t, o)));
                      }));
                  }
                  s.$$replace = !1;
                }),
                s
              );
              function g(t, e) {
                n.$broadcast('$locationChangeSuccess', s.absUrl(), t, s.$$state, e);
              }
            }
          ]);
      }
      function dr() {
        var t = !0,
          e = this;
        (this.debugEnabled = function(e) {
          return U(e) ? ((t = e), this) : t;
        }),
          (this.$get = [
            '$window',
            function(n) {
              var r,
                i = l || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
              return {
                log: o('log'),
                info: o('info'),
                warn: o('warn'),
                error: o('error'),
                debug: ((r = o('debug')),
                function() {
                  t && r.apply(e, arguments);
                })
              };
              function o(t) {
                var e = n.console || {},
                  r = e[t] || e.log || V;
                return function() {
                  var t = [];
                  return (
                    x(arguments, function(e) {
                      t.push(
                        (function(t) {
                          return (
                            W(t) &&
                              (t.stack && i
                                ? (t =
                                    t.message && -1 === t.stack.indexOf(t.message)
                                      ? 'Error: ' + t.message + '\n' + t.stack
                                      : t.stack)
                                : t.sourceURL &&
                                  (t = t.message + '\n' + t.sourceURL + ':' + t.line)),
                            t
                          );
                        })(e)
                      );
                    }),
                    Function.prototype.apply.call(r, e, t)
                  );
                };
              }
            }
          ]);
      }
      x([cr, ur, sr], function(t) {
        (t.prototype = Object.create(lr)),
          (t.prototype.state = function(e) {
            if (!arguments.length) return this.$$state;
            if (t !== sr || !this.$$html5)
              throw Qn(
                'nostate',
                'History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API'
              );
            return (this.$$state = D(e) ? null : e), (this.$$urlUpdatedByLocation = !0), this;
          });
      });
      var vr = i('$parse'),
        $r = {}.constructor.prototype.valueOf;
      function mr(t) {
        return t + '';
      }
      var gr = Ft();
      x('+ - * / % === !== == != < > <= >= && || ! = |'.split(' '), function(t) {
        gr[t] = !0;
      });
      var yr = { n: '\n', f: '\f', r: '\r', t: '\t', v: '\v', "'": "'", '"': '"' },
        br = function(t) {
          this.options = t;
        };
      br.prototype = {
        constructor: br,
        lex: function(t) {
          for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
            var e = this.text.charAt(this.index);
            if ('"' === e || "'" === e) this.readString(e);
            else if (this.isNumber(e) || ('.' === e && this.isNumber(this.peek())))
              this.readNumber();
            else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
            else if (this.is(e, '(){}[].,;:?'))
              this.tokens.push({ index: this.index, text: e }), this.index++;
            else if (this.isWhitespace(e)) this.index++;
            else {
              var n = e + this.peek(),
                r = n + this.peek(2),
                i = gr[e],
                o = gr[n],
                a = gr[r];
              if (i || o || a) {
                var s = a ? r : o ? n : e;
                this.tokens.push({ index: this.index, text: s, operator: !0 }),
                  (this.index += s.length);
              } else this.throwError('Unexpected next character ', this.index, this.index + 1);
            }
          }
          return this.tokens;
        },
        is: function(t, e) {
          return -1 !== e.indexOf(t);
        },
        peek: function(t) {
          var e = t || 1;
          return this.index + e < this.text.length && this.text.charAt(this.index + e);
        },
        isNumber: function(t) {
          return '0' <= t && t <= '9' && 'string' == typeof t;
        },
        isWhitespace: function(t) {
          return ' ' === t || '\r' === t || '\t' === t || '\n' === t || '\v' === t || ' ' === t;
        },
        isIdentifierStart: function(t) {
          return this.options.isIdentifierStart
            ? this.options.isIdentifierStart(t, this.codePointAt(t))
            : this.isValidIdentifierStart(t);
        },
        isValidIdentifierStart: function(t) {
          return ('a' <= t && t <= 'z') || ('A' <= t && t <= 'Z') || '_' === t || '$' === t;
        },
        isIdentifierContinue: function(t) {
          return this.options.isIdentifierContinue
            ? this.options.isIdentifierContinue(t, this.codePointAt(t))
            : this.isValidIdentifierContinue(t);
        },
        isValidIdentifierContinue: function(t, e) {
          return this.isValidIdentifierStart(t, e) || this.isNumber(t);
        },
        codePointAt: function(t) {
          return 1 === t.length
            ? t.charCodeAt(0)
            : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888;
        },
        peekMultichar: function() {
          var t = this.text.charAt(this.index),
            e = this.peek();
          if (!e) return t;
          var n = t.charCodeAt(0),
            r = e.charCodeAt(0);
          return n >= 55296 && n <= 56319 && r >= 56320 && r <= 57343 ? t + e : t;
        },
        isExpOperator: function(t) {
          return '-' === t || '+' === t || this.isNumber(t);
        },
        throwError: function(t, e, n) {
          n = n || this.index;
          var r = U(e)
            ? 's ' + e + '-' + this.index + ' [' + this.text.substring(e, n) + ']'
            : ' ' + n;
          throw vr('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].', t, r, this.text);
        },
        readNumber: function() {
          for (var t = '', e = this.index; this.index < this.text.length; ) {
            var n = u(this.text.charAt(this.index));
            if ('.' === n || this.isNumber(n)) t += n;
            else {
              var r = this.peek();
              if ('e' === n && this.isExpOperator(r)) t += n;
              else if (
                this.isExpOperator(n) &&
                r &&
                this.isNumber(r) &&
                'e' === t.charAt(t.length - 1)
              )
                t += n;
              else {
                if (
                  !this.isExpOperator(n) ||
                  (r && this.isNumber(r)) ||
                  'e' !== t.charAt(t.length - 1)
                )
                  break;
                this.throwError('Invalid exponent');
              }
            }
            this.index++;
          }
          this.tokens.push({ index: e, text: t, constant: !0, value: Number(t) });
        },
        readIdent: function() {
          var t = this.index;
          for (this.index += this.peekMultichar().length; this.index < this.text.length; ) {
            var e = this.peekMultichar();
            if (!this.isIdentifierContinue(e)) break;
            this.index += e.length;
          }
          this.tokens.push({ index: t, text: this.text.slice(t, this.index), identifier: !0 });
        },
        readString: function(t) {
          var e = this.index;
          this.index++;
          for (var n = '', r = t, i = !1; this.index < this.text.length; ) {
            var o = this.text.charAt(this.index);
            if (((r += o), i)) {
              if ('u' === o) {
                var a = this.text.substring(this.index + 1, this.index + 5);
                a.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + a + ']'),
                  (this.index += 4),
                  (n += String.fromCharCode(parseInt(a, 16)));
              } else {
                n += yr[o] || o;
              }
              i = !1;
            } else if ('\\' === o) i = !0;
            else {
              if (o === t)
                return (
                  this.index++, void this.tokens.push({ index: e, text: r, constant: !0, value: n })
                );
              n += o;
            }
            this.index++;
          }
          this.throwError('Unterminated quote', e);
        }
      };
      var wr = function(t, e) {
        (this.lexer = t), (this.options = e);
      };
      function Sr(t, e) {
        return void 0 !== t ? t : e;
      }
      function xr(t, e) {
        return void 0 === t ? e : void 0 === e ? t : t + e;
      }
      (wr.Program = 'Program'),
        (wr.ExpressionStatement = 'ExpressionStatement'),
        (wr.AssignmentExpression = 'AssignmentExpression'),
        (wr.ConditionalExpression = 'ConditionalExpression'),
        (wr.LogicalExpression = 'LogicalExpression'),
        (wr.BinaryExpression = 'BinaryExpression'),
        (wr.UnaryExpression = 'UnaryExpression'),
        (wr.CallExpression = 'CallExpression'),
        (wr.MemberExpression = 'MemberExpression'),
        (wr.Identifier = 'Identifier'),
        (wr.Literal = 'Literal'),
        (wr.ArrayExpression = 'ArrayExpression'),
        (wr.Property = 'Property'),
        (wr.ObjectExpression = 'ObjectExpression'),
        (wr.ThisExpression = 'ThisExpression'),
        (wr.LocalsExpression = 'LocalsExpression'),
        (wr.NGValueParameter = 'NGValueParameter'),
        (wr.prototype = {
          ast: function(t) {
            (this.text = t), (this.tokens = this.lexer.lex(t));
            var e = this.program();
            return (
              0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]),
              e
            );
          },
          program: function() {
            for (var t = []; ; )
              if (
                (this.tokens.length > 0 &&
                  !this.peek('}', ')', ';', ']') &&
                  t.push(this.expressionStatement()),
                !this.expect(';'))
              )
                return { type: wr.Program, body: t };
          },
          expressionStatement: function() {
            return { type: wr.ExpressionStatement, expression: this.filterChain() };
          },
          filterChain: function() {
            for (var t = this.expression(); this.expect('|'); ) t = this.filter(t);
            return t;
          },
          expression: function() {
            return this.assignment();
          },
          assignment: function() {
            var t = this.ternary();
            if (this.expect('=')) {
              if (!Rr(t)) throw vr('lval', 'Trying to assign a value to a non l-value');
              t = {
                type: wr.AssignmentExpression,
                left: t,
                right: this.assignment(),
                operator: '='
              };
            }
            return t;
          },
          ternary: function() {
            var t,
              e,
              n = this.logicalOR();
            return this.expect('?') && ((t = this.expression()), this.consume(':'))
              ? ((e = this.expression()),
                { type: wr.ConditionalExpression, test: n, alternate: t, consequent: e })
              : n;
          },
          logicalOR: function() {
            for (var t = this.logicalAND(); this.expect('||'); )
              t = { type: wr.LogicalExpression, operator: '||', left: t, right: this.logicalAND() };
            return t;
          },
          logicalAND: function() {
            for (var t = this.equality(); this.expect('&&'); )
              t = { type: wr.LogicalExpression, operator: '&&', left: t, right: this.equality() };
            return t;
          },
          equality: function() {
            for (var t, e = this.relational(); (t = this.expect('==', '!=', '===', '!==')); )
              e = {
                type: wr.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.relational()
              };
            return e;
          },
          relational: function() {
            for (var t, e = this.additive(); (t = this.expect('<', '>', '<=', '>=')); )
              e = { type: wr.BinaryExpression, operator: t.text, left: e, right: this.additive() };
            return e;
          },
          additive: function() {
            for (var t, e = this.multiplicative(); (t = this.expect('+', '-')); )
              e = {
                type: wr.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.multiplicative()
              };
            return e;
          },
          multiplicative: function() {
            for (var t, e = this.unary(); (t = this.expect('*', '/', '%')); )
              e = { type: wr.BinaryExpression, operator: t.text, left: e, right: this.unary() };
            return e;
          },
          unary: function() {
            var t;
            return (t = this.expect('+', '-', '!'))
              ? { type: wr.UnaryExpression, operator: t.text, prefix: !0, argument: this.unary() }
              : this.primary();
          },
          primary: function() {
            var t, e;
            for (
              this.expect('(')
                ? ((t = this.filterChain()), this.consume(')'))
                : this.expect('[')
                  ? (t = this.arrayDeclaration())
                  : this.expect('{')
                    ? (t = this.object())
                    : this.selfReferential.hasOwnProperty(this.peek().text)
                      ? (t = at(this.selfReferential[this.consume().text]))
                      : this.options.literals.hasOwnProperty(this.peek().text)
                        ? (t = {
                            type: wr.Literal,
                            value: this.options.literals[this.consume().text]
                          })
                        : this.peek().identifier
                          ? (t = this.identifier())
                          : this.peek().constant
                            ? (t = this.constant())
                            : this.throwError('not a primary expression', this.peek());
              (e = this.expect('(', '[', '.'));

            )
              '(' === e.text
                ? ((t = { type: wr.CallExpression, callee: t, arguments: this.parseArguments() }),
                  this.consume(')'))
                : '[' === e.text
                  ? ((t = {
                      type: wr.MemberExpression,
                      object: t,
                      property: this.expression(),
                      computed: !0
                    }),
                    this.consume(']'))
                  : '.' === e.text
                    ? (t = {
                        type: wr.MemberExpression,
                        object: t,
                        property: this.identifier(),
                        computed: !1
                      })
                    : this.throwError('IMPOSSIBLE');
            return t;
          },
          filter: function(t) {
            for (
              var e = [t],
                n = {
                  type: wr.CallExpression,
                  callee: this.identifier(),
                  arguments: e,
                  filter: !0
                };
              this.expect(':');

            )
              e.push(this.expression());
            return n;
          },
          parseArguments: function() {
            var t = [];
            if (')' !== this.peekToken().text)
              do {
                t.push(this.filterChain());
              } while (this.expect(','));
            return t;
          },
          identifier: function() {
            var t = this.consume();
            return (
              t.identifier || this.throwError('is not a valid identifier', t),
              { type: wr.Identifier, name: t.text }
            );
          },
          constant: function() {
            return { type: wr.Literal, value: this.consume().value };
          },
          arrayDeclaration: function() {
            var t = [];
            if (']' !== this.peekToken().text)
              do {
                if (this.peek(']')) break;
                t.push(this.expression());
              } while (this.expect(','));
            return this.consume(']'), { type: wr.ArrayExpression, elements: t };
          },
          object: function() {
            var t,
              e = [];
            if ('}' !== this.peekToken().text)
              do {
                if (this.peek('}')) break;
                (t = { type: wr.Property, kind: 'init' }),
                  this.peek().constant
                    ? ((t.key = this.constant()),
                      (t.computed = !1),
                      this.consume(':'),
                      (t.value = this.expression()))
                    : this.peek().identifier
                      ? ((t.key = this.identifier()),
                        (t.computed = !1),
                        this.peek(':')
                          ? (this.consume(':'), (t.value = this.expression()))
                          : (t.value = t.key))
                      : this.peek('[')
                        ? (this.consume('['),
                          (t.key = this.expression()),
                          this.consume(']'),
                          (t.computed = !0),
                          this.consume(':'),
                          (t.value = this.expression()))
                        : this.throwError('invalid key', this.peek()),
                  e.push(t);
              } while (this.expect(','));
            return this.consume('}'), { type: wr.ObjectExpression, properties: e };
          },
          throwError: function(t, e) {
            throw vr(
              'syntax',
              "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",
              e.text,
              t,
              e.index + 1,
              this.text,
              this.text.substring(e.index)
            );
          },
          consume: function(t) {
            if (0 === this.tokens.length)
              throw vr('ueoe', 'Unexpected end of expression: {0}', this.text);
            var e = this.expect(t);
            return e || this.throwError('is unexpected, expecting [' + t + ']', this.peek()), e;
          },
          peekToken: function() {
            if (0 === this.tokens.length)
              throw vr('ueoe', 'Unexpected end of expression: {0}', this.text);
            return this.tokens[0];
          },
          peek: function(t, e, n, r) {
            return this.peekAhead(0, t, e, n, r);
          },
          peekAhead: function(t, e, n, r, i) {
            if (this.tokens.length > t) {
              var o = this.tokens[t],
                a = o.text;
              if (a === e || a === n || a === r || a === i || (!e && !n && !r && !i)) return o;
            }
            return !1;
          },
          expect: function(t, e, n, r) {
            var i = this.peek(t, e, n, r);
            return !!i && (this.tokens.shift(), i);
          },
          selfReferential: {
            this: { type: wr.ThisExpression },
            $locals: { type: wr.LocalsExpression }
          }
        });
      var _r = 1,
        Er = 2;
      function Cr(t, e, n) {
        var r,
          i,
          o,
          a = (t.isPure = (function(t, e) {
            switch (t.type) {
              case wr.MemberExpression:
                if (t.computed) return !1;
                break;
              case wr.UnaryExpression:
                return _r;
              case wr.BinaryExpression:
                return '+' !== t.operator && _r;
              case wr.CallExpression:
                return !1;
            }
            return void 0 === e ? Er : e;
          })(t, n));
        switch (t.type) {
          case wr.Program:
            (r = !0),
              x(t.body, function(t) {
                Cr(t.expression, e, a), (r = r && t.expression.constant);
              }),
              (t.constant = r);
            break;
          case wr.Literal:
            (t.constant = !0), (t.toWatch = []);
            break;
          case wr.UnaryExpression:
            Cr(t.argument, e, a),
              (t.constant = t.argument.constant),
              (t.toWatch = t.argument.toWatch);
            break;
          case wr.BinaryExpression:
            Cr(t.left, e, a),
              Cr(t.right, e, a),
              (t.constant = t.left.constant && t.right.constant),
              (t.toWatch = t.left.toWatch.concat(t.right.toWatch));
            break;
          case wr.LogicalExpression:
            Cr(t.left, e, a),
              Cr(t.right, e, a),
              (t.constant = t.left.constant && t.right.constant),
              (t.toWatch = t.constant ? [] : [t]);
            break;
          case wr.ConditionalExpression:
            Cr(t.test, e, a),
              Cr(t.alternate, e, a),
              Cr(t.consequent, e, a),
              (t.constant = t.test.constant && t.alternate.constant && t.consequent.constant),
              (t.toWatch = t.constant ? [] : [t]);
            break;
          case wr.Identifier:
            (t.constant = !1), (t.toWatch = [t]);
            break;
          case wr.MemberExpression:
            Cr(t.object, e, a),
              t.computed && Cr(t.property, e, a),
              (t.constant = t.object.constant && (!t.computed || t.property.constant)),
              (t.toWatch = t.constant ? [] : [t]);
            break;
          case wr.CallExpression:
            (o =
              !!t.filter &&
              (function(t, e) {
                return !t(e).$stateful;
              })(e, t.callee.name)),
              (r = o),
              (i = []),
              x(t.arguments, function(t) {
                Cr(t, e, a), (r = r && t.constant), i.push.apply(i, t.toWatch);
              }),
              (t.constant = r),
              (t.toWatch = o ? i : [t]);
            break;
          case wr.AssignmentExpression:
            Cr(t.left, e, a),
              Cr(t.right, e, a),
              (t.constant = t.left.constant && t.right.constant),
              (t.toWatch = [t]);
            break;
          case wr.ArrayExpression:
            (r = !0),
              (i = []),
              x(t.elements, function(t) {
                Cr(t, e, a), (r = r && t.constant), i.push.apply(i, t.toWatch);
              }),
              (t.constant = r),
              (t.toWatch = i);
            break;
          case wr.ObjectExpression:
            (r = !0),
              (i = []),
              x(t.properties, function(t) {
                Cr(t.value, e, a),
                  (r = r && t.value.constant),
                  i.push.apply(i, t.value.toWatch),
                  t.computed &&
                    (Cr(t.key, e, !1), (r = r && t.key.constant), i.push.apply(i, t.key.toWatch));
              }),
              (t.constant = r),
              (t.toWatch = i);
            break;
          case wr.ThisExpression:
          case wr.LocalsExpression:
            (t.constant = !1), (t.toWatch = []);
        }
      }
      function Or(t) {
        if (1 === t.length) {
          var e = t[0].expression,
            n = e.toWatch;
          return 1 !== n.length ? n : n[0] !== e ? n : void 0;
        }
      }
      function Rr(t) {
        return t.type === wr.Identifier || t.type === wr.MemberExpression;
      }
      function kr(t) {
        if (1 === t.body.length && Rr(t.body[0].expression))
          return {
            type: wr.AssignmentExpression,
            left: t.body[0].expression,
            right: { type: wr.NGValueParameter },
            operator: '='
          };
      }
      function Pr(t) {
        this.$filter = t;
      }
      function Ar(t) {
        this.$filter = t;
      }
      function Tr(t, e, n) {
        (this.ast = new wr(t, n)), (this.astCompiler = n.csp ? new Ar(e) : new Pr(e));
      }
      function jr(t) {
        return G(t.valueOf) ? t.valueOf() : $r.call(t);
      }
      function Vr() {
        var t,
          e,
          n = Ft(),
          r = { true: !0, false: !1, null: null, undefined: void 0 };
        (this.addLiteral = function(t, e) {
          r[t] = e;
        }),
          (this.setIdentifierFns = function(n, r) {
            return (t = n), (e = r), this;
          }),
          (this.$get = [
            '$filter',
            function(i) {
              var o = {
                csp: ct().noUnsafeEval,
                literals: at(r),
                isIdentifierStart: G(t) && t,
                isIdentifierContinue: G(e) && e
              };
              return (
                (a.$$getAst = function(t) {
                  return new Tr(new br(o), i, o).getAst(t).ast;
                }),
                a
              );
              function a(t, e) {
                var r, a;
                switch (typeof t) {
                  case 'string':
                    if (((t = t.trim()), !(r = n[(a = t)])))
                      (r = new Tr(new br(o), i, o).parse(t)).constant
                        ? (r.$$watchDelegate = f)
                        : r.oneTime
                          ? (r.$$watchDelegate = r.literal ? l : c)
                          : r.inputs && (r.$$watchDelegate = u),
                        (n[a] = r);
                    return h(r, e);
                  case 'function':
                    return h(t, e);
                  default:
                    return h(V, e);
                }
              }
              function s(t, e, n) {
                return null == t || null == e
                  ? t === e
                  : !('object' == typeof t && 'object' == typeof (t = jr(t)) && !n) &&
                      (t === e || (t != t && e != e));
              }
              function u(t, e, n, r, i) {
                var o,
                  a = r.inputs;
                if (1 === a.length) {
                  var u = s;
                  return (
                    (a = a[0]),
                    t.$watch(
                      function(t) {
                        var e = a(t);
                        return (
                          s(e, u, a.isPure) || ((o = r(t, void 0, void 0, [e])), (u = e && jr(e))),
                          o
                        );
                      },
                      e,
                      n,
                      i
                    )
                  );
                }
                for (var c = [], l = [], f = 0, h = a.length; f < h; f++) (c[f] = s), (l[f] = null);
                return t.$watch(
                  function(t) {
                    for (var e = !1, n = 0, i = a.length; n < i; n++) {
                      var u = a[n](t);
                      (e || (e = !s(u, c[n], a[n].isPure))) && ((l[n] = u), (c[n] = u && jr(u)));
                    }
                    return e && (o = r(t, void 0, void 0, l)), o;
                  },
                  e,
                  n,
                  i
                );
              }
              function c(t, e, n, r, i) {
                var o, a;
                return (o = r.inputs
                  ? u(t, s, n, r, i)
                  : t.$watch(
                      function(t) {
                        return r(t);
                      },
                      s,
                      n
                    ));
                function s(t, n, r) {
                  (a = t),
                    G(e) && e(t, n, r),
                    U(t) &&
                      r.$$postDigest(function() {
                        U(a) && o();
                      });
                }
              }
              function l(t, e, n, r) {
                var i, o;
                return (i = t.$watch(
                  function(t) {
                    return r(t);
                  },
                  function(t, n, r) {
                    (o = t),
                      G(e) && e(t, n, r),
                      a(t) &&
                        r.$$postDigest(function() {
                          a(o) && i();
                        });
                  },
                  n
                ));
                function a(t) {
                  var e = !0;
                  return (
                    x(t, function(t) {
                      U(t) || (e = !1);
                    }),
                    e
                  );
                }
              }
              function f(t, e, n, r) {
                var i = t.$watch(
                  function(t) {
                    return i(), r(t);
                  },
                  e,
                  n
                );
                return i;
              }
              function h(t, e) {
                if (!e) return t;
                var n = t.$$watchDelegate,
                  r = !1,
                  i =
                    n !== l && n !== c
                      ? function(n, i, o, a) {
                          var s = r && a ? a[0] : t(n, i, o, a);
                          return e(s, n, i);
                        }
                      : function(n, r, i, o) {
                          var a = t(n, r, i, o),
                            s = e(a, n, r);
                          return U(a) ? s : a;
                        };
                return (
                  (r = !t.inputs),
                  n && n !== u
                    ? ((i.$$watchDelegate = n), (i.inputs = t.inputs))
                    : e.$stateful ||
                      ((i.$$watchDelegate = u), (i.inputs = t.inputs ? t.inputs : [t])),
                  i.inputs &&
                    (i.inputs = i.inputs.map(function(t) {
                      return t.isPure === Er
                        ? function(e) {
                            return t(e);
                          }
                        : t;
                    })),
                  i
                );
              }
            }
          ]);
      }
      function Mr() {
        var t = !0;
        (this.$get = [
          '$rootScope',
          '$exceptionHandler',
          function(e, n) {
            return Nr(
              function(t) {
                e.$evalAsync(t);
              },
              n,
              t
            );
          }
        ]),
          (this.errorOnUnhandledRejections = function(e) {
            return U(e) ? ((t = e), this) : t;
          });
      }
      function Ir() {
        var t = !0;
        (this.$get = [
          '$browser',
          '$exceptionHandler',
          function(e, n) {
            return Nr(
              function(t) {
                e.defer(t);
              },
              n,
              t
            );
          }
        ]),
          (this.errorOnUnhandledRejections = function(e) {
            return U(e) ? ((t = e), this) : t;
          });
      }
      function Nr(t, e, n) {
        var r = i('$q', TypeError),
          o = 0,
          a = [];
        function s() {
          return new function() {
            var t = (this.promise = new u());
            (this.resolve = function(e) {
              f(t, e);
            }),
              (this.reject = function(e) {
                h(t, e);
              }),
              (this.notify = function(e) {
                d(t, e);
              });
          }();
        }
        function u() {
          this.$$state = { status: 0 };
        }
        function c() {
          for (; !o && a.length; ) {
            var t = a.shift();
            if (!Dr(t)) {
              Ur(t);
              var n = 'Possibly unhandled rejection: ' + Kt(t.value);
              W(t.value) ? e(t.value, n) : e(n);
            }
          }
        }
        function l(r) {
          !n ||
            r.pending ||
            2 !== r.status ||
            Dr(r) ||
            (0 === o && 0 === a.length && t(c), a.push(r)),
            !r.processScheduled &&
              r.pending &&
              ((r.processScheduled = !0),
              ++o,
              t(function() {
                !(function(r) {
                  var i, a, s;
                  (s = r.pending), (r.processScheduled = !1), (r.pending = void 0);
                  try {
                    for (var u = 0, l = s.length; u < l; ++u) {
                      Ur(r), (a = s[u][0]), (i = s[u][r.status]);
                      try {
                        G(i) ? f(a, i(r.value)) : 1 === r.status ? f(a, r.value) : h(a, r.value);
                      } catch (t) {
                        h(a, t), t && !0 === t.$$passToExceptionHandler && e(t);
                      }
                    }
                  } finally {
                    --o, n && 0 === o && t(c);
                  }
                })(r);
              }));
        }
        function f(t, e) {
          t.$$state.status ||
            (e === t
              ? p(
                  t,
                  r(
                    'qcycle',
                    "Expected promise to be resolved with value other than itself '{0}'",
                    e
                  )
                )
              : (function t(e, n) {
                  var r;
                  var i = !1;
                  try {
                    (H(n) || G(n)) && (r = n.then),
                      G(r)
                        ? ((e.$$state.status = -1),
                          r.call(
                            n,
                            function o(t) {
                              if (i) return;
                              (i = !0),
                                (function t(e, n) {
                                  var r;
                                  var i = !1;
                                  try {
                                    (H(n) || G(n)) && (r = n.then),
                                      G(r)
                                        ? ((e.$$state.status = -1),
                                          r.call(n, o, a, function(t) {
                                            d(e, t);
                                          }))
                                        : ((e.$$state.value = n),
                                          (e.$$state.status = 1),
                                          l(e.$$state));
                                  } catch (t) {
                                    a(t);
                                  }
                                  function o(n) {
                                    i || ((i = !0), t(e, n));
                                  }
                                  function a(t) {
                                    i || ((i = !0), p(e, t));
                                  }
                                })(e, t);
                            },
                            a,
                            function(t) {
                              d(e, t);
                            }
                          ))
                        : ((e.$$state.value = n), (e.$$state.status = 1), l(e.$$state));
                  } catch (t) {
                    a(t);
                  }
                  function o(n) {
                    i || ((i = !0), t(e, n));
                  }
                  function a(t) {
                    i || ((i = !0), p(e, t));
                  }
                })(t, e));
        }
        function h(t, e) {
          t.$$state.status || p(t, e);
        }
        function p(t, e) {
          (t.$$state.value = e), (t.$$state.status = 2), l(t.$$state);
        }
        function d(n, r) {
          var i = n.$$state.pending;
          n.$$state.status <= 0 &&
            i &&
            i.length &&
            t(function() {
              for (var t, n, o = 0, a = i.length; o < a; o++) {
                (n = i[o][0]), (t = i[o][3]);
                try {
                  d(n, G(t) ? t(r) : r);
                } catch (t) {
                  e(t);
                }
              }
            });
        }
        function v(t) {
          var e = new u();
          return h(e, t), e;
        }
        function $(t, e, n) {
          var r = null;
          try {
            G(n) && (r = n());
          } catch (t) {
            return v(t);
          }
          return Q(r)
            ? r.then(function() {
                return e(t);
              }, v)
            : e(t);
        }
        function m(t, e, n, r) {
          var i = new u();
          return f(i, t), i.then(e, n, r);
        }
        k(u.prototype, {
          then: function(t, e, n) {
            if (D(t) && D(e) && D(n)) return this;
            var r = new u();
            return (
              (this.$$state.pending = this.$$state.pending || []),
              this.$$state.pending.push([r, t, e, n]),
              this.$$state.status > 0 && l(this.$$state),
              r
            );
          },
          catch: function(t) {
            return this.then(null, t);
          },
          finally: function(t, e) {
            return this.then(
              function(e) {
                return $(e, g, t);
              },
              function(e) {
                return $(e, v, t);
              },
              e
            );
          }
        });
        var g = m;
        function y(t) {
          if (!G(t)) throw r('norslvr', "Expected resolverFn, got '{0}'", t);
          var e = new u();
          return (
            t(
              function(t) {
                f(e, t);
              },
              function(t) {
                h(e, t);
              }
            ),
            e
          );
        }
        return (
          (y.prototype = u.prototype),
          (y.defer = s),
          (y.reject = v),
          (y.when = m),
          (y.resolve = g),
          (y.all = function(t) {
            var e = new u(),
              n = 0,
              r = z(t) ? [] : {};
            return (
              x(t, function(t, i) {
                n++,
                  m(t).then(
                    function(t) {
                      (r[i] = t), --n || f(e, r);
                    },
                    function(t) {
                      h(e, t);
                    }
                  );
              }),
              0 === n && f(e, r),
              e
            );
          }),
          (y.race = function(t) {
            var e = s();
            return (
              x(t, function(t) {
                m(t).then(e.resolve, e.reject);
              }),
              e.promise
            );
          }),
          y
        );
      }
      function Dr(t) {
        return !!t.pur;
      }
      function Ur(t) {
        t.pur = !0;
      }
      function Hr(t) {
        Ur(t.$$state);
      }
      function Fr() {
        this.$get = [
          '$window',
          '$timeout',
          function(t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
              r =
                t.cancelAnimationFrame ||
                t.webkitCancelAnimationFrame ||
                t.webkitCancelRequestAnimationFrame,
              i = !!n,
              o = i
                ? function(t) {
                    var e = n(t);
                    return function() {
                      r(e);
                    };
                  }
                : function(t) {
                    var n = e(t, 16.66, !1);
                    return function() {
                      e.cancel(n);
                    };
                  };
            return (o.supported = i), o;
          }
        ];
      }
      function qr() {
        var t = 10,
          e = i('$rootScope'),
          n = null,
          r = null;
        (this.digestTtl = function(e) {
          return arguments.length && (t = e), t;
        }),
          (this.$get = [
            '$exceptionHandler',
            '$parse',
            '$browser',
            function(i, o, a) {
              function u(t) {
                t.currentScope.$$destroyed = !0;
              }
              function c() {
                (this.$id = C()),
                  (this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null),
                  (this.$root = this),
                  (this.$$destroyed = !1),
                  (this.$$suspended = !1),
                  (this.$$listeners = {}),
                  (this.$$listenerCount = {}),
                  (this.$$watchersCount = 0),
                  (this.$$isolateBindings = null);
              }
              c.prototype = {
                constructor: c,
                $new: function(t, e) {
                  var n;
                  return (
                    (e = e || this),
                    t
                      ? ((n = new c()).$root = this.$root)
                      : (this.$$ChildScope ||
                          (this.$$ChildScope = (function(t) {
                            function e() {
                              (this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null),
                                (this.$$listeners = {}),
                                (this.$$listenerCount = {}),
                                (this.$$watchersCount = 0),
                                (this.$id = C()),
                                (this.$$ChildScope = null),
                                (this.$$suspended = !1);
                            }
                            return (e.prototype = t), e;
                          })(this)),
                        (n = new this.$$ChildScope())),
                    (n.$parent = e),
                    (n.$$prevSibling = e.$$childTail),
                    e.$$childHead
                      ? ((e.$$childTail.$$nextSibling = n), (e.$$childTail = n))
                      : (e.$$childHead = e.$$childTail = n),
                    (t || e !== this) && n.$on('$destroy', u),
                    n
                  );
                },
                $watch: function(t, e, r, i) {
                  var a = o(t),
                    s = G(e) ? e : V;
                  if (a.$$watchDelegate) return a.$$watchDelegate(this, s, r, a, t);
                  var u = this,
                    c = u.$$watchers,
                    l = { fn: s, last: b, get: a, exp: i || t, eq: !!r };
                  return (
                    (n = null),
                    c || ((c = u.$$watchers = []).$$digestWatchIndex = -1),
                    c.unshift(l),
                    c.$$digestWatchIndex++,
                    g(this, 1),
                    function() {
                      var t = ot(c, l);
                      t >= 0 && (g(u, -1), t < c.$$digestWatchIndex && c.$$digestWatchIndex--),
                        (n = null);
                    }
                  );
                },
                $watchGroup: function(t, e) {
                  var n = new Array(t.length),
                    r = new Array(t.length),
                    i = [],
                    o = this,
                    a = !1,
                    s = !0;
                  if (!t.length) {
                    var u = !0;
                    return (
                      o.$evalAsync(function() {
                        u && e(r, r, o);
                      }),
                      function() {
                        u = !1;
                      }
                    );
                  }
                  if (1 === t.length)
                    return this.$watch(t[0], function(t, i, o) {
                      (r[0] = t), (n[0] = i), e(r, t === i ? r : n, o);
                    });
                  function c() {
                    (a = !1), s ? ((s = !1), e(r, r, o)) : e(r, n, o);
                  }
                  return (
                    x(t, function(t, e) {
                      var s = o.$watch(t, function(t, i) {
                        (r[e] = t), (n[e] = i), a || ((a = !0), o.$evalAsync(c));
                      });
                      i.push(s);
                    }),
                    function() {
                      for (; i.length; ) i.shift()();
                    }
                  );
                },
                $watchCollection: function(t, e) {
                  v.$stateful = !0;
                  var n,
                    r,
                    i,
                    a = this,
                    u = e.length > 1,
                    c = 0,
                    l = o(t, v),
                    f = [],
                    h = {},
                    p = !0,
                    d = 0;
                  function v(t) {
                    var e, i, o, a;
                    if (!D((n = t))) {
                      if (H(n))
                        if (S(n)) {
                          r !== f && ((d = (r = f).length = 0), c++),
                            (e = n.length),
                            d !== e && (c++, (r.length = d = e));
                          for (var u = 0; u < e; u++)
                            (a = r[u]),
                              (o = n[u]),
                              (a != a && o != o) || a === o || (c++, (r[u] = o));
                        } else {
                          for (i in (r !== h && ((r = h = {}), (d = 0), c++), (e = 0), n))
                            s.call(n, i) &&
                              (e++,
                              (o = n[i]),
                              (a = r[i]),
                              i in r
                                ? (a != a && o != o) || a === o || (c++, (r[i] = o))
                                : (d++, (r[i] = o), c++));
                          if (d > e) for (i in (c++, r)) s.call(n, i) || (d--, delete r[i]);
                        }
                      else r !== n && ((r = n), c++);
                      return c;
                    }
                  }
                  return this.$watch(l, function() {
                    if ((p ? ((p = !1), e(n, n, a)) : e(n, i, a), u))
                      if (H(n))
                        if (S(n)) {
                          i = new Array(n.length);
                          for (var t = 0; t < n.length; t++) i[t] = n[t];
                        } else for (var r in ((i = {}), n)) s.call(n, r) && (i[r] = n[r]);
                      else i = n;
                  });
                },
                $digest: function() {
                  var o,
                    s,
                    u,
                    c,
                    l,
                    d,
                    g,
                    y,
                    S,
                    x = t,
                    _ = [];
                  $('$digest'),
                    a.$$checkUrlChange(),
                    this === f && null !== r && (a.defer.cancel(r), w()),
                    (n = null);
                  do {
                    (l = !1), (g = this);
                    for (var E = 0; E < h.length; E++) {
                      try {
                        (0, (S = h[E]).fn)(S.scope, S.locals);
                      } catch (t) {
                        i(t);
                      }
                      n = null;
                    }
                    h.length = 0;
                    t: do {
                      if ((c = !g.$$suspended && g.$$watchers))
                        for (c.$$digestWatchIndex = c.length; c.$$digestWatchIndex--; )
                          try {
                            if ((o = c[c.$$digestWatchIndex]))
                              if (
                                (s = (0, o.get)(g)) === (u = o.last) ||
                                (o.eq ? ut(s, u) : T(s) && T(u))
                              ) {
                                if (o === n) {
                                  l = !1;
                                  break t;
                                }
                              } else
                                (l = !0),
                                  (n = o),
                                  (o.last = o.eq ? at(s, null) : s),
                                  (0, o.fn)(s, u === b ? s : u, g),
                                  x < 5 &&
                                    (_[(y = 4 - x)] || (_[y] = []),
                                    _[y].push({
                                      msg: G(o.exp)
                                        ? 'fn: ' + (o.exp.name || o.exp.toString())
                                        : o.exp,
                                      newVal: s,
                                      oldVal: u
                                    }));
                          } catch (t) {
                            i(t);
                          }
                      if (
                        !(d =
                          (!g.$$suspended && g.$$watchersCount && g.$$childHead) ||
                          (g !== this && g.$$nextSibling))
                      )
                        for (; g !== this && !(d = g.$$nextSibling); ) g = g.$parent;
                    } while ((g = d));
                    if ((l || h.length) && !x--)
                      throw (m(),
                      e(
                        'infdig',
                        '{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}',
                        t,
                        _
                      ));
                  } while (l || h.length);
                  for (m(); v < p.length; )
                    try {
                      p[v++]();
                    } catch (t) {
                      i(t);
                    }
                  (p.length = v = 0), a.$$checkUrlChange();
                },
                $suspend: function() {
                  this.$$suspended = !0;
                },
                $isSuspended: function() {
                  return this.$$suspended;
                },
                $resume: function() {
                  this.$$suspended = !1;
                },
                $destroy: function() {
                  if (!this.$$destroyed) {
                    var t = this.$parent;
                    for (var e in (this.$broadcast('$destroy'),
                    (this.$$destroyed = !0),
                    this === f && a.$$applicationDestroyed(),
                    g(this, -this.$$watchersCount),
                    this.$$listenerCount))
                      y(this, this.$$listenerCount[e], e);
                    t && t.$$childHead === this && (t.$$childHead = this.$$nextSibling),
                      t && t.$$childTail === this && (t.$$childTail = this.$$prevSibling),
                      this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                      this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                      (this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = V),
                      (this.$on = this.$watch = this.$watchGroup = function() {
                        return V;
                      }),
                      (this.$$listeners = {}),
                      (this.$$nextSibling = null),
                      (function t(e) {
                        9 === l &&
                          (e.$$childHead && t(e.$$childHead),
                          e.$$nextSibling && t(e.$$nextSibling)),
                          (e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null);
                      })(this);
                  }
                },
                $eval: function(t, e) {
                  return o(t)(this, e);
                },
                $evalAsync: function(t, e) {
                  f.$$phase ||
                    h.length ||
                    a.defer(function() {
                      h.length && f.$digest();
                    }),
                    h.push({ scope: this, fn: o(t), locals: e });
                },
                $$postDigest: function(t) {
                  p.push(t);
                },
                $apply: function(t) {
                  try {
                    $('$apply');
                    try {
                      return this.$eval(t);
                    } finally {
                      m();
                    }
                  } catch (t) {
                    i(t);
                  } finally {
                    try {
                      f.$digest();
                    } catch (t) {
                      throw (i(t), t);
                    }
                  }
                },
                $applyAsync: function(t) {
                  var e = this;
                  t &&
                    d.push(function() {
                      e.$eval(t);
                    }),
                    (t = o(t)),
                    null === r &&
                      (r = a.defer(function() {
                        f.$apply(w);
                      }));
                },
                $on: function(t, e) {
                  var n = this.$$listeners[t];
                  n || (this.$$listeners[t] = n = []), n.push(e);
                  var r = this;
                  do {
                    r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++;
                  } while ((r = r.$parent));
                  var i = this;
                  return function() {
                    var r = n.indexOf(e);
                    -1 !== r && (delete n[r], y(i, 1, t));
                  };
                },
                $emit: function(t, e) {
                  var n,
                    r,
                    o,
                    a = [],
                    s = this,
                    u = !1,
                    c = {
                      name: t,
                      targetScope: s,
                      stopPropagation: function() {
                        u = !0;
                      },
                      preventDefault: function() {
                        c.defaultPrevented = !0;
                      },
                      defaultPrevented: !1
                    },
                    l = ft([c], arguments, 1);
                  do {
                    for (
                      n = s.$$listeners[t] || a, c.currentScope = s, r = 0, o = n.length;
                      r < o;
                      r++
                    )
                      if (n[r])
                        try {
                          n[r].apply(null, l);
                        } catch (t) {
                          i(t);
                        }
                      else n.splice(r, 1), r--, o--;
                    if (u) break;
                    s = s.$parent;
                  } while (s);
                  return (c.currentScope = null), c;
                },
                $broadcast: function(t, e) {
                  var n = this,
                    r = this,
                    o = {
                      name: t,
                      targetScope: this,
                      preventDefault: function() {
                        o.defaultPrevented = !0;
                      },
                      defaultPrevented: !1
                    };
                  if (!this.$$listenerCount[t]) return o;
                  for (var a, s, u, c = ft([o], arguments, 1); (n = r); ) {
                    for (
                      o.currentScope = n, s = 0, u = (a = n.$$listeners[t] || []).length;
                      s < u;
                      s++
                    )
                      if (a[s])
                        try {
                          a[s].apply(null, c);
                        } catch (t) {
                          i(t);
                        }
                      else a.splice(s, 1), s--, u--;
                    if (
                      !(r =
                        (n.$$listenerCount[t] && n.$$childHead) || (n !== this && n.$$nextSibling))
                    )
                      for (; n !== this && !(r = n.$$nextSibling); ) n = n.$parent;
                  }
                  return (o.currentScope = null), o;
                }
              };
              var f = new c(),
                h = (f.$$asyncQueue = []),
                p = (f.$$postDigestQueue = []),
                d = (f.$$applyAsyncQueue = []),
                v = 0;
              return f;
              function $(t) {
                if (f.$$phase) throw e('inprog', '{0} already in progress', f.$$phase);
                f.$$phase = t;
              }
              function m() {
                f.$$phase = null;
              }
              function g(t, e) {
                do {
                  t.$$watchersCount += e;
                } while ((t = t.$parent));
              }
              function y(t, e, n) {
                do {
                  (t.$$listenerCount[n] -= e),
                    0 === t.$$listenerCount[n] && delete t.$$listenerCount[n];
                } while ((t = t.$parent));
              }
              function b() {}
              function w() {
                for (; d.length; )
                  try {
                    d.shift()();
                  } catch (t) {
                    i(t);
                  }
                r = null;
              }
            }
          ]);
      }
      function Lr() {
        var t = /^\s*(https?|s?ftp|mailto|tel|file):/,
          e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        (this.aHrefSanitizationWhitelist = function(e) {
          return U(e) ? ((t = e), this) : t;
        }),
          (this.imgSrcSanitizationWhitelist = function(t) {
            return U(t) ? ((e = t), this) : e;
          }),
          (this.$get = function() {
            return function(n, r) {
              var i,
                o = r ? e : t;
              return '' === (i = ii(n && n.trim()).href) || i.match(o) ? n : 'unsafe:' + i;
            };
          });
      }
      (Pr.prototype = {
        compile: function(t) {
          var e = this;
          (this.state = {
            nextId: 0,
            filters: {},
            fn: { vars: [], body: [], own: {} },
            assign: { vars: [], body: [], own: {} },
            inputs: []
          }),
            Cr(t, e.$filter);
          var n,
            r = '';
          if (((this.stage = 'assign'), (n = kr(t)))) {
            this.state.computing = 'assign';
            var i = this.nextId();
            this.recurse(n, i),
              this.return_(i),
              (r = 'fn.assign=' + this.generateFunction('assign', 's,v,l'));
          }
          var o = Or(t.body);
          (e.stage = 'inputs'),
            x(o, function(t, n) {
              var r = 'fn' + n;
              (e.state[r] = { vars: [], body: [], own: {} }), (e.state.computing = r);
              var i = e.nextId();
              e.recurse(t, i),
                e.return_(i),
                e.state.inputs.push({ name: r, isPure: t.isPure }),
                (t.watchId = n);
            }),
            (this.state.computing = 'fn'),
            (this.stage = 'main'),
            this.recurse(t);
          var a =
              '"' +
              this.USE +
              ' ' +
              this.STRICT +
              '";\n' +
              this.filterPrefix() +
              'var fn=' +
              this.generateFunction('fn', 's,l,a,i') +
              r +
              this.watchFns() +
              'return fn;',
            s = new Function('$filter', 'getStringValue', 'ifDefined', 'plus', a)(
              this.$filter,
              mr,
              Sr,
              xr
            );
          return (this.state = this.stage = void 0), s;
        },
        USE: 'use',
        STRICT: 'strict',
        watchFns: function() {
          var t = [],
            e = this.state.inputs,
            n = this;
          return (
            x(e, function(e) {
              t.push('var ' + e.name + '=' + n.generateFunction(e.name, 's')),
                e.isPure && t.push(e.name, '.isPure=' + JSON.stringify(e.isPure) + ';');
            }),
            e.length &&
              t.push(
                'fn.inputs=[' +
                  e
                    .map(function(t) {
                      return t.name;
                    })
                    .join(',') +
                  '];'
              ),
            t.join('')
          );
        },
        generateFunction: function(t, e) {
          return 'function(' + e + '){' + this.varsPrefix(t) + this.body(t) + '};';
        },
        filterPrefix: function() {
          var t = [],
            e = this;
          return (
            x(this.state.filters, function(n, r) {
              t.push(n + '=$filter(' + e.escape(r) + ')');
            }),
            t.length ? 'var ' + t.join(',') + ';' : ''
          );
        },
        varsPrefix: function(t) {
          return this.state[t].vars.length ? 'var ' + this.state[t].vars.join(',') + ';' : '';
        },
        body: function(t) {
          return this.state[t].body.join('');
        },
        recurse: function(t, e, n, r, i, o) {
          var a,
            s,
            u,
            c,
            l,
            f = this;
          if (((r = r || V), !o && U(t.watchId)))
            return (
              (e = e || this.nextId()),
              void this.if_(
                'i',
                this.lazyAssign(e, this.computedMember('i', t.watchId)),
                this.lazyRecurse(t, e, n, r, i, !0)
              )
            );
          switch (t.type) {
            case wr.Program:
              x(t.body, function(e, n) {
                f.recurse(e.expression, void 0, void 0, function(t) {
                  s = t;
                }),
                  n !== t.body.length - 1 ? f.current().body.push(s, ';') : f.return_(s);
              });
              break;
            case wr.Literal:
              (c = this.escape(t.value)), this.assign(e, c), r(e || c);
              break;
            case wr.UnaryExpression:
              this.recurse(t.argument, void 0, void 0, function(t) {
                s = t;
              }),
                (c = t.operator + '(' + this.ifDefined(s, 0) + ')'),
                this.assign(e, c),
                r(c);
              break;
            case wr.BinaryExpression:
              this.recurse(t.left, void 0, void 0, function(t) {
                a = t;
              }),
                this.recurse(t.right, void 0, void 0, function(t) {
                  s = t;
                }),
                (c =
                  '+' === t.operator
                    ? this.plus(a, s)
                    : '-' === t.operator
                      ? this.ifDefined(a, 0) + t.operator + this.ifDefined(s, 0)
                      : '(' + a + ')' + t.operator + '(' + s + ')'),
                this.assign(e, c),
                r(c);
              break;
            case wr.LogicalExpression:
              (e = e || this.nextId()),
                f.recurse(t.left, e),
                f.if_('&&' === t.operator ? e : f.not(e), f.lazyRecurse(t.right, e)),
                r(e);
              break;
            case wr.ConditionalExpression:
              (e = e || this.nextId()),
                f.recurse(t.test, e),
                f.if_(e, f.lazyRecurse(t.alternate, e), f.lazyRecurse(t.consequent, e)),
                r(e);
              break;
            case wr.Identifier:
              (e = e || this.nextId()),
                n &&
                  ((n.context =
                    'inputs' === f.stage
                      ? 's'
                      : this.assign(this.nextId(), this.getHasOwnProperty('l', t.name) + '?l:s')),
                  (n.computed = !1),
                  (n.name = t.name)),
                f.if_(
                  'inputs' === f.stage || f.not(f.getHasOwnProperty('l', t.name)),
                  function() {
                    f.if_('inputs' === f.stage || 's', function() {
                      i &&
                        1 !== i &&
                        f.if_(
                          f.isNull(f.nonComputedMember('s', t.name)),
                          f.lazyAssign(f.nonComputedMember('s', t.name), '{}')
                        ),
                        f.assign(e, f.nonComputedMember('s', t.name));
                    });
                  },
                  e && f.lazyAssign(e, f.nonComputedMember('l', t.name))
                ),
                r(e);
              break;
            case wr.MemberExpression:
              (a = (n && (n.context = this.nextId())) || this.nextId()),
                (e = e || this.nextId()),
                f.recurse(
                  t.object,
                  a,
                  void 0,
                  function() {
                    f.if_(
                      f.notNull(a),
                      function() {
                        t.computed
                          ? ((s = f.nextId()),
                            f.recurse(t.property, s),
                            f.getStringValue(s),
                            i &&
                              1 !== i &&
                              f.if_(
                                f.not(f.computedMember(a, s)),
                                f.lazyAssign(f.computedMember(a, s), '{}')
                              ),
                            (c = f.computedMember(a, s)),
                            f.assign(e, c),
                            n && ((n.computed = !0), (n.name = s)))
                          : (i &&
                              1 !== i &&
                              f.if_(
                                f.isNull(f.nonComputedMember(a, t.property.name)),
                                f.lazyAssign(f.nonComputedMember(a, t.property.name), '{}')
                              ),
                            (c = f.nonComputedMember(a, t.property.name)),
                            f.assign(e, c),
                            n && ((n.computed = !1), (n.name = t.property.name)));
                      },
                      function() {
                        f.assign(e, 'undefined');
                      }
                    ),
                      r(e);
                  },
                  !!i
                );
              break;
            case wr.CallExpression:
              (e = e || this.nextId()),
                t.filter
                  ? ((s = f.filter(t.callee.name)),
                    (u = []),
                    x(t.arguments, function(t) {
                      var e = f.nextId();
                      f.recurse(t, e), u.push(e);
                    }),
                    (c = s + '(' + u.join(',') + ')'),
                    f.assign(e, c),
                    r(e))
                  : ((s = f.nextId()),
                    (a = {}),
                    (u = []),
                    f.recurse(t.callee, s, a, function() {
                      f.if_(
                        f.notNull(s),
                        function() {
                          x(t.arguments, function(e) {
                            f.recurse(e, t.constant ? void 0 : f.nextId(), void 0, function(t) {
                              u.push(t);
                            });
                          }),
                            (c = a.name
                              ? f.member(a.context, a.name, a.computed) + '(' + u.join(',') + ')'
                              : s + '(' + u.join(',') + ')'),
                            f.assign(e, c);
                        },
                        function() {
                          f.assign(e, 'undefined');
                        }
                      ),
                        r(e);
                    }));
              break;
            case wr.AssignmentExpression:
              (s = this.nextId()),
                (a = {}),
                this.recurse(
                  t.left,
                  void 0,
                  a,
                  function() {
                    f.if_(f.notNull(a.context), function() {
                      f.recurse(t.right, s),
                        (c = f.member(a.context, a.name, a.computed) + t.operator + s),
                        f.assign(e, c),
                        r(e || c);
                    });
                  },
                  1
                );
              break;
            case wr.ArrayExpression:
              (u = []),
                x(t.elements, function(e) {
                  f.recurse(e, t.constant ? void 0 : f.nextId(), void 0, function(t) {
                    u.push(t);
                  });
                }),
                (c = '[' + u.join(',') + ']'),
                this.assign(e, c),
                r(e || c);
              break;
            case wr.ObjectExpression:
              (u = []),
                (l = !1),
                x(t.properties, function(t) {
                  t.computed && (l = !0);
                }),
                l
                  ? ((e = e || this.nextId()),
                    this.assign(e, '{}'),
                    x(t.properties, function(t) {
                      t.computed
                        ? ((a = f.nextId()), f.recurse(t.key, a))
                        : (a = t.key.type === wr.Identifier ? t.key.name : '' + t.key.value),
                        (s = f.nextId()),
                        f.recurse(t.value, s),
                        f.assign(f.member(e, a, t.computed), s);
                    }))
                  : (x(t.properties, function(e) {
                      f.recurse(e.value, t.constant ? void 0 : f.nextId(), void 0, function(t) {
                        u.push(
                          f.escape(e.key.type === wr.Identifier ? e.key.name : '' + e.key.value) +
                            ':' +
                            t
                        );
                      });
                    }),
                    (c = '{' + u.join(',') + '}'),
                    this.assign(e, c)),
                r(e || c);
              break;
            case wr.ThisExpression:
              this.assign(e, 's'), r(e || 's');
              break;
            case wr.LocalsExpression:
              this.assign(e, 'l'), r(e || 'l');
              break;
            case wr.NGValueParameter:
              this.assign(e, 'v'), r(e || 'v');
          }
        },
        getHasOwnProperty: function(t, e) {
          var n = t + '.' + e,
            r = this.current().own;
          return (
            r.hasOwnProperty(n) ||
              (r[n] = this.nextId(!1, t + '&&(' + this.escape(e) + ' in ' + t + ')')),
            r[n]
          );
        },
        assign: function(t, e) {
          if (t) return this.current().body.push(t, '=', e, ';'), t;
        },
        filter: function(t) {
          return (
            this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)),
            this.state.filters[t]
          );
        },
        ifDefined: function(t, e) {
          return 'ifDefined(' + t + ',' + this.escape(e) + ')';
        },
        plus: function(t, e) {
          return 'plus(' + t + ',' + e + ')';
        },
        return_: function(t) {
          this.current().body.push('return ', t, ';');
        },
        if_: function(t, e, n) {
          if (!0 === t) e();
          else {
            var r = this.current().body;
            r.push('if(', t, '){'), e(), r.push('}'), n && (r.push('else{'), n(), r.push('}'));
          }
        },
        not: function(t) {
          return '!(' + t + ')';
        },
        isNull: function(t) {
          return t + '==null';
        },
        notNull: function(t) {
          return t + '!=null';
        },
        nonComputedMember: function(t, e) {
          return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e)
            ? t + '.' + e
            : t + '["' + e.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]';
        },
        computedMember: function(t, e) {
          return t + '[' + e + ']';
        },
        member: function(t, e, n) {
          return n ? this.computedMember(t, e) : this.nonComputedMember(t, e);
        },
        getStringValue: function(t) {
          this.assign(t, 'getStringValue(' + t + ')');
        },
        lazyRecurse: function(t, e, n, r, i, o) {
          var a = this;
          return function() {
            a.recurse(t, e, n, r, i, o);
          };
        },
        lazyAssign: function(t, e) {
          var n = this;
          return function() {
            n.assign(t, e);
          };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(t) {
          return '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function(t) {
          if (q(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
          if (L(t)) return t.toString();
          if (!0 === t) return 'true';
          if (!1 === t) return 'false';
          if (null === t) return 'null';
          if (void 0 === t) return 'undefined';
          throw vr('esc', 'IMPOSSIBLE');
        },
        nextId: function(t, e) {
          var n = 'v' + this.state.nextId++;
          return t || this.current().vars.push(n + (e ? '=' + e : '')), n;
        },
        current: function() {
          return this.state[this.state.computing];
        }
      }),
        (Ar.prototype = {
          compile: function(t) {
            var e,
              n,
              r = this;
            Cr(t, r.$filter), (e = kr(t)) && (n = this.recurse(e));
            var i,
              o = Or(t.body);
            o &&
              ((i = []),
              x(o, function(t, e) {
                var n = r.recurse(t);
                (n.isPure = t.isPure), (t.input = n), i.push(n), (t.watchId = e);
              }));
            var a = [];
            x(t.body, function(t) {
              a.push(r.recurse(t.expression));
            });
            var s =
              0 === t.body.length
                ? V
                : 1 === t.body.length
                  ? a[0]
                  : function(t, e) {
                      var n;
                      return (
                        x(a, function(r) {
                          n = r(t, e);
                        }),
                        n
                      );
                    };
            return (
              n &&
                (s.assign = function(t, e, r) {
                  return n(t, r, e);
                }),
              i && (s.inputs = i),
              s
            );
          },
          recurse: function(t, e, n) {
            var r,
              i,
              o,
              a = this;
            if (t.input) return this.inputs(t.input, t.watchId);
            switch (t.type) {
              case wr.Literal:
                return this.value(t.value, e);
              case wr.UnaryExpression:
                return (i = this.recurse(t.argument)), this['unary' + t.operator](i, e);
              case wr.BinaryExpression:
              case wr.LogicalExpression:
                return (
                  (r = this.recurse(t.left)),
                  (i = this.recurse(t.right)),
                  this['binary' + t.operator](r, i, e)
                );
              case wr.ConditionalExpression:
                return this['ternary?:'](
                  this.recurse(t.test),
                  this.recurse(t.alternate),
                  this.recurse(t.consequent),
                  e
                );
              case wr.Identifier:
                return a.identifier(t.name, e, n);
              case wr.MemberExpression:
                return (
                  (r = this.recurse(t.object, !1, !!n)),
                  t.computed || (i = t.property.name),
                  t.computed && (i = this.recurse(t.property)),
                  t.computed ? this.computedMember(r, i, e, n) : this.nonComputedMember(r, i, e, n)
                );
              case wr.CallExpression:
                return (
                  (o = []),
                  x(t.arguments, function(t) {
                    o.push(a.recurse(t));
                  }),
                  t.filter && (i = this.$filter(t.callee.name)),
                  t.filter || (i = this.recurse(t.callee, !0)),
                  t.filter
                    ? function(t, n, r, a) {
                        for (var s = [], u = 0; u < o.length; ++u) s.push(o[u](t, n, r, a));
                        var c = i.apply(void 0, s, a);
                        return e ? { context: void 0, name: void 0, value: c } : c;
                      }
                    : function(t, n, r, a) {
                        var s,
                          u = i(t, n, r, a);
                        if (null != u.value) {
                          for (var c = [], l = 0; l < o.length; ++l) c.push(o[l](t, n, r, a));
                          s = u.value.apply(u.context, c);
                        }
                        return e ? { value: s } : s;
                      }
                );
              case wr.AssignmentExpression:
                return (
                  (r = this.recurse(t.left, !0, 1)),
                  (i = this.recurse(t.right)),
                  function(t, n, o, a) {
                    var s = r(t, n, o, a),
                      u = i(t, n, o, a);
                    return (s.context[s.name] = u), e ? { value: u } : u;
                  }
                );
              case wr.ArrayExpression:
                return (
                  (o = []),
                  x(t.elements, function(t) {
                    o.push(a.recurse(t));
                  }),
                  function(t, n, r, i) {
                    for (var a = [], s = 0; s < o.length; ++s) a.push(o[s](t, n, r, i));
                    return e ? { value: a } : a;
                  }
                );
              case wr.ObjectExpression:
                return (
                  (o = []),
                  x(t.properties, function(t) {
                    t.computed
                      ? o.push({ key: a.recurse(t.key), computed: !0, value: a.recurse(t.value) })
                      : o.push({
                          key: t.key.type === wr.Identifier ? t.key.name : '' + t.key.value,
                          computed: !1,
                          value: a.recurse(t.value)
                        });
                  }),
                  function(t, n, r, i) {
                    for (var a = {}, s = 0; s < o.length; ++s)
                      o[s].computed
                        ? (a[o[s].key(t, n, r, i)] = o[s].value(t, n, r, i))
                        : (a[o[s].key] = o[s].value(t, n, r, i));
                    return e ? { value: a } : a;
                  }
                );
              case wr.ThisExpression:
                return function(t) {
                  return e ? { value: t } : t;
                };
              case wr.LocalsExpression:
                return function(t, n) {
                  return e ? { value: n } : n;
                };
              case wr.NGValueParameter:
                return function(t, n, r) {
                  return e ? { value: r } : r;
                };
            }
          },
          'unary+': function(t, e) {
            return function(n, r, i, o) {
              var a = t(n, r, i, o);
              return (a = U(a) ? +a : 0), e ? { value: a } : a;
            };
          },
          'unary-': function(t, e) {
            return function(n, r, i, o) {
              var a = t(n, r, i, o);
              return (a = U(a) ? -a : -0), e ? { value: a } : a;
            };
          },
          'unary!': function(t, e) {
            return function(n, r, i, o) {
              var a = !t(n, r, i, o);
              return e ? { value: a } : a;
            };
          },
          'binary+': function(t, e, n) {
            return function(r, i, o, a) {
              var s = xr(t(r, i, o, a), e(r, i, o, a));
              return n ? { value: s } : s;
            };
          },
          'binary-': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a),
                u = e(r, i, o, a),
                c = (U(s) ? s : 0) - (U(u) ? u : 0);
              return n ? { value: c } : c;
            };
          },
          'binary*': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) * e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary/': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) / e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary%': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) % e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary===': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) === e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary!==': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) !== e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary==': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) == e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary!=': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) != e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary<': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) < e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary>': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) > e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary<=': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) <= e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary>=': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) >= e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary&&': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) && e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'binary||': function(t, e, n) {
            return function(r, i, o, a) {
              var s = t(r, i, o, a) || e(r, i, o, a);
              return n ? { value: s } : s;
            };
          },
          'ternary?:': function(t, e, n, r) {
            return function(i, o, a, s) {
              var u = t(i, o, a, s) ? e(i, o, a, s) : n(i, o, a, s);
              return r ? { value: u } : u;
            };
          },
          value: function(t, e) {
            return function() {
              return e ? { context: void 0, name: void 0, value: t } : t;
            };
          },
          identifier: function(t, e, n) {
            return function(r, i, o, a) {
              var s = i && t in i ? i : r;
              n && 1 !== n && s && null == s[t] && (s[t] = {});
              var u = s ? s[t] : void 0;
              return e ? { context: s, name: t, value: u } : u;
            };
          },
          computedMember: function(t, e, n, r) {
            return function(i, o, a, s) {
              var u,
                c,
                l = t(i, o, a, s);
              return (
                null != l &&
                  ((u = mr((u = e(i, o, a, s)))),
                  r && 1 !== r && l && !l[u] && (l[u] = {}),
                  (c = l[u])),
                n ? { context: l, name: u, value: c } : c
              );
            };
          },
          nonComputedMember: function(t, e, n, r) {
            return function(i, o, a, s) {
              var u = t(i, o, a, s);
              r && 1 !== r && u && null == u[e] && (u[e] = {});
              var c = null != u ? u[e] : void 0;
              return n ? { context: u, name: e, value: c } : c;
            };
          },
          inputs: function(t, e) {
            return function(n, r, i, o) {
              return o ? o[e] : t(n, r, i);
            };
          }
        }),
        (Tr.prototype = {
          constructor: Tr,
          parse: function(t) {
            var e = this.getAst(t),
              n = this.astCompiler.compile(e.ast);
            return (
              (n.literal = (function(t) {
                return (
                  0 === t.body.length ||
                  (1 === t.body.length &&
                    (t.body[0].expression.type === wr.Literal ||
                      t.body[0].expression.type === wr.ArrayExpression ||
                      t.body[0].expression.type === wr.ObjectExpression))
                );
              })(e.ast)),
              (n.constant = (function(t) {
                return t.constant;
              })(e.ast)),
              (n.oneTime = e.oneTime),
              n
            );
          },
          getAst: function(t) {
            var e = !1;
            return (
              ':' === (t = t.trim()).charAt(0) &&
                ':' === t.charAt(1) &&
                ((e = !0), (t = t.substring(2))),
              { ast: this.ast.ast(t), oneTime: e }
            );
          }
        });
      var Br = i('$sce'),
        zr = { HTML: 'html', CSS: 'css', URL: 'url', RESOURCE_URL: 'resourceUrl', JS: 'js' },
        Wr = /_([a-z])/g;
      function Gr(t) {
        return t.replace(Wr, re);
      }
      function Jr(t) {
        var e = [];
        return (
          U(t) &&
            x(t, function(t) {
              e.push(
                (function(t) {
                  if ('self' === t) return t;
                  if (q(t)) {
                    if (t.indexOf('***') > -1)
                      throw Br('iwcard', 'Illegal sequence *** in string matcher.  String: {0}', t);
                    return (
                      (t = et(t)
                        .replace(/\\\*\\\*/g, '.*')
                        .replace(/\\\*/g, '[^:/.?&;]*')),
                      new RegExp('^' + t + '$')
                    );
                  }
                  if (J(t)) return new RegExp('^' + t.source + '$');
                  throw Br(
                    'imatcher',
                    'Matchers may only be "self", string patterns or RegExp objects'
                  );
                })(t)
              );
            }),
          e
        );
      }
      function Kr() {
        this.SCE_CONTEXTS = zr;
        var t = ['self'],
          e = [];
        (this.resourceUrlWhitelist = function(e) {
          return arguments.length && (t = Jr(e)), t;
        }),
          (this.resourceUrlBlacklist = function(t) {
            return arguments.length && (e = Jr(t)), e;
          }),
          (this.$get = [
            '$injector',
            function(n) {
              var r = function(t) {
                throw Br('unsafe', 'Attempting to use an unsafe value in a safe context.');
              };
              function i(t, e) {
                return 'self' === t ? oi(e, ri) : !!t.exec(e.href);
              }
              function o(t) {
                var e = function(t) {
                  this.$$unwrapTrustedValue = function() {
                    return t;
                  };
                };
                return (
                  t && (e.prototype = new t()),
                  (e.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                  }),
                  (e.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                  }),
                  e
                );
              }
              n.has('$sanitize') && (r = n.get('$sanitize'));
              var a = o(),
                s = {};
              return (
                (s[zr.HTML] = o(a)),
                (s[zr.CSS] = o(a)),
                (s[zr.URL] = o(a)),
                (s[zr.JS] = o(a)),
                (s[zr.RESOURCE_URL] = o(s[zr.URL])),
                {
                  trustAs: function(t, e) {
                    var n = s.hasOwnProperty(t) ? s[t] : null;
                    if (!n)
                      throw Br(
                        'icontext',
                        'Attempted to trust a value in invalid context. Context: {0}; Value: {1}',
                        t,
                        e
                      );
                    if (null === e || D(e) || '' === e) return e;
                    if ('string' != typeof e)
                      throw Br(
                        'itype',
                        'Attempted to trust a non-string value in a content requiring a string: Context: {0}',
                        t
                      );
                    return new n(e);
                  },
                  getTrusted: function(n, o) {
                    if (null === o || D(o) || '' === o) return o;
                    var a = s.hasOwnProperty(n) ? s[n] : null;
                    if (a && o instanceof a) return o.$$unwrapTrustedValue();
                    if (n === zr.RESOURCE_URL) {
                      if (
                        (function(n) {
                          var r,
                            o,
                            a = ii(n.toString()),
                            s = !1;
                          for (r = 0, o = t.length; r < o; r++)
                            if (i(t[r], a)) {
                              s = !0;
                              break;
                            }
                          if (s)
                            for (r = 0, o = e.length; r < o; r++)
                              if (i(e[r], a)) {
                                s = !1;
                                break;
                              }
                          return s;
                        })(o)
                      )
                        return o;
                      throw Br(
                        'insecurl',
                        'Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}',
                        o.toString()
                      );
                    }
                    if (n === zr.HTML) return r(o);
                    throw Br('unsafe', 'Attempting to use an unsafe value in a safe context.');
                  },
                  valueOf: function(t) {
                    return t instanceof a ? t.$$unwrapTrustedValue() : t;
                  }
                }
              );
            }
          ]);
      }
      function Yr() {
        var t = !0;
        (this.enabled = function(e) {
          return arguments.length && (t = !!e), t;
        }),
          (this.$get = [
            '$parse',
            '$sceDelegate',
            function(e, n) {
              if (t && l < 8)
                throw Br(
                  'iequirks',
                  'Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.'
                );
              var r = Jt(zr);
              (r.isEnabled = function() {
                return t;
              }),
                (r.trustAs = n.trustAs),
                (r.getTrusted = n.getTrusted),
                (r.valueOf = n.valueOf),
                t ||
                  ((r.trustAs = r.getTrusted = function(t, e) {
                    return e;
                  }),
                  (r.valueOf = M)),
                (r.parseAs = function(t, n) {
                  var i = e(n);
                  return i.literal && i.constant
                    ? i
                    : e(n, function(e) {
                        return r.getTrusted(t, e);
                      });
                });
              var i = r.parseAs,
                o = r.getTrusted,
                a = r.trustAs;
              return (
                x(zr, function(t, e) {
                  var n = u(e);
                  (r[Gr('parse_as_' + n)] = function(e) {
                    return i(t, e);
                  }),
                    (r[Gr('get_trusted_' + n)] = function(e) {
                      return o(t, e);
                    }),
                    (r[Gr('trust_as_' + n)] = function(e) {
                      return a(t, e);
                    });
                }),
                r
              );
            }
          ]);
      }
      function Zr() {
        this.$get = [
          '$window',
          '$document',
          function(t, e) {
            var n = {},
              r =
                !(
                  !(t.nw && t.nw.process) &&
                  t.chrome &&
                  ((t.chrome.app && t.chrome.app.runtime) ||
                    (!t.chrome.app && t.chrome.runtime && t.chrome.runtime.id))
                ) &&
                t.history &&
                t.history.pushState,
              i = A((/android (\d+)/.exec(u((t.navigator || {}).userAgent)) || [])[1]),
              o = /Boxee/i.test((t.navigator || {}).userAgent),
              a = e[0] || {},
              s = a.body && a.body.style,
              c = !1,
              f = !1;
            return (
              s &&
                ((c = !!('transition' in s || 'webkitTransition' in s)),
                (f = !!('animation' in s || 'webkitAnimation' in s))),
              {
                history: !(!r || i < 4 || o),
                hasEvent: function(t) {
                  if ('input' === t && l) return !1;
                  if (D(n[t])) {
                    var e = a.createElement('div');
                    n[t] = 'on' + t in e;
                  }
                  return n[t];
                },
                csp: ct(),
                transitions: c,
                animations: f,
                android: i
              }
            );
          }
        ];
      }
      var Qr = i('$compile');
      function Xr() {
        var t;
        (this.httpOptions = function(e) {
          return e ? ((t = e), this) : t;
        }),
          (this.$get = [
            '$exceptionHandler',
            '$templateCache',
            '$http',
            '$q',
            '$sce',
            function(e, n, r, i, o) {
              function a(s, u) {
                a.totalPendingRequests++,
                  (q(s) && !D(n.get(s))) || (s = o.getTrustedResourceUrl(s));
                var c = r.defaults && r.defaults.transformResponse;
                return (
                  z(c)
                    ? (c = c.filter(function(t) {
                        return t !== Dn;
                      }))
                    : c === Dn && (c = null),
                  r
                    .get(s, k({ cache: n, transformResponse: c }, t))
                    .finally(function() {
                      a.totalPendingRequests--;
                    })
                    .then(
                      function(t) {
                        return n.put(s, t.data), t.data;
                      },
                      function(t) {
                        u ||
                          ((t = Qr(
                            'tpload',
                            'Failed to load template: {0} (HTTP status: {1} {2})',
                            s,
                            t.status,
                            t.statusText
                          )),
                          e(t));
                        return i.reject(t);
                      }
                    )
                );
              }
              return (a.totalPendingRequests = 0), a;
            }
          ]);
      }
      function ti() {
        this.$get = [
          '$rootScope',
          '$browser',
          '$location',
          function(t, e, n) {
            var r = {
              findBindings: function(t, e, n) {
                var r = [];
                return (
                  x(t.getElementsByClassName('ng-binding'), function(t) {
                    var i = b.element(t).data('$binding');
                    i &&
                      x(i, function(i) {
                        n
                          ? new RegExp('(^|\\s)' + et(e) + '(\\s|\\||$)').test(i) && r.push(t)
                          : -1 !== i.indexOf(e) && r.push(t);
                      });
                  }),
                  r
                );
              },
              findModels: function(t, e, n) {
                for (var r = ['ng-', 'data-ng-', 'ng\\:'], i = 0; i < r.length; ++i) {
                  var o = '[' + r[i] + 'model' + (n ? '=' : '*=') + '"' + e + '"]',
                    a = t.querySelectorAll(o);
                  if (a.length) return a;
                }
              },
              getLocation: function() {
                return n.url();
              },
              setLocation: function(e) {
                e !== n.url() && (n.url(e), t.$digest());
              },
              whenStable: function(t) {
                e.notifyWhenNoOutstandingRequests(t);
              }
            };
            return r;
          }
        ];
      }
      function ei() {
        this.$get = [
          '$rootScope',
          '$browser',
          '$q',
          '$$q',
          '$exceptionHandler',
          function(t, e, n, r, i) {
            var o = {};
            function a(a, s, u) {
              G(a) || ((u = s), (s = a), (a = V));
              var c,
                l = ht(arguments, 3),
                f = U(u) && !u,
                h = (f ? r : n).defer(),
                p = h.promise;
              return (
                (c = e.defer(function() {
                  try {
                    h.resolve(a.apply(null, l));
                  } catch (t) {
                    h.reject(t), i(t);
                  } finally {
                    delete o[p.$$timeoutId];
                  }
                  f || t.$apply();
                }, s)),
                (p.$$timeoutId = c),
                (o[c] = h),
                p
              );
            }
            return (
              (a.cancel = function(t) {
                return (
                  !!(t && t.$$timeoutId in o) &&
                  (Hr(o[t.$$timeoutId].promise),
                  o[t.$$timeoutId].reject('canceled'),
                  delete o[t.$$timeoutId],
                  e.defer.cancel(t.$$timeoutId))
                );
              }),
              a
            );
          }
        ];
      }
      var ni = t.document.createElement('a'),
        ri = ii(t.location.href);
      function ii(t) {
        if (!q(t)) return t;
        var e = t;
        return (
          l && (ni.setAttribute('href', e), (e = ni.href)),
          ni.setAttribute('href', e),
          {
            href: ni.href,
            protocol: ni.protocol ? ni.protocol.replace(/:$/, '') : '',
            host: ni.host,
            search: ni.search ? ni.search.replace(/^\?/, '') : '',
            hash: ni.hash ? ni.hash.replace(/^#/, '') : '',
            hostname: ni.hostname,
            port: ni.port,
            pathname: '/' === ni.pathname.charAt(0) ? ni.pathname : '/' + ni.pathname
          }
        );
      }
      function oi(t, e) {
        return (t = ii(t)), (e = ii(e)), t.protocol === e.protocol && t.host === e.host;
      }
      function ai() {
        this.$get = I(t);
      }
      function si(t) {
        var e = t[0] || {},
          n = {},
          r = '';
        function i(t) {
          try {
            return decodeURIComponent(t);
          } catch (e) {
            return t;
          }
        }
        return function() {
          var t,
            o,
            a,
            s,
            u,
            c = (function(t) {
              try {
                return t.cookie || '';
              } catch (t) {
                return '';
              }
            })(e);
          if (c !== r)
            for (t = (r = c).split('; '), n = {}, a = 0; a < t.length; a++)
              (s = (o = t[a]).indexOf('=')) > 0 &&
                ((u = i(o.substring(0, s))), D(n[u]) && (n[u] = i(o.substring(s + 1))));
          return n;
        };
      }
      function ui() {
        this.$get = si;
      }
      function ci(t) {
        var e = 'Filter';
        function n(r, i) {
          if (H(r)) {
            var o = {};
            return (
              x(r, function(t, e) {
                o[e] = n(e, t);
              }),
              o
            );
          }
          return t.factory(r + e, i);
        }
        (this.register = n),
          (this.$get = [
            '$injector',
            function(t) {
              return function(n) {
                return t.get(n + e);
              };
            }
          ]),
          n('currency', $i),
          n('date', Ri),
          n('filter', li),
          n('json', ki),
          n('limitTo', Ti),
          n('lowercase', Pi),
          n('number', mi),
          n('orderBy', Vi),
          n('uppercase', Ai);
      }
      function li() {
        return function(t, e, n, r) {
          if (!S(t)) {
            if (null == t) return t;
            throw i('filter')('notarray', 'Expected array but received: {0}', t);
          }
          var o, a;
          switch (((r = r || '$'), hi(e))) {
            case 'function':
              o = e;
              break;
            case 'boolean':
            case 'null':
            case 'number':
            case 'string':
              a = !0;
            case 'object':
              o = (function(t, e, n, r) {
                var i = H(t) && n in t;
                !0 === e
                  ? (e = ut)
                  : G(e) ||
                    (e = function(t, e) {
                      return (
                        !D(t) &&
                        (null === t || null === e
                          ? t === e
                          : !(H(e) || (H(t) && !N(t))) &&
                            ((t = u('' + t)), (e = u('' + e)), -1 !== t.indexOf(e)))
                      );
                    });
                return function(o) {
                  return i && !H(o) ? fi(o, t[n], e, n, !1) : fi(o, t, e, n, r);
                };
              })(e, n, r, a);
              break;
            default:
              return t;
          }
          return Array.prototype.filter.call(t, o);
        };
      }
      function fi(t, e, n, r, i, o) {
        var a = hi(t),
          s = hi(e);
        if ('string' === s && '!' === e.charAt(0)) return !fi(t, e.substring(1), n, r, i);
        if (z(t))
          return t.some(function(t) {
            return fi(t, e, n, r, i);
          });
        switch (a) {
          case 'object':
            var u;
            if (i) {
              for (u in t) if (u.charAt && '$' !== u.charAt(0) && fi(t[u], e, n, r, !0)) return !0;
              return !o && fi(t, e, n, r, !1);
            }
            if ('object' === s) {
              for (u in e) {
                var c = e[u];
                if (!G(c) && !D(c)) {
                  var l = u === r;
                  if (!fi(l ? t : t[u], c, n, r, l, l)) return !1;
                }
              }
              return !0;
            }
            return n(t, e);
          case 'function':
            return !1;
          default:
            return n(t, e);
        }
      }
      function hi(t) {
        return null === t ? 'null' : typeof t;
      }
      (si.$inject = ['$document']), (ci.$inject = ['$provide']);
      var pi = 22,
        di = '.',
        vi = '0';
      function $i(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n, r) {
          D(n) && (n = e.CURRENCY_SYM), D(r) && (r = e.PATTERNS[1].maxFrac);
          var i = n ? /\u00A4/g : /\s*\u00A4\s*/g;
          return null == t ? t : gi(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(i, n);
        };
      }
      function mi(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n) {
          return null == t ? t : gi(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n);
        };
      }
      function gi(t, e, n, r, i) {
        if ((!q(t) && !L(t)) || isNaN(t)) return '';
        var o,
          a = !isFinite(t),
          s = !1,
          u = Math.abs(t) + '',
          c = '';
        if (a) c = '∞';
        else {
          (function(t, e, n, r) {
            var i = t.d,
              o = i.length - t.i,
              a = (e = D(e) ? Math.min(Math.max(n, o), r) : +e) + t.i,
              s = i[a];
            if (a > 0) {
              i.splice(Math.max(t.i, a));
              for (var u = a; u < i.length; u++) i[u] = 0;
            } else {
              (o = Math.max(0, o)), (t.i = 1), (i.length = Math.max(1, (a = e + 1))), (i[0] = 0);
              for (var c = 1; c < a; c++) i[c] = 0;
            }
            if (s >= 5)
              if (a - 1 < 0) {
                for (var l = 0; l > a; l--) i.unshift(0), t.i++;
                i.unshift(1), t.i++;
              } else i[a - 1]++;
            for (; o < Math.max(0, e); o++) i.push(0);
            var f = i.reduceRight(function(t, e, n, r) {
              return (e += t), (r[n] = e % 10), Math.floor(e / 10);
            }, 0);
            f && (i.unshift(f), t.i++);
          })(
            (o = (function(t) {
              var e,
                n,
                r,
                i,
                o,
                a = 0;
              for (
                (n = t.indexOf(di)) > -1 && (t = t.replace(di, '')),
                  (r = t.search(/e/i)) > 0
                    ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
                    : n < 0 && (n = t.length),
                  r = 0;
                t.charAt(r) === vi;
                r++
              );
              if (r === (o = t.length)) (e = [0]), (n = 1);
              else {
                for (o--; t.charAt(o) === vi; ) o--;
                for (n -= r, e = [], i = 0; r <= o; r++, i++) e[i] = +t.charAt(r);
              }
              return (
                n > pi && ((e = e.splice(0, pi - 1)), (a = n - 1), (n = 1)), { d: e, e: a, i: n }
              );
            })(u)),
            i,
            e.minFrac,
            e.maxFrac
          );
          var l = o.d,
            f = o.i,
            h = o.e,
            p = [];
          for (
            s = l.reduce(function(t, e) {
              return t && !e;
            }, !0);
            f < 0;

          )
            l.unshift(0), f++;
          f > 0 ? (p = l.splice(f, l.length)) : ((p = l), (l = [0]));
          var d = [];
          for (
            l.length >= e.lgSize && d.unshift(l.splice(-e.lgSize, l.length).join(''));
            l.length > e.gSize;

          )
            d.unshift(l.splice(-e.gSize, l.length).join(''));
          l.length && d.unshift(l.join('')),
            (c = d.join(n)),
            p.length && (c += r + p.join('')),
            h && (c += 'e+' + h);
        }
        return t < 0 && !s ? e.negPre + c + e.negSuf : e.posPre + c + e.posSuf;
      }
      function yi(t, e, n, r) {
        var i = '';
        for (
          (t < 0 || (r && t <= 0)) && (r ? (t = 1 - t) : ((t = -t), (i = '-'))), t = '' + t;
          t.length < e;

        )
          t = vi + t;
        return n && (t = t.substr(t.length - e)), i + t;
      }
      function bi(t, e, n, r, i) {
        return (
          (n = n || 0),
          function(o) {
            var a = o['get' + t]();
            return (n > 0 || a > -n) && (a += n), 0 === a && -12 === n && (a = 12), yi(a, e, r, i);
          }
        );
      }
      function wi(t, e, n) {
        return function(r, i) {
          var o = r['get' + t]();
          return i[c((n ? 'STANDALONE' : '') + (e ? 'SHORT' : '') + t)][o];
        };
      }
      function Si(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (e <= 4 ? 5 : 12) - e);
      }
      function xi(t) {
        return function(e) {
          var n,
            r = Si(e.getFullYear()),
            i =
              +((n = e), new Date(n.getFullYear(), n.getMonth(), n.getDate() + (4 - n.getDay()))) -
              +r;
          return yi(1 + Math.round(i / 6048e5), t);
        };
      }
      function _i(t, e) {
        return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1];
      }
      ($i.$inject = ['$locale']), (mi.$inject = ['$locale']);
      var Ei = {
          yyyy: bi('FullYear', 4, 0, !1, !0),
          yy: bi('FullYear', 2, 0, !0, !0),
          y: bi('FullYear', 1, 0, !1, !0),
          MMMM: wi('Month'),
          MMM: wi('Month', !0),
          MM: bi('Month', 2, 1),
          M: bi('Month', 1, 1),
          LLLL: wi('Month', !1, !0),
          dd: bi('Date', 2),
          d: bi('Date', 1),
          HH: bi('Hours', 2),
          H: bi('Hours', 1),
          hh: bi('Hours', 2, -12),
          h: bi('Hours', 1, -12),
          mm: bi('Minutes', 2),
          m: bi('Minutes', 1),
          ss: bi('Seconds', 2),
          s: bi('Seconds', 1),
          sss: bi('Milliseconds', 3),
          EEEE: wi('Day'),
          EEE: wi('Day', !0),
          a: function(t, e) {
            return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1];
          },
          Z: function(t, e, n) {
            var r = -1 * n,
              i = r >= 0 ? '+' : '';
            return (i += yi(Math[r > 0 ? 'floor' : 'ceil'](r / 60), 2) + yi(Math.abs(r % 60), 2));
          },
          ww: xi(2),
          w: xi(1),
          G: _i,
          GG: _i,
          GGG: _i,
          GGGG: function(t, e) {
            return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1];
          }
        },
        Ci = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
        Oi = /^-?\d+$/;
      function Ri(t) {
        var e = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r, i) {
          var o,
            a,
            s = '',
            u = [];
          if (
            ((r = r || 'mediumDate'),
            (r = t.DATETIME_FORMATS[r] || r),
            q(n) &&
              (n = Oi.test(n)
                ? A(n)
                : (function(t) {
                    var n;
                    if ((n = t.match(e))) {
                      var r = new Date(0),
                        i = 0,
                        o = 0,
                        a = n[8] ? r.setUTCFullYear : r.setFullYear,
                        s = n[8] ? r.setUTCHours : r.setHours;
                      n[9] && ((i = A(n[9] + n[10])), (o = A(n[9] + n[11]))),
                        a.call(r, A(n[1]), A(n[2]) - 1, A(n[3]));
                      var u = A(n[4] || 0) - i,
                        c = A(n[5] || 0) - o,
                        l = A(n[6] || 0),
                        f = Math.round(1e3 * parseFloat('0.' + (n[7] || 0)));
                      return s.call(r, u, c, l, f), r;
                    }
                    return t;
                  })(n)),
            L(n) && (n = new Date(n)),
            !B(n) || !isFinite(n.getTime()))
          )
            return n;
          for (; r; ) (a = Ci.exec(r)) ? (r = (u = ft(u, a, 1)).pop()) : (u.push(r), (r = null));
          var c = n.getTimezoneOffset();
          return (
            i && ((c = gt(i, c)), (n = bt(n, i, !0))),
            x(u, function(e) {
              (o = Ei[e]),
                (s += o
                  ? o(n, t.DATETIME_FORMATS, c)
                  : "''" === e
                    ? "'"
                    : e.replace(/(^'|'$)/g, '').replace(/''/g, "'"));
            }),
            s
          );
        };
      }
      function ki() {
        return function(t, e) {
          return D(e) && (e = 2), vt(t, e);
        };
      }
      Ri.$inject = ['$locale'];
      var Pi = I(u),
        Ai = I(c);
      function Ti() {
        return function(t, e, n) {
          return (
            (e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : A(e)),
            T(e)
              ? t
              : (L(t) && (t = t.toString()),
                S(t)
                  ? ((n = (n = !n || isNaN(n) ? 0 : A(n)) < 0 ? Math.max(0, t.length + n) : n),
                    e >= 0
                      ? ji(t, n, n + e)
                      : 0 === n
                        ? ji(t, e, t.length)
                        : ji(t, Math.max(0, n + e), n))
                  : t)
          );
        };
      }
      function ji(t, e, n) {
        return q(t) ? t.slice(e, n) : d.call(t, e, n);
      }
      function Vi(t) {
        return function(r, o, a, s) {
          if (null == r) return r;
          if (!S(r)) throw i('orderBy')('notarray', 'Expected array but received: {0}', r);
          z(o) || (o = [o]), 0 === o.length && (o = ['+']);
          var u = o.map(function(e) {
              var n = 1,
                r = M;
              if (G(e)) r = e;
              else if (
                q(e) &&
                (('+' !== e.charAt(0) && '-' !== e.charAt(0)) ||
                  ((n = '-' === e.charAt(0) ? -1 : 1), (e = e.substring(1))),
                '' !== e && (r = t(e)).constant)
              ) {
                var i = r();
                r = function(t) {
                  return t[i];
                };
              }
              return { get: r, descending: n };
            }),
            c = a ? -1 : 1,
            l = G(s) ? s : n,
            f = Array.prototype.map.call(r, function(t, n) {
              return {
                value: t,
                tieBreaker: { value: n, type: 'number', index: n },
                predicateValues: u.map(function(r) {
                  return (function(t, n) {
                    var r = typeof t;
                    null === t
                      ? ((r = 'string'), (t = 'null'))
                      : 'object' === r &&
                        (t = (function(t) {
                          if (G(t.valueOf) && e((t = t.valueOf()))) return t;
                          if (N(t) && e((t = t.toString()))) return t;
                          return t;
                        })(t));
                    return { value: t, type: r, index: n };
                  })(r.get(t), n);
                })
              };
            });
          return (
            f.sort(function(t, e) {
              for (var r = 0, i = u.length; r < i; r++) {
                var o = l(t.predicateValues[r], e.predicateValues[r]);
                if (o) return o * u[r].descending * c;
              }
              return (l(t.tieBreaker, e.tieBreaker) || n(t.tieBreaker, e.tieBreaker)) * c;
            }),
            (r = f.map(function(t) {
              return t.value;
            }))
          );
        };
        function e(t) {
          switch (typeof t) {
            case 'number':
            case 'boolean':
            case 'string':
              return !0;
            default:
              return !1;
          }
        }
        function n(t, e) {
          var n = 0,
            r = t.type,
            i = e.type;
          if (r === i) {
            var o = t.value,
              a = e.value;
            'string' === r
              ? ((o = o.toLowerCase()), (a = a.toLowerCase()))
              : 'object' === r && (H(o) && (o = t.index), H(a) && (a = e.index)),
              o !== a && (n = o < a ? -1 : 1);
          } else n = r < i ? -1 : 1;
          return n;
        }
      }
      function Mi(t) {
        return G(t) && (t = { link: t }), (t.restrict = t.restrict || 'AC'), I(t);
      }
      Vi.$inject = ['$parse'];
      var Ii = I({
          restrict: 'E',
          compile: function(t, e) {
            if (!e.href && !e.xlinkHref)
              return function(t, e) {
                if ('a' === e[0].nodeName.toLowerCase()) {
                  var n =
                    '[object SVGAnimatedString]' === m.call(e.prop('href')) ? 'xlink:href' : 'href';
                  e.on('click', function(t) {
                    e.attr(n) || t.preventDefault();
                  });
                }
              };
          }
        }),
        Ni = {};
      x(Ae, function(t, e) {
        if ('multiple' !== t) {
          var n = yn('ng-' + e),
            r = i;
          'checked' === t &&
            (r = function(t, e, r) {
              r.ngModel !== r[n] && i(t, 0, r);
            }),
            (Ni[n] = function() {
              return { restrict: 'A', priority: 100, link: r };
            });
        }
        function i(t, r, i) {
          t.$watch(i[n], function(t) {
            i.$set(e, !!t);
          });
        }
      }),
        x(je, function(t, e) {
          Ni[e] = function() {
            return {
              priority: 100,
              link: function(t, n, r) {
                if ('ngPattern' === e && '/' === r.ngPattern.charAt(0)) {
                  var i = r.ngPattern.match(o);
                  if (i) return void r.$set('ngPattern', new RegExp(i[1], i[2]));
                }
                t.$watch(r[e], function(t) {
                  r.$set(e, t);
                });
              }
            };
          };
        }),
        x(['src', 'srcset', 'href'], function(t) {
          var e = yn('ng-' + t);
          Ni[e] = function() {
            return {
              priority: 99,
              link: function(n, r, i) {
                var o = t,
                  a = t;
                'href' === t &&
                  '[object SVGAnimatedString]' === m.call(r.prop('href')) &&
                  ((a = 'xlinkHref'), (i.$attr[a] = 'xlink:href'), (o = null)),
                  i.$observe(e, function(e) {
                    e ? (i.$set(a, e), l && o && r.prop(o, i[a])) : 'href' === t && i.$set(a, null);
                  });
              }
            };
          };
        });
      var Di = {
          $addControl: V,
          $$renameControl: function(t, e) {
            t.$name = e;
          },
          $removeControl: V,
          $setValidity: V,
          $setDirty: V,
          $setPristine: V,
          $setSubmitted: V
        },
        Ui = 'ng-pending';
      function Hi(t, e, n, r, i) {
        (this.$$controls = []),
          (this.$error = {}),
          (this.$$success = {}),
          (this.$pending = void 0),
          (this.$name = i(e.name || e.ngForm || '')(n)),
          (this.$dirty = !1),
          (this.$pristine = !0),
          (this.$valid = !0),
          (this.$invalid = !1),
          (this.$submitted = !1),
          (this.$$parentForm = Di),
          (this.$$element = t),
          (this.$$animate = r),
          Bi(this);
      }
      (Hi.$inject = ['$element', '$attrs', '$scope', '$animate', '$interpolate']),
        (Hi.prototype = {
          $rollbackViewValue: function() {
            x(this.$$controls, function(t) {
              t.$rollbackViewValue();
            });
          },
          $commitViewValue: function() {
            x(this.$$controls, function(t) {
              t.$commitViewValue();
            });
          },
          $addControl: function(t) {
            Dt(t.$name, 'input'),
              this.$$controls.push(t),
              t.$name && (this[t.$name] = t),
              (t.$$parentForm = this);
          },
          $$renameControl: function(t, e) {
            var n = t.$name;
            this[n] === t && delete this[n], (this[e] = t), (t.$name = e);
          },
          $removeControl: function(t) {
            t.$name && this[t.$name] === t && delete this[t.$name],
              x(
                this.$pending,
                function(e, n) {
                  this.$setValidity(n, null, t);
                },
                this
              ),
              x(
                this.$error,
                function(e, n) {
                  this.$setValidity(n, null, t);
                },
                this
              ),
              x(
                this.$$success,
                function(e, n) {
                  this.$setValidity(n, null, t);
                },
                this
              ),
              ot(this.$$controls, t),
              (t.$$parentForm = Di);
          },
          $setDirty: function() {
            this.$$animate.removeClass(this.$$element, Uo),
              this.$$animate.addClass(this.$$element, Ho),
              (this.$dirty = !0),
              (this.$pristine = !1),
              this.$$parentForm.$setDirty();
          },
          $setPristine: function() {
            this.$$animate.setClass(this.$$element, Uo, Ho + ' ng-submitted'),
              (this.$dirty = !1),
              (this.$pristine = !0),
              (this.$submitted = !1),
              x(this.$$controls, function(t) {
                t.$setPristine();
              });
          },
          $setUntouched: function() {
            x(this.$$controls, function(t) {
              t.$setUntouched();
            });
          },
          $setSubmitted: function() {
            this.$$animate.addClass(this.$$element, 'ng-submitted'),
              (this.$submitted = !0),
              this.$$parentForm.$setSubmitted();
          }
        }),
        zi({
          clazz: Hi,
          set: function(t, e, n) {
            var r = t[e];
            r ? -1 === r.indexOf(n) && r.push(n) : (t[e] = [n]);
          },
          unset: function(t, e, n) {
            var r = t[e];
            r && (ot(r, n), 0 === r.length && delete t[e]);
          }
        });
      var Fi = function(t) {
          return [
            '$timeout',
            '$parse',
            function(e, n) {
              return {
                name: 'form',
                restrict: t ? 'EAC' : 'E',
                require: ['form', '^^?form'],
                controller: Hi,
                compile: function(n, i) {
                  n.addClass(Uo).addClass(No);
                  var o = i.name ? 'name' : !(!t || !i.ngForm) && 'ngForm';
                  return {
                    pre: function(t, n, i, a) {
                      var s = a[0];
                      if (!('action' in i)) {
                        var u = function(e) {
                          t.$apply(function() {
                            s.$commitViewValue(), s.$setSubmitted();
                          }),
                            e.preventDefault();
                        };
                        n[0].addEventListener('submit', u),
                          n.on('$destroy', function() {
                            e(
                              function() {
                                n[0].removeEventListener('submit', u);
                              },
                              0,
                              !1
                            );
                          });
                      }
                      (a[1] || s.$$parentForm).$addControl(s);
                      var c = o ? r(s.$name) : V;
                      o &&
                        (c(t, s),
                        i.$observe(o, function(e) {
                          s.$name !== e &&
                            (c(t, void 0),
                            s.$$parentForm.$$renameControl(s, e),
                            (c = r(s.$name))(t, s));
                        })),
                        n.on('$destroy', function() {
                          s.$$parentForm.$removeControl(s), c(t, void 0), k(s, Di);
                        });
                    }
                  };
                }
              };
              function r(t) {
                return '' === t ? n('this[""]').assign : n(t).assign || V;
              }
            }
          ];
        },
        qi = Fi(),
        Li = Fi(!0);
      function Bi(t) {
        (t.$$classCache = {}),
          (t.$$classCache[Do] = !(t.$$classCache[No] = t.$$element.hasClass(No)));
      }
      function zi(t) {
        var e = t.clazz,
          n = t.set,
          r = t.unset;
        function i(t, e, n) {
          n && !t.$$classCache[e]
            ? (t.$$animate.addClass(t.$$element, e), (t.$$classCache[e] = !0))
            : !n &&
              t.$$classCache[e] &&
              (t.$$animate.removeClass(t.$$element, e), (t.$$classCache[e] = !1));
        }
        function o(t, e, n) {
          (e = e ? '-' + Vt(e, '-') : ''), i(t, No + e, !0 === n), i(t, Do + e, !1 === n);
        }
        e.prototype.$setValidity = function(t, e, a) {
          var s;
          D(e)
            ? (function(t, e, r, i) {
                t[e] || (t[e] = {});
                n(t[e], r, i);
              })(this, '$pending', t, a)
            : (function(t, e, n, i) {
                t[e] && r(t[e], n, i);
                Wi(t[e]) && (t[e] = void 0);
              })(this, '$pending', t, a),
            Z(e)
              ? e
                ? (r(this.$error, t, a), n(this.$$success, t, a))
                : (n(this.$error, t, a), r(this.$$success, t, a))
              : (r(this.$error, t, a), r(this.$$success, t, a)),
            this.$pending
              ? (i(this, Ui, !0), (this.$valid = this.$invalid = void 0), o(this, '', null))
              : (i(this, Ui, !1),
                (this.$valid = Wi(this.$error)),
                (this.$invalid = !this.$valid),
                o(this, '', this.$valid)),
            o(
              this,
              t,
              (s =
                this.$pending && this.$pending[t]
                  ? void 0
                  : !this.$error[t] && (!!this.$$success[t] || null))
            ),
            this.$$parentForm.$setValidity(t, s, this);
        };
      }
      function Wi(t) {
        if (t) for (var e in t) if (t.hasOwnProperty(e)) return !1;
        return !0;
      }
      var Gi = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        Ji = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Ki = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Yi = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Zi = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Qi = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Xi = /^(\d{4,})-W(\d\d)$/,
        to = /^(\d{4,})-(\d\d)$/,
        eo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        no = 'keydown wheel mousedown',
        ro = Ft();
      x('date,datetime-local,month,time,week'.split(','), function(t) {
        ro[t] = !0;
      });
      var io = {
        text: function(t, e, n, r, i, o) {
          ao(t, e, n, r, i, o), oo(r);
        },
        date: uo('date', Zi, so(Zi, ['yyyy', 'MM', 'dd']), 'yyyy-MM-dd'),
        'datetime-local': uo(
          'datetimelocal',
          Qi,
          so(Qi, ['yyyy', 'MM', 'dd', 'HH', 'mm', 'ss', 'sss']),
          'yyyy-MM-ddTHH:mm:ss.sss'
        ),
        time: uo('time', eo, so(eo, ['HH', 'mm', 'ss', 'sss']), 'HH:mm:ss.sss'),
        week: uo(
          'week',
          Xi,
          function(t, e) {
            if (B(t)) return t;
            if (q(t)) {
              Xi.lastIndex = 0;
              var n = Xi.exec(t);
              if (n) {
                var r = +n[1],
                  i = +n[2],
                  o = 0,
                  a = 0,
                  s = 0,
                  u = 0,
                  c = Si(r),
                  l = 7 * (i - 1);
                return (
                  e &&
                    ((o = e.getHours()),
                    (a = e.getMinutes()),
                    (s = e.getSeconds()),
                    (u = e.getMilliseconds())),
                  new Date(r, 0, c.getDate() + l, o, a, s, u)
                );
              }
            }
            return NaN;
          },
          'yyyy-Www'
        ),
        month: uo('month', to, so(to, ['yyyy', 'MM']), 'yyyy-MM'),
        number: function(t, e, n, r, i, o) {
          var a, s;
          co(t, e, n, r),
            lo(r),
            ao(t, e, n, r, i, o),
            (U(n.min) || n.ngMin) &&
              ((r.$validators.min = function(t) {
                return r.$isEmpty(t) || D(a) || t >= a;
              }),
              n.$observe('min', function(t) {
                (a = fo(t)), r.$validate();
              }));
          (U(n.max) || n.ngMax) &&
            ((r.$validators.max = function(t) {
              return r.$isEmpty(t) || D(s) || t <= s;
            }),
            n.$observe('max', function(t) {
              (s = fo(t)), r.$validate();
            }));
          if (U(n.step) || n.ngStep) {
            var u;
            (r.$validators.step = function(t, e) {
              return r.$isEmpty(e) || D(u) || vo(e, a || 0, u);
            }),
              n.$observe('step', function(t) {
                (u = fo(t)), r.$validate();
              });
          }
        },
        url: function(t, e, n, r, i, o) {
          ao(t, e, n, r, i, o),
            oo(r),
            (r.$$parserName = 'url'),
            (r.$validators.url = function(t, e) {
              var n = t || e;
              return r.$isEmpty(n) || Ji.test(n);
            });
        },
        email: function(t, e, n, r, i, o) {
          ao(t, e, n, r, i, o),
            oo(r),
            (r.$$parserName = 'email'),
            (r.$validators.email = function(t, e) {
              var n = t || e;
              return r.$isEmpty(n) || Ki.test(n);
            });
        },
        radio: function(t, e, n, r) {
          var i = !n.ngTrim || 'false' !== tt(n.ngTrim);
          D(n.name) && e.attr('name', C());
          e.on('click', function(t) {
            var o;
            e[0].checked && ((o = n.value), i && (o = tt(o)), r.$setViewValue(o, t && t.type));
          }),
            (r.$render = function() {
              var t = n.value;
              i && (t = tt(t)), (e[0].checked = t === r.$viewValue);
            }),
            n.$observe('value', r.$render);
        },
        range: function(t, e, n, r, i, o) {
          co(t, e, n, r), lo(r), ao(t, e, n, r, i, o);
          var a = r.$$hasNativeValidators && 'range' === e[0].type,
            s = a ? 0 : void 0,
            u = a ? 100 : void 0,
            c = a ? 1 : void 0,
            l = e[0].validity,
            f = U(n.min),
            h = U(n.max),
            p = U(n.step),
            d = r.$render;
          (r.$render =
            a && U(l.rangeUnderflow) && U(l.rangeOverflow)
              ? function() {
                  d(), r.$setViewValue(e.val());
                }
              : d),
            f &&
              ((r.$validators.min = a
                ? function() {
                    return !0;
                  }
                : function(t, e) {
                    return r.$isEmpty(e) || D(s) || e >= s;
                  }),
              v('min', function(t) {
                if (((s = fo(t)), T(r.$modelValue))) return;
                if (a) {
                  var n = e.val();
                  s > n && ((n = s), e.val(n)), r.$setViewValue(n);
                } else r.$validate();
              }));
          h &&
            ((r.$validators.max = a
              ? function() {
                  return !0;
                }
              : function(t, e) {
                  return r.$isEmpty(e) || D(u) || e <= u;
                }),
            v('max', function(t) {
              if (((u = fo(t)), T(r.$modelValue))) return;
              if (a) {
                var n = e.val();
                u < n && (e.val(u), (n = u < s ? s : u)), r.$setViewValue(n);
              } else r.$validate();
            }));
          p &&
            ((r.$validators.step = a
              ? function() {
                  return !l.stepMismatch;
                }
              : function(t, e) {
                  return r.$isEmpty(e) || D(c) || vo(e, s || 0, c);
                }),
            v('step', function(t) {
              if (((c = fo(t)), T(r.$modelValue))) return;
              a && r.$viewValue !== e.val() ? r.$setViewValue(e.val()) : r.$validate();
            }));
          function v(t, r) {
            e.attr(t, n[t]), n.$observe(t, r);
          }
        },
        checkbox: function(t, e, n, r, i, o, a, s) {
          var u = $o(s, t, 'ngTrueValue', n.ngTrueValue, !0),
            c = $o(s, t, 'ngFalseValue', n.ngFalseValue, !1);
          e.on('click', function(t) {
            r.$setViewValue(e[0].checked, t && t.type);
          }),
            (r.$render = function() {
              e[0].checked = r.$viewValue;
            }),
            (r.$isEmpty = function(t) {
              return !1 === t;
            }),
            r.$formatters.push(function(t) {
              return ut(t, u);
            }),
            r.$parsers.push(function(t) {
              return t ? u : c;
            });
        },
        hidden: V,
        button: V,
        submit: V,
        reset: V,
        file: V
      };
      function oo(t) {
        t.$formatters.push(function(e) {
          return t.$isEmpty(e) ? e : e.toString();
        });
      }
      function ao(t, e, n, r, i, o) {
        var s,
          c = u(e[0].type);
        if (!i.android) {
          var l = !1;
          e.on('compositionstart', function() {
            l = !0;
          }),
            e.on('compositionupdate', function(t) {
              (D(t.data) || '' === t.data) && (l = !1);
            }),
            e.on('compositionend', function() {
              (l = !1), f();
            });
        }
        var f = function(t) {
          if ((s && (o.defer.cancel(s), (s = null)), !l)) {
            var i = e.val(),
              a = t && t.type;
            'password' === c || (n.ngTrim && 'false' === n.ngTrim) || (i = tt(i)),
              (r.$viewValue !== i || ('' === i && r.$$hasNativeValidators)) &&
                r.$setViewValue(i, a);
          }
        };
        if (i.hasEvent('input')) e.on('input', f);
        else {
          var h = function(t, e, n) {
            s ||
              (s = o.defer(function() {
                (s = null), (e && e.value === n) || f(t);
              }));
          };
          e.on('keydown', function(t) {
            var e = t.keyCode;
            91 === e || (15 < e && e < 19) || (37 <= e && e <= 40) || h(t, this, this.value);
          }),
            i.hasEvent('paste') && e.on('paste cut drop', h);
        }
        e.on('change', f),
          ro[c] &&
            r.$$hasNativeValidators &&
            c === n.type &&
            e.on(no, function(t) {
              if (!s) {
                var e = this[a],
                  n = e.badInput,
                  r = e.typeMismatch;
                s = o.defer(function() {
                  (s = null), (e.badInput === n && e.typeMismatch === r) || f(t);
                });
              }
            }),
          (r.$render = function() {
            var t = r.$isEmpty(r.$viewValue) ? '' : r.$viewValue;
            e.val() !== t && e.val(t);
          });
      }
      function so(t, e) {
        return function(n, r) {
          var i, o;
          if (B(n)) return n;
          if (q(n)) {
            if (
              ('"' === n.charAt(0) &&
                '"' === n.charAt(n.length - 1) &&
                (n = n.substring(1, n.length - 1)),
              Gi.test(n))
            )
              return new Date(n);
            if (((t.lastIndex = 0), (i = t.exec(n))))
              return (
                i.shift(),
                (o = r
                  ? {
                      yyyy: r.getFullYear(),
                      MM: r.getMonth() + 1,
                      dd: r.getDate(),
                      HH: r.getHours(),
                      mm: r.getMinutes(),
                      ss: r.getSeconds(),
                      sss: r.getMilliseconds() / 1e3
                    }
                  : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }),
                x(i, function(t, n) {
                  n < e.length && (o[e[n]] = +t);
                }),
                new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0)
              );
          }
          return NaN;
        };
      }
      function uo(t, e, n, r) {
        return function(i, o, a, s, u, c, l) {
          var f, h, p, d;
          (co(i, o, a, s),
          ao(0, o, a, s, u, c),
          (s.$$parserName = t),
          s.$parsers.push(function(t) {
            return s.$isEmpty(t) ? null : e.test(t) ? m(t, f) : void 0;
          }),
          s.$formatters.push(function(t) {
            if (t && !B(t)) throw Fo('datefmt', 'Expected `{0}` to be a date', t);
            if (v(t)) {
              f = t;
              var e = s.$options.getOption('timezone');
              return e && ((h = e), (f = bt(f, e, !0))), l('date')(t, r, e);
            }
            return (f = null), (h = null), '';
          }),
          U(a.min) || a.ngMin) &&
            ((s.$validators.min = function(t) {
              return !v(t) || D(p) || n(t) >= p;
            }),
            a.$observe('min', function(t) {
              (p = $(t)), s.$validate();
            }));
          (U(a.max) || a.ngMax) &&
            ((s.$validators.max = function(t) {
              return !v(t) || D(d) || n(t) <= d;
            }),
            a.$observe('max', function(t) {
              (d = $(t)), s.$validate();
            }));
          function v(t) {
            return t && !(t.getTime && t.getTime() != t.getTime());
          }
          function $(t) {
            return U(t) && !B(t) ? m(t) || void 0 : t;
          }
          function m(t, e) {
            var r = s.$options.getOption('timezone');
            h && h !== r && (e = yt(e, gt(h)));
            var i = n(t, e);
            return !isNaN(i) && r && (i = bt(i, r)), i;
          }
        };
      }
      function co(t, e, n, r) {
        var i = e[0];
        (r.$$hasNativeValidators = H(i.validity)) &&
          r.$parsers.push(function(t) {
            var n = e.prop(a) || {};
            return n.badInput || n.typeMismatch ? void 0 : t;
          });
      }
      function lo(t) {
        (t.$$parserName = 'number'),
          t.$parsers.push(function(e) {
            return t.$isEmpty(e) ? null : Yi.test(e) ? parseFloat(e) : void 0;
          }),
          t.$formatters.push(function(e) {
            if (!t.$isEmpty(e)) {
              if (!L(e)) throw Fo('numfmt', 'Expected `{0}` to be a number', e);
              e = e.toString();
            }
            return e;
          });
      }
      function fo(t) {
        return U(t) && !L(t) && (t = parseFloat(t)), T(t) ? void 0 : t;
      }
      function ho(t) {
        return (0 | t) === t;
      }
      function po(t) {
        var e = t.toString(),
          n = e.indexOf('.');
        if (-1 === n) {
          if (-1 < t && t < 1) {
            var r = /e-(\d+)$/.exec(e);
            if (r) return Number(r[1]);
          }
          return 0;
        }
        return e.length - n - 1;
      }
      function vo(t, e, n) {
        var r = Number(t),
          i = !ho(r),
          o = !ho(e),
          a = !ho(n);
        if (i || o || a) {
          var s = i ? po(r) : 0,
            u = o ? po(e) : 0,
            c = a ? po(n) : 0,
            l = Math.max(s, u, c),
            f = Math.pow(10, l);
          (r *= f),
            (e *= f),
            (n *= f),
            i && (r = Math.round(r)),
            o && (e = Math.round(e)),
            a && (n = Math.round(n));
        }
        return (r - e) % n == 0;
      }
      function $o(t, e, n, r, i) {
        var o;
        if (U(r)) {
          if (!(o = t(r)).constant)
            throw Fo('constexpr', 'Expected constant expression for `{0}`, but saw `{1}`.', n, r);
          return o(e);
        }
        return i;
      }
      var mo = [
          '$browser',
          '$sniffer',
          '$filter',
          '$parse',
          function(t, e, n, r) {
            return {
              restrict: 'E',
              require: ['?ngModel'],
              link: {
                pre: function(i, o, a, s) {
                  s[0] && (io[u(a.type)] || io.text)(i, o, a, s[0], e, t, n, r);
                }
              }
            };
          }
        ],
        go = /^(true|false|\d+)$/,
        yo = function() {
          function t(t, e, n) {
            var r = U(n) ? n : 9 === l ? '' : null;
            t.prop('value', r), e.$set('value', n);
          }
          return {
            restrict: 'A',
            priority: 100,
            compile: function(e, n) {
              return go.test(n.ngValue)
                ? function(e, n, r) {
                    t(n, r, e.$eval(r.ngValue));
                  }
                : function(e, n, r) {
                    e.$watch(r.ngValue, function(e) {
                      t(n, r, e);
                    });
                  };
            }
          };
        },
        bo = [
          '$compile',
          function(t) {
            return {
              restrict: 'AC',
              compile: function(e) {
                return (
                  t.$$addBindingClass(e),
                  function(e, n, r) {
                    t.$$addBindingInfo(n, r.ngBind),
                      (n = n[0]),
                      e.$watch(r.ngBind, function(t) {
                        n.textContent = qt(t);
                      });
                  }
                );
              }
            };
          }
        ],
        wo = [
          '$interpolate',
          '$compile',
          function(t, e) {
            return {
              compile: function(n) {
                return (
                  e.$$addBindingClass(n),
                  function(n, r, i) {
                    var o = t(r.attr(i.$attr.ngBindTemplate));
                    e.$$addBindingInfo(r, o.expressions),
                      (r = r[0]),
                      i.$observe('ngBindTemplate', function(t) {
                        r.textContent = D(t) ? '' : t;
                      });
                  }
                );
              }
            };
          }
        ],
        So = [
          '$sce',
          '$parse',
          '$compile',
          function(t, e, n) {
            return {
              restrict: 'A',
              compile: function(r, i) {
                var o = e(i.ngBindHtml),
                  a = e(i.ngBindHtml, function(e) {
                    return t.valueOf(e);
                  });
                return (
                  n.$$addBindingClass(r),
                  function(e, r, i) {
                    n.$$addBindingInfo(r, i.ngBindHtml),
                      e.$watch(a, function() {
                        var n = o(e);
                        r.html(t.getTrustedHtml(n) || '');
                      });
                  }
                );
              }
            };
          }
        ],
        xo = I({
          restrict: 'A',
          require: 'ngModel',
          link: function(t, e, n, r) {
            r.$viewChangeListeners.push(function() {
              t.$eval(n.ngChange);
            });
          }
        });
      function _o(t, e) {
        var n;
        return (
          (t = 'ngClass' + t),
          [
            '$parse',
            function(s) {
              return {
                restrict: 'AC',
                link: function(u, c, l) {
                  var f,
                    h = l[t].trim(),
                    p = ':' === h.charAt(0) && ':' === h.charAt(1),
                    d = s(h, p ? a : o),
                    v = p
                      ? function(t) {
                          var e = o(t);
                          e !== f && y(e);
                        }
                      : y,
                    $ = c.data('$classCounts'),
                    m = !0;
                  function g(t, e) {
                    var n = [];
                    return (
                      x(t, function(t) {
                        (e > 0 || $[t]) &&
                          (($[t] = ($[t] || 0) + e), $[t] === +(e > 0) && n.push(t));
                      }),
                      n.join(' ')
                    );
                  }
                  function y(t) {
                    m === e &&
                      (function(t, e) {
                        var n = i(t),
                          o = i(e),
                          a = r(n, o),
                          s = r(o, n),
                          u = g(a, -1),
                          c = g(s, 1);
                        l.$addClass(c), l.$removeClass(u);
                      })(f, t),
                      (f = t);
                  }
                  $ || (($ = Ft()), c.data('$classCounts', $)),
                    'ngClass' !== t &&
                      (n ||
                        (n = s('$index', function(t) {
                          return 1 & t;
                        })),
                      u.$watch(n, function(t) {
                        t === e
                          ? ((n = g(i((n = f)), 1)), l.$addClass(n))
                          : (function(t) {
                              (t = g(i(t), -1)), l.$removeClass(t);
                            })(f);
                        var n;
                        m = t;
                      })),
                    u.$watch(d, v, p);
                }
              };
            }
          ]
        );
        function r(t, e) {
          if (!t || !t.length) return [];
          if (!e || !e.length) return t;
          var n = [];
          t: for (var r = 0; r < t.length; r++) {
            for (var i = t[r], o = 0; o < e.length; o++) if (i === e[o]) continue t;
            n.push(i);
          }
          return n;
        }
        function i(t) {
          return t && t.split(' ');
        }
        function o(t) {
          var e = t;
          return (
            z(t)
              ? (e = t.map(o).join(' '))
              : H(t) &&
                (e = Object.keys(t)
                  .filter(function(e) {
                    return t[e];
                  })
                  .join(' ')),
            e
          );
        }
        function a(t) {
          var e = t;
          if (z(t)) e = t.map(a);
          else if (H(t)) {
            var n = !1;
            (e = Object.keys(t).filter(function(e) {
              var r = t[e];
              return !n && D(r) && (n = !0), r;
            })),
              n && e.push(void 0);
          }
          return e;
        }
      }
      var Eo = _o('', !0),
        Co = _o('Odd', 0),
        Oo = _o('Even', 1),
        Ro = Mi({
          compile: function(t, e) {
            e.$set('ngCloak', void 0), t.removeClass('ng-cloak');
          }
        }),
        ko = [
          function() {
            return { restrict: 'A', scope: !0, controller: '@', priority: 500 };
          }
        ],
        Po = {},
        Ao = { blur: !0, focus: !0 };
      x(
        'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(
          ' '
        ),
        function(t) {
          var e = yn('ng-' + t);
          Po[e] = [
            '$parse',
            '$rootScope',
            function(n, r) {
              return {
                restrict: 'A',
                compile: function(i, o) {
                  var a = n(o[e]);
                  return function(e, n) {
                    n.on(t, function(n) {
                      var i = function() {
                        a(e, { $event: n });
                      };
                      Ao[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i);
                    });
                  };
                }
              };
            }
          ];
        }
      );
      var To = [
          '$animate',
          '$compile',
          function(t, e) {
            return {
              multiElement: !0,
              transclude: 'element',
              priority: 600,
              terminal: !0,
              restrict: 'A',
              $$tlb: !0,
              link: function(n, r, i, o, a) {
                var s, u, c;
                n.$watch(i.ngIf, function(n) {
                  n
                    ? u ||
                      a(function(n, o) {
                        (u = o),
                          (n[n.length++] = e.$$createComment('end ngIf', i.ngIf)),
                          (s = { clone: n }),
                          t.enter(n, r.parent(), r);
                      })
                    : (c && (c.remove(), (c = null)),
                      u && (u.$destroy(), (u = null)),
                      s &&
                        ((c = Ht(s.clone)),
                        t.leave(c).done(function(t) {
                          !1 !== t && (c = null);
                        }),
                        (s = null)));
                });
              }
            };
          }
        ],
        jo = [
          '$templateRequest',
          '$anchorScroll',
          '$animate',
          function(t, e, n) {
            return {
              restrict: 'ECA',
              priority: 400,
              terminal: !0,
              transclude: 'element',
              controller: b.noop,
              compile: function(r, i) {
                var o = i.ngInclude || i.src,
                  a = i.onload || '',
                  s = i.autoscroll;
                return function(r, i, u, c, l) {
                  var f,
                    h,
                    p,
                    d = 0,
                    v = function() {
                      h && (h.remove(), (h = null)),
                        f && (f.$destroy(), (f = null)),
                        p &&
                          (n.leave(p).done(function(t) {
                            !1 !== t && (h = null);
                          }),
                          (h = p),
                          (p = null));
                    };
                  r.$watch(o, function(o) {
                    var u = function(t) {
                        !1 === t || !U(s) || (s && !r.$eval(s)) || e();
                      },
                      h = ++d;
                    o
                      ? (t(o, !0).then(
                          function(t) {
                            if (!r.$$destroyed && h === d) {
                              var e = r.$new();
                              c.template = t;
                              var s = l(e, function(t) {
                                v(), n.enter(t, null, i).done(u);
                              });
                              (p = s), (f = e).$emit('$includeContentLoaded', o), r.$eval(a);
                            }
                          },
                          function() {
                            r.$$destroyed || (h === d && (v(), r.$emit('$includeContentError', o)));
                          }
                        ),
                        r.$emit('$includeContentRequested', o))
                      : (v(), (c.template = null));
                  });
                };
              }
            };
          }
        ],
        Vo = [
          '$compile',
          function(e) {
            return {
              restrict: 'ECA',
              priority: -400,
              require: 'ngInclude',
              link: function(n, r, i, o) {
                if (m.call(r[0]).match(/SVG/))
                  return (
                    r.empty(),
                    void e(he(o.template, t.document).childNodes)(
                      n,
                      function(t) {
                        r.append(t);
                      },
                      { futureParentElement: r }
                    )
                  );
                r.html(o.template), e(r.contents())(n);
              }
            };
          }
        ],
        Mo = Mi({
          priority: 450,
          compile: function() {
            return {
              pre: function(t, e, n) {
                t.$eval(n.ngInit);
              }
            };
          }
        }),
        Io = function() {
          return {
            restrict: 'A',
            priority: 100,
            require: 'ngModel',
            link: function(t, e, n, r) {
              var i = n.ngList || ', ',
                o = 'false' !== n.ngTrim,
                a = o ? tt(i) : i;
              r.$parsers.push(function(t) {
                if (!D(t)) {
                  var e = [];
                  return (
                    t &&
                      x(t.split(a), function(t) {
                        t && e.push(o ? tt(t) : t);
                      }),
                    e
                  );
                }
              }),
                r.$formatters.push(function(t) {
                  if (z(t)) return t.join(i);
                }),
                (r.$isEmpty = function(t) {
                  return !t || !t.length;
                });
            }
          };
        },
        No = 'ng-valid',
        Do = 'ng-invalid',
        Uo = 'ng-pristine',
        Ho = 'ng-dirty',
        Fo = i('ngModel');
      function qo(t, e, n, r, i, o, a, s, u) {
        var c;
        (this.$viewValue = Number.NaN),
          (this.$modelValue = Number.NaN),
          (this.$$rawModelValue = void 0),
          (this.$validators = {}),
          (this.$asyncValidators = {}),
          (this.$parsers = []),
          (this.$formatters = []),
          (this.$viewChangeListeners = []),
          (this.$untouched = !0),
          (this.$touched = !1),
          (this.$pristine = !0),
          (this.$dirty = !1),
          (this.$valid = !0),
          (this.$invalid = !1),
          (this.$error = {}),
          (this.$$success = {}),
          (this.$pending = void 0),
          (this.$name = u(n.name || '', !1)(t)),
          (this.$$parentForm = Di),
          (this.$options = Lo),
          (this.$$updateEvents = ''),
          (this.$$updateEventHandler = this.$$updateEventHandler.bind(this)),
          (this.$$parsedNgModel = i(n.ngModel)),
          (this.$$parsedNgModelAssign = this.$$parsedNgModel.assign),
          (this.$$ngModelGet = this.$$parsedNgModel),
          (this.$$ngModelSet = this.$$parsedNgModelAssign),
          (this.$$pendingDebounce = null),
          (this.$$parserValid = void 0),
          (this.$$currentValidationRunId = 0),
          Object.defineProperty(this, '$$scope', { value: t }),
          (this.$$attr = n),
          (this.$$element = r),
          (this.$$animate = o),
          (this.$$timeout = a),
          (this.$$parse = i),
          (this.$$q = s),
          (this.$$exceptionHandler = e),
          Bi(this),
          (c = this).$$scope.$watch(function(t) {
            var e = c.$$ngModelGet(t);
            return (
              e === c.$modelValue ||
                (c.$modelValue != c.$modelValue && e != e) ||
                c.$$setModelValue(e),
              e
            );
          });
      }
      (qo.$inject = [
        '$scope',
        '$exceptionHandler',
        '$attrs',
        '$element',
        '$parse',
        '$animate',
        '$timeout',
        '$q',
        '$interpolate'
      ]),
        (qo.prototype = {
          $$initGetterSetters: function() {
            if (this.$options.getOption('getterSetter')) {
              var t = this.$$parse(this.$$attr.ngModel + '()'),
                e = this.$$parse(this.$$attr.ngModel + '($$$p)');
              (this.$$ngModelGet = function(e) {
                var n = this.$$parsedNgModel(e);
                return G(n) && (n = t(e)), n;
              }),
                (this.$$ngModelSet = function(t, n) {
                  G(this.$$parsedNgModel(t)) ? e(t, { $$$p: n }) : this.$$parsedNgModelAssign(t, n);
                });
            } else if (!this.$$parsedNgModel.assign)
              throw Fo(
                'nonassign',
                "Expression '{0}' is non-assignable. Element: {1}",
                this.$$attr.ngModel,
                wt(this.$$element)
              );
          },
          $render: V,
          $isEmpty: function(t) {
            return D(t) || '' === t || null === t || t != t;
          },
          $$updateEmptyClasses: function(t) {
            this.$isEmpty(t)
              ? (this.$$animate.removeClass(this.$$element, 'ng-not-empty'),
                this.$$animate.addClass(this.$$element, 'ng-empty'))
              : (this.$$animate.removeClass(this.$$element, 'ng-empty'),
                this.$$animate.addClass(this.$$element, 'ng-not-empty'));
          },
          $setPristine: function() {
            (this.$dirty = !1),
              (this.$pristine = !0),
              this.$$animate.removeClass(this.$$element, Ho),
              this.$$animate.addClass(this.$$element, Uo);
          },
          $setDirty: function() {
            (this.$dirty = !0),
              (this.$pristine = !1),
              this.$$animate.removeClass(this.$$element, Uo),
              this.$$animate.addClass(this.$$element, Ho),
              this.$$parentForm.$setDirty();
          },
          $setUntouched: function() {
            (this.$touched = !1),
              (this.$untouched = !0),
              this.$$animate.setClass(this.$$element, 'ng-untouched', 'ng-touched');
          },
          $setTouched: function() {
            (this.$touched = !0),
              (this.$untouched = !1),
              this.$$animate.setClass(this.$$element, 'ng-touched', 'ng-untouched');
          },
          $rollbackViewValue: function() {
            this.$$timeout.cancel(this.$$pendingDebounce),
              (this.$viewValue = this.$$lastCommittedViewValue),
              this.$render();
          },
          $validate: function() {
            if (!T(this.$modelValue)) {
              var t = this.$$lastCommittedViewValue,
                e = this.$$rawModelValue,
                n = this.$valid,
                r = this.$modelValue,
                i = this.$options.getOption('allowInvalid'),
                o = this;
              this.$$runValidators(e, t, function(t) {
                i ||
                  n === t ||
                  ((o.$modelValue = t ? e : void 0),
                  o.$modelValue !== r && o.$$writeModelToScope());
              });
            }
          },
          $$runValidators: function(t, e, n) {
            this.$$currentValidationRunId++;
            var r,
              i,
              o = this.$$currentValidationRunId,
              a = this;
            (function() {
              var t = a.$$parserName || 'parse';
              if (!D(a.$$parserValid))
                return (
                  a.$$parserValid ||
                    (x(a.$validators, function(t, e) {
                      s(e, null);
                    }),
                    x(a.$asyncValidators, function(t, e) {
                      s(e, null);
                    })),
                  s(t, a.$$parserValid),
                  a.$$parserValid
                );
              s(t, null);
              return !0;
            })()
              ? !(function() {
                  var n = !0;
                  if (
                    (x(a.$validators, function(r, i) {
                      var o = Boolean(r(t, e));
                      (n = n && o), s(i, o);
                    }),
                    !n)
                  )
                    return (
                      x(a.$asyncValidators, function(t, e) {
                        s(e, null);
                      }),
                      !1
                    );
                  return !0;
                })()
                ? u(!1)
                : ((r = []),
                  (i = !0),
                  x(a.$asyncValidators, function(n, o) {
                    var a = n(t, e);
                    if (!Q(a))
                      throw Fo(
                        'nopromise',
                        "Expected asynchronous validator to return a promise but got '{0}' instead.",
                        a
                      );
                    s(o, void 0),
                      r.push(
                        a.then(
                          function() {
                            s(o, !0);
                          },
                          function() {
                            (i = !1), s(o, !1);
                          }
                        )
                      );
                  }),
                  r.length
                    ? a.$$q.all(r).then(function() {
                        u(i);
                      }, V)
                    : u(!0))
              : u(!1);
            function s(t, e) {
              o === a.$$currentValidationRunId && a.$setValidity(t, e);
            }
            function u(t) {
              o === a.$$currentValidationRunId && n(t);
            }
          },
          $commitViewValue: function() {
            var t = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce),
              (this.$$lastCommittedViewValue !== t || ('' === t && this.$$hasNativeValidators)) &&
                (this.$$updateEmptyClasses(t),
                (this.$$lastCommittedViewValue = t),
                this.$pristine && this.$setDirty(),
                this.$$parseAndValidate());
          },
          $$parseAndValidate: function() {
            var t = this.$$lastCommittedViewValue,
              e = this;
            if (((this.$$parserValid = !D(t) || void 0), this.$$parserValid))
              for (var n = 0; n < this.$parsers.length; n++)
                if (D((t = this.$parsers[n](t)))) {
                  this.$$parserValid = !1;
                  break;
                }
            T(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var r = this.$modelValue,
              i = this.$options.getOption('allowInvalid');
            function o() {
              e.$modelValue !== r && e.$$writeModelToScope();
            }
            (this.$$rawModelValue = t),
              i && ((this.$modelValue = t), o()),
              this.$$runValidators(t, this.$$lastCommittedViewValue, function(n) {
                i || ((e.$modelValue = n ? t : void 0), o());
              });
          },
          $$writeModelToScope: function() {
            this.$$ngModelSet(this.$$scope, this.$modelValue),
              x(
                this.$viewChangeListeners,
                function(t) {
                  try {
                    t();
                  } catch (t) {
                    this.$$exceptionHandler(t);
                  }
                },
                this
              );
          },
          $setViewValue: function(t, e) {
            (this.$viewValue = t),
              this.$options.getOption('updateOnDefault') && this.$$debounceViewValueCommit(e);
          },
          $$debounceViewValueCommit: function(t) {
            var e = this.$options.getOption('debounce');
            L(e[t]) ? (e = e[t]) : L(e.default) && (e = e.default),
              this.$$timeout.cancel(this.$$pendingDebounce);
            var n = this;
            e > 0
              ? (this.$$pendingDebounce = this.$$timeout(function() {
                  n.$commitViewValue();
                }, e))
              : this.$$scope.$root.$$phase
                ? this.$commitViewValue()
                : this.$$scope.$apply(function() {
                    n.$commitViewValue();
                  });
          },
          $overrideModelOptions: function(t) {
            (this.$options = this.$options.createChild(t)), this.$$setUpdateOnEvents();
          },
          $processModelValue: function() {
            var t = this.$$format();
            this.$viewValue !== t &&
              (this.$$updateEmptyClasses(t),
              (this.$viewValue = this.$$lastCommittedViewValue = t),
              this.$render(),
              this.$$runValidators(this.$modelValue, this.$viewValue, V));
          },
          $$format: function() {
            for (var t = this.$formatters, e = t.length, n = this.$modelValue; e--; ) n = t[e](n);
            return n;
          },
          $$setModelValue: function(t) {
            (this.$modelValue = this.$$rawModelValue = t),
              (this.$$parserValid = void 0),
              this.$processModelValue();
          },
          $$setUpdateOnEvents: function() {
            this.$$updateEvents &&
              this.$$element.off(this.$$updateEvents, this.$$updateEventHandler),
              (this.$$updateEvents = this.$options.getOption('updateOn')),
              this.$$updateEvents &&
                this.$$element.on(this.$$updateEvents, this.$$updateEventHandler);
          },
          $$updateEventHandler: function(t) {
            this.$$debounceViewValueCommit(t && t.type);
          }
        }),
        zi({
          clazz: qo,
          set: function(t, e) {
            t[e] = !0;
          },
          unset: function(t, e) {
            delete t[e];
          }
        });
      var Lo,
        Bo = [
          '$rootScope',
          function(t) {
            return {
              restrict: 'A',
              require: ['ngModel', '^?form', '^?ngModelOptions'],
              controller: qo,
              priority: 1,
              compile: function(e) {
                return (
                  e
                    .addClass(Uo)
                    .addClass('ng-untouched')
                    .addClass(No),
                  {
                    pre: function(t, e, n, r) {
                      var i = r[0],
                        o = r[1] || i.$$parentForm,
                        a = r[2];
                      a && (i.$options = a.$options),
                        i.$$initGetterSetters(),
                        o.$addControl(i),
                        n.$observe('name', function(t) {
                          i.$name !== t && i.$$parentForm.$$renameControl(i, t);
                        }),
                        t.$on('$destroy', function() {
                          i.$$parentForm.$removeControl(i);
                        });
                    },
                    post: function(e, n, r, i) {
                      var o = i[0];
                      function a() {
                        o.$setTouched();
                      }
                      o.$$setUpdateOnEvents(),
                        n.on('blur', function() {
                          o.$touched || (t.$$phase ? e.$evalAsync(a) : e.$apply(a));
                        });
                    }
                  }
                );
              }
            };
          }
        ],
        zo = /(\s+|^)default(\s+|$)/;
      function Wo(t) {
        this.$$options = t;
      }
      (Wo.prototype = {
        getOption: function(t) {
          return this.$$options[t];
        },
        createChild: function(t) {
          var e = !1;
          return (
            x(
              (t = k({}, t)),
              function(n, r) {
                '$inherit' === n
                  ? '*' === r
                    ? (e = !0)
                    : ((t[r] = this.$$options[r]),
                      'updateOn' === r && (t.updateOnDefault = this.$$options.updateOnDefault))
                  : 'updateOn' === r &&
                    ((t.updateOnDefault = !1),
                    (t[r] = tt(
                      n.replace(zo, function() {
                        return (t.updateOnDefault = !0), ' ';
                      })
                    )));
              },
              this
            ),
            e && (delete t['*'], Jo(t, this.$$options)),
            Jo(t, Lo.$$options),
            new Wo(t)
          );
        }
      }),
        (Lo = new Wo({
          updateOn: '',
          updateOnDefault: !0,
          debounce: 0,
          getterSetter: !1,
          allowInvalid: !1,
          timezone: null
        }));
      var Go = function() {
        function t(t, e) {
          (this.$$attrs = t), (this.$$scope = e);
        }
        return (
          (t.$inject = ['$attrs', '$scope']),
          (t.prototype = {
            $onInit: function() {
              var t = this.parentCtrl ? this.parentCtrl.$options : Lo,
                e = this.$$scope.$eval(this.$$attrs.ngModelOptions);
              this.$options = t.createChild(e);
            }
          }),
          {
            restrict: 'A',
            priority: 10,
            require: { parentCtrl: '?^^ngModelOptions' },
            bindToController: !0,
            controller: t
          }
        );
      };
      function Jo(t, e) {
        x(e, function(e, n) {
          U(t[n]) || (t[n] = e);
        });
      }
      var Ko = Mi({ terminal: !0, priority: 1e3 }),
        Yo = i('ngOptions'),
        Zo = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        Qo = [
          '$compile',
          '$document',
          '$parse',
          function(e, n, r) {
            var i = t.document.createElement('option'),
              o = t.document.createElement('optgroup');
            return {
              restrict: 'A',
              terminal: !0,
              require: ['select', 'ngModel'],
              link: {
                pre: function(t, e, n, r) {
                  r[0].registerOption = V;
                },
                post: function(t, a, s, u) {
                  for (
                    var c = u[0], l = u[1], h = s.multiple, p = 0, d = a.children(), v = d.length;
                    p < v;
                    p++
                  )
                    if ('' === d[p].value) {
                      (c.hasEmptyOption = !0), (c.emptyOption = d.eq(p));
                      break;
                    }
                  a.empty();
                  var $,
                    m = !!c.emptyOption;
                  f(i.cloneNode(!1)).val('?');
                  var g = (function(t, e, n) {
                      var i = t.match(Zo);
                      if (!i)
                        throw Yo(
                          'iexp',
                          "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",
                          t,
                          wt(e)
                        );
                      var o = i[5] || i[7],
                        a = i[6],
                        s = / as /.test(i[0]) && i[1],
                        u = i[9],
                        c = r(i[2] ? i[1] : o),
                        l = (s && r(s)) || c,
                        f = u && r(u),
                        h = u
                          ? function(t, e) {
                              return f(n, e);
                            }
                          : function(t) {
                              return De(t);
                            },
                        p = function(t, e) {
                          return h(t, y(t, e));
                        },
                        d = r(i[2] || i[1]),
                        v = r(i[3] || ''),
                        $ = r(i[4] || ''),
                        m = r(i[8]),
                        g = {},
                        y = a
                          ? function(t, e) {
                              return (g[a] = e), (g[o] = t), g;
                            }
                          : function(t) {
                              return (g[o] = t), g;
                            };
                      function b(t, e, n, r, i) {
                        (this.selectValue = t),
                          (this.viewValue = e),
                          (this.label = n),
                          (this.group = r),
                          (this.disabled = i);
                      }
                      function w(t) {
                        var e;
                        if (!a && S(t)) e = t;
                        else
                          for (var n in ((e = []), t))
                            t.hasOwnProperty(n) && '$' !== n.charAt(0) && e.push(n);
                        return e;
                      }
                      return {
                        trackBy: u,
                        getTrackByValue: p,
                        getWatchables: r(m, function(t) {
                          for (var e = [], r = w((t = t || [])), o = r.length, a = 0; a < o; a++) {
                            var s = t === r ? a : r[a],
                              u = t[s],
                              c = y(u, s),
                              l = h(u, c);
                            if ((e.push(l), i[2] || i[1])) {
                              var f = d(n, c);
                              e.push(f);
                            }
                            if (i[4]) {
                              var p = $(n, c);
                              e.push(p);
                            }
                          }
                          return e;
                        }),
                        getOptions: function() {
                          for (
                            var t = [], e = {}, r = m(n) || [], i = w(r), o = i.length, a = 0;
                            a < o;
                            a++
                          ) {
                            var s = r === i ? a : i[a],
                              c = r[s],
                              f = y(c, s),
                              g = l(n, f),
                              S = h(g, f),
                              x = new b(S, g, d(n, f), v(n, f), $(n, f));
                            t.push(x), (e[S] = x);
                          }
                          return {
                            items: t,
                            selectValueMap: e,
                            getOptionFromViewValue: function(t) {
                              return e[p(t)];
                            },
                            getViewValueFromOption: function(t) {
                              return u ? at(t.viewValue) : t.viewValue;
                            }
                          };
                        }
                      };
                    })(s.ngOptions, a, t),
                    y = n[0].createDocumentFragment();
                  function b(t, e) {
                    var n = i.cloneNode(!1);
                    e.appendChild(n),
                      (function(t, e) {
                        (t.element = e),
                          (e.disabled = t.disabled),
                          t.label !== e.label && ((e.label = t.label), (e.textContent = t.label)),
                          (e.value = t.selectValue);
                      })(t, n);
                  }
                  function w(t) {
                    var e = $.getOptionFromViewValue(t),
                      n = e && e.element;
                    return n && !n.selected && (n.selected = !0), e;
                  }
                  (c.generateUnknownOptionValue = function(t) {
                    return '?';
                  }),
                    h
                      ? ((c.writeValue = function(t) {
                          if ($) {
                            var e = (t && t.map(w)) || [];
                            $.items.forEach(function(t) {
                              t.element.selected && !it(e, t) && (t.element.selected = !1);
                            });
                          }
                        }),
                        (c.readValue = function() {
                          var t = [];
                          return (
                            x(a.val() || [], function(e) {
                              var n = $.selectValueMap[e];
                              n && !n.disabled && t.push($.getViewValueFromOption(n));
                            }),
                            t
                          );
                        }),
                        g.trackBy &&
                          t.$watchCollection(
                            function() {
                              if (z(l.$viewValue))
                                return l.$viewValue.map(function(t) {
                                  return g.getTrackByValue(t);
                                });
                            },
                            function() {
                              l.$render();
                            }
                          ))
                      : ((c.writeValue = function(t) {
                          if ($) {
                            var e = a[0].options[a[0].selectedIndex],
                              n = $.getOptionFromViewValue(t);
                            e && e.removeAttribute('selected'),
                              n
                                ? (a[0].value !== n.selectValue &&
                                    (c.removeUnknownOption(),
                                    (a[0].value = n.selectValue),
                                    (n.element.selected = !0)),
                                  n.element.setAttribute('selected', 'selected'))
                                : c.selectUnknownOrEmptyOption(t);
                          }
                        }),
                        (c.readValue = function() {
                          var t = $.selectValueMap[a.val()];
                          return t && !t.disabled
                            ? (c.unselectEmptyOption(),
                              c.removeUnknownOption(),
                              $.getViewValueFromOption(t))
                            : null;
                        }),
                        g.trackBy &&
                          t.$watch(
                            function() {
                              return g.getTrackByValue(l.$viewValue);
                            },
                            function() {
                              l.$render();
                            }
                          )),
                    m &&
                      (e(c.emptyOption)(t),
                      a.prepend(c.emptyOption),
                      c.emptyOption[0].nodeType === zt
                        ? ((c.hasEmptyOption = !1),
                          (c.registerOption = function(t, e) {
                            '' === e.val() &&
                              ((c.hasEmptyOption = !0),
                              (c.emptyOption = e),
                              c.emptyOption.removeClass('ng-scope'),
                              l.$render(),
                              e.on('$destroy', function() {
                                var t = c.$isEmptyOptionSelected();
                                (c.hasEmptyOption = !1), (c.emptyOption = void 0), t && l.$render();
                              }));
                          }))
                        : c.emptyOption.removeClass('ng-scope')),
                    t.$watchCollection(g.getWatchables, function() {
                      var t = $ && c.readValue();
                      if ($)
                        for (var e = $.items.length - 1; e >= 0; e--) {
                          var n = $.items[e];
                          U(n.group) ? Re(n.element.parentNode) : Re(n.element);
                        }
                      var r = {};
                      if (
                        (($ = g.getOptions()).items.forEach(function(t) {
                          var e;
                          U(t.group)
                            ? ((e = r[t.group]) ||
                                ((e = o.cloneNode(!1)),
                                y.appendChild(e),
                                (e.label = null === t.group ? 'null' : t.group),
                                (r[t.group] = e)),
                              b(t, e))
                            : b(t, y);
                        }),
                        a[0].appendChild(y),
                        l.$render(),
                        !l.$isEmpty(t))
                      ) {
                        var i = c.readValue(),
                          s = g.trackBy || h;
                        (s ? ut(t, i) : t === i) || (l.$setViewValue(i), l.$render());
                      }
                    });
                }
              }
            };
          }
        ],
        Xo = [
          '$locale',
          '$interpolate',
          '$log',
          function(t, e, n) {
            var r = /{}/g,
              i = /^when(Minus)?(.+)$/;
            return {
              link: function(o, a, s) {
                var c,
                  l = s.count,
                  f = s.$attr.when && a.attr(s.$attr.when),
                  h = s.offset || 0,
                  p = o.$eval(f) || {},
                  d = {},
                  v = e.startSymbol(),
                  $ = e.endSymbol(),
                  m = v + l + '-' + h + $,
                  g = b.noop;
                function y(t) {
                  a.text(t || '');
                }
                x(s, function(t, e) {
                  var n = i.exec(e);
                  if (n) {
                    var r = (n[1] ? '-' : '') + u(n[2]);
                    p[r] = a.attr(s.$attr[e]);
                  }
                }),
                  x(p, function(t, n) {
                    d[n] = e(t.replace(r, m));
                  }),
                  o.$watch(l, function(e) {
                    var r = parseFloat(e),
                      i = T(r);
                    if ((i || r in p || (r = t.pluralCat(r - h)), !(r === c || (i && T(c))))) {
                      g();
                      var a = d[r];
                      D(a)
                        ? (null != e &&
                            n.debug("ngPluralize: no rule defined for '" + r + "' in " + f),
                          (g = V),
                          y())
                        : (g = o.$watch(a, y)),
                        (c = r);
                    }
                  });
              }
            };
          }
        ],
        ta = [
          '$parse',
          '$animate',
          '$compile',
          function(t, e, n) {
            var r = i('ngRepeat'),
              o = function(t, e, n, r, i, o, a) {
                (t[n] = r),
                  i && (t[i] = o),
                  (t.$index = e),
                  (t.$first = 0 === e),
                  (t.$last = e === a - 1),
                  (t.$middle = !(t.$first || t.$last)),
                  (t.$odd = !(t.$even = 0 == (1 & e)));
              },
              a = function(t) {
                return t.clone[0];
              },
              u = function(t) {
                return t.clone[t.clone.length - 1];
              };
            return {
              restrict: 'A',
              multiElement: !0,
              transclude: 'element',
              priority: 1e3,
              terminal: !0,
              $$tlb: !0,
              compile: function(i, c) {
                var l = c.ngRepeat,
                  f = n.$$createComment('end ngRepeat', l),
                  h = l.match(
                    /^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/
                  );
                if (!h)
                  throw r(
                    'iexp',
                    "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
                    l
                  );
                var p = h[1],
                  d = h[2],
                  v = h[3],
                  $ = h[4];
                if (!(h = p.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/)))
                  throw r(
                    'iidexp',
                    "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",
                    p
                  );
                var m,
                  g,
                  y,
                  b,
                  w = h[3] || h[1],
                  _ = h[2];
                if (
                  v &&
                  (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(v) ||
                    /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(
                      v
                    ))
                )
                  throw r(
                    'badident',
                    "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",
                    v
                  );
                var E = { $id: De };
                return (
                  $
                    ? (m = t($))
                    : ((y = function(t, e) {
                        return De(e);
                      }),
                      (b = function(t) {
                        return t;
                      })),
                  function(t, n, i, c, h) {
                    m &&
                      (g = function(e, n, r) {
                        return _ && (E[_] = e), (E[w] = n), (E.$index = r), m(t, E);
                      });
                    var p = Ft();
                    t.$watchCollection(d, function(i) {
                      var c,
                        d,
                        $,
                        m,
                        E,
                        C,
                        O,
                        R,
                        k,
                        P,
                        A,
                        T,
                        j = n[0],
                        V = Ft();
                      if ((v && (t[v] = i), S(i))) (k = i), (R = g || y);
                      else
                        for (var M in ((R = g || b), (k = []), i))
                          s.call(i, M) && '$' !== M.charAt(0) && k.push(M);
                      for (m = k.length, A = new Array(m), c = 0; c < m; c++)
                        if (((E = i === k ? c : k[c]), (C = i[E]), (O = R(E, C, c)), p[O]))
                          (P = p[O]), delete p[O], (V[O] = P), (A[c] = P);
                        else {
                          if (V[O])
                            throw (x(A, function(t) {
                              t && t.scope && (p[t.id] = t);
                            }),
                            r(
                              'dupes',
                              "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",
                              l,
                              O,
                              C
                            ));
                          (A[c] = { id: O, scope: void 0, clone: void 0 }), (V[O] = !0);
                        }
                      for (var I in p) {
                        if (((T = Ht((P = p[I]).clone)), e.leave(T), T[0].parentNode))
                          for (c = 0, d = T.length; c < d; c++) T[c].$$NG_REMOVED = !0;
                        P.scope.$destroy();
                      }
                      for (c = 0; c < m; c++)
                        if (((E = i === k ? c : k[c]), (C = i[E]), (P = A[c]).scope)) {
                          $ = j;
                          do {
                            $ = $.nextSibling;
                          } while ($ && $.$$NG_REMOVED);
                          a(P) !== $ && e.move(Ht(P.clone), null, j),
                            (j = u(P)),
                            o(P.scope, c, w, C, _, E, m);
                        } else
                          h(function(t, n) {
                            P.scope = n;
                            var r = f.cloneNode(!1);
                            (t[t.length++] = r),
                              e.enter(t, null, j),
                              (j = r),
                              (P.clone = t),
                              (V[P.id] = P),
                              o(P.scope, c, w, C, _, E, m);
                          });
                      p = V;
                    });
                  }
                );
              }
            };
          }
        ],
        ea = [
          '$animate',
          function(t) {
            return {
              restrict: 'A',
              multiElement: !0,
              link: function(e, n, r) {
                e.$watch(r.ngShow, function(e) {
                  t[e ? 'removeClass' : 'addClass'](n, 'ng-hide', {
                    tempClasses: 'ng-hide-animate'
                  });
                });
              }
            };
          }
        ],
        na = [
          '$animate',
          function(t) {
            return {
              restrict: 'A',
              multiElement: !0,
              link: function(e, n, r) {
                e.$watch(r.ngHide, function(e) {
                  t[e ? 'addClass' : 'removeClass'](n, 'ng-hide', {
                    tempClasses: 'ng-hide-animate'
                  });
                });
              }
            };
          }
        ],
        ra = Mi(function(t, e, n) {
          t.$watch(
            n.ngStyle,
            function(t, n) {
              n &&
                t !== n &&
                x(n, function(t, n) {
                  e.css(n, '');
                }),
                t && e.css(t);
            },
            !0
          );
        }),
        ia = [
          '$animate',
          '$compile',
          function(t, e) {
            return {
              require: 'ngSwitch',
              controller: [
                '$scope',
                function() {
                  this.cases = {};
                }
              ],
              link: function(n, r, i, o) {
                var a = i.ngSwitch || i.on,
                  s = [],
                  u = [],
                  c = [],
                  l = [],
                  f = function(t, e) {
                    return function(n) {
                      !1 !== n && t.splice(e, 1);
                    };
                  };
                n.$watch(a, function(n) {
                  for (var r, i; c.length; ) t.cancel(c.pop());
                  for (r = 0, i = l.length; r < i; ++r) {
                    var a = Ht(u[r].clone);
                    l[r].$destroy(), (c[r] = t.leave(a)).done(f(c, r));
                  }
                  (u.length = 0),
                    (l.length = 0),
                    (s = o.cases['!' + n] || o.cases['?']) &&
                      x(s, function(n) {
                        n.transclude(function(r, i) {
                          l.push(i);
                          var o = n.element;
                          r[r.length++] = e.$$createComment('end ngSwitchWhen');
                          var a = { clone: r };
                          u.push(a), t.enter(r, o.parent(), o);
                        });
                      });
                });
              }
            };
          }
        ],
        oa = Mi({
          transclude: 'element',
          priority: 1200,
          require: '^ngSwitch',
          multiElement: !0,
          link: function(t, e, n, r, i) {
            x(
              n.ngSwitchWhen
                .split(n.ngSwitchWhenSeparator)
                .sort()
                .filter(function(t, e, n) {
                  return n[e - 1] !== t;
                }),
              function(t) {
                (r.cases['!' + t] = r.cases['!' + t] || []),
                  r.cases['!' + t].push({ transclude: i, element: e });
              }
            );
          }
        }),
        aa = Mi({
          transclude: 'element',
          priority: 1200,
          require: '^ngSwitch',
          multiElement: !0,
          link: function(t, e, n, r, i) {
            (r.cases['?'] = r.cases['?'] || []), r.cases['?'].push({ transclude: i, element: e });
          }
        }),
        sa = i('ngTransclude'),
        ua = [
          '$compile',
          function(t) {
            return {
              restrict: 'EAC',
              compile: function(e) {
                var n = t(e.contents());
                return (
                  e.empty(),
                  function(t, e, r, i, o) {
                    if (!o)
                      throw sa(
                        'orphan',
                        'Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}',
                        wt(e)
                      );
                    r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = '');
                    var a = r.ngTransclude || r.ngTranscludeSlot;
                    function s() {
                      n(t, function(t) {
                        e.append(t);
                      });
                    }
                    o(
                      function(t, n) {
                        t.length &&
                        (function(t) {
                          for (var e = 0, n = t.length; e < n; e++) {
                            var r = t[e];
                            if (r.nodeType !== Bt || r.nodeValue.trim()) return !0;
                          }
                        })(t)
                          ? e.append(t)
                          : (s(), n.$destroy());
                      },
                      null,
                      a
                    ),
                      a && !o.isSlotFilled(a) && s();
                  }
                );
              }
            };
          }
        ],
        ca = [
          '$templateCache',
          function(t) {
            return {
              restrict: 'E',
              terminal: !0,
              compile: function(e, n) {
                if ('text/ng-template' === n.type) {
                  var r = n.id,
                    i = e[0].text;
                  t.put(r, i);
                }
              }
            };
          }
        ],
        la = { $setViewValue: V, $render: V };
      function fa(t, e) {
        t.prop('selected', e), t.attr('selected', e);
      }
      var ha = [
          '$element',
          '$scope',
          function(e, n) {
            var r = this,
              i = new Fe();
            (r.selectValueMap = {}),
              (r.ngModelCtrl = la),
              (r.multiple = !1),
              (r.unknownOption = f(t.document.createElement('option'))),
              (r.hasEmptyOption = !1),
              (r.emptyOption = void 0),
              (r.renderUnknownOption = function(t) {
                var n = r.generateUnknownOptionValue(t);
                r.unknownOption.val(n),
                  e.prepend(r.unknownOption),
                  fa(r.unknownOption, !0),
                  e.val(n);
              }),
              (r.updateUnknownOption = function(t) {
                var n = r.generateUnknownOptionValue(t);
                r.unknownOption.val(n), fa(r.unknownOption, !0), e.val(n);
              }),
              (r.generateUnknownOptionValue = function(t) {
                return '? ' + De(t) + ' ?';
              }),
              (r.removeUnknownOption = function() {
                r.unknownOption.parent() && r.unknownOption.remove();
              }),
              (r.selectEmptyOption = function() {
                r.emptyOption && (e.val(''), fa(r.emptyOption, !0));
              }),
              (r.unselectEmptyOption = function() {
                r.hasEmptyOption && fa(r.emptyOption, !1);
              }),
              n.$on('$destroy', function() {
                r.renderUnknownOption = V;
              }),
              (r.readValue = function() {
                var t = e.val(),
                  n = t in r.selectValueMap ? r.selectValueMap[t] : t;
                return r.hasOption(n) ? n : null;
              }),
              (r.writeValue = function(t) {
                var n = e[0].options[e[0].selectedIndex];
                if ((n && fa(f(n), !1), r.hasOption(t))) {
                  r.removeUnknownOption();
                  var i = De(t);
                  e.val(i in r.selectValueMap ? i : t);
                  var o = e[0].options[e[0].selectedIndex];
                  fa(f(o), !0);
                } else r.selectUnknownOrEmptyOption(t);
              }),
              (r.addOption = function(t, e) {
                if (e[0].nodeType !== zt) {
                  Dt(t, '"option value"'),
                    '' === t && ((r.hasEmptyOption = !0), (r.emptyOption = e));
                  var n = i.get(t) || 0;
                  i.set(t, n + 1), a();
                }
              }),
              (r.removeOption = function(t) {
                var e = i.get(t);
                e &&
                  (1 === e
                    ? (i.delete(t), '' === t && ((r.hasEmptyOption = !1), (r.emptyOption = void 0)))
                    : i.set(t, e - 1));
              }),
              (r.hasOption = function(t) {
                return !!i.get(t);
              }),
              (r.$hasEmptyOption = function() {
                return r.hasEmptyOption;
              }),
              (r.$isUnknownOptionSelected = function() {
                return e[0].options[0] === r.unknownOption[0];
              }),
              (r.$isEmptyOptionSelected = function() {
                return r.hasEmptyOption && e[0].options[e[0].selectedIndex] === r.emptyOption[0];
              }),
              (r.selectUnknownOrEmptyOption = function(t) {
                null == t && r.emptyOption
                  ? (r.removeUnknownOption(), r.selectEmptyOption())
                  : r.unknownOption.parent().length
                    ? r.updateUnknownOption(t)
                    : r.renderUnknownOption(t);
              });
            var o = !1;
            function a() {
              o ||
                ((o = !0),
                n.$$postDigest(function() {
                  (o = !1), r.ngModelCtrl.$render();
                }));
            }
            var s = !1;
            function u(t) {
              s ||
                ((s = !0),
                n.$$postDigest(function() {
                  n.$$destroyed ||
                    ((s = !1),
                    r.ngModelCtrl.$setViewValue(r.readValue()),
                    t && r.ngModelCtrl.$render());
                }));
            }
            r.registerOption = function(t, e, n, i, o) {
              if (n.$attr.ngValue) {
                var s,
                  c = NaN;
                n.$observe('value', function(t) {
                  var n,
                    i = e.prop('selected');
                  U(c) && (r.removeOption(s), delete r.selectValueMap[c], (n = !0)),
                    (c = De(t)),
                    (s = t),
                    (r.selectValueMap[c] = t),
                    r.addOption(t, e),
                    e.attr('value', c),
                    n && i && u();
                });
              } else
                i
                  ? n.$observe('value', function(t) {
                      var n;
                      r.readValue();
                      var i = e.prop('selected');
                      U(s) && (r.removeOption(s), (n = !0)),
                        (s = t),
                        r.addOption(t, e),
                        n && i && u();
                    })
                  : o
                    ? t.$watch(o, function(t, i) {
                        n.$set('value', t);
                        var o = e.prop('selected');
                        i !== t && r.removeOption(i), r.addOption(t, e), i && o && u();
                      })
                    : r.addOption(n.value, e);
              n.$observe('disabled', function(t) {
                ('true' === t || (t && e.prop('selected'))) &&
                  (r.multiple
                    ? u(!0)
                    : (r.ngModelCtrl.$setViewValue(null), r.ngModelCtrl.$render()));
              }),
                e.on('$destroy', function() {
                  var t = r.readValue(),
                    e = n.value;
                  r.removeOption(e),
                    a(),
                    ((r.multiple && t && -1 !== t.indexOf(e)) || t === e) && u(!0);
                });
            };
          }
        ],
        pa = function() {
          return {
            restrict: 'E',
            require: ['select', '?ngModel'],
            controller: ha,
            priority: 1,
            link: {
              pre: function(t, e, n, r) {
                var i = r[0],
                  o = r[1];
                if (!o) return void (i.registerOption = V);
                if (
                  ((i.ngModelCtrl = o),
                  e.on('change', function() {
                    i.removeUnknownOption(),
                      t.$apply(function() {
                        o.$setViewValue(i.readValue());
                      });
                  }),
                  n.multiple)
                ) {
                  (i.multiple = !0),
                    (i.readValue = function() {
                      var t = [];
                      return (
                        x(e.find('option'), function(e) {
                          if (e.selected && !e.disabled) {
                            var n = e.value;
                            t.push(n in i.selectValueMap ? i.selectValueMap[n] : n);
                          }
                        }),
                        t
                      );
                    }),
                    (i.writeValue = function(t) {
                      x(e.find('option'), function(e) {
                        var n = !!t && (it(t, e.value) || it(t, i.selectValueMap[e.value])),
                          r = e.selected;
                        n !== r && fa(f(e), n);
                      });
                    });
                  var a,
                    s = NaN;
                  t.$watch(function() {
                    s !== o.$viewValue ||
                      ut(a, o.$viewValue) ||
                      ((a = Jt(o.$viewValue)), o.$render()),
                      (s = o.$viewValue);
                  }),
                    (o.$isEmpty = function(t) {
                      return !t || 0 === t.length;
                    });
                }
              },
              post: function(t, e, n, r) {
                var i = r[1];
                if (!i) return;
                var o = r[0];
                i.$render = function() {
                  o.writeValue(i.$viewValue);
                };
              }
            }
          };
        },
        da = [
          '$interpolate',
          function(t) {
            return {
              restrict: 'E',
              priority: 100,
              compile: function(e, n) {
                var r, i;
                return (
                  U(n.ngValue) ||
                    (U(n.value)
                      ? (r = t(n.value, !0))
                      : (i = t(e.text(), !0)) || n.$set('value', e.text())),
                  function(t, e, n) {
                    var o = e.parent(),
                      a = o.data('$selectController') || o.parent().data('$selectController');
                    a && a.registerOption(t, e, n, r, i);
                  }
                );
              }
            };
          }
        ],
        va = function() {
          return {
            restrict: 'A',
            require: '?ngModel',
            link: function(t, e, n, r) {
              r &&
                ((n.required = !0),
                (r.$validators.required = function(t, e) {
                  return !n.required || !r.$isEmpty(e);
                }),
                n.$observe('required', function() {
                  r.$validate();
                }));
            }
          };
        },
        $a = function() {
          return {
            restrict: 'A',
            require: '?ngModel',
            link: function(t, e, n, r) {
              if (r) {
                var o,
                  a = n.ngPattern || n.pattern;
                n.$observe('pattern', function(t) {
                  if ((q(t) && t.length > 0 && (t = new RegExp('^' + t + '$')), t && !t.test))
                    throw i('ngPattern')(
                      'noregexp',
                      'Expected {0} to be a RegExp but was {1}. Element: {2}',
                      a,
                      t,
                      wt(e)
                    );
                  (o = t || void 0), r.$validate();
                }),
                  (r.$validators.pattern = function(t, e) {
                    return r.$isEmpty(e) || D(o) || o.test(e);
                  });
              }
            }
          };
        },
        ma = function() {
          return {
            restrict: 'A',
            require: '?ngModel',
            link: function(t, e, n, r) {
              if (r) {
                var i = -1;
                n.$observe('maxlength', function(t) {
                  var e = A(t);
                  (i = T(e) ? -1 : e), r.$validate();
                }),
                  (r.$validators.maxlength = function(t, e) {
                    return i < 0 || r.$isEmpty(e) || e.length <= i;
                  });
              }
            }
          };
        },
        ga = function() {
          return {
            restrict: 'A',
            require: '?ngModel',
            link: function(t, e, n, r) {
              if (r) {
                var i = 0;
                n.$observe('minlength', function(t) {
                  (i = A(t) || 0), r.$validate();
                }),
                  (r.$validators.minlength = function(t, e) {
                    return r.$isEmpty(e) || e.length >= i;
                  });
              }
            }
          };
        };
      t.angular.bootstrap
        ? t.console && console.log('WARNING: Tried to load AngularJS more than once.')
        : (!(function() {
            var e;
            if (!Mt) {
              var n = lt();
              (h = D(n) ? t.jQuery : n ? t[n] : void 0) && h.fn.on
                ? ((f = h),
                  k(h.fn, {
                    scope: Pe.scope,
                    isolateScope: Pe.isolateScope,
                    controller: Pe.controller,
                    injector: Pe.injector,
                    inheritedData: Pe.inheritedData
                  }),
                  (e = h.cleanData),
                  (h.cleanData = function(t) {
                    for (var n, r, i = 0; null != (r = t[i]); i++)
                      (n = h._data(r, 'events')) && n.$destroy && h(r).triggerHandler('$destroy');
                    e(t);
                  }))
                : (f = de),
                (b.element = f),
                (Mt = !0);
            }
          })(),
          (function(e) {
            k(e, {
              errorHandlingConfig: n,
              bootstrap: Pt,
              copy: at,
              extend: k,
              merge: P,
              equals: ut,
              element: f,
              forEach: x,
              injector: Ze,
              noop: V,
              bind: pt,
              toJson: vt,
              fromJson: $t,
              identity: M,
              isUndefined: D,
              isDefined: U,
              isString: q,
              isFunction: G,
              isObject: H,
              isNumber: L,
              isElement: nt,
              isArray: z,
              version: Yt,
              isDate: B,
              lowercase: u,
              uppercase: c,
              callbacks: { $$counter: 0 },
              getTestability: Tt,
              reloadWithDebugInfo: At,
              $$minErr: i,
              $$csp: ct,
              $$encodeUriSegment: Et,
              $$encodeUriQuery: Ct,
              $$stringify: qt
            }),
              (p = (function(t) {
                var e = i('$injector'),
                  n = i('ng');
                function r(t, e, n) {
                  return t[e] || (t[e] = n());
                }
                var o = r(t, 'angular', Object);
                return (
                  (o.$$minErr = o.$$minErr || i),
                  r(o, 'module', function() {
                    var t = {};
                    return function(i, o, a) {
                      var s = {};
                      return (
                        (function(t, e) {
                          if ('hasOwnProperty' === t)
                            throw n('badname', 'hasOwnProperty is not a valid {0} name', e);
                        })(i, 'module'),
                        o && t.hasOwnProperty(i) && (t[i] = null),
                        r(t, i, function() {
                          if (!o)
                            throw e(
                              'nomod',
                              "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",
                              i
                            );
                          var t = [],
                            r = [],
                            u = [],
                            c = f('$injector', 'invoke', 'push', r),
                            l = {
                              _invokeQueue: t,
                              _configBlocks: r,
                              _runBlocks: u,
                              info: function(t) {
                                if (U(t)) {
                                  if (!H(t))
                                    throw n('aobj', "Argument '{0}' must be an object", 'value');
                                  return (s = t), this;
                                }
                                return s;
                              },
                              requires: o,
                              name: i,
                              provider: h('$provide', 'provider'),
                              factory: h('$provide', 'factory'),
                              service: h('$provide', 'service'),
                              value: f('$provide', 'value'),
                              constant: f('$provide', 'constant', 'unshift'),
                              decorator: h('$provide', 'decorator', r),
                              animation: h('$animateProvider', 'register'),
                              filter: h('$filterProvider', 'register'),
                              controller: h('$controllerProvider', 'register'),
                              directive: h('$compileProvider', 'directive'),
                              component: h('$compileProvider', 'component'),
                              config: c,
                              run: function(t) {
                                return u.push(t), this;
                              }
                            };
                          return a && c(a), l;
                          function f(e, n, r, i) {
                            return (
                              i || (i = t),
                              function() {
                                return i[r || 'push']([e, n, arguments]), l;
                              }
                            );
                          }
                          function h(e, n, r) {
                            return (
                              r || (r = t),
                              function(t, o) {
                                return (
                                  o && G(o) && (o.$$moduleName = i), r.push([e, n, arguments]), l
                                );
                              }
                            );
                          }
                        })
                      );
                    };
                  })
                );
              })(t))(
                'ng',
                ['ngLocale'],
                [
                  '$provide',
                  function(t) {
                    t.provider({ $$sanitizeUri: Lr }),
                      t
                        .provider('$compile', vn)
                        .directive({
                          a: Ii,
                          input: mo,
                          textarea: mo,
                          form: qi,
                          script: ca,
                          select: pa,
                          option: da,
                          ngBind: bo,
                          ngBindHtml: So,
                          ngBindTemplate: wo,
                          ngClass: Eo,
                          ngClassEven: Oo,
                          ngClassOdd: Co,
                          ngCloak: Ro,
                          ngController: ko,
                          ngForm: Li,
                          ngHide: na,
                          ngIf: To,
                          ngInclude: jo,
                          ngInit: Mo,
                          ngNonBindable: Ko,
                          ngPluralize: Xo,
                          ngRepeat: ta,
                          ngShow: ea,
                          ngStyle: ra,
                          ngSwitch: ia,
                          ngSwitchWhen: oa,
                          ngSwitchDefault: aa,
                          ngOptions: Qo,
                          ngTransclude: ua,
                          ngModel: Bo,
                          ngList: Io,
                          ngChange: xo,
                          pattern: $a,
                          ngPattern: $a,
                          required: va,
                          ngRequired: va,
                          minlength: ga,
                          ngMinlength: ga,
                          maxlength: ma,
                          ngMaxlength: ma,
                          ngValue: yo,
                          ngModelOptions: Go
                        })
                        .directive({ ngInclude: Vo })
                        .directive(Ni)
                        .directive(Po),
                      t.provider({
                        $anchorScroll: Qe,
                        $animate: an,
                        $animateCss: cn,
                        $$animateJs: rn,
                        $$animateQueue: on,
                        $$AnimateRunner: un,
                        $$animateAsyncRun: sn,
                        $browser: ln,
                        $cacheFactory: fn,
                        $controller: _n,
                        $document: En,
                        $$isDocumentHidden: Cn,
                        $exceptionHandler: On,
                        $filter: ci,
                        $$forceReflow: Rn,
                        $interpolate: Gn,
                        $interval: Jn,
                        $http: Ln,
                        $httpParamSerializer: In,
                        $httpParamSerializerJQLike: Nn,
                        $httpBackend: zn,
                        $xhrFactory: Bn,
                        $jsonpCallbacks: Kn,
                        $location: pr,
                        $log: dr,
                        $parse: Vr,
                        $rootScope: qr,
                        $q: Mr,
                        $$q: Ir,
                        $sce: Yr,
                        $sceDelegate: Kr,
                        $sniffer: Zr,
                        $templateCache: hn,
                        $templateRequest: Xr,
                        $$testability: ti,
                        $timeout: ei,
                        $window: ai,
                        $$rAF: Fr,
                        $$jqLite: Ne,
                        $$Map: qe,
                        $$cookieReader: ui
                      });
                  }
                ]
              ).info({ angularVersion: '1.6.10' });
          })(b),
          b.module(
            'ngLocale',
            [],
            [
              '$provide',
              function(t) {
                var e = 'one',
                  n = 'other';
                t.value('$locale', {
                  DATETIME_FORMATS: {
                    AMPMS: ['AM', 'PM'],
                    DAY: [
                      'Sunday',
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday'
                    ],
                    ERANAMES: ['Before Christ', 'Anno Domini'],
                    ERAS: ['BC', 'AD'],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December'
                    ],
                    SHORTDAY: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    SHORTMONTH: [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec'
                    ],
                    STANDALONEMONTH: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December'
                    ],
                    WEEKENDRANGE: [5, 6],
                    fullDate: 'EEEE, MMMM d, y',
                    longDate: 'MMMM d, y',
                    medium: 'MMM d, y h:mm:ss a',
                    mediumDate: 'MMM d, y',
                    mediumTime: 'h:mm:ss a',
                    short: 'M/d/yy h:mm a',
                    shortDate: 'M/d/yy',
                    shortTime: 'h:mm a'
                  },
                  NUMBER_FORMATS: {
                    CURRENCY_SYM: '$',
                    DECIMAL_SEP: '.',
                    GROUP_SEP: ',',
                    PATTERNS: [
                      {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: '-',
                        negSuf: '',
                        posPre: '',
                        posSuf: ''
                      },
                      {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: '-¤',
                        negSuf: '',
                        posPre: '¤',
                        posSuf: ''
                      }
                    ]
                  },
                  id: 'en-us',
                  localeID: 'en_US',
                  pluralCat: function(t, r) {
                    var i = 0 | t,
                      o = (function(t, e) {
                        var n = e;
                        void 0 === n &&
                          (n = Math.min(
                            (function(t) {
                              var e = (t += '').indexOf('.');
                              return -1 == e ? 0 : t.length - e - 1;
                            })(t),
                            3
                          ));
                        var r = Math.pow(10, n);
                        return { v: n, f: ((t * r) | 0) % r };
                      })(t, r);
                    return 1 == i && 0 == o.v ? e : n;
                  }
                });
              }
            ]
          ),
          f(function() {
            kt(t.document, Pt);
          }));
    })(window),
      !window.angular.$$csp().noInlineStyle &&
        window.angular
          .element(document.head)
          .prepend(
            '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'
          );
  },
  function(t, e, n) {
    'use strict';
    n.r(e);
    n(52), n(76);
  }
]);
