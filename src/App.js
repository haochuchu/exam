/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import As from './As';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();
    this.state={
      //arr:[1,2,3]
      test:[]
    }
  }
  componentDidMount(){
    $.ajax({
      url:"http://localhost:8200/practice/test",
      type:"post",
      asyn:true,
      success:function(oo){
        this.setState({
          test:oo
        })
      }.bind(this),
      error:function(){
        alert('失败')
      }
    })
  }
  render() {
    return (
      <Router>
        <div className="App"> 
            {<Link to="/a">1</Link>
            <Link to="/b">2</Link>
            <Link to="/c">3</Link>}    
            {this.state.test.map(function (v,i){
              return <Link key={i} to={`${v.id}`}>
                  <div>{v.title}</div>
              </Link>
            })}
          <Route path="/:id" component={As} />     
        </div>
      </Router>
    );
  }
}

export default App;*/



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { Icon } from 'antd';
import News from './News';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();
    this.state={
      //arr:[1,2,3]
      test:[]
    }
  }
  componentDidMount(){
    $.ajax({
      url:"http://localhost:8200/exam/test",
      type:"post",
      asyn:true,
      success:function(oo){
        this.setState({
          test:oo
        })
      }.bind(this),
      error:function(){
        alert('失败')
      }
    })
  }
  fn=function(event){
      var aa=event.target.parentElement.firstElementChild.innerHTML
      this.setState({
        id:aa
      })
      $('.alert').css({
        'display':"block"
      })
      $('.wrap').css({
        'display':"none"
      })
  }.bind(this);
  fns=function(event){
        var aa=event.target
        var  id=aa.parentElement.firstElementChild.innerHTML
            $.ajax({
                type:"post",
                url:"http://localhost:8200/exam/test2",
                data:{"id":id},
                success:function(e){                
                for(var i in this.state.test){
                    if(this.state.test[i].id==id){
                        var aa=this.state.test.splice(i,1)
                        this.setState({
                            test:this.state.test
                        })
                    }
                }
            }.bind(this),
            error:function(){
                alert("失败了")
            }
        })
    }.bind(this);
    ok=function(){
        $('.alert').css({
            'display':'none'
        })
        $('.wrap').css({
            'display':"block"
        })
        var title7 =$("#ptext").val()
          if($("#ptext").val() == "") {
            for(var i = 0; i < this.state.test.length; i++) {
                if(this.state.test[i].id == this.state.id) {
                    title7= this.state.test[i].title
                }
            }
        }
        var content8 =$("#xtext").val()
          if($("#xtext").val() == "") {
            for(var i = 0; i < this.state.test.length; i++) {
                if(this.state.test[i].id == this.state.id) {
                    content8= this.state.test[i].content
                }
            }
        }
        $.ajax({
            type:"post",
            url:"http://localhost:8200/exam/test3",
            data:{"id":this.state.id,"title":title7,"content":content8},
            success:function(){
                $("#ptext").val(title7)
                $("#xtext").val(content8)
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        });
    }.bind(this)
  render() {
    return (
      <Router>
        <div className="App"> 
          <Link to="/"></Link>
          <Route exact path="/" render={()=>(
            <div>
              {this.state.test.map(function (v,i){
                return <div key={i} className="wrap">
                  <Link key={i} to={`/id=${v.id}`}>
                    <span>{v.title}</span>
                  </Link>
                  <div>
                    <span className="span">{v.id}</span>
                    <button onClick={this.fn}>修改</button>
                    <button onClick={this.fns}>删除</button>
                  </div>
                </div>
              }.bind(this))}
              <div className="alert">
                <div className="tit">title:<input type="text" id="ptext"/></div>
                <div className="con">content:<input type="text" id="xtext"/></div> 
                <button className="ok" onClick={this.ok} id="ok">确定</button>
              </div>
            </div>
          )}/>
          <Route path="/:id" component={News} />     
        </div>
      </Router>
    );
  }
}

export default App;