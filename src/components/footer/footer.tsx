import React, { Component } from 'react'
import '../footer/footer.css'
import { connect } from 'react-redux';
import { fetchFooter } from '../../redux';

type FooterProps = {
  footerLinksData:any 
  fetchFooter(): (dispatch: any) => void  
}

type FooterItemProp = {
  id : number
  topic : string 
  link1 : string  
  link2 : string
  link3 : string
  link4 : string
}

type StateProp = {
  footerItem: string
 }




 class footer extends Component<FooterProps> {
  state={
      fullname:"",
      email:"",
      details:'',
 
    // footerLinksData :[] 
      
  }  ;

  handleChange =(event:any) =>{
    this.setState({
       [event.target.name]: event.target.value
        
    })

  };
   
  storeDetails = (event:any) => {
      event.preventDefault();
          
         const formData={name:this.state.fullname,email:this.state.email}
             
       

          this.setState({
              details:formData,
              fullname:"",
              email:""
          })
          
  }




componentDidMount() {
  this.props.fetchFooter()

}

 

  render(){
    const {fullname,email} =this.state ; //destructuring
    console.log(this.state.details)

  return (
    <div className='footer-container'>
     

{this.props.footerLinksData &&
 this.props.footerLinksData.footerData &&

 this.props.footerLinksData.footerData.map((footerItem:FooterItemProp) => (
        <ul key={footerItem.id}>
        <li><h3>{footerItem.topic}</h3></li>
        <li>
            <a href={"header"}>
            {footerItem.link1}
            </a>
        </li>
        <li><a href={"header"}>
           {footerItem.link2}
            </a></li>
        <li><a href={"header"}>
            {footerItem.link3}
            </a></li>
        <li><a href={"header"}>
            {footerItem.link4}
            </a></li>
    </ul>
        )
        )} 
        <form  action="" autoComplete='off' onSubmit={this.storeDetails} >
            <h3>Full body checkup</h3>
            <input onChange={this.handleChange} value={fullname} className='footer-form' type="text" name="fullname" placeholder='enter your name'/>
            <br />
            <input onChange={this.handleChange} value={email} className='footer-form' type="email" name='email' placeholder='enter oyur mail' />
            <br />
            <button type='submit' className='footer-form' >submit</button>
             
        </form>
    </div>
  )
  }
  }

  // export default footer
  const mapStateToProps = (state:StateProp) => {
    return {
     footerLinksData : state.footerItem
     }
     
   }
   
   const mapDispatchToProps = (dispatch:any) => {
     return {
       fetchFooter : () => dispatch(fetchFooter())
      }
    }
   export default connect(mapStateToProps,mapDispatchToProps) (footer)