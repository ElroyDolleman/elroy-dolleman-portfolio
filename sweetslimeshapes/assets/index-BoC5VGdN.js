import{t as e}from"./phaser-B_vcVLyb.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=`sweet-slime-shapes.`;function n(){try{return window.localStorage}catch{return}}function r(e,t){try{let n=e?.getItem(t)??null;return n===null?void 0:JSON.parse(n)}catch{return}}function i(e,t,n){try{e?.setItem(t,JSON.stringify(n))}catch{}}function a(e,t){try{if(e===void 0)return;Array.from({length:e.length},(t,n)=>e.key(n)).filter(e=>e!==null&&t(e)).forEach(t=>e.removeItem(t))}catch{}}var o=`${t}analytics`,s=100,c=class{_sinks;_store;_newId;_consent=`unknown`;_playerId;_returning;_firsts=new Set;_waiting=[];constructor({sinks:e,store:t,newId:n=l}){this._sinks=e,this._store=t,this._newId=n;let r=this.load();r!==void 0&&(this._consent=r.consent,this._playerId=r.id,r.firsts?.forEach(e=>this._firsts.add(e))),this._returning=this._playerId!==void 0,this._consent===`granted`&&this.startSinks()}get consent(){return this._consent}get isAvailable(){return this._sinks.length>0}get needsConsent(){return this.isAvailable&&this._consent===`unknown`}get isReturning(){return this._returning}setConsent(e){if(e){this._consent=`granted`,this._playerId??=this._newId(),this.save(),this.startSinks();let e=this._waiting;this._waiting=[],e.forEach(([e,t])=>this.send(e,t));return}let t=this._consent===`granted`;this._consent=`denied`,this._playerId=void 0,this._firsts.clear(),this._waiting=[],this.save(),t&&this.forEachSink(`stop`,e=>e.stop())}track(e,t){this._sinks.length!==0&&this._consent!==`denied`&&(this._consent===`unknown`?this._waiting.length<s&&this._waiting.push([e,t]):this.send(e,t))}isFirstTime(e){return!this._firsts.has(e)&&(this._firsts.add(e),this.save(),!0)}send(e,t){this.forEachSink(`send`,n=>n.send(e,t))}startSinks(){let e=this._playerId;e!==void 0&&this.forEachSink(`start`,t=>t.start(e))}forEachSink(e,t){for(let n of this._sinks)try{t(n)}catch(t){console.warn(`Analytics sink failed to ${e}`,t)}}load(){let e=r(this._store,o);if(typeof e!=`object`||!e)return;let{consent:t,id:n,firsts:i}=e;if(t===`denied`)return{consent:t};if(t===`granted`&&typeof n==`string`)return{consent:t,id:n,firsts:Array.isArray(i)?i.filter(e=>typeof e==`string`):[]}}save(){if(this._consent===`unknown`)return;let e=this._consent===`granted`?{consent:`granted`,id:this._playerId,firsts:[...this._firsts]}:{consent:`denied`};i(this._store,o,e)}};function l(){return Array.from(crypto.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,`0`)).join(``)}var u=class{_present;constructor(e){this._present=e}get present(){return this._present}keyPressed(){this._present=!0}};function d(){return window.matchMedia(`(pointer: coarse)`).matches}var f=[360,480,768,1024,1440,1920],p=600;function m(e){let t=f.findIndex(t=>e<t);return t===0?`<${f[0]}`:t===-1?`${f[f.length-1]}+`:`${f[t-1]}-${f[t]-1}`}var h=[0,...f].map(m),g=[`phone`,`tablet`,`desktop`];function _(e){return{device:v(e),viewportWidth:m(e.viewportWidth),viewportHeight:m(e.viewportHeight)}}function v({coarsePointer:e,screenWidth:t,screenHeight:n}){return e?Math.min(t,n)<p?`phone`:`tablet`:`desktop`}function ee(){return _({coarsePointer:d(),screenWidth:window.screen.width,screenHeight:window.screen.height,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight})}var te=`modulepreload`,ne=function(e,t){return new URL(e,t).href},re={},ie=function(e){return e.pathname.endsWith(`.css`)},ae=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},oe=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ne(t,n);let r=s(t),i=ie(r);return ae(re,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:te,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},se=32;function ce(e,t){return(t===`main`?e:`${e}-${t}`).slice(0,se)}var le=class{_keys;_build;_sdk;_loading;_pending=[];_stopped=!1;_failed=!1;constructor(e,t){this._keys=e,this._build=t}start(e){this._stopped=!1,this._sdk?.GameAnalytics.setEnabledEventSubmission(!0),this._loading??=this.load(e).catch(e=>{this._failed=!0,this._pending=[],console.warn(`GameAnalytics failed to load`,e)})}send(e,t){if(this._stopped||this._failed)return;let n=he(t);for(let r of me(e,t))this._sdk===void 0?this._pending.push([r,n]):ue(this._sdk,r,n)}stop(){this._stopped=!0,this._pending=[],this._sdk?.GameAnalytics.setEnabledEventSubmission(!1),a(n(),e=>e.startsWith(`GA::${this._keys.gameKey}::`))}async load(e){let{gameanalytics:t}=await oe(async()=>{let{gameanalytics:e}=await import(`./GameAnalytics.esm-CwD5GsE_.js`);return{gameanalytics:e}},[],import.meta.url),n=t.GameAnalytics;n.configureBuild(this._build),n.configureUserId(e),n.configureAvailableCustomDimensions01([...g]),n.configureAvailableCustomDimensions02([...h]),n.configureAvailableCustomDimensions03([...h]);let r=new Promise(e=>{let t={onRemoteConfigsUpdated:()=>{n.removeRemoteConfigsListener(t),e()}};n.addRemoteConfigsListener(t)});if(n.initialize(this._keys.gameKey,this._keys.secretKey),await r,this._sdk=t,this._stopped){n.setEnabledEventSubmission(!1);return}let i=this._pending;this._pending=[],i.forEach(([e,n])=>ue(t,e,n))}};function ue(e,t,n){let r=e.GameAnalytics;switch(t.kind){case`progression`:r.addProgressionEvent(e.EGAProgressionStatus[t.status],t.level,``,``,void 0,n);break;case`design`:r.addDesignEvent(t.id,t.value,n);break;case`dimensions`:r.setCustomDimension01(t.values[0]),r.setCustomDimension02(t.values[1]),r.setCustomDimension03(t.values[2])}}function y(e){return e.replace(/[^A-Za-z0-9\s\-_.()!?]/g,`_`).slice(0,64)}var b=(e,t)=>({kind:`design`,id:e,value:t}),de=(e,t)=>({kind:`progression`,status:e,level:y(t)});function fe(e,t){let n=y(t.levelId);return[b(`${e}:time_ms:${n}`,t.timeMs),b(`${e}:moves:${n}`,t.moves),b(`${e}:undos:${n}`,t.undos),b(`${e}:restarts:${n}`,t.restarts),b(`${e}:deaths:${n}`,t.deaths),b(`${e}:used_hint:${n}`,Number(t.usedHint))]}var pe={game_start:({device:e,viewportWidth:t,viewportHeight:n,loadMs:r})=>[{kind:`dimensions`,values:[e,t,n]},b(`game:load_ms`,r)],level_start:({levelId:e})=>[de(`Start`,e)],first_move:({levelId:e,timeMs:t})=>[b(`level:first_move_ms:${y(e)}`,t)],first_undo:({levelId:e,timeMs:t})=>[b(`level:first_undo_ms:${y(e)}`,t)],level_complete:e=>[de(`Complete`,e.levelId),...fe(`complete`,e)],level_abandon:e=>[de(`Fail`,e.levelId),...fe(`abandon`,e)],campaign_complete:({moves:e,timeMs:t})=>[b(`campaign:moves`,e),b(`campaign:time_ms`,t)],hint_pressed:({levelId:e})=>[b(`hint:pressed:${y(e)}`)],hint_ad_prompt:({levelId:e})=>[b(`hint:ad_prompt:${y(e)}`)],ad_result:({levelId:e,result:t})=>[b(`hint:ad_${t}:${y(e)}`)],hint_restart_prompt:({levelId:e,accepted:t})=>[b(`hint:restart_${t?`accepted`:`declined`}:${y(e)}`)],levels_button_pressed:({levelId:e})=>[b(`ui:levels_button:${y(e)}`)],level_unlock_ad:({levelId:e,result:t})=>[b(`unlock:ad_${t}:${y(e)}`)]};function me(e,t){return pe[e](t)}function he(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e.replace(/[A-Z]/g,e=>`_${e.toLowerCase()}`),String(t)]))}var ge={title:`A Change In Color`,group:`Purple Slimes`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`###.V.#######....O##`,`###+++##..SO.....O##`,`###.......UO.....O##`,`###.P..&.U...S...O##`,`###.......UO.....O##`,`###__######O.....O##`,`###__########....O##`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rurrrrduudldrrrdrld`,hintSteps:19,solutionLength:61},_e={title:`Crossing Gaps`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`########.S..########`,`####...O....##....##`,`####S.PO....OO....##`,`####...O....##OOO.##`,`########....##....##`,`########.##.##.OOO##`,`########..........##`,`########..V..#######`,`########.....#######`,`########.....#######`,`####################`,`####################`,`####################`,`####################`],solution:`lrrrrrruud`,hintSteps:10,solutionLength:29},ve={title:`A Slice Rotation`,world:1,rows:[`####################`,`####################`,`####################`,`####################`,`####.###############`,`####V###############`,`####O###############`,`####O###############`,`####O###############`,`##................##`,`##................##`,`##.....^.SSSSSS.P.##`,`##................##`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`lulllllduul`,hintSteps:11,solutionLength:30},ye={title:`Slippery Switch`,world:1,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`########....########`,`#######...A.########`,`#######...A.########`,`######.......#...###`,`######P.S._..+...###`,`######.......+...###`,`#######......+.V.###`,`#######.A...##...###`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],ice:[`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`.........~.~........`,`.........~~~........`,`.........~~~........`,`.........~~~........`,`.........~.~........`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`],solution:`ururururrdlluldddrdluldldr`,hintSteps:26,solutionLength:52},be={title:`Plus Activation`,group:`Gems`,rows:[`####################`,`####################`,`####################`,`#####...############`,`####$._..###########`,`#####-...###########`,`####.....###########`,`####..........######`,`####.....S..*..#####`,`####....SSS*.*.#####`,`####PS...S..*..#####`,`####...........#####`,`#####.........######`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrdrdrrrruuruulull`,hintSteps:18,solutionLength:32},xe={title:`Push The Cake`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`#######P.....#######`,`#######.S.V..#######`,`#######.S....#######`,`#######.####.#######`,`#######......#######`,`#######......#######`,`#######......#######`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrrlllldd`,suggestUndo:!0,hintSteps:10,solutionLength:20},Se={title:`Slippery Edge`,group:`Ice Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`###...O..AA..##S.###`,`###..VOP.BB......###`,`###...O..AA..#...###`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],ice:[`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`...~~~..............`,`...~~~.........~~...`,`...~~~.........~~...`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`,`....................`],solution:`rurrllddrurrrd`,hintSteps:14,solutionLength:39},Ce={title:`Close The Gaps`,group:`Gems`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`######..S...########`,`####=.....AAOO..=###`,`###P==A..*AAOO.==V##`,`####=.....AAOO..=###`,`######..S...########`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrurddldrrrur`,hintSteps:14,solutionLength:32},we={title:`On The Edge`,rows:[`####################`,`####################`,`####################`,`####################`,`####OOO..^...OO..###`,`###OOOOO.....#OO..##`,`###OOOOOO#OOO##O.O##`,`###.....O#...##OVO##`,`###.....O#...#OOOO##`,`###.S...O#.....OOO##`,`###...P.O.....SOOO##`,`###.S...O#.....OOO##`,`###OOOOOO#OOOOOOOO##`,`###OOOOOO#OOOOOOOO##`,`####OOOOO#OOOOOOO###`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`uulullddrrddrrurrrrdrr`,hintSteps:22,solutionLength:45},Te={title:`Cut Me Out Of Here!`,world:2,rows:[`####################`,`####################`,`####################`,`####################`,`#######.....########`,`######.^.....#######`,`#####.........######`,`#####............###`,`#####...SSSSS....###`,`#####...SSSSS....###`,`######.#SSPSS....###`,`######V#SSSSS.^.####`,`########SSSSS..#####`,`##########...#######`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrurrdldluluululudl`,hintSteps:19,solutionLength:39},Ee={title:`Delivery Service`,world:1,rows:[`####################`,`######....##########`,`####.S.V...#########`,`####.......#########`,`####.......#########`,`#####..OO.....######`,`######OOO......#####`,`######OOO....S.#####`,`######OOO....S.#####`,`######OOO....S.#####`,`######OOO....S.#####`,`######OOOOOO...#####`,`######.........#####`,`######..........####`,`######.......P...###`,`#######..........###`,`########........####`,`####################`,`####################`,`####################`],solution:`ruuuulllluuuullludrrruu`,hintSteps:23,solutionLength:37},De={title:`Don't Drop The Cake`,world:2,rows:[`####################`,`####################`,`####################`,`####################`,`#######OOOOOsssssO##`,`#######OOOOOsOOOss##`,`#######OOOO.sOVOsp##`,`##OOOOOO....sO.OsO##`,`##OOOOOO.OOOssSssO##`,`##OOOO^...OOOO.OOO##`,`##OOOOOOO..OOO.OOO##`,`##OOOOOOOO.....OOO##`,`#######OOOOOOOOOOO##`,`#######OOOOOOOOOOO##`,`########OOOOOOOOO###`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`ddddddlllluululrudllrruuurrrdrrdddlllllulllllrrrdd`,hintSteps:50,solutionLength:66},Oe={title:`Face The Cake`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####.S.#############`,`####...#############`,`####OOO#######OOO###`,`##.......S.###OOO###`,`##.O.......###..O###`,`##.^..P...O....VO###`,`##.........###..O###`,`##.........###OOO###`,`##############OOO###`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrullllluuu`,hintSteps:12,solutionLength:33},ke={title:`Fitting In`,world:2,rows:[`####################`,`####......O.OOO#####`,`####..SS..O.O..#####`,`####...S..O...O#####`,`####..P...O..OO#####`,`####......O...O#####`,`###########.O..#####`,`############OO.#####`,`############.O.#####`,`############...#####`,`############.O.#####`,`########OO.#OOO#####`,`######..VOO##..#####`,`#####..#....OO.#####`,`#####.O.OOO.OO.#####`,`#####.O...O...######`,`######OO.....#######`,`####################`,`####################`,`####################`],solution:`drrruuuullrrrrddrdrddddddrddldll`,hintSteps:32,solutionLength:46},Ae={title:`Hi Cake!`,group:`Gems`,rows:[`####################`,`####################`,`####################`,`#######.....########`,`#######S.S.S########`,`#######.....########`,`#######S.S.S########`,`#######.....########`,`####.........#######`,`###..A.*.*.*.OOOOO##`,`###.PA.***.*.OOOOO##`,`###..A.*.*.*.OOOOO##`,`####.........#OOO###`,`######......##OOO###`,`#############OOOOO##`,`#############OOOOO##`,`#############OOVOO##`,`####################`,`####################`,`####################`],solution:`rrrrrruuruuul`,hintSteps:13,solutionLength:37},je={title:`Get The Cake Again`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`#######.....########`,`#######V....########`,`###########.########`,`###########.########`,`###########.########`,`#######P....S#######`,`#######......#######`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrdrr`,hintSteps:6,suggestUndo:!0,solutionLength:16},Me={title:`Get The Cake`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`##########......####`,`##########....V.####`,`#####...S..###..####`,`#####.P.........####`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrruurrr`,hintSteps:9,solutionLength:10},Ne={title:`Holesome`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`##############...###`,`#######..O..##.V.###`,`#######.OOO.##...###`,`#######.OC..###..###`,`####....OO.##....###`,`####.P..OS.##..#####`,`####.........SO#####`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrluur`,hintSteps:7,solutionLength:32},Pe={title:`Keep The Gate Open`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`###O.OOO.....+SSSS##`,`###O.OOO.P._.+....##`,`###O.OOO.....+....##`,`###OVO####.B########`,`##########..########`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rdddruurrrru`,hintSteps:12,solutionLength:25},Fe={title:`Try To Pass`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`###.S.#.P.##########`,`###..........+...###`,`###........_.+.V.###`,`###..........+...###`,`###.S.#.S.##########`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`ldlludddrurrur`,hintSteps:14,solutionLength:25},Ie={title:`Open The Box`,group:`Gems`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####.......#########`,`####........########`,`#=*=S.#.....#....###`,`#=*=..###....$.P.###`,`#=*=S.#.....#....###`,`####........########`,`####.......#########`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`lllllulllulllrdduuurrrrrdd`,hintSteps:26,solutionLength:44},Le={title:`Opening Up`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`#####............###`,`#####.......SSSSS###`,`#####.......SSSSS###`,`######^.....SSVSP###`,`#####.......SSSSS###`,`#####.......SSSSS###`,`#####............###`,`#######......#######`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`lllllullrrddllrurrrd`,hintSteps:20,solutionLength:40},Re={title:`Out Of The Box`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`#######.S#####..####`,`###......C.##....###`,`###.P....A....^V.###`,`###......C.##....###`,`#######S.#####..####`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrrdrluluu`,hintSteps:11,solutionLength:23},ze={title:`Growing Huge`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`###..........#######`,`###V..........######`,`#######.......######`,`###S.S.S.S....######`,`###.S.S.S.S...######`,`###P.S.S.S....######`,`###.S.S.S.S#########`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`duduurdu`,hintSteps:8,solutionLength:18},Be={title:`Press All The Buttons`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`######......########`,`#####........#######`,`#####..A.S...#######`,`####..._._...+...###`,`####.P.._....+.V.###`,`####..._._...+...###`,`#####..ABB...#######`,`#####...BB...#######`,`######......########`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rruulurrurdlllddddddrrrdruuurr`,hintSteps:30,solutionLength:58},Ve={title:`Building Bridges`,group:`Hard Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`######...###########`,`######BB....########`,`######....B.########`,`######--##.####.V.##`,`####.A..##.##OOOO.##`,`####.AAAO.B.O..OO.##`,`#SS+....O.-.O.S_O.##`,`####.P..O...O..OOO##`,`####...######OOOOO##`,`#############OOOOO##`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`luurruuurrrurrdldddlruuuulldlddddluuuurruuldddduuurrrdllrrdddrddluuuuurulllullddddldrrllldddruulurruuuuurrddrrdddldrr`,hintSteps:117,solutionLength:223},He={title:`Turnaround`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`##########......####`,`##########..#...####`,`##########..#...####`,`###..OO.....+...####`,`###V.ssSP._.+...####`,`###..OO.....+...####`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrrrduuuuull`,hintSteps:13,solutionLength:27},Ue={title:`Pushing Cake`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`########......######`,`########......######`,`########......######`,`########S.#.#.######`,`####P.A.V...#.######`,`########S.#.#.######`,`########......######`,`########......######`,`########......######`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrrruuurrdddd`,hintSteps:14,solutionLength:28},We={title:`Pushing Slime`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`############.V.#####`,`############OOO#####`,`############...#####`,`###########..S.#####`,`###########....#####`,`#####.....#....#####`,`#####.P..C.....#####`,`#####.....#...######`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rrrrrdruuulu`,hintSteps:12,solutionLength:19},Ge={title:`Shape Around It`,group:`Gems`,rows:[`####################`,`####################`,`####################`,`####################`,`#####..........#####`,`#####..........#####`,`#####...SSS....#####`,`###.....OOO....#####`,`###..S..O$O..S.#####`,`###..S.*.#.*.S.#####`,`###..S...#...S.#####`,`###............#####`,`###.....SSS....#####`,`###.P..........#####`,`###............#####`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rruuurruuurrrddddddlllll`,hintSteps:24,solutionLength:38},Ke={title:`Slice Of Life`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`##############OO####`,`##############OO####`,`###..OOO...###..####`,`##..P.......##V.####`,`##....S..^..O...####`,`##....SS....##..####`,`###..OOO...###..####`,`##############OO####`,`##############OO####`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rdrr`,hintSteps:4,solutionLength:14},qe={title:`Slice On Ice`,world:1,group:`Ice Levels`,rows:[`####################`,`####################`,`#######OOOOOO#######`,`####.........#######`,`####...........OO###`,`##OO............####`,`##O........#.....###`,`##O....^.........###`,`##O.S..........#.###`,`##O.....#........###`,`##O..............###`,`##O.........#....###`,`##.........###.#####`,`##.P....S.####.#V###`,`##.......#####...###`,`####################`,`####################`,`####################`,`####################`,`####################`],ice:[`....................`,`....................`,`....................`,`....~~~~~~~~~.......`,`....~~~~~~~~~~~.....`,`....~~~~~~~~~~~~....`,`...~~~~~~~~.~~~~~...`,`...~~~~.~~~~~~~~~...`,`...~~~~~~~~~~~~.~...`,`...~~~~~.~~~~~~~~...`,`...~~~~~~~~~~~~~~...`,`...~~~~~~~~~.~~~~...`,`.....~~~~~~...~.....`,`......~~~~..........`,`......~~~...........`,`....................`,`....................`,`....................`,`....................`,`....................`],solution:`rrurdrdruld`,hintSteps:11,solutionLength:26},Je={title:`Slice To Cross`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`###.......##########`,`##.........#########`,`##....^....#########`,`##.........#.OOO.###`,`##..SSS....#.OOO..##`,`##..SPS......OOOV.##`,`##..SSS....#.OOO..##`,`###.......##.OOO.###`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`luuururldlddrrudrdrruu`,hintSteps:22,solutionLength:41},Ye={title:`Slice With Care`,world:1,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`#########......#####`,`#########......#####`,`#########...S..#####`,`#########......#####`,`####....O..#########`,`####.P..O..O.^######`,`####....O..OOO######`,`#####.S####.V.######`,`###########OOO######`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`ddurrrruuuuururrdl`,hintSteps:18,solutionLength:32},Xe={title:`Slime Merge Valley`,group:`Purple Slimes`,rows:[`####################`,`####################`,`#########...########`,`########OOOV########`,`########OOO.########`,`########OOO#########`,`######..O&O#########`,`######..O.O#########`,`#####.UUOOO#########`,`#####.....O#########`,`####......O#########`,`####...SS.O#....####`,`#####.....O.USS.####`,`######....O.UU..####`,`#######...O.....####`,`########..###.P.####`,`####################`,`####################`,`####################`,`####################`],solution:`uullllrdlldlululu`,hintSteps:17,solutionLength:37},Ze={title:`Slime Together`,group:`Purple Slimes`,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`######.OOO.#OOOOO###`,`######UOOO.#OOOOO###`,`######U.SS....OOO###`,`######UUU.....OOO###`,`######..SS.P..OOO###`,`######O.UU....OOO_##`,`######O.......OOO###`,`######OO+OOOOOOOO###`,`######OOVOOOOOOOO###`,`######OOOOOOOOOOO###`,`####################`,`####################`,`####################`,`####################`],solution:`dldlllurruduulddrur`,hintSteps:19,solutionLength:51},Qe={title:`Stairway To Cake`,world:1,rows:[`####################`,`####################`,`###OOOOOOO##########`,`###O......##########`,`###O..V...O#########`,`###O......OO########`,`###O......OO.#######`,`###OOOOOOO#O..######`,`############OOO#####`,`#############OOO####`,`#####.P..........###`,`####.....S.......###`,`####.....S.......###`,`####.....S.^.....###`,`####.....S.......###`,`####.....S.......###`,`#####....S......####`,`####################`,`####################`,`####################`],solution:`rrdrrld`,hintSteps:7,solutionLength:30},$e={title:`Sticky Situation`,group:`Beginner Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`###########....#####`,`##########.V...#####`,`###########....#####`,`#############...####`,`#############..S####`,`#######...S##...####`,`#######.P......#####`,`#######....##..#####`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`rudrrrrurlu`,hintSteps:11,suggestUndo:!0,solutionLength:16},et={title:`Supply Chain`,world:2,group:`Hard Levels`,rows:[`####################`,`####################`,`####################`,`####################`,`###########...######`,`###########...######`,`###########OOO######`,`###########C.....###`,`####......O.C....###`,`####.P...SO..C...###`,`####....SSO......###`,`####......O......###`,`########...##...####`,`########..V.....####`,`########...#########`,`#########..#########`,`####################`,`####################`,`####################`,`####################`],solution:`urrrrrrrrruluuulddddlldrrurrddrdll`,hintSteps:34,solutionLength:117},tt={title:`Sweet Little Corner`,world:1,rows:[`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`,`#####...S.S.########`,`#####........#######`,`#####OOO##..P#######`,`#####OOO##.A.#######`,`#####VOO##..########`,`####################`,`####################`,`####################`,`####################`,`####################`,`####################`],solution:`dldluruul`,hintSteps:9,solutionLength:27},x=9225983,nt=1800,rt=.15,S={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}},C=Object.values(S),w=(e,t)=>(e+32768)*65536+(t+32768);function it(e,t){let n=new Set([w(e.x,e.y)]),r=[e];for(let e=0;e<r.length;e++)for(let i of C){let a=r[e].x+i.x,o=r[e].y+i.y;t(a,o)&&!n.has(w(a,o))&&(n.add(w(a,o)),r.push({x:a,y:o}))}return r}function at(e){let t=Object.keys(S).find(t=>S[t].x===e.x&&S[t].y===e.y);if(t===void 0)throw Error(`(${e.x}, ${e.y}) is not a unit direction`);return t}var ot=class{width;height;switchCount;gemCount;_tiles;_ice;constructor(e){this.width=e.width,this.height=e.height,this._tiles=e.tiles,this._ice=e.ice??[],this.switchCount=e.tiles.filter(e=>e===`switch`).length,this.gemCount=e.tiles.filter(e=>e===`gem`).length}tileAt(e,t){let n=this.indexOf(e,t);return n===-1?`solid`:this._tiles[n]}isIceAt(e,t){let n=this.indexOf(e,t);return n!==-1&&this._ice[n]===!0}indexOf(e,t){return e<0||t<0||e>=this.width||t>=this.height?-1:t*this.width+e}pointAt(e){return{x:e%this.width,y:Math.floor(e/this.width)}}},T=e=>e.status===`active`,E=e=>e.find(e=>e.kind===`player`),D=e=>T(e)&&e.fused;function st(e){let t=new Map(e.map(e=>[w(e.x,e.y),e])),n=new Set,r=[];for(let i of e)if(!n.has(i)){let e=it(i,(e,n)=>t.has(w(e,n))).map(e=>t.get(w(e.x,e.y)));e.forEach(e=>n.add(e)),r.push(e)}return r}var ct=(e,t)=>e.locked&&!t,O=e=>e.kind===`player`||e.kind===`slime`,lt=e=>[`green`,`purple`].flatMap(t=>st(e.filter(e=>e.color===t))),ut=e=>lt(e.filter(e=>O(e)&&T(e)&&!e.fused)),dt=e=>!e.pieces.some(e=>e.kind===`cake`&&T(e)),ft=e=>{let t=E(e.pieces);return t!==void 0&&!T(t)};function pt(e,t,n){let r=new Set;for(let i of t.filter(T))for(let t of i.shape)n(e.tileAt(i.x+t.x,i.y+t.y))&&r.add(e.indexOf(i.x+t.x,i.y+t.y));return r}var mt=(e,t)=>pt(e,t,e=>e===`switch`);function ht(e,t){return e.switchCount>0&&mt(e,t).size===e.switchCount}var gt=(e,t)=>e===(t?`spikeBlockOff`:`spikeBlockOn`),_t=(e,t)=>pt(e,t,e=>e===`gem`),vt=(e,t)=>e.gemCount>0&&_t(e,t).size===e.gemCount,yt=(e,{gemsActivated:t,brokenFloors:n},r,i)=>e.tileAt(r,i)===(t?`gemFloor`:`pit`)||n.includes(e.indexOf(r,i));function bt(e,t){let n=new Map;for(let r of t)for(let t of r.shape){let i=e.indexOf(r.x+t.x,r.y+t.y),a=n.get(i);a===void 0?n.set(i,[r]):a.push(r)}return n}function xt(e,t,n){let r=[],i=n?.pieces,a=St(e,t,r),o=wt(e,t,r),s=E(t),c=s!==void 0&&T(s);if(a||o||!c)for(let e of t)e.kind===`slime`&&(e.fused=!1);i!==void 0&&jt(e,t,i,r),c&&Tt(e,t);for(let e of t)e.fused&&i!==void 0&&!i[e.id].fused&&r.push({type:`fused`,id:e.id});let l=ut(t);i!==void 0&&Et(l,i,r);let u=n?.gemsActivated===!0||vt(e,t),d=n===void 0?[]:kt(e,t,n);return Dt(e,t,l,{gemsActivated:u,brokenFloors:d},r),s!==void 0&&T(s)&&Ot(s,t)&&r.push({type:`won`}),{events:r,gemsActivated:u,brokenFloors:d}}function St(e,t,n){let r=ht(e,t),i=!1;for(let a of[...t]){if(!T(a))continue;let o=a.shape.filter(t=>!gt(e.tileAt(a.x+t.x,a.y+t.y),r));if(o.length===a.shape.length)continue;if(i=!0,o.length===0){a.status=`dead`,n.push({type:`killed`,id:a.id});continue}let s=a.shape.filter(e=>!o.includes(e)).map(e=>({x:a.x+e.x,y:a.y+e.y}));n.push({type:`cut`,id:a.id,cells:s});let[c,...l]=Ct(o);a.shape=c;for(let e of l)t.push({...a,id:t.length,shape:e})}return i}function Ct(e){let t=(t,n)=>e.some(e=>e.x===t&&e.y===n),n=[];for(let r of e)n.some(e=>e.some(e=>e.x===r.x&&e.y===r.y))||n.push(it(r,t));return n}function wt(e,t,n){let r=!1;for(let i of t)T(i)&&i.kind!==`box`&&e.tileAt(i.x,i.y)===`spike`&&(i.status=`dead`,n.push({type:`killed`,id:i.id}),r=!0);return r}function Tt(e,t){let n=bt(e,t.filter(e=>e.kind===`slime`&&T(e))),r=t.filter(D);for(;r.length>0;){let t=r.pop();for(let i of C){let a=n.get(e.indexOf(t.x+i.x,t.y+i.y))??[];for(let e of a)!e.fused&&e.color===t.color&&(e.fused=!0,r.push(e))}}}function Et(e,t,n){let r=new Map(ut(t).flatMap(e=>e.map(t=>[t.id,e.length])));for(let t of e)for(let e of t)t.length>(r.get(e.id)??t.length)&&n.push({type:`fused`,id:e.id})}function Dt(e,t,n,r,i){let a=t=>t.shape.every(n=>yt(e,r,t.x+n.x,t.y+n.y)),o=t.filter(D),s=o.length>0&&o.every(a),c=new Set(n.filter(e=>e.every(a)).flat());for(let e of t)T(e)&&(O(e)&&!e.fused?c.has(e):e.fused?s:a(e))&&(e.status=`fallen`,i.push({type:`fell`,id:e.id}))}function Ot(e,t){return t.some(t=>t.kind===`cake`&&T(t)&&t.x===e.x&&t.y===e.y)}function kt(e,t,{pieces:n,brokenFloors:r}){let i=e=>e===`crackedFloor`,a=pt(e,t,i),o=[...pt(e,n,i)].filter(e=>!a.has(e)&&!r.includes(e));return o.length===0?r:[...r,...o].sort((e,t)=>e-t)}function At(e){switch(e){case`inkGreen`:return`green`;case`inkPurple`:return`purple`;default:return}}function jt(e,t,n,r){let i=t=>{let r=t.x!==n[t.id].x||t.y!==n[t.id].y,i=At(e.tileAt(t.x,t.y));return r&&i!==t.color?i:void 0};for(let e of lt(t.filter(e=>O(e)&&T(e)))){let t=e.map(i).find(e=>e!==void 0);if(t!==void 0)for(let n of e)n.color=t,r.push({type:`inked`,id:n.id})}}var Mt=[{x:0,y:0}];function Nt(e,t){let n=t.map((e,t)=>({id:t,kind:e.kind===`purpleSlime`?`slime`:e.kind,color:e.kind===`purpleSlime`?`purple`:`green`,x:e.x,y:e.y,shape:e.shape??Mt,status:`active`,fused:e.kind===`player`,locked:e.locked===!0})),{events:r,gemsActivated:i,brokenFloors:a}=xt(e,n);return{pieces:n,won:r.some(e=>e.type===`won`),gemsActivated:i,brokenFloors:a}}function Pt(e,t,n){let r=E(t.pieces);if(r===void 0||!T(r))return;let i=It(e,t,t.pieces.filter(D),n);if(i===void 0)return;let a=[],o=t,s=i;for(;s.length>0;){let t=Ft(e,o,s,n);a.push(t),s=t.state.won?[]:Vt(e,o,t.state,n),o=t.state}return{state:o,events:a.flatMap(e=>e.events),frames:a}}function Ft(e,t,n,r){let i=t.pieces.map(e=>({...e}));for(let e of n)i[e].x+=r.x,i[e].y+=r.y;let{events:a,gemsActivated:o,brokenFloors:s}=xt(e,i,t);return{state:{pieces:i,won:a.some(e=>e.type===`won`),gemsActivated:o,brokenFloors:s},events:a}}function It(e,{pieces:t,gemsActivated:n},r,i){let a=ht(e,t),o=bt(e,t.filter(T)),s=[...r],c=new Set(s.map(e=>e.id));for(let r=0;r<s.length;r++){let l=s[r];for(let r of l.shape){let u=l.x+r.x+i.x,d=l.y+r.y+i.y;if(!Bt(e.tileAt(u,d),l.kind,a))return;for(let r of o.get(e.indexOf(u,d))??[])if(!(c.has(r.id)||zt(l,r,n)))for(let e of Rt(r,t))c.add(e.id),s.push(e)}}return s.map(e=>e.id)}function Lt(e,{pieces:t,gemsActivated:n},r){let i=bt(e,t.filter(T)),a=new Set;for(let o of t.filter(D))for(let t of o.shape)(i.get(e.indexOf(o.x+t.x+r.x,o.y+t.y+r.y))??[]).filter(e=>e.kind===`cake`&&!zt(o,e,n)).forEach(e=>a.add(e.id));return[...a]}function Rt(e,t){return e.fused?t.filter(D):ut(t).find(t=>t.includes(e))??[e]}var zt=(e,t,n)=>e.kind===`player`&&t.kind===`cake`&&!ct(t,n)||e.kind===`cake`&&t.kind===`player`&&!ct(e,n);function Bt(e,t,n){if(gt(e,n))return!1;switch(e){case`solid`:return!1;case`spike`:return t!==`box`;default:return!0}}function Vt(e,t,n,r){let i=e=>{let n=t.pieces[e.id];return n!==void 0&&n.shape===e.shape&&(n.x!==e.x||n.y!==e.y)},a=n.pieces.filter(t=>T(t)&&!O(t)&&i(t)&&Ht(e,[t],n)).map(e=>[e]),o=n.pieces.filter(D);o.some(e=>e.kind===`player`&&i(e))&&Ht(e,o,n)&&a.push(o),a.push(...ut(n.pieces).filter(t=>t.some(i)&&Ht(e,t,n)));let s=a.flatMap(t=>It(e,n,t,r)??[]);return[...new Set(s)]}function Ht(e,t,n){let r=t.flatMap(e=>e.shape.map(t=>({x:e.x+t.x,y:e.y+t.y}))),i=({x:t,y:n})=>e.isIceAt(t,n);return r.some(i)&&r.every(t=>i(t)||yt(e,n,t.x,t.y))}var Ut=class{_board;_history=[];_path=[];_state;constructor(e){this._board=new ot(e),this._state=Nt(this._board,e.spawns)}get state(){return this._state}get canUndo(){return this._history.length>0}get stepCount(){return this._history.length}get path(){return[...this._path]}move(e){if(this._state.won)return;let t=Pt(this._board,this._state,e);return t!==void 0&&(this._history.push(this._state),this._path.push(at(e)),this._state=t.state),t}cakesInFront(e){return Lt(this._board,this._state,e)}undo(){let e=this._history.pop();return e!==void 0&&(this._path.pop(),this._state=e),e}},Wt={up:`u`,down:`d`,left:`l`,right:`r`},Gt=new Map(Object.keys(Wt).map(e=>[Wt[e],e]));function Kt(e){return e.map(e=>Wt[e]).join(``)}function qt(e){return[...e.trim().toLowerCase()].map((e,t)=>{let n=Gt.get(e);if(n===void 0)throw Error(`"${e}" at position ${t+1} is not one of u, d, l, r`);return n})}var Jt={"#":`solid`,".":`empty`,"^":`spike`,O:`pit`,"+":`spikeBlockOn`,"-":`spikeBlockOff`,_:`switch`,"*":`gem`,"=":`gemFloor`,"/":`crackedFloor`,"%":`inkGreen`,"&":`inkPurple`},Yt={P:`player`,S:`slime`,U:`purpleSlime`,V:`cake`,...Object.fromEntries([...`ABCDEFGHIJKLMNQRTWXYZ`].map(e=>[e,`box`]))},k={$:`cake`,...Object.fromEntries(Object.entries(Yt).flatMap(([e,t])=>[[e,t],[e.toLowerCase(),t]]))},Xt=e=>k[e]!==void 0&&e!==e.toUpperCase(),Zt=(e,t,n)=>e?.[n]?.[t]===`~`,Qt=e=>e===`.`||e===`_`||e===`*`||k[e]!==void 0&&!Xt(e),$t=class extends Error{constructor(e,t){super(`Level "${e}": ${t}`),this.name=`LevelParseError`}};function en(e,t){let n=sn(t.rows,t.ice)[0];if(n!==void 0)throw new $t(e,n);let{tiles:r,ice:i,spawns:a}=an(t.rows,t.ice),o=ln(e,t);return{id:e,width:t.rows[0].length,height:t.rows.length,tiles:r,ice:i,spawns:a,solution:o,hint:tn(o,t.hintSteps),suggestUndo:t.suggestUndo===!0}}function tn(e,t){return e.slice(0,rn(e.length,t))}var nn=e=>e.solutionLength??e.solution?.trim().length??0;function rn(e,t){let n=t??Math.floor(e/2);return Math.max(0,Math.min(e,Math.floor(n)))}function an(e,t){let n=[],r=[],i=[],a=new Set;return e.forEach((o,s)=>{[...o].forEach((o,c)=>{let l=k[o];if(l===`box`){if(!a.has(w(c,s))){let t=on(e,{x:c,y:s});t.forEach(e=>a.add(w(e.x,e.y))),i.push({kind:l,x:c,y:s,shape:t.map(e=>({x:e.x-c,y:e.y-s}))})}}else o===`$`?i.push({kind:l,x:c,y:s,locked:!0}):l!==void 0&&i.push({kind:l,x:c,y:s});n.push(l===void 0?Jt[o]:Xt(o)?`pit`:`empty`),r.push(Zt(t,c,s)&&Qt(o))})}),{tiles:n,ice:r,spawns:i}}function on(e,t){let n=e[t.y][t.x].toUpperCase();return it(t,(t,r)=>e[r]?.[t]?.toUpperCase()===n)}function sn(e,t){if(e.length===0||e[0].length===0)return[`has no rows`];let n=[];e.forEach((t,r)=>{t.length!==e[0].length&&n.push(`row ${r+1} has ${t.length} cells, expected ${e[0].length}`);for(let e of t)Jt[e]===void 0&&k[e]===void 0&&n.push(`row ${r+1} has unknown symbol "${e}"`);r>=17&&[...t].some(e=>e!==`#`)&&n.push(`row ${r+1} is under the touch panel, so it can only have walls`)}),n.push(...cn(e,t??[]));let r=e.join(``);return[...r].filter(e=>k[e]===`player`).length!==1&&n.push(`needs exactly one player`),[...r].some(e=>k[e]===`cake`)||n.push(`has no cake, so it can never be won`),r.includes(`$`)&&!r.includes(`*`)&&n.push(`has a locked cake but no gems, so the lock can never open`),n}function cn(e,t){let n=[];return t.length>0&&t.length!==e.length&&n.push(`has ${t.length} rows of ice, expected ${e.length}`),t.forEach((t,r)=>{t.length!==e[0].length&&n.push(`row ${r+1} of the ice has ${t.length} cells, expected ${e[0].length}`),[...t].forEach((t,i)=>{let a=e[r]?.[i];t!==`~`&&t!==`.`?n.push(`row ${r+1} of the ice has unknown symbol "${t}"`):t===`~`&&a!==void 0&&!Qt(a)&&n.push(`row ${r+1} has ice under "${a}"`)})}),n}function ln(e,t){try{return qt(t.solution??``)}catch(t){return console.warn(`Level "${e}": ignoring its recorded solution. ${t.message}`),[]}}function un(e){return e.split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}var dn=Object.assign({"../assets/levels/a-change-in-color.json":ge,"../assets/levels/a-hole-lot-to-learn.json":_e,"../assets/levels/a-slice-rotation.json":ve,"../assets/levels/another-ice-level.json":ye,"../assets/levels/big-shaping.json":be,"../assets/levels/bring-it-close.json":xe,"../assets/levels/cake-on-ice.json":Se,"../assets/levels/close-the-gaps.json":Ce,"../assets/levels/corner-platform.json":we,"../assets/levels/cut-it-out.json":Te,"../assets/levels/delivery-service.json":Ee,"../assets/levels/dont-drop-the-cake.json":De,"../assets/levels/face-the-cake.json":Oe,"../assets/levels/fitting-in.json":ke,"../assets/levels/get-in-shape.json":Ae,"../assets/levels/get-more-cake.json":je,"../assets/levels/get-the-cake-2.json":Me,"../assets/levels/holesome.json":Ne,"../assets/levels/keep-the-gate-open.json":Pe,"../assets/levels/locked-cake.json":Fe,"../assets/levels/open-the-box.json":Ie,"../assets/levels/opening-up.json":Le,"../assets/levels/out-of-the-box.json":Re,"../assets/levels/pick-me-up.json":ze,"../assets/levels/press-all-the-buttons.json":Be,"../assets/levels/press-to-open.json":Ve,"../assets/levels/push-and-open.json":He,"../assets/levels/pushing-boxes.json":Ue,"../assets/levels/pushitive-learning.json":We,"../assets/levels/shape-shifting.json":Ge,"../assets/levels/slice-of-life.json":Ke,"../assets/levels/slice-on-ice.json":qe,"../assets/levels/slice-to-cross.json":Je,"../assets/levels/slice-with-care.json":Ye,"../assets/levels/slime-carry.json":Xe,"../assets/levels/slime-with-slime.json":Ze,"../assets/levels/stairway-to-cake.json":Qe,"../assets/levels/sticky-situation.json":$e,"../assets/levels/supply-chain.json":et,"../assets/levels/sweet-little-corner.json":tt}),fn=new Map;function pn(e){let t=dn[`../assets/levels/${e}.json`];if(t===void 0)throw Error(`No level file for "${e}"`);return t}function mn(e){let t=fn.get(e);return t===void 0&&(t=en(e,pn(e)),fn.set(e,t)),t}var hn=class{_analytics;_run;constructor(e){this._analytics=e}get isAvailable(){return this._analytics.isAvailable}get needsConsent(){return this._analytics.needsConsent}get consentGranted(){return this._analytics.consent===`granted`}setConsent(e){this._analytics.setConsent(e)}gameStarted(e,t){this._analytics.track(`game_start`,{...t,visit:this._analytics.isReturning?`returning`:`first`,loadMs:Math.round(e)})}levelEntered(e){let t=this._run;(t===void 0||t.level.levelId!==e.levelId||t.level.levelIndex!==e.levelIndex)&&(t!==void 0&&!t.abandoned&&this._analytics.track(`level_abandon`,gn(t)),this._run={level:e,timeMs:0,moves:0,undos:0,restarts:0,deaths:0,usedHint:!1,abandoned:!1},this._analytics.track(`level_start`,e))}addPlayTime(e){this._run!==void 0&&(this._run.timeMs+=e)}moved(e){let t=this._run;t!==void 0&&(t.moves++,e&&t.deaths++,t.moves===1&&this._analytics.track(`first_move`,{...t.level,timeMs:Math.round(t.timeMs)}))}undone(){let e=this._run;e!==void 0&&(e.undos++,e.undos===1&&this._analytics.track(`first_undo`,{...e.level,timeMs:Math.round(e.timeMs),moves:e.moves}))}restarted(){this._run!==void 0&&this._run.restarts++}hintPlayed(){this._run!==void 0&&(this._run.usedHint=!0)}hintPressed(e){this.trackInLevel(`hint_pressed`,{unlocked:e})}adPrompted(){this.trackInLevel(`hint_ad_prompt`,{})}adFinished(e){this.trackInLevel(`ad_result`,{result:e})}restartPrompted(e){this.trackInLevel(`hint_restart_prompt`,{accepted:e})}levelsButtonPressed(){this.trackInLevel(`levels_button_pressed`,{})}levelUnlockAdFinished(e,t){this._analytics.track(`level_unlock_ad`,{...e,result:t?`watched`:`unfinished`})}levelWon(){let e=this._run;if(e===void 0)return;this._run=void 0;let t=this._analytics.isFirstTime(`complete:${e.level.levelId}`);this._analytics.track(`level_complete`,{...gn(e),firstCompletion:t,resumed:e.abandoned})}pageHidden(){let e=this._run;e===void 0||e.abandoned||(e.abandoned=!0,this._analytics.track(`level_abandon`,gn(e)))}campaignCompleted(e,t){this._analytics.track(`campaign_complete`,{moves:e,timeMs:Math.round(t)})}trackInLevel(e,t){this._run!==void 0&&this._analytics.track(e,{...this._run.level,...t})}};function gn({level:e,timeMs:t,moves:n,undos:r,restarts:i,deaths:a,usedHint:o}){return{...e,timeMs:Math.round(t),moves:n,undos:r,restarts:i,deaths:a,usedHint:o}}var _n=new URL(`background-music-D__pU654.m4a`,import.meta.url).href,vn=new URL(`background-music-BAqy_jV6.ogg`,import.meta.url).href,yn=`data:audio/mp4;base64,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`,bn=new URL(`box_destroyed-CQDJ0G9m.ogg`,import.meta.url).href,xn=new URL(`falling-DwTUy2ot.m4a`,import.meta.url).href,Sn=new URL(`falling-CGgJz98g.ogg`,import.meta.url).href,Cn=new URL(`fuse-CSoM6XEO.m4a`,import.meta.url).href,wn=new URL(`fuse-Bufhv0ki.ogg`,import.meta.url).href,Tn=new URL(`gem_open-qthNroVU.m4a`,import.meta.url).href,En=new URL(`gem_open-BZnj42Ul.ogg`,import.meta.url).href,Dn=new URL(`push-CJb9tJdq.m4a`,import.meta.url).href,On=new URL(`push-C34Gyx94.ogg`,import.meta.url).href,kn=new URL(`squash1-BccBGxXS.m4a`,import.meta.url).href,An=new URL(`squash1-DGD_Z5YN.ogg`,import.meta.url).href,jn=new URL(`squash2-BW8WTRv2.m4a`,import.meta.url).href,Mn=new URL(`squash2-B7TqnOGm.ogg`,import.meta.url).href,Nn=new URL(`squash3-BMg0206t.m4a`,import.meta.url).href,Pn=new URL(`squash3-CbeAMS5h.ogg`,import.meta.url).href,Fn=new URL(`switch_press-DE2LEYVJ.m4a`,import.meta.url).href,In=new URL(`switch_press-B-7RbK0f.ogg`,import.meta.url).href,Ln=`data:audio/mp4;base64,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`,Rn=new URL(`switch_unpress-UDoyhLp_.ogg`,import.meta.url).href,zn=new URL(`win-Cz2T265e.m4a`,import.meta.url).href,Bn=new URL(`win-D8Llrogi.ogg`,import.meta.url).href,Vn=[`ogg`,`m4a`],Hn=Object.assign({"../assets/audio/background-music.m4a":_n,"../assets/audio/background-music.ogg":vn,"../assets/audio/box_destroyed.m4a":yn,"../assets/audio/box_destroyed.ogg":bn,"../assets/audio/falling.m4a":xn,"../assets/audio/falling.ogg":Sn,"../assets/audio/fuse.m4a":Cn,"../assets/audio/fuse.ogg":wn,"../assets/audio/gem_open.m4a":Tn,"../assets/audio/gem_open.ogg":En,"../assets/audio/push.m4a":Dn,"../assets/audio/push.ogg":On,"../assets/audio/squash1.m4a":kn,"../assets/audio/squash1.ogg":An,"../assets/audio/squash2.m4a":jn,"../assets/audio/squash2.ogg":Mn,"../assets/audio/squash3.m4a":Nn,"../assets/audio/squash3.ogg":Pn,"../assets/audio/switch_press.m4a":Fn,"../assets/audio/switch_press.ogg":In,"../assets/audio/switch_unpress.m4a":Ln,"../assets/audio/switch_unpress.ogg":Rn,"../assets/audio/win.m4a":zn,"../assets/audio/win.ogg":Bn});function A(e){return Vn.map(t=>{let n=Hn[`../assets/audio/${e}.${t}`];if(n===void 0)throw Error(`Missing audio file ${e}.${t}`);return n})}var Un={squash1:{urls:A(`squash1`),volume:.36},squash2:{urls:A(`squash2`),volume:.5},squash3:{urls:A(`squash3`),volume:.35},fall:{urls:A(`falling`),volume:.32,rate:2},win:{urls:A(`win`),volume:.31},fuse:{urls:A(`fuse`),volume:.2},push:{urls:A(`push`),volume:.7},bonk:{urls:A(`push`),volume:.3,rate:1.7},switchPress:{urls:A(`switch_press`),volume:.8},switchUnpress:{urls:A(`switch_unpress`),volume:.8},gemOpen:{urls:A(`gem_open`),volume:.3},boxDestroyed:{urls:A(`box_destroyed`),volume:.25},floorBreak:{urls:A(`box_destroyed`),volume:.15,rate:1.4}},Wn=[`squash1`,`squash2`,`squash3`],Gn=`music`,Kn=A(`background-music`),qn=class{_sound;_settings;_music;constructor(e,t){this._sound=e,this._settings=t,t.onChange(()=>this.followMusicSetting())}static preload(e){for(let[t,{urls:n}]of Object.entries(Un))e.audio(t,n)}play(e){if(this._settings.value.soundsMuted)return;let{volume:t,rate:n}=Un[e];this._sound.play(e,{volume:t,rate:n})}playSquash(){this.play(Wn[Math.floor(Math.random()*Wn.length)])}startMusic(){this._music===void 0&&(this._music=this._sound.add(Gn,{loop:!0,volume:rt}),this.followMusicSetting())}followMusicSetting(){let e=this._music;e!==void 0&&(this._settings.value.musicMuted?e.isPlaying&&e.pause():e.isPaused?e.resume():e.isPlaying||e.play())}},Jn={hintsFrom:4,levelSelectFrom:4,levels:[`first-steps`,`get-the-cake-again`,`get-more-cake`,`sticky-situation`]},Yn={hintsFrom:9,levelSelectFrom:9,levels:`get-the-cake-2.get-more-cake.sticky-situation.bring-it-close.a-hole-lot-to-learn.pushing-boxes.pushitive-learning.slice-of-life.out-of-the-box.face-the-cake.holesome.delivery-service.sweet-little-corner.keep-the-gate-open.locked-cake.push-and-open.press-all-the-buttons.pick-me-up.cut-it-out.corner-platform.stairway-to-cake.another-ice-level.cake-on-ice.a-slice-rotation.slice-to-cross.slice-with-care.fitting-in.dont-drop-the-cake.slice-on-ice.opening-up.supply-chain.a-change-in-color.slime-carry.slime-with-slime.big-shaping.close-the-gaps.open-the-box.shape-shifting.get-in-shape.press-to-open`.split(`.`)},Xn={wallMain:`#ffb5d6`,wallHighlight:`#f7f7ff`,wallLight:`#ffd6ef`,wallFront:`#de84b5`,wallShade:`#bd63a5`,wallOutline:`#7b4a84`,floorLight:`#fff7de`,floorDark:`#ffe7c6`,floorEdge:`#efcead`,gapFace:`#d69c63`,gapOutline:`#8c6b31`};Object.keys(Xn);var Zn={walls:[`wallMain`,`wallHighlight`,`wallLight`,`wallFront`,`wallShade`,`wallOutline`],"floor-light":[`floorLight`,`floorEdge`],"floor-dark":[`floorDark`,`floorEdge`],gaps:[`gapFace`,`gapOutline`]},Qn=Object.keys(Zn),$n=[{from:`#b5ef94`,to:`#e7a5f7`},{from:`#9ce752`,to:`#c64aef`},{from:`#6bbd31`,to:`#733194`},{from:`#106342`,to:`#31294a`}];function er(e,t){return Zn[e].map(e=>({from:Xn[e],to:t[e]}))}var tr=e=>`#${e.toString(16).padStart(6,`0`)}`;function nr(e,t){let n=e.reduce((e,n)=>n.from<=t&&(e===void 0||n.from>e.from)?n:e,void 0);return n===void 0||n.theme==="default"?void 0:n.theme}var rr=[{from:1,theme:`default`},{from:11,theme:`yellow`},{from:21,theme:`purple`},{from:31,theme:`red`}];function ir(e,t){let n=pn(e),{title:r,world:i}=n,a=nn(n);return{id:e,title:r??un(e),world:i??0,theme:nr(rr,t+1),solutionLength:a>0?a:void 0}}var ar=Object.fromEntries(Object.entries(Object.assign({"./campaigns/easy.json":Jn,"./campaigns/main.json":Yn})).map(([e,t])=>[e.slice(12,-5),t])),or=`main`;function sr(e){let t=ar[e];if(t===void 0)throw Error(`No campaign called "${e}"`);return t}var cr=sr(or),lr=cr.levels.map((e,t)=>ir(e,t)),ur=e=>e===`reset`||e===`hint`,dr=class{_now;_held=new Set;_listeners=new Set;_pressed;_requests=new Set;constructor(e=()=>performance.now()){this._now=e}setDown(e,t){this._held.has(e)!==t&&(t?(this._held.add(e),this._pressed={button:e,at:this._now()},ur(e)&&this._requests.add(e)):this._held.delete(e),this._listeners.forEach(n=>n(e,t)))}isDown(e){return this._held.has(e)}releaseAll(){for(let e of[...this._held])this.setDown(e,!1)}onChange(e){return this._listeners.add(e),()=>this._listeners.delete(e)}takeRequest(e){return this._requests.delete(e)}ask(e){this._requests.add(e)}poll(){let e=this._pressed;if(this._pressed=void 0,e!==void 0&&!ur(e.button)&&this._now()-e.at<=150)return this.toCommand(e.button);if(this._held.has(`undo`))return{type:`undo`};let t=this.heldDirection();return t===void 0?void 0:{type:`move`,direction:t}}toCommand(e){return e===`undo`?{type:`undo`}:{type:`move`,direction:S[e]}}heldDirection(){let e=Number(this._held.has(`down`))-Number(this._held.has(`up`));if(e!==0)return e<0?S.up:S.down;let t=Number(this._held.has(`right`))-Number(this._held.has(`left`));if(t!==0)return t<0?S.left:S.right}},fr=`services`;function pr(e,t){e.registry.set(fr,t)}function j(e){let t=e.registry.get(fr);if(t===void 0)throw Error(`Services were not provided before the first scene started`);return t}var mr=class{_value;_listeners=new Set;constructor(e){this._value=e}get value(){return this._value}set(e){this._value!==e&&(this._value=e,this._listeners.forEach(t=>t(e)))}onChange(e){return this._listeners.add(e),()=>this._listeners.delete(e)}},hr=[`hint`,`levels`,`settings`,`undo`,`reset`],gr=class extends mr{constructor(){super(void 0)}hide(){this.set(void 0)}setPlayback(e){this.value!==void 0&&this.set({...this.value,playback:e})}},_r={hint:!1,levels:!1};function vr({hintsFrom:e,levelSelectFrom:t},n,r){let i=e=>r||n+1>=e;return{hint:i(e),levels:i(t)}}var yr=(e,t)=>vr(cr,e.levelIndex,t.isCompleted(e.level.id));function br(e,t){let n={hint:e.hint&&t,levels:e.levels};return{buttons:new Set(hr.filter(e=>n[e]??!0)),playback:!1}}var xr=.5;function Sr(e,t,n){let r=Math.max(xr,Math.min(e/320,t/440)),i=Math.min(3,n>0?n:1),a=Math.floor(320*r*i),o=a/320;return{width:a,height:Math.max(Math.ceil(440*o),Math.floor(t*i)),cssScale:1/i}}var Cr=e=>e/320;function wr(e){return Math.max(0,Math.floor((e-160-320)/2))}function Tr(e){return e-160}function Er(e){return Math.min(320,Tr(e)-wr(e))}var Dr=e=>Cr(e.scale.width),M=e=>e.scale.height/Dr(e);function Or(e,t){let n=Dr(e);return{x:t.x/n,y:t.y/n}}function kr(e,t){let n=e.cameras.main;return t.x>=n.x&&t.x<n.x+n.width&&t.y>=n.y&&t.y<n.y+n.height}var Ar={topLeft:{x:0,y:0},zoom:1};function jr(t,n,r,i=Ar){let{topLeft:a}=i,o=()=>{let e=Dr(t),{x:o,y:s,width:c,height:l}=r(M(t)),u=Math.round(o*e),d=Math.round(s*e);n.setViewport(u,d,Math.round((o+c)*e)-u,Math.round((s+l)*e)-d);let f=e*i.zoom;n.setZoom(f).centerOn(a.x+n.width/f/2,a.y+n.height/f/2)};o(),t.scale.on(e.Scale.Events.RESIZE,o),t.events.once(e.Scenes.Events.SHUTDOWN,()=>t.scale.off(e.Scale.Events.RESIZE,o))}function Mr(e){jr(e,e.cameras.main,e=>({x:0,y:0,width:320,height:e}))}function Nr(e){jr(e,e.cameras.main,e=>({x:0,y:wr(e),width:320,height:320}))}function Pr(t){let n=r=>{let i=Cr(t.scale.width);r instanceof e.GameObjects.Text&&r.style.resolution!==i?r.setResolution(i):r instanceof e.GameObjects.Container&&r.list.forEach(n)},r=()=>t.scene.scenes.forEach(e=>e.children.list.forEach(n));for(let r of t.scene.scenes)r.sys.events.on(e.Scenes.Events.ADDED_TO_SCENE,n);t.scale.on(e.Scale.Events.RESIZE,r),r()}var Fr={fontFamily:`Courier New, Courier, monospace`,fontSize:`16px`,color:`#ffffff`,align:`center`},N=e=>({width:Math.ceil(e.width),height:Math.ceil(e.height)}),Ir=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80">
<!-- The touch panel behind the controls. -->
<rect width="160" height="80" fill="#ffb5d6"/>
<rect x="2.5" y="2.5" width="155" height="76" rx="2" fill="none" stroke="#7b4a84"/>
</svg>
`,Lr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74">
<!-- The round pad behind the d-pad. -->
<circle cx="37" cy="37" r="36.5" fill="#ffd6ef" stroke="#de84b5"/>
</svg>
`,Rr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 32" data-frames="1" data-frame-names="up">
<!-- dpad-down-button, drawn up. The code draws it pressed, see pressedSwaps in src/ui/buttonColors.ts. -->
<g transform="translate(0 0)">
<defs><clipPath id="dpad-down-button-up"><path d="M12.2 0 H13.8 L25.4 11.4 V28 Q25.4 31.4 22 31.4 H4 Q0.6 31.4 0.6 28 V11.4 Z" transform="translate(0 0)"/></clipPath></defs>
<path d="M12.2 0 H13.8 L25.4 11.4 V28 Q25.4 31.4 22 31.4 H4 Q0.6 31.4 0.6 28 V11.4 Z" transform="translate(0 0)" fill="#bd63a5"/>
<rect x="0" y="28.6" width="26" height="3.4" fill="#7b4a84" clip-path="url(#dpad-down-button-up)"/>
<g transform="translate(0 0)">
	<path d="M0.6 12 V28 Q0.6 31.4 4 31.4 H22 Q25.4 31.4 25.4 28 V12" fill="none" stroke="#000000" stroke-width="1.2" stroke-linejoin="round"/>
	<path d="M7.4 18.8 H18.6 L13 24.8 Z" fill="#ffd6ef" stroke="#ffd6ef" stroke-width="0.8" stroke-linejoin="round"/>
