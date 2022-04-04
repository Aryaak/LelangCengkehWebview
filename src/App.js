import React, { Component } from 'react';
import { BackHandler } from 'react-native'
import { WebView } from 'react-native-webview';

export default class App extends Component {
  webView = {
    canGoBack: false,
    ref: null,
  }

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
      <WebView
        javaScriptEnabled={true}
        automaticallyAdjustContentInsets={true}
        pullToRefreshEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        source={{ uri: "https://lelangcengkeh548.herokuapp.com" }}
        ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
      />
    );
  }
}