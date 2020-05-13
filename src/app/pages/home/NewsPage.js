import React, { useEffect } from 'react'
import * as news from "../../store/ducks/news.duck";
import { injectIntl } from 'react-intl';
import { connect } from "react-redux";



const NewsPage = (newsdata) => {

  
const {news , newsLoading } = newsdata;
const {name} = newsdata;
console.log(newsdata);
    useEffect(() => {
      // Run! Like go get some data from an API.
      // if (Array.isArray(newsdata.news.data) &&  newsdata.news.data.length == 0){
      //   newsdata.newsLoading();
      // }

      newsdata.newsLoading();
      
    }, []);
    let leaders = newsdata.news.data.leaders;
    console.log(newsdata);
    return (

        <div>
          <h1>{newsdata.name? newsdata.name : 'No First Name 1'}</h1>
          {leaders &&
              leaders.map((leader, index) => (
              <h1>{index} :{leader.nameFirst? leader.nameFirst : 'No First Name '}</h1>
              ))}
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    news: state.news,
    destroy: ownProps.destroy,
    name: ownProps.name
  });
export default injectIntl(
    connect(
        mapStateToProps
    ,  news.actions
    )(NewsPage)
  );
