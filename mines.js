(this["webpackJsonp@blazecode/client-betbr"] = this["webpackJsonp@blazecode/client-betbr"] || []).push([
	[207, 31], {
		2258: function(e, a, t) {
			"use strict";
			t.r(a);
			var i = t(3),
				n = t(12),
				r = t(17),
				s = t(0),
				c = t.n(s),
				o = t(18),
				l = t(45),
				x = t(23),
				d = t(2581),
				m = t(2582),
				u = t(47),
				k = t(2412),
				p = t(62),
				h = t(2383),
				b = t(2422),
				f = t(19),
				y = t(2400),
				j = t(2423),
				g = t(37),
				v = t(2),
				O = "mines";
			var _ = Object(l.e)(Object(o.b)((function() {
					return {}
				}), (function(e) {
					return {
						openModal: function(a, t) {
							e(Object(x.g)(a, t))
						}
					}
				}))((function(e) {
					var a = e.game_mode,
						t = Object(p.useTranslate)(),
						l = Object(o.c)(),
						_ = Object(s.useState)(!1),
						G = Object(r.a)(_, 2),
						D = G[0],
						B = G[1],
						E = Object(o.d)((function(e) {
							return e.user.loggedIn
						})),
						A = Object(s.useReducer)((function(e) {
							return e + 1
						}), 0),
						V = Object(r.a)(A, 2)[1],
						S = c.a.createRef(null),
						w = c.a.createRef(null),
						N = Object(s.useState)({
							display_important: !1,
							posY: "",
							posX: ""
						}),
						F = Object(r.a)(N, 2),
						T = F[0],
						P = F[1],
						C = Object(o.d)((function(e) {
							return e.user.favorites
						}));
					Object(s.useEffect)((function() {
						var e = function() {
							var e = Object(n.a)(Object(i.a)().mark((function e() {
								return Object(i.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											try {
												(null === C || void 0 === C ? void 0 : C.filter((function(e) {
													return e.slug === O
												}))).length > 0 && B(!0)
											} catch (a) {}
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
						E && e()
					}), [C, E]);
					var L = localStorage.getItem("volume");
					L || (localStorage.setItem("volume", "1"), L = "1");
					var M = Object(u.a)() ? T.posY + 20 : T.posY,
						I = function() {
							document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement || document.msFullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(console.log())
						};
					return Object(v.jsxs)("div", {
						className: "casino-extras",
						ref: S,
						children: [Object(v.jsx)("div", {
							className: "first-column",
							children: Object(v.jsx)("a", {
								children: Object(v.jsx)("button", {
									className: "grey",
									onClick: function() {
										return I()
									},
									children: Object(v.jsx)(d.a, {})
								})
							})
						}), Object(v.jsxs)("div", {
							className: "second-column",
							children: [T.display_important ? Object(v.jsxs)("div", {
								className: "".concat(Object(u.a)() ? "grey-display-mobile" : "grey-display"),
								style: {
									top: M,
									left: "unset"
								},
								children: [Object(v.jsxs)("div", {
									className: "grey-display-one",
									children: [Object(v.jsx)("span", {
										onClick: function() {
											l(Object(x.g)("mines_how_to_play", {
												game_mode: a,
												type: "tutorial"
											}))
										},
										children: t("tutorial")
									}), Object(v.jsx)("div", {
										className: "provably-div",
										onClick: function() {
											l(Object(x.g)("provably_fair", {
												game_mode: a,
												type: "seeds"
											}))
										},
										children: t("provably_fair")
									}), Object(v.jsx)("span", {
										onClick: function() {
											l(Object(x.g)("mines_how_to_play", {
												game_mode: a,
												type: "rules"
											}))
										},
										children: t("rules")
									})]
								}), Object(v.jsx)("div", {
									className: "modal__second__row"
								})]
							}) : null, Object(v.jsx)("div", {
								className: "container-btn-share",
								children: Object(v.jsx)(k.a, {
									text: t("message_link_share", {
										gameName: "mines",
										brand: Object(g.b)()
									}),
									gameSlug: "mines",
									isMobile: Object(u.a)()
								})
							}), Object(v.jsx)("div", {
								className: "grey-important",
								children: Object(v.jsx)("button", {
									className: "grey",
									onClick: function() {
										var e = S.current,
											a = w.current;
										P({
											display_important: !T.display_important,
											posX: e.offsetLeft + (a.offsetLeft - 180),
											posY: e.offsetTop - 210
										})
									},
									ref: w,
									children: Object(v.jsx)(m.a, {})
								})
							}), E && Object(v.jsx)("div", {
								className: "fav-btn",
								children: Object(v.jsx)(h.a, {
									title: "favorite",
									children: Object(v.jsx)("button", {
										className: "grey",
										onClick: function() {
											D ? (y.a.deleteFromFavourites(O), l(Object(f.a)({
												message: t("favorite_removed")
											})), B(!1)) : (y.a.addToFavourites({
												slug: O
											}), l(Object(f.a)({
												message: t("favorite_added")
											})), B(!0))
										},
										children: Object(v.jsx)(b.a, {
											fill: D
										})
									})
								})
							}), Object(v.jsx)("div", {
								className: "volume volume-btn",
								children: Object(v.jsx)("button", {
									className: "grey",
									onClick: function() {
										var e = "0" === L ? "1" : "0";
										localStorage.setItem("volume", e), V()
									},
									children: "0" === L ? Object(v.jsx)("i", {
										className: "fa fa-volume-off"
									}) : Object(v.jsx)("i", {
										className: "fa fa-volume-up"
									})
								})
							}), Object(v.jsx)("a", {
								className: "volume-mobile",
								children: Object(v.jsx)("button", {
									className: "grey",
									onClick: function() {
										var e = "0" === L ? "1" : "0";
										localStorage.setItem("volume", e), V()
									},
									children: "0" === L ? Object(v.jsx)("i", {
										className: "fa fa-volume-off"
									}) : Object(v.jsx)("i", {
										className: "fa fa-volume-up"
									})
								})
							}), Object(v.jsx)("div", {
								className: "fairness-modal-link icon-history",
								onClick: function() {
									l(Object(x.g)("mines_history_user-v2"))
								},
								children: Object(v.jsx)("i", {
									className: "fas fa-history"
								})
							}), E && Object(v.jsx)(j.a, {
								game: "mines"
							})]
						})]
					})
				}))),
				G = (t(2532), t(2531), t(2455), t(648)),
				D = t(2482),
				B = t(445);

			function E(e) {
				var a = e.selectedWalletData,
					t = e.value,
					i = e.bonusAllowed,
					n = void 0 !== i && i,
					r = a.max_bet_amount,
					s = a.real_balance;
				if (t = parseFloat(t), isNaN(t)) return !1;
				var c = n ? r : s;
				return t >= B.a && t <= c
			}

			function A(e) {
				var a = e.selectedWalletData,
					t = e.value,
					i = e.bonusAllowed,
					n = void 0 !== i && i,
					r = a.real_balance,
					s = a.bonus_balance,
					c = a.balance,
					o = a.maximum_bonus_bet_allowed,
					l = a.max_bet_amount;
				r = parseFloat(r), s = parseFloat(s), c = parseFloat(c), t = parseFloat(t);
				var x = n ? c : r;
				if (!isNaN(t)) {
					if (+(t - r).toFixed(2) > o && s > o) return parseFloat(l).toFixed(2);
					if (t > x) return parseFloat(x).toFixed(2);
					if (t <= 0) return ""
				}
				return t.toFixed(2)
			}
			var V = Object(G.a)((function(e) {
					var a = e.selectedWalletData,
						t = e.value,
						i = e.testId,
						n = e.onChange,
						c = e.onBlur,
						l = e.gameStarted,
						x = Object(s.useState)(!1),
						d = Object(r.a)(x, 2),
						m = d[0],
						u = d[1],
						k = Object(p.useTranslate)(),
						h = Object(o.d)((function(e) {
							return e.app.bonusBettingGames
						})),
						b = null === h || void 0 === h ? void 0 : h.includes("mines"),
						f = function() {
							var e = a.real_balance,
								i = a.bonus_balance,
								n = a.balance,
								r = a.maximum_bonus_bet_allowed;
							e = parseFloat(e), i = parseFloat(i), n = parseFloat(n);
							var s = parseFloat(t),
								c = b ? n : e;
							if (!isNaN(s) && m) {
								if (+(s - e).toFixed(2) > r && i > r) return k("max_bonus_input_tooltip", {
									max: "".concat(a.symbol, " ").concat((+r).toFixed(2))
								});
								if (s > c) return k("input_maximum_not_met", {
									max: "".concat(a.symbol, " ").concat(parseFloat(c).toFixed(2))
								});
								if (t <= 0) return k("input_minimum_not_met", {
									min: "".concat(a.symbol, " 0.1")
								})
							}
						}();
					return Object(v.jsxs)("div", {
						className: "balance-input-field",
						children: [Object(v.jsx)(D.a, {
							testId: i,
							type: "number",
							tooltip: {
								enabled: !!f && m,
								text: f,
								anchorPoint: "bottom-left"
							},
							onChange: function(e) {
								n(e.target.value, E({
									selectedWalletData: a,
									value: e.target.value,
									bonusAllowed: b
								}))
							},
							value: t,
							label: k("amount"),
							onFocus: function(e) {
								u(!0), e.target.select()
							},
							onBlur: function(e) {
								u(!1), c(e)
							},
							disabled: l
						}), Object(v.jsx)("div", {
							className: "emblem",
							children: a.symbol
						})]
					})
				})),
				S = t(116),
				w = (t(3883), t(36)),
				N = t(25),
				F = function(e) {
					return e.minesV2
				},
				T = Object(N.a)([F], (function(e) {
					return e.mines
				})),
				P = Object(N.a)([F], (function(e) {
					return e.gems
				})),
				C = Object(N.a)([F], (function(e) {
					return e.payout_multiplier
				})),
				L = Object(N.a)([F], (function(e) {
					return e.payout_multiplier_on_next
				})),
				M = Object(N.a)([F], (function(e) {
					return e.winnings
				})),
				I = function(e) {
					var a = e.numbersMines,
						t = e.setNumbersMines,
						i = e.gameStarted,
						n = e.verifyTitle,
						c = [2, 5, 10],
						l = Object(s.useState)((function() {
							return !c.find((function(e) {
								return e === a
							}))
						})),
						x = Object(r.a)(l, 2),
						d = (x[0], x[1]),
						m = Object(p.useTranslate)(),
						u = Object(o.d)(T);
					Object(s.useEffect)((function() {
						d((function() {
							return !c.find((function(e) {
								return e === a
							}))
						}))
					}), [c, a]);
					for (var k = [], h = 2; h < 25; h++) k.push(h);
					var b = Object(s.useRef)(null);
					return Object(v.jsxs)("div", {
						id: "select-mines",
						className: i && "disabled",
						children: [n ? Object(v.jsx)("span", {
							className: "verify-title",
							children: "Mines"
						}) : Object(v.jsx)("span", {
							className: "title-mines",
							children: m("mines_title")
						}), Object(v.jsxs)("div", {
							className: "new-numbers-mines",
							children: [Object(v.jsx)("select", {
								name: "select",
								"data-testid": "mines-select",
								onChange: function() {
									return function() {
										var e = b.current,
											a = e.options[e.selectedIndex].value;
										t(parseInt(a))
									}()
								},
								ref: b,
								children: k.map((function(e, a) {
									return Object(v.jsx)("option", {
										value: e,
										selected: e === u ? "selected" : null,
										children: e
									}, a)
								}))
							}), Object(v.jsx)("div", {
								className: "mines-arrow",
								children: Object(v.jsx)(w.CDNImage, {
									src: "/images/games-mines/arrow-down-select.svg",
									alt: ""
								})
							})]
						})]
					})
				},
				R = t(1),
				U = t(14),
				z = t(123),
				W = t(51),
				H = t(76),
				Y = t(136),
				Z = t(79),
				q = t(98),
				J = t(52),
				X = t.n(J);

			function K(e) {
				return function(a) {
					H.a.get("/games/mines").then((function(e) {
						! function(e, a) {
							var t = a.payoutMultiplierOnNext;
							a.payout_multiplier = a.payoutMultiplier;
							var i = [];
							if (a.is_open = a.roundOpen, a.hit_mine = a.hitMine, a.number_of_mines = a.numberOfMines, a.number_of_gems = a.numberOfGems, a.number_of_mines_left = a.numberOfMinesLeft, a.can_cashout = a.canCashout, Object.assign(a, a.wallet_params), a.is_free_bet = a.wallet_params.free_bet, a.currency_type = a.currency, a.is_open)
								for (var n = 0; n < a.tiles.length; n++) "diamond" !== a.tiles[n] && "mine" !== a.tiles[n] || i.push(n);
							else a.tiles = Object(U.a)(new Array(25)).map((function() {
								return "hidden"
							}));
							e({
								type: z.j,
								payload: Object(R.a)(Object(R.a)({}, a), {}, {
									loading: !0,
									positionsSelected: i,
									payout_multiplier_on_next: t,
									winnings: 0
								})
							})
						}(a, e)
					})).catch((function(e) {
						a({
							type: z.e,
							payload: {
								loading: !1,
								error: e
							}
						})
					})), e && H.a.get("/free-bets").then((function(e) {
						a({
							type: W.A.USER_BONUS_ROUNDS_UPDATE,
							payload: e.map((function(e) {
								return Object(R.a)(Object(R.a)({}, e), {}, {
									type: "mines" === e.type ? "mines-rewired" : e.type
								})
							}))
						})
					}))
				}
			}

			function Q(e, a, t) {
				return function(i, n) {
					var r = n();
					return H.a.post("/games/mines", {
						walletParams: Object(Y.a)({
							amount: t,
							currency: a,
							free_bet: !1
						}),
						gameParams: {
							number_of_mines: e
						},
						user: {
							username: r.user.username,
							rank: r.user.rank
						}
					}).then((function(e) {
						i({
							type: z.k,
							payload: {
								betSlipId: e,
								loading: !0,
								positionsSelected: []
							}
						}), Object(Z.track)(q.default.BetPlaced, {
							timestamp: X()().format("YYYY-MM-DD HH:mm:ss"),
							category: "original games",
							amount: t,
							currency: a,
							button_clicked: "mines-v2-bet__button"
						})
					})).catch((function(e) {
						i(Object(f.a)({
							type: "error",
							translation_code: "error_".concat(e.code)
						})), i({
							type: z.e,
							payload: {
								loading: !1,
								error: e
							}
						})
					}))
				}
			}

			function $(e) {
				var a = {
					bet_slip_id: e,
					type: "mines-cashout"
				};
				return function(e) {
					return H.a.post("/games/mines/play", a).catch((function(a) {
						e({
							type: z.e,
							payload: {
								loading: !1,
								error: a
							}
						})
					}))
				}
			}
			var ee = t(282),
				ae = (t(3884), function() {
					var e = Object(p.useTranslate)(),
						a = Object(o.d)(C),
						t = Object(o.d)(L),
						i = Object(v.jsxs)("div", {
							className: "multiplier_container",
							children: [Object(v.jsxs)("div", {
								className: "current_multiplier_container",
								children: [Object(v.jsx)("span", {
									className: "current_multiplier_title",
									children: e("current_multiplier")
								}), Object(v.jsx)("div", {
									className: "current_multiplier",
									children: Object(v.jsx)("span", {
										children: a
									})
								})]
							}), Object(v.jsxs)("div", {
								className: "nextMultiplier_container",
								children: [Object(v.jsx)("span", {
									className: "nextMultiplier_title",
									children: e("next_multiplier")
								}), Object(v.jsx)("div", {
									className: "nextMultiplier",
									children: Object(v.jsx)("span", {
										children: t
									})
								})]
							})]
						}),
						n = Object(v.jsxs)("div", {
							className: "next-div",
							children: [Object(v.jsx)("span", {
								className: "next-multiplier",
								children: e("current_multiplier")
							}), Object(v.jsx)("div", {
								className: "next-tile",
								children: Object(v.jsx)("span", {
									children: a
								})
							}), Object(v.jsx)("span", {
								className: "next-multiplier",
								children: e("next_multiplier")
							}), Object(v.jsx)("div", {
								className: "next-tile",
								children: Object(v.jsx)("span", {
									children: t
								})
							})]
						});
					return Object(u.a)() ? i : n
				}),
				te = function() {
					var e = Object(o.d)(T),
						a = Object(o.d)(P);
					return Object(v.jsxs)("div", {
						className: "mines_gems_container",
						children: [Object(v.jsxs)("div", {
							className: "mines_number_container",
							children: [Object(v.jsx)("span", {
								className: "mines_number_title",
								children: "MINES"
							}), Object(v.jsx)("div", {
								className: "mines_number",
								children: e
							})]
						}), Object(v.jsxs)("div", {
							className: "gems_number_container",
							children: [Object(v.jsx)("span", {
								className: "gems_number_title",
								children: "GEMS"
							}), Object(v.jsx)("div", {
								className: "gems_number",
								children: a
							})]
						})]
					})
				},
				ie = t(143),
				ne = t(71),
				re = t(2522),
				se = t(35),
				ce = t(428);
			var oe = Object(G.a)(Object(o.b)((function(e) {
					return {
						loggedIn: e.user.loggedIn,
						gameStarted: e.minesV2.gameStarted,
						mines: e.minesV2.mines,
						amount: e.minesV2.amount,
						payout_multiplier: e.minesV2.payout_multiplier,
						can_cashout: e.minesV2.can_cashout,
						positionSelected: e.minesV2.positionsSelected,
						typeOpen: e.modal.type_open,
						error: e.minesV2.error,
						free_bet: e.minesV2.free_bet,
						bonus_round: Object(ne.a)(e, "mines-rewired"),
						currency_type: e.minesV2.currency_type,
						betSlipId: e.minesV2.betSlipId
					}
				}), (function(e) {
					return {
						openModal: function(a) {
							e(Object(x.g)(a))
						}
					}
				}))((function(e) {
					var a, t = e.selectedWalletData,
						i = e.gameStarted,
						n = e.mines,
						c = e.amount,
						l = e.can_cashout,
						x = e.typeOpen,
						d = e.error,
						m = e.selectedTab,
						k = e.bonus_round,
						h = e.payout_multiplier,
						b = e.currency_type,
						f = (e.free_bet, e.loggedIn),
						y = e.openModal,
						j = e.betSlipId,
						g = Object(s.useState)(0 === c ? "" : parseFloat(c)),
						O = Object(r.a)(g, 2),
						G = O[0],
						D = O[1],
						B = Object(s.useState)(!1),
						w = Object(r.a)(B, 2),
						N = w[0],
						F = w[1],
						T = Object(o.c)(),
						P = Object(s.useState)(void 0 === n ? 2 : n),
						C = Object(r.a)(P, 2),
						L = C[0],
						M = C[1],
						R = Object(p.useTranslate)(),
						U = Object(se.useLocation)(),
						W = Object(o.d)((function(e) {
							return e.app.bonusBettingGames
						})),
						Z = null === U || void 0 === U || null === (a = U.pathname) || void 0 === a ? void 0 : a.split("/")[3],
						q = null === W || void 0 === W ? void 0 : W.includes(Object(ce.d)(Z));
					Object(s.useEffect)((function() {
						D(parseFloat(c))
					}), [c]), Object(s.useEffect)((function() {
						M(void 0 === n ? 2 : n)
					}), [n]), Object(s.useEffect)((function() {
						F(E({
							selectedWalletData: t,
							value: c,
							bonusAllowed: q
						}))
					}), [c]);
					var J = function() {
							return i || null !== x ? i || null === x || null !== d ? function() {
								var e;
								return i ? "".concat(R("cashout"), " ").concat(null === (e = Number(c) * Number(h)) || void 0 === e ? void 0 : e.toFixed(2), " ").concat(b) : "Loading..."
							}() : "Loading..." : R("place_bet_mines")
						},
						X = function() {
							L > 0 && (i ? (T($(j)), Object(ee.b)("mine-cashout")) : (T(function(e, a) {
								return function(t) {
									return H.a.post("/games/mines", {
										walletParams: Object(Y.a)({
											amount: 0,
											currency: a,
											free_bet: !0
										}),
										gameParams: {
											number_of_mines: e
										}
									}).then((function(e) {
										t({
											type: z.k,
											payload: {
												betSlipId: e,
												loading: !0,
												positionsSelected: []
											}
										})
									})).catch((function(e) {
										t({
											type: z.e,
											payload: {
												loading: !1,
												error: e
											}
										})
									}))
								}
							}(L, t.currency_type)), Object(ee.b)("mine-start")))
						},
						K = "free" === m,
						ne = "normal" === m,
						oe = k && (null === k || void 0 === k ? void 0 : k.rounds) > 0,
						le = Object(re.a)(null === k || void 0 === k ? void 0 : k.rounds),
						xe = !1;
					return xe = (xe = (xe = xe || ne && !i && !N) || L <= 0) || i && !l, Object(v.jsxs)("div", {
						id: "mine-controller",
						className: "controller",
						children: [Object(v.jsxs)("div", {
							className: "body",
							children: [oe && Object(v.jsxs)("div", {
								className: "tabbed-nav",
								"data-testId": "free-rounds-nav",
								children: [Object(v.jsx)(ie.a, {
									values: {
										tab: "normal"
									},
									className: ne && "selected",
									children: R("normal")
								}), Object(v.jsx)(ie.a, {
									values: {
										tab: "free"
									},
									className: K && "selected",
									children: R("free_rounds")
								})]
							}), (ne || !oe) && Object(v.jsxs)("div", {
								className: "regular-betting-controller",
								children: [Object(v.jsx)("div", {
									className: "inputs-wrapper",
									children: Object(v.jsxs)("div", {
										className: i ? "bet-input-row started" : "bet-input-row nostarted",
										children: [Object(v.jsx)(V, {
											testId: "amount",
											onChange: function(e, a) {
												D(e), F(E({
													selectedWalletData: t,
													value: e,
													bonusAllowed: q
												}))
											},
											onBlur: function() {
												var e = A({
													selectedWalletData: t,
													value: G,
													bonusAllowed: q
												});
												D(e), F(E({
													selectedWalletData: t,
													value: e,
													bonusAllowed: q
												}))
											},
											value: G,
											gameStarted: i
										}), (!i || !Object(u.a)()) && Object(v.jsxs)(v.Fragment, {
											children: [Object(v.jsx)("button", {
												className: "grey half",
												disabled: i,
												onClick: function(e) {
													var a = A({
														selectedWalletData: t,
														value: G / 2,
														bonusAllowed: q
													});
													D(a), F(E({
														selectedWalletData: t,
														value: a,
														bonusAllowed: q
													}))
												},
												children: "\xbd"
											}), Object(v.jsx)("button", {
												className: "grey double",
												disabled: i,
												onClick: function(e) {
													var a = A({
														selectedWalletData: t,
														value: 2 * G,
														bonusAllowed: q
													});
													D(a), F(E({
														selectedWalletData: t,
														value: a,
														bonusAllowed: q
													}))
												},
												children: "2x"
											})]
										}), Object(u.a)() && Object(v.jsx)(S.a, {
											className: "red",
											loading: !1,
											testid: "start-game",
											disabled: xe,
											onClick: function(e) {
												G > 0 && (i ? T($(j)) : (0 === L && T(Q(2, t.currency_type, G)), T(Q(L, t.currency_type, G)), Object(ee.b)("mine-start")))
											},
											children: J()
										})]
									})
								}), !i && Object(v.jsx)(I, {
									actualNumberMines: n,
									numbersMines: L,
									setNumbersMines: M,
									gameStarted: i
								}), i && Object(v.jsx)(ae, {}), i && Object(v.jsx)(te, {}), !Object(u.a)() && Object(v.jsx)(S.a, {
									className: "red",
									loading: !1,
									testid: "start-game",
									disabled: xe,
									onClick: function(e) {
										f || y("auth"), G > 0 && L > 0 && (i ? (T($(j)), Object(ee.b)("mine-cashout")) : (T(Q(L, t.currency_type, G)), Object(ee.b)("mine-start")))
									},
									children: J()
								})]
							}), K && oe && Object(v.jsxs)(v.Fragment, {
								children: [Object(v.jsxs)(v.Fragment, {
									children: [Object(v.jsx)(I, {
										actualNumberMines: n,
										numbersMines: L,
										setNumbersMines: M,
										gameStarted: i
									}), Object(u.a)() && Object(v.jsx)(S.a, {
										className: "red",
										loading: !1,
										testid: "start-game",
										disabled: xe,
										onClick: X,
										children: J()
									}), Object(v.jsx)("div", {
										style: {
											display: "flex"
										},
										children: Object(v.jsx)("h1", {
											style: {
												fontSize: "12px"
											},
											children: R(le, {
												rounds: (null === k || void 0 === k ? void 0 : k.rounds) || 0
											})
										})
									}), Object(v.jsx)("div", {
										className: "free-earned",
										style: {
											marginBottom: "30px"
										},
										children: Object(v.jsxs)("div", {
											children: [Object(v.jsx)("div", {
												children: R("amount_earned")
											}), Object(v.jsx)("div", {
												children: Object(v.jsxs)("div", {
													children: [k ? (+(null === k || void 0 === k ? void 0 : k.balance)).toFixed(2) : 0, Object(v.jsx)("span", {
														children: window.wallet.currency.symbol
													})]
												})
											})]
										})
									}), i && Object(v.jsx)(ae, {})]
								}), !Object(u.a)() && Object(v.jsx)(S.a, {
									className: "red",
									loading: !1,
									testid: "start-game",
									disabled: xe,
									onClick: X,
									children: J()
								})]
							})]
						}), Object(v.jsx)(_, {
							game_mode: "mines-v2"
						})]
					})
				}))),
				le = t(427),
				xe = function(e, a, t) {
					for (var i = [], n = 0; n < e; n++) {
						i.push([]);
						for (var r = 0; r < a; r++) i[n][r] = {
							x: n,
							y: r,
							showCard: !1
						}
					}
					return i
				},
				de = t(11),
				me = t(10),
				ue = t(31),
				ke = t(32),
				pe = t(2366),
				he = t.n(pe),
				be = t(3346),
				fe = t(3885),
				ye = t(3886),
				je = function(e) {
					Object(ue.a)(t, e);
					var a = Object(ke.a)(t);

					function t(e) {
						var i;
						return Object(de.a)(this, t), (i = a.call(this, e)).state = {
							loading: !1
						}, i
					}
					return Object(me.a)(t, [{
						key: "componentWillReceiveProps",
						value: function(e, a) {
							this.props.gameStarted && !e.gameStarted && this.setState({
								loading: !1
							})
						}
					}, {
						key: "shouldComponentUpdate",
						value: function(e, a, t) {
							return e.value.showCard !== this.props.value.showCard || e.value.isRevealed !== this.props.value.isRevealed || e.gameStarted !== this.props.gameStarted || a.loading !== this.state.loading
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								a = this.props,
								t = a.value,
								i = a.onClick,
								n = a.cMenu,
								r = a.gameStarted,
								s = a.positionsSelected,
								c = Object(be.a)(t, !r),
								o = c.classNameTranslate,
								l = c.classNameBack,
								x = c.classNameGameEndedOpacity,
								d = function(e, a) {
									return 5 * a + e
								},
								m = s.includes(d(t.x, t.y)),
								k = Object(u.a)();
							return Object(v.jsx)("div", {
								className: "".concat(x, " ").concat(this.state.loading ? "loading" : ""),
								style: {
									pointerEvents: m ? "none" : "auto"
								},
								children: Object(v.jsxs)("div", {
									className: o,
									children: [Object(v.jsx)("div", {
										className: r ? "flip-card-front cell-".concat(d(t.x, t.y)) : "flip-card-front",
										onContextMenu: n,
										onClick: function() {
											r && (e.setState({
												loading: !0
											}), i())
										},
										"data-testid": "cell-" + d(t.x, t.y)
									}), Object(v.jsxs)("div", {
										onClick: i,
										className: l,
										onContextMenu: n,
										"data-testid": "mine",
										style: {
											display: t.isbomb ? "" : "none"
										},
										children: [t.isRevealed && t.showCard && !k ? Object(v.jsx)(he.a, {
											rendererSettings: {
												preserveAspectRatio: "xMidYMid slice"
											},
											loop: !1,
											animationData: ye
										}) : null, Object(v.jsx)("div", {
											className: "image__container",
											style: {
												display: !t.showCard || t.isRevealed && !k ? "none" : ""
											},
											children: Object(v.jsx)(w.CDNImage, {
												className: t.showCard ? "image-bomb" : "",
												src: "".concat("", "/images/games-mines/bomb.svg"),
												alt: "bombs"
											})
										})]
									}), Object(v.jsxs)("div", {
										onClick: i,
										className: l,
										onContextMenu: n,
										"data-testid": t.isRevealed || t.showCard ? "diamond" : "hidden",
										style: {
											display: t.isbomb ? "none" : ""
										},
										children: [Object(v.jsx)("div", {
											className: "image__container",
											style: {
												display: t.isRevealed && !k || !t.showCard ? "none" : ""
											},
											children: Object(v.jsx)(w.CDNImage, {
												className: t.isRevealed || t.showCard ? "image-coin" : "",
												src: "".concat("", "/images/games-mines/diamond.svg"),
												alt: "diamond"
											})
										}), t.isRevealed && t.showCard && !k && Object(v.jsx)(he.a, {
											loop: !1,
											animationData: fe,
											rendererSettings: {
												preserveAspectRatio: "xMidYMid slice"
											}
										})]
									})]
								})
							})
						}
					}]), t
				}(s.Component),
				ge = t(255),
				ve = t(61),
				Oe = function(e) {
					return "cell-top " + (e.isbomb && (e.isRevealed || e.showCard) ? "is-bomb" : "")
				};
			var _e = Object(o.b)((function(e) {
					return {
						gameStarted: e.minesV2.gameStarted,
						bombs: e.minesV2.mines,
						tiles: e.minesV2.tiles,
						positionsSelected: e.minesV2.positionsSelected,
						betSlipId: e.minesV2.betSlipId
					}
				}), (function(e) {
					return {
						clickPositionBoard: function(a, t) {
							e(function(e, a) {
								return function(t) {
									Object(u.a)();
									var i = {
										bet_slip_id: a,
										type: "mines-click-tile",
										payload: {
											position: e
										}
									};
									H.a.post("/games/mines/play", i).then((function(e) {})).catch((function(e) {
										t({
											type: z.e,
											payload: {
												loading: !1,
												error: e
											}
										})
									}))
								}
							}(a, t))
						},
						gameStart: function(a) {
							e({
								type: z.j,
								payload: Object(R.a)(Object(R.a)({}, a), {}, {
									betSlipId: a.id,
									loading: !0
								})
							})
						},
						gamePlay: function(a) {
							e({
								type: z.h,
								payload: Object(R.a)({
									loading: !0
								}, a)
							})
						},
						cashout: function(a) {
							e({
								type: z.d,
								payload: Object(R.a)(Object(R.a)({}, a), {}, {
									cashout: !0,
									loading: !0
								})
							})
						}
					}
				}))((function(e) {
					var a = e.gameStarted,
						t = e.gamePlay,
						i = e.boardData,
						n = e.clickPositionBoard,
						c = e.tiles,
						o = e.positionsSelected,
						l = e.gameStart,
						x = e.betSlipId,
						d = e.cashout,
						m = Object(s.useState)(),
						u = Object(r.a)(m, 2),
						k = u[0],
						p = u[1],
						h = function(e) {
							if (e) {
								var a = {
									is_open: e.roundOpen,
									cashout: !1,
									number_of_mines: e.numberOfMines,
									amount: e.wallet_params.amount,
									currency_type: e.wallet_params.currency,
									free_bet: e.wallet_params.free_bet,
									can_cashout: e.canCashout,
									number_of_gems: e.numberOfGems,
									tiles: e.tiles,
									payout_multiplier: e.payoutMultiplier,
									payout_multiplier_on_next: e.payoutMultiplierOnNext,
									betSlipId: e.id,
									id: e.id,
									winnings: e.winnings,
									payout_amount: e.payoutMultiplier,
									clicks: e.clicks,
									hitMine: e.hitMine
								};
								if (e.gameFinished)
									if (e.hitMine) {
										var i = e.clicks[e.clicks.length - 1];
										t(Object(R.a)(Object(R.a)({}, a), {}, {
											position: i.position
										}))
									} else d(a);
								else if (0 === e.clicks.length) l(a);
								else {
									var n = e.clicks[e.clicks.length - 1];
									t(Object(R.a)(Object(R.a)({}, a), {}, {
										position: n.position
									}))
								}
							}
						};
					Object(s.useEffect)((function() {
						ge.a.connect();
						var e = Object(ve.getAccessToken)();
						if (e) return ge.a.authenticate(e), ge.a.subscribe("mines-update"), ge.a.addListener("mines-update", h),
							function() {
								ge.a.unsubscribe("mines-update"), ge.a.removeListener("mines-update", h)
							}
					}), []);
					var b = Object(s.useCallback)((function() {
						var e = [];
						i.forEach((function(a) {
							a.forEach((function(a) {
								var t, i = a.x + 5 * a.y,
									n = o.filter((function(e) {
										return e === i
									})).length > 0;
								"mine" === c[i] ? t = Object(R.a)(Object(R.a)({}, a), {}, {
									isbomb: !0,
									isRevealed: n,
									showCard: !0
								}) : "diamond" === c[i] ? o.filter((function(e) {
									return e === i
								})) && (t = Object(R.a)(Object(R.a)({}, a), {}, {
									isbomb: !1,
									isRevealed: n,
									showCard: !0
								})) : t = Object(R.a)(Object(R.a)({}, a), {}, {
									isRevealed: !1
								}), e[t.y] || (e[t.y] = []), e[t.y].push(Object(R.a)({}, t))
							}))
						})), p(e)
					}), [i, o, c]);
					Object(s.useEffect)((function() {
						b()
					}), [b]);
					return k ? k.map((function(e) {
						return e.map((function(e) {
							return Object(v.jsx)("div", {
								className: Oe(e),
								id: e.x + 5 * e.y,
								children: Object(v.jsx)(je, {
									onClick: function() {
										return function(e, a, t) {
											t.isRevealed || t.showCard || n(e + 5 * a, x)
										}(e.x, e.y, e)
									},
									value: e,
									gameStarted: a,
									positionsSelected: o
								})
							}, e.x + 5 * e.y)
						}))
					})) : null
				})),
				Ge = t(3085);
			var De = Object(o.b)((function(e) {
					return {
						gameStarted: e.minesV2.gameStarted,
						bombs: e.minesV2.mines,
						cashout: e.minesV2.cashout,
						wasDoneInitialLoading: e.minesV2.wasDoneInitialLoading,
						tiles: e.minesV2.tiles
					}
				}), (function(e) {
					return {
						updateEndGame: function() {
							e({
								type: z.c
							})
						},
						setResultGame: function(a) {
							e(function(e) {
								return {
									type: z.i,
									payload: {
										gameResult: e
									}
								}
							}(a))
						},
						deactivateCashout: function() {
							e({
								type: z.b
							})
						}
					}
				}))((function(e) {
					var a = e.height,
						t = e.width,
						i = (e.tiles, e.gameStarted),
						n = e.cashout,
						c = e.wasDoneInitialLoading,
						o = e.bombs,
						l = e.setResultGame,
						x = e.updateEndGame,
						d = e.deactivateCashout,
						m = Object(s.useState)({
							boardData: xe(a, t),
							boardActive: i,
							cashout: n
						}),
						u = Object(r.a)(m, 2),
						k = u[0],
						p = u[1],
						h = Object(Ge.a)(c),
						b = Object(s.useRef)();
					return Object(s.useEffect)((function() {
						if (b.current) {
							if (!h && c);
							else if (!i && n && (! function(e) {
									var a = e.boardData;
									e.setBoard, a.map((function(e) {
										e.map((function(e) {
											e.showCard = !0
										}))
									}))
								}({
									setBoard: function(e) {
										return p(e)
									},
									boardData: k.boardData
								}), l("won"), x(), p({
									boardData: k.boardData,
									boardActive: !1
								}), d()), i && !k.boardActive) {
								! function(e) {
									var a = e.boardData,
										t = e.setBoard,
										i = a;
									i.map((function(e) {
										e.map((function(e) {
											e.isRevealed = !1
										}))
									})), t({
										boardData: i
									})
								}({
									setBoard: function(e) {
										return p(e)
									},
									boardData: k.boardData
								});
								var e = xe(a, t);
								p({
									boardActive: !0,
									boardData: e
								})
							}
						} else b.current = !0
					})), Object(v.jsx)("div", {
						className: "board",
						children: Object(v.jsx)(_e, {
							gameStarted: i,
							boardData: k.boardData,
							setBoard: p,
							bombCount: parseInt(o)
						})
					})
				})),
				Be = (t(3887), t(115)),
				Ee = function() {
					var e = Object(p.useTranslate)(),
						a = Object(o.d)(C),
						t = Object(o.d)(M);
					return Object(v.jsxs)("div", {
						className: "result__container",
						children: [Object(v.jsxs)("div", {
							className: "result__cashout",
							children: ["X", "".concat((a || 0).toFixed(2))]
						}), Object(v.jsxs)("div", {
							className: "result__text",
							children: [e("you_won"), " ", t && Object(Be.formatAsCurrency)(t.toFixed(2), {
								useCurrentWalletCurrencySymbol: !0
							})]
						})]
					})
				},
				Ae = t(2405),
				Ve = function() {
					var e = Object(o.d)(F),
						a = e.gameStarted,
						t = e.mines,
						i = e.tiles,
						n = e.winnings,
						r = e.hitMine,
						c = e.positionsSelected,
						l = e.clicks;
					return Object(s.useEffect)((function() {
						var e = i.filter((function(e) {
							return "bomb" === e || "diamond" === e
						}));
						if (((null === e || void 0 === e ? void 0 : e.length) > 0 || (null === l || void 0 === l ? void 0 : l.length) > 0 || (null === c || void 0 === c ? void 0 : c.length) > 0) && (a || r)) {
							var t = r ? "mine-bomb" : "mine-gem";
							Object(ee.b)(t)
						}
					}), [i]), Object(v.jsx)(v.Fragment, {
						children: Object(v.jsxs)("div", {
							className: "container",
							children: [Object(v.jsx)("div", {
								className: "box ",
								children: Object(v.jsx)(w.CDNImage, {
									className: a ? " image-box image-symbol" : "image-box",
									src: "".concat("", "/images/games-mines/background-game.svg"),
									alt: "diamond"
								})
							}), Object(v.jsxs)("div", {
								className: "game box stack-top",
								style: a ? {} : {
									pointerEvents: "none"
								},
								children: [Object(v.jsx)(De, {
									height: 5,
									width: 5,
									bombs: parseInt(t),
									gameStarted: a
								}), Object(v.jsx)(Ae.a, {})]
							}), !a && n && 0 !== n ? Object(v.jsx)(Ee, {}) : null]
						})
					})
				},
				Se = t(2379),
				we = t(74),
				Ne = t(2407),
				Fe = t(2391),
				Te = t(42),
				Pe = t.n(Te),
				Ce = t(2132),
				Le = t(283),
				Me = t(2425),
				Ie = t(2406),
				Re = (t(2590), t(3212), t(458), t(3888), t(254)),
				Ue = t(84),
				ze = t(269),
				We = t(24),
				He = function(e) {
					var a = e.showBetInsteadWinAmount,
						t = void 0 !== a && a,
						i = Object(o.c)(),
						n = Object(o.d)(Ue.c);
					Object(s.useEffect)((function() {
						i(Object(ze.c)())
					}), []);
					var r = function(e) {
							var a;
							return (null === (a = n.find((function(a) {
								return a.type === e
							}))) || void 0 === a ? void 0 : a.symbol) || ""
						},
						c = Object(p.useTranslate)(),
						l = Object(o.d)(ze.d);
					return Object(v.jsxs)("div", {
						className: "live-bet-feed",
						children: [Object(v.jsx)("div", {
							className: "left",
							children: Object(v.jsx)("h2", {
								children: c("live_bet_feed")
							})
						}), Object(v.jsx)("div", {
							className: "list",
							children: l.map((function(e, a) {
								return Object(v.jsx)("div", {
									className: "image-wrapper",
									children: Object(v.jsxs)(We.a, {
										to: "/games/".concat(Object(ce.c)(e.game_slug)),
										children: [Object(v.jsx)(Re.a, {
											loading: !1,
											children: Object(v.jsx)(w.CDNImage, {
												src: e.image_url,
												alt: ""
											})
										}), Object(v.jsxs)("div", {
											className: "bet-description",
											children: [e.hide_user_data && Object(v.jsx)("img", {
												src: "/images/eye-hide.svg"
											}), Object(v.jsx)("p", {
												className: "username",
												children: e.hide_user_data ? "********" : e.username
											}), Object(v.jsx)("p", {
												className: "bet-amount",
												children: "".concat(r(e.currency_type), " ").concat(t ? e.amount : e.win_amount)
											})]
										})]
									})
								}, a)
							}))
						})]
					})
				},
				Ye = t(295),
				Ze = t(53),
				qe = Object(N.a)([function(e) {
					return e.minesV2
				}], (function(e) {
					return e.featureFlagData
				})),
				Je = t(465),
				Xe = t(2395),
				Ke = t(2413);
			t(3889), a.default = Object(G.a)((function(e) {
				var a, c = e.selectedWalletData,
					l = Object(o.d)(ne.k),
					d = Object(o.d)(we.a),
					m = Object(o.d)(Xe.a),
					k = Object(o.d)(qe),
					h = Object(o.d)(Ye.d),
					b = Object(o.c)(),
					f = Object(p.useTranslate)(),
					y = Object(se.useLocation)(),
					j = Object(o.d)((function(e) {
						return e.raceModal.raceChallengeModalOpen
					})),
					g = Object(o.d)((function(e) {
						return e.app.bonusBettingGames
					})),
					O = Object(s.useState)(),
					_ = Object(r.a)(O, 2),
					G = _[0],
					D = _[1],
					B = Object(s.useState)(),
					E = Object(r.a)(B, 2),
					A = E[0],
					V = E[1],
					S = null === y || void 0 === y || null === (a = y.pathname) || void 0 === a ? void 0 : a.split("/")[3];
				Object(s.useEffect)((function() {
					Promise.resolve().then(t.t.bind(null, 3885, 3)).then(D), Promise.resolve().then(t.t.bind(null, 3886, 3)).then(V)
				}), []), Object(s.useEffect)((function() {
					Object(Ke.a)(c, g, m, (function(e) {
						return b(Object(x.g)(e))
					}), Object(ce.d)(S))
				}), [c.real_balance]), Object(s.useEffect)((function() {
					m && N()
				}), [m]), Object(s.useEffect)((function() {
					y.pathname.includes("/games/mines") && N()
				}), [y.pathname]), Object(s.useEffect)((function() {
					return k && b(Object(Ze.i)({
							translation: "game_migration_banner",
							data: {
								date: X()(k.since).format("DD/MM/YYYY"),
								game: "Mines",
								url: "/games/mines?modal=provably_fair&game_mode=mines-v2&type=seeds"
							}
						})),
						function() {
							b(Object(Ze.i)(null)), Object(Je.a)()
						}
				}), [k]);
				var w = Object(Se.a)("tab", "normal").value;

				function N() {
					return F.apply(this, arguments)
				}

				function F() {
					return (F = Object(n.a)(Object(i.a)().mark((function e() {
						return Object(i.a)().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									b(K(null === l || void 0 === l ? void 0 : l.id));
								case 1:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}
				return Object(s.useEffect)((function() {
					return function() {
						b(Object(Fe.b)(!1))
					}
				}), []), Object(v.jsxs)("div", {
					id: "mines",
					className: "page",
					children: [Object(v.jsx)(le.a, {
						children: Object(v.jsx)("title", {
							children: f("mines")
						})
					}), Object(v.jsxs)("div", {
						className: "preloaded-animations",
						style: {
							display: "none"
						},
						children: [Object(v.jsx)(he.a, {
							loop: !1,
							animationData: G,
							preload: !0
						}), Object(v.jsx)(he.a, {
							loop: !1,
							animationData: A,
							preload: !0
						})]
					}), Object(v.jsxs)("div", {
						className: "content",
						children: [Object(v.jsxs)("div", {
							className: "game-controller-container",
							children: [!h && Object(v.jsx)("div", {
								className: "maintenance-overlay",
								children: f("error_1015")
							}), Object(v.jsx)(oe, {
								selectedTab: w
							}), !h && Object(v.jsx)("div", {
								className: "maintenance-overlay",
								children: f("error_1015")
							}), Object(v.jsx)("div", {
								className: "mine-wrapper",
								children: Object(v.jsx)(Ve, {})
							}), Object(v.jsx)(Me.a, {
								gameSlug: S
							})]
						}), Object(v.jsx)(Ne.a, {
							slugGame: S
						}), Object(v.jsx)(Ie.a, {
							game: S
						}), d && Object(v.jsx)(He, {})]
					}), !Object(u.a)() && d && !j && Object(v.jsxs)("div", {
						onClick: function() {
							return b(Object(Fe.b)(!0))
						},
						className: "race-modal-trigger",
						children: [f("more_chances"), Object(v.jsx)(Pe.a, {
							src: "/images/casino/bulls-eye.svg"
						})]
					}), !Object(u.a)() && Object(v.jsx)(Le.CSSTransition, {
						in: j,
						classNames: "races-modal",
						timeout: 300,
						unmountOnExit: !0,
						children: Object(v.jsx)(Ce.default, {})
					})]
				})
			}))
		},
		2359: function(e, a, t) {
			"use strict";
			t.r(a);
			var i, n = t(4),
				r = t(1),
				s = t(56),
				c = t(2595),
				o = t(2350),
				l = t(157),
				x = t(62),
				d = t(2),
				m = ["className"],
				u = Object(c.a)((function(e) {
					var a = e.className,
						t = Object(s.a)(e, m);
					return Object(d.jsx)(o.a, Object(r.a)(Object(r.a)({}, t), {}, {
						classes: {
							popper: a
						}
					}))
				}))((i = {}, Object(n.a)(i, "& .".concat(l.a.tooltip), {
					maxWidth: 500,
					backgroundColor: "#fff",
					color: "#000",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "10px",
					padding: "10px",
					fontSize: "12px"
				}), Object(n.a)(i, "& .".concat(l.a.arrow), {
					color: "#fff"
				}), i));
			a.default = function(e) {
				var a = e.children,
					t = e.title,
					i = e.title_props,
					n = Object(x.useTranslate)(),
					r = "N\xe3o foi encontrada nenhuma tradu\xe7\xe3o por defeito! Certifique-se de que adicionou tradu\xe7\xf5es para o seu idioma predefinido." === n(t, i) ? t : n(t, i);
				return Object(d.jsx)(u, {
					title: r,
					placement: "top",
					arrow: !0,
					children: a
				})
			}
		},
		2365: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return l
			})), t.d(a, "c", (function() {
				return x
			})), t.d(a, "b", (function() {
				return d
			})), t.d(a, "d", (function() {
				return m
			}));
			var i = t(3),
				n = t(39),
				r = t(12),
				s = t(2396),
				c = t(437),
				o = "All articles",
				l = 9,
				x = function(e) {
					var a = e.tag,
						t = e.page,
						i = void 0 === t ? 1 : t,
						n = e.pageSize,
						r = void 0 === n ? l : n,
						x = e.sort,
						d = void 0 === x ? "desc" : x;
					return function(e) {
						a && a !== o ? s.a.getBlogArticlesyTag({
							tag: a,
							sort: d,
							page: i,
							pageSize: r
						}).then((function(a) {
							e({
								type: c.d,
								payload: a
							})
						})) : s.a.getBlogArticles({
							page: i,
							pageSize: r,
							sort: d
						}).then((function(a) {
							e({
								type: c.d,
								payload: a
							})
						}))
					}
				},
				d = function() {
					return function(e) {
						var a = [];
						s.a.getAllBlogTags().then(function() {
							var t = Object(r.a)(Object(i.a)().mark((function t(r) {
								var l, x, d, m, u;
								return Object(i.a)().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.next = 2, s.a.getBlogArticlesyTag();
										case 2:
											l = t.sent, a.push({
												tag: o,
												articles: l.articles,
												total: l.total
											}), x = [], d = Object(n.a)(r), t.prev = 6, u = Object(i.a)().mark((function e() {
												var t, n;
												return Object(i.a)().wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															t = m.value, n = s.a.getBlogArticlesyTag({
																tag: t,
																page: 1,
																pageSize: 1
															}).then((function(e) {
																var i = e.articles,
																	n = e.total;
																n && a.push({
																	tag: t,
																	articles: i,
																	total: n
																})
															})), x.push(n);
														case 3:
														case "end":
															return e.stop()
													}
												}), e)
											})), d.s();
										case 9:
											if ((m = d.n()).done) {
												t.next = 13;
												break
											}
											return t.delegateYield(u(), "t0", 11);
										case 11:
											t.next = 9;
											break;
										case 13:
											t.next = 18;
											break;
										case 15:
											t.prev = 15, t.t1 = t.catch(6), d.e(t.t1);
										case 18:
											return t.prev = 18, d.f(), t.finish(18);
										case 21:
											return t.next = 23, Promise.all(x);
										case 23:
											e({
												type: c.f,
												payload: a
											}), e({
												type: c.e,
												payload: o
											});
										case 25:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[6, 15, 18, 21]
								])
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}())
					}
				},
				m = function(e) {
					return function(a) {
						a(x(e === o ? {} : {
							tag: e
						})), a({
							type: c.e,
							payload: e
						})
					}
				}
		},
		2379: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return s
			}));
			var i = t(17),
				n = t(0),
				r = t(35);

			function s(e) {
				var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					t = Object(r.useHistory)(),
					s = Object(n.useState)(""),
					c = Object(i.a)(s, 2),
					o = c[0],
					l = c[1],
					x = function() {
						var i = new URLSearchParams(t.location.search);
						l(i.get(e) || a)
					};
				return Object(n.useEffect)((function() {
					x()
				}), []), t.listen((function() {
					x()
				})), Object(n.useEffect)((function() {
					new URLSearchParams(t.location.search).set(e, o)
				}), [o]), {
					value: o,
					setValue: l
				}
			}
		},
		2383: function(e, a, t) {
			"use strict";
			var i = t(2359);
			t.d(a, "a", (function() {
				return i.default
			}))
		},
		2395: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return i
			}));
			t(18);
			var i = function(e) {
				return function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return e.loggedIn && !e.loading
				}(e.user)
			}
		},
		2396: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return h
			}));
			var i = t(1),
				n = t(3),
				r = t(12),
				s = t(11),
				c = t(10),
				o = t(4162),
				l = t(3733),
				x = t(2365),
				d = t(37),
				m = Object(d.a)("blog_endpoint"),
				u = "pt,es,en,fr".split(","),
				k = {
					cl: "es",
					pe: "es",
					ec: "es",
					mx: "es"
				},
				p = function() {
					function e() {
						Object(s.a)(this, e), this.client = o.a(m)
					}
					return Object(c.a)(e, [{
						key: "getLocale",
						value: function() {
							var e = localStorage.getItem("lang") || window.language.code;
							return e = k[e] || e, -1 !== u.indexOf[e] ? e : "en"
						}
					}, {
						key: "getSimilarArticles",
						value: function() {
							var e = Object(r.a)(Object(n.a)().mark((function e(a) {
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return 3, e.abrupt("return", this.client.getAllBySomeTags(a, {
												limit: 3,
												predicates: [l.a.at("document.type", "article")]
											}));
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(a) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getBlogArticlesyTag",
						value: function() {
							var e = Object(r.a)(Object(n.a)().mark((function e() {
								var a, t, i, r, s, c, o, d, m, u = arguments;
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = (a = u.length > 0 && void 0 !== u[0] ? u[0] : {}).tag, i = a.sort, r = void 0 === i ? "desc" : i, s = a.pageSize, c = void 0 === s ? x.a : s, o = a.page, m = {
													page: void 0 === o ? 1 : o,
													pageSize: c,
													orderings: {
														field: "document.first_publication_date",
														direction: r
													},
													lang: this.getLocale()
												}, !t) {
												e.next = 8;
												break
											}
											return e.next = 5, this.client.query(l.a.any("document.tags", [t]), m);
										case 5:
											d = e.sent, e.next = 11;
											break;
										case 8:
											return e.next = 10, this.client.query(l.a.at("document.type", "article"), m);
										case 10:
											d = e.sent;
										case 11:
											return e.abrupt("return", {
												articles: d.results,
												total: d.total_results_size,
												currentPage: d.page,
												pages: d.total_pages
											});
										case 12:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getAllBlogTags",
						value: function() {
							var e = Object(r.a)(Object(n.a)().mark((function e() {
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.client.getTags());
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getBlogData",
						value: function() {
							var e = Object(r.a)(Object(n.a)().mark((function e(a, t) {
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.client.getAllByType(a, t));
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(a, t) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getBlogByUID",
						value: function() {
							var e = Object(r.a)(Object(n.a)().mark((function e(a, t) {
								var r, s;
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.client.getByUID(t, a, {
												lang: this.getLocale()
											});
										case 2:
											if ((s = e.sent) && s.data) {
												e.next = 7;
												break
											}
											return e.next = 6, this.client.getByUID(t, a, {
												lang: "en"
											});
										case 6:
											s = e.sent;
										case 7:
											return e.abrupt("return", Object(i.a)(Object(i.a)({}, null === (r = s) || void 0 === r ? void 0 : r.data), {}, {
												tags: s.tags
											}));
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(a, t) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getBlogArticles",
						value: function() {
							var e = Object(r.a)(Object(n.a)().mark((function e() {
								var a, t, i, r, s, c, o, x = arguments;
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = (a = x.length > 0 && void 0 !== x[0] ? x[0] : {}).page, i = a.pageSize, r = a.sort, s = void 0 === r ? "desc" : r, c = {
												lang: this.getLocale(),
												page: t,
												pageSize: i,
												orderings: {
													field: "document.first_publication_date",
													direction: s
												}
											}, e.next = 4, this.client.query(l.a.at("document.type", "article"), c);
										case 4:
											return o = e.sent, e.abrupt("return", {
												articles: o.results,
												currentPage: o.page,
												pages: o.total_pages
											});
										case 6:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getBlogArticle",
						value: function() {
							var e = Object(r.a)(Object(n.a)().mark((function e(a) {
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.getBlogByUID(a, "article"));
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(a) {
								return e.apply(this, arguments)
							}
						}()
					}]), e
				}(),
				h = new p
		},
		2397: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return h
			}));
			var i = t(17),
				n = t(3),
				r = t(1),
				s = t(12),
				c = t(11),
				o = t(10),
				l = t(4162),
				x = t(77),
				d = (t(2365), {
					fortune_double_room_1: "fortune-double",
					fortune_double_room_2: "fortune-double",
					fortune_double_room_3: "fortune-double",
					fortune_double_room_4: "fortune-double",
					fortune_double_room_5: "fortune-double",
					fortune_double_room_6: "fortune-double",
					fortune_double_room_7: "fortune-double",
					fortune_double_room_8: "fortune-double",
					fortune_double_room_9: "fortune-double",
					fortune_double_room_10: "fortune-double",
					crash_room_4: "crash",
					fruitSlice: "fruit-slice"
				}),
				m = {
					en: new Set(["us"]),
					fr: new Set(["fr"]),
					de: new Set(["de"]),
					el: new Set(["gr"]),
					hi: new Set(["in"]),
					ja: new Set(["jp"]),
					pt: new Set(["br"]),
					es: new Set(["mx", "cl", "ec", "pe"]),
					ca: new Set(["ca"])
				},
				u = l.a("https://blazecom.cdn.prismic.io/api/v2"),
				k = "en-us",
				p = function() {
					function e() {
						Object(c.a)(this, e)
					}
					return Object(o.a)(e, [{
						key: "getPrismicData",
						value: function() {
							var e = Object(s.a)(Object(n.a)().mark((function e(a, t) {
								var i, s;
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, u.getAllByType(a, t);
										case 2:
											if (s = e.sent, null !== (i = s) && void 0 !== i && i.length || t.lang === k) {
												e.next = 7;
												break
											}
											return e.next = 6, u.getAllByType(a, Object(r.a)(Object(r.a)({}, t), {}, {
												lang: k
											}));
										case 6:
											s = e.sent;
										case 7:
											return e.abrupt("return", s);
										case 8:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(a, t) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getLocale",
						value: function() {
							var e = localStorage.getItem("lang") || window.language.code,
								a = window.navigator.language.substring(3).toLowerCase();
							if (m[e] && m[e].has(a)) return "".concat(e, "-").concat(a);
							if (m[e]) {
								var t = Object(i.a)(m[e], 1)[0];
								return "ca" === t ? "en-ca" : "".concat(e, "-").concat(t)
							}
							return ["pe", "cl"].includes(e) ? "es-".concat(e) : ["in"].includes(e) ? "hi-in" === Object(x.f)().toLowerCase() ? "hi-in" : "en-in" : k
						}
					}, {
						key: "getNewsFeed",
						value: function() {
							var e = Object(s.a)(Object(n.a)().mark((function e() {
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.getPrismicData("news_feed", {
												lang: this.getLocale(),
												orderings: "my.news_feed.order"
											}));
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getPromotions",
						value: function() {
							var e = Object(s.a)(Object(n.a)().mark((function e() {
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.getPrismicData("promotions", {
												lang: this.getLocale()
											}));
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getSponsorships",
						value: function() {
							var e = Object(s.a)(Object(n.a)().mark((function e() {
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.getPrismicData("sponsorship", {
												lang: this.getLocale()
											}));
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getArticle",
						value: function() {
							var e = Object(s.a)(Object(n.a)().mark((function e(a) {
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.getByUID(a, "article"));
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(a) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getByUID",
						value: function() {
							var e = Object(s.a)(Object(n.a)().mark((function e(a, t) {
								var i, s;
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, u.getByUID(t, a, {
												lang: this.getLocale()
											});
										case 2:
											if ((s = e.sent) && s.data) {
												e.next = 7;
												break
											}
											return e.next = 6, u.getByUID(t, a, {
												lang: k
											});
										case 6:
											s = e.sent;
										case 7:
											return e.abrupt("return", Object(r.a)(Object(r.a)({}, null === (i = s) || void 0 === i ? void 0 : i.data), {}, {
												tags: s.tags
											}));
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(a, t) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getGameDescriptions",
						value: function() {
							var e = Object(s.a)(Object(n.a)().mark((function e() {
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.getPrismicData("game_description", {
												lang: this.getLocale()
											}));
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getGameDescription",
						value: function() {
							var e = Object(s.a)(Object(n.a)().mark((function e(a) {
								var t, i, r, s;
								return Object(n.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return i = null !== (t = d[a]) && void 0 !== t ? t : a, e.prev = 1, e.next = 4, u.getByUID("game_description", i, {
												lang: this.getLocale()
											});
										case 4:
											return r = e.sent, e.abrupt("return", null === r || void 0 === r ? void 0 : r.data);
										case 8:
											return e.prev = 8, e.t0 = e.catch(1), e.next = 12, u.getByUID("game_description", i, {
												lang: k
											});
										case 12:
											return s = e.sent, e.abrupt("return", null === s || void 0 === s ? void 0 : s.data);
										case 14:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[1, 8]
								])
							})));
							return function(a) {
								return e.apply(this, arguments)
							}
						}()
					}]), e
				}(),
				h = new p
		},
		2400: function(e, a, t) {
			"use strict";
			var i = t(3),
				n = t(12),
				r = t(11),
				s = t(10),
				c = t(142),
				o = t.n(c),
				l = t(61),
				x = function() {
					function e() {
						Object(r.a)(this, e);
						this.instance = o.a.create({
							baseURL: "/api",
							timeout: 3e4,
							headers: {
								common: {}
							}
						});
						var a = Object(l.getAccessToken)();
						this.instance.defaults.headers.common.Authorization = "Bearer ".concat(a)
					}
					return Object(s.a)(e, [{
						key: "addToFavourites",
						value: function() {
							var e = Object(n.a)(Object(i.a)().mark((function e(a) {
								var t;
								return Object(i.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.instance.post("/favorites", a);
										case 2:
											return t = e.sent, e.abrupt("return", t);
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(a) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "deleteFromFavourites",
						value: function() {
							var e = Object(n.a)(Object(i.a)().mark((function e(a) {
								var t;
								return Object(i.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.instance.delete("/favorites/".concat(a));
										case 2:
											return t = e.sent, e.abrupt("return", t);
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(a) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getFavorites",
						value: function() {
							var e = Object(n.a)(Object(i.a)().mark((function e() {
								var a;
								return Object(i.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.instance.get("/favorites");
										case 2:
											return a = e.sent, e.abrupt("return", a.data);
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}]), e
				}(),
				d = new x;
			a.a = d
		},
		2405: function(e, a, t) {
			"use strict";
			var i = t(17),
				n = t(0),
				r = (t(2444), t(18)),
				s = t(440),
				c = t(23),
				o = t(62),
				l = t(213),
				x = t(2);
			a.a = function() {
				var e = Object(r.c)(),
					a = Object(r.d)(s.a),
					t = Object(n.useState)(l.d.unknown),
					d = Object(i.a)(t, 2),
					m = d[0],
					u = d[1],
					k = Object(o.useTranslate)(),
					p = Object(r.d)(s.b);
				return Object(n.useEffect)((function() {
					var e = m;
					if (!1 !== p) {
						if (!a) return u(l.d.online);
						if (null === a.avgPingPongLatency || void 0 === a.avgPingPongLatency) return u(l.d.unknown);
						a.avgPingPongLatency < l.c ? e = l.d.online : a.avgPingPongLatency >= l.c && (e = l.d.lagged), u(e)
					} else u(l.d.offline)
				}), [a, p]), Object(x.jsxs)("div", {
					className: "network",
					onClick: function() {
						return e(Object(c.g)("network_status_explanation"))
					},
					children: [Object(x.jsx)("div", {
						className: "network__dot",
						children: Object(x.jsx)("div", {
							className: "network__dot-pulse network__dot__".concat(m)
						})
					}), Object(x.jsx)("div", {
						className: "network__status",
						children: Object(x.jsx)("span", {
							className: "network__status__".concat(m),
							children: k("network_status.".concat(m))
						})
					})]
				})
			}
		},
		2406: function(e, a, t) {
			"use strict";
			var i = t(3),
				n = t(12),
				r = t(17),
				s = t(15);

			function c() {
				return (c = Object(n.a)(Object(i.a)().mark((function e(a) {
					return Object(i.a)().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.abrupt("return", s.a.get("/games/".concat(a)));
							case 1:
							case "end":
								return e.stop()
						}
					}), e)
				})))).apply(this, arguments)
			}
			var o = t(47),
				l = t(2397),
				x = t(0),
				d = t(166),
				m = t(36),
				u = t(433),
				k = t.n(u),
				p = t(62),
				h = t(3145),
				b = t(18),
				f = t(45),
				y = (t(2430), t(2));
			var j = Object(b.b)((function(e) {
					return {
						activeLanguage: Object(f.c)(e.localize)
					}
				}), null)((function(e) {
					var a, t, i = e.gameImage,
						n = e.prismicData,
						s = e.loading,
						c = Object(d.a)(),
						o = Object(x.useState)(!1),
						l = Object(r.a)(o, 2),
						u = l[0],
						b = l[1],
						f = Object(p.useTranslate)();
					if (s || !n) return Object(y.jsx)(y.Fragment, {});
					return Object(y.jsxs)("div", {
						className: "game-description-container",
						children: [Object(y.jsx)("div", {
							className: "game-description-title",
							children: Object(y.jsx)("h2", {
								children: n.title[0].text
							})
						}), Object(y.jsxs)("div", {
							className: "game-description-body",
							children: [Object(y.jsx)("div", {
								className: "image",
								children: Object(y.jsx)(m.CDNImage, {
									src: i
								})
							}), Object(y.jsxs)("div", {
								className: "tags-and-description",
								children: [Object(y.jsx)("div", {
									className: "feature-tags",
									children: n.tags[0].text.split(",").map((function(e) {
										return Object(y.jsx)("div", {
											className: "feature-tag",
											children: Object(y.jsx)("span", {
												children: e.toUpperCase()
											})
										})
									}))
								}), Object(y.jsxs)("div", {
									className: "description",
									children: [!u && Object(y.jsx)("p", {
										className: "collapsed",
										children: Object(y.jsxs)("p", {
											children: [n.description.map((function(e) {
												return e.text
											})).join(" ").slice(0, 450), "..."]
										})
									}), u && Object(y.jsx)("div", {
										className: "expanded",
										children: Object(y.jsx)("div", {
											dangerouslySetInnerHTML: {
												__html: h.a(n.description, null, (function(e, a, t, i) {
													var r, s, c = function(e) {
														return "/" + e.uid
													};
													switch (e) {
														case "heading1":
															return "<h1>".concat(i, "</h1>");
														case "heading2":
															return "<h2>".concat(i, "</h2>");
														case "heading3":
															return "<h3>".concat(i, "</h3>");
														case "heading4":
															return "<h4>".concat(i, "</h4>");
														case "heading5":
															return "<h5>".concat(i, "</h5>");
														case "heading6":
															return "<h6>".concat(i, "</h6>");
														case "paragraph":
															if (t.startsWith("{{") || t.endsWith("}}")) {
																var o = t.replace("{{", "").replace("}}", ""),
																	l = n.body.find((function(e) {
																		return e.slice_type === o
																	}));
																return l ? k.a.renderToString((r = l.items, s = l.primary, Object(y.jsxs)("table", {
																	children: [Object(y.jsx)("thead", {
																		children: Object(y.jsx)("tr", {
																			children: Object.keys(r[0]).map((function(e, a) {
																				return Object.entries(s).length > 0 ? Object(y.jsx)("th", {
																					children: s["column_".concat(a + 1, "_header")]
																				}) : Object(y.jsx)("th", {
																					children: r[0][e]
																				})
																			}))
																		})
																	}), Object(y.jsx)("tbody", {
																		children: (Object.entries(s).length > 0 ? r : r.slice(1)).map((function(e) {
																			return Object(y.jsx)("tr", {
																				children: Object.keys(e).map((function(a) {
																					var t, i;
																					return e[a] && null !== (t = e[a][0]) && void 0 !== t && t.text ? Object(y.jsx)("td", {
																						children: null === (i = e[a][0]) || void 0 === i ? void 0 : i.text
																					}) : e[a] ? Object(y.jsx)("td", {
																						children: e[a]
																					}) : void 0
																				}))
																			})
																		}))
																	})]
																}))) : ""
															}
															return "<p>".concat(i, "</p>");
														case "preformatted":
															return "<pre>".concat(JSON.stringify(a.text), "</pre>");
														case "strong":
															return "<strong>".concat(i, "</strong>");
														case "em":
															return "<em>".concat(i, "</em>");
														case "list-item":
														case "o-list-item":
															return "<li>".concat(i, "</li>");
														case "group-list-item":
															return "<ul>".concat(i, "</ul>");
														case "group-o-list-item":
															return "<ol>".concat(i, "</ol>");
														case "image":
															var x = a.linkTo ? c(a.linkTo) : null,
																d = a.linkTo && a.linkTo.target ? 'target="'.concat(a.linkTo.target, '" rel="noopener"') : "",
																m = [a.label || "", "block-img"],
																u = '<img src="'.concat(a.url, '" alt="').concat(a.alt ? a.alt : "", '" copyright="').concat(a.copyright ? a.copyright : "", '" />');
															return '\n          <p className="'.concat(m.join(" "), '">\n            ').concat(x ? "<a ".concat(d, ' href="').concat(x, '">').concat(u, "</a>") : u, "\n          </p>\n        ");
														case "embed":
															return '\n          <div data-oembed="'.concat(a.oembed.embed_url, '"\n            data-oembed-type="').concat(a.oembed.type, '"\n            data-oembed-provider="').concat(a.oembed.provider_name, '"\n            >\n            ').concat(a.oembed.html, "\n          </div>\n        ");
														case "hyperlink":
															var p = a.data.target ? 'target="'.concat(a.data.target, '" rel="noopener"') : "",
																h = c(a.data);
															return "<a ".concat(p, ' href="').concat(h, '">').concat(i, "</a>");
														case "label":
															return '<span className="'.concat(a.data.label, '">').concat(i, "</span>");
														case "span":
															return t || "";
														default:
															return ""
													}
												}))
											}
										})
									}), Object(y.jsxs)("span", {
										className: "read-more",
										style: {
											color: null === (a = c.palette) || void 0 === a || null === (t = a.primary) || void 0 === t ? void 0 : t.main
										},
										onClick: function() {
											return b(!u)
										},
										children: [" ", f(u ? "read_less" : "read_more")]
									})]
								})]
							})]
						})]
					})
				})),
				g = t(2421),
				v = (t(2431), function(e) {
					var a, t, i, n, r = e.textContent,
						s = e.unSelected,
						c = Object(d.a)();
					return Object(y.jsx)("div", {
						className: "bullet ".concat(s ? "unselected" : ""),
						style: {
							backgroundColor: null === (a = c.palette) || void 0 === a || null === (t = a.primary) || void 0 === t ? void 0 : t.main,
							color: null === (i = c.palette) || void 0 === i || null === (n = i.primary) || void 0 === n ? void 0 : n.contrastText
						},
						children: Object(y.jsx)("span", {
							children: r
						})
					})
				}),
				O = (t(2432), function(e) {
					var a, t, i = e.tabName,
						n = e.bulletText,
						r = e.selected,
						s = e.onClick,
						c = Object(d.a)(),
						o = "".concat(null === (a = c.palette) || void 0 === a || null === (t = a.primary) || void 0 === t ? void 0 : t.main, " solid");
					return Object(y.jsxs)("div", {
						"data-testid": i,
						className: "shared-tab ".concat(r ? "selected" : "no-selected"),
						onClick: s,
						style: r ? {
							borderBottom: o
						} : {},
						children: [Object(y.jsx)("span", {
							children: i
						}), n && Object(y.jsx)(v, {
							textContent: n,
							unSelected: !r
						})]
					})
				}),
				_ = (t(2433), function(e) {
					var a = e.tabs,
						t = e.rightComponent,
						i = e.onSelectedTab,
						n = e.showTabDescription,
						s = Object(x.useState)(a.filter((function(e) {
							return e.selected
						}))[0]),
						c = Object(r.a)(s, 2),
						o = c[0],
						l = c[1];
					Object(x.useEffect)((function() {
						l(a.filter((function(e) {
							return e.selected
						}))[0])
					}), [a]);
					var d = n ? a : a.filter((function(e) {
						return "bets" === e.key
					}));
					return Object(y.jsx)("div", {
						className: "tabs-container",
						children: Object(y.jsxs)("div", {
							className: "shared-tabs",
							children: [d.length ? d.map((function(e, a) {
								return Object(y.jsx)(O, {
									onClick: function() {
										null === i || void 0 === i || i(e), l(e)
									},
									bulletText: e.bulletText,
									tabName: e.name,
									selected: (null === o || void 0 === o ? void 0 : o.key) === e.key
								}, a)
							})) : Object(y.jsx)(y.Fragment, {}), Object(y.jsx)("div", {
								className: "divisor",
								children: Object(y.jsx)("div", {
									className: "right-component-container",
									children: t
								})
							})]
						})
					})
				});
			t(2434), a.a = function(e) {
				var a = e.game,
					t = e.children,
					s = Object(p.useTranslate)(),
					d = Object(x.useState)("bets"),
					m = Object(r.a)(d, 2),
					u = m[0],
					k = m[1],
					h = Object(x.useState)(null),
					b = Object(r.a)(h, 2),
					f = b[0],
					v = b[1],
					O = Object(x.useState)([]),
					G = Object(r.a)(O, 2),
					D = G[0],
					B = G[1],
					E = Object(x.useState)(null),
					A = Object(r.a)(E, 2),
					V = A[0],
					S = A[1],
					w = Object(x.useState)(!0),
					N = Object(r.a)(w, 2),
					F = N[0],
					T = N[1],
					P = Object(x.useState)(!1),
					C = Object(r.a)(P, 2),
					L = C[0],
					M = C[1];
				Object(x.useEffect)((function() {
					var e = function() {
						var e = Object(n.a)(Object(i.a)().mark((function e() {
							var t;
							return Object(i.a)().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return T(!0), e.prev = 1, e.next = 4, l.a.getGameDescription(a);
									case 4:
										t = e.sent, S(t), T(!1), t && M(!0), e.next = 13;
										break;
									case 10:
										e.prev = 10, e.t0 = e.catch(1), T(!1);
									case 13:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 10]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
					e()
				}), [a]);
				var I = Object(x.useMemo)((function() {
						return {
							name: s("bets_count"),
							selected: "bets" === u,
							key: "bets"
						}
					}), [s, u]),
					R = Object(x.useMemo)((function() {
						return {
							name: s("game_description"),
							selected: "description" === u,
							key: "description"
						}
					}), [s, u]);
				return Object(x.useEffect)((function() {
					(function(e) {
						return c.apply(this, arguments)
					})(a).then((function(e) {
						e.image_url_new ? v(e.image_url_new) : e.image_url && v(e.image_url)
					}))
				}), [a]), Object(x.useEffect)((function() {
					t && B([I, R]), t || B([I]), t || B([R])
				}), [I, t, R, u]), Object(x.useEffect)((function() {
					t || k("description")
				}), [t]), 0 === D.length || 1 === D.length && !L ? Object(y.jsx)(y.Fragment, {}) : Object(y.jsx)("div", {
					className: "original-games-and-description-container",
					children: Object(y.jsxs)("div", {
						className: "original-games-and-description-container-tabs",
						children: [Object(y.jsx)(_, {
							tabs: D,
							onSelectedTab: function(e) {
								k(e.key)
							},
							showTabDescription: L
						}), "bets" === u && t, "description" === u && (Object(o.a)() ? Object(y.jsx)(g.a, {
							gameImage: f,
							gameId: a,
							prismicData: V,
							loading: F
						}) : Object(y.jsx)(j, {
							gameImage: f,
							gameId: a,
							prismicData: V,
							loading: F
						}))]
					})
				})
			}
		},
		2407: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return g
			}));
			var i = t(3),
				n = t(12),
				r = t(17),
				s = t(74),
				c = t(2411),
				o = t(0),
				l = t(42),
				x = t.n(l),
				d = t(18),
				m = t(62),
				u = t(24),
				k = t(56),
				p = t(35),
				h = t(648),
				b = (t(2442), t(3215)),
				f = t(2),
				y = ["challenge", "history", "type", "wallets", "current"];
			var j = Object(p.withRouter)(Object(d.b)((function(e) {
					return {
						wallets: e.user.wallets,
						current: e.user.current
					}
				}), (function(e) {
					return {}
				}))(Object(h.a)((function(e) {
					var a = e.challenge,
						t = (e.history, e.type),
						i = void 0 === t ? "active" : t,
						n = e.wallets,
						r = e.current,
						s = Object(k.a)(e, y),
						c = Object(m.useTranslate)(),
						o = s.convertToSelectedCurrency,
						l = n[r].deposit_currency.type,
						x = a.min_multiplier,
						d = a.game_name,
						u = a.eur_min_wagered,
						p = a.is_featured,
						h = a.reward_name,
						j = a.currency_rates.filter((function(e) {
							return e.currency === l
						})),
						g = l + " ";
					"EUR" !== l && j[0] ? g += (Number(j[0].rate) * Number(u)).toFixed(2) : g += o({
						from: "EUR",
						amount: +u
					});
					var v = "\n    ".concat(c("ch_card_text_1"), " ").concat(x, " ").concat(c("ch_card_text_2"), " ").concat(null === d ? c("any_games_challenge") : d, " ").concat(c("ch_card_text_3"), " ").concat(g);
					return Object(f.jsxs)("div", {
						className: "challenge__casino__box-challenge",
						children: [p && Object(f.jsx)("div", {
							className: "challenge__casino__feature-label",
							children: Object(f.jsx)(b.a, {})
						}), Object(f.jsxs)("div", {
							className: "challenge__casino__box-body",
							children: [Object(f.jsxs)("div", {
								className: "challenge__casino__box-info",
								children: [Object(f.jsxs)("h1", {
									className: "challenge__casino__multiplier-challenge",
									children: [x, "x Multiplier"]
								}), Object(f.jsx)("h1", {
									className: "challenge__casino__description-challenge",
									children: v
								})]
							}), Object(f.jsx)("div", {
								className: "challenge__casino__hr-challenge"
							}), Object(f.jsxs)("div", {
								className: "challenge__casino__prize-box-challenge",
								children: [Object(f.jsx)("h1", {
									className: "challenge__casino__prize-pot-challenge",
									children: c("active" === i ? "ch_card_prize_pot" : "ch_card_winning")
								}), "active" === i ? Object(f.jsx)("h1", {
									className: "challenge__casino__prize-value-pot-challenge",
									children: h
								}) : Object(f.jsx)("h1", {
									className: "challenge__casino__winning-value-challenge",
									children: h
								})]
							})]
						})]
					})
				})))),
				g = (t(2443), function(e) {
					var a = e.slugGame,
						t = Object(d.d)((function(e) {
							return e.user
						})),
						l = Object(o.useState)([]),
						k = Object(r.a)(l, 2),
						p = k[0],
						h = k[1],
						b = Object(o.useState)(1),
						y = Object(r.a)(b, 2),
						g = y[0],
						v = y[1];
					Object(o.useEffect)((function() {
						var e = function() {
							var e = Object(n.a)(Object(i.a)().mark((function e() {
								var t;
								return Object(i.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, c.a.getChallengeBySlug(g, "", a);
										case 3:
											null !== (t = e.sent) && void 0 !== t && t.challenges && h(t.challenges), e.next = 10;
											break;
										case 7:
											e.prev = 7, e.t0 = e.catch(0), h([]);
										case 10:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 7]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
						e()
					}), [a, g]);
					var O = Object(s.b)(t),
						_ = Object(m.useTranslate)();
					return O && p.length && a ? Object(f.jsxs)("div", {
						className: "container__challenges",
						children: [Object(f.jsxs)("div", {
							className: "challenge_top",
							children: [Object(f.jsxs)("div", {
								className: "challenge_left",
								children: [Object(f.jsx)("h3", {
									children: _("challenges")
								}), Object(f.jsxs)("div", {
									className: "challenge_page-controller",
									children: [Object(f.jsx)(x.a, {
										onClick: function() {
											v((function(e) {
												return e - 1
											}))
										},
										src: "/images/vector.svg",
										className: "vector-left"
									}), Object(f.jsx)(x.a, {
										onClick: function() {
											v((function(e) {
												return e + 1
											}))
										},
										src: "/images/vector.svg",
										className: "vector-right"
									})]
								})]
							}), Object(f.jsx)(u.a, {
								to: "/promotions/challenges",
								children: Object(f.jsxs)("p", {
									children: [_("view_all"), Object(f.jsx)(x.a, {
										src: "/images/vector.svg",
										className: "vector-right"
									})]
								})
							})]
						}), Object(f.jsx)("div", {
							className: "grid-container-challenge__casino",
							children: p.map((function(e) {
								return Object(f.jsx)(j, {
									challenge: e
								}, e.id)
							}))
						})]
					}) : null
				})
		},
		2412: function(e, a, t) {
			"use strict";
			var i = t(0),
				n = t(18),
				r = t(19),
				s = (t(2429), t(2));
			a.a = function(e) {
				var a = e.text,
					t = e.customUrl,
					c = e.disabled,
					o = e.gameSlug,
					l = e.children,
					x = e.isMobile,
					d = void 0 === x || x,
					m = Object(n.c)(),
					u = Object(i.useMemo)((function() {
						var e = "?s1=ss&s2=" + o,
							i = window.location.pathname + window.location.search,
							n = window.location.origin + i;
						return {
							title: "Blaze",
							text: a,
							url: t || n + e
						}
					}), [a, t, o]),
					k = Object(i.useMemo)((function() {
						return navigator.canShare ? navigator.canShare(u) : Boolean(navigator.share)
					}), [u]),
					p = function(e) {
						"AbortError" !== e.name && "Share canceled" !== e.message && m(Object(r.a)({
							translation_code: "something_went_wrong",
							type: "error"
						}))
					};
				return Object(s.jsx)(s.Fragment, {
					children: d && k && Object(s.jsx)("button", {
						disabled: c,
						className: "btn-share",
						onClick: function() {
							k && navigator.share(u).catch(p)
						},
						children: null !== l && void 0 !== l ? l : Object(s.jsx)("i", {
							className: "fas fa-share-alt"
						})
					})
				})
			}
		},
		2413: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return i
			}));
			var i = function(e, a, t, i, n) {
				if (t) {
					var r = e.real_balance;
					return e.bonus_balance > 0 && 0 === r && !a.includes(n) ? i("bonus_betting_disabled") : void 0
				}
			}
		},
		2421: function(e, a, t) {
			"use strict";
			var i = t(17),
				n = t(0),
				r = t(166),
				s = t(36),
				c = t(62),
				o = t(3145),
				l = t(433),
				x = t.n(l),
				d = t(2);
			a.a = function(e) {
				e.gameId;
				var a, t, l = e.gameImage,
					m = e.prismicData,
					u = e.loading,
					k = Object(r.a)(),
					p = Object(n.useState)(!1),
					h = Object(i.a)(p, 2),
					b = h[0],
					f = h[1],
					y = Object(c.useTranslate)();
				if (u || !m) return Object(d.jsx)(d.Fragment, {});
				return Object(d.jsxs)("div", {
					className: "game-description-container mobile",
					children: [Object(d.jsx)("div", {
						className: "game-description-title",
						children: Object(d.jsx)("h2", {
							children: m.title[0].text
						})
					}), Object(d.jsxs)("div", {
						className: "game-description-body",
						children: [Object(d.jsx)("div", {
							className: "image",
							children: Object(d.jsx)(s.CDNImage, {
								src: l
							})
						}), Object(d.jsxs)("div", {
							className: "tags-and-description",
							children: [Object(d.jsx)("div", {
								className: "feature-tags",
								children: m.tags[0].text.split(",").map((function(e) {
									return Object(d.jsx)("div", {
										className: "feature-tag",
										children: Object(d.jsx)("span", {
											children: e.toUpperCase()
										})
									})
								}))
							}), Object(d.jsxs)("div", {
								className: "description",
								children: [!b && Object(d.jsx)("p", {
									className: "collapsed",
									children: Object(d.jsxs)("p", {
										children: [m.description.map((function(e) {
											return e.text
										})).join(" ").slice(0, 450), "..."]
									})
								}), b && Object(d.jsx)("div", {
									className: "expanded",
									children: Object(d.jsx)("div", {
										dangerouslySetInnerHTML: {
											__html: o.a(m.description, null, (function(e, a, t, i) {
												var n, r, s = function(e) {
													return "/" + e.uid
												};
												switch (e) {
													case "heading1":
														return "<h1>".concat(i, "</h1>");
													case "heading2":
														return "<h2>".concat(i, "</h2>");
													case "heading3":
														return "<h3>".concat(i, "</h3>");
													case "heading4":
														return "<h4>".concat(i, "</h4>");
													case "heading5":
														return "<h5>".concat(i, "</h5>");
													case "heading6":
														return "<h6>".concat(i, "</h6>");
													case "paragraph":
														if (t.startsWith("{{") || t.endsWith("}}")) {
															var c = t.replace("{{", "").replace("}}", ""),
																o = m.body.find((function(e) {
																	return e.slice_type === c
																}));
															return o ? x.a.renderToString((n = o.items, r = o.primary, Object(d.jsxs)("table", {
																children: [Object(d.jsx)("thead", {
																	children: Object(d.jsx)("tr", {
																		children: Object.keys(n[0]).map((function(e, a) {
																			return Object.entries(r).length > 0 ? Object(d.jsx)("th", {
																				children: r["column_".concat(a + 1, "_header")]
																			}) : Object(d.jsx)("th", {
																				children: n[0][e]
																			})
																		}))
																	})
																}), Object(d.jsx)("tbody", {
																	children: (Object.entries(r).length > 0 ? n : n.slice(1)).map((function(e) {
																		return Object(d.jsx)("tr", {
																			children: Object.keys(e).map((function(a) {
																				var t, i;
																				return e[a] && null !== (t = e[a][0]) && void 0 !== t && t.text ? Object(d.jsx)("td", {
																					children: null === (i = e[a][0]) || void 0 === i ? void 0 : i.text
																				}) : e[a] ? Object(d.jsx)("td", {
																					children: e[a]
																				}) : void 0
																			}))
																		})
																	}))
																})]
															}))) : ""
														}
														return "<p>".concat(i, "</p>");
													case "preformatted":
														return "<pre>".concat(JSON.stringify(a.text), "</pre>");
													case "strong":
														return "<strong>".concat(i, "</strong>");
													case "em":
														return "<em>".concat(i, "</em>");
													case "list-item":
													case "o-list-item":
														return "<li>".concat(i, "</li>");
													case "group-list-item":
														return "<ul>".concat(i, "</ul>");
													case "group-o-list-item":
														return "<ol>".concat(i, "</ol>");
													case "image":
														var l = a.linkTo ? s(a.linkTo) : null,
															u = a.linkTo && a.linkTo.target ? 'target="'.concat(a.linkTo.target, '" rel="noopener"') : "",
															k = [a.label || "", "block-img"],
															p = '<img src="'.concat(a.url, '" alt="').concat(a.alt ? a.alt : "", '" copyright="').concat(a.copyright ? a.copyright : "", '" />');
														return '\n          <p className="'.concat(k.join(" "), '">\n            ').concat(l ? "<a ".concat(u, ' href="').concat(l, '">').concat(p, "</a>") : p, "\n          </p>\n        ");
													case "embed":
														return '\n          <div data-oembed="'.concat(a.oembed.embed_url, '"\n            data-oembed-type="').concat(a.oembed.type, '"\n            data-oembed-provider="').concat(a.oembed.provider_name, '"\n            >\n            ').concat(a.oembed.html, "\n          </div>\n        ");
													case "hyperlink":
														var h = a.data.target ? 'target="'.concat(a.data.target, '" rel="noopener"') : "",
															b = s(a.data);
														return "<a ".concat(h, ' href="').concat(b, '">').concat(i, "</a>");
													case "label":
														return '<span className="'.concat(a.data.label, '">').concat(i, "</span>");
													case "span":
														return t || "";
													default:
														return ""
												}
											}))
										}
									})
								}), Object(d.jsxs)("span", {
									className: "read-more",
									style: {
										color: null === (a = k.palette) || void 0 === a || null === (t = a.primary) || void 0 === t ? void 0 : t.main
									},
									onClick: function() {
										return f(!b)
									},
									children: [" ", y(b ? "read_less" : "read_more")]
								})]
							})]
						})]
					})]
				})
			}
		},
		2422: function(e, a, t) {
			"use strict";
			t(0);
			var i = t(2);
			a.a = function(e) {
				var a = e.fill,
					t = void 0 !== a && a;
				return Object(i.jsx)("svg", {
					width: "17",
					height: "16",
					viewBox: "0 0 17 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: Object(i.jsx)("path", {
						d: "M5.82519 4.85418L8.1374 0.217816C8.28454 -0.0726053 8.70495 -0.0726053 8.85209 0.217816L11.1748 4.85418C11.2379 4.96828 11.343 5.05126 11.4796 5.072L16.6611 5.80843C16.9869 5.84991 17.113 6.25443 16.8818 6.48262L13.1297 10.0921C13.0351 10.1855 12.9931 10.31 13.0141 10.4448L13.8969 15.5375C13.9495 15.8591 13.6131 16.108 13.3189 15.9524L8.68393 13.5461C8.56832 13.4838 8.43169 13.4838 8.31607 13.5461L3.68113 15.9524C3.38685 16.108 3.05053 15.8591 3.10308 15.5375L3.98592 10.4448C4.00695 10.3203 3.9649 10.1855 3.87031 10.0921L0.118219 6.48262C-0.113003 6.25443 0.0131181 5.86029 0.33893 5.80843L5.5204 5.06163C5.64652 5.04088 5.76213 4.95791 5.81468 4.84381L5.82519 4.85418Z",
						fill: t ? "yellow" : "#8C9099"
					})
				})
			}
		},
		2423: function(e, a, t) {
			"use strict";
			var i = t(23),
				n = t(18),
				r = t(45),
				s = t(4),
				c = t(2359),
				o = t(42),
				l = t.n(o),
				x = t(2456),
				d = t.n(x),
				m = t(175),
				u = t.n(m),
				k = t(2),
				p = function(e) {
					var a = e.openModalDraggable,
						t = e.game,
						i = u()(d.a.grey, Object(s.a)({}, d.a.slots, "slots" === t));
					return Object(k.jsx)("div", {
						className: d.a.greyImportant,
						children: Object(k.jsx)(c.default, {
							title: "tooltip_stats",
							children: Object(k.jsx)("button", {
								"data-testid": "stats-modal-button",
								className: i,
								onClick: function() {
									return a("stats")
								},
								children: Object(k.jsx)(l.a, {
									src: "/images/modals/stats.svg"
								})
							})
						})
					})
				};
			a.a = Object(r.e)(Object(n.b)(null, (function(e) {
				return {
					openModalDraggable: function(a) {
						e(Object(i.i)(a))
					}
				}
			}))(p))
		},
		2429: function(e, a, t) {},
		2430: function(e, a, t) {},
		2431: function(e, a, t) {},
		2432: function(e, a, t) {},
		2433: function(e, a, t) {},
		2434: function(e, a, t) {},
		2442: function(e, a, t) {},
		2443: function(e, a, t) {},
		2444: function(e, a, t) {},
		2455: function(e, a, t) {},
		2456: function(e, a, t) {
			e.exports = {
				greyImportant: "ButtonStatsModal_greyImportant__11aGN",
				grey: "ButtonStatsModal_grey__2NOT3",
				slots: "ButtonStatsModal_slots__2TVbT"
			}
		},
		2482: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return o
			}));
			var i = t(1),
				n = t(17),
				r = t(0),
				s = (t(2455), t(115)),
				c = t(2);

			function o(e) {
				var a = e.onChange,
					t = e.onBlur,
					o = e.onFocus,
					l = e.value,
					x = e.label,
					d = e.type,
					m = e.testId,
					u = e.tabIndex,
					k = e.tooltip,
					p = e.disabled,
					h = e.borderRadius,
					b = e.style,
					f = void 0 === b ? {} : b,
					y = Object(r.useState)(!1),
					j = Object(n.a)(y, 2),
					g = j[0],
					v = j[1],
					O = "input-field-wrapper";
				return (g || Object(s.isDecimalNumber)(l)) && (O += " filled"), Object(c.jsxs)("div", {
					style: Object(i.a)({
						borderRadius: h
					}, f),
					onClick: function(e) {
						var a = e.target.querySelector("input");
						a && !g && a.focus()
					},
					className: O,
					children: [Object(c.jsx)("span", {
						className: "label",
						children: x
					}), Object(c.jsx)("input", {
						"data-testid": m,
						type: d,
						className: "input-field",
						value: l,
						tabIndex: u,
						onChange: function(e) {
							a(e)
						},
						onFocus: function(e) {
							v(!0), o && o(e)
						},
						onBlur: function(e) {
							v(!1), t && t(e)
						},
						disabled: p
					}), k.enabled && Object(c.jsx)("div", {
						className: "tooltip ".concat(k.anchorPoint || "top-center"),
						children: k.text
					})]
				})
			}
		},
		2522: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return i
			}));
			var i = function(e) {
				return 1 === e ? "free_round_left_amount" : "free_rounds_left_amount"
			}
		},
		2531: function(e, a, t) {},
		2532: function(e, a, t) {},
		2581: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return n
			}));
			t(0);
			var i = t(2),
				n = function() {
					return Object(i.jsxs)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [Object(i.jsx)("path", {
							d: "M2 6H0V1C0 0.4 0.4 0 1 0H6V2H2V6Z",
							fill: "#8C9099"
						}), Object(i.jsx)("path", {
							d: "M16 6H14V2H10V0H15C15.6 0 16 0.4 16 1V6Z",
							fill: "#8C9099"
						}), Object(i.jsx)("path", {
							d: "M15 16H10V14H14V10H16V15C16 15.6 15.6 16 15 16Z",
							fill: "#8C9099"
						}), Object(i.jsx)("path", {
							d: "M6 16H1C0.4 16 0 15.6 0 15V10H2V14H6V16Z",
							fill: "#8C9099"
						})]
					})
				}
		},
		2582: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return n
			}));
			t(0);
			var i = t(2),
				n = function() {
					return Object(i.jsx)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: Object(i.jsx)("path", {
							d: "M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z",
							fill: "white"
						})
					})
				}
		},
		2590: function(e, a, t) {},
		3085: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return n
			}));
			var i = t(0);

			function n(e) {
				var a = Object(i.useRef)();
				return Object(i.useEffect)((function() {
					a.current = e
				}), [e]), a.current
			}
		},
		3212: function(e, a, t) {},
		3346: function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return i
			}));
			var i = function(e, a) {
				var t = e.isRevealed || e.showCard ? "flip-card-inner active" : " flip-card-inner",
					i = "cell" + (e.isRevealed || e.showCard ? "" : " hidden") + (e.isbomb ? " is-bomb" : "") + ((e.isRevealed || e.showCard) && e.isbomb ? " symbol-bomb flip-card-back flip-card-back-bomb" : !e.isRevealed && !e.showCard || e.isbomb ? "" : " flip-card-back flip-card-back-symbol"),
					n = "flip-card";
				return a && (n = e.isRevealed && e.showCard ? "flip-card wasRevelead" : "flip-card wasNotRevealed"), {
					classNameTranslate: t,
					classNameBack: i,
					classNameGameEndedOpacity: n
				}
			}
		},
		3883: function(e, a, t) {},
		3884: function(e, a, t) {},
		3885: function(e) {
			e.exports = JSON.parse('{"v":"5.7.13","fr":60,"ip":0,"op":120,"w":99,"h":99,"nm":"gem","ddd":0,"assets":[{"id":"comp_0","nm":"gemreveal","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-45,"ix":10},"p":{"a":0,"k":[1984.653,1146.847,0],"ix":2,"l":2},"a":{"a":0,"k":[556,163,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0.237,0.237],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":68,"s":[100,157.242,100]},{"t":90,"s":[600,157.242,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[57,252],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.917647058824,0.963680252374,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[527.5,163],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":18,"op":918,"st":18,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-45,"ix":10},"p":{"a":0,"k":[1984.653,1146.847,0],"ix":2,"l":2},"a":{"a":0,"k":[556,163,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0.237,0.237],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[100,157.242,100]},{"t":84,"s":[600,157.242,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[57,252],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.207843152214,0.635294117647,0.972549079446,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[527.5,163],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":12,"op":912,"st":12,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-45,"ix":10},"p":{"a":0,"k":[1984.653,1146.847,0],"ix":2,"l":2},"a":{"a":0,"k":[556,163,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0.237,0.237],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":56,"s":[100,157.242,100]},{"t":78,"s":[600,157.242,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[57,252],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.360784313725,0.654901960784,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[527.5,163],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":906,"st":6,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-45,"ix":10},"p":{"a":0,"k":[1984.653,1146.847,0],"ix":2,"l":2},"a":{"a":0,"k":[556,163,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0.237,0.237],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":50,"s":[100,157.242,100]},{"t":72,"s":[600,157.242,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[57,252],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.258823529412,0.470588265213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[527.5,163],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}]},{"id":"comp_1","nm":"gemshade","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":113,"s":[1877.979,1227.55,0],"to":[0,0,0],"ti":[0,0,0]},{"t":144,"s":[1779.479,1288.55,0]}],"ix":2,"l":2},"a":{"a":0,"k":[487.5,192,0],"ix":1,"l":2},"s":{"a":0,"k":[72.919,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[47,130],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.917647058824,0.963680252374,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[487.5,192],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}]},{"id":"comp_2","nm":"gemshade 2","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":113,"s":[1910.479,1253.55,0],"to":[0,0,0],"ti":[0,0,0]},{"t":144,"s":[1796.979,1350.55,0]}],"ix":2,"l":2},"a":{"a":0,"k":[487.5,192,0],"ix":1,"l":2},"s":{"a":0,"k":[72.919,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[47,130],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.917647058824,0.963680252374,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[487.5,192],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}]},{"id":"comp_3","nm":"gemshade 3","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":113,"s":[1883.479,1232.55,0],"to":[0,0,0],"ti":[0,0,0]},{"t":144,"s":[1784.979,1293.55,0]}],"ix":2,"l":2},"a":{"a":0,"k":[487.5,192,0],"ix":1,"l":2},"s":{"a":0,"k":[72.919,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[47,130],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.917647058824,0.963680252374,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[487.5,192],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"gemreveal","parent":2,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-347.537,-254.825,0],"ix":2,"l":2},"a":{"a":0,"k":[1440,1051,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[-2.999,-2.997],[0,-4.24],[0,0],[2.997,-2.999],[4.24,0],[0,0],[2.999,2.997],[0,4.24],[0,0],[-2.997,2.999],[-4.24,0],[0,0]],"o":[[2.999,2.997],[0,0],[0,4.24],[-2.997,2.999],[0,0],[-4.24,0],[-2.999,-2.997],[0,0],[0,-4.24],[2.997,-2.999],[0,0],[4.24,0]],"v":[[1935.943,1197.057],[1940.625,1208.36],[1940.625,1373.89],[1935.943,1385.193],[1924.639,1389.875],[1759.111,1389.875],[1747.807,1385.193],[1743.125,1373.89],[1743.125,1208.36],[1747.807,1197.057],[1759.111,1192.375],[1924.639,1192.375]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"},{"inv":false,"mode":"s","pt":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":19,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1828.774,986.778],[1786.597,1028.935],[2105.355,1347.694],[2147.532,1305.536]],"c":true}]},{"t":39,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1828.773,986.778],[1583.362,1233.702],[1902.121,1552.46],[2147.532,1305.536]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 2"}],"w":2880,"h":2102,"ip":-52,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"NULL Null 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[47.037,81.7,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"ip":-52,"op":775,"st":-125,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Null 2","parent":2,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.377],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":22,"s":[-11]},{"i":{"x":[0.458],"y":[1]},"o":{"x":[0.471],"y":[0]},"t":33,"s":[9]},{"i":{"x":[0.278],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":44,"s":[-2]},{"t":53,"s":[0]}],"ix":10},"p":{"a":0,"k":[50,50,0],"ix":2,"l":2},"a":{"a":0,"k":[51.335,130.791,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"gemshade","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-346.203,-174.034,0],"ix":2,"l":2},"a":{"a":0,"k":[1440,1051,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1879,1270.5],[1795.132,1270.5],[1804.303,1244.468],[1869.83,1244.468]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2880,"h":2102,"ip":-70,"op":830,"st":-70,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"gemshade 2","parent":3,"refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-346.203,-174.034,0],"ix":2,"l":2},"a":{"a":0,"k":[1440,1051,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[1878.25,1270.59],[1795.321,1270.59],[1836.839,1355.942]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2880,"h":2102,"ip":-74,"op":826,"st":-74,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"gemshade 3","parent":3,"refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-324.405,-185.158,0],"ix":2,"l":2},"a":{"a":0,"k":[1440,1051,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1815.879,1240.402],[1868.452,1246.006],[1848.371,1255.072],[1783.387,1255.072],[1763.306,1246.006]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2880,"h":2102,"ip":-78,"op":822,"st":-78,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"gemshade","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-346.203,-174.034,0],"ix":2,"l":2},"a":{"a":0,"k":[1440,1051,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1879,1270.5],[1795.132,1270.5],[1804.303,1244.468],[1869.83,1244.468]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2880,"h":2102,"ip":-82,"op":818,"st":-82,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"gemshade 2","parent":3,"refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-346.203,-174.034,0],"ix":2,"l":2},"a":{"a":0,"k":[1440,1051,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[1878.25,1270.59],[1795.321,1270.59],[1836.839,1355.942]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2880,"h":2102,"ip":-86,"op":814,"st":-86,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"gemshade 3","parent":3,"refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-324.405,-185.158,0],"ix":2,"l":2},"a":{"a":0,"k":[1440,1051,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1815.879,1240.402],[1868.452,1246.006],[1848.371,1255.072],[1783.387,1255.072],[1763.306,1246.006]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2880,"h":2102,"ip":-90,"op":810,"st":-90,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Group 1","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[86.772,45.756,0],"ix":2,"l":2},"a":{"a":0,"k":[17.689,-11.113,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.001,-0.002],[-0.586,-1.833],[-0.527,-1.611],[-0.264,-0.786],[-0.114,-0.33],[0.492,-1.036],[0.566,-1.224],[0.493,-1.084],[0,0],[-0.002,-0.001],[-0.001,0.002],[-1.381,2.653],[-0.553,1.079],[-0.465,0.929],[0,0],[0.029,0.081],[0.564,1.532],[0.352,0.93],[0.539,1.398],[0,0],[0.002,-0.001]],"o":[[0,0],[0.456,1.428],[0.309,0.945],[0.415,1.233],[-0.139,0.283],[-0.445,0.939],[-0.509,1.101],[-1.239,2.723],[-0.001,0.002],[0.002,0.001],[0,0],[0.55,-1.057],[0.615,-1.2],[0.655,-1.31],[0.038,-0.078],[0,0],[-0.287,-0.778],[-0.599,-1.585],[-0.692,-1.795],[-0.001,-0.002],[-0.002,0.001]],"v":[[16.259,-24.531],[17.266,-21.352],[18.801,-16.593],[19.676,-13.956],[20.527,-11.456],[19.524,-9.373],[17.973,-6.048],[16.444,-2.713],[14.178,2.304],[14.18,2.309],[14.184,2.307],[16.74,-2.568],[18.424,-5.828],[20.087,-9.098],[21.167,-11.292],[21.181,-11.541],[20.232,-14.152],[19.26,-16.754],[17.473,-21.425],[16.266,-24.534],[16.261,-24.536]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Group 2","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[6.539,50.389,0],"ix":2,"l":2},"a":{"a":0,"k":[-22.428,-8.797,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.001,-0.002],[1.023,-2.717],[0.388,-1.035],[-0.014,-0.136],[-0.075,-0.119],[-0.808,-1.268],[-0.965,-1.494],[-0.492,-0.751],[-0.488,-0.736],[-1.41,-2.099],[0,0],[-0.001,0.001],[0.001,0.002],[3.394,5.393],[1.389,2.18],[0.46,0.712],[0.456,0.697],[0.72,1.085],[0.285,0.427],[0.008,0.06],[-0.02,0.059],[-1.045,3.115],[0,0],[0.002,0.001]],"o":[[0,0],[-1.158,3.074],[-0.049,0.131],[0.014,0.136],[0.275,0.434],[0.7,1.098],[0.452,0.7],[0.465,0.709],[1.43,2.154],[3.553,5.29],[0.001,0.002],[0.002,-0.001],[0,0],[-1.347,-2.14],[-0.474,-0.745],[-0.487,-0.754],[-0.974,-1.488],[-0.831,-1.253],[-0.034,-0.051],[-0.008,-0.06],[0.353,-1.048],[0.923,-2.752],[0.001,-0.002],[-0.002,-0.001]],"v":[[-26.632,-29.112],[-28.555,-24.03],[-31.415,-16.398],[-31.465,-15.992],[-31.329,-15.604],[-29.657,-12.967],[-27.131,-9.025],[-25.712,-6.844],[-24.28,-4.673],[-19.946,1.818],[-13.391,11.519],[-13.387,11.52],[-13.385,11.515],[-19.594,1.589],[-23.769,-5.005],[-25.173,-7.195],[-26.59,-9.376],[-29.169,-13.285],[-30.901,-15.882],[-30.966,-16.051],[-30.95,-16.232],[-28.345,-23.955],[-26.625,-29.11],[-26.627,-29.114]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Group 3","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[15.465,45.756,0],"ix":2,"l":2},"a":{"a":0,"k":[-17.965,-11.113,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.001,-0.002],[0.68,-1.764],[0.592,-1.564],[0.285,-0.772],[0.157,-0.431],[-0.007,-0.127],[-0.057,-0.117],[-0.501,-0.999],[-0.598,-1.166],[-0.538,-1.035],[0,0],[-0.002,0.001],[0.001,0.002],[1.221,2.683],[0.502,1.086],[0.444,0.939],[0.181,0.376],[0.003,0.043],[-0.014,0.041],[-0.402,1.198],[-0.3,0.919],[-0.446,1.394],[0,0],[0.002,0.001]],"o":[[0,0],[-0.527,1.366],[-0.342,0.904],[-0.438,1.185],[-0.044,0.123],[0.007,0.127],[0.184,0.374],[0.466,0.929],[0.546,1.064],[1.361,2.615],[0.001,0.002],[0.002,-0.001],[0,0],[-0.483,-1.062],[-0.549,-1.19],[-0.478,-1.01],[-0.019,-0.039],[-0.003,-0.043],[0.148,-0.434],[0.262,-0.781],[0.519,-1.589],[0.576,-1.801],[0.001,-0.002],[-0.002,-0.001]],"v":[[-16.568,-24.534],[-17.752,-21.486],[-19.505,-16.907],[-20.46,-14.356],[-21.393,-11.797],[-21.447,-11.419],[-21.351,-11.048],[-20.288,-8.894],[-18.652,-5.683],[-16.997,-2.482],[-14.487,2.307],[-14.482,2.309],[-14.481,2.304],[-16.706,-2.624],[-18.207,-5.9],[-19.728,-9.167],[-20.769,-11.332],[-20.802,-11.456],[-20.785,-11.583],[-19.909,-14.161],[-19.053,-16.747],[-17.549,-21.415],[-16.562,-24.531],[-16.564,-24.536]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Group 4","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1.195,29.308,0],"ix":2,"l":2},"a":{"a":0,"k":[-25.1,-19.338,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-23.304,-12.407],[-27.177,-14.156],[-30.275,-18.864],[-29.32,-21.549]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-19.924,-14.876],[-20.88,-12.191],[-28.519,-23.799],[-27.563,-26.485]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":15,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Group 5","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[40.008,12.008,0],"ix":2,"l":2},"a":{"a":0,"k":[-5.693,-27.988,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[9.013,-24.533],[3.943,-24.533],[-8.936,-30.997],[-4.754,-31.443]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-2.216,-24.533],[-9.954,-24.533],[-20.399,-29.775],[-14.016,-30.455]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,1,1,1,0.5,1,1,1,1,1,1,1,0,0.5,0.5,0.25,1,0],"ix":9}},"s":{"a":0,"k":[-19.5,-30],"ix":5},"e":{"a":0,"k":[5.5,-25.333],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Group 6","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[82.423,83.912,0],"ix":2,"l":2},"a":{"a":0,"k":[15.515,7.965,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[20.965,-11.434],[31.106,-16.012],[-0.077,31.942]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.004,0.2,0.361,0.5,0.002,0.331,0.598,1,0,0.463,0.835],"ix":9}},"s":{"a":0,"k":[15.5,34],"ix":5},"e":{"a":0,"k":[15.5,-15.341],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Group 7","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[19.998,83.912,0],"ix":2,"l":2},"a":{"a":0,"k":[-15.698,7.965,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-21.149,-11.434],[-31.29,-16.012],[-0.107,31.942]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.004,0.2,0.361,0.5,0.002,0.331,0.598,1,0,0.463,0.835],"ix":9}},"s":{"a":0,"k":[-16.5,35],"ix":5},"e":{"a":0,"k":[-16.5,-15.465],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Group 8","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[51.181,88.49,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.107,10.254,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[20.965,-11.434],[-21.179,-11.434],[-0.079,31.941]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.008,0.459,0.831,0.5,0.129,0.567,0.916,1,0.251,0.675,1],"ix":9}},"s":{"a":0,"k":[-0.5,29],"ix":5},"e":{"a":0,"k":[-0.352,-9.667],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Group 9","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[51.235,32.017,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.08,-17.983,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[21.02,-11.434],[-21.179,-11.434],[-16.565,-24.532],[16.406,-24.532]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.008,0.459,0.831,0.5,0.129,0.567,0.916,1,0.251,0.675,1],"ix":9}},"s":{"a":0,"k":[-0.5,-10],"ix":5},"e":{"a":0,"k":[-0.5,-23.239],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Group 10","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[98.805,27.438,0],"ix":2,"l":2},"a":{"a":0,"k":[23.705,-20.273,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[26.445,-29.111],[31.107,-16.012],[20.966,-11.434],[16.304,-24.533]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.004,0.2,0.361,0.5,0.002,0.331,0.598,1,0,0.463,0.835],"ix":9}},"s":{"a":0,"k":[23.5,-10],"ix":5},"e":{"a":0,"k":[23.5,-28.822],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Group 11","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[3.617,27.438,0],"ix":2,"l":2},"a":{"a":0,"k":[-23.889,-20.273,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-26.628,-29.111],[-31.29,-16.012],[-21.149,-11.434],[-16.488,-24.533]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.004,0.2,0.361,0.5,0.002,0.331,0.598,1,0,0.463,0.835],"ix":9}},"s":{"a":0,"k":[-24.5,-10],"ix":5},"e":{"a":0,"k":[-24.5,-28.004],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Group 12","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[51.236,11.51,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.079,-28.237,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-0.079,-31.941],[26.47,-29.111],[16.329,-24.533],[-16.487,-24.533],[-26.628,-29.111]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.008,0.459,0.831,0.5,0.129,0.567,0.916,1,0.251,0.675,1],"ix":9}},"s":{"a":0,"k":[-0.5,-24],"ix":5},"e":{"a":0,"k":[-0.5,-32.049],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Group 13","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[51.394,67.983,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-31.5,-32],[31.16,-32],[31.16,32],[-31.5,32]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Layer 2","parent":3,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.332],"y":[1]},"o":{"x":[0.508],"y":[0]},"t":30,"s":[0]},{"i":{"x":[0.484],"y":[19.754]},"o":{"x":[0.539],"y":[0]},"t":56,"s":[100]},{"i":{"x":[0.615],"y":[1]},"o":{"x":[0.286],"y":[0.083]},"t":76,"s":[100]},{"t":92,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[104.074,-5.77,0],"ix":2,"l":2},"a":{"a":0,"k":[1145.056,-36.722,0],"ix":1,"l":2},"s":{"a":0,"k":[431.435,457.134,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1144.667,-68.389],[1118.778,-65.278],[1114,-52.611],[1145.222,-5.056],[1176.111,-52.389],[1171.333,-65.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.001,0.22,0.647,0.976,0.501,0.22,0.647,0.976,1,0.22,0.647,0.976,0.001,1,0.501,0.5,1,0],"ix":9}},"s":{"a":0,"k":[1144.873,-41.794],"ix":5},"e":{"a":0,"k":[1145.919,-60.44],"ix":6},"t":2,"h":{"a":0,"k":34.557,"ix":7},"a":{"a":0,"k":-9.001,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-12.548,20.174],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"Vector","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[54.864,-14.424,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.502,-1.502],[0,-2.123],[0,0],[1.501,-1.501],[2.123,0],[0,0],[1.501,1.502],[0,2.123],[0,0],[-1.502,1.501],[-2.123,0],[0,0]],"o":[[1.501,1.501],[0,0],[0,2.123],[-1.502,1.502],[0,0],[-2.123,0],[-1.502,-1.501],[0,0],[0,-2.123],[1.501,-1.502],[0,0],[2.123,0]],"v":[[47.106,-47.106],[49.45,-41.445],[49.45,41.445],[47.106,47.106],[41.445,49.45],[-41.445,49.45],[-47.106,47.106],[-49.45,41.445],[-49.45,-41.445],[-47.106,-47.106],[-41.445,-49.45],[41.445,-49.45]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.058823529631,0.098039217293,0.137254908681,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":21,"op":848,"st":-52,"bm":0}],"markers":[]}')
		},
		3886: function(e) {
			e.exports = JSON.parse('{"v":"5.7.13","fr":60,"ip":0,"op":120,"w":99,"h":99,"nm":"Bomb","ddd":0,"assets":[{"id":"comp_0","nm":"explosion","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":59,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":71,"s":[0,0,100]},{"t":94,"s":[344,344,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[-1.233]},"t":77,"s":[0.611764705882,0.215916951497,0.280217099657,1]},{"t":100,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":18,"op":918,"st":18,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 39","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":66,"s":[0,0,100]},{"t":89,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":66,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":89,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":13,"op":913,"st":13,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.396078437567,0.439215689898,0.486274510622,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 38","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 37","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 36","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 35","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 34","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 33","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Layer 32","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Layer 31","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Layer 30","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Layer 29","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Layer 28","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Layer 27","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Layer 26","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Layer 25","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Layer 24","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Layer 23","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Layer 22","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Layer 21","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Layer 20","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Layer 19","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"Layer 18","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"Layer 17","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":26,"ty":4,"nm":"Layer 16","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":27,"ty":4,"nm":"Layer 15","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"Layer 14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":29,"ty":4,"nm":"Layer 13","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":30,"ty":4,"nm":"Layer 12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":31,"ty":4,"nm":"Layer 11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":32,"ty":4,"nm":"Layer 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":33,"ty":4,"nm":"Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-31,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[0,0,100]},{"t":85,"s":[471,471,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":85,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":909,"st":9,"bm":0},{"ddd":0,"ind":34,"ty":4,"nm":"Layer 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":53,"s":[0,0,100]},{"t":76,"s":[583,583,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":59,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":82,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":35,"ty":4,"nm":"Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2274.5,861,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.185,0.185,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":53,"s":[0,0,100]},{"t":76,"s":[583,583,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.853],[1.31,1.998],[0,2.218],[7.664,0.568],[3.554,0],[1.874,-2.161],[1.07,0],[0,-6.505],[-0.01,-0.204],[0,-4.91],[-2.901,-2.704],[0,-0.375],[-3.805,0],[-0.175,0.013],[-4.937,0],[-2.4,1.675],[-0.806,0],[-1.032,3.097]],"o":[[0,-2.568],[0.873,-1.889],[0,-7.809],[-1.832,-2.752],[-3.085,0],[-0.985,-0.267],[-6.505,0],[0,0.206],[-3.678,2.696],[0,4.279],[-0.058,0.359],[0,3.805],[0.178,0],[2.692,3.713],[3.149,0],[0.731,0.227],[3.444,0],[5.385,-1.474]],"v":[[25.778,6.296],[23.7,-0.656],[25.074,-6.859],[11.365,-21.618],[2.852,-26.185],[-4.867,-22.651],[-7.954,-23.074],[-19.731,-11.296],[-19.701,-10.685],[-25.778,1.259],[-21.052,12.086],[-21.148,13.185],[-14.259,20.074],[-13.731,20.047],[-1.741,26.185],[6.722,23.521],[9.037,23.87],[16.43,18.537]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":59,"s":[0.945098039216,0.172549019608,0.298039215686,1]},{"t":82,"s":[0.322522103786,0.36895442009,0.419607847929,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}]},{"id":"comp_1","nm":"Pre-comp 2","layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.037],"y":[1]},"o":{"x":[0.475],"y":[0]},"t":75,"s":[18]},{"i":{"x":[0.09],"y":[1.003]},"o":{"x":[0.323],"y":[0]},"t":97,"s":[-17]},{"t":125,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.037,"y":1},"o":{"x":0.475,"y":0},"t":75,"s":[2290,856.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.09,"y":1},"o":{"x":0.323,"y":0},"t":97,"s":[2235,903.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":125,"s":[2235,903.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[30.198,73.762,0],"ix":1,"l":2},"s":{"a":0,"k":[202,202,100],"ix":6,"l":2}},"ao":0,"ip":24,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 4","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[26.453,-20.995],[30.802,-18.491],[28.773,-19.035],[29.447,-17.181],[26.453,-20.995]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.493,-20.486],[25.501,-13.366],[24.73,-16.245],[22.93,-14.101]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[25.796,-23.275],[25.783,-34.5],[26.999,-29.961],[29.836,-33.341]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":72,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 3","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.037],"y":[1]},"o":{"x":[0.475],"y":[0]},"t":75,"s":[18]},{"i":{"x":[0.09],"y":[1.001]},"o":{"x":[0.323],"y":[0]},"t":97,"s":[-17]},{"i":{"x":[0.09],"y":[0.998]},"o":{"x":[0.167],"y":[0]},"t":125,"s":[20]},{"t":149,"s":[0]}],"ix":10},"p":{"a":0,"k":[54.88,40.702,0],"ix":2,"l":2},"a":{"a":0,"k":[4.88,-9.298,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.241,-0.139],[0,-0.001],[-0.597,0.324],[-0.157,0.112],[-0.404,1.077],[0,0],[-0.057,1.846],[-0.239,1.344],[-1.444,-0.542],[-3.341,-2.485],[-0.396,0.532],[-0.024,0.202],[-0.093,-0.069],[0.396,-0.532],[0.532,0.396],[1.885,0.707],[0.652,-0.436],[0.182,-1.022],[0.049,-1.62],[0.357,-1.568],[0,0],[0.835,-0.596],[0.649,-0.131],[0,0],[0.539,0.501],[-0.168,0.091]],"o":[[0.223,0.152],[0,0],[0.606,0.308],[0.167,-0.107],[0.834,-0.596],[0,0],[0.357,-1.568],[0.049,-1.62],[0.376,-2.113],[1.884,0.707],[0.532,0.396],[0.13,-0.175],[0.092,0.068],[0.532,0.396],[-0.396,0.532],[-3.341,-2.486],[-1.443,-0.542],[-0.646,0.432],[-0.239,1.344],[-0.056,1.846],[0,0],[-0.404,1.077],[-0.471,0.337],[0,0],[-0.697,-0.402],[0.102,-0.163],[0,0]],"v":[[5.292,-11.425],[5.989,-10.987],[5.989,-10.987],[7.91,-11.011],[8.399,-11.333],[10.235,-13.875],[10.597,-15.166],[11.095,-20.438],[11.416,-25.009],[15.544,-27.119],[23.27,-22.442],[24.951,-22.689],[25.18,-23.264],[25.458,-23.058],[25.704,-21.377],[24.023,-21.13],[16.297,-25.807],[13.241,-26.018],[12.17,-23.697],[11.848,-19.126],[11.35,-13.854],[10.988,-12.563],[9.152,-10.021],[7.482,-9.298],[6.742,-9.675],[4.88,-11.039],[5.292,-11.425]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.117647059262,0.06274510175,0.086274512112,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.835,-0.596],[0.649,-0.131],[0,0],[0.539,0.501],[-0.431,-0.025],[-0.456,0.325],[-0.225,1.112],[0,0],[0,0],[-0.199,2.304],[-1.422,0.952],[-1.797,-0.45],[-4.344,-3.231],[0.396,-0.532],[0.532,0.396],[1.885,0.707],[0.652,-0.436],[0.182,-1.022],[0.049,-1.62],[0.357,-1.568]],"o":[[0,0],[-0.404,1.077],[-0.471,0.337],[0,0],[-0.697,-0.402],[0.214,-0.342],[0.781,0.045],[0.746,-0.534],[0,0],[0,0],[0.361,-2.253],[0.215,-2.497],[0.931,-0.622],[2.138,0.536],[0.532,0.396],[-0.396,0.532],[-3.341,-2.485],[-1.443,-0.542],[-0.646,0.432],[-0.239,1.344],[-0.056,1.846],[0,0]],"v":[[11.35,-13.853],[10.988,-12.563],[9.152,-10.021],[7.482,-9.298],[6.742,-9.675],[4.88,-11.039],[5.916,-11.561],[7.756,-11.976],[9.063,-14.578],[9.147,-15.199],[9.156,-15.253],[9.603,-22.534],[11.904,-28.015],[15.914,-28.444],[25.458,-23.058],[25.704,-21.377],[24.023,-21.13],[16.297,-25.806],[13.241,-26.018],[12.17,-23.697],[11.848,-19.126],[11.35,-13.853]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":72,"op":900,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 1","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,50,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[2.413,2.413],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[2.413,2.413],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-3.63,0.994],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[103.268,103.268],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[2.413,2.413],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[2.413,2.413],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-3.63,0.994],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[103.268,103.268],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[1.048,4.032],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[99.417,99.417],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-4.486,11.355],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[148.718,148.718],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.771,1.594],[-0.844,0.756],[-0.143,-1.31],[-0.195,0.134],[-2.682,1.837],[-0.073,-0.848],[-0.085,-1.005],[-0.388,-5.355],[2.718,-0.788],[2.367,-0.681],[1.018,3.683],[0.672,2.431],[-2.033,1.862]],"o":[[1.758,-1.61],[0.738,-0.664],[0.148,1.353],[0.309,-0.192],[2.682,-1.837],[0.642,-0.44],[0.087,1.005],[0.453,5.35],[0.217,2.999],[-2.365,0.686],[-3.433,0.987],[-0.671,-2.431],[-0.77,-2.79],[0,0]],"v":[[-14.674,7.141],[-9.366,2.352],[-7.043,0.272],[-6.621,4.131],[-5.911,3.687],[2.133,-1.828],[2.85,-1.415],[3.111,1.6],[4.449,17.653],[0.135,23.976],[-6.962,26.031],[-14.574,21.421],[-16.574,14.124],[-14.674,7.141]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-0.735,-2.728],[-0.755,-0.441],[-0.752,0.216],[-2.581,0.794],[0.458,1.722],[0.761,2.72],[1.73,-0.498],[2.523,-0.738],[-0.508,-1.864]],"o":[[0.742,2.726],[0.222,0.824],[0.658,0.428],[2.595,-0.744],[1.603,-0.492],[-0.728,-2.73],[-0.517,-1.848],[-2.526,0.728],[-1.743,0.509],[0,0]],"v":[[-13.913,12.867],[-11.679,21.043],[-10.279,22.943],[-8.123,23.188],[-0.348,20.917],[1.537,17.205],[-0.698,9.029],[-4.354,6.855],[-11.929,9.051],[-13.913,12.867]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.009,1.904],[-2.782,-1.606],[-0.009,-1.904],[2.782,1.606]],"o":[[1.584,-1.217],[2.582,1.49],[-1.584,1.217],[-2.581,-1.49]],"v":[[2.538,-15.359],[9.927,-14.802],[14.132,-9.118],[6.742,-9.675]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.117647059262,0.06274510175,0.086274512112,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.295,1.902],[-1.18,2.043],[-3.295,-1.902],[1.18,-2.043]],"o":[[-1.179,2.043],[-3.294,-1.902],[1.179,-2.043],[3.295,1.902],[0,0]],"v":[[14.849,-9.93],[6.742,-9.675],[2.911,-16.823],[11.017,-17.079],[14.849,-9.93]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.282352954149,0.090196080506,0.184313729405,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.959,-1.161],[-0.404,-0.887],[-0.115,-0.393],[-0.038,-0.398],[0.38,-0.71],[0.871,-0.425],[1.057,-0.077],[-0.001,-0.095],[-0.095,0.001],[-1.029,0.503],[-0.481,0.748],[0.206,1.29],[0.384,0.743],[0.868,0.87],[1.602,0.807],[0.047,-0.083],[-0.083,-0.048]],"o":[[1.441,0.945],[0.716,0.866],[0.183,0.402],[0.121,0.414],[0.081,0.84],[-0.416,0.808],[-0.808,0.394],[-0.095,0.001],[0.001,0.095],[1.391,0.063],[0.825,-0.403],[0.634,-1.028],[-0.117,-0.732],[-0.489,-0.947],[-1.107,-1.109],[-0.083,-0.048],[-0.048,0.083],[0,0]],"v":[[12.073,-18.928],[15.671,-15.706],[17.356,-13.061],[17.801,-11.867],[18.042,-10.647],[17.639,-8.297],[15.67,-6.45],[12.852,-5.736],[12.682,-5.561],[12.857,-5.39],[16.537,-6.054],[18.505,-7.798],[19.153,-11.336],[18.392,-13.565],[16.345,-16.319],[12.245,-19.227],[12.009,-19.165],[12.073,-18.928]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[5.084,2.935],[-1.82,3.152],[-5.084,-2.935],[1.82,-3.152]],"o":[[-1.82,3.153],[-5.084,-2.935],[1.82,-3.153],[5.084,2.935],[0,0]],"v":[[18.071,-8.048],[5.563,-7.653],[-0.35,-18.683],[12.159,-19.078],[18.071,-8.048]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.247,0.282,0.353,0.5,0.18,0.218,0.271,1,0.114,0.153,0.188],"ix":9}},"s":{"a":0,"k":[17,-14.5],"ix":5},"e":{"a":0,"k":[0.611,-12.111],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.103,-0.178],[5.084,2.935],[-1.82,3.153],[0,0],[0,0],[-3.82,-2.205],[-0.943,-2.268],[0,0]],"o":[[-0.075,0.189],[-1.82,3.152],[-5.084,-2.935],[0.117,-0.204],[0,0],[2.581,-1.251],[2.89,1.668],[0,0],[0,0]],"v":[[16.856,-5.662],[16.591,-5.112],[4.082,-4.718],[-1.831,-15.748],[-0.688,-17.94],[0.161,-17.545],[10.678,-16.143],[16.613,-9.89],[18.479,-9.022]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.059,0.098,0.137,0.5,0.059,0.098,0.137,1,0.059,0.098,0.137,0,1,0.5,0.5,1,0],"ix":9}},"s":{"a":0,"k":[-2,-14.5],"ix":5},"e":{"a":0,"k":[16.111,-4.556],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":5,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-2.222,-1.283],[1.82,-3.153],[5.613,3.24],[-1.6,3.168],[1.698,-0.98],[-6.919,-11.984],[-4.443,-2.105],[3.642,6.308],[-11.984,6.919],[-5.785,-1.174]],"o":[[2.066,0.286],[5.613,3.241],[-1.82,3.152],[-5.504,-3.178],[-1.8,0.546],[-11.984,6.919],[2.641,4.575],[-6.592,-1.484],[-6.919,-11.983],[5.508,-3.18],[0,0]],"v":[[2.318,-17.903],[8.895,-15.547],[15.767,-3.963],[2.299,-4.122],[-4.673,-15.521],[-9.937,-13.235],[-19.114,21.013],[-8.16,31.12],[-24.372,19.201],[-15.194,-15.047],[2.318,-17.903]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.247,0.282,0.353,0.5,0.18,0.218,0.271,1,0.114,0.153,0.188],"ix":9}},"s":{"a":0,"k":[-12,31.5],"ix":5},"e":{"a":0,"k":[-2.495,-22.34],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.118,-3.793],[0.695,-2.471],[0.676,-1.387],[0.554,-0.867],[1.395,-1.363],[1.695,-1.021],[1.783,-0.582],[1.896,-0.158],[-0.005,-0.081],[-0.081,0.005],[-1.91,0.526],[-1.764,0.967],[-1.449,1.333],[-1.095,1.667],[-0.462,0.968],[-0.397,1.56],[0.192,2.688],[2.158,3.541],[0.07,-0.04],[-0.04,-0.07]],"o":[[1.942,3.556],[0.08,2.59],[-0.417,1.48],[-0.447,0.919],[-1.026,1.606],[-1.356,1.324],[-1.672,1.016],[-1.851,0.605],[-0.081,0.005],[0.005,0.081],[1.935,-0.066],[1.86,-0.512],[1.798,-0.994],[1.501,-1.382],[0.592,-0.902],[0.696,-1.458],[0.659,-2.587],[-0.277,-3.873],[-0.041,-0.069],[-0.07,0.041],[0,0]],"v":[[18.926,-5.797],[21.952,5.374],[21.014,13.008],[19.372,17.318],[17.869,19.998],[14.238,24.472],[9.667,28.014],[4.468,30.404],[-1.17,31.548],[-1.307,31.702],[-1.152,31.84],[4.635,30.959],[10.086,28.741],[14.965,25.238],[18.868,20.645],[20.449,17.837],[22.092,13.297],[22.807,5.33],[19.18,-5.944],[18.98,-5.997],[18.926,-5.797]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[11.983,-6.919],[6.919,11.984],[-11.984,6.919],[-6.919,-11.984]],"o":[[6.919,11.984],[-11.984,6.919],[-6.919,-11.983],[11.983,-6.919],[0,0]],"v":[[19.053,-5.87],[9.877,28.377],[-24.372,19.201],[-15.194,-15.047],[19.053,-5.87]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.059,0.098,0.137,0.5,0.059,0.098,0.137,1,0.059,0.098,0.137,0,1,0.5,0.5,1,0],"ix":9}},"s":{"a":0,"k":[17.319,0.564],"ix":5},"e":{"a":0,"k":[-21.4,18.435],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":72,"op":900,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":35,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.037],"y":[1]},"o":{"x":[0.475],"y":[0]},"t":75,"s":[0]},{"i":{"x":[0.09],"y":[1.003]},"o":{"x":[0.323],"y":[0]},"t":97,"s":[-5]},{"t":125,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.037,"y":1},"o":{"x":0.475,"y":0},"t":75,"s":[2216.158,967.19,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.566,"y":0.566},"o":{"x":0.167,"y":0.167},"t":97,"s":[2260.158,925.19,0],"to":[0,0,0],"ti":[0,0,0]},{"t":114,"s":[2260.158,925.19,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-7.348,34.5,0],"ix":1,"l":2},"s":{"a":0,"k":[202,202,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.07,0.121],[-5.084,-2.935],[0.87,-3.128],[0.178,-0.308],[0.073,-0.102],[-0.372,-0.644],[11.984,-6.919],[6.919,11.984],[-11.984,6.919],[-4.934,-0.425]],"o":[[0.057,-0.126],[1.82,-3.153],[4.586,2.648],[-0.094,0.339],[-0.063,0.109],[0.418,0.596],[6.919,11.984],[-11.984,6.918],[-6.919,-11.983],[4.611,-2.662],[0,0]],"v":[[-5.229,-15.551],[-5.039,-15.921],[7.471,-16.316],[13.791,-6.258],[13.383,-5.285],[13.18,-4.968],[14.365,-3.107],[5.188,31.141],[-29.06,21.964],[-19.883,-12.284],[-5.229,-15.551]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.058823529631,0.098039217293,0.137254908681,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":72,"op":900,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 5","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[54.75,44.375,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[52,52,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"explosion 2","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-765.246,245.052,0],"ix":2,"l":2},"a":{"a":0,"k":[1440,1051,0],"ix":1,"l":2},"s":{"a":0,"k":[96.383,96.383,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[-2.993,-2.992],[0,-4.232],[0,0],[2.992,-2.993],[4.232,0],[0,0],[2.993,2.992],[0,4.232],[0,0],[-2.992,2.993],[-4.232,0],[0,0]],"o":[[2.993,2.992],[0,0],[0,4.232],[-2.992,2.993],[0,0],[-4.232,0],[-2.993,-2.992],[0,0],[0,-4.232],[2.992,-2.993],[0,0],[4.232,0]],"v":[[2368.961,764.909],[2373.635,776.191],[2373.635,941.413],[2368.961,952.695],[2357.679,957.368],[2192.458,957.368],[2181.176,952.695],[2176.502,941.413],[2176.502,776.191],[2181.176,764.909],[2192.458,760.235],[2357.679,760.235]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"},{"inv":false,"mode":"s","pt":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.2,"y":0},"t":19,"s":[{"i":[[0,0.014],[0.003,0.005],[0,0.005],[0.019,0.001],[0.009,0],[0.004,-0.005],[0.003,0],[0,-0.016],[0,0],[0,-0.012],[-0.007,-0.007],[0,-0.001],[-0.009,0],[0,0],[-0.012,0],[-0.006,0.004],[-0.002,0],[-0.002,0.008]],"o":[[0,-0.006],[0.002,-0.005],[0,-0.019],[-0.004,-0.007],[-0.007,0],[-0.002,-0.001],[-0.016,0],[0,0],[-0.009,0.007],[0,0.01],[0,0.001],[0,0.009],[0,0],[0.006,0.009],[0.008,0],[0.002,0.001],[0.008,0],[0.013,-0.004]],"v":[[2277.625,861.293],[2277.62,861.276],[2277.623,861.261],[2277.59,861.226],[2277.569,861.215],[2277.551,861.223],[2277.543,861.222],[2277.515,861.251],[2277.515,861.252],[2277.5,861.281],[2277.511,861.307],[2277.511,861.31],[2277.528,861.327],[2277.529,861.327],[2277.558,861.341],[2277.579,861.335],[2277.584,861.336],[2277.602,861.323]],"c":true}]},{"t":77,"s":[{"i":[[0,32.628],[7.297,11.138],[0,12.363],[42.718,3.162],[19.796,0],[10.441,-12.045],[5.969,0],[0,-36.262],[-0.075,-1.137],[0,-27.37],[-16.167,-15.077],[0,-2.091],[-21.219,0],[-0.973,0.075],[-27.524,0],[-13.378,9.337],[-4.491,0],[-5.744,17.266]],"o":[[0,-14.314],[4.865,-10.53],[0,-43.532],[-10.216,-15.343],[-17.214,0],[-5.501,-1.488],[-36.262,0],[0,1.151],[-20.508,15.025],[0,23.852],[-0.318,2.002],[0,21.209],[0.992,0],[15.006,20.699],[17.57,0],[4.079,1.263],[19.198,0],[30.013,-8.219]],"v":[[2419,894.077],[2407.418,855.322],[2415.071,820.739],[2338.654,738.461],[2291.202,713],[2248.167,732.698],[2230.952,730.345],[2165.295,796.003],[2165.482,799.408],[2131.596,865.997],[2157.941,926.354],[2157.398,932.482],[2195.812,970.887],[2198.75,970.737],[2265.587,1004.955],[2312.776,990.103],[2325.668,992.049],[2366.889,962.322]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 2"}],"w":2880,"h":2102,"ip":-53,"op":847,"st":-53,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Pre-comp 2","parent":1,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-796.914,254.351,0],"ix":2,"l":2},"a":{"a":0,"k":[1440,1051,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[-2.9,-2.899],[0,-4.101],[0,0],[2.899,-2.9],[4.101,0],[0,0],[2.9,2.899],[0,4.101],[0,0],[-2.899,2.9],[-4.101,0],[0,0]],"o":[[2.9,2.899],[0,0],[0,4.101],[-2.899,2.9],[0,0],[-4.101,0],[-2.9,-2.899],[0,0],[0,-4.101],[2.899,-2.9],[0,0],[4.101,0]],"v":[[2367.722,765.653],[2372.25,776.584],[2372.25,936.666],[2367.722,947.597],[2356.79,952.125],[2196.709,952.125],[2185.778,947.597],[2181.25,936.666],[2181.25,776.584],[2185.778,765.653],[2196.709,761.125],[2356.79,761.125]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":2880,"h":2102,"ip":-53,"op":847,"st":-53,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Vector","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[39.835,59.976,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[96.383,96.383,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.501,-1.502],[0,-2.123],[0,0],[1.502,-1.501],[2.123,0],[0,0],[1.501,1.502],[0,2.123],[0,0],[-1.502,1.501],[-2.123,0],[0,0]],"o":[[1.502,1.501],[0,0],[0,2.123],[-1.501,1.502],[0,0],[-2.123,0],[-1.502,-1.501],[0,0],[0,-2.123],[1.501,-1.502],[0,0],[2.123,0]],"v":[[47.106,-47.106],[49.45,-41.445],[49.45,41.445],[47.106,47.106],[41.445,49.45],[-41.445,49.45],[-47.106,47.106],[-49.45,41.445],[-49.45,-41.445],[-47.106,-47.106],[-41.445,-49.45],[41.445,-49.45]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.651,0.059,0.239,0.5,0.798,0.116,0.269,1,0.945,0.173,0.298],"ix":9}},"s":{"a":0,"k":[-48.246,45.667],"ix":5},"e":{"a":0,"k":[41.639,-45.655],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":19,"op":847,"st":-53,"bm":0}],"markers":[]}')
		},
		3887: function(e, a, t) {},
		3888: function(e, a, t) {},
		3889: function(e, a, t) {}
	}
]);
//# sourceMappingURL=207.23d5df32.chunk.js.map