import React, { Component ,useEffect,lazy, Suspense} from "react";
// import NewsPage from "./NewsPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import * as tabs from "../../store/ducks/tabs.duck";
import { Tab, Tabs, Nav, Col, Row } from "react-bootstrap";
import TextInput from "../../partials/form-elements/TextInput";
// import { Field, reduxForm } from 'redux-form'




const NewsPage = lazy(() => import(`./NewsPage`));

const ChartPage = lazy(() => import(`../ChartPage`));


class ProfilePage extends Component {


  handleAddTab = () => {

    const newTabObject = { 
      name: `Tab ${this.props.tabs.tabs.length + 1}`,
      content: <ChartPage/>,
    };
   this.props.tabsAdd(newTabObject);
  };

  handleCAddTab = () => {

    const newTabObject = { 
      name: `Tab ${this.props.tabs.tabs.length + 1}`,
      content: <NewsPage/>,
    };
   this.props.tabsAdd(newTabObject);
  };


  render() {

 

        
        
        
   

  
    console.log(this.props);
    // const tabs = this.props.tabs.tabs;
    // console.log('newspage'+this.props);
    return (
      <div>

       <TextInput/>
        <div className="container">
          <div className="well">
            <button className="add-tab-button" onClick={this.handleAddTab}>
              <i className="text-primary fas fa-plus-square" /> Add Tab
            </button>
            <button className="add-tab-button" onClick={this.handleCAddTab}>
              <i className="text-primary fas fa-plus-square" /> Add C Tab
            </button>
           </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tabs}) => ({
    tabs
});
export default injectIntl(connect(mapStateToProps, tabs.actions)(ProfilePage));
