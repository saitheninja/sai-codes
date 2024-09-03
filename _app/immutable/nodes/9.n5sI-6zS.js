import{s as g,n}from"../chunks/scheduler.Ck6cZafl.js";import{S as m,i as b,e as p,s as y,a as d,g as h,c as w,b as u,f as o,d as l}from"../chunks/index.C0dgLUhg.js";function x(f){let e,c="On CSS",a,s,r=`<p>&quot;pixel perfect&quot; is dumb. Web pages are stretchy. Use min and max, and let
    the browser work it out.</p> <p>Margins collapse. Padding adds.</p> <p>Container queries are swag af. They allow you to tune layouts more finely
    than before.</p> <p>Get feedback as fast as possible, so you can fix it before things are built
    on top of it. I like to build things directly in the browser so I can
    immediately see where ideas don&#39;t work. (Especially fancy layering things,
    like the <a href="https://github.com/saitheninja/sai-codes/blob/main/src/lib/Header.svelte">header</a> of this site.)</p> <h2 class="heading-size-2 pt-4">Tailwind Specific</h2> <p>It&#39;s fast to play with designs, and you know you aren&#39;t fucking up the rest
    of the site by changing global CSS. Just doing combinations of static
    utility classes.</p> <p>Tailwind sets useful media queries.</p> <p>Design all layouts from smallest screen to biggest screen.</p> <p>Build everything in one page and then abstract into components once the
    patterns become obvious.</p> <p>Use margin for fine-tuning specific content, like text or logos. First use
    <code>gap</code>, <code>space-x</code>, etc.</p> <p><code>@apply</code> to use Tailwind classes in .css files.</p> <p>New coloured shadows are cool.</p>`;return{c(){e=p("h1"),e.textContent=c,a=y(),s=p("div"),s.innerHTML=r,this.h()},l(t){e=d(t,"H1",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1al2mg5"&&(e.textContent=c),a=w(t),s=d(t,"DIV",{class:!0,"data-svelte-h":!0}),h(s)!=="svelte-1wyh4lo"&&(s.innerHTML=r),this.h()},h(){u(e,"class","heading-size-1 mb-10 leading-tight"),u(s,"class","space-y-4")},m(t,i){o(t,e,i),o(t,a,i),o(t,s,i)},p:n,i:n,o:n,d(t){t&&(l(e),l(a),l(s))}}}class k extends m{constructor(e){super(),b(this,e,null,x,g,{})}}export{k as component};
