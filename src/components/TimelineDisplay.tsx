import React from 'react';
import { Timeline, Typography } from 'antd';
import '../styles/TimelineDisplay.less';

function TimelineDisplay() {
	return (
		<div>
			<Typography.Title className='timeline'>Release Timeline</Typography.Title>
			<Timeline className='timeline'>
				<Timeline.Item color='green'>
					Create a services site 2015-09-01
				</Timeline.Item>
				<Timeline.Item color='green'>
					Create a services site 2015-09-01
				</Timeline.Item>
				<Timeline.Item color='red'>
					<p>Solve initial network problems 1</p>
					<p>Solve initial network problems 2</p>
					<p>Solve initial network problems 3 2015-09-01</p>
				</Timeline.Item>
				<Timeline.Item>
					<p>Technical testing 1</p>
					<p>Technical testing 2</p>
					<p>Technical testing 3 2015-09-01</p>
				</Timeline.Item>
				<Timeline.Item color='gray'>
					<p>Technical testing 1</p>
					<p>Technical testing 2</p>
					<p>Technical testing 3 2015-09-01</p>
				</Timeline.Item>
				<Timeline.Item color='gray'>
					<p>Technical testing 1</p>
					<p>Technical testing 2</p>
					<p>Technical testing 3 2015-09-01</p>
				</Timeline.Item>
			</Timeline>
		</div>
	);
}

export default TimelineDisplay;