</g>
</g>
</svg>
`,zr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 26" data-frames="1" data-frame-names="up">
<!-- dpad-left-button, drawn up. The code draws it pressed, see pressedSwaps in src/ui/buttonColors.ts. -->
<g transform="translate(0 0)">
<defs><clipPath id="dpad-left-button-up"><path d="M12.2 0 H13.8 L25.4 11.4 V28 Q25.4 31.4 22 31.4 H4 Q0.6 31.4 0.6 28 V11.4 Z" transform="translate(32 0) rotate(90)"/></clipPath></defs>
<path d="M12.2 0 H13.8 L25.4 11.4 V28 Q25.4 31.4 22 31.4 H4 Q0.6 31.4 0.6 28 V11.4 Z" transform="translate(32 0) rotate(90)" fill="#bd63a5"/>
<rect x="0" y="22.6" width="32" height="3.4" fill="#7b4a84" clip-path="url(#dpad-left-button-up)"/>
<g transform="translate(32 0) rotate(90)">
	<path d="M0.6 12 V28 Q0.6 31.4 4 31.4 H22 Q25.4 31.4 25.4 28 V12" fill="none" stroke="#000000" stroke-width="1.2" stroke-linejoin="round"/>
	<path d="M7.4 18.8 H18.6 L13 24.8 Z" fill="#ffd6ef" stroke="#ffd6ef" stroke-width="0.8" stroke-linejoin="round"/>
</g>
</g>
</svg>
`,Br=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 26" data-frames="1" data-frame-names="up">
<!-- dpad-right-button, drawn up. The code draws it pressed, see pressedSwaps in src/ui/buttonColors.ts. -->
<g transform="translate(0 0)">
<defs><clipPath id="dpad-right-button-up"><path d="M12.2 0 H13.8 L25.4 11.4 V28 Q25.4 31.4 22 31.4 H4 Q0.6 31.4 0.6 28 V11.4 Z" transform="translate(0 26) rotate(-90)"/></clipPath></defs>
<path d="M12.2 0 H13.8 L25.4 11.4 V28 Q25.4 31.4 22 31.4 H4 Q0.6 31.4 0.6 28 V11.4 Z" transform="translate(0 26) rotate(-90)" fill="#bd63a5"/>
<rect x="0" y="22.6" width="32" height="3.4" fill="#7b4a84" clip-path="url(#dpad-right-button-up)"/>
<g transform="translate(0 26) rotate(-90)">
	<path d="M0.6 12 V28 Q0.6 31.4 4 31.4 H22 Q25.4 31.4 25.4 28 V12" fill="none" stroke="#000000" stroke-width="1.2" stroke-linejoin="round"/>
	<path d="M7.4 18.8 H18.6 L13 24.8 Z" fill="#ffd6ef" stroke="#ffd6ef" stroke-width="0.8" stroke-linejoin="round"/>
</g>
</g>
</svg>
`,Vr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 32" data-frames="1" data-frame-names="up">
<!-- dpad-up-button, drawn up. The code draws it pressed, see pressedSwaps in src/ui/buttonColors.ts. -->
<g transform="translate(0 0)">
<defs><clipPath id="dpad-up-button-up"><path d="M12.2 0 H13.8 L25.4 11.4 V28 Q25.4 31.4 22 31.4 H4 Q0.6 31.4 0.6 28 V11.4 Z" transform="rotate(180 13 16)"/></clipPath></defs>
<path d="M12.2 0 H13.8 L25.4 11.4 V28 Q25.4 31.4 22 31.4 H4 Q0.6 31.4 0.6 28 V11.4 Z" transform="rotate(180 13 16)" fill="#bd63a5"/>

<g transform="rotate(180 13 16)">
	<path d="M0.6 12 V28 Q0.6 31.4 4 31.4 H22 Q25.4 31.4 25.4 28 V12" fill="none" stroke="#000000" stroke-width="1.2" stroke-linejoin="round"/>
	<path d="M7.4 18.8 H18.6 L13 24.8 Z" fill="#ffd6ef" stroke="#ffd6ef" stroke-width="0.8" stroke-linejoin="round"/>
</g>
</g>
</svg>
`,Hr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 44 16"
   data-frames="2"
   data-frame-names="up stop-up"
   version="1.1"
   id="svg11"
   sodipodi:docname="hint-button.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs11" />
  <sodipodi:namedview
     id="namedview11"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="20.181818"
     inkscape:cx="14.195946"
     inkscape:cy="9.786036"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g10" />
  <!-- Hint, and as the stop button while a hint plays, drawn up. The code draws them pressed, see pressedSwaps in src/ui/buttonColors.ts. -->
  <g
     transform="translate(0 0)"
     id="g7">
    <defs
       id="defs1">
      <clipPath
         id="small-0-f7de00">
        <rect
           x="0.6"
           y="0.6"
           width="20.8"
           height="14.8"
           rx="3"
           id="rect1" />
      </clipPath>
    </defs>
    <rect
       x="0.6"
       y="0.6"
       width="20.8"
       height="14.8"
       rx="3"
       fill="#f7de00"
       id="rect2" />
    <g
       clip-path="url(#small-0-f7de00)"
       id="g4">
      <rect
         x="0"
         y="0"
         width="22"
         height="2.2"
         fill="#f7f794"
         id="rect3" />
      <rect
         x="0"
         y="13"
         width="22"
         height="3"
         fill="#c69c00"
         id="rect4" />
    </g>
    <rect
       x="0.6"
       y="0.6"
       width="20.8"
       height="14.8"
       rx="3"
       fill="none"
       stroke="#000000"
       stroke-width="1.2"
       id="rect5" />
    <path
       d="M11 2.8 Q14.4 2.8 14.4 6 Q14.4 7.8 12.6 9 V9.8 H9.4 V9 Q7.6 7.8 7.6 6 Q7.6 2.8 11 2.8 Z"
       fill="#7b4a84"
       id="path5" />
    <path
       d="M9.4 10.6 H12.6 M9.8 11.8 H12.2"
       stroke="#7b4a84"
       stroke-width="0.9"
       stroke-linecap="round"
       id="path6" />
    <path
       d="M4.6 3.4 L5.8 4.2 M4.2 8.8 L5.4 8.2 M17.4 3.4 L16.2 4.2 M17.8 8.8 L16.6 8.2"
       stroke="#7b4a84"
       stroke-width="0.9"
       stroke-linecap="round"
       id="path7" />
  </g>
  <g
     transform="translate(22 0)"
     id="g11">
    <defs
       id="defs7">
      <clipPath
         id="small-2-f7de00">
        <rect
           x="0.6"
           y="0.6"
           width="20.8"
           height="14.8"
           rx="3"
           id="rect7" />
      </clipPath>
    </defs>
    <rect
       x="0.6"
       y="0.6"
       width="20.8"
       height="14.8"
       rx="3"
       fill="#f7de00"
       id="rect8" />
    <g
       clip-path="url(#small-2-f7de00)"
       id="g10">
      <rect
         x="0"
         y="0"
         width="22"
         height="2.2"
         fill="#f7f794"
         id="rect9" />
      <rect
         x="0"
         y="13"
         width="22"
         height="3"
         fill="#c69c00"
         id="rect10" />
    </g>
    <rect
       x="0.6"
       y="0.6"
       width="20.8"
       height="14.8"
       rx="3"
       fill="none"
       stroke="#000000"
       stroke-width="1.2"
       id="rect11" />
    <circle
       cx="11"
       cy="7.6"
       r="3"
       fill="#7b4a84"
       id="circle11" />
  </g>
