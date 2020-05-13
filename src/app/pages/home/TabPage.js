import React, { Component ,useEffect,lazy, Suspense} from "react";
// import NewsPage from "./NewsPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import * as tabs from "../../store/ducks/tabs.duck";
import { Tab, Tabs, Nav, Col, Row } from "react-bootstrap";



const NewsPage = lazy(() => import(`./NewsPage`));
const ProfilePage = lazy(() => import(`./ProfilePage`));

const ChartPage = lazy(() => import(`../ChartPage`));

class TabPage extends Component {





  state = {
    tabs: [
      { id: 1, name: "Tab 1", content: "Look at me, it's Tab 2"},
      { id: 2, name: "Tab 2", content: "Look at me, it's Tab 2" },
      { id: 3, name: "Tab 2", content:  <ChartPage /> }
    ],
    currentTab: { name: "Tab 1", content: "Wow this is tab 1" },
  };
  

  createTabs = () => {
    const { currentTab } = this.state;
    const tabs = this.props.tabs.tabs;
    if (Array.isArray(tabs) &&  tabs.length == 0){
        return 'no tabs'
    }

    // const allTabs = tabs.map((tab) => {
    //   return (
    //     <li>
    //       <button
    //         className={currentTab.name == tab.name ? "tab active" : "tab"}
    //         onClick={() => this.handleSelectTab(tab)}
    //       >
    //         {tab.name}
    //       </button>
    //     </li>
    //   );
    // });

    // return <ul className="nav nav-tabs">{allTabs}</ul>;
  };

  handleSelectTab = (tab) => {
    //   tab.content.props.name = 'rjaib';
      console.log(tab.content);
    this.setState({
      currentTab: tab,
    });
  };

  handleAddTab = () => {
    const { tabs } = this.state;

    const newTabObject = { 
      name: `Tab ${tabs.length + 1}`,
      content: <ProfilePage/>,
    };
   this.props.tabsAdd(newTabObject);
    this.setState({
      tabs: [...tabs, newTabObject],
      currentTab: newTabObject,
    });
  };

  handleDeleteTab = (tabToDelete) => {
      console.log(tabToDelete);
    this.props.tabsDelete(tabToDelete);
    // const { tabs } = this.state;
    // const tabToDeleteIndex = tabs.findIndex((tab) => tab.id === tabToDelete.id);

    // const updatedTabs = tabs.filter((tab, index) => {
    //   return index !== tabToDeleteIndex;
    // });

    // const previousTab =
    //   tabs[tabToDeleteIndex - 1] || tabs[tabToDeleteIndex + 1] || {};

    // this.setState({
    //   tabs: updatedTabs,
    //   editMode: false,
    //   editTabNameMode: false,
    //   currentTab: previousTab,
    // });
  };

  render() {

 

        
        
        
   

    const { currentTab } = this.state;
    // const { tabs } = this.props.tabs;
  
    console.log(this.props);
    const tabs = this.props.tabs.tabs;
    // console.log('newspage'+this.props);
    return (
      <div>
          
                <Tabs
        id="controlled-tab-example"
        defaultActiveKey="profile"
      >
        <Tab eventKey="home" title="Home">
          Be wise as thou art cruel; do not press My tongue-tied patience with
          too much disdain; Lest sorrow lend me words, and words express The
          manner of my pity-wanting pain. If I might teach thee wit, better it
          were, Though not to love, yet, love to tell me so;-- As testy sick
          men, when their deaths be near, No news but health from their
          physicians know;-- For, if I should despair, I should grow mad, And in
          my madness might speak ill of thee;
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <ProfilePage/>
        </Tab>
        {(Array.isArray(tabs) &&  tabs.length > 0) ? 
                    tabs &&
                    tabs.map((tab, index) => (
                        <Tab eventKey={tab.name} title={tab.name}>
        {index} :{tab.content ? tab.content : 'No First Name '}
        <button onClick={() => this.handleDeleteTab(tab.name)}>
                        Delete
                      </button>
        </Tab>
                    // <h1>{index} :{tab.content ? tab.content : 'No First Name '}</h1>
                    ))
                     : ''}
        <Tab eventKey="contact" title="Contact">
        <Suspense fallback={<div>Loading...</div>}>
        {/* <NewsPage destroy={false} name='ponir' /> */}
        </Suspense>
       
        </Tab>
      </Tabs>
        <div className="container">
          <div className="well">
            <button className="add-tab-button" onClick={this.handleAddTab}>
              <i className="text-primary fas fa-plus-square" /> Add Tab
            </button>
            {this.createTabs()}
            <div className="tab-content"> 
                <div>
                    {(Array.isArray(tabs) &&  tabs.length == 0) ? 
                    tabs &&
                    tabs.map((tab, index) => (
                    <h1>{index} :{tab.content ? tab.content : 'No First Name '}</h1>
                    ))
                     : ''}
                {/* {tabs &&
              tabs.map((tab, index) => (
              <h1>{index} :{tab.content ? tab.content : 'No First Name '}</h1>
              ))} */}
                  <p>{currentTab.content}</p>
                  {currentTab.id ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        className="edit-mode-button"
                        onClick={this.setEditMode}
                      >
                        Edit
                      </button>
                      <button onClick={() => this.handleDeleteTab(currentTab)}>
                        Delete
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tabs}) => ({
    tabs
});
export default injectIntl(connect(mapStateToProps, tabs.actions)(TabPage));
