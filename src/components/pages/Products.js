import React,{Component} from 'react';
import '../../App.css';
import './Products.css'


// export default function Products() {
//   return <h1 className='products'>PRODUCTS</h1>;
// }

class Products extends Component{
constructor(props){
  super(props)
  this.state={
    imgageUrl: "",
    imageUrlArray: [
      "https://elektrik-a.su/wp-content/uploads/2017/03/konechnyy-rezultat-raboty-koronki.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvI69U6878-tw455tBbbukH0Si-NlypJMQqA&usqp=CAU",
      "https://slavasozidatelyam.ru/wp-content/uploads/2019/11/otverstie-v-stene-dlya-vytyazhki_4.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQak0wtI2W_kM5Hxn2fAVWofB34SHLah6fJGw&usqp=CAU",
      "https://the-vent.ru/wp-content/uploads/2018/06/almaznoe-burenie-1.jpg",
      "https://i7.photo.2gis.com/images/branch/57/8022036873320157_07e2.jpg",
      "http://www.1000dosok.ru/s/09-09-5559755_3.jpg",
      "http://almaztmb.com/site_ch/180484699.jpg",
      "https://i.ytimg.com/vi/lCnSgBhG9a8/maxresdefault.jpg"

    ],
    showModel: false,
    popImageUrl:""
  }
}
render(){
  let imageUrlArray = this.state.imageUrlArray
  const images = imageUrlArray.map((url,index) =>{
    return(
      <img className ="singleImage"
      src={url}
      key={index}
      />
    )
  })
  return(
    <div className=" container Images">
      {images}
    </div>
  )
}
}

export default Products