</svg>
`,Ur=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 22 16"
   data-frames="1"
   data-frame-names="up"
   version="1.1"
   id="svg28"
   sodipodi:docname="levels-button.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs28" />
  <sodipodi:namedview
     id="namedview28"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="28.541401"
     inkscape:cx="19.638139"
     inkscape:cy="5.4832627"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g14" />
  <!-- Level select, drawn up. The code draws it pressed, see pressedSwaps in src/ui/buttonColors.ts. -->
  <g
     id="g14">
    <defs
       id="defs1">
      <clipPath
         id="small-0-9c73ff">
        <rect
           x="0.6"
           y="0.6"
           width="20.8"
           height="14.8"
           rx="3"
           id="rect1" />
      </clipPath>
    </defs>
    <rect
       x="0.6"
       y="0.6"
       width="20.8"
       height="14.8"
       rx="3"
       fill="#9c73ff"
       id="rect2" />
    <g
       clip-path="url(#small-0-9c73ff)"
       id="g4">
      <rect
         x="0"
         y="0"
         width="22"
         height="2.2"
         fill="#ad9cff"
         id="rect3" />
      <rect
         x="0"
         y="13"
         width="22"
         height="3"
         fill="#6b4ac6"
         id="rect4" />
      <path
         d="m 0,13 c 1.3333333,0 2,0 2,0 z m 22,0 c -1.333333,0 -2,0 -2,0 z"
         fill="#6b4ac6"
         id="path4"
         sodipodi:nodetypes="cccccc" />
    </g>
    <rect
       x="0.6"
       y="0.6"
       width="20.8"
       height="14.8"
       rx="3"
       fill="none"
       stroke="#000000"
       stroke-width="1.2"
       id="rect5" />
    <rect
       x="6"
       y="4"
       width="3"
       height="2"
       rx="0.5"
       fill="#ad9cff"
       id="rect6"
       style="fill:#ffffff" />
    <rect
       x="6"
       y="7"
       width="3"
       height="2"
       rx="0.5"
       fill="#ad9cff"
       id="rect7"
       style="fill:#ffffff" />
    <rect
       x="6"
       y="10"
       width="3"
       height="2"
       rx="0.5"
       fill="#ad9cff"
       id="rect8"
       style="fill:#ffffff" />
    <rect
       x="10"
       y="4"
       width="3"
       height="2"
       rx="0.5"
       fill="#ad9cff"
       id="rect9"
       style="fill:#ffffff" />
    <rect
       x="10"
       y="7"
       width="3"
       height="2"
       rx="0.5"
       fill="#ad9cff"
       id="rect10"
       style="fill:#ffffff" />
    <rect
       x="10"
       y="10"
       width="3"
       height="2"
       rx="0.5"
       fill="#ad9cff"
       id="rect11"
       style="fill:#ffffff" />
    <rect
       x="14"
       y="4"
       width="3"
       height="2"
       rx="0.5"
       fill="#ad9cff"
       id="rect12"
       style="fill:#ffffff" />
    <rect
       x="14"
       y="7"
       width="3"
       height="2"
       rx="0.5"
       fill="#ad9cff"
       id="rect13"
       style="fill:#ffffff" />
    <rect
       x="14"
       y="10"
       width="3"
       height="2"
       rx="0.5"
       fill="#ad9cff"
       id="rect14"
       style="fill:#ffffff" />
  </g>
</svg>
`,Wr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" data-frames="1" data-frame-names="up">
<!-- Restart, drawn up. The code draws it pressed, see pressedSwaps in src/ui/buttonColors.ts. -->
<g>
<defs><clipPath id="round-f73952"><circle cx="11" cy="11" r="10.4"/></clipPath></defs>
<circle cx="11" cy="11" r="10.4" fill="#f73952"/>
<g clip-path="url(#round-f73952)">
	<path d="M-1 13 Q11 24 23 13 V24 H-1 Z" fill="#ad0042"/>
	<path d="M-1 4.6 Q11 -3 23 4.6 V-1 H-1 Z" fill="#f7948c"/>
</g>
<path d="M4.2 6.4 Q5.6 3.6 8.4 3" fill="none" stroke="#ffd6ef" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.9"/>
<circle cx="11" cy="11" r="10.4" fill="none" stroke="#000000" stroke-width="1.2"/>
<path d="M6.4 10.4 Q6.4 7.4 9.6 7.4 H15.4 M13.4 5.4 L15.6 7.4 L13.4 9.4 M15.6 11.6 Q15.6 14.6 12.4 14.6 H6.6 M8.6 12.6 L6.4 14.6 L8.6 16.6" fill="none" stroke="#ffd6ef" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`,Gr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 22 16"
   data-frames="1"
   data-frame-names="up"
   version="1.1"
   id="svg27"
   sodipodi:docname="settings-button.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs27" />
  <sodipodi:namedview
     id="namedview27"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="28.541401"
     inkscape:cx="20.408949"
     inkscape:cy="10.003013"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g17" />
  <!-- Settings, drawn up. The code draws it pressed, see pressedSwaps in src/ui/buttonColors.ts. -->
  <g
     id="g14">
    <defs
       id="defs1">
      <clipPath
         id="small-0-9c73ff">
        <rect
           x="0.6"
           y="0.6"
           width="20.8"
           height="14.8"
           rx="3"
           id="rect1" />
      </clipPath>
    </defs>
    <rect
       x="0.6"
       y="0.6"
       width="20.8"
       height="14.8"
       rx="3"
       fill="#9c73ff"
       id="rect2" />
    <g
       clip-path="url(#small-0-9c73ff)"
       id="g4">
      <rect
         x="0"
         y="0"
         width="22"
         height="2.2"
         fill="#ad9cff"
         id="rect3" />
      <rect
         x="0"
         y="13"
         width="22"
         height="3"
         fill="#6b4ac6"
         id="rect4" />
    </g>
    <rect
       x="0.6"
       y="0.6"
       width="20.8"
       height="14.8"
       rx="3"
       fill="none"
       stroke="#000000"
       stroke-width="1.2"
       id="rect5" />
    <rect
       x="10.2"
       y="2.4"
       width="1.6"
       height="2.6"
       rx="0.4"
       fill="#ffd6ef"
       transform="rotate(0 11 7.6)"
       id="rect6" />
    <rect
       x="10.2"
       y="2.4"
       width="1.6"
       height="2.6"
       rx="0.4"
       fill="#ffd6ef"
       transform="rotate(45 11 7.6)"
       id="rect7" />
    <rect
       x="10.2"
       y="2.4"
       width="1.6"
       height="2.6"
       rx="0.4"
       fill="#ffd6ef"
       transform="rotate(90 11 7.6)"
       id="rect8" />
    <rect
       x="10.2"
       y="2.4"
       width="1.6"
       height="2.6"
       rx="0.4"
       fill="#ffd6ef"
       transform="rotate(135 11 7.6)"
       id="rect9" />
    <rect
       x="10.2"
       y="2.4"
       width="1.6"
       height="2.6"
       rx="0.4"
       fill="#ffd6ef"
       transform="rotate(180 11 7.6)"
       id="rect10" />
    <rect
       x="10.2"
       y="2.4"
       width="1.6"
       height="2.6"
       rx="0.4"
       fill="#ffd6ef"
       transform="rotate(225 11 7.6)"
       id="rect11" />
    <rect
       x="10.2"
       y="2.4"
       width="1.6"
       height="2.6"
       rx="0.4"
       fill="#ffd6ef"
       transform="rotate(270 11 7.6)"
       id="rect12" />
    <rect
       x="10.2"
       y="2.4"
       width="1.6"
       height="2.6"
       rx="0.4"
       fill="#ffd6ef"
       transform="rotate(315 11 7.6)"
       id="rect13" />
    <circle
       cx="11"
       cy="7.6"
       r="3.2"
       fill="#ffd6ef"
       id="circle13" />
    <circle
       cx="11"
       cy="7.6"
       r="1.2"
       fill="#9c73ff"
       id="circle14" />
  </g>
</svg>
`,Kr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 22 22"
   data-frames="1"
   data-frame-names="up"
   version="1.1"
   id="svg9"
   sodipodi:docname="undo-button.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs9" />
  <sodipodi:namedview
     id="namedview9"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="25.937962"
     inkscape:cx="19.72013"
     inkscape:cy="9.9275339"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g5" />
  <!-- Undo, drawn up. The code draws it pressed, see pressedSwaps in src/ui/buttonColors.ts. -->
  <g
     id="g5">
    <defs
       id="defs1">
      <clipPath
         id="round-9ce752">
        <circle
           cx="11"
           cy="11"
           r="10.4"
           id="circle1" />
      </clipPath>
    </defs>
    <circle
       cx="11"
       cy="11"
       r="10.4"
       fill="#9ce752"
       id="circle2" />
    <g
       clip-path="url(#round-9ce752)"
       id="g3">
      <path
         d="M-1 13 Q11 24 23 13 V24 H-1 Z"
         fill="#6bbd31"
         id="path2" />
      <path
         d="M-1 4.6 Q11 -3 23 4.6 V-1 H-1 Z"
         fill="#b5ef94"
         id="path3" />
    </g>
    <path
       d="M4.2 6.4 Q5.6 3.6 8.4 3"
       fill="none"
       stroke="#ffd6ef"
       stroke-width="1.2"
       stroke-linecap="round"
       stroke-opacity="0.9"
       id="path4" />
    <circle
       cx="11"
       cy="11"
       r="10.4"
       fill="none"
       stroke="#000000"
       stroke-width="1.2"
       id="circle4" />
    <path
       d="M 12.991574,14.6 H 9 M 8.6,6.2 6.4,8.4 8.6,10.6 m -2,-2.2 h 7 c 1.333333,0 2,1 2,3 0,2.133333 -0.866667,3.2 -2.6,3.2"
       fill="none"
       stroke="#106342"
       stroke-width="1.5"
       stroke-linecap="round"
       stroke-linejoin="round"
       id="path5"
       sodipodi:nodetypes="ccccccssc" />
  </g>
</svg>
`,qr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 16" data-frames="3" data-frame-names="bit-1 bit-2 bit-3">
<!-- Bits of a box that breaks. -->
<g transform="translate(0 0)">
<path d="M6 6 L9 5 L11 7 L10 10 L6 10 L5 8 Z" fill="#d69c63" stroke="#843931" stroke-linejoin="round"/>
</g>
<g transform="translate(16 0)">
<path d="M5 7 L8 5.6 L11 6.4 L11 9 L8 10.4 L5.4 9.6 Z" fill="#d69c63" stroke="#843931" stroke-linejoin="round"/>
</g>
<g transform="translate(32 0)">
<path d="M6 6.4 L8.6 5.2 L11 7.4 L9.4 10.6 L6.4 9.8 Z" fill="#d69c63" stroke="#843931" stroke-linejoin="round"/>
</g>
</svg>
`,Jr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32">
<!-- Boxes: the source of the connecting tiles. -->
<defs>
<clipPath id="inner-tile"><rect x="32" y="0" width="16" height="16"/></clipPath>
<clipPath id="single-tile"><rect x="32" y="16" width="16" height="16"/></clipPath>
</defs>
<!-- A 2x2 box -->

<rect x="0.5" y="0.5" width="31" height="31" rx="1.6" fill="#d69c63"/>
<rect x="1" y="26" width="30" height="5" fill="#8c5239"/>
<path d="M0 25.5 H32" stroke="#843931"/>

<rect x="0.5" y="0.5" width="31" height="31" rx="1.6" fill="none" stroke="#843931"/>
<!-- Inner corners -->
<g clip-path="url(#inner-tile)">
<rect x="32" y="0" width="16" height="16" fill="#d69c63"/>
<circle cx="32" cy="0" r="1.3" fill="#843931"/>
<circle cx="48" cy="0" r="1.3" fill="#843931"/>
<path d="M32.5 16 V9.5" stroke="#843931"/>
<path d="M47.5 16 V9.5" stroke="#843931"/>
</g>
<!-- A box on its own, a crate of two halves -->

<rect x="32.5" y="16.5" width="15" height="15" rx="1.6" fill="#d69c63"/>
<rect x="33" y="26" width="14" height="5" fill="#8c5239"/>
<path d="M32 25.5 H48" stroke="#843931"/>
<path d="M40 17 V26" stroke="#843931" stroke-width="1.6"/>
<rect x="32.5" y="16.5" width="15" height="15" rx="1.6" fill="none" stroke="#843931"/>
</svg>
`,Yr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 16" data-frames="3" data-frame-names="frosting sponge drop">
<!-- Crumbs of a cake that a slicer cuts: a bit of sponge with cream and a cherry, a bit of sponge with jam and a drop of cream. In red, and swapped like cake.svg. -->
<g transform="translate(0 0)">
<rect x="5.4" y="7.6" width="5.2" height="3" rx="1" fill="#f7e784" stroke="#7b4a29" stroke-width="0.8"/>
<path d="M5.6 8.4 Q5.6 6.6 8 6.6 Q10.4 6.6 10.4 8.4 Q9.6 9.3 9 8.6 Q8.4 9.4 7.6 8.6 Q6.8 9.3 5.6 8.4 Z" fill="#ffffff" stroke="#7b4a29" stroke-width="0.6" stroke-linejoin="round"/>
<circle cx="8" cy="6.2" r="1.1" fill="#d60800" stroke="#7b4a29" stroke-width="0.5"/>
<circle cx="7.7" cy="5.9" r="0.35" fill="#f7948c"/>
</g>
<g transform="translate(16 0)">
<path d="M7 6.2 L8.8 6 L10.4 8 L9.6 9.6 L7.4 9.8 L6.2 8.4 Z" fill="#f7e784" stroke="#7b4a29" stroke-width="0.8" stroke-linejoin="round"/>
<path d="M6.9 8.5 L9.8 8.1" stroke="#d60800" stroke-width="0.7" stroke-linecap="round"/>
</g>
<g transform="translate(32 0)">
<path d="M8 5.8 Q9.8 8 9.8 9 A1.8 1.8 0 0 1 6.2 9 Q6.2 8 8 5.8 Z" fill="#ffffff" stroke="#7b4a29" stroke-width="0.8" stroke-linejoin="round"/>
</g>
</svg>
`,Xr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" xmlns:c2pa="http://c2pa.org/manifest">
<!-- A round cake with white icing dripping over golden sponge, a layer of jam and four rosettes of cream, in the first world's red. The other worlds swap its red and highlight, see WORLDS in src/config/worlds.ts. -->
<path d="M1.5 5.8 A6.5 3.6 0 0 1 14.5 5.8 V10.6 A6.5 3.6 0 0 1 1.5 10.6 Z" fill="#f7e784"/>
<path d="M1.5 9.5 A6.5 3.6 0 0 0 14.5 9.5 V10.6 A6.5 3.6 0 0 1 1.5 10.6 Z" fill="#dea531"/>
<path d="M1.5 8.5 A6.5 3.6 0 0 0 14.5 8.5 V9.3 A6.5 3.6 0 0 1 1.5 9.3 Z" fill="#d60800"/>
<path d="M1.5 5.8 A6.5 3.6 0 0 1 14.5 5.8 L14.5 6.7 14.18 8.13 13.85 8.83 13.53 9.34 13.2 9.66 12.88 9.82 12.55 9.84 12.22 9.74 11.9 9.58 11.57 10.01 11.25 10.38 10.93 10.65 10.6 10.8 10.28 10.81 9.95 10.7 9.62 10.49 9.3 10.23 8.97 10.57 8.65 10.85 8.32 11.03 8 11.1 7.67 11.03 7.35 10.85 7.03 10.57 6.7 10.23 6.38 10.49 6.05 10.7 5.72 10.81 5.4 10.8 5.08 10.65 4.75 10.38 4.42 10.01 4.1 9.58 3.77 9.74 3.45 9.84 3.12 9.82 2.8 9.66 2.48 9.34 2.15 8.83 1.82 8.13 1.5 6.7 Z" fill="#dee7e7"/>
<path d="M2 5.8 A6 3.3 0 0 1 14 5.8 L14 6 13.7 7.26 13.4 7.86 13.1 8.29 12.8 8.58 12.5 8.74 12.2 8.78 11.9 8.74 11.6 8.64 11.3 8.99 11 9.28 10.7 9.5 10.4 9.62 10.1 9.65 9.8 9.57 9.5 9.42 9.2 9.23 8.9 9.49 8.6 9.71 8.3 9.85 8 9.9 7.7 9.85 7.4 9.71 7.1 9.49 6.8 9.23 6.5 9.42 6.2 9.57 5.9 9.65 5.6 9.62 5.3 9.5 5 9.28 4.7 8.99 4.4 8.64 4.1 8.74 3.8 8.78 3.5 8.74 3.2 8.58 2.9 8.29 2.6 7.86 2.3 7.26 2 6 Z" fill="#ffffff"/>
<path d="M1.5 5.8 A6.5 3.6 0 0 1 14.5 5.8 V10.6 A6.5 3.6 0 0 1 1.5 10.6 Z" fill="none" stroke="#7b4a29" stroke-linejoin="round"/>
<path d="M6.65 4 Q6.65 2.3 8 2.2 Q9.35 2.3 9.35 4 Q9.35 4.9 8 4.9 Q6.65 4.9 6.65 4 Z" fill="#d60800" stroke="#7b4a29" stroke-width="0.45" stroke-linejoin="round"/>
<path d="M7.2 4.1 Q7.2 2.9 8.1 2.85 Q8.7 3 8.5 3.6" fill="none" stroke="#f7948c" stroke-width="0.5" stroke-linecap="round"/>
<path d="M2.95 5.9 Q2.95 4.2 4.3 4.1 Q5.65 4.2 5.65 5.9 Q5.65 6.8 4.3 6.8 Q2.95 6.8 2.95 5.9 Z" fill="#d60800" stroke="#7b4a29" stroke-width="0.45" stroke-linejoin="round"/>
<path d="M3.5 6 Q3.5 4.8 4.4 4.75 Q5 4.9 4.8 5.5" fill="none" stroke="#f7948c" stroke-width="0.5" stroke-linecap="round"/>
<path d="M10.35 5.9 Q10.35 4.2 11.7 4.1 Q13.05 4.2 13.05 5.9 Q13.05 6.8 11.7 6.8 Q10.35 6.8 10.35 5.9 Z" fill="#d60800" stroke="#7b4a29" stroke-width="0.45" stroke-linejoin="round"/>
<path d="M10.9 6 Q10.9 4.8 11.8 4.75 Q12.4 4.9 12.2 5.5" fill="none" stroke="#f7948c" stroke-width="0.5" stroke-linecap="round"/>
<path d="M6.65 7.9 Q6.65 6.2 8 6.1 Q9.35 6.2 9.35 7.9 Q9.35 8.8 8 8.8 Q6.65 8.8 6.65 7.9 Z" fill="#d60800" stroke="#7b4a29" stroke-width="0.45" stroke-linejoin="round"/>
<path d="M7.2 8 Q7.2 6.8 8.1 6.75 Q8.7 6.9 8.5 7.5" fill="none" stroke="#f7948c" stroke-width="0.5" stroke-linecap="round"/>
<metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTpkNWFmYmUzNS1hYTUwLTRkNDQtYjk1NC1mYjI2YzNjMjg4MTAAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaBtOZhLw2yc/A4zP1CyOuOwAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDphY2M5YmQ3ZS1mYTBiLTRiZWQtYmI5NS1jZTdiNWQ5N2U5YTRscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNosQ8COGJhsBEW894qdkiKsAAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg4Y6vnMJEiX74mi549S3d97nB3WOS11RVjntMXtTzUDKkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaMzmDEUaV1ptwJ1zJphM0OoAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRMAAAAAAAAAAAAAAAAZGhhc2hYIKdMalG6xwHBZsRb5s8zzZyMyzUcTy1+1pQmm7eXerSWZG5hbWVuanVtYmYgbWFuaWZlc3RqZXhjbHVzaW9uc4GiZXN0YXJ0GQsjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmQ1YWZiZTM1LWFhNTAtNGQ0NC1iOTU0LWZiMjZjM2MyODgxMC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjY5ZTc1MzdlLWZiOTItNDlmNi05Nzg0LWYzNDM5N2FmMmIzM3JjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDhjq+cwkSJfviaLnj1Ld33ucHdY5LXVFWOe0xe1PNQMqJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggM+t02fz/TT2SbyGLt9QNSOaNzmPmGyciO8GMjCwydIGiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggBhcajBaXRrl+mRPcKW1KzfrVOXEUOMOX405fSxPl5UB0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQLTeAnAccFAvD722n+NaGLWgwQE3aHXZLmCqYyt9gQTcvDdtN5zDpLdye0whUBM2o0Wsv2GPZ3lYQWv0g8CXK8A=</c2pa:manifest></metadata></svg>
`,Zr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 48 22"
   version="1.1"
   id="svg2"
   sodipodi:docname="cloud-big.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="namedview2"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="true"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="12.968981"
     inkscape:cx="24.25017"
     inkscape:cy="8.9829724"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <!-- A big cloud drifting through the sky. -->
  <path
     d="M5 21 Q0.6 21 0.6 17.2 Q0.6 13.4 5.2 13.2 Q5.4 8.4 10.6 8.6 Q12.6 4.4 17.4 5.6 Q20.4 0.6 26.4 1.4 Q32.6 2.2 33.2 8.2 Q36.2 6.2 39.4 8.4 Q41.6 10.2 41 12.8 Q47.4 12.6 47.4 17 Q47.4 21 43 21 Z"
     fill="#ffffff"
     id="path1" />
  <path
     d="M 0.67738832,18.128059 Q 2.3505492,20.558163 4.8602905,20.337245 H 43.133846 q 3.137176,0 4.182902,-2.430106 Q 47.316748,21 43.552137,21 H 3.814565 Q 0.46824321,21 0.67738832,18.128059 Z"
     fill="#cedeef"
     id="path2"
     style="stroke-width:1.07476" />
</svg>
`,Qr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 26 18"
   version="1.1"
   id="svg2"
   sodipodi:docname="cloud-small.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="namedview2"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="true"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="22.416667"
     inkscape:cx="15.947955"
     inkscape:cy="15.591078"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <!-- A small cloud drifting through the sky. -->
  <path
     d="M4.6 17 Q0.6 17 0.6 13.6 Q0.6 10.4 4.4 10.2 Q4.6 5.2 9.6 5 Q11.4 0.8 16 1.2 Q20.6 1.8 20.8 6.8 Q25.4 7.2 25.4 12 Q25.4 17 21 17 Z"
     fill="#ffffff"
     id="path1" />
  <path
     d="M 0.68550186,14.576102 Q 1.9392622,16.394025 4.2378229,16.394025 H 20.954628 q 3.343361,0 4.179201,-2.221906 Q 24.715909,17 20.954628,17 H 3.8199028 Q 0.68550186,17 0.68550186,14.576102 Z"
     fill="#cedeef"
     id="path2"
     style="stroke-width:1.02723" />
</svg>
`,$r=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" data-frames="4" data-frame-names="pink green yellow white">
<!-- Confetti: small squares in four colors. -->
<rect x="0.4" y="0.4" width="3.2" height="3.2" rx="0.8" fill="#ffb5d6"/>
<rect x="4.4" y="0.4" width="3.2" height="3.2" rx="0.8" fill="#9ce752"/>
<rect x="8.4" y="0.4" width="3.2" height="3.2" rx="0.8" fill="#f7e700"/>
<rect x="12.4" y="0.4" width="3.2" height="3.2" rx="0.8" fill="#ffffff"/>
</svg>
`,ei=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 16" data-frames="3" data-frame-names="intact breaking-1 breaking-2">
<!-- Cracked floor: whole, breaking, nearly gone. After that it is a gap. -->
<g>
<rect width="16" height="16" fill="#ffe7c6"/>
<path d="M2 3 L5 5 L4 8 L7 10 M5 5 L9 4 L12 6 M7 10 L11 11 L13 14 M11 11 L14 9" fill="none" stroke="#d8a476" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 3 L5 5 L4 8 L7 10 M5 5 L9 4 L12 6 M7 10 L11 11 L13 14 M11 11 L14 9" fill="none" stroke="#aa765e" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(16 0)">
<path d="M0 0 H7 L5 3 L6 6 L2 8 L0 7 Z M9 0 H16 V5 L12 7 L9 4 Z M0 10 L4 10 L6 13 L5 16 H0 Z M8 9 L13 10 L16 8 V16 H8 L9 13 Z" fill="#ffe7c6" stroke="#aa765e" stroke-width="0.8" stroke-linejoin="round"/>
<path d="M1 2 L3 3 M11 2 L13 4 M10 13 L13 12" stroke="#d8a476" stroke-width="0.8" stroke-linecap="round"/>
</g>
<g transform="translate(32 0)">
<path d="M0 0 H4 L2 2 L0 2 Z M13 0 H16 V3 L14 2 Z M0 13 L2 14 L3 16 H0 Z M14 12 L16 11 V16 H12 L13 14 Z" fill="#ffe7c6" stroke="#aa765e" stroke-width="0.8" stroke-linejoin="round"/>
</g>
</svg>
`,ti=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 16" data-frames="5" data-frame-names="normal blink happy sad bonk">
<!-- The slime's faces, drawn over its tile: content, calm, delighted, worried, squeezed. -->
<g transform="translate(0 0)">
<rect x="4" y="5" width="2" height="3.2" rx="1" fill="#422939"/><circle cx="4.85" cy="5.55" r="0.55" fill="#ffffff"/><rect x="10" y="5" width="2" height="3.2" rx="1" fill="#422939"/><circle cx="10.85" cy="5.55" r="0.55" fill="#ffffff"/>
<path d="M6.6 9.4 Q8 11.2 9.4 9.4" fill="none" stroke="#422939" stroke-width="1" stroke-linecap="round"/>
<ellipse cx="3" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/><ellipse cx="13" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/>
</g>
<g transform="translate(16 0)">
<path d="M3.9 7.4 H5.9 M10.1 7.4 H12.1" stroke="#422939" stroke-width="1.1" stroke-linecap="round"/>
<path d="M6.6 9.4 Q8 11.2 9.4 9.4" fill="none" stroke="#422939" stroke-width="1" stroke-linecap="round"/>
<ellipse cx="3" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/><ellipse cx="13" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/>
</g>
<g transform="translate(32 0)">
<path d="M3.8 7.6 Q5 5.4 6.2 7.6 M9.8 7.6 Q11 5.4 12.2 7.6" fill="none" stroke="#422939" stroke-width="1" stroke-linecap="round"/>
<path d="M6 8.6 H10 V9.6 Q10 12.8 8 12.8 Q6 12.8 6 9.6 Z" fill="#422939"/>
<path d="M6.8 10.6 Q8 9.6 9.2 10.6 Q9.2 12.1 8 12.1 Q6.8 12.1 6.8 10.6 Z" fill="#de5263"/>
<ellipse cx="3" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/><ellipse cx="13" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/>
</g>
<g transform="translate(48 0)">
<rect x="4" y="5" width="2" height="3.2" rx="1" fill="#422939"/><circle cx="4.85" cy="5.55" r="0.55" fill="#ffffff"/><rect x="10" y="5" width="2" height="3.2" rx="1" fill="#422939"/><circle cx="10.85" cy="5.55" r="0.55" fill="#ffffff"/>
<path d="M6.4 11.6 Q8 9 9.6 11.6" fill="none" stroke="#422939" stroke-width="1" stroke-linecap="round"/>
<ellipse cx="3" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/><ellipse cx="13" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/>
</g>
<g transform="translate(64 0)">
<path d="M3.9 5.4 L6 7 L3.9 8.6 M12.1 5.4 L10 7 L12.1 8.6" fill="none" stroke="#422939" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10.4 Q8 9.6 9 10.4" fill="none" stroke="#422939" stroke-width="1.1" stroke-linecap="round"/>
<ellipse cx="3" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/><ellipse cx="13" cy="9.6" rx="1.4" ry="0.75" fill="#bd63a5"/>
</g>
</svg>
`,ni=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32">
<!-- Dark floor: the source of the connecting tiles. Themes recolor it. -->
<rect x="0" y="0" width="48" height="32" fill="#ffe7c6"/>
<!-- The shadow along the top, under whatever is above the floor -->
<path d="M0 0 H32 V2.2 Q32 3.2 31 3.2 H0 Z" fill="#efcead"/>
<path d="M32 16 H48 V19.2 H32 Z" fill="#efcead"/>
<rect x="0" y="0" width="32" height="3.2" fill="#efcead"/>
</svg>
`,ri=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32">
<!-- Light floor: the source of the connecting tiles. Themes recolor it. -->
<rect x="0" y="0" width="48" height="32" fill="#fff7de"/>
<!-- The shadow along the top, under whatever is above the floor -->
<path d="M0 0 H32 V2.2 Q32 3.2 31 3.2 H0 Z" fill="#efcead"/>
<path d="M32 16 H48 V19.2 H32 Z" fill="#efcead"/>
<rect x="0" y="0" width="32" height="3.2" fill="#efcead"/>
</svg>
`,ii=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32">
<!-- Gaps: the source of the connecting tiles. Themes recolor them. The sky shows through. -->
<defs>
<clipPath id="inner-tile"><rect x="32" y="0" width="16" height="16"/></clipPath>
<clipPath id="single-tile"><rect x="32" y="16" width="16" height="16"/></clipPath>
</defs>
<!-- A 2x2 gap -->
<path d="M0 0 H32 V6 H0 Z" fill="#d69c63"/>
<path d="M0 5.5 H32" stroke="#8c6b31"/>
<path d="M0.5 0 V31.5 H31.5 V0" fill="none" stroke="#8c6b31"/>
<path d="M0 0.5 H32" stroke="#8c6b31"/>
<!-- Inner corners: the sides of the strip of earth beside it, and the corners of the floor -->
<g clip-path="url(#inner-tile)">
<path d="M32.5 0 V5.5" stroke="#8c6b31"/>
<path d="M47.5 0 V5.5" stroke="#8c6b31"/>
<circle cx="32" cy="16" r="1.4" fill="#8c6b31"/>
<circle cx="48" cy="16" r="1.4" fill="#8c6b31"/>
</g>
<!-- A gap on its own -->
<path d="M32 16 H48 V22 H32 Z" fill="#d69c63"/>
<path d="M32 21.5 H48" stroke="#8c6b31"/>
<rect x="32.5" y="16.5" width="15" height="15" fill="none" stroke="#8c6b31"/>
</svg>
`,ai=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 16" data-frames="3" data-frame-names="closed opening nearly-open">
<!-- Gem floor: closed, opening, nearly open. After that it is gone and the gap shows. -->
<g transform="translate(0 0)">
<rect x="0" y="0" width="8" height="16" fill="#f7f7bd"/>
<path d="M0 0.5 H8 M0 15.5 H8" stroke="#e7de7b"/>
<path d="M0.5 0 V16" stroke="#e7de7b"/><rect x="8" y="0" width="8" height="16" fill="#f7f7bd"/>
<path d="M8 0.5 H16 M8 15.5 H16" stroke="#e7de7b"/>
<path d="M15.5 0 V16" stroke="#e7de7b"/><path d="M1.5 1.5 L14.5 14.5 M14.5 1.5 L1.5 14.5" stroke="#e7de7b" stroke-width="1"/>
<path d="M8 0 V16" stroke="#e7de7b" stroke-width="0.8"/>
<circle cx="8" cy="8" r="2" fill="#f7e700" stroke="#e7de7b" stroke-width="0.8"/>
</g>
<g transform="translate(16 0)">
<rect x="0" y="0" width="5" height="16" fill="#f7f7bd"/>
<path d="M0 0.5 H5 M0 15.5 H5" stroke="#e7de7b"/>
<path d="M0.5 0 V16" stroke="#e7de7b"/><rect x="11" y="0" width="5" height="16" fill="#f7f7bd"/>
<path d="M11 0.5 H16 M11 15.5 H16" stroke="#e7de7b"/>
<path d="M15.5 0 V16" stroke="#e7de7b"/><path d="M4.5 0 V16 M11.5 0 V16" stroke="#e7de7b"/>
<circle cx="3.4" cy="8" r="0.9" fill="#f7e700"/><circle cx="12.6" cy="8" r="0.9" fill="#f7e700"/>
</g>
<g transform="translate(32 0)">
<rect x="0" y="0" width="2" height="16" fill="#f7f7bd"/>
<path d="M0 0.5 H2 M0 15.5 H2" stroke="#e7de7b"/>
<path d="M0.5 0 V16" stroke="#e7de7b"/><rect x="14" y="0" width="2" height="16" fill="#f7f7bd"/>
<path d="M14 0.5 H16 M14 15.5 H16" stroke="#e7de7b"/>
<path d="M15.5 0 V16" stroke="#e7de7b"/><path d="M1.5 0 V16 M14.5 0 V16" stroke="#e7de7b"/>
<circle cx="0.3999999999999999" cy="8" r="0.9" fill="#f7e700"/><circle cx="15.6" cy="8" r="0.9" fill="#f7e700"/>
</g>
</svg>
`,oi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 16" data-frames="5" data-frame-names="closed opening-1 opening-2 opening-3 opening-4">
<!-- Gem lock around a cake: closed, then splitting open in four steps. Its glass lets the cake show through. -->
<g transform="translate(0 0)">
<rect x="1" y="1" width="14" height="9" fill="#c6b54a" fill-opacity="0.35"/>
<rect x="1" y="10" width="14" height="5" fill="#a59431"/>
<path d="M1 10.5 H15 M8 1 V10" stroke="#101010" stroke-width="0.8"/>
<rect x="0.5" y="0.5" width="15" height="15" rx="1" fill="none" stroke="#101010"/>
<path d="M2.8 7.6 L6.4 2.6 M4.4 8.4 L7.4 4.2" stroke="#ffffff" stroke-width="0.8" stroke-linecap="round" stroke-opacity="0.7"/>
<path d="M5.5 11.6 H10.5 Q11.2 11.6 11.2 12.3 V13.4 Q11.2 14.2 10.5 14.2 H5.5 Q4.8 14.2 4.8 13.4 V12.3 Q4.8 11.6 5.5 11.6 Z" fill="#f7ef63" stroke="#101010" stroke-width="0.7"/>
<circle cx="8" cy="12.9" r="0.7" fill="#a59431"/>
</g>
<g transform="translate(16 0)">
<g>
	<rect x="0.5" y="0.5" width="6" height="15" fill="none" stroke="#101010"/>
	<rect x="1" y="1" width="5" height="9" fill="#c6b54a" fill-opacity="0.35"/>
	<rect x="1" y="10" width="5" height="5" fill="#a59431"/>
	<rect x="1" y="10" width="5" height="1" fill="#101010"/>
</g><g>
	<rect x="9.5" y="0.5" width="6" height="15" fill="none" stroke="#101010"/>
	<rect x="10" y="1" width="5" height="9" fill="#c6b54a" fill-opacity="0.35"/>
	<rect x="10" y="10" width="5" height="5" fill="#a59431"/>
	<rect x="10" y="10" width="5" height="1" fill="#101010"/>
