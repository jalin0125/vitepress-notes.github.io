import{_ as s,c as n,o as a,a as l}from"./app.b454e50a.js";const f=JSON.parse('{"title":"开发标准","description":"","frontmatter":{},"headers":[{"level":2,"title":"统一注释","slug":"统一注释","link":"#统一注释","children":[]}],"relativePath":"01.basics/01.preknowledge/01.standard.md"}'),p={name:"01.basics/01.preknowledge/01.standard.md"},t=l(`<h1 id="开发标准" tabindex="-1">开发标准 <a class="header-anchor" href="#开发标准">¶</a></h1><h2 id="统一注释" tabindex="-1">统一注释 <a class="header-anchor" href="#统一注释">¶</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> - @Desc: 描述信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> - @Author: Jalin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> - @LastEditor: Jalin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> - @LastEditTime: 2024/12/04</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> - @Email: 708912932@qq.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ---------------------------------&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**********************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @Desc: 描述信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @Author: Jalin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @LastEditor: Jalin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @LastEditTime: 2024/12/04</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @Email: 708912932@qq.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> **********************************/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">* 函数描述</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">* @param {string} p1 参数1的说明</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">* @param {string} p2 参数2的说明，比较长</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">* @param {number=} p3 参数3的说明（可选）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">* @return {Object} 返回值描述</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">* */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">p1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">p2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">p3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p3</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p3</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        p1</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        p2</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        p3</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p3</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @description : **</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @author      : Jalin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @Date        : 2023-03-29</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @LastEditors : Jalin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @LastEditTime: 2023-03-29</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* ==========================================================================</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">组件块</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">============================================================================ */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 子组件块</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">============================================================================ */</span></span>
<span class="line"></span></code></pre></div>`,5),e=[t];function o(c,i,r,y,F,D){return a(),n("div",null,e)}const E=s(p,[["render",o]]);export{f as __pageData,E as default};
