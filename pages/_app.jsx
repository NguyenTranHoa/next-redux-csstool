import App from 'next/app'
import React from 'react';
import { wrapper } from '../redux'
import Layout from '../components/layout'
import '@shopify/polaris/styles.min.css'
// import '../styles/global.css'
// import 'react-resizable/css/styles.css'

class WrappedApp extends App {
	render() {
		const { Component, pageProps } = this.props

		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		)
	}
}
export default wrapper.withRedux(WrappedApp)