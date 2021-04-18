import React from 'react';
import { Menu } from 'antd';
import {
	HomeFilled,
	WechatFilled,
	ApiFilled,
	DownCircleFilled,
	GithubFilled,
} from '@ant-design/icons';

function Navigation() {
	return (
		<div>
			<Menu mode='horizontal' theme='dark' defaultSelectedKeys={['home']}>
				<Menu.Item icon={<HomeFilled />} key='home'>
					Home
				</Menu.Item>
				<Menu.Item icon={<WechatFilled />} key='discuss'>
					<a
						href='https://github.com/consulo/consulo/discussions'
						target='_blank'
						rel='noopener noreferrer'>
						Discussions
					</a>
				</Menu.Item>
				<Menu.Item icon={<ApiFilled />} key='plugins'>
					<a
						href='https://hub.consulo.io/#!repo/release'
						target='_blank'
						rel='noopener noreferrer'>
						Plugins
					</a>
				</Menu.Item>
				<Menu.Item icon={<DownCircleFilled />} key='download'>
					<a
						href='https://consulo.app/'
						target='_blank'
						rel='noopener noreferrer'>
						Downloads
					</a>
				</Menu.Item>
				<Menu.Item icon={<GithubFilled />} key='github'>
					<a
						href='https://github.com/consulo/consulo'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>
				</Menu.Item>
				<Menu.Item key='discord'>
					<a
						href='https://discord.gg/Ab3Ka5gTFv'
						target='_blank'
						rel='noopener noreferrer'>
						Discord
					</a>
				</Menu.Item>
			</Menu>
		</div>
	);
}

export default Navigation;
