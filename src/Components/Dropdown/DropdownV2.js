import React from 'react';
import { Button, Form, FormGroup,DropdownMenu, Label, Input, FormText,DropdownItem } from 'reactstrap';
import './Dropdown.css';

export default class DropdownV2 extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    // this.state = {
    //   dropdownOpen: true
    };
  // }

  // toggle() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen
  //   });
  // }


  render() {
    return (
        <form>
              <FormGroup>
         
          <Input className="test"
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search Movies"
          />
        </FormGroup>
        
       

        </form>
    )
  }
}


// export default DropdownV2 