</g>
</g>
<g transform="translate(32 0)">
<g>
	<rect x="0.5" y="0.5" width="4" height="15" fill="none" stroke="#101010"/>
	<rect x="1" y="1" width="3" height="9" fill="#c6b54a" fill-opacity="0.35"/>
	<rect x="1" y="10" width="3" height="5" fill="#a59431"/>
	<rect x="1" y="10" width="3" height="1" fill="#101010"/>
</g><g>
	<rect x="11.5" y="0.5" width="4" height="15" fill="none" stroke="#101010"/>
	<rect x="12" y="1" width="3" height="9" fill="#c6b54a" fill-opacity="0.35"/>
	<rect x="12" y="10" width="3" height="5" fill="#a59431"/>
	<rect x="12" y="10" width="3" height="1" fill="#101010"/>
</g>
</g>
<g transform="translate(48 0)">
<g>
	<rect x="0.5" y="0.5" width="2" height="15" fill="none" stroke="#101010"/>
	<rect x="1" y="1" width="1" height="9" fill="#c6b54a" fill-opacity="0.35"/>
	<rect x="1" y="10" width="1" height="5" fill="#a59431"/>
	<rect x="1" y="10" width="1" height="1" fill="#101010"/>
</g><g>
	<rect x="13.5" y="0.5" width="2" height="15" fill="none" stroke="#101010"/>
	<rect x="14" y="1" width="1" height="9" fill="#c6b54a" fill-opacity="0.35"/>
	<rect x="14" y="10" width="1" height="5" fill="#a59431"/>
	<rect x="14" y="10" width="1" height="1" fill="#101010"/>
</g>
</g>
<g transform="translate(64 0)">
<g>
	<rect x="0.5" y="0.5" width="0" height="15" fill="none" stroke="#101010"/>
	<rect x="1" y="1" width="-1" height="9" fill="#c6b54a" fill-opacity="0.35"/>
	<rect x="1" y="10" width="-1" height="5" fill="#a59431"/>
	<rect x="1" y="10" width="-1" height="1" fill="#101010"/>
</g><g>
	<rect x="15.5" y="0.5" width="0" height="15" fill="none" stroke="#101010"/>
	<rect x="16" y="1" width="-1" height="9" fill="#c6b54a" fill-opacity="0.35"/>
	<rect x="16" y="10" width="-1" height="5" fill="#a59431"/>
	<rect x="16" y="10" width="-1" height="1" fill="#101010"/>
</g>
</g>
</svg>
`,si=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" xmlns:c2pa="http://c2pa.org/manifest">
<!-- Ice: the source of the connecting tiles. -->
<defs>
<clipPath id="inner-tile"><rect x="32" y="0" width="16" height="16"/></clipPath>
<clipPath id="single-tile"><rect x="32" y="16" width="16" height="16"/></clipPath>
<pattern id="ice" patternUnits="userSpaceOnUse" width="16" height="16">
	<rect width="16" height="16" fill="#cedeef"/>
	<path d="M22 -20 L27 -20 L-13 20 L-18 20 Z M38 -20 L43 -20 L3 20 L-2 20 Z" fill="#84c6d6"/>
	<path d="M29 -20 L30.6 -20 L-9.4 20 L-11 20 Z M45 -20 L46.6 -20 L6.600000000000001 20 L5 20 Z" fill="#ffffff"/>
</pattern>
</defs>
<!-- A 2x2 block of ice -->
<path d="M4 0.6 C6 0.6 6 1.3 8 1.3 C10 1.3 10 0.6 12 0.6 C14 0.6 14 1.3 16 1.3 C18 1.3 18 0.6 20 0.6 C22 0.6 22 1.3 24 1.3 C26 1.3 26 0.6 28 0.6 A3.4 3.4 0 0 1 31.4 4 C31.4 6 30.7 6 30.7 8 C30.7 10 31.4 10 31.4 12 C31.4 14 30.7 14 30.7 16 C30.7 18 31.4 18 31.4 20 C31.4 22 30.7 22 30.7 24 C30.7 26 31.4 26 31.4 28 A3.4 3.4 0 0 1 28 31.4 C26 31.4 26 30.7 24 30.7 C22 30.7 22 31.4 20 31.4 C18 31.4 18 30.7 16 30.7 C14 30.7 14 31.4 12 31.4 C10 31.4 10 30.7 8 30.7 C6 30.7 6 31.4 4 31.4 A3.4 3.4 0 0 1 0.6 28 C0.6 26 1.3 26 1.3 24 C1.3 22 0.6 22 0.6 20 C0.6 18 1.3 18 1.3 16 C1.3 14 0.6 14 0.6 12 C0.6 10 1.3 10 1.3 8 C1.3 6 0.6 6 0.6 4 A3.4 3.4 0 0 1 4 0.6Z" fill="url(#ice)" stroke="#395294" stroke-width="1.1"/>
<!-- Inner corners: ice with a rounded notch in each corner, where the outlines of the edges beside it meet -->
<g clip-path="url(#inner-tile)">
<path d="M33.3 0 H46.7 A1.3 1.3 0 0 0 48 1.3 V14.7 A1.3 1.3 0 0 0 46.7 16 H33.3 A1.3 1.3 0 0 0 32 14.7 V1.3 A1.3 1.3 0 0 0 33.3 0 Z" fill="url(#ice)"/>
<g fill="none" stroke="#395294" stroke-width="1.1">
<circle cx="32" cy="0" r="1.3"/><circle cx="48" cy="0" r="1.3"/><circle cx="32" cy="16" r="1.3"/><circle cx="48" cy="16" r="1.3"/>
</g>
</g>
<!-- Ice on its own -->
<path d="M36 16.6 C38 16.6 38 17.3 40 17.3 C42 17.3 42 16.6 44 16.6 A3.4 3.4 0 0 1 47.4 20 C47.4 22 46.7 22 46.7 24 C46.7 26 47.4 26 47.4 28 A3.4 3.4 0 0 1 44 31.4 C42 31.4 42 30.7 40 30.7 C38 30.7 38 31.4 36 31.4 A3.4 3.4 0 0 1 32.6 28 C32.6 26 33.3 26 33.3 24 C33.3 22 32.6 22 32.6 20 A3.4 3.4 0 0 1 36 16.6Z" fill="url(#ice)" stroke="#395294" stroke-width="1.1"/>
<metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNDdjNDY5ZC01MDUxLTQ3MTQtYTA0Yi00NDQ2ZjViZTliZjcAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaN0DK2pOAzF2bmyQizCCQaMAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDowMDExN2VjZi0xMWE5LTRiZTMtYWM1YS00MzExMDdkMzJlMDdscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoJ+O1gl6raKR8wIV1QDvvSQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggPK9I2gELa9iwBQkSuvdFELgaExH1tRG6cabHgk7cwh+kZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaFeEshDKmGaNPJ86eszfNLgAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRMAAAAAAAAAAAAAAAAZGhhc2hYIAK+QXGmoqj1dAFgj1UBIVDR9z5f95iEEmC84GoTYft+ZG5hbWVuanVtYmYgbWFuaWZlc3RqZXhjbHVzaW9uc4GiZXN0YXJ0GQkFZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE0N2M0NjlkLTUwNTEtNDcxNC1hMDRiLTQ0NDZmNWJlOWJmNy9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjg2Yjg4MTM4LTk3NDEtNDE0NS1iYzYzLWZjNzE5OWJiNDQ5OXJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCA8r0jaAQtr2LAFCRK690UQuBoTEfW1EbpxpseCTtzCH6JjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFgg2zatW4Pq1Hn2xZ1Itn/sJQnrxOnvWT7O98MkbIuG8yeiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggZin4YZMYIthJALKv+S5K3kPacP3+7XOAby/tYzNmy3h0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQM36/UL28kLPk27JC1ByY0Yob8JEGJUDB3x4Qk+HmgutmbvOzoeTzTWUBLQaXf8UXMz8DZ/XJCuhXBMD7PlxRYc=</c2pa:manifest></metadata></svg>
`,ci=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 16" data-frames="3" data-frame-names="drawing-1 drawing-2 drawing-3">
<!-- Ink splats, three drawings that take turns. Purple splats swap the greens for purples. -->
<g transform="translate(0 0)">
<path d="M8 2.6 Q10 1.6 10.8 3.6 Q13.2 3 13 5.4 Q15 6.8 13.4 8.6 Q14.6 11 12.2 11.6 Q11.8 14 9.4 13 Q8 14.8 6.4 13 Q3.8 14 3.6 11.4 Q1.2 10.6 2.6 8.4 Q1 6.4 3.2 5.4 Q3 2.8 5.6 3.4 Q6.4 1.6 8 2.6 Z" fill="#9ce752" stroke="#106342" stroke-width="1" stroke-linejoin="round"/>
<ellipse cx="8" cy="9.6" rx="4.4" ry="2.6" fill="#6bbd31" fill-opacity="0.55"/>
<ellipse cx="7.4" cy="6.4" rx="3.4" ry="1.8" fill="#b5ef94"/>
<path d="M5 6.6 Q5 5 6.6 5" fill="none" stroke="#ffffff" stroke-width="1.1" stroke-linecap="round"/>
<circle cx="1.4" cy="1.6" r="0.9" fill="#9ce752" stroke="#106342" stroke-width="0.7"/><circle cx="14.6" cy="14.2" r="0.8" fill="#9ce752" stroke="#106342" stroke-width="0.7"/><circle cx="14.4" cy="1.8" r="0.6" fill="#9ce752" stroke="#106342" stroke-width="0.7"/>
</g>
<g transform="translate(16 0)">
<path d="M7.4 2.2 Q9.6 1 10.4 3.2 Q12.8 2.2 13 4.8 Q15.2 5.6 14 7.8 Q15.4 10 13.2 10.8 Q13.4 13.4 10.8 12.8 Q9.6 14.8 7.6 13.2 Q5.4 14.6 4.6 12.2 Q2 12.4 2.4 9.8 Q0.6 8.2 2.6 6.6 Q1.8 4 4.4 4 Q5 1.6 7.4 2.2 Z" fill="#9ce752" stroke="#106342" stroke-width="1" stroke-linejoin="round"/>
<ellipse cx="8" cy="9.6" rx="4.4" ry="2.6" fill="#6bbd31" fill-opacity="0.55"/>
<ellipse cx="7.4" cy="6.4" rx="3.4" ry="1.8" fill="#b5ef94"/>
<path d="M5 6.6 Q5 5 6.6 5" fill="none" stroke="#ffffff" stroke-width="1.1" stroke-linecap="round"/>
<circle cx="1.2" cy="13.8" r="0.9" fill="#9ce752" stroke="#106342" stroke-width="0.7"/><circle cx="15" cy="2.2" r="0.7" fill="#9ce752" stroke="#106342" stroke-width="0.7"/><circle cx="2" cy="1.6" r="0.5" fill="#9ce752" stroke="#106342" stroke-width="0.7"/>
</g>
<g transform="translate(32 0)">
<path d="M8.6 2 Q11 1.4 11.4 3.8 Q14 3.6 13.6 6.2 Q15.6 7.6 13.8 9.4 Q14.8 12 12.2 12.2 Q11.4 14.6 9 13.4 Q7.2 15 5.8 13 Q3.2 13.4 3.4 10.8 Q1 9.4 2.8 7.4 Q1.8 4.8 4.4 4.6 Q5.4 2 8.6 2 Z" fill="#9ce752" stroke="#106342" stroke-width="1" stroke-linejoin="round"/>
<ellipse cx="8" cy="9.6" rx="4.4" ry="2.6" fill="#6bbd31" fill-opacity="0.55"/>
<ellipse cx="7.4" cy="6.4" rx="3.4" ry="1.8" fill="#b5ef94"/>
<path d="M5 6.6 Q5 5 6.6 5" fill="none" stroke="#ffffff" stroke-width="1.1" stroke-linecap="round"/>
<circle cx="14.8" cy="14.6" r="0.9" fill="#9ce752" stroke="#106342" stroke-width="0.7"/><circle cx="1.4" cy="2.2" r="0.7" fill="#9ce752" stroke="#106342" stroke-width="0.7"/><circle cx="15" cy="5.6" r="0.5" fill="#9ce752" stroke="#106342" stroke-width="0.7"/>
</g>
</svg>
`,li=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16" data-frames="2" data-frame-names="off lit">
<!-- Gem: off, and lit while something is on it or once the gems have activated. -->
<g>
<path d="M8 1 L15 8 L8 15 L1 8 Z" fill="#3173b5" stroke="#18318c" stroke-linejoin="round"/>
<path d="M8 1.9 L14.1 8 L8 8 Z" fill="#3173b5"/>
<path d="M8 1.9 L1.9 8 L8 8 Z" fill="#63a5de"/>
<path d="M1.9 8 L8 14.1 L8 8 Z" fill="#3173b5"/>
<path d="M14.1 8 L8 14.1 L8 8 Z" fill="#0063b5"/>
<path d="M8 4.6 L11.4 8 L8 11.4 L4.6 8 Z" fill="#3173b5" stroke="#0063b5" stroke-width="0.8" stroke-linejoin="round"/>
<path d="M4.2 7.4 L7.4 4.2" stroke="#ffffff" stroke-width="0.8" stroke-linecap="round" stroke-opacity="0.8"/>
</g>
<g transform="translate(16 0)">
<path d="M8 1 L15 8 L8 15 L1 8 Z" fill="#f7de00" stroke="#a59431" stroke-linejoin="round"/>
<path d="M8 1.9 L14.1 8 L8 8 Z" fill="#f7de00"/>
<path d="M8 1.9 L1.9 8 L8 8 Z" fill="#f7f794"/>
<path d="M1.9 8 L8 14.1 L8 8 Z" fill="#f7de00"/>
<path d="M14.1 8 L8 14.1 L8 8 Z" fill="#f7ef63"/>
<path d="M8 4.6 L11.4 8 L8 11.4 L4.6 8 Z" fill="#f7de00" stroke="#f7f794" stroke-width="0.8" stroke-linejoin="round"/>
<path d="M4.2 7.4 L7.4 4.2" stroke="#ffffff" stroke-width="0.8" stroke-linecap="round" stroke-opacity="0.8"/>
</g>
</svg>
`,ui=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16" data-frames="2" data-frame-names="spin-1 spin-2">
<!-- The spinning slicer, in two turns of its spin. -->
<g>
<path d="M8 0.8 L10.2 5.8 L15.2 8 L10.2 10.2 L8 15.2 L5.8 10.2 L0.8 8 L5.8 5.8 Z" fill="#ffb5d6" stroke="#31294a" stroke-width="1" stroke-linejoin="round"/>
<path d="M8 1.9 L9.6 6.4 L8 8 Z M14.1 8 L9.6 9.6 L8 8 Z M8 14.1 L6.4 9.6 L8 8 Z M1.9 8 L6.4 6.4 L8 8 Z" fill="#f73952"/>
<circle cx="8" cy="8" r="1.9" fill="#ffb5d6"/>
<circle cx="8" cy="8" r="1.1" fill="#7b4a84"/>
</g>
<g transform="translate(16 0) rotate(45 8 8)">
<path d="M8 0.8 L10.2 5.8 L15.2 8 L10.2 10.2 L8 15.2 L5.8 10.2 L0.8 8 L5.8 5.8 Z" fill="#ffb5d6" stroke="#31294a" stroke-width="1" stroke-linejoin="round"/>
<path d="M8 1.9 L9.6 6.4 L8 8 Z M14.1 8 L9.6 9.6 L8 8 Z M8 14.1 L6.4 9.6 L8 8 Z M1.9 8 L6.4 6.4 L8 8 Z" fill="#f73952"/>
<circle cx="8" cy="8" r="1.9" fill="#ffb5d6"/>
<circle cx="8" cy="8" r="1.1" fill="#7b4a84"/>
</g>
</svg>
`,di=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 16" data-frames="4" data-frame-names="drop-1 drop-2 drop-3 drop-4">
<!-- Drops of slime that splashes. Purple slime swaps the greens for purples. -->
<g transform="translate(0 0)">
<ellipse cx="8" cy="8" rx="1.6" ry="1.6" fill="#9ce752" stroke="#106342" stroke-width="0.9"/><circle cx="7.44" cy="7.44" r="0.48" fill="#b5ef94"/>
</g>
<g transform="translate(16 0)">
<ellipse cx="8" cy="8.2" rx="2" ry="1.7" fill="#9ce752" stroke="#106342" stroke-width="0.9"/><circle cx="7.3" cy="7.6049999999999995" r="0.51" fill="#b5ef94"/>
</g>
<g transform="translate(32 0)">
<ellipse cx="8" cy="8" rx="2.3" ry="2.1" fill="#9ce752" stroke="#106342" stroke-width="0.9"/><circle cx="7.195" cy="7.265" r="0.63" fill="#b5ef94"/>
</g>
<g transform="translate(48 0)">
<ellipse cx="8.4" cy="7.8" rx="2.9" ry="2.2" fill="#9ce752" stroke="#106342" stroke-width="0.9"/><circle cx="7.385000000000001" cy="7.029999999999999" r="0.66" fill="#b5ef94"/>
</g>
</svg>
`,fi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32">
<!-- Slime blocks: the source of the connecting tiles. The purple slime swaps these greens for purples. -->
<defs>
<clipPath id="inner-tile"><rect x="32" y="0" width="16" height="16"/></clipPath>
<clipPath id="single-tile"><rect x="32" y="16" width="16" height="16"/></clipPath>
</defs>
<!-- A 2x2 block of slime -->

<rect x="0.5" y="0.5" width="31" height="31" rx="3.2" fill="#9ce752"/>
<g clip-path="url(#block-inside)">
	<rect x="0" y="0" width="32" height="3.6" fill="#b5ef94"/>
	<rect x="0" y="28.8" width="32" height="3.2" fill="#6bbd31"/>
</g>
<path d="M3.6 6.2 V5.2 Q3.6 3.6 5.2 3.6 H6.6" fill="none" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="3.2" fill="none" stroke="#106342"/>
<defs><clipPath id="block-inside"><rect x="1" y="1" width="30" height="30" rx="2.6"/></clipPath></defs>
<!-- Inner corners -->
<g clip-path="url(#inner-tile)">
<rect x="32" y="0" width="16" height="16" fill="#9ce752"/>
<circle cx="32" cy="0" r="3.4" fill="#b5ef94"/>
<circle cx="48" cy="0" r="3.4" fill="#b5ef94"/>
<circle cx="32" cy="16" r="3.0" fill="#6bbd31"/>
<circle cx="48" cy="16" r="3.0" fill="#6bbd31"/>
<circle cx="32" cy="0" r="1.5" fill="#106342"/>
<circle cx="48" cy="0" r="1.5" fill="#106342"/>
<circle cx="32" cy="16" r="1.5" fill="#106342"/>
<circle cx="48" cy="16" r="1.5" fill="#106342"/>
</g>
<!-- A slime on its own -->

<rect x="32.5" y="16.5" width="15" height="15" rx="3.2" fill="#9ce752"/>
<g clip-path="url(#single-inside)">
	<rect x="32" y="16" width="16" height="3.6" fill="#b5ef94"/>
	<rect x="32" y="28.8" width="16" height="3.2" fill="#6bbd31"/>
</g>
<path d="M35.6 22.2 V21.2 Q35.6 19.6 37.2 19.6 H38.6" fill="none" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round"/>
<rect x="32.5" y="16.5" width="15" height="15" rx="3.2" fill="none" stroke="#106342"/>
<defs><clipPath id="single-inside"><rect x="33" y="17" width="14" height="14" rx="2.6"/></clipPath></defs>
</svg>
`,pi=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 48 16"
   data-frames="3"
   data-frame-names="on between off"
   version="1.1"
   id="svg26"
   sodipodi:docname="spike-block-b-saws.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns:c2pa="http://c2pa.org/manifest">
  <defs
     id="defs26" />
  <sodipodi:namedview
     id="namedview26"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="16"
     inkscape:cx="23.71875"
     inkscape:cy="3.21875"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g20" />
  <!-- Spike block of two saw blades, seen from above: on (a block as tall as a box), between, off (sunk into the floor, only the slots show). -->
  <g
     transform="translate(0 0)"
     id="g10">
    <rect
       x="1.5"
       y="0.5"
       width="13"
       height="15"
       rx="2"
       fill="#7b4a84"
       id="rect1" />
    <path
       d="M1.5 9.5 H14.5 V10.5 H1.5 Z"
       fill="#8c5aa5"
       id="path1" />
    <path
       d="M1.5 9.5 V2.5 Q1.5 0.5 3.5 0.5 H12.5 Q14.5 0.5 14.5 2.5 V9.5 Z"
       fill="#de84b5"
       id="path2" />
    <path
       d="M2 2.5 Q2 1 3.5 1 H12.5 Q14 1 14 2.5 V1.8 H2 Z"
       fill="#ffb5d6"
       id="path3" />
    <path
       d="M1.5 9.5 H14.5"
       stroke="#31294a"
       stroke-width="0.7"
       id="path4" />
    <g
       id="g28"
       transform="translate(0,-0.20001666)">
      <rect
         x="2.5999999"
         y="4.75"
         width="10.8"
         height="1.1"
         rx="0.55000001"
         fill="#7b4a84"
         id="rect4" />
      <path
         d="M 2.6,5.4 V 2.8 L 3.95,1 5.3,2.8 6.65,1 8,2.8 9.35,1 10.7,2.8 12.05,1 13.4,2.8 v 2.6 z"
         fill="#cedeef"
         stroke="#31294a"
         stroke-width="0.5"
         stroke-linejoin="round"
         id="path5" />
      <path
         d="M 2.8492188,4.8 H 13.149718"
         stroke="#9cadbd"
         stroke-width="0.7"
         id="path6"
         sodipodi:nodetypes="cc" />
      <path
         d="M 3.4,3.4 H 5.2"
         stroke="#f7f7ff"
         stroke-width="0.5"
         stroke-linecap="round"
         id="path7" />
    </g>
    <g
       id="g27"
       transform="translate(0,-0.40001666)">
      <rect
         x="2.5999999"
         y="8.3500004"
         width="10.8"
         height="1.1"
         rx="0.55000001"
         fill="#7b4a84"
         id="rect7" />
      <path
         d="M 2.6,9 V 6.4 L 3.95,4.6 5.3,6.4 6.65,4.6 8,6.4 9.35,4.6 10.7,6.4 12.05,4.6 13.4,6.4 V 9 Z"
         fill="#cedeef"
         stroke="#31294a"
         stroke-width="0.5"
         stroke-linejoin="round"
         id="path8" />
      <path
         d="m 2.8492188,8.4 10.3015622,0"
         stroke="#9cadbd"
         stroke-width="0.7"
         id="path9"
         sodipodi:nodetypes="cc" />
      <path
         d="M 3.4,7 H 5.2"
         stroke="#f7f7ff"
         stroke-width="0.5"
         stroke-linecap="round"
         id="path10" />
    </g>
    <rect
       x="1.5"
       y="0.5"
       width="13"
       height="15"
       rx="2"
       fill="none"
       stroke="#31294a"
       id="rect10" />
  </g>
  <g
     transform="translate(16 0)"
     id="g20">
    <rect
       x="1.5"
       y="3"
       width="13"
       height="12.5"
       rx="2"
       fill="#7b4a84"
       id="rect11" />
    <path
       d="M1.5 12 H14.5 V13 H1.5 Z"
       fill="#8c5aa5"
       id="path11" />
    <path
       d="M1.5 12 V5 Q1.5 3 3.5 3 H12.5 Q14.5 3 14.5 5 V12 Z"
       fill="#de84b5"
       id="path12" />
    <path
       d="M2 5 Q2 3.5 3.5 3.5 H12.5 Q14 3.5 14 5 V4.3 H2 Z"
       fill="#ffb5d6"
       id="path13" />
    <path
       d="M1.5 12 H14.5"
       stroke="#31294a"
       stroke-width="0.7"
       id="path14" />
    <g
       id="g30"
       transform="translate(0.00552427,-0.40000415)">
      <rect
         x="2.5999999"
         y="10.85"
         width="10.8"
         height="1.1"
         rx="0.55000001"
         fill="#7b4a84"
         id="rect17" />
      <path
         d="M 2.6,11.5 V 10.51 L 3.95,9.7 5.3,10.51 6.65,9.7 8,10.51 9.35,9.7 10.7,10.51 12.05,9.7 13.4,10.51 v 0.99 z"
         fill="#cedeef"
         stroke="#31294a"
         stroke-width="0.5"
         stroke-linejoin="round"
         id="path18" />
      <path
         style="fill:#9cadbd;fill-opacity:1;stroke-width:0.00753328"
         d="m 2.8548411,10.667776 v -0.185241 h 5.152587 5.1525869 v 0.185241 0.185241 H 8.0074281 2.8548411 Z"
         id="path31"
         transform="translate(-0.00552427,0.40000415)" />
      <path
         d="m 3.1458835,10.94315 h 1.8"
         stroke="#f7f7ff"
         stroke-width="0.5"
         stroke-linecap="round"
         id="path20" />
    </g>
    <g
       id="g34"
       transform="translate(0.00552427,-4.4000042)">
      <rect
         x="2.5999999"
         y="10.85"
         width="10.8"
         height="1.1"
         rx="0.55000001"
         fill="#7b4a84"
         id="rect31" />
      <path
         d="M 2.6,11.5 V 10.51 L 3.95,9.7 5.3,10.51 6.65,9.7 8,10.51 9.35,9.7 10.7,10.51 12.05,9.7 13.4,10.51 v 0.99 z"
         fill="#cedeef"
         stroke="#31294a"
         stroke-width="0.5"
         stroke-linejoin="round"
         id="path32" />
      <path
         style="fill:#9cadbd;fill-opacity:1;stroke-width:0.00753328"
         d="m 2.8548411,10.667776 v -0.185241 h 5.152587 5.1525869 v 0.185241 0.185241 H 8.0074281 2.8548411 Z"
         id="path33"
         transform="translate(-0.00552427,0.40000415)" />
      <path
         d="m 3.1458835,10.94315 h 1.8"
         stroke="#f7f7ff"
         stroke-width="0.5"
         stroke-linecap="round"
         id="path34" />
    </g>
    <rect
       x="1.5"
       y="3"
       width="13"
       height="12.5"
       rx="2"
       fill="none"
       stroke="#31294a"
       id="rect20" />
  </g>
  <g
     transform="translate(32 0)"
     id="g26">
    <path
       d="M1.5 14.1 H14.5 V13 H1.5 Z"
       fill="#8c5aa5"
       id="path21" />
    <path
       d="M 1.984375,14.63125 1.5,7.5 c -0.090356,-1.3302683 0.6666667,-2 2,-2 h 9 c 1.333333,0 2,0.6666667 2,2 l -0.46875,7.13125 z"
       fill="#de84b5"
       id="path22"
       sodipodi:nodetypes="csssscc" />
    <path
       d="M2 7.5 Q2 6 3.5 6 H12.5 Q14 6 14 7.5 V6.8 H2 Z"
       fill="#ffb5d6"
       id="path23" />
    <rect
       x="2.6"
       y="8.45"
       width="10.8"
       height="1.1"
       rx="0.55"
       fill="#7b4a84"
       id="rect24" />
    <rect
       x="2.6"
       y="11.65"
       width="10.8"
       height="1.1"
       rx="0.55"
       fill="#7b4a84"
       id="rect25" />
    <rect
       x="1.5"
       y="5.5"
       width="13"
       height="9.5"
       rx="2"
       fill="none"
       stroke="#31294a"
       id="rect26" />
  </g>
  <metadata
     id="metadata26">
    <c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTo1YTQxMDc2MS00MDBkLTQ3ODgtODYwMi1iN2Y3MjNhOTVlMmIAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaD5gum/LUCPil+THQXmupWsAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDowYTYzNWRjOC0xZTEzLTRkZDYtYTU1ZS0yNWM3MTc2ZTRiZWRscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNo16lVsbjLBfynQcK2jRe78AAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggVkcBy9vInc6Cl0GAf66kermX4MwOCCQ72crTNiOpuRKkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaJLnoUgi0O3wTXXIBzp96hEAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRMAAAAAAAAAAAAAAAAZGhhc2hYIPgiYp80XkET2HXM0CEVlUZSK6hohQ65WLgUdC35JpecZG5hbWVuanVtYmYgbWFuaWZlc3RqZXhjbHVzaW9uc4GiZXN0YXJ0GQ2+Zmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOjVhNDEwNzYxLTQwMGQtNDc4OC04NjAyLWI3ZjcyM2E5NWUyYi9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmZhMGM4NDI4LWQyM2UtNGJiNy1iMDNmLTI3YTMyNTA2OGFiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCBWRwHL28idzoKXQYB/rqR6uZfgzA4IJDvZytM2I6m5EqJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggD5ny65IwPkxznKFA+H6Yomu+1KvRWWN7kSz9nJ9fA6yiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggAR2g2MEWHsPriA7jTgdFuWHh3gweh3/ebzVP7/0A9+p0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQJiWrGql8fU3WWC13Bbx2RgxOFgSaX1jY/aY5DMzkW3xvWorJjB6fDftHb4JAGzOlxiixWBG2rb5bDnAHotsHB0=</c2pa:manifest>
  </metadata>
</svg>
`,mi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16" data-frames="2" data-frame-names="up down">
<!-- Switch: up, pressed down. -->
<g>
<rect x="1.5" y="3.5" width="13" height="11" rx="2.5" fill="#ffe7c6" stroke="#31294a"/>
<rect x="3.5" y="3.5" width="9" height="9.0" rx="1.8" fill="#7b4a84" stroke="#31294a"/>
<rect x="4" y="4.0" width="8" height="6.0" rx="1.4" fill="#de84b5"/>
<path d="M5.2 5.1 H8" stroke="#ffe7c6" stroke-width="0.9" stroke-linecap="round" stroke-opacity="0.8"/>
</g>
<g transform="translate(16 0)">
<rect x="1.5" y="3.5" width="13" height="11" rx="2.5" fill="#ffe7c6" stroke="#31294a"/>
<rect x="3.5" y="5.5" width="9" height="7.0" rx="1.8" fill="#7b4a84" stroke="#31294a"/>
<rect x="4" y="6.0" width="8" height="4.0" rx="1.4" fill="#de84b5"/>
</g>
</svg>
`,hi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 16" data-frames="10" data-frame-names="bubble tail dpad up left down right z r slash">
<!-- Tutorial hints: bubble, tail, d-pad, the arrow keys, Z, R and a slash. Each is drawn from its frame's top left. -->
<g transform="translate(0 0)">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" fill="#ffd6ef" stroke="#422939"/>
<rect x="1" y="13" width="14" height="2" fill="#ffb5d6"/>
</g>
<g transform="translate(16 0)">
<path d="M0 0 H9 L4.5 4.6 Z" fill="#ffd6ef"/>
<path d="M0.4 0.2 L4.5 4.4 L8.6 0.2" fill="none" stroke="#422939" stroke-linejoin="round"/>
</g>
<g transform="translate(32 0)">
<path d="M4.5 0.5 H8.5 V4.5 H12.5 V8.5 H8.5 V12.5 H4.5 V8.5 H0.5 V4.5 H4.5 Z" fill="#bd63a5" stroke="#422939" stroke-linejoin="round"/>
<circle cx="6.5" cy="6.5" r="1.1" fill="none" stroke="#7b4a84" stroke-width="0.8"/>
<circle cx="6.5" cy="2.3" r="0.6" fill="#ffd6ef"/><circle cx="6.5" cy="10.7" r="0.6" fill="#ffd6ef"/>
<circle cx="2.3" cy="6.5" r="0.6" fill="#ffd6ef"/><circle cx="10.7" cy="6.5" r="0.6" fill="#ffd6ef"/>
</g>
<g transform="translate(48 0)">
<rect x="0.5" y="0.5" width="10" height="10" rx="2" fill="#ffd6ef" stroke="#422939"/>
<path d="M1 7.6 H10 V8 Q10 10 8 10 H3 Q1 10 1 8 Z" fill="#de84b5"/>
<path d="M5.5 7 V2.6 M3.6 4.4 L5.5 2.6 L7.4 4.4" fill="none" stroke="#7b4a84" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(64 0)">
<rect x="0.5" y="0.5" width="10" height="10" rx="2" fill="#ffd6ef" stroke="#422939"/>
<path d="M1 7.6 H10 V8 Q10 10 8 10 H3 Q1 10 1 8 Z" fill="#de84b5"/>
<path d="M8.2 4.6 H3.6 M5.2 2.8 L3.4 4.6 L5.2 6.4" fill="none" stroke="#7b4a84" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(80 0)">
<rect x="0.5" y="0.5" width="10" height="10" rx="2" fill="#ffd6ef" stroke="#422939"/>
<path d="M1 7.6 H10 V8 Q10 10 8 10 H3 Q1 10 1 8 Z" fill="#de84b5"/>
<path d="M5.5 2.4 V6.6 M3.6 4.8 L5.5 6.6 L7.4 4.8" fill="none" stroke="#7b4a84" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(96 0)">
<rect x="0.5" y="0.5" width="10" height="10" rx="2" fill="#ffd6ef" stroke="#422939"/>
<path d="M1 7.6 H10 V8 Q10 10 8 10 H3 Q1 10 1 8 Z" fill="#de84b5"/>
<path d="M2.8 4.6 H7.4 M5.8 2.8 L7.6 4.6 L5.8 6.4" fill="none" stroke="#7b4a84" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(112 0)">
<rect x="0.5" y="0.5" width="10" height="10" rx="2" fill="#ffd6ef" stroke="#422939"/>
<path d="M1 7.6 H10 V8 Q10 10 8 10 H3 Q1 10 1 8 Z" fill="#de84b5"/>
<path d="M3.4 2.6 H7.6 L3.4 6.8 H7.6" fill="none" stroke="#7b4a84" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(128 0)">
<rect x="0.5" y="0.5" width="10" height="10" rx="2" fill="#ffd6ef" stroke="#422939"/>
<path d="M1 7.6 H10 V8 Q10 10 8 10 H3 Q1 10 1 8 Z" fill="#de84b5"/>
<path d="M3.8 7 V2.6 H6.2 Q7.6 2.6 7.6 3.8 Q7.6 5 6.2 5 H3.8 M5.8 5 L7.6 7" fill="none" stroke="#7b4a84" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(144 0)">
<path d="M4.2 0.8 L0.8 8.2" stroke="#7b4a84" stroke-width="1.3" stroke-linecap="round"/>
</g>
</svg>
`,gi=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 48 32"
   version="1.1"
   id="svg20"
   sodipodi:docname="walls-source.svg"
   inkscape:version="1.4.4 (dcaf3e7, 2026-05-05)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg" xmlns:c2pa="http://c2pa.org/manifest">
  <sodipodi:namedview
     id="namedview20"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="8.9161746"
     inkscape:cx="9.70147"
     inkscape:cy="2.8599709"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g19" />
  <!-- Walls: the source of the connecting tiles. Themes recolor them. -->
  <defs
     id="defs2">
    <clipPath
       id="inner-tile">
      <rect
         x="32"
         y="0"
         width="16"
         height="16"
         id="rect1" />
    </clipPath>
    <clipPath
       id="single-tile">
      <rect
         x="32"
         y="16"
         width="16"
         height="16"
         id="rect2" />
    </clipPath>
  </defs>
  <!-- A 2x2 block of wall -->
  <defs
     id="defs3">
    <clipPath
       id="block-inside">
      <rect
         x="1"
         y="1"
         width="30"
         height="30"
         rx="2.4"
         id="rect3" />
    </clipPath>
  </defs>
  <rect
     x="0.5"
     y="0.5"
     width="31"
     height="31"
     rx="3"
     fill="#ffb5d6"
     id="rect4" />
  <g
     clip-path="url(#block-inside)"
     id="g8">
    <rect
       x="0"
       y="0"
       width="32"
       height="3.4"
       fill="#ffd6ef"
       id="rect5" />
    <rect
       x="0"
       y="26"
       width="32"
       height="32"
       fill="#bd63a5"
       id="rect6" />
    <rect
       x="0"
       y="26"
       width="32"
       height="2"
       fill="#de84b5"
       id="rect7" />
    <rect
       x="0"
       y="25"
       width="32"
       height="1"
       fill="#7b4a84"
       id="rect8" />
  </g>
  <path
     d="M3.6 6.2 V5.2 Q3.6 3.8 5 3.8 H6.4"
     fill="none"
     stroke="#f7f7ff"
     stroke-width="1.3"
     stroke-linecap="round"
     id="path9" />
  <rect
     x="0.5"
     y="0.5"
     width="31"
     height="31"
     rx="3"
     fill="none"
     stroke="#7b4a84"
     id="rect9" />
  <!-- Inner corners. At the top, the outlines of the walls beside it meet, and the highlight along the top edge ends under them. At the bottom, the front faces of the walls beside it end here. -->
  <g
     clip-path="url(#inner-tile)"
     id="g14">
    <rect
       x="32"
       y="0"
       width="16"
       height="16"
       fill="#ffb5d6"
       id="rect10" />
    <path
       d="M32 1 H33 V2.4 A1 1 0 0 1 32 3.4 Z M48 1 H47 V2.4 A1 1 0 0 0 48 3.4 Z"
       fill="#ffd6ef"
       id="circle10" />
    <path
       d="M32 0 H33 V1 H32 Z M48 0 H47 V1 H48 Z"
       fill="#7b4a84"
       id="circle12" />
    <path
       d="M32.5 16 V9"
       stroke="#7b4a84"
       id="path13" />
    <path
       d="M47.5 16 V9"
       stroke="#7b4a84"
       id="path14" />
  </g>
  <!-- A wall on its own -->
  <defs
     id="defs14">
    <clipPath
       id="single-inside">
      <rect
         x="33"
         y="17"
         width="14"
         height="14"
         rx="2.4"
         id="rect14" />
    </clipPath>
  </defs>
  <rect
     x="32.5"
     y="16.5"
     width="15"
     height="15"
     rx="3"
     fill="#ffb5d6"
     id="rect15" />
  <g
     clip-path="url(#single-inside)"
     id="g19">
    <rect
       x="32"
       y="16"
       width="16"
       height="3.4"
       fill="#ffd6ef"
       id="rect16" />
    <rect
       x="32"
       y="26"
       width="16"
       height="16"
       fill="#bd63a5"
       id="rect17" />
    <rect
       x="32"
       y="26"
       width="16"
       height="2"
       fill="#de84b5"
       id="rect18" />
    <rect
       x="32"
       y="25"
       width="16"
       height="1"
       fill="#7b4a84"
       id="rect19" />
  </g>
  <path
     d="M35.6 22.2 V21.2 Q35.6 19.8 37 19.8 H38.4"
     fill="none"
     stroke="#f7f7ff"
     stroke-width="1.3"
     stroke-linecap="round"
     id="path20" />
  <rect
     x="32.5"
     y="16.5"
     width="15"
     height="15"
     rx="3"
     fill="none"
     stroke="#7b4a84"
     id="rect20" />
<metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTo2MTQ2MzBiNy0yZTMwLTQwZTYtYWU2Mi0yYTliOTE5MjEyMWEAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaCkhcthKs8mmqM5cYUqMacQAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDoyZTliMGViYi0xMjM5LTQ1OTEtODNmYS02ODAyNDZmOTI1YjlscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoCe0UTrJ3J6piQ8SE6ni5LAAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg6IDw6lgCexp3QI5Py5iwDaD5pN8jx7BFSOW6HOMC5GOkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaJQuH3r3n464eGPre95lwasAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRMAAAAAAAAAAAAAAAAZGhhc2hYIJMYQGMH/eOeSxremc1xvYU8dPtq1r7AEXyRSW4i2ZmVZG5hbWVuanVtYmYgbWFuaWZlc3RqZXhjbHVzaW9uc4GiZXN0YXJ0GRIkZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOjYxNDYzMGI3LTJlMzAtNDBlNi1hZTYyLTJhOWI5MTkyMTIxYS9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmYyMzU5NzJjLTIyZGMtNGM1MS1hYzRkLTZmOGU1YjMzMzg0MXJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDogPDqWAJ7GndAjk/LmLANoPmk3yPHsEVI5boc4wLkY6JjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggu6Pk9qaS9MigE6z2GN/hPdL6I/SxTNNomed/kwcgw5eiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggNwvbPc6tDnwJO+EHor7qir2e3lrV2iWkZDO28Nc56z90Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQAQGYKMt9iPqcGdamPjWVL0dLrjlPGSevSdDec98c8KjEDC6/uXNddcpPBMII34Rx21Of8/n/paF+/NkifqFQpU=</c2pa:manifest></metadata></svg>
`,_i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 1">
<!-- A streak drifting past in the sky. -->
<rect width="2" height="1" rx="0.5" fill="#cedeef"/>
</svg>
`,vi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
<!-- On buttons that show an ad first. -->
<rect x="0.6" y="0.6" width="9.8" height="9.8" rx="1.4" fill="none" stroke="#c69c00" stroke-width="1.1"/>
<path d="M2.4 2.4 V3.2 M2.4 5.1 V5.9 M2.4 7.8 V8.6 M8.6 2.4 V3.2 M8.6 5.1 V5.9 M8.6 7.8 V8.6" stroke="#c69c00" stroke-width="0.9" stroke-linecap="round"/>
<path d="M4.4 3.4 L7.2 5.5 L4.4 7.6 Z" fill="#c69c00" stroke="#c69c00" stroke-width="0.6" stroke-linejoin="round"/>
</svg>
`,yi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16" data-frames="1" data-frame-names="up">
<!-- A button, stretched as a nine-slice. Drawn green and up: the other colors swap its greens, and the code draws it pressed, see src/ui/buttonColors.ts. -->
<g>
<defs><clipPath id="up"><rect x="1" y="1" width="30" height="14" rx="2"/></clipPath></defs>
<rect x="0.5" y="0.5" width="31" height="15" rx="2.4" fill="#9ce752"/>
<g clip-path="url(#up)">
	<rect x="0" y="0" width="32" height="2" fill="#b5ef94"/>
	<path d="M0 11 Q0 14 3 14 H29 Q32 14 32 11 V16 H0 Z" fill="#6bbd31"/>
</g>
<rect x="0.5" y="0.5" width="31" height="15" rx="2.4" fill="none" stroke="#422939"/>
</g>
</svg>
`,bi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" data-frames="2" data-frame-names="green white">
<!-- On a completed level: green, and white for a super completion, which gets its colors from a tint. -->
<path d="M0.9 4.6 L2.9 6.6 L7.1 1.2" fill="none" stroke="#398c31" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.9 4.6 L2.9 6.6 L7.1 1.2" fill="none" stroke="#f7f7ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(8 0)"/>
</svg>
`,xi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
<!-- Next to a playing time. -->
<rect x="0.5" y="0.5" width="9" height="9" rx="1.6" fill="#e7eff7" stroke="#000000"/>
<path d="M4.5 2.4 V6.1 H6.8" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,Si=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 10" data-frames="2" data-frame-names="left right">
<!-- Which side of the touch panel the D-pad is on, left or right, with the buttons on the other side. The second frame is the first mirrored. -->
<g>
<rect x="0.5" y="0.5" width="12" height="9" rx="1.6" fill="#f7f7ff" stroke="#422939"/>
<path d="M4.5 2.2 V6.8 M2.2 4.5 H6.8" stroke="#422939" stroke-width="1.2" stroke-linecap="round"/>
<circle cx="10" cy="3" r="1.1" fill="#422939"/>
<circle cx="9" cy="7" r="1.1" fill="#422939"/>
</g>
<g transform="translate(26 0) scale(-1 1)">
<rect x="0.5" y="0.5" width="12" height="9" rx="1.6" fill="#f7f7ff" stroke="#422939"/>
<path d="M4.5 2.2 V6.8 M2.2 4.5 H6.8" stroke="#422939" stroke-width="1.2" stroke-linecap="round"/>
<circle cx="10" cy="3" r="1.1" fill="#422939"/>
<circle cx="9" cy="7" r="1.1" fill="#422939"/>
</g>
</svg>
`,Ci=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<!-- The bottom right corner of the frame around the board while a hint or replay plays. The others are this one turned. -->
<path d="M26.5 1.5 H30.5 V30.5 H1.5 V26.5 H26.5 Z" fill="#f7de00" stroke="#422939" stroke-linejoin="round"/>
<path d="M27.5 2.5 H29.5 V29.5 H2.5 V27.5" fill="none" stroke="#f7f794" stroke-width="0.8" stroke-opacity="0.8"/>
</svg>
`,wi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<!-- Goes around the selected level. Its middle is see-through. -->
<rect x="1.5" y="1.5" width="13" height="13" rx="2" fill="none" stroke="#f7de00" stroke-width="2"/>
<rect x="0.5" y="0.5" width="15" height="15" rx="2.4" fill="none" stroke="#7b4a84"/>
</svg>
`,Ti=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<!-- A level on the level select screen, and its bottom panel. Stretched as a nine-slice. -->
<rect x="0.5" y="0.5" width="15" height="15" rx="0.6" fill="#fff7de"/>
<rect x="1" y="10" width="14" height="5" fill="#efcead"/>
<rect x="0.5" y="0.5" width="15" height="15" rx="0.6" fill="none" stroke="#422939"/>
</svg>
`,Ei=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<!-- On a locked level. -->
<path d="M4.6 6.4 V4.6 Q4.6 1 8 1 Q11.4 1 11.4 4.6 V6.4" fill="none" stroke="#000000" stroke-width="2.4"/>
<path d="M4.6 6.4 V4.6 Q4.6 1 8 1 Q11.4 1 11.4 4.6 V6.4" fill="none" stroke="#dece4a" stroke-width="0.9"/>
<rect x="1.5" y="5.5" width="13" height="10" rx="1.6" fill="#f7e700" stroke="#000000"/>
<path d="M2 7.6 V7.4 Q2 6 3.4 6 H12.6 Q14 6 14 7.4 V7.6 Z" fill="#f7f794"/>
<path d="M2 14 H14 Q14 15 12.6 15 H3.4 Q2 15 2 14 Z" fill="#dece4a"/>
<circle cx="8" cy="9.4" r="1.6" fill="#000000"/>
<path d="M8 10 V13" stroke="#000000" stroke-width="1.6" stroke-linecap="round"/>
</svg>
`,Di=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
<!-- Next to a number of moves. -->
<path d="M3.5 0.5 H6.5 V3.5 H9.5 V6.5 H6.5 V9.5 H3.5 V6.5 H0.5 V3.5 H3.5 Z" fill="#bd63a5" stroke="#422939" stroke-linejoin="round"/>
<circle cx="5" cy="1.9" r="0.6" fill="#ffd6ef"/><circle cx="5" cy="8.1" r="0.6" fill="#ffd6ef"/>
<circle cx="1.9" cy="5" r="0.6" fill="#ffd6ef"/><circle cx="8.1" cy="5" r="0.6" fill="#ffd6ef"/>
</svg>
`,Oi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 11" data-frames="2" data-frame-names="on muted">
<!-- The music switch in the settings: on, and off with a cross. -->
<rect x="4" y="0.3" width="7" height="1.8" rx="0.4" fill="#422939"/>
<path d="M4.5 1 V7.6 M10.5 1 V7.6" stroke="#422939" stroke-width="1"/>
<ellipse cx="3" cy="8" rx="1.9" ry="1.4" transform="rotate(-20 3 8)" fill="#422939"/>
<ellipse cx="9" cy="8" rx="1.9" ry="1.4" transform="rotate(-20 9 8)" fill="#422939"/>
<g transform="translate(11 0)">
<path d="M2.6 1.2 V8.4" stroke="#422939" stroke-width="1"/>
<path d="M2.6 1.4 Q3.4 2.4 4.6 3.1 Q5.8 3.9 5.2 5" fill="none" stroke="#422939" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="2" cy="8.7" rx="1.7" ry="1.3" transform="rotate(-20 2 8.7)" fill="#422939"/>
<path d="M7.6 5.6 L10.4 8.4 M10.4 5.6 L7.6 8.4" stroke="#422939" stroke-width="1" stroke-linecap="round"/>
</g>
</svg>
`,ki=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<!-- A popup, stretched as a nine-slice. -->
<defs><clipPath id="popup"><rect x="1" y="1" width="30" height="30" rx="1.2"/></clipPath></defs>
<rect x="0.5" y="0.5" width="31" height="31" rx="1.6" fill="#f7f7ff"/>
<rect x="0" y="29" width="32" height="2" fill="#e7eff7" clip-path="url(#popup)"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="1.6" fill="none" stroke="#422939"/>
</svg>
`,Ai=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 11" data-frames="2" data-frame-names="on muted">
<!-- The sound switch in the settings: on, and off with a cross. -->
<path d="M0.5 4.2 H2.9 L5.6 1.4 V9.6 L2.9 6.8 H0.5 Z" fill="#422939" stroke="#422939" stroke-width="0.6" stroke-linejoin="round"/>
<path d="M7.2 2.6 Q9.8 5.5 7.2 8.4 M9.2 1.4 Q11.6 5.5 9.2 9.6" fill="none" stroke="#422939" stroke-width="1" stroke-linecap="round"/>
<g transform="translate(11 0)">
<path d="M0.5 4.2 H2.9 L5.6 1.4 V9.6 L2.9 6.8 H0.5 Z" fill="#422939" stroke="#422939" stroke-width="0.6" stroke-linejoin="round"/>
<path d="M7.6 4.6 L10.4 7.4 M10.4 4.6 L7.6 7.4" stroke="#422939" stroke-width="1" stroke-linecap="round"/>
</g>
</svg>
`,ji=[{id:`purple`,name:`Blue`,colors:{wallMain:`#397bde`,wallHighlight:`#bdefd6`,wallLight:`#73bdf7`,wallFront:`#0063b5`,wallShade:`#395294`,wallOutline:`#214263`,floorLight:`#8cc6ff`,floorDark:`#73bdf7`,floorEdge:`#21ade7`,gapFace:`#848484`,gapOutline:`#525252`}},{id:`yellow`,name:`Yellow`,colors:{wallMain:`#f7de00`,wallHighlight:`#f7f7ff`,wallLight:`#efe7b5`,wallFront:`#c6b54a`,wallShade:`#bd8c31`,wallOutline:`#946329`,floorLight:`#ffd6ef`,floorDark:`#ffb5d6`,floorEdge:`#e7a5f7`,gapFace:`#848484`,gapOutline:`#525252`}},{id:`red`,name:`Red`,colors:{wallMain:`#f73952`,wallHighlight:`#e7eff7`,wallLight:`#f7948c`,wallFront:`#bd3952`,wallShade:`#ad0042`,wallOutline:`#634252`,floorLight:`#f7f794`,floorDark:`#f7e784`,floorEdge:`#f7b539`,gapFace:`#848484`,gapOutline:`#525252`}}],Mi=(e,t)=>[{from:`#d60800`,to:e},{from:`#f7948c`,to:t}],P=[{name:`red`,cakeSwaps:[]},{name:`purple`,cakeSwaps:Mi(`#9c73ff`,`#ad9cff`)},{name:`pink`,cakeSwaps:Mi(`#c64aef`,`#e7a5f7`)}],Ni=1,Pi=2,Fi=4,Ii=8,Li=16,Ri=32,zi=64,Bi=128,Vi=[{x:0,y:-1,bit:Ni},{x:1,y:0,bit:Pi},{x:0,y:1,bit:Fi},{x:-1,y:0,bit:Ii},{x:1,y:-1,bit:Li},{x:1,y:1,bit:Ri},{x:-1,y:1,bit:zi},{x:-1,y:-1,bit:Bi}],Hi=[{x:0,y:0,vertical:Ni,horizontal:Ii,diagonal:Bi},{x:1,y:0,vertical:Ni,horizontal:Pi,diagonal:Li},{x:0,y:1,vertical:Fi,horizontal:Ii,diagonal:zi},{x:1,y:1,vertical:Fi,horizontal:Pi,diagonal:Ri}];function Ui(e){let t=e;for(let e of Hi)((t&e.vertical)===0||(t&e.horizontal)===0)&&(t&=~e.diagonal);return t}var Wi=[...new Set(Array.from({length:256},(e,t)=>Ui(t)))],Gi=Array.from({length:256},(e,t)=>Wi.indexOf(Ui(t)));function F(e){return Gi[e]}function I(e,t,n){let r=0;for(let i of Vi)n(e+i.x,t+i.y)&&(r|=i.bit);return r}function Ki(e){let t=new Set(e.map(e=>w(e.x,e.y)));return e.map(e=>I(e.x,e.y,(e,n)=>t.has(w(e,n))))}var qi=/<svg\b[^>]*>/,Ji=/#[0-9a-fA-F]{6}\b/g,Yi=/^[a-z0-9]+(-[a-z0-9]+)*$/;function Xi(e,t){return RegExp(`\\s${t}="([^"]*)"`).exec(e)?.[1]}function Zi(e,t){let n=Xi(e,`data-frame-names`)?.trim().split(/\s+/);if(t!==1||n!==void 0){if(n?.length!==t||new Set(n).size!==t||!n.every(e=>Yi.test(e)))throw Error(`data-frame-names must name each of the ${t} frames, differently, in lower case words with dashes`);return n}}function Qi(e){let t=qi.exec(e)?.[0],n=t===void 0?void 0:Xi(t,`viewBox`)?.trim().split(/[\s,]+/).map(Number);if(t===void 0||n===void 0||n.length!==4||n.some(e=>!Number.isFinite(e)))throw Error(`Vector art needs a viewBox on its <svg>, in art pixels`);let r=Number(Xi(t,`data-frames`)??1),[,,i,a]=n;if(!Number.isInteger(r)||r<1||i%r!==0)throw Error(`data-frames must be a whole number that divides the width (${i}) evenly`);let o=Zi(t,r);return o===void 0?{width:i,height:a,frames:r}:{width:i,height:a,frames:r,names:o}}function $i(e,t,n){return e.replace(qi,e=>e.replace(/\s(width|height)="[^"]*"/g,``).replace(/^<svg\b/,`<svg width="${t}" height="${n}"`))}function ea(e,t){if(t.length===0)return e;let n=new Map(t.map(({from:e,to:t})=>[e.toLowerCase(),t]));return e.replace(Ji,e=>n.get(e.toLowerCase())??e)}var ta=e=>new Set((e.match(Ji)??[]).map(e=>e.toLowerCase())),na=/(^|-)up$/,ra=e=>Qi(e).names?.some(e=>na.test(e))??!1;function ia(e,t){let n=Qi(e),r=n.names??[];if(!r.every(e=>na.test(e)))throw Error(`Pressable art only has up frames, but this has ${r.join(`, `)}`);let i=qi.exec(e),a=e.lastIndexOf(`</svg>`),o=e.slice(i.index+i[0].length,a),s=ea(o,t).replace(/(\sid=")([^"]+)"/g,`$1$2-pressed"`).replace(/url\(#([^)]+)\)/g,`url(#$1-pressed)`).replace(/(href=")#([^"]+)"/g,`$1#$2-pressed"`),c=Xi(i[0],`viewBox`).trim().split(/[\s,]+/);c[2]=String(2*n.width);let l=aa(i[0],`viewBox`,c.join(` `));return l=aa(l,`data-frames`,String(2*n.frames)),l=aa(l,`data-frame-names`,[...r,...r.map(e=>e.replace(na,`$1pressed`))].join(` `)),`${e.slice(0,i.index)}${l}${o}<g transform="translate(${n.width} 0)">${s}</g>${e.slice(a)}`}function aa(e,t,n){let r=RegExp(`(\\s${t}=")[^"]*"`);return r.test(e)?e.replace(r,`$1${n}"`):e.replace(/^<svg\b/,`<svg ${t}="${n}"`)}var oa=(e,{names:t},n)=>t===void 0?e:`${e}-${t[n]}`;function sa({width:e,height:t,frames:n}){let r=e/n;return Array.from({length:n},(e,n)=>({x:n*r,y:0,width:r,height:t}))}function ca(e,t){let n=e/2,r=r=>r===0&&t?[{from:{x:2*e,y:e,width:e,height:e},to:{x:0,y:0}}]:Hi.map(t=>{let i=(r&t.vertical)!==0,a=(r&t.horizontal)!==0,[o,s]=i&&a&&(r&t.diagonal)===0?[2,0]:[a?1-t.x:t.x,i?1-t.y:t.y],c=t.x*n,l=t.y*n;return{from:{x:o*e+c,y:s*e+l,width:n,height:n},to:{x:c,y:l}}});return Wi.map(e=>({mask:e,pieces:r(e)}))}function la(e,t){return{width:8*e,height:Math.ceil(t/8)*e}}var ua=512;function da(e){let t=e.map((e,t)=>({size:e,index:t})).sort((e,t)=>t.size.height-e.size.height||t.size.width-e.size.width),n=Math.max(ua,...e.map(e=>e.width+2)),r=Array(e.length),i=0,a=0,o=0,s=0;for(let{size:e,index:c}of t){let t=e.width+2;i>0&&i+t>n&&(a+=o,i=0,o=0),r[c]={x:i+1,y:a+1},i+=t,s=Math.max(s,i),o=Math.max(o,e.height+2)}return{places:r,size:{width:s,height:a+o}}}var fa=e=>Math.min(8,Math.max(1,Math.ceil(e-.05))),pa=`button-nineslice`,ma={green:{main:`#9ce752`,light:`#b5ef94`,dark:`#6bbd31`},blue:{main:`#9c73ff`,light:`#ad9cff`,dark:`#6b4ac6`},red:{main:`#f73952`,light:`#f7948c`,dark:`#ad0042`},yellow:{main:`#f7de00`,light:`#f7f794`,dark:`#c69c00`}},ha={main:`#bd63a5`,light:`#de84b5`,dark:`#7b4a84`},ga=Object.keys(ma);function _a(e){let{green:t}=ma;return e===t?[]:[{from:t.main,to:e.main},{from:t.light,to:e.light},{from:t.dark,to:e.dark}]}var va=Object.fromEntries(ga.map(e=>[e,_a(ma[e])])),ya=e=>`button-${e}-nineslice`;function ba(e){let t=ta(e),n=[...Object.values(ma),ha].filter(e=>t.has(e.main));if(n.length!==1)throw Error(`Pressable art has to use exactly one main color of the buttons or the D-pad, not ${n.length}`);let[{main:r,light:i,dark:a}]=n;return[{from:a,to:r},{from:r,to:i}]}var L={atlas:`main`,ui:`ui`,floorLight:`floor-light`,floorDark:`floor-dark`,ice:`ice`,gaps:`gaps`,walls:`walls`,slime:`slime`,purpleSlime:`purple-slime`,faces:`faces`,slicer:`slicer`,spikeBlock:`spike-block`,switch:`switch`,lampGem:`lamp-gem`,gemFloor:`gem-floor`,crackedFloor:`cracked-floor`,gemLock:`gemlock`,inkSplat:`ink-splat`,purpleInkSplat:`purple-ink-splat`,cake:`cake`,boxes:`boxes`,boxParticles:`box-particles`,cakeParticles:`cake-particles`,slimeParticles:`slime-particles`,purpleSlimeParticles:`purple-slime-particles`,confetti:`confetti`,hints:`tutorial-hints`},xa=(e,t)=>`${e}:${t}`,Sa=Object.assign({"./assets/vector/gamepad/background.svg":Ir,"./assets/vector/gamepad/dpad-background.svg":Lr,"./assets/vector/gamepad/dpad-down-button.svg":Rr,"./assets/vector/gamepad/dpad-left-button.svg":zr,"./assets/vector/gamepad/dpad-right-button.svg":Br,"./assets/vector/gamepad/dpad-up-button.svg":Vr,"./assets/vector/gamepad/hint-button.svg":Hr,"./assets/vector/gamepad/levels-button.svg":Ur,"./assets/vector/gamepad/reset-button.svg":Wr,"./assets/vector/gamepad/settings-button.svg":Gr,"./assets/vector/gamepad/undo-button.svg":Kr,"./assets/vector/main/box-particles.svg":qr,"./assets/vector/main/boxes-source.svg":Jr,"./assets/vector/main/cake-particles.svg":Yr,"./assets/vector/main/cake.svg":Xr,"./assets/vector/main/cloud-big.svg":Zr,"./assets/vector/main/cloud-small.svg":Qr,"./assets/vector/main/confetti.svg":$r,"./assets/vector/main/cracked-floor.svg":ei,"./assets/vector/main/faces.svg":ti,"./assets/vector/main/floor-dark-source.svg":ni,"./assets/vector/main/floor-light-source.svg":ri,"./assets/vector/main/gaps-source.svg":ii,"./assets/vector/main/gem-floor.svg":ai,"./assets/vector/main/gemlock.svg":oi,"./assets/vector/main/ice-source.svg":si,"./assets/vector/main/ink-splat.svg":ci,"./assets/vector/main/lamp-gem.svg":li,"./assets/vector/main/slicer.svg":ui,"./assets/vector/main/slime-particles.svg":di,"./assets/vector/main/slime-source.svg":fi,"./assets/vector/main/spike-block.svg":pi,"./assets/vector/main/switch.svg":mi,"./assets/vector/main/tutorial-hints.svg":hi,"./assets/vector/main/walls-source.svg":gi,"./assets/vector/main/water-stripe.svg":_i,"./assets/vector/ui/ad-icon.svg":vi,"./assets/vector/ui/button-nineslice.svg":yi,"./assets/vector/ui/checkmark.svg":bi,"./assets/vector/ui/clock-icon.svg":xi,"./assets/vector/ui/dpad-side-icon.svg":Si,"./assets/vector/ui/hint-play-corner.svg":Ci,"./assets/vector/ui/level-panel-selected-frame-nineslice.svg":wi,"./assets/vector/ui/level-selection-panel-nineslice.svg":Ti,"./assets/vector/ui/lock-icon.svg":Ei,"./assets/vector/ui/moves-icon.svg":Di,"./assets/vector/ui/music-icon.svg":Oi,"./assets/vector/ui/popup-nineslice.svg":ki,"./assets/vector/ui/sound-icon.svg":Ai}),Ca=`./assets/vector/`;function wa(e){let t=`${Ca}${e}/`;return Object.fromEntries(Object.entries(Sa).filter(([e])=>e.startsWith(t)).map(([e,n])=>[e.slice(t.length,-4),n]))}var Ta=`-source`,Ea=wa(`main`),Da=e=>e.endsWith(`-source`)?e.slice(0,-7):e;function Oa(e){let t=Object.keys(Ea).find(t=>Da(t)===e);if(t===void 0)throw Error(`There is no src/assets/vector/main/${e}.svg or ${e}${Ta}.svg`);return{[t]:Ea[t]}}var ka={[L.purpleSlime]:L.slime,[L.purpleInkSplat]:L.inkSplat,[L.purpleSlimeParticles]:L.slimeParticles},Aa=[L.cake,L.cakeParticles],R=(e,t)=>`${e}:${t.name}`,ja=new Map;function Ma(){return new Map([...ji.map(({id:e,colors:t})=>[e,t]),...ja])}function Na(e,t,n=e){return{key:n,kind:`sheet`,files:Oa(e),swaps:er(e,t)}}function Pa(){let e=Object.entries(Ea).map(([e,t])=>({key:Da(e),kind:`sheet`,files:{[e]:t}})),t=Object.entries(ka).map(([e,t])=>({key:e,kind:`sheet`,files:Oa(t),swaps:$n})),n=P.flatMap(e=>Aa.map(t=>({key:R(t,e),kind:`sheet`,files:Oa(t),swaps:e.cakeSwaps})));return[...e,...t,...n]}function Fa(e){return Object.fromEntries(Object.entries(wa(e)).map(([e,t])=>[e,ra(t)?ia(t,ba(t)):t]))}function Ia(){let{[pa]:e,...t}=Fa(`ui`);if(e===void 0)throw Error(`There is no src/assets/vector/ui/${pa}.svg`);return{...t,...Object.fromEntries(ga.map(t=>[ya(t),ea(e,va[t])]))}}function La(){return[{key:L.atlas,kind:`atlas`,files:Fa(`gamepad`),shownAt:2},{key:L.ui,kind:`atlas`,files:Ia(),shownAt:2}]}function Ra(){let e=[...Ma()].flatMap(([e,t])=>Qn.map(n=>Na(n,t,xa(n,e))));return[...Pa(),...e,...La()]}async function za(e,t){let n=Qi(e),r=new Image;return r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent($i(e,n.width*t,n.height*t))}`,await r.decode(),{image:r,info:n}}function Ba(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,{canvas:n,context:n.getContext(`2d`)}}function Va(e,t){let n=16*t,{context:r}=Ba(n,n);r.drawImage(e,2*n,n,n,n,0,0,n,n);let i=ca(16,r.getImageData(0,0,n,n).data.some((e,t)=>t%4==3&&e>0)),a=la(n,i.length),{canvas:o,context:s}=Ba(a.width,a.height);return{sheet:o,tiles:i.map(({pieces:r},i)=>{let a={x:i%8*n,y:Math.floor(i/8)*n,width:n,height:n};for(let{from:n,to:i}of r)s.drawImage(e,n.x*t,n.y*t,n.width*t,n.height*t,a.x+i.x*t,a.y+i.y*t,n.width*t,n.height*t);return a})}}var Ha=250,Ua=(e,t)=>({x:e.x*t,y:e.y*t,width:e.width*t,height:e.height*t});function Wa(e,t){let{sheet:n,tiles:r}=Va(e,t);return r.map((e,t)=>({name:t,image:n,from:e,width:16,height:16}))}async function Ga(e,t){let n=Object.entries(e.files).sort(([e],[t])=>e.localeCompare(t));return(await Promise.all(n.map(async([n,r])=>{let{image:i,info:a}=await za(ea(r,e.swaps??[]),t);return e.kind===`sheet`&&n.endsWith(`-source`)?Wa(i,t):sa(a).map((r,o)=>({name:e.kind===`atlas`?oa(n,a,o):o,image:i,from:Ua(r,t),width:r.width,height:r.height}))}))).flat()}function Ka(e,{x:t,y:n,width:r,height:i},a){let{canvas:o}=e;for(let s=1;s<=a;s++)e.drawImage(o,t,n,r,1,t,n-s,r,1),e.drawImage(o,t,n+i-1,r,1,t,n+i-1+s,r,1);let s=i+2*a;for(let i=1;i<=a;i++)e.drawImage(o,t,n-a,1,s,t-i,n-a,1,s),e.drawImage(o,t+r-1,n-a,1,s,t+r-1+i,n-a,1,s)}function qa(e,t,n,r){let i=da(n),a=i.size.width*r,o=i.size.height*r,s=e.exists(t)?e.get(t):e.createCanvas(t,a,o);s.setSize(a,o),s.source[0].resolution=r;let{context:c}=s;c.clearRect(0,0,a,o);let l=1*r;n.forEach((e,t)=>{let n=i.places[t].x*r,a=i.places[t].y*r,o=e.width*r,u=e.height*r;c.drawImage(e.image,e.from.x,e.from.y,e.from.width,e.from.height,n,a,o,u),Ka(c,{x:n,y:a,width:o,height:u},l);let d=(s.has(String(e.name))?s.get(e.name):void 0)??s.add(e.name,0,n,a,o,u);d.setSize(o,u,n,a),d.setTrim(e.width,e.height,0,0,e.width,e.height)}),s.refresh()}async function Ja(e,t,n){let r=Ra().map(e=>({texture:e,scale:fa(t*(e.shownAt??1))})).filter(({texture:e,scale:t})=>n.get(e.key)!==t),i=await Promise.all(r.map(async({texture:e,scale:t})=>({key:e.key,scale:t,frames:await Ga(e,t)})));for(let{key:t,scale:r,frames:a}of i)qa(e,t,a,r),n.set(t,r)}async function Ya(t){let n=new Map;await Ja(t.textures,Cr(t.scale.width),n);let r,i=Promise.resolve();t.scale.on(e.Scale.Events.RESIZE,()=>{clearTimeout(r),r=setTimeout(()=>{i=i.then(()=>Ja(t.textures,Cr(t.scale.width),n)).catch(e=>console.error(`Could not draw the art again`,e))},Ha)}),t.events.once(e.Core.Events.DESTROY,()=>clearTimeout(r))}var Xa=class extends e.Scene{constructor(){super(`Boot`)}preload(){Nr(this),this.showProgress(),qn.preload(this.load)}create(){Ya(this.game).then(()=>{j(this).analytics.gameStarted(performance.now(),ee()),this.scene.launch(`Controls`),this.scene.launch(`Popups`),this.scene.start(this.firstScene())})}firstScene(){let{playtest:e,session:t,levelProgress:n}=j(this);if(e!==void 0)return`Game`;let r=n.reachedIndex;return t.selectLevel(r),vr(cr,r,!1).levels?`LevelSelect`:`LevelIntro`}showProgress(){let t=this.add.text(160,140,`Loading...`,Fr).setOrigin(.5),n=this.add.rectangle(80,160,0,8,16777215).setOrigin(0,.5);this.load.on(e.Loader.Events.PROGRESS,e=>n.setSize(160*e,8)),this.load.once(e.Loader.Events.COMPLETE,()=>{t.destroy(),n.destroy()})}},z={normal:0,blink:1,happy:2,sad:3,bonk:4},Za={spin:[0,1]},Qa={on:0,between:1,off:2},$a={up:0,down:1},eo={off:0,lit:1},B={closed:0,opening:1,nearlyOpen:2},to={closed:0,opening:[1,2,3,4]},no={intact:0,breaking:[1,2]},ro={drawing:[0,1,2]},V={bubble:0,tail:1,dpad:2,up:3,left:4,down:5,right:6,z:7,r:8,slash:9};L.faces,L.slicer,L.spikeBlock,L.switch,L.lampGem,L.gemFloor,L.gemLock,L.crackedFloor,L.inkSplat,L.hints;var io={off:1585548,lit:10851377},ao={green:L.inkSplat,purple:L.purpleInkSplat},oo=e=>ro.drawing[e%ro.drawing.length],so=e=>({texture:L.hints,frame:V[e]});so(`r`),so(`z`),so(`z`),so(`r`);var co={arrowup:`up`,w:`up`,arrowdown:`down`,s:`down`,arrowleft:`left`,a:`left`,arrowright:`right`,d:`right`,z:`undo`,r:`reset`,h:`hint`},lo=`m`,uo=["`",`f2`],fo=`1`,po=`2`,mo=`4`;function ho(t,n,r,i,a){let o=t.input.keyboard;if(o===null)return;let s=e=>t=>{e&&r.keyPressed();let o=t.key.toLowerCase(),s=co[o];s===void 0?e&&!t.repeat&&(o===lo?i.toggleAllSound():a!==void 0&&go(a,o,t)):(t.preventDefault(),n.setDown(s,e))},c=s(!0),l=s(!1),u=()=>n.releaseAll();o.on(e.Input.Keyboard.Events.ANY_KEY_DOWN,c),o.on(e.Input.Keyboard.Events.ANY_KEY_UP,l),t.game.events.on(e.Core.Events.BLUR,u),t.events.once(e.Scenes.Events.SHUTDOWN,()=>{o.off(e.Input.Keyboard.Events.ANY_KEY_DOWN,c),o.off(e.Input.Keyboard.Events.ANY_KEY_UP,l),t.game.events.off(e.Core.Events.BLUR,u)})}function go(e,t,n){uo.includes(t)?(n.preventDefault(),e.toggleEnabled()):t===fo?e.toggleRecording():t===po?e.requestPlayback():t===mo&&e.requestSkip()}function _o(t,n,r){let i=!1,a=e=>{i=e,n(e)};t.on(e.Input.Events.GAMEOBJECT_POINTER_DOWN,()=>a(!0)),t.on(e.Input.Events.GAMEOBJECT_POINTER_OUT,()=>a(!1)),t.on(e.Input.Events.GAMEOBJECT_POINTER_UP,()=>{i&&(a(!1),r())})}var vo={frame:`popup-nineslice`,slice:{left:2,right:2,top:2,bottom:3},border:{left:1,right:1,top:1,bottom:3}},yo={slice:{left:3,right:3,top:3,bottom:4},border:{left:1,right:1,top:2,bottom:2}},bo=(e,t)=>`${e}-${t?`pressed`:`up`}`,xo=(e,t)=>bo(ya(e),t),H={frame:`level-selection-panel-nineslice`,slice:{left:1,right:1,top:1,bottom:6},border:{left:1,right:1,top:1,bottom:1}},So={frame:`level-panel-selected-frame-nineslice`,slice:{left:3,right:3,top:3,bottom:3},border:{left:3,right:3,top:3,bottom:3}},Co={green:`checkmark-green`,white:`checkmark-white`},wo=16766556,To=9079434;function U(e,t,n,r,i=2){let{slice:a}=t;return e.add.nineslice(0,0,L.ui,n,r.width/i,r.height/i,a.left,a.right,a.top,a.bottom).setOrigin(0).setScale(i)}var W={ad:{texture:L.ui,frame:`ad-icon`},moves:{texture:L.ui,frame:`moves-icon`},clock:{texture:L.ui,frame:`clock-icon`},lock:{texture:L.ui,frame:`lock-icon`},music:{texture:L.ui,frame:`music-icon-on`},musicMuted:{texture:L.ui,frame:`music-icon-muted`},sounds:{texture:L.ui,frame:`sound-icon-on`},soundsMuted:{texture:L.ui,frame:`sound-icon-muted`},dpadLeft:{texture:L.ui,frame:`dpad-side-icon-left`},dpadRight:{texture:L.ui,frame:`dpad-side-icon-right`}},Eo=4335929,Do=tr(Eo),Oo={...Fr,color:Do},ko={...Oo,fontStyle:`bold`},Ao=2,jo=320/Ao,Mo={x:3,y:3,width:74},No={x:82,y:5,width:72},Po=Mo.width/2,Fo=4,Io={up:{x:24,y:5},down:{x:24,y:37},left:{x:5,y:24},right:{x:37,y:24}},Lo={hint:{x:0,y:0},levels:{x:25,y:0},settings:{x:50,y:0},undo:{x:14,y:36},reset:{x:42,y:26}},Ro=[`levels`,`settings`,`undo`,`reset`],zo=350,Bo={dpad:[`up`,`right`,`down`,`left`]},Vo=class{_scene;_controls;_openMenu;_container;_dpad;_buttons;_sprites=new Map;_menuSprites=new Map;_playback=!1;_dpadPointer;_hintTimer;constructor(t,{controls:n,hints:r,layout:i,settings:a,openMenu:o}){this._scene=t,this._controls=n,this._openMenu=o,this._container=t.add.container(0,0).setScale(Ao),this._container.add(t.add.image(0,0,L.atlas,`background`).setOrigin(0)),this._dpad=t.add.container(0,Mo.y),this._buttons=t.add.container(0,No.y),this._container.add([this._dpad,this._buttons]),this.createDpad(),this.createHoldButton(`undo`),this.createHoldButton(`reset`),this.createHoldButton(`hint`),this.createMenuButton(`levels`),this.createMenuButton(`settings`);let s=n.onChange((e,t)=>this.showPressed(e,t)),c=r.onChange(e=>this.showHint(e)),l=i.onChange(e=>this.showLayout(e)),u=a.onChange(({dpadSide:e})=>this.showDpadSide(e));this.showLayout(i.value),this.showHint(r.value),this.showDpadSide(a.value.dpadSide),t.events.once(e.Scenes.Events.SHUTDOWN,()=>{s(),c(),l(),u()})}setTop(e){this._container.setY(e)}showDpadSide(e){let t=t=>e===`left`?t.x:jo-t.x-t.width;this._dpad.setX(t(Mo)),this._buttons.setX(t(No))}createDpad(){this._dpad.add(this._scene.add.image(0,0,L.atlas,`dpad-background`).setOrigin(0));for(let[e,{x:t,y:n}]of Object.entries(Io)){let r=this._scene.add.sprite(t,n,L.atlas,Uo(e,!1)).setOrigin(0);this._dpad.add(r),this._sprites.set(e,r)}let t=this._scene.add.zone(0,0,Mo.width,Mo.width).setOrigin(0);t.setInteractive(),this._dpad.add(t);let n=(e,t)=>this.pressDirection(Wo(e,t)),r=e=>{e.id===this._dpadPointer&&(this._dpadPointer=void 0,this.pressDirection(void 0))};t.on(e.Input.Events.GAMEOBJECT_POINTER_DOWN,(e,t,r)=>{this._dpadPointer=e.id,n(t,r)}),t.on(e.Input.Events.GAMEOBJECT_POINTER_OVER,(e,t,r)=>{e.isDown&&(this._dpadPointer=e.id,n(t,r))}),t.on(e.Input.Events.GAMEOBJECT_POINTER_MOVE,(e,t,r)=>{e.id===this._dpadPointer&&e.isDown&&n(t,r)}),t.on(e.Input.Events.GAMEOBJECT_POINTER_UP,r),t.on(e.Input.Events.GAMEOBJECT_POINTER_OUT,r)}pressDirection(e){for(let t of Object.keys(Io))this._controls.setDown(t,t===e)}createHoldButton(t){let n=this.createButtonSprite(t);this._sprites.set(t,n);let r=()=>this._controls.setDown(t,!1);n.on(e.Input.Events.GAMEOBJECT_POINTER_DOWN,()=>this._controls.setDown(t,!0)),n.on(e.Input.Events.GAMEOBJECT_POINTER_UP,r),n.on(e.Input.Events.GAMEOBJECT_POINTER_OUT,r)}createMenuButton(e){let t=this.createButtonSprite(e);this._menuSprites.set(e,t),_o(t,n=>t.setFrame(Uo(e,n)),()=>this._openMenu(e))}createButtonSprite(t){let{x:n,y:r}=Lo[t],i=this._scene.add.sprite(n,r,L.atlas,Uo(t,!1)).setOrigin(0),a=new e.Geom.Rectangle(-3,-3,i.width+6,i.height+6);return i.setInteractive(a,e.Geom.Rectangle.Contains),this._buttons.add(i),i}showPressed(e,t){this._sprites.get(e)?.setFrame(Uo(e,t,this._playback))}showLayout(e){if(this._container.setVisible(e!==void 0),e===void 0)this._dpadPointer=void 0,this._controls.releaseAll();else{this._playback=e.playback;for(let t of hr){let n=e.buttons.has(t)||t===`hint`&&e.playback,r=e.playback&&Ro.includes(t),i=this.buttonSprite(t).setVisible(n);r?i.setTint(To):i.clearTint(),this.setButtonEnabled(t,n&&!r)}this.showPressed(`hint`,this._controls.isDown(`hint`))}}buttonSprite(e){return Ho(e)?this._menuSprites.get(e):this._sprites.get(e)}setButtonEnabled(e,t){let n=this.buttonSprite(e);n.input!==null&&(n.input.enabled=t),!t&&(Ho(e)?n.setFrame(Uo(e,!1)):this._controls.setDown(e,!1))}showHint(e){this._hintTimer?.remove(),this._hintTimer=void 0;for(let[e]of this._sprites)this.showPressed(e,this._controls.isDown(e));if(e===void 0)return;let t=Bo[e],n=0;this._hintTimer=this._scene.time.addEvent({delay:zo,loop:!0,callback:()=>{let e=t[Math.floor(n/2)%t.length];this._controls.isDown(e)||this.showPressed(e,n%2==0),n++}})}},Ho=e=>e===`levels`||e===`settings`;function Uo(e,t,n=!1){let r=e in Io?`dpad-${e}-button`:`${e}-button`;return bo(e===`hint`&&n?`${r}-stop`:r,t)}function Wo(e,t){let n=e-Po,r=t-Po;if(!(Math.hypot(n,r)<Fo))return Math.abs(n)>Math.abs(r)?n>0?`right`:`left`:r>0?`down`:`up`}async function Go(e,t,n){let{musicMuted:r,soundsMuted:i,dpadSide:a}=t.value,o=[{value:!r,on:{label:`Music on`,icon:`music`},off:{label:`Music off`,icon:`musicMuted`,color:`red`},onChange:e=>t.change({musicMuted:!e})},{value:!i,on:{label:`Sounds on`,icon:`sounds`},off:{label:`Sounds off`,icon:`soundsMuted`,color:`red`},onChange:e=>t.change({soundsMuted:!e})},{value:a===`right`,on:{label:`D-pad right`,icon:`dpadRight`,color:`blue`},off:{label:`D-pad left`,icon:`dpadLeft`,color:`blue`},onChange:e=>t.change({dpadSide:e?`right`:`left`})}];n.isAvailable&&o.push({value:n.consentGranted,on:{label:`Sharing play data`},off:{label:`Not sharing play data`,color:`red`},onChange:e=>n.setConsent(e)}),await e.show({title:`Settings`,toggles:o.map(e=>({...e,align:`left`})),buttons:[{id:`done`,label:`Done`}]})}var Ko=class extends e.Scene{_debugOverlay;constructor(){super(`Controls`)}create(){let{controls:t,keyboard:n,hints:r,panelLayout:i,sounds:a,settings:o,session:s,debug:c,playtest:l,popups:u,analytics:d}=j(this);ho(this,t,n,o,c);let f=new Vo(this,{controls:t,hints:r,layout:i,settings:o,openMenu:e=>{e===`settings`?Go(u,o,d):(d.levelsButtonPressed(),t.ask(`levels`))}});Mr(this);let p=()=>f.setTop(Tr(M(this)));p(),this.scale.on(e.Scale.Events.RESIZE,p),l===void 0&&this.loadMusicInBackground(a)}update(){this._debugOverlay?.update()}loadMusicInBackground(t){this.load.audio(Gn,Kn),this.load.once(`${e.Loader.Events.FILE_KEY_COMPLETE}audio-${Gn}`,()=>t.startMusic()),this.load.start()}};function qo(e){let t=Math.floor(Math.max(0,e)/10),n=Math.floor(t/6e3),r=Math.floor(t%6e3/100);return`${n}:${String(r).padStart(2,`0`)}.${String(t%100).padStart(2,`0`)}`}function Jo(e){let t=Math.floor(e);return`${Math.floor(t/6e4)}m ${Math.floor(t%6e4/1e3)}s ${t%1e3}ms`}function Yo(e,t){return new Promise(n=>e.time.delayedCall(t,n))}var Xo=800,Zo=class extends e.Scene{constructor(){super(`End`)}create(){let{session:t,analytics:n}=j(this);n.campaignCompleted(t.moves,t.elapsedMs),Nr(this),this.cameras.main.setBackgroundColor(0);let r=`Thanks for playing :3\n\n\nMoves Done: ${t.moves.toLocaleString()}\n\n${Jo(t.elapsedMs)}`;this.add.text(160,160,r,Fr).setOrigin(.5);let i=this.add.text(160,280,`Press any key or tap to play again`,{...Fr,fontSize:`12px`});i.setOrigin(.5).setAlpha(0),Yo(this,Xo).then(()=>{i.setAlpha(1);let n=()=>{t.restart(),this.scene.start(`LevelSelect`)};this.input.keyboard?.once(e.Input.Keyboard.Events.ANY_KEY_DOWN,n),this.input.once(e.Input.Events.POINTER_DOWN,e=>{kr(this,e)&&n()})})}},Qo=class{_moves;_stepping;_next=0;_stopped=!1;_granted=0;constructor(e,t=!1){this._moves=e,this._stepping=t}get active(){return!this._stopped&&this._next<this._moves.length}get stepping(){return this._stepping}set stepping(e){this._stepping=e,this._granted=0}step(){this._granted++}get played(){return this._next}get total(){return this._moves.length}next(){if(!(!this.active||this._stepping&&this._granted===0))return this._stepping&&this._granted--,this._moves[this._next++]}stop(){this._stopped=!0}rewind(){this._next=0,this._granted=0}},$o=3e6,es=5e4;function ts(e){let t=e.pieces.map(e=>e.shape),n=e=>{if(!T(e))return e.status[0];let n=e.shape===t[e.id]?``:JSON.stringify(e.shape);return`${e.x},${e.y}${e.fused?`f`:``}${e.color===`purple`?`u`:``}${n}`};return e=>`${e.pieces.map(n).join(`;`)}${e.gemsActivated?`!`:``}|${e.brokenFloors.join()}`}function ns(e){let t=E(e.pieces),n=e.pieces.filter(e=>e.kind===`cake`&&T(e));return t===void 0||!T(t)||n.length===0?1/0:Math.min(...n.map(e=>Math.abs(e.x-t.x)+Math.abs(e.y-t.y)))}function rs(e,{weight:t=3,maxStates:n=$o,onProgress:r,from:i}={}){let a=new ot(e),o=i??Nt(a,e.spawns),s=ts(o),c=s(o),l=new Map([[c,void 0]]),u=[],d=0,f=e=>{let n=ns(e.state);if(n!==1/0){let r=e.depth+t*n;(u[r]??=[]).push(e),d=Math.min(d,r)}};for(f({state:o,key:c,depth:0});d<u.length;){let e=u[d]?.pop();if(e===void 0)d++;else for(let t of C){let i=Pt(a,e.state,t);if(i===void 0)continue;let o=s(i.state);if(!l.has(o)){if(l.set(o,{from:e.key,step:at(t)}),i.state.won)return{moves:as(l,o),explored:l.size};if(l.size>n)return{exhausted:!1,explored:l.size};l.size%es===0&&r?.(l.size),f({state:i.state,key:o,depth:e.depth+1})}}}return{exhausted:!0,explored:l.size}}function is(e,t,n=$o){if(t.won)return!0;let r=rs(e,{from:t,maxStates:n});return`moves`in r||!r.exhausted}function as(e,t){let n=[];for(let r=e.get(t);r!==void 0;r=e.get(r.from))n.push(r.step);return n.reverse()}var os=2e5,ss=class{_level;_puzzle;_lostAt;constructor(e,t){this._level=e,this._puzzle=t}moved(){return this._lostAt===void 0&&!is(this._level,this._puzzle.state,os)&&(this._lostAt=this._puzzle.stepCount),this._lostAt!==void 0}undone(){this._lostAt!==void 0&&this._puzzle.stepCount<this._lostAt&&(this._lostAt=void 0)}};function cs(){return Promise.resolve(!0)}async function ls(e,t){return!t||await e.show({title:`Leave level?`,body:`Your moves in this level won't be saved.`,buttons:[{id:`leave`,label:`Leave`,color:`red`},{id:`stay`,label:`Stay`,color:`green`}]})===`leave`}async function us(e,t,n,r){let i=t.level.id,a=t.isHintUnlocked(i);if(n.hintPressed(a),!a){if(n.adPrompted(),await e.show({title:`Need a hint?`,body:`Watch an ad to reveal part of the solution!`,buttons:[{id:`watch`,label:`Watch ad`,icon:`ad`,color:`yellow`},{id:`no`,label:`No thanks`,color:`red`}]})!==`watch`)return n.adFinished(`declined`),`no`;let r=await cs();if(n.adFinished(r?`watched`:`unfinished`),!r)return`no`;t.unlockHint(i)}if(!r)return`now`;let o=await e.show({title:`Restart level?`,body:`The hint plays the first few moves from the start.

