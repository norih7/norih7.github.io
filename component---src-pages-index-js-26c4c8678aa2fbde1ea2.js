(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"listQuery",function(){return u});var a=n(0),r=n.n(a),i=n(147),o=n(155),c={post:{}};t.default=function(e){var t=e.data.allMarkdownRemark;return r.a.createElement(o.a,{contentName:"blog"},t.edges.map(function(e,t){var n=e.node;return r.a.createElement("div",{style:c.post},r.a.createElement(i.Link,{to:n.frontmatter.path,className:"link"},r.a.createElement("h1",null,n.frontmatter.title)),r.a.createElement("span",null,n.frontmatter.date),r.a.createElement("p",null,n.excerpt))}))};var u="866204067"},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(146),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(149),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(31);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},150:function(e){e.exports={data:{site:{siteMetadata:{title:"norih",description:"WebEnginner Portfolio & Note"}}}}},151:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(51),u=n(3),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},152:function(e,t,n){e.exports={header:"style-module--header--2IPCV",container:"style-module--container--eA4qF",description:"style-module--description--29Dbw"}},153:function(e,t,n){e.exports={headerMenu:"style-module--header-menu--2xhY8"}},154:function(e,t,n){e.exports={container:"index-module--container--3aFCu",contentHeader:"index-module--content-header--2kT99"}},155:function(e,t,n){"use strict";var a=n(150),r=n(0),i=n.n(r),o=n(1),c=n.n(o),u=n(159),l=n.n(u),s=n(147),d=(n(50),n(160),n(74),n(7)),m=n.n(d),p=n(161);p.init({dsn:"https://567894280ac245f6b26219eddeef2ad8@sentry.io/1310571"});var f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={error:null},n}m()(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){this.setState({error:e}),p.withScope(function(n){Object.keys(t).forEach(function(e){n.setExtra(e,t[e])}),p.captureException(e)})},n.render=function(){return this.state.error?i.a.createElement("a",{onClick:function(){return p.showReportDialog()}},"Report feedback"):this.props.children},t}(i.a.Component),h=n(52),E=n(152),y=n.n(E),v=n(153),g=n.n(v),b=[{to:"/react/about/",title:"about"},{to:"/react/works/",title:"works"},{to:"/react/",title:"blog"}],w=function(e){var t=b.map(function(e){var t=e.to,n=e.title;return i.a.createElement("li",null,i.a.createElement(s.Link,{to:t},n))});return i.a.createElement("div",{className:g.a.headerMenu},i.a.createElement("ul",null,t))},k=function(e){var t=e.siteTitle,n=e.description;e.increment;return i.a.createElement("div",{className:y.a.header},i.a.createElement("div",{className:y.a.container},i.a.createElement("h1",null,i.a.createElement(s.Link,{to:"/react/",style:{color:"white",textDecoration:"none"}},i.a.createElement("span",null,t))),i.a.createElement("p",{className:y.a.description},n)),i.a.createElement(w,null))},x=Object(h.b)(function(e){return{count:e.count}},function(e){return{increment:function(){return e({type:"FETCH"})}}})(k),q=n(154),N=n.n(q),R=function(e){var t=e.children,n=e.contentName;return i.a.createElement(s.StaticQuery,{query:"2562398822",render:function(e){var a=e.site.siteMetadata,r=a.title,o=a.description,c=void 0===n?null:i.a.createElement("div",{className:N.a.contentHeader},i.a.createElement("div",{className:N.a.container},n));return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"ja"})),i.a.createElement(x,{siteTitle:r,description:o}),c,i.a.createElement("div",{className:N.a.container},t)))},data:a})};R.propTypes={children:c.a.node.isRequired};t.a=R}}]);
//# sourceMappingURL=component---src-pages-index-js-26c4c8678aa2fbde1ea2.js.map