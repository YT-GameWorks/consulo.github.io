import React from 'react';
import './styles/App.less';
import Navigation from './components/Navigation';
import Heading from './components/Header';
import Timeline from './components/TimelineDisplay';
import { Layout } from 'antd';

function App() {
	const { Header, Content } = Layout;

	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<div className='logo' />
				<Navigation />
			</Header>
			<Content style={{ padding: '0 50px', marginTop: 64 }}>
				<div style={{ padding: 24, minHeight: 380 }} className='Header'>
					<Heading />
					<Timeline />
				</div>
			</Content>
		</Layout>
	);
}

export default App;
