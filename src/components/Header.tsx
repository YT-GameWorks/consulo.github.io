/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Logo from '../assets/logo.svg';
import '../styles/Header.less';
import { Divider, Typography } from 'antd';

function Header() {
	const { Title, Paragraph, Link } = Typography;

	return (
		<div>
			<img src={Logo} alt='Logo' className='center' />
			<Divider />
			<div className='Content'>
				<Title>About</Title>
				<Paragraph>
					Consulo is a desktop IDE with Java & C# language support. It supports{' '}
					<br />
					the Unity Game Engine.
				</Paragraph>
				<Title>Downloads</Title>
				<Paragraph>
					For downloads, visit{' '}
					<Link href='https://consulo.app/'>this page</Link>.
				</Paragraph>
				<Title>Source code</Title>
				<Paragraph>
					All source code is on{' '}
					<Link href='https://github.com/consulo'>Github</Link>.
					<br />
					<br />
					Main repository is{' '}
					<Link href='https://github.com/consulo/consulo'>Consulo</Link>.
					<br />
					<br />
					Plugin implementations have their own repositories. More info{' '}
					<Link href='https://github.com/consulo/consulo/blob/master/CONTRIBUTING.md'>
						here.
					</Link>
				</Paragraph>
				<Title>Contributing</Title>
				<Paragraph>
					You can visit our{' '}
					<Link href='https://discuss.consulo.io/'>forum</Link>.
					<br />
					<br />
					Before reporting issue, please read the{' '}
					<Link href='https://github.com/consulo/consulo/blob/master/CONTRIBUTING.md'>
						contribution guide
					</Link>
					.
					<br />
					<br />
					If you want to develop Consulo plugins, be sure to read{' '}
					<Link href='https://consulo.dev/'>
						plugin development starter guide
					</Link>
					.
				</Paragraph>
				<Title>Join our Discord server</Title>
				<iframe
					src='https://discordapp.com/widget?id=769309696351666187&theme=dark'
					width='37%'
					height='300px'
					frameBorder='0'
					sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'></iframe>
			</div>
		</div>
	);
}

export default Header;