Are you sure you want to restart the level?`,buttons:[{id:`yes`,label:`Yes`,color:`green`},{id:`no`,label:`No`,color:`red`}]});return n.restartPrompted(o===`yes`),o===`yes`?`afterRestart`:`no`}var ds=e=>e===`pit`||e===`gemFloor`||e===`crackedFloor`;function fs(e){let t=e.width*e.height,n=Array(t).fill(-1),r=Array(t).fill(-1),i=Array(t).fill(-1),a=Array(t).fill(-1),o=[],s=[],c=[],l=[],u=[],d=[],f=[],p=[],m=(t,n)=>e.tileAt(t,n)!==`solid`,h=(t,n)=>e.tileAt(t,n)===`solid`;for(let t=0;t<e.height;t++)for(let g=0;g<e.width;g++){let _=e.indexOf(g,t),v=e.tileAt(g,t),ee=(g+t)%2==0?n:r;switch(v===`solid`?(a[_]=F(I(g,t,h)),ee[_]=F(255)):ds(v)||(ee[_]=F(I(g,t,m))),e.isIceAt(g,t)&&(i[_]=F(I(g,t,(t,n)=>e.isIceAt(t,n)))),v){case`pit`:e.gemCount>0&&d.push({x:g,y:t});break;case`gemFloor`:u.push({x:g,y:t});break;case`crackedFloor`:f.push({x:g,y:t});break;case`gem`:l.push({x:g,y:t});break;case`inkGreen`:case`inkPurple`:p.push({x:g,y:t,color:v===`inkGreen`?`green`:`purple`});break;case`spike`:o.push({x:g,y:t});break;case`spikeBlockOn`:case`spikeBlockOff`:s.push({x:g,y:t,startsOn:v===`spikeBlockOn`});break;case`switch`:c.push({x:g,y:t})}}return{floorLight:n,floorDark:r,ice:i,gaps:ps(e,!1,[]),walls:a,slicers:o,spikeBlocks:s,switches:c,gems:l,gemFloors:u,gapsToClose:d,crackedFloors:f,inkSplats:p}}function ps(e,t,n){let r=(t,r)=>n.includes(e.indexOf(t,r)),i=(n,i)=>r(n,i)||e.tileAt(n,i)===(t?`gemFloor`:`pit`);return Array.from({length:e.width*e.height},(t,n)=>{let{x:a,y:o}=e.pointAt(n),s=e.tileAt(a,o);return s===`pit`||s===`gemFloor`?F(I(a,o,(t,n)=>e.tileAt(t,n)===s||r(t,n))):r(a,o)?F(I(a,o,i)):-1})}var G={x:0,y:0,growX:0,growY:0,anchorX:0,anchorY:1};function ms(e,t,n,r=1){let i=r*(t.x+n.growX)/t.x,a=r*(t.y+n.growY)/t.y,o=e.x+n.anchorX*t.x/2,s=e.y+n.anchorY*t.y/2;return{scaleX:i,scaleY:a,place:e=>({x:o+(e.x-o)*i+n.x,y:s+(e.y-s)*a+n.y})}}var hs=e=>Math.sin(Math.PI*e),gs=(e,t,n)=>e+(t-e)*n,_s=90,vs=280;function ys(e){return{durationMs:500,pose:t=>{if(t<_s)return{...G,growX:1,growY:-1};if(t<370){let n=(t-_s)/vs,r=n<.25||n>.75;return{...G,y:-Math.round(e*hs(n)),growX:r?-1:0,growY:+!!r}}let n=t<435?2:1;return{...G,growX:n,growY:-n}}}}var bs=2;function xs(e){return{durationMs:e,pose:t=>({...G,y:-Math.round(bs*hs(t/e))})}}function Ss(e){return{durationMs:e,pose:()=>G}}var Cs=70,ws=90,Ts=180,Es=3,Ds=2;function Os(e){if(e<Cs)return{depth:gs(0,Es,e/Cs),squash:0};if(e<160)return{depth:Es,squash:Ds};let t=(e-Cs-ws)/Ts;return{depth:t<.6?gs(Es,-2,t/.6):gs(-2,0,(t-.6)/.4),squash:0}}var ks=(e,t,n,r)=>({x:Math.round(e.x*t),y:Math.round(e.y*t),growX:e.x===0?r:n,growY:e.y===0?r:n,anchorX:e.x,anchorY:e.y});function As(e){return{durationMs:340,pose:t=>{let{depth:n,squash:r}=Os(t);return ks(e,n,-r,r)}}}var js=-1;function Ms(e){return{durationMs:340,pose:t=>{let{depth:n,squash:r}=Os(t);return n>0?ks(e,0,-Math.round(n),r):ks(e,0,+(n<js),0)}}}var Ns=-.5,Ps=.75,Fs=e=>e<Ps,K=e=>e*16+8;function Is(e){let t=e=>(Math.min(...e)+Math.max(...e))/2;return{x:t(e.map(e=>e.x)),y:t(e.map(e=>e.y))}}function Ls(e){let t=e=>Math.max(...e)-Math.min(...e)+1;return{x:t(e.map(e=>e.x)),y:t(e.map(e=>e.y))}}var Rs=class{_scene;_body;_center;_size;_squish;constructor(e,{piece:t,texture:n,frames:r}){this._scene=e,this._center=Is(t.shape),this._size=Ls(t.shape);let i=t.shape.map((t,i)=>e.add.sprite((t.x-this._center.x)*16,(t.y-this._center.y)*16,n,r[i]));this._body=e.add.container(K(t.x+this._center.x),K(t.y+this._center.y),i),this._body.setDepth(3),this._body.setVisible(T(t))}addOnTop(e,t){let n=this._scene.add.sprite(0,0,e,t);return this._body.add(n),n}squish(e){this.stopSquish();let t={x:this._body.x,y:this._body.y},n=Ms(e),r=this._scene.tweens.addCounter({from:0,to:n.durationMs,duration:n.durationMs,onUpdate:(e,r,i,a)=>this.applyPose(t,n.pose(a)),onComplete:()=>this.stopSquish()});this._squish={tween:r,rest:t}}slideTo(e,t){this.stopSquish(),this._scene.tweens.killTweensOf(this._body),this._scene.tweens.add({targets:this._body,x:K(e.x+this._center.x),y:K(e.y+this._center.y),duration:t})}reappear(e){this.stopSquish(),this._scene.tweens.killTweensOf(this._body),this._body.setPosition(K(e.x+this._center.x),K(e.y+this._center.y)),this._body.setVisible(!0).setAlpha(1).setScale(1).setDepth(3)}fadeOut(){this._scene.tweens.add({targets:this._body,alpha:0,duration:150,onComplete:()=>this._body.setVisible(!1)})}fadeOutAndDestroy(){this._scene.tweens.add({targets:this._body,alpha:0,duration:150,onComplete:()=>this._body.destroy()})}destroy(){this.stopSquish(),this._scene.tweens.killTweensOf(this._body),this._body.destroy()}fallAway(){this._scene.tweens.add({targets:this._body,scale:0,y:this._body.y+16,duration:500,ease:`Sine.easeIn`,onUpdate:()=>{Fs(this._body.scale)&&this._body.setDepth(Ns)},onComplete:()=>this._body.setVisible(!1)})}stopSquish(){this._squish!==void 0&&(this._squish.tween.stop(),this.applyPose(this._squish.rest,G),this._squish=void 0)}applyPose(e,t){let n=ms(e,{x:this._size.x*16,y:this._size.y*16},t),{x:r,y:i}=n.place(e);this._body.setPosition(r,i).setScale(n.scaleX,n.scaleY)}},zs=class{_scene;_floors;constructor(e,{board:t,layers:{crackedFloors:n}}){this._scene=e,this._floors=n.map(({x:n,y:r})=>({cell:t.indexOf(n,r),sprite:e.add.sprite(K(n),K(r),L.crackedFloor,no.intact),isBroken:!1}))}show({brokenFloors:e}){let t=!1;for(let n of this._floors){let r=e.includes(n.cell);r!==n.isBroken&&(n.isBroken=r,n.nextFrame?.remove(),r?(this.playBreaking(n,0),t=!0):n.sprite.setVisible(!0).setFrame(no.intact))}return t}playBreaking(e,t){t===no.breaking.length?e.sprite.setVisible(!1):(e.sprite.setFrame(no.breaking[t]),e.nextFrame=this._scene.time.delayedCall(100,()=>this.playBreaking(e,t+1)))}},Bs=6,Vs=10,Hs=class{_squash;_purpleSquash;_shatter;_crumble;_confetti;constructor(e,t){let n=(t,n)=>e.add.particles(0,0,t,{frame:e.textures.get(t).getFrameNames(),scale:{start:1,end:0,ease:`Cubic.easeIn`},emitting:!1,...n}).setDepth(Bs),r=e=>n(e,{lifespan:500,speed:{min:50,max:75}});this._squash=r(L.slimeParticles),this._purpleSquash=r(L.purpleSlimeParticles);let i=(e,t={})=>n(e,{lifespan:400,speed:{min:30,max:80},rotate:{min:0,max:360},gravityY:10,...t});this._shatter=i(L.boxParticles),this._crumble=i(R(L.cakeParticles,t)),this._confetti=e.add.particles(0,0,L.confetti,{frame:{frames:e.textures.get(L.confetti).getFrameNames(),cycle:!0},lifespan:500,speed:{min:80,max:180},scale:{start:1,end:0},emitting:!1}).setDepth(Bs)}squash(e,t){this._squash.explode(Vs,e,t)}purpleSquash(e,t){this._purpleSquash.explode(Vs,e,t)}shatter(e,t){this._shatter.explode(Vs,e,t)}crumble(e,t){this._crumble.explode(Vs,e,t)}confetti(e,t){this._confetti.explode(Vs,e,t)}},Us=class{_scene;_locks;_activated;_pendingFrames;constructor(e,{locks:t,activated:n}){this._scene=e,this._locks=t,this._activated=n,this.showAtRest()}show(e){e!==this._activated&&(this._activated=e,this.animate())}animate(){this._pendingFrames?.remove();let e=this._activated?to.opening:[...to.opening].reverse(),t=n=>{n===e.length?this.showAtRest():(this._locks.forEach(t=>t.setVisible(!0).setFrame(e[n])),this._pendingFrames=this._scene.time.delayedCall(100,()=>t(n+1)))};t(0)}showAtRest(){this._locks.forEach(e=>e.setVisible(!this._activated).setFrame(to.closed))}},q=2,J={north:1,east:2,south:4,west:8};function Ws(e){return e.x===0?e.y<0?J.north:J.south:e.x>0?J.east:J.west}var Gs=1,Ks=2,qs=6,Js=1,Ys=e=>e===`solid`||e===`pit`||e===`gemFloor`||e===`crackedFloor`;function Xs(e){return Ys(e)?Gs:e===`empty`||e===`gem`?Ks:qs}function Zs(e){let t=[];for(let n=0;n<e.width*e.height;n++){let{x:r,y:i}=e.pointAt(n);e.tileAt(r,i)===`gem`&&t.push(n)}return t}function Qs(e){let[t,...n]=Zs(e);if(t===void 0)return[];let r=new Map,i=new Set([t]),a=new Set(n);for(;a.size>0;){let t=$s(e,i,a);for(let n=1;n<t.length;n++){let o={x:t[n].x-t[n-1].x,y:t[n].y-t[n-1].y},s=e.indexOf(t[n-1].x,t[n-1].y),c=e.indexOf(t[n].x,t[n].y);r.set(s,(r.get(s)??0)|Ws(o)),r.set(c,(r.get(c)??0)|Ws({x:-o.x,y:-o.y})),i.add(c),a.delete(c)}}return[...r].sort(([e],[t])=>e-t).map(([t,n])=>({...e.pointAt(t),mask:n})).filter(({x:t,y:n})=>!Ys(e.tileAt(t,n)))}function $s(e,t,n){let r=(e,t)=>e*C.length+t,i=e=>Math.floor(e/C.length),a=new Map,o=new Map,s=[],c=(e,t,n)=>{t<(a.get(e)??1/0)&&(a.set(e,t),n!==void 0&&o.set(e,n),(s[t]??=[]).push(e))};for(let e of t)C.forEach((t,n)=>c(r(e,n),0));for(let t=0;t<s.length;t++)for(let l of s[t]??[]){if(a.get(l)!==t)continue;let s=i(l);if(n.has(s)){let t=[];for(let n=l;n!==void 0;n=o.get(n))t.push(e.pointAt(i(n)));return t.reverse()}let{x:u,y:d}=e.pointAt(s);C.forEach((n,i)=>{let a=e.indexOf(u+n.x,d+n.y);if(a!==-1){let o=i===l%C.length?0:Js;c(r(a,i),t+o+Xs(e.tileAt(u+n.x,d+n.y)),l)}})}return[]}function ec(e,t){let n=(t-q)/2,r=n+q,i=t-n,a=[];return(e&J.north)!==0&&a.push({x:n,y:0,width:q,height:r}),(e&J.east)!==0&&a.push({x:n,y:n,width:i,height:q}),(e&J.south)!==0&&a.push({x:n,y:n,width:q,height:i}),(e&J.west)!==0&&a.push({x:0,y:n,width:r,height:q}),a}function tc(e,t,n){let r={pressed:!1,released:!1};for(let{index:i,sprite:a}of e){let e=t(i),o=Number(a.frame.name)===n.down;r.pressed||=e&&!o,r.released||=o&&!e,a.setFrame(e?n.down:n.up)}return r}var nc=1,rc=[B.opening,B.nearlyOpen],ic=[B.nearlyOpen,B.opening,B.closed],ac=class{_scene;_board;_gems;_gemFloors;_closingGaps;_lines;_lineGraphics;_activated;_pendingFrames;constructor(e,{board:t,layers:{gems:n,gemFloors:r,gapsToClose:i},initial:a}){this._scene=e,this._board=t,this._activated=a.gemsActivated;let o=({x:t,y:n})=>e.add.sprite(K(t),K(n),L.gemFloor,B.closed);this._gemFloors=r.map(o),this._closingGaps=i.map(o),this.showFloorsAtRest(),this._lines=Qs(this._board),this._lineGraphics=e.add.graphics(),this.drawLines(),this._gems=n.map(t=>({index:this._board.indexOf(t.x,t.y),sprite:e.add.sprite(K(t.x),K(t.y),L.lampGem,eo.off).setDepth(nc)})),this.showGems(a)}show(e){let t=this.showGems(e);return e.gemsActivated!==this._activated&&(this._activated=e.gemsActivated,this.drawLines(),this.animateFloors()),t}showGems(e){let t=_t(this._board,e.pieces);return tc(this._gems,n=>e.gemsActivated||t.has(n),{up:eo.off,down:eo.lit})}drawLines(){this._lineGraphics.clear(),this._lineGraphics.fillStyle(this._activated?io.lit:io.off);for(let{x:e,y:t,mask:n}of this._lines)for(let r of ec(n,16))this._lineGraphics.fillRect(e*16+r.x,t*16+r.y,r.width,r.height)}get floorsToOpen(){return this._activated?this._gemFloors:this._closingGaps}get floorsToClose(){return this._activated?this._closingGaps:this._gemFloors}animateFloors(){this._pendingFrames?.remove(),this.floorsToClose.forEach(e=>e.setVisible(!0));let e=t=>{t===ic.length?this.showFloorsAtRest():(t<rc.length?this.floorsToOpen.forEach(e=>e.setFrame(rc[t])):this.floorsToOpen.forEach(e=>e.setVisible(!1)),this.floorsToClose.forEach(e=>e.setFrame(ic[t])),this._pendingFrames=this._scene.time.delayedCall(70,()=>e(t+1)))};e(0)}showFloorsAtRest(){this.floorsToOpen.forEach(e=>e.setVisible(!1)),this.floorsToClose.forEach(e=>e.setVisible(!0).setFrame(B.closed))}},oc=e=>e===`slide`?70:160,sc={"cloud-big":{width:48,height:22},"cloud-small":{width:26,height:18},"water-stripe":{width:2,height:1}}[`cloud-big`].width,cc=320+sc,lc=39,uc=6,dc=[7,11,5,9,6,12,8,10],fc=2,pc=[27,34],mc=4;function hc(){let e=[];return dc.forEach((t,n)=>{let r=uc+n*lc;for(let i=0;i<fc;i++)e.push({sprite:(n+i)%2==0?`cloud-big`:`cloud-small`,y:r,start:(n*90+i*cc/fc)%cc,speed:t});pc.forEach((i,a)=>{for(let o=0;o<mc;o++)e.push({sprite:`water-stripe`,y:r+i,start:(n*37+a*53+o*cc/mc)%cc,speed:t+6})})}),e}var gc=hc();function _c(e,t){return Math.floor((e.start+e.speed*t/1e3)%cc)-sc}var vc=-1,yc=class{_sprites;constructor(e){this._sprites=gc.map(t=>({item:t,sprite:e.add.image(0,t.y,t.sprite).setOrigin(0,0).setDepth(vc)})),this.update(e.time.now)}update(e){for(let{item:t,sprite:n}of this._sprites)n.x=_c(t,e)}},bc=4,xc=5,Sc=130,Cc={min:1800,max:5e3},wc=3,Tc=7,Ec={min:500,max:1100},Dc=60,Oc=480,kc=120,Ac=90,jc=e=>e.color===`purple`,Mc=e=>jc(e)?L.purpleSlime:L.slime,Nc=class{_scene;_cells=new Map;_face;_playerCell;_group=[];_falling=[];_mood=`normal`;_animation;_now=0;_nextHopAt=0;_nextBlinkAt=0;_blinkUntil=0;_bonkFaceUntil=0;_slideFaceUntil=0;_look={x:0,y:0};constructor(e,t){this._scene=e;let n=t.pieces.filter(O);for(let t of n){let n=e.add.sprite(K(t.x),K(t.y),Mc(t),0);n.setDepth(bc).setVisible(T(t)),this._cells.set(t.id,{sprite:n,x:n.x,y:n.y})}let r=E(n);this._playerCell=this._cells.get(r.id),this._face=e.add.sprite(this._playerCell.x,this._playerCell.y,L.faces,z.normal),this._face.setDepth(xc).setVisible(T(r)),this.settle(t),this.applyPose(G)}update(e){this._now=e,this.applyPose(this.currentPose()),this.updateFace()}step(e,t,n){let r=oc(n),i=n===`slide`,a=!1,o=!1;for(let n of t.pieces.filter(O)){let t=e.pieces[n.id],i=this.cell(n.id);T(n)&&!T(t)&&(this.reappear(i),a=!0),(t.x!==n.x||t.y!==n.y)&&(T(n)||T(t))&&(this._scene.tweens.killTweensOf(i),this._scene.tweens.add({targets:i,x:K(n.x),y:K(n.y),duration:r}),a=!0,i===this._playerCell&&(o=!0,this._look={x:Math.sign(n.x-t.x),y:Math.sign(n.y-t.y)}))}return this._group=this.groupIn(n===`undo`?t:e),this.showConnectionsDuringStep(e,t),a&&(this.play(i?Ss(r):xs(r)),this._bonkFaceUntil=0,this._slideFaceUntil=i&&o?this._now+r+kc:0),a}settle(e){this._group=this.groupIn(e);for(let t of e.pieces.filter(O)){let{sprite:e}=this.cell(t.id);e.texture.key!==Mc(t)&&e.setTexture(Mc(t),e.frame.name)}this.showConnections(e.pieces.filter(e=>O(e)&&T(e)))}bonk(e){return this._group.includes(this._playerCell)?(this.play(As(e)),this._bonkFaceUntil=this._now+Oc,this._look=e,!0):!1}setSad(e){this._mood!==`happy`&&(this._mood=e?`sad`:`normal`)}celebrate(){this._mood=`happy`,this._nextHopAt=this._now+160}kill(e){let t=this.cell(e),n=t===this._playerCell?[t.sprite,this._face]:[t.sprite];this._scene.tweens.add({targets:n,alpha:0,duration:150,onComplete:()=>n.forEach(e=>e.setVisible(!1))})}fall(e){let t=e=>this._group.includes(this.cell(e.id)),n=e.filter(t),r=[...n.length>0?[n]:[],...lt(e.filter(e=>!t(e)))];for(let e of r){let t={cells:e.map(e=>this.cell(e.id)),scale:1};this._falling.push(t),this._scene.tweens.add({targets:t,scale:0,duration:500,ease:`Sine.easeIn`,onComplete:()=>this.hide(t)})}}flash(t){let{sprite:n}=this.cell(t);n.setTint(16777215).setTintMode(e.TintModes.FILL),this._scene.time.delayedCall(Ac,()=>n.clearTint().setTintMode(e.TintModes.MULTIPLY))}currentPose(){if(this._animation!==void 0&&this._now-this._animation.startedAt>=this._animation.source.durationMs){this._animation=void 0;let t=this._mood===`happy`?Dc:e.Math.Between(Ec.min,Ec.max);this._nextHopAt=this._now+t}return this._animation===void 0&&this._now>=this._nextHopAt&&this._mood!==`sad`&&this._group.length>0&&this.play(ys(this._mood===`happy`?Tc:wc)),this._animation?.source.pose(this._now-this._animation.startedAt)??G}play(e){this._animation={source:e,startedAt:this._now}}applyPose(e){for(let e of this._cells.values())e.sprite.setPosition(e.x,e.y).setScale(1);Fc(this._group,e);for(let{cells:e,scale:t}of this._falling)Fc(e,{...G,anchorY:0,y:16*(1-t)},t),Fs(t)&&e.forEach(e=>e.sprite.setDepth(Ns));let{sprite:t}=this._playerCell,n=this.fallingShapeOf(this._playerCell)?.scale??1;this._face.setPosition(t.x+this._look.x*n,t.y+this._look.y*n).setScale(n),Fs(n)&&this._face.setDepth(Ns)}updateFace(){this._now>=this._nextBlinkAt&&(this._blinkUntil=this._now+Sc,this._nextBlinkAt=this._now+e.Math.Between(Cc.min,Cc.max)),this._now<this._bonkFaceUntil?this._face.setFrame(z.bonk):this._mood===`normal`?this._now<this._slideFaceUntil?this._face.setFrame(z.happy):this._face.setFrame(this._now<this._blinkUntil?z.blink:z.normal):this._face.setFrame(z[this._mood])}showConnectionsDuringStep(e,t){let n=Pc(e.pieces.filter(e=>O(e)&&T(e))),r=t.pieces.filter(t=>O(t)&&(T(t)||T(e.pieces[t.id])));for(let[e,t]of Pc(r))this.cell(e).sprite.setFrame(F(t&(n.get(e)??t)))}showConnections(e){for(let[t,n]of Pc(e))this.cell(t).sprite.setFrame(F(n))}groupIn(e){return e.pieces.filter(e=>O(e)&&T(e)&&e.fused).map(e=>this.cell(e.id))}reappear(e){let t=e===this._playerCell?[e.sprite,this._face]:[e.sprite];this._scene.tweens.killTweensOf(e),this._scene.tweens.killTweensOf(t);let n=this.fallingShapeOf(e);n!==void 0&&(this._scene.tweens.killTweensOf(n),this._falling=this._falling.filter(e=>e!==n)),t.forEach(e=>e.setVisible(!0).setAlpha(1)),e.sprite.setDepth(bc),e===this._playerCell&&this._face.setDepth(xc)}hide(e){this._falling=this._falling.filter(t=>t!==e),e.cells.forEach(e=>e.sprite.setVisible(!1)),e.cells.includes(this._playerCell)&&this._face.setVisible(!1)}fallingShapeOf(e){return this._falling.find(({cells:t})=>t.includes(e))}cell(e){return this._cells.get(e)}};function Pc(e){let t=e=>{let t=Ki(e);return e.map((e,n)=>[e.id,t[n]])};return new Map([...t(e.filter(e=>!jc(e))),...t(e.filter(jc))])}function Fc(e,t,n=1){if(e.length===0)return;let r=Math.min(...e.map(e=>e.x))-8,i=Math.max(...e.map(e=>e.x))+8,a=Math.min(...e.map(e=>e.y))-8,o=Math.max(...e.map(e=>e.y))+8,s=ms({x:(r+i)/2,y:(a+o)/2},{x:i-r,y:o-a},t,n);for(let t of e){let{x:e,y:n}=s.place(t);t.sprite.setPosition(e,n),t.sprite.setScale(s.scaleX,s.scaleY)}}var Ic=1,Lc=(e,t)=>e.startsOn===t?Qa.off:Qa.on,Rc=class{_scene;_board;_blocks;_switches;_switched;_pendingChange;constructor(e,{board:t,layers:{spikeBlocks:n,switches:r},initial:i}){this._scene=e,this._board=t,this._switched=ht(this._board,i.pieces),this._blocks=n.map(t=>({cell:t,sprite:e.add.sprite(K(t.x),K(t.y),L.spikeBlock,Lc(t,this._switched)).setDepth(Ic)})),this._switches=r.map(t=>({index:this._board.indexOf(t.x,t.y),sprite:e.add.sprite(K(t.x),K(t.y),L.switch,$a.up).setDepth(Ic)})),this.showSwitches(i)}show(e){let t=this.showSwitches(e),n=ht(this._board,e.pieces);return n!==this._switched&&(this._switched=n,this.changeBlocks()),t}showSwitches(e){let t=mt(this._board,e.pieces);return tc(this._switches,e=>t.has(e),$a)}changeBlocks(){this._pendingChange?.remove(),this._blocks.forEach(({sprite:e})=>e.setFrame(Qa.between)),this._pendingChange=this._scene.time.delayedCall(70,()=>{this._blocks.forEach(({cell:e,sprite:t})=>t.setFrame(Lc(e,this._switched)))})}},zc=-1,Bc=class{_scene;_texture;_width;_layer;_tiles=new Map;constructor(e,{texture:t,frames:n,width:r}){this._scene=e,this._texture=t,this._width=r,this._layer=e.add.layer(),n.forEach((e,t)=>this.setTile(e,t%r,Math.floor(t/r)))}setTile(t,n,r){let i=r*this._width+n,a=this._tiles.get(i);if(t===zc)a?.setVisible(!1);else if(a===void 0){let a=new e.GameObjects.Image(this._scene,n*16,r*16,this._texture,t).setOrigin(0);this._layer.add(a),this._tiles.set(i,a)}else a.setFrame(t).setVisible(!0)}},Vc=(e,t)=>new Bc(e,t),Hc=1,Uc=1,Wc=class{_board;_gapTiles;_gapFrames;constructor(e,{board:t,layers:n,theme:r}){this._board=t,this._gapFrames=n.gaps;let i=t=>Gc(e,t,r),a=(n,r)=>Vc(e,{texture:n,frames:r,width:t.width});a(i(L.floorLight),n.floorLight),a(i(L.floorDark),n.floorDark),a(L.ice,n.ice),this._gapTiles=a(i(L.gaps),n.gaps),a(i(L.walls),n.walls),n.inkSplats.forEach(({x:t,y:n,color:r},i)=>{e.add.image(K(t),K(n),ao[r],oo(i)).setDepth(Uc)});let{spin:o}=Za,s=n.slicers.map(({x:t,y:n})=>e.add.sprite(K(t),K(n),L.slicer,o[0]).setDepth(Hc));if(s.length>0){let t=0;e.time.addEvent({delay:200,loop:!0,callback:()=>{t=(t+1)%o.length,s.forEach(e=>e.setFrame(o[t]))}})}}showGaps({gemsActivated:e,brokenFloors:t}){let n=ps(this._board,e,t);n.forEach((e,t)=>{if(e!==this._gapFrames[t]){let{x:n,y:r}=this._board.pointAt(t);this._gapTiles.setTile(e,n,r)}}),this._gapFrames=n}};function Gc(e,t,n){if(n===void 0)return t;let r=xa(t,n);return e.textures.exists(r)?r:(console.warn(`There is no "${t}" sheet for theme "${n}", so this uses the original art.`),t)}var Kc=class{_scene;_sounds;_views=new Map;_sky;_terrain;_crackedFloors;_slimes;_spikeBlocks;_gems;_gemLocks;_effects;_shown;constructor(e,{level:t,world:n,theme:r,initial:i,sounds:a}){this._scene=e,this._sounds=a;let o=new ot(t),s={board:o,layers:fs(o)};this._sky=new yc(e),this._terrain=new Wc(e,{...s,theme:r}),this._crackedFloors=new zs(e,s),this._gems=new ac(e,{...s,initial:i}),this._spikeBlocks=new Rc(e,{...s,initial:i}),this._effects=new Hs(e,n),this._shown=i;let c=[];for(let t of i.pieces)if(t.kind===`box`)this._views.set(t.id,this.boxView(t));else if(t.kind===`cake`){let r=new Rs(e,{piece:t,texture:R(L.cake,n),frames:[0]});this._views.set(t.id,r),t.locked&&c.push(r.addOnTop(L.gemLock,to.closed))}this._gemLocks=new Us(e,{locks:c,activated:i.gemsActivated}),this._slimes=new Nc(e,i),this._slimes.setSad(dt(i))}update(e){this._sky.update(e),this._slimes.update(e)}show(e,t,n){let r=this._shown;this._shown=e,this._slimes.setSad(dt(e)),n===`undo`&&(this.restoreCutBoxes(r,e),this._terrain.showGaps(e),this._crackedFloors.show(e));let i=this.animateMovement(r,e,n);t.some(e=>e.type===`won`)&&this.celebrate(e),this._scene.time.delayedCall(i.duration,()=>{this.playConsequences(e,t),this._slimes.settle(e),this._terrain.showGaps(e),this._crackedFloors.show(e)&&this._sounds.play(`floorBreak`);let n=this._gems.show(e);this._gemLocks.show(e.gemsActivated);let i=this._spikeBlocks.show(e),a=e.gemsActivated&&!r.gemsActivated;a&&this._sounds.play(`gemOpen`),(i.pressed||n.pressed&&!a)&&this._sounds.play(`switchPress`),(i.released||n.released)&&this._sounds.play(`switchUnpress`)});let a=this.consequenceDuration(t);return i.boxesMoved&&n!==`slide`&&this._sounds.play(`push`),i.duration+a}bonk(e,t){let n=this._slimes.bonk(e);return n&&(this._sounds.play(`bonk`),t.forEach(t=>this._views.get(t)?.squish(e))),n}boxView(e){return new Rs(this._scene,{piece:e,texture:L.boxes,frames:Ki(e.shape).map(F)})}restoreCutBoxes(e,t){for(let n=t.pieces.length;n<e.pieces.length;n++)this._views.get(n)?.destroy(),this._views.delete(n);for(let n of t.pieces){let t=e.pieces[n.id];n.kind===`box`&&n.shape!==t.shape&&(this._views.get(n.id)?.destroy(),this._views.set(n.id,this.boxView({...n,x:t.x,y:t.y})))}}showCut(e,t,n){this._views.get(t)?.fadeOutAndDestroy(),this._views.set(t,this.boxView(e.pieces[t]));for(let t of e.pieces)t.kind===`box`&&!this._views.has(t.id)&&this._views.set(t.id,this.boxView(t));n.forEach(e=>this._effects.shatter(K(e.x),K(e.y)))}animateMovement(e,t,n){let r=oc(n),i=this._slimes.step(e,t,n),a=!1;for(let[n,o]of this._views){let s=e.pieces[n],c=t.pieces[n],l=s.x!==c.x||s.y!==c.y;T(c)&&!T(s)&&(o.reappear(s),i=!0),l&&(T(c)||T(s))&&(o.slideTo(c,r),i=!0,a||=c.kind===`box`)}return a||=t.pieces.some(t=>O(t)&&!e.pieces[t.id].fused&&(t.x!==e.pieces[t.id].x||t.y!==e.pieces[t.id].y)),{duration:i?r:0,boxesMoved:a}}celebrate(e){this._slimes.celebrate();let t=E(e.pieces);for(let n of e.pieces)n.kind===`cake`&&T(n)&&n.x===t.x&&n.y===t.y&&this._views.get(n.id)?.fadeOut()}playConsequences(e,t){let n=[];for(let r of t){if(r.type===`won`){let t=E(e.pieces);this._effects.confetti(K(t.x),K(t.y));continue}let t=e.pieces[r.id],i=this._views.get(r.id);switch(r.type){case`fused`:case`inked`:this._slimes.flash(r.id);break;case`killed`:i===void 0?this._slimes.kill(r.id):i.fadeOut(),O(t)&&t.color===`purple`?this._effects.purpleSquash(K(t.x),K(t.y)):t.kind===`box`?t.shape.forEach(e=>this._effects.shatter(K(t.x+e.x),K(t.y+e.y))):t.kind===`cake`?this._effects.crumble(K(t.x),K(t.y)):t.shape.forEach(e=>this._effects.squash(K(t.x+e.x),K(t.y+e.y)));break;case`cut`:this.showCut(e,r.id,r.cells);break;case`fell`:i===void 0?n.push(t):i.fallAway()}}this._slimes.fall(n);let r=e=>t.some(t=>t.type===e);r(`won`)&&this._sounds.play(`win`),(r(`fused`)||r(`inked`))&&this._sounds.play(`fuse`);let i=t.filter(e=>e.type===`killed`||e.type===`cut`);i.some(t=>e.pieces[t.id].kind===`box`)&&this._sounds.play(`boxDestroyed`),i.some(t=>e.pieces[t.id].kind!==`box`)&&this._sounds.playSquash(),r(`fell`)&&this._sounds.play(`fall`)}consequenceDuration(e){return e.some(e=>e.type===`fell`)?500:e.some(e=>e.type===`killed`||e.type===`cut`)?150:0}},qc=`hint-play-corner`,Jc=[{right:!0,bottom:!0,angle:0},{right:!1,bottom:!0,angle:90},{right:!1,bottom:!1,angle:180},{right:!0,bottom:!1,angle:270}],Yc=60,Xc=class{_scene;_corners;constructor(t){this._scene=t,this._corners=Jc.map(({angle:e})=>t.add.image(0,0,L.ui,qc).setScale(2).setAngle(e).setDepth(Yc).setVisible(!1));let n=()=>this.place();n(),t.scale.on(e.Scale.Events.RESIZE,n),t.events.once(e.Scenes.Events.SHUTDOWN,()=>t.scale.off(e.Scale.Events.RESIZE,n))}setVisible(e){this._corners.forEach(t=>t.setVisible(e))}place(){let e=Er(M(this._scene));this._corners.forEach((t,n)=>{let{right:r,bottom:i}=Jc[n],a=t.displayWidth/2;t.setPosition(r?320-a:a,i?e-a:a)})}},Zc=13,Qc=11,$c=5,el=9,tl=9,nl={left:2,right:2,top:2,bottom:3},rl={left:4,right:4,top:4,bottom:5},il=3,al=1,ol=50,sl=180,cl=100,ll=400,ul=`#7b4a84`,Y=(e,t,n=0,r=0)=>e.add.image(n,r,L.hints,t).setOrigin(0),X={dpad:e=>({width:Zc,height:Zc,objects:[Y(e,V.dpad)]}),arrowKeys:e=>({width:35,height:23,objects:[Y(e,V.up,12,0),Y(e,V.left,0,12),Y(e,V.down,12,12),Y(e,V.right,24,12)]}),key:(e,t)=>({width:Qc,height:Qc,objects:[Y(e,V[t])]}),slash:e=>({width:$c,height:el,objects:[Y(e,V.slash)]}),button:(e,t)=>{let n=e.add.image(0,0,L.atlas,bo(`${t}-button`,!1)).setOrigin(0);return{width:n.width,height:n.height,objects:[n]}},text:(e,t)=>{let n=e.add.text(0,0,t,{...Fr,color:ul}).setOrigin(0);return{...N(n),objects:[n]}},space:e=>({width:e,height:0,objects:[]})};function dl(e,t,n,r){return t.present?[n,X.slash(e),r()]:[n]}var fl=class{_scene;_root;_bobber;_body;_tail;_width;_height;_shown=!1;constructor(e,{parts:t,withTail:n=!1}){this._scene=e;let r=Math.max(...t.map(e=>e.height));this._width=rl.left+t.reduce((e,t)=>e+t.width,0)+il*(t.length-1)+rl.right,this._height=rl.top+r+rl.bottom;let i=e.add.nineslice(0,0,L.hints,V.bubble,this._width,this._height,nl.left,nl.right,nl.top,nl.bottom).setOrigin(0);this._body=e.add.container(0,0,[i]);let a=rl.left;for(let e of t){let t=rl.top+Math.floor((r-e.height)/2);e.objects.forEach(e=>e.setPosition(e.x+a,e.y+t)),this._body.add([...e.objects]),a+=e.width+il}this._bobber=e.add.container(0,0,[this._body]),n&&(this._tail=e.add.image(-4,-5,L.hints,V.tail).setOrigin(0),this._bobber.add(this._tail)),this._root=e.add.container(0,0,[this._bobber]).setDepth(ol).setVisible(!1),e.time.addEvent({delay:ll,loop:!0,callback:()=>this._bobber.setY(this._bobber.y===0?-1:0)})}get shown(){return this._shown}show(e){this._shown=!0,this._scene.tweens.killTweensOf(this._root),this.place(e),this._root.setVisible(!0).setScale(0),this._scene.tweens.add({targets:this._root,scale:1,duration:sl,ease:`Back.easeOut`})}hide(){this._shown&&(this._shown=!1,this._scene.tweens.killTweensOf(this._root),this._scene.tweens.add({targets:this._root,scale:0,duration:cl,ease:`Quad.easeIn`,onComplete:()=>this._root.setVisible(!1)}))}place(e){this._root.setPosition(e.x,e.y),this.fitOnBoard(e)}fitOnBoard(e){let t=-Math.floor(this._width/2),n=Math.min(Math.max(t,al-e.x),320-al-e.x-this._width);this._body.setX(n),this._tail===void 0?this._body.setY(0):(this._body.setY(-5-this._height+1),this._tail.setX(Math.min(Math.max(-4,n+1),n+this._width-1-tl)))}},pl=250,ml=8,hl=4,gl=31,_l=3,vl=12,yl=class{_scene;_keyboard;_bubble;_belowLevel;_pending;constructor(e,{level:t,keyboard:n}){this._scene=e,this._keyboard=n,this._belowLevel=(bl(t)+1)*16+ml}showAfter(e){this._pending===void 0&&this._bubble?.shown!==!0&&(this._pending=this._scene.time.delayedCall(e+pl,()=>{this._pending=void 0,this._bubble??=this.createBubble(),this._bubble.show({x:160,y:this.top()})}))}hide(){this._pending?.remove(),this._pending=void 0,this._bubble?.hide()}createBubble(){let e=this._scene;return new fl(e,{parts:[...dl(e,this._keyboard,X.button(e,`undo`),()=>X.key(e,`z`)),X.space(_l),X.text(e,`Undo`),X.space(vl),...dl(e,this._keyboard,X.button(e,`reset`),()=>X.key(e,`r`)),X.space(_l),X.text(e,`Restart`)]})}top(){let e=M(this._scene);return Math.min(this._belowLevel,Er(e)-hl-gl)}};function bl(e){let t=new ot(e),n=0;return e.tiles.forEach((e,r)=>{e!==`solid`&&(n=Math.max(n,t.pointAt(r).y))}),n}var xl=8,Sl=320/xl,Cl=100,wl=class{_scene;_bars=[];constructor(e,t){this._scene=e;for(let n=0;n<xl;n++){let r=e.add.rectangle(t?0:-320,n*Sl,320,Sl,0);r.setOrigin(0,0).setDepth(Cl),this._bars.push(r)}}cover(){return this._bars.forEach(e=>e.setX(-320)),this.slide(0,e=>e)}reveal(){return this._bars.forEach(e=>e.setX(0)),this.slide(320,e=>7-e)}slide(e,t){return new Promise(n=>{this._bars.forEach((r,i)=>{let a=t(i)===7;this._scene.tweens.add({targets:r,x:e,duration:600,delay:t(i)*35,ease:`Cubic.easeInOut`,onComplete:a?()=>n():void 0})})})}},Tl=300,El=class{_scene;_initial;_progress;_hints;_keyboard;_bubble;_pending;constructor(t,{initial:n,progress:r,hints:i,keyboard:a}){this._scene=t,this._initial=n,this._progress=r,this._hints=i,this._keyboard=a,t.events.once(e.Scenes.Events.SHUTDOWN,()=>i.set(void 0))}start(){this._progress.has(`move`)||(this._pending=this._scene.time.delayedCall(Tl,()=>{this._pending=void 0;let e=this._scene,t=dl(e,this._keyboard,X.dpad(e),()=>X.arrowKeys(e));this._bubble=new fl(e,{parts:t,withTail:!0}),this._bubble.show(Dl(this._initial)),this._hints.set(`dpad`)}))}onDirection(){this._progress.learn(`move`),this._pending?.remove(),this._pending=void 0,this._bubble?.hide(),this._hints.set(void 0)}};function Dl(e){let t=E(e.pieces),n=e.pieces.filter(D);if(t===void 0||n.length===0)return{x:0,y:0};let r=Math.min(...n.map(e=>e.y));return{x:K(n.filter(e=>e.y===r).reduce((e,n)=>Math.abs(n.x-t.x)<Math.abs(e.x-t.x)?n:e).x),y:r*16}}var Ol=450,kl=600,Al=class extends e.Scene{_services;_puzzle;_board;_wipe;_hint;_retry;_loss;_debugging;_hintMoves=[];_hintFrame;_hintPlayer;_replay;_tryMs=0;_phase=`entering`;_busyUntil=0;_nextBonkAt=0;_slide=[];constructor(){super(`Game`)}create(e={}){this.sys.settings.data={},this._services=j(this);let{session:t,sounds:n,controls:r,keyboard:i,playtest:a,hints:o,progress:s,panelLayout:c,analytics:l,levelProgress:u}=this._services,d=e.replay===!0&&a===void 0?u.record(t.level.id):void 0;this._replay=d===void 0?void 0:new Qo(d.solution),this._replay===void 0&&l.levelEntered({levelId:t.level.id,levelIndex:t.levelIndex}),Nr(this),this.cameras.main.setBackgroundColor(x);let f=mn(t.level.id);this._puzzle=new Ut(f),this._board=new Kc(this,{level:f,world:t.world,theme:t.level.theme,initial:this._puzzle.state,sounds:n}),o.set(void 0),this._hint=t.levelIndex===0&&a===void 0&&this._replay===void 0?new El(this,{initial:this._puzzle.state,progress:s,hints:o,keyboard:i}):void 0,this._retry=new yl(this,{level:f,keyboard:i}),this._loss=f.suggestUndo&&this._replay===void 0?new ss(f,this._puzzle):void 0,this._debugging=void 0;let p=a===void 0?yr(t,u):_r;this._hintMoves=p.hint?f.hint:[],this._hintFrame=new Xc(this),this._hintPlayer=void 0,c.set(br(p,this.offersHint)),this._phase=`entering`,this._busyUntil=0,this._nextBonkAt=0,this._slide=[],this._tryMs=0,r.takeRequest(`reset`),r.takeRequest(`hint`),r.takeRequest(`levels`),this._replay===void 0?e.playHint===!0&&this.offersHint&&this.startHint():(this._hintFrame.setVisible(!0),c.setPlayback(!0)),this._wipe=new wl(this,a===void 0),a===void 0?this._wipe.reveal().then(()=>{this._phase===`entering`&&(this._phase=`playing`,this._hint?.start(),(this._hintPlayer!==void 0||this._replay!==void 0)&&(this._busyUntil=this.time.now+kl))}):(this._phase=`playing`,a.stepsChanged(0),a.player?.rewind(),a.player?.active===!0&&(this._busyUntil=this.time.now+kl))}update(e,t){if(this._board.update(e),this._phase!==`playing`)return;if(this._replay!==void 0){this.updateReplay(this._replay,e);return}let{session:n,controls:r,playtest:i,analytics:a}=this._services;n.addPlayTime(t),a.addPlayTime(t),this._tryMs+=t;let o=r.takeRequest(`hint`);if(this._hintPlayer!==void 0)r.poll(),r.takeRequest(`reset`),o&&this._hintPlayer.stop();else if(o&&this.offersHint){this.offerHint();return}else if(r.takeRequest(`levels`)){this.offerLevelSelect();return}else if(r.takeRequest(`reset`)){a.restarted(),this.leave(`restart`);return}if((this._debugging?.playing===!0||i?.player?.active===!0)&&r.poll()!==void 0&&(this._debugging?.interrupt(),i?.player?.stop()),e<this._busyUntil)return;let s=this._slide.shift();if(s!==void 0){this.showFrame(s,`slide`,e);return}this._hintPlayer?.active===!1&&this.endHint();let c=this._hintPlayer===void 0?r.poll():void 0;if(c!==void 0){let t=this.perform(c,e);this.teach(c),t&&this.count(c);return}let l=this._debugging?.nextMove()??i?.player?.next()??this._hintPlayer?.next();l!==void 0&&(this.perform({type:`move`,direction:S[l]},e)?this._slide.length===0&&(this._busyUntil+=90):(this._debugging?.playbackBlocked(),i?.player?.stop(),this._hintPlayer?.stop()))}updateReplay(e,t){let{controls:n}=this._services;if([`hint`,`reset`,`levels`].filter(e=>n.takeRequest(e)).length>0||n.poll()!==void 0){this.leave(`select`);return}if(t<this._busyUntil)return;let r=this._slide.shift();if(r!==void 0){this.showFrame(r,`slide`,t);return}let i=e.next();i===void 0||!this.perform({type:`move`,direction:S[i]},t)?this.leave(`select`,90):this._slide.length===0&&(this._busyUntil+=90)}async offerLevelSelect(){await ls(this._services.popups,this._puzzle.stepCount>0)&&this._phase===`playing`&&this.leave(`select`)}get offersHint(){return this._hintMoves.length>0}async offerHint(){let{session:e,popups:t,controls:n,analytics:r}=this._services;try{let n=await us(t,e,r,this._puzzle.stepCount>0);if(n===`no`||this._phase!==`playing`)return;n===`afterRestart`?this.leave(`restart`,0,{playHint:!0}):this.startHint()}finally{n.takeRequest(`hint`)}}startHint(){this._retry.hide(),this._hintPlayer=new Qo(this._hintMoves),this._hintFrame.setVisible(!0),this._services.panelLayout.setPlayback(!0),this._services.analytics.hintPlayed(),this._busyUntil=Math.max(this._busyUntil,this.time.now+90)}endHint(){this._hintPlayer=void 0,this._hintFrame.setVisible(!1),this._services.panelLayout.setPlayback(!1)}restartForPlayback(){this._phase!==`leaving`&&this.leave(`restart`)}skip(e){this._phase!==`leaving`&&this._replay===void 0&&this.leave(this.recordWin(e))}perform(e,t){if(e.type===`undo`){let e=this._puzzle.undo();return e!==void 0&&(this._retry.hide(),this._loss?.undone(),this._busyUntil=t+this._board.show(e,[],`undo`),this._services.playtest?.stepsChanged(this._puzzle.stepCount),!0)}let n=this._puzzle.move(e.direction);if(n===void 0)return t>=this._nextBonkAt&&this._board.bonk(e.direction,this._puzzle.cakesInFront(e.direction))&&(this._nextBonkAt=t+Ol),!1;this._replay===void 0&&this._services.session.countMove(),this._services.playtest?.stepsChanged(this._puzzle.stepCount);let[r,...i]=n.frames;return this._slide=i,this.showFrame(r,`step`,t),!0}teach(e){e.type===`move`&&this._hint?.onDirection()}count(e){let{analytics:t}=this._services;e.type===`undo`?t.undone():t.moved(ft(this._puzzle.state))}showFrame(e,t,n){let r=this._board.show(e.state,e.events,t);if(this._busyUntil=n+(this._slide.length>0?oc(t):r),(this._slide.length===0&&this._loss?.moved()===!0||ft(e.state))&&this._retry.showAfter(r),e.state.won){if(this._replay!==void 0){this.leave(`select`,r+kl);return}this._services.analytics.levelWon(),this._debugging?.won(this._puzzle.path),this.leave(this.recordWin(this._puzzle.path),r)}}recordWin(e){let{session:t,levelProgress:n,playtest:r}=this._services;if(r!==void 0)return`next`;let i=n.isCompleted(t.level.id);n.complete(t.level.id,e,this._tryMs);let a=t.levelIndex+1;return a>=t.levelCount?i?`selectNext`:`next`:i||n.isCompleted(t.levelAt(a).id)?`selectNext`:`next`}async leave(e,t=0,n){this._phase=`leaving`,await Yo(this,t);let{playtest:r}=this._services;if(r!==void 0){e===`next`?r.finished(this._puzzle.path):this.scene.restart();return}if(await this._wipe.cover(),e===`restart`){this.scene.restart(n);return}let{session:i}=this._services;e===`select`||e===`selectNext`?(e===`selectNext`&&i.selectLevel(i.levelIndex+1),this.scene.start(`LevelSelect`)):(i.advance(),this.scene.start(i.isFinished?`End`:`LevelIntro`))}};async function jl(e,t){let n=await t.show({title:`Help improve the game?`,body:`May we collect anonymous data about how you play please :3?

