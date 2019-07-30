import React, { Component } from 'react';
import axios from 'axios';
import Topbar from '../../layouts/Homepage/Homepage';
import Footer from '../../layouts/Homepage/components/Footer/Footer';
import Courseheader from './Detailheader';
import DetailCategory from './DetailCategory';
import Recommendview from './Recommedview';
import './style.css';
import { Api } from 'constants/api';
let id;
export default class Coursedetailsview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
  }
  componentWillMount() {
    id = window.location.search.split('=')[1];
  }
  componentDidMount() {
    let link = Api.link + 'course-detail?id=' + id;
    axios
      .get(link)
      .then(response => {
        if (response.status === 200) {
          console.log('success');
          this.setState({
            info: response.data.course_detail
          });
        }
      })
      .catch(function(error) {});
  }

  render() {
    return (
      <div id="detail-course">
        <Topbar />
        <Courseheader info={this.state.info} />
        <DetailCategory info={this.state.info} />
        <Recommendview />
        <Footer />
      </div>
    );
  }
}
