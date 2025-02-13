/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext/index.js":
/*!*******************************************!*\
  !*** ./src/contexts/AuthContext/index.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_api__WEBPACK_IMPORTED_MODULE_3__]);\n_services_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // ✅ Carregar usuário e token do localStorage quando o app inicia\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            console.log(\"🔄 Verificando sessão no localStorage...\");\n            const token = localStorage.getItem(\"authToken\");\n            const storedUser = localStorage.getItem(\"userData\");\n            if (token && storedUser) {\n                console.log(\"✅ Usuário encontrado no localStorage:\", JSON.parse(storedUser));\n                _services_api__WEBPACK_IMPORTED_MODULE_3__.api.defaults.headers.Authorization = `Bearer ${token}`;\n                setUser(JSON.parse(storedUser)); // Converter string para objeto\n            } else {\n                console.log(\"❌ Nenhuma sessão encontrada. Usuário não logado.\");\n            }\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    // ✅ Login do usuário e salvar no localStorage\n    const login = async (email, password)=>{\n        try {\n            console.log(\"🔄 Iniciando login...\");\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.post(\"/api/users/login\", {\n                email,\n                password\n            });\n            console.log(\"✅ Login bem-sucedido! Resposta da API:\", response.data);\n            const { token, userData } = response.data;\n            // Garante que a role é salva corretamente\n            const userWithRole = {\n                ...userData,\n                role: userData.role || \"user\"\n            };\n            localStorage.setItem(\"authToken\", token);\n            localStorage.setItem(\"userData\", JSON.stringify(userWithRole));\n            _services_api__WEBPACK_IMPORTED_MODULE_3__.api.defaults.headers.Authorization = `Bearer ${token}`;\n            setUser(userWithRole);\n            console.log(\"🔀 Redirecionando para Home...\");\n            router.push(\"/Home\");\n        } catch (error) {\n            console.error(\"❌ Erro no login:\", error.response?.data || error.message);\n            throw new Error(\"Credenciais inválidas.\");\n        }\n    };\n    // ✅ Logout e remoção do localStorage\n    const logout = ()=>{\n        localStorage.removeItem(\"authToken\");\n        localStorage.removeItem(\"userData\");\n        setUser(null);\n        delete _services_api__WEBPACK_IMPORTED_MODULE_3__.api.defaults.headers.Authorization;\n        router.push(\"/Login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\GitHub\\\\projetopswtdw\\\\FrontEnd\\\\src\\\\contexts\\\\AuthContext\\\\index.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUMvQjtBQUNDO0FBRXpDLE1BQU1NLDRCQUFjTixvREFBYUE7QUFFMUIsU0FBU08sYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1RLFNBQVNQLHNEQUFTQTtJQUV4QixpRUFBaUU7SUFDakVGLGdEQUFTQTtrQ0FBQztZQUNSVSxRQUFRQyxHQUFHLENBQUM7WUFFWixNQUFNQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7WUFDbkMsTUFBTUMsYUFBYUYsYUFBYUMsT0FBTyxDQUFDO1lBRXhDLElBQUlGLFNBQVNHLFlBQVk7Z0JBQ3ZCTCxRQUFRQyxHQUFHLENBQUMseUNBQXlDSyxLQUFLQyxLQUFLLENBQUNGO2dCQUVoRVosOENBQUdBLENBQUNlLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUVSLE9BQU87Z0JBQ3RESixRQUFRUSxLQUFLQyxLQUFLLENBQUNGLGNBQWMsK0JBQStCO1lBQ2xFLE9BQU87Z0JBQ0xMLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0Y7aUNBQUcsRUFBRTtJQUVMLDhDQUE4QztJQUM5QyxNQUFNVSxRQUFRLE9BQU9DLE9BQU9DO1FBQzFCLElBQUk7WUFDQWIsUUFBUUMsR0FBRyxDQUFDO1lBRVosTUFBTWEsV0FBVyxNQUFNckIsOENBQUdBLENBQUNzQixJQUFJLENBQUMsb0JBQW9CO2dCQUFFSDtnQkFBT0M7WUFBUztZQUN0RWIsUUFBUUMsR0FBRyxDQUFDLDBDQUEwQ2EsU0FBU0UsSUFBSTtZQUVuRSxNQUFNLEVBQUVkLEtBQUssRUFBRWUsUUFBUSxFQUFFLEdBQUdILFNBQVNFLElBQUk7WUFFekMsMENBQTBDO1lBQzFDLE1BQU1FLGVBQWU7Z0JBQUUsR0FBR0QsUUFBUTtnQkFBRUUsTUFBTUYsU0FBU0UsSUFBSSxJQUFJO1lBQU87WUFFbEVoQixhQUFhaUIsT0FBTyxDQUFDLGFBQWFsQjtZQUNsQ0MsYUFBYWlCLE9BQU8sQ0FBQyxZQUFZZCxLQUFLZSxTQUFTLENBQUNIO1lBRWhEekIsOENBQUdBLENBQUNlLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUVSLE9BQU87WUFDdERKLFFBQVFvQjtZQUVSbEIsUUFBUUMsR0FBRyxDQUFDO1lBQ1pGLE9BQU91QixJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1p2QixRQUFRdUIsS0FBSyxDQUFDLG9CQUFvQkEsTUFBTVQsUUFBUSxFQUFFRSxRQUFRTyxNQUFNQyxPQUFPO1lBQ3ZFLE1BQU0sSUFBSUMsTUFBTTtRQUNwQjtJQUNKO0lBRUUscUNBQXFDO0lBQ3JDLE1BQU1DLFNBQVM7UUFDYnZCLGFBQWF3QixVQUFVLENBQUM7UUFDeEJ4QixhQUFhd0IsVUFBVSxDQUFDO1FBQ3hCN0IsUUFBUTtRQUNSLE9BQU9MLDhDQUFHQSxDQUFDZSxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsYUFBYTtRQUN6Q1gsT0FBT3VCLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUM1QixZQUFZa0MsUUFBUTtRQUFDQyxPQUFPO1lBQUVoQztZQUFNYztZQUFPZTtRQUFPO2tCQUNoRDlCOzs7Ozs7QUFHUDtBQUVPLFNBQVNrQztJQUNkLE9BQU96QyxpREFBVUEsQ0FBQ0s7QUFDcEIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUENcXERvY3VtZW50c1xcR2l0SHViXFxwcm9qZXRvcHN3dGR3XFxGcm9udEVuZFxcc3JjXFxjb250ZXh0c1xcQXV0aENvbnRleHRcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8g4pyFIENhcnJlZ2FyIHVzdcOhcmlvIGUgdG9rZW4gZG8gbG9jYWxTdG9yYWdlIHF1YW5kbyBvIGFwcCBpbmljaWFcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCLwn5SEIFZlcmlmaWNhbmRvIHNlc3PDo28gbm8gbG9jYWxTdG9yYWdlLi4uXCIpO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIik7XHJcbiAgICBjb25zdCBzdG9yZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyRGF0YVwiKTtcclxuXHJcbiAgICBpZiAodG9rZW4gJiYgc3RvcmVkVXNlcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuKchSBVc3XDoXJpbyBlbmNvbnRyYWRvIG5vIGxvY2FsU3RvcmFnZTpcIiwgSlNPTi5wYXJzZShzdG9yZWRVc2VyKSk7XHJcblxyXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgIHNldFVzZXIoSlNPTi5wYXJzZShzdG9yZWRVc2VyKSk7IC8vIENvbnZlcnRlciBzdHJpbmcgcGFyYSBvYmpldG9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi4p2MIE5lbmh1bWEgc2Vzc8OjbyBlbmNvbnRyYWRhLiBVc3XDoXJpbyBuw6NvIGxvZ2Fkby5cIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyDinIUgTG9naW4gZG8gdXN1w6FyaW8gZSBzYWx2YXIgbm8gbG9jYWxTdG9yYWdlXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+UhCBJbmljaWFuZG8gbG9naW4uLi5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvYXBpL3VzZXJzL2xvZ2luXCIsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIExvZ2luIGJlbS1zdWNlZGlkbyEgUmVzcG9zdGEgZGEgQVBJOlwiLCByZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgdXNlckRhdGEgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgIC8vIEdhcmFudGUgcXVlIGEgcm9sZSDDqSBzYWx2YSBjb3JyZXRhbWVudGVcclxuICAgICAgICBjb25zdCB1c2VyV2l0aFJvbGUgPSB7IC4uLnVzZXJEYXRhLCByb2xlOiB1c2VyRGF0YS5yb2xlIHx8IFwidXNlclwiIH07XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIHRva2VuKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJXaXRoUm9sZSkpO1xyXG5cclxuICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyV2l0aFJvbGUpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCflIAgUmVkaXJlY2lvbmFuZG8gcGFyYSBIb21lLi4uXCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL0hvbWVcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgRXJybyBubyBsb2dpbjpcIiwgZXJyb3IucmVzcG9uc2U/LmRhdGEgfHwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlZGVuY2lhaXMgaW52w6FsaWRhcy5cIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG4gIC8vIOKchSBMb2dvdXQgZSByZW1vw6fDo28gZG8gbG9jYWxTdG9yYWdlXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoVG9rZW5cIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJEYXRhXCIpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIGRlbGV0ZSBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uO1xyXG4gICAgcm91dGVyLnB1c2goXCIvTG9naW5cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbiwgbG9nb3V0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImFwaSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRVc2VyIiwiSlNPTiIsInBhcnNlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJ1c2VyRGF0YSIsInVzZXJXaXRoUm9sZSIsInJvbGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHVzaCIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext/index.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n // Importa o contexto\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\GitHub\\\\projetopswtdw\\\\FrontEnd\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Documents\\\\GitHub\\\\projetopswtdw\\\\FrontEnd\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3VCLENBQUMscUJBQXFCO0FBRTdELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILCtEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxQQ1xcRG9jdW1lbnRzXFxHaXRIdWJcXHByb2pldG9wc3d0ZHdcXEZyb250RW5kXFxzcmNcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dHMvQXV0aENvbnRleHRcIjsgLy8gSW1wb3J0YSBvIGNvbnRleHRvXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:5000\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLE1BQU1ELG9EQUFZLENBQUM7SUFDOUJHLFNBQVM7SUFDVEMsU0FBUztRQUFFLGdCQUFnQjtJQUFtQjtBQUNoRCxHQUFHIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFBDXFxEb2N1bWVudHNcXEdpdEh1YlxccHJvamV0b3Bzd3Rkd1xcRnJvbnRFbmRcXHNyY1xcc2VydmljZXNcXGFwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiLFxyXG4gIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();