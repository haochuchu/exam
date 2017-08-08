import React, { Component } from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class News extends Component {
	constructor(){
    super();
    this.state={
      //arr:[1,2,3]
      tt:{}
    }
  }
	componentDidMount(){
	    $.ajax({
	      url:"http://localhost:8200/exam/test1",
	      type:"post",
	      data:{
	      	id:this.props.match.params.id.split("=")[1]
	      },
	      success:function(oo){
	      	console.log(oo)
	        this.setState({
	          tt:oo[0]
	        })
	      }.bind(this),
	      error:function(){
	        alert('失败')
	      }
	    })
    }
  render() {
  	return <div>{this.state.tt.content}</div>
  }
}

/*const As=({match})=>(
	<div>
		<h2>{match.params.id.split(":")[1]}</h2>
	</div>
)*/

export default News;