It saves a random ID on this device, and nothing about you.`,buttons:[{id:`yes`,label:`Sure :3`,color:`green`},{id:`no`,label:`No >:(`,color:`red`}],centerOn:`board`});e.setConsent(n===`yes`)}var Ml=class extends e.Scene{constructor(){super(`LevelIntro`)}create(){let{session:t,analytics:n,popups:r,panelLayout:i,levelProgress:a}=j(this);i.set(br(yr(t,a),mn(t.level.id).hint.length>0)),n.needsConsent&&t.levelIndex>0&&jl(n,r),Nr(this),this.cameras.main.setBackgroundColor(0);let o=this.add.text(160,160,`Level ${t.levelIndex+1}\n\n${t.level.title}`,Fr);o.setOrigin(.5).setAlpha(0),this.tweens.add({targets:o,alpha:1,duration:150});let s=!1,c=()=>{s||(s=!0,this.tweens.add({targets:o,alpha:0,duration:150,onComplete:()=>this.scene.start(`Game`)}))};this.time.delayedCall(nt,c),this.input.keyboard?.once(e.Input.Keyboard.Events.ANY_KEY_DOWN,c),this.input.on(e.Input.Events.POINTER_DOWN,e=>{kr(this,e)&&c()})}},Z=156,Nl=320-Z-6,Pl=76,Q={header:{height:30,artScale:1,cakeScale:1.25,gap:4,fontSize:14},grid:{columns:5,gap:{x:6,y:6},margin:{top:8,bottom:8},panel:{width:56,height:56,artScale:1,number:{x:4,y:2,fontSize:12},icon:{x:28,y:27},iconScale:2,checkmark:{x:53,y:3},checkmarkScale:1},selectedOutset:2,fadeHeight:24},info:{height:160,artScale:1,preview:{x:6,y:6,width:144,height:144},previewOutline:1,previewMargin:8,previewMaxZoom:1,title:{x:Z,y:6,width:Nl,fontSize:14,minFontSize:9},icon:{x:Z+Nl/2,y:37,scale:1.5},moves:{x:Z,y:54,width:Nl,height:24,iconX:6,iconScale:2,fontSize:14},time:{x:Z,y:82,width:Nl,height:24,iconX:6,iconScale:2,fontSize:14},statArtScale:1,play:{x:Z,y:112,width:Pl,height:28},replay:{x:Z+Nl-Pl,y:112,width:Pl,height:28},unlock:{x:Z,y:112,width:Nl,height:28}},dragThreshold:6,wheelFactor:.5,flickFriction:.92},Fl=(e,t=Q)=>e-t.info.height,Il=(e,t=Q)=>Fl(e,t)-t.header.height;function Ll(e,t=Q){let{columns:n,gap:r,margin:i,panel:a}=t.grid,o=n*a.width+(n-1)*r.x,s=Math.floor((320-o)/2),c=e%n,l=Math.floor(e/n);return{x:s+c*(a.width+r.x),y:i.top+l*(a.height+r.y),width:a.width,height:a.height}}function Rl(e,t=Q){let{columns:n,gap:r,margin:i,panel:a}=t.grid,o=Math.ceil(e/n);return i.top+o*a.height+Math.max(0,o-1)*r.y+i.bottom}var zl=(e,t,n=Q)=>Math.max(0,Rl(e,n)-t),Bl=(e,t,n,r=Q)=>Math.max(0,Math.min(zl(t,n,r),e));function Vl(e,t,n,r=Q){let i=Ll(e,r);return Math.round(Bl(i.y+i.height/2-n/2,t,n,r))}function Hl(e,t,n=Q){let{columns:r}=n.grid,i=Ll(0,n),a=i.width+n.grid.gap.x,o=i.height+n.grid.gap.y,s=Math.floor((e.x-i.x)/a),c=Math.floor((e.y-i.y)/o);if(s<0||s>=r||c<0)return;let l=c*r+s,u=Ll(l,n);return e.x>=u.x&&e.x<u.x+u.width&&e.y>=u.y&&e.y<u.y+u.height&&l<t?l:void 0}function Ul(e,t=Q){let{preview:n,previewMargin:r,previewMaxZoom:i}=t.info,a=Wl(e),o=a.x*16-r,s=a.y*16-r,c=a.width*16+2*r,l=a.height*16+2*r,u=Math.min(i,n.width/c,n.height/l),d=(e,t,n,r)=>{let i=e+t/2-n/2;return n>=r?(r-n)/2:Math.max(0,Math.min(r-n,i))};return{topLeft:{x:d(o,c,n.width/u,e.width*16),y:d(s,l,n.height/u,e.height*16)},zoom:u}}function Wl({width:e,height:t,tiles:n}){let r=e,i=t,a=-1,o=-1;return n.forEach((t,n)=>{if(t!==`solid`){let t=n%e,s=Math.floor(n/e);r=Math.min(r,t),i=Math.min(i,s),a=Math.max(a,t),o=Math.max(o,s)}}),a<0?{x:0,y:0,width:e,height:t}:{x:r,y:i,width:a-r+1,height:o-i+1}}var Gl=.5,Kl=class extends e.Scene{_board;constructor(){super(`LevelPreview`)}create({levelIndex:e,locked:t,withLock:n}){let{session:r,sounds:i}=j(this),a=r.levelAt(e),o=mn(a.id);this._board=new Kc(this,{level:o,world:P[a.world],theme:a.theme,initial:new Ut(o).state,sounds:i});let{preview:s}=Q.info,c=e=>({...s,y:Fl(e)+s.y});jr(this,this.cameras.main.setBackgroundColor(x),c,Ul(o)),t&&this.addShade(c,n)}update(e){this._board?.update(e)}addShade(e,t){let n=this.cameras.add();n.ignore(this.children.list);let{width:r,height:i}=Q.info.preview,a=[this.add.rectangle(0,0,r,i,0,Gl).setOrigin(0)];t&&a.push(this.add.image(r/2,i/2,W.lock.texture,W.lock.frame).setScale(Q.grid.panel.iconScale)),this.cameras.main.ignore(a),jr(this,n,e)}},ql=class extends e.GameObjects.Container{_slime;_face;_cake;_greyCake;_lock;constructor(e,t){super(e);let n=(n,r)=>e.add.image(0,0,n,r).setScale(t);this._slime=n(L.slime,F(0)),this._face=n(L.faces,z.normal),this._cake=n(R(L.cake,P[0]),0),this._greyCake=this._cake.enableFilters().filters.internal.addColorMatrix(),this._greyCake.colorMatrix.grayscale(),this._lock=n(W.lock.texture,W.lock.frame),this.add([this._slime,this._face,this._cake,this._lock]),e.add.existing(this)}show(e,t){let n=e===`completed`||e===`superCompleted`;return this._slime.setVisible(e===`current`),this._face.setVisible(e===`current`),this._cake.setVisible(n||e===`uncompleted`).setTexture(R(L.cake,t),0),this._greyCake.active=e===`uncompleted`,this._lock.setVisible(e===`locked`),this}},Jl=1600,Yl=.75,Xl=class extends e.GameObjects.Container{_number;_icon;_checkmark;_rainbow=!1;constructor(t,n){super(t);let{icon:r,checkmark:i,number:a}=n,o=U(t,H,H.frame,n,n.artScale);this._icon=new ql(t,n.iconScale).setPosition(r.x,r.y),this._checkmark=t.add.image(i.x,i.y,L.ui,Co.green).setOrigin(1,0).setScale(n.checkmarkScale),this._number=t.add.text(a.x,a.y,``,{...ko,fontSize:`${a.fontSize}px`}),this.add([o,this._icon,this._checkmark,this._number]),this.setSize(n.width,n.height);let s=e=>this.paintRainbow(e);t.events.on(e.Scenes.Events.UPDATE,s),this.once(e.GameObjects.Events.DESTROY,()=>t.events.off(e.Scenes.Events.UPDATE,s)),t.add.existing(this)}show(e,t,n){return this._icon.show(e,t),this._checkmark.setVisible(e===`completed`||e===`superCompleted`).setFrame(e===`superCompleted`?Co.white:Co.green).clearTint(),this._rainbow=e===`superCompleted`,this.paintRainbow(this.scene.time.now),this._number.setText(String(n)),this}paintRainbow(t){if(this._rainbow){let n=t%Jl/Jl;this._checkmark.setTint(e.Display.Color.HSVToRGB(n,Yl,1).color)}}},Zl=class extends e.GameObjects.Container{_background;_value;_valueLeft;constructor(e,{layout:t,icon:n,artScale:r}){super(e,t.x,t.y),this._background=U(e,vo,vo.frame,t,r);let i=e.add.image(t.iconX,Math.round(t.height/2),n.texture,n.frame).setOrigin(0,.5).setScale(t.iconScale);this._valueLeft=t.iconX+Math.ceil(i.displayWidth),this._value=e.add.text(0,0,``,{...ko,fontSize:`${t.fontSize}px`}),this.add([this._background,i,this._value]),this.setSize(t.width,t.height),e.add.existing(this)}setValue(e){this._value.setText(e);let{width:t,height:n}=N(this._value);return this._value.setPosition(Math.round(this._valueLeft+(this.width-this._valueLeft-t)/2),Math.round((this.height-n)/2)),this}setGold(e){return e?this._background.setTint(wo):this._background.clearTint(),this}},Ql=(e,t)=>({left:e.left*t,right:e.right*t,top:e.top*t,bottom:e.bottom*t}),$l=(e,t)=>Math.ceil(e/t)*t;function eu(e,t){let{border:n,padding:r,grid:i}=t,a=nu(e,t.gap);return{width:$l(Math.max(t.minWidth??0,n.left+r.x+a.width+r.x+n.right),i),height:$l(Math.max(t.minHeight??0,n.top+r.y+a.height+r.y+n.bottom),i)}}function tu(e,t,n=eu(e,t)){let{border:r,padding:i}=t,a=nu(e,t.gap),o=r.left+i.x,s=o+ru(n.width-o-r.right-i.x-a.width,t.align),c=r.top+(n.height-r.top-r.bottom)/2,l=e=>Math.floor(c-e/2),{label:u,icon:d}=e,f=t.iconSide===`left`,p=u!==void 0&&d!==void 0?t.gap:0;return{size:n,label:u===void 0?void 0:{x:f?s+(d?.width??0)+p:s,y:l(u.height)},icon:d===void 0?void 0:{x:f?s:s+(u?.width??0)+p,y:l(d.height)}}}function nu({label:e,icon:t},n){let r=[e,t].filter(e=>e!==void 0);return{width:r.reduce((e,t)=>e+t.width,0)+n*Math.max(0,r.length-1),height:Math.max(0,...r.map(e=>e.height))}}function ru(e,t){switch(t){case`left`:return 0;case`right`:return Math.max(0,e);case`center`:return Math.max(0,Math.floor(e/2))}}function iu(e){return e.maxWidth-e.border.left-e.border.right-e.padding*2}function au(e,t){let{border:n,padding:r,gap:i,buttonGap:a,grid:o}=t,s=t.equalButtons?su(e.buttons):e.buttons,c=cu(s.map(e=>e.width),iu(t),a),l=e=>e.reduce((e,t)=>e+s[t].width,0)+a*(e.length-1),u=e=>Math.max(...e.map(e=>s[e].height)),d=su(e.toggles??[]),f=[e.title,e.body,...d].filter(e=>e!==void 0),p=Math.max(...f.map(e=>e.width),...c.map(l)),m=$l(Math.max(t.minWidth,n.left+r+p+r+n.right),o),h=e=>Math.floor((m-e)/2),g=n.top+r,_=e=>{let t=g;return g+=e+i,t},v=e.title===void 0?void 0:{x:h(e.title.width),y:_(e.title.height)},ee=e.body===void 0?void 0:{x:h(e.body.width),y:_(e.body.height)},te=d.map((e,t)=>{let n=t===0?g:g-i+a;return g=n+e.height+i,{...e,x:h(e.width),y:n}}),ne=[];for(let e of c){let t=h(l(e)),n=u(e);for(let r of e){let e=s[r];ne[r]={...e,x:t,y:g+Math.floor((n-e.height)/2)},t+=e.width+a}g+=n+a}return g-=c.length>0?a:f.length>0?i:0,{size:{width:m,height:$l(g+r+n.bottom,o)},title:v,body:ee,toggles:te,buttons:ne}}function ou(e){return{width:Math.max(0,...e.map(e=>e.width)),height:Math.max(0,...e.map(e=>e.height))}}function su(e){let t=ou(e);return e.map(()=>t)}function cu(e,t,n){let r=[],i=[],a=0;return e.forEach((e,o)=>{let s=i.length===0?e:a+n+e;i.length>0&&s>t?(r.push(i),i=[],a=e):a=s,i.push(o)}),i.length>0&&r.push(i),r}var lu={x:8,y:4},uu=6,du=class extends e.GameObjects.Container{_background;_label;_icon;_hitZone;_content;_options;_color;_size;_origin={x:.5,y:.5};constructor(e,t,n,r){if(super(e,t,n),this._color=r.color??`green`,r.icon!==void 0){let t=typeof r.icon==`string`?W[r.icon]:r.icon;this._icon=e.add.image(0,0,t.texture,t.frame).setOrigin(0).setScale(2)}r.label!==void 0&&(this._label=e.add.text(0,0,r.label,Oo).setOrigin(0)),this._content={label:this._label===void 0?void 0:N(this._label),icon:this._icon===void 0?void 0:{width:this._icon.displayWidth,height:this._icon.displayHeight}},this._options={border:Ql(yo.border,2),padding:lu,gap:uu,iconSide:r.iconSide??`left`,align:r.align??`center`,grid:2,minWidth:r.width,minHeight:r.height},this._size=eu(this._content,this._options),this._background=U(e,yo,xo(this._color,!1),this._size),this._hitZone=e.add.zone(0,0,this._size.width,this._size.height).setOrigin(0).setInteractive({useHandCursor:!0}),_o(this._hitZone,e=>this.showPressed(e),()=>r.onClick?.()),this.add([this._background,...[this._icon,this._label].filter(e=>e!==void 0),this._hitZone]),this.relayout(),e.add.existing(this)}get naturalSize(){return eu(this._content,this._options)}setButtonSize(e,t){return this._size=eu(this._content,{...this._options,minWidth:e,minHeight:t}),this.relayout(),this}setOrigin(e,t=e){return this._origin={x:e,y:t},this.relayout(),this}setEnabled(e){this._hitZone.input!==null&&(this._hitZone.input.enabled=e);for(let t of[this._background,this._icon,this._label])e?t?.clearTint():t?.setTint(To);return e||this.showPressed(!1),this}showPressed(e){this._background.setFrame(xo(this._color,e))}relayout(){let{width:e,height:t}=this._size,n=-Math.round(e*this._origin.x),r=-Math.round(t*this._origin.y),i=tu(this._content,this._options,this._size);this.setSize(e,t),this._background.setPosition(n,r).setSize(e/2,t/2),this._hitZone.setPosition(n,r).setSize(e,t),i.label!==void 0&&this._label?.setPosition(n+i.label.x,r+i.label.y),i.icon!==void 0&&this._icon?.setPosition(n+i.icon.x,r+i.icon.y)}},$=Q,fu=$.header.height,pu=`-`,mu=.01,hu=1e3/60,gu=class extends e.Scene{_services;_grid;_panels=[];_selectedFrame;_fade;_info;_title;_icon;_moves;_time;_play;_replay;_unlock;_selected=0;_scroll=0;_velocity=0;_press;constructor(){super(`LevelSelect`)}create(){this._services=j(this);let{session:t,panelLayout:n}=this._services;n.hide(),Mr(this),this.cameras.main.setBackgroundColor(x).fadeIn(150),this.createGrid(),this._fade=this.add.graphics(),this.createHeader(),this.createInfo(),this.bindScrolling();let r=()=>this.place();this.scale.on(e.Scale.Events.RESIZE,r),this.events.once(e.Scenes.Events.SHUTDOWN,()=>{this.scale.off(e.Scale.Events.RESIZE,r),this.scene.stop(`LevelPreview`)}),this._press=void 0,this._velocity=0,this.place(),this.select(t.levelIndex),this.setScroll(Vl(this._selected,t.levelCount,this.gridViewHeight))}update(e,t){this._press?.dragging!==!0&&this._velocity!==0&&(this.setScroll(this._scroll+this._velocity*t),this._velocity*=$.flickFriction**(t/hu),Math.abs(this._velocity)<mu&&(this._velocity=0))}get gridViewHeight(){return Il(M(this))}isOverGrid(e){return e>=fu&&e<fu+this.gridViewHeight}createGrid(){let{session:e}=this._services;this._grid=this.add.container(0,0),this._panels=Array.from({length:e.levelCount},(e,t)=>{let{x:n,y:r}=Ll(t);return new Xl(this,$.grid.panel).setPosition(n,r)});let t=$.grid.selectedOutset,{width:n,height:r,artScale:i}=$.grid.panel;this._selectedFrame=U(this,So,So.frame,{width:n+t*2,height:r+t*2},i),this._grid.add([...this._panels,this._selectedFrame]),this.refreshPanels()}refreshPanels(){this._panels.forEach((e,t)=>e.show(this.stateOf(t),this.worldOf(t),t+1))}stateOf(e){return this._services.levelProgress.stateOf(e)}worldOf(e){return P[this._services.session.levelAt(e).world]}setScroll(e){let t=Bl(e,this._services.session.levelCount,this.gridViewHeight);t!==e&&(this._velocity=0),this._scroll=t,this._grid.setY(fu-Math.round(t))}bindScrolling(){this.input.on(e.Input.Events.POINTER_DOWN,e=>{let{y:t}=Or(this,e);this.isOverGrid(t)&&(this._velocity=0,this._press={pointerId:e.id,startY:t,startScroll:this._scroll,lastY:t,lastTime:this.time.now,dragging:!1})}),this.input.on(e.Input.Events.POINTER_MOVE,e=>{let t=this._press;if(t?.pointerId!==e.id||!e.isDown)return;let{y:n}=Or(this,e);if(!t.dragging&&Math.abs(n-t.startY)>=$.dragThreshold&&(t.dragging=!0),t.dragging){let e=this.time.now;this._velocity=(t.lastY-n)/Math.max(1,e-t.lastTime),t.lastY=n,t.lastTime=e,this.setScroll(t.startScroll-(n-t.startY))}});let t=e=>{let t=this._press;if(t?.pointerId!==e.id)return;if(this._press=void 0,t.dragging){this.time.now-t.lastTime>hu*3&&(this._velocity=0);return}let{x:n,y:r}=Or(this,e),i=Hl({x:n,y:r-fu+this._scroll},this._services.session.levelCount);i!==void 0&&this.isOverGrid(r)&&this.select(i)};this.input.on(e.Input.Events.POINTER_UP,t),this.input.on(e.Input.Events.POINTER_UP_OUTSIDE,t),this.input.on(e.Input.Events.POINTER_WHEEL,(e,t,n,r)=>{this._velocity=0,this.setScroll(this._scroll+r*$.wheelFactor)})}drawFade(){let{fadeHeight:e}=$.grid,t=fu+this.gridViewHeight;this._fade.clear().fillGradientStyle(x,x,x,x,1,1,0,0).fillRect(0,fu,320,e).fillGradientStyle(x,x,x,x,0,0,1,1).fillRect(0,t-e,320,e)}createHeader(){let{header:e}=$,{session:t,levelProgress:n}=this._services,r=U(this,H,H.frame,{width:320,height:e.height},e.artScale);r.setInteractive();let i=this.add.image(0,0,R(L.cake,P[0]),0).setOrigin(0,.5).setScale(e.cakeScale),a=this.add.text(0,0,`${n.completedCount}/${t.levelCount}`,{...ko,fontSize:`${e.fontSize}px`}),{width:o,height:s}=N(a),c=(e.height-H.border.bottom*e.artScale)/2,l=Math.round((320-i.displayWidth-e.gap-o)/2);i.setPosition(l,Math.round(c)),a.setPosition(Math.round(l+i.displayWidth+e.gap),Math.round(c-s/2)),this.add.container(0,0,[r,i,a])}createInfo(){let{info:e}=$;this._info=this.add.container(0,0);let t=U(this,H,H.frame,{width:320,height:e.height},e.artScale);t.setInteractive();let{preview:n,previewOutline:r}=e,i=this.add.rectangle(n.x,n.y,n.width,n.height,x).setOrigin(0).setStrokeStyle(r*2,Eo);this._title=this.add.text(0,e.title.y,``,ko),this._icon=new ql(this,e.icon.scale).setPosition(e.icon.x,e.icon.y),this._moves=new Zl(this,{layout:e.moves,icon:W.moves,artScale:e.statArtScale}),this._time=new Zl(this,{layout:e.time,icon:W.clock,artScale:e.statArtScale});let a=(e,t,n,r,i)=>new du(this,e.x,e.y,{label:t,icon:i,color:n,width:e.width,height:e.height,onClick:r}).setOrigin(0);this._play=a(e.play,`Play`,`green`,()=>this.play()),this._replay=a(e.replay,`Replay`,`blue`,()=>this.replay()),this._unlock=a(e.unlock,`Unlock`,`yellow`,()=>void this.unlock(),`ad`),this._info.add([t,i,this._title,this._icon,this._moves,this._time,this._play,this._replay,this._unlock])}place(){this._info.setY(Fl(M(this))),this.drawFade(),this.setScroll(this._scroll)}select(e){let{session:t,levelProgress:n}=this._services;this._selected=Math.max(0,Math.min(e,t.levelCount-1));let r=$.grid.selectedOutset,i=Ll(this._selected);this._selectedFrame.setPosition(i.x-r,i.y-r);let a=t.levelAt(this._selected),o=this.stateOf(this._selected),s=o!==`locked`,c=n.canUnlock(this._selected),l=n.record(a.id);this.showTitle(a.title),this._icon.show(o,this.worldOf(this._selected)),this._moves.setValue(l===void 0?pu:String(l.moves)).setGold(o===`superCompleted`),this._time.setValue(l===void 0?pu:qo(l.timeMs)),this._play.setVisible(s).setEnabled(s),this._replay.setVisible(s).setEnabled(l!==void 0),this._unlock.setVisible(!s).setEnabled(c);let u={levelIndex:this._selected,locked:!s,withLock:!s&&!c};this.scene.launch(`LevelPreview`,u)}showTitle(e){let{x:t,width:n,fontSize:r,minFontSize:i}=$.info.title;this._title.setWordWrapWidth(null).setText(e);let a=r;do this._title.setFontSize(a),a--;while(N(this._title).width>n&&a>=i);N(this._title).width>n&&this._title.setWordWrapWidth(n,!0),this._title.setX(Math.round(t+(n-N(this._title).width)/2))}play(){this.leave(`LevelIntro`)}replay(){this.leave(`Game`,{replay:!0})}async unlock(){let{session:e,levelProgress:t,analytics:n}=this._services,r=this._selected;if(!t.canUnlock(r))return;let i=e.levelAt(r).id;this._unlock.setEnabled(!1);let a=await cs();n.levelUnlockAdFinished({levelId:i,levelIndex:r},a),a&&t.unlock(i),this.sys.isActive()&&(this.refreshPanels(),this.select(this._selected))}leave(e,t){this._services.session.selectLevel(this._selected),this.scene.stop(`LevelPreview`),this.scene.start(e,t)}},_u=class extends e.GameObjects.Container{_on;_off;_value;constructor(e,t,n,r){super(e,t,n);let{value:i,on:a,off:o,onChange:s,...c}=r;this._value=i;let l=t=>new du(e,0,0,{...c,...t,onClick:()=>{this.show(!this._value),s(this._value)}});this._on=l(a),this._off=l(o),this.add([this._on,this._off]);let{width:u,height:d}=this.naturalSize;this.setButtonSize(u,d),this.show(i),e.add.existing(this)}get naturalSize(){return ou([this._on.naturalSize,this._off.naturalSize])}setButtonSize(e,t){return this._on.setButtonSize(e,t),this._off.setButtonSize(e,t),this.setSize(this._on.width,this._on.height),this}setOrigin(e,t=e){return this._on.setOrigin(e,t),this._off.setOrigin(e,t),this}show(e){this._value=e,this._on.setVisible(e),this._off.setVisible(!e)}},vu=160,yu={border:Ql(vo.border,2),padding:8,gap:8,buttonGap:6,grid:2,maxWidth:296},bu=class extends e.GameObjects.Container{centerOn;_chosen=!1;constructor(e,t,n){super(e),this.centerOn=t.centerOn??`screen`;let r={...yu,minWidth:t.minWidth??vu,equalButtons:t.equalButtons??!0},i={width:iu(r),useAdvancedWrap:!0},a=(t,n)=>t===void 0?void 0:e.add.text(0,0,t,{...n,wordWrap:i}).setOrigin(0),o=a(t.title,ko),s=a(t.body,Oo),c=t.buttons.map(t=>new du(e,0,0,{...t,onClick:()=>{this._chosen||(this._chosen=!0,t.onClick?.(),n(t.id))}}).setOrigin(0)),l=(t.toggles??[]).map(t=>new _u(e,0,0,t).setOrigin(0)),u=e=>e===void 0?void 0:N(e),d=au({title:u(o),body:u(s),toggles:l.map(e=>e.naturalSize),buttons:c.map(e=>e.naturalSize)},r),f=-Math.round(d.size.width/2),p=-Math.round(d.size.height/2);this.add(U(e,vo,vo.frame,d.size).setPosition(f,p)),o!==void 0&&d.title!==void 0&&this.add(o.setPosition(f+d.title.x,p+d.title.y)),s!==void 0&&d.body!==void 0&&this.add(s.setPosition(f+d.body.x,p+d.body.y)),l.forEach((e,t)=>{let{x:n,y:r,width:i,height:a}=d.toggles[t];this.add(e.setButtonSize(i,a).setPosition(f+n,p+r))}),c.forEach((e,t)=>{let{x:n,y:r,width:i,height:a}=d.buttons[t];this.add(e.setButtonSize(i,a).setPosition(f+n,p+r))}),this.setSize(d.size.width,d.size.height),e.add.existing(this)}},xu=.6,Su=120,Cu=180,wu=100,Tu=new Set([`Controls`]),Eu=class extends e.Scene{_backdrop;_waiting=[];_current;_paused=[];_dimmed=!1;constructor(){super(`Popups`)}create(){Mr(this),this._backdrop=this.add.rectangle(0,0,320,M(this),Eo,xu).setOrigin(0).setInteractive().setVisible(!1);let t=()=>{this._backdrop.setSize(320,M(this)),this._backdrop.input?.hitArea.setSize(320,M(this)),this._current!==void 0&&this._current.setPosition(...this.center(this._current))};this.scale.on(e.Scale.Events.RESIZE,t),this.events.once(e.Scenes.Events.SHUTDOWN,()=>this.scale.off(e.Scale.Events.RESIZE,t)),j(this).popups.attach(this)}open(e){return new Promise(t=>{this._waiting.push(()=>this.present(e,t)),this._current===void 0&&this._waiting.length===1&&this.showNext()})}present(e,t){this._dimmed||(this._dimmed=!0,this.pauseLevel(),this.tweens.killTweensOf(this._backdrop),this._backdrop.visible||this._backdrop.setVisible(!0).setAlpha(0),this.tweens.add({targets:this._backdrop,alpha:1,duration:Su}));let n=new bu(this,e,e=>{this.tweens.add({targets:n,scale:0,duration:wu,ease:`Quad.easeIn`,onComplete:()=>{n.destroy(),this._current=void 0,t(e),this.time.delayedCall(0,()=>this.showNext())}})});this._current=n.setPosition(...this.center(n)).setScale(0),this.tweens.add({targets:n,scale:1,duration:Cu,ease:`Back.easeOut`})}showNext(){if(this._current!==void 0)return;let e=this._waiting.shift();e===void 0?(this._dimmed=!1,this.tweens.add({targets:this._backdrop,alpha:0,duration:Su,onComplete:()=>this._backdrop.setVisible(!1)}),this.resumeLevel()):e()}pauseLevel(){j(this).controls.releaseAll(),this._paused=this.scene.manager.getScenes(!0).filter(e=>e!==this&&!Tu.has(e.scene.key)),this._paused.forEach(e=>e.scene.pause())}resumeLevel(){this._paused.forEach(e=>e.scene.resume()),this._paused=[]}center({centerOn:e}){let t=M(this),n=e===`board`?wr(t)+Er(t)/2:t/2;return[160,Math.floor(n)]}},Du=class extends mr{constructor(){super(void 0)}},Ou=class{_host;attach(e){this._host=e}show(e){if(this._host===void 0)throw Error(`Popups can only be shown once the Popups scene has been created`);return this._host.open(e)}},ku=`${t}progress`,Au=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0,ju=class{_levels;_store;_records=new Map;_unlocked=new Set;constructor(e,t){this._levels=e,this._store=t,this.load()}record(e){return this._records.get(e)}isCompleted(e){return this._records.has(e)}get completedCount(){return this._levels.filter(e=>this._records.has(e.id)).length}get reachedIndex(){let e=0;return this._levels.forEach((t,n)=>{this._records.has(t.id)?e=Math.max(e,n+1):this._unlocked.has(t.id)&&(e=Math.max(e,n))}),e}stateOf(e){let t=this._levels[e],n=this._records.get(t.id);if(n!==void 0)return t.solutionLength!==void 0&&n.moves<=t.solutionLength?`superCompleted`:`completed`;let r=this.reachedIndex;return e===r?`current`:e<r||this._unlocked.has(t.id)?`uncompleted`:`locked`}isPlayable(e){return this.stateOf(e)!==`locked`}complete(e,t,n){let r=this._records.get(e),i=r===void 0||t.length<r.moves;this._records.set(e,{moves:i?t.length:r.moves,solution:i?[...t]:r.solution,timeMs:r===void 0?n:Math.min(r.timeMs,n)}),this.save()}canUnlock(e){return e===this.reachedIndex+1&&e<this._levels.length}unlock(e){this._unlocked.add(e),this.save()}load(){let e=r(this._store,ku);if(typeof e==`object`&&e){for(let[t,n]of Object.entries(e.levels??{}))try{Au(n.moves)&&Au(n.timeMs)&&typeof n.solution==`string`&&this._records.set(t,{moves:n.moves,timeMs:n.timeMs,solution:qt(n.solution)})}catch{}Array.isArray(e.unlocked)&&e.unlocked.filter(e=>typeof e==`string`).forEach(e=>this._unlocked.add(e))}}save(){let e={levels:Object.fromEntries([...this._records].map(([e,{moves:t,timeMs:n,solution:r}])=>[e,{moves:t,timeMs:Math.round(n),solution:Kt(r)}])),unlocked:[...this._unlocked]};i(this._store,ku,e)}},Mu=`${t}settings`,Nu={musicMuted:!1,soundsMuted:!1,dpadSide:`left`},Pu=class extends mr{_store;constructor(e){super(Fu(e)),this._store=e}set(e){super.set(e),i(this._store,Mu,e)}change(e){this.set({...this.value,...e})}toggleAllSound(){let e=!this.value.musicMuted||!this.value.soundsMuted;this.change({musicMuted:e,soundsMuted:e})}};function Fu(e){let t=r(e,Mu);if(typeof t!=`object`||!t)return Nu;let{musicMuted:n,soundsMuted:i,dpadSide:a}=t;return{musicMuted:typeof n==`boolean`?n:Nu.musicMuted,soundsMuted:typeof i==`boolean`?i:Nu.soundsMuted,dpadSide:a===`left`||a===`right`?a:Nu.dpadSide}}var Iu=`${t}learned`,Lu=[`move`],Ru=class{_store;_learned=new Set;constructor(e){this._store=e;let t=r(e,Iu);Array.isArray(t)&&Lu.filter(e=>t.includes(e)).forEach(e=>this._learned.add(e))}has(e){return this._learned.has(e)}learn(e){this._learned.has(e)||(this._learned.add(e),i(this._store,Iu,[...this._learned]))}};function zu(e){return Sr(e.clientWidth,e.clientHeight,window.devicePixelRatio)}function Bu({parent:t,session:r,debug:i,playtest:a,analytics:o}){let s=zu(t),l=new hn(o??new c({sinks:[]})),f=new e.Game({type:e.AUTO,parent:t,title:`Sweet Slime Shapes`,backgroundColor:x,width:s.width,height:s.height,scale:{mode:e.Scale.NONE,zoom:s.cssScale},render:{antialias:!0,roundPixels:!1},input:{activePointers:3},disableContextMenu:!0,scene:[Xa,Ml,Al,Zo,gu,Kl,Ko,Eu],callbacks:{postBoot:e=>{Pr(e);let t=new Pu(n());pr(e,{session:r,controls:new dr,keyboard:new u(!d()),sounds:new qn(e.sound,t),settings:t,hints:new Du,panelLayout:new gr,progress:new Ru(a===void 0?n():void 0),levelProgress:new ju(lr,a===void 0?n():void 0),popups:new Ou,analytics:l,debug:i,playtest:a})}}}),p=()=>{let{width:e,height:n,cssScale:r}=zu(t);f.scale.zoom!==r&&f.scale.setZoom(r),(f.scale.width!==e||f.scale.height!==n)&&f.scale.resize(e,n)};window.addEventListener(`resize`,p);let m=()=>{document.visibilityState===`hidden`&&l.pageHidden()};return document.addEventListener(`visibilitychange`,m),f.events.once(e.Core.Events.DESTROY,()=>{window.removeEventListener(`resize`,p),document.removeEventListener(`visibilitychange`,m)}),f}var Vu=`${t}version`,Hu=new Set([Vu,o,Mu]);function Uu(e,t){r(e,Vu)!==t&&(a(e,e=>e.startsWith(`sweet-slime-shapes.`)&&!Hu.has(e)),i(e,Vu,t))}var Wu=class{_levels;_levelIndex=0;_moves=0;_elapsedMs=0;_unlockedHints=new Set;constructor(e=lr){this._levels=e}get levelIndex(){return this._levelIndex}get level(){return this._levels[this._levelIndex]}get world(){return P[this.level.world]}get isFinished(){return this._levelIndex>=this._levels.length}get moves(){return this._moves}get elapsedMs(){return this._elapsedMs}addPlayTime(e){this._elapsedMs+=e}countMove(){this._moves++}isHintUnlocked(e){return this._unlockedHints.has(e)}unlockHint(e){this._unlockedHints.add(e)}advance(){this._levelIndex++}selectLevel(e){this._levelIndex=Math.max(0,Math.min(e,this._levels.length-1))}get levelCount(){return this._levels.length}levelAt(e){return this._levels[e]}restart(){this._levelIndex=0,this._moves=0,this._elapsedMs=0}};function Gu(e){window.addEventListener(`keydown`,t=>{t.key.toLowerCase()===`p`&&!t.repeat&&(t.preventDefault(),e.renderer.snapshot(e=>{e instanceof HTMLImageElement&&Ku(e.src)},`image/png`))})}async function Ku(e){try{let t=await(await fetch(e)).blob();await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}catch(e){console.warn(`Could not copy the screenshot to the clipboard`,e)}}var qu=`2.1.0`,Ju=void 0;function Yu(){return[new le({gameKey:`186997862b7ea531a9df800000368427`,secretKey:`71830623b53eb405d02bacc024c81db17034c689`},ce(qu,`main`))]}console.info(`Sweet Slime Shapes ${ce(qu,`main`)}`),Uu(n(),qu);var Xu=new c({sinks:Yu(),store:n()});Gu(Bu({parent:document.getElementById(`game`),session:new Wu,debug:Ju,analytics:Xu}));