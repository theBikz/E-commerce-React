import React from 'react';



class Products extends React.Component{

    constructor(props) {
        super(props);
        //loadXMLDoc()= this.loadXMLDoc.bind(this)
        this.state = {
            apiData: []
        }
    }



    // loadXMLDoc() {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //     //var apiData = this.responseText;
    //     //console.log(apiData)
    //     this.setState({apiData:this.responseText})
    //     //console.log(apiData)
    //     } };
    //     xhttp.open("GET", 'https://fakestoreapi.com/products/', true);
    //     xhttp.send();
    //   }
      

    //   buildData = (data) => {
    //     console.log(data)
    //     this.setState({apiData:data})
    //   }

      getData() {
          let url = 'https://fakestoreapi.com/products/';
          fetch(url)
          .then(res=>res.json())
          .then((data) => {
              this.setState({apiData: data.title})
          })
      }


    render() {
        return(
            <div >
                <button className="form input todo" onClick={this.getData} >Fetch</button>
            </div>
            
        )
    //     return(
    //         <div>
    //   {apiData.map((d, idx) => {
    //      return (<li key={idx}>{d.title}</li>)
    //    })}
    //   </div>
    //     )
    }

} 

export default Products;