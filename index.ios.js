import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native'

import Main from "./App/components/Main"
import Setup from "./App/components/Setup"
import Questionnaire from "./App/components/Questionnaire"
import Menu from "./App/components/Menu"
import Loading from "./App/components/Loading"
import Recommendations from "./App/components/Recommendations"
import Map from "./App/components/Map"

class DrDick extends Component {

  nextRoute(route) {
    if(this.props){
      this.props.navigator.push(route);
    } else {
      this.navigator.push(route);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'Main', title: 'Main'}}
        renderScene={this.renderScene.bind(this)} />
    );
  }

  renderScene(route, navigator){
    var routeId = route.id;

    if(routeId === 'Main'){
      return(
        <Main
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Setup'){
      return(
        <Setup
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Menu'){
      return(
        <Menu
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Questionnaire'){
      return(
        <Questionnaire
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Loading'){
      return(
        <Loading
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Recommendations'){
      return(
        <Recommendations
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }

    if(routeId === 'Map'){
      return(
        <Map
          title={route.title}
          navigator={navigator}
          nextRoute={this.nextRoute} />
      );
    }
  }
}

AppRegistry.registerComponent('DrDick', () => DrDick);
