import React, { Component } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer";
import Items from "../components/Items";
import Categories from "../components/Categories";
import ShowFullItem from "../components/ShowFullItem";

import {  Route, Routes } from 'react-router-dom';
import Contacs from '../pages/Contacs';
import Ofice from '../pages/Ofice';
import About from '../pages/About.js';




export class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
          orders:[],
          currentItems:[],
          items:[
            {id:1,
              title:'Диван',
              img:'divan.jpg',
              desc:'loremfkmfekmf',
              category:'sofa',
              price:'49.90'
              },
           
            {id:2,
              title:'Стол',
              img:'table.jpg',
              desc:'loremfkmfekmf',
              category:'table',
              price:'49.90'
              },
              {id:3,
                title:'Кресло',
                img:'chair.jpg',
                desc:'loremfkmfekmf',
                category:'chairs',
                price:'49.90'
                },
                {id:4,
                  title:'Стул белый',
                  img:'chair-white.jpg',
                  desc:'loremfkmfekmf',
                  category:'chairs',
                  price:'49.90'
                  },
                  {id:5,
                    title:'Лампа',
                    img:'lamp.jpg',
                    desc:'loremfkmfekmf',
                    category:'Rest',
                    price:'49.90'
                    },
                    {id:6,
                      title:'Горшок',
                      img:'Pot.jpg',
                      desc:'loremfkmfekmf',
                      category:'Rest',
                      price:'49.90'
                      },
              
          ],
          showFullItem:false,
          fullItem:{}
        }
        this.state.currentItems  = this.state.items
        this.addToOrder= this.addToOrder.bind(this)
        this.deleteOrder= this.deleteOrder.bind(this)
        this.chooseCategory= this.chooseCategory.bind(this)
        this.onShowItem= this.onShowItem.bind(this)
      }
      render(){
      return (
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
          <Routes>
            
              <Route exat path='/Contacs' element={<Contacs/>}></Route>
              <Route   path='/About' element={<About/>}></Route>
              <Route   path='/Ofice' element={<Ofice/>}></Route>
          
           </Routes>
          <Categories chooseCategory={this.chooseCategory}/>
          <Items onShowItem={this.onShowItem}items={this.state.currentItems} onAdd={this.addToOrder}/>
         
           {this.state.showFullItem &&<ShowFullItem  onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        
          <Footer/>

            
        </div>
      );
      }
    
      onShowItem(item){
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
      }
      chooseCategory(category){
    
        if(category==='all'){
          this.setState({currentItems:this.state.items})
          return
        }
        this.setState({
          currentItems: this.state.items.filter(el=>el.category ===category)
        })
    
      }
      deleteOrder(id){
        this.setState({orders:this.state.orders.filter(el=>el.id !==id)})
      }
    
      addToOrder(item){
        let isInArray= false
        this.state.orders.forEach(el=>{
          if (el.id ===item.id)
            isInArray =true
        })
        if(!isInArray)
        this.setState({orders:[...this.state.orders,item]})
      }
    }
    


export default Home