import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {

  return (
    <Paper square style={{position:"fixed",top:"48px"}}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="推荐" />
        <Tab label="社会" disabled />
        <Tab label="军事" disabled/>
        <Tab label="热点" disabled/>
        <Tab label="娱乐" disabled/>
        <Tab label="财经" disabled/>
        <Tab label="视频" disabled/>
        <Tab label="教育" disabled/>
      </Tabs>
    </Paper>
  );
}