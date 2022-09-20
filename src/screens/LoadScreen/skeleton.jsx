import ContentLoader, { Rect } from 'react-content-loader/native'
import { Dimensions,View } from 'react-native'
import React from 'react';


const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

const screenLen = `0 0 ${screenW} ${screenH}`;

export const MyLoader = () => (
  <ContentLoader
    viewBox={screenLen}
    speed={1}
    backgroundColor={'#333'}
    foregroundColor={'#999'}
  >
    <Rect x="20" y="70" rx="4" ry="4" width="100" height="20" />
    <Rect x="20" y="100" rx="4" ry="4" width="140" height="20" />
    <Rect x={`${screenW-120}`} y="70" rx="4" ry="4" width="100" height="20" />
    <Rect x={`${screenW - 180}`} y="100" rx="4" ry="4" width="160" height="20" />
    
    <Rect x="20" y="160" rx="8" ry="8" width="180" height="120" />
    <Rect x={`${screenW-180}`} y="160" rx="8" ry="8" width="160" height="120" />

    <Rect x="20" y={`${screenH - 180}`} rx="8" ry="8" width={`${screenW - 40}`} height="40" />
    <Rect x="20" y={`${screenH - 120}`} rx="12" ry="12" width={`${screenW - 40}`} height="80" />
  </ContentLoader>
)