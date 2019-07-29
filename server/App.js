import React, { Component } from 'react'
import path from 'path'
import fs from 'fs'
import { StaticRouter } from 'react-router-dom'
// import { renderToString } from 'react-dom/server'
import Routes from '../components/Router.js'
import { Provider } from 'mobx-react'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.info(this.props.url,'this.props.url.urlthis.props.url.urlthis.props.url.urlthis.props.url.url')
        return <StaticRouter location={this.props.url} context={this.props.context}>
                <Routes />
            </StaticRouter>
    }
}
// export default (store, context, url) => {
//     return <Provider {...store}>
//         <StaticRouter location={url.url} context={context}>
//             <Routes />
//         </StaticRouter>
//     </Provider>
// }

// import Mustache from 'mustache'
// import { StaticRouter } from 'react-router-dom'
// import { renderToString } from 'react-dom/server'
// import { getBuildFile, getAssetPath } from './utils'
// import template from './template'
// import renderBaseApp from 'lib/baseApp'

// let ssrStyles = []

// class ReactServer {
//   constructor(props) {
//     Object.assign(this, props)
//   }

//   get buildFiles() {
//     return getBuildFile()()
//   }

//   get vendorFiles() {
//     return Object.keys(this.buildFiles).filter(key => {
//       const item = this.buildFiles[key]
//       return path.extname(item) === '.js'
//     })
//   }

//   getScripts(ctx) {
//     return this.vendorFiles
//     .filter(item => path.extname(item) === '.js')
//     .map(item => `<script type="text/javascript" src='${getAssetPath()}${item}'></script>`)
//     .reduce((a, b) => a + b, `<script type="text/javascript">window._INIT_CONTEXT_ = ${JSON.stringify(ctx)}</script>`)
//   }

//   getCss() {
//     // 读取初始化样式文件
//     const cssFile = fs.readFileSync(path.resolve(__dirname, '../client/index.css'), 'utf-8')
//     const initStyles = `<style type="text/css">${cssFile}</style>`
//     const innerStyles = `<style type="text/css">${ssrStyles.reduceRight((a, b) => a + b, '')}</style>`
//     return initStyles + innerStyles
//   }

//   addStyles(css) {
//     const styles = typeof css._getCss === 'function' ? css._getCss() : ''
//     if(!ssrStyles.includes(styles)) {
//       ssrStyles.push(css._getCss())
//     }
//   }

//   renderTemplate = props => {
//     return Mustache.render(template(props))
//   }

//   renderApp(ctx, context) {
//     const html = renderToString((
//       <StaticRouter location={ctx.request.url} context={context}>
//         {renderBaseApp({...context, addStyles: this.addStyles})}
//       </StaticRouter>
//     ))

//     return this.renderTemplate({
//       title: '豆瓣', 
//       html, 
//       scripts: this.getScripts(context), 
//       css: this.getCss()
//     })
//   }
// }

// export default ReactServer