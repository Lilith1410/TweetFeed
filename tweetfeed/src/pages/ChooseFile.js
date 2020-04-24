import React, { Component} from 'react';

class ChooseFile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      words: '',
    }
  }

  showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = (e.target.result);
      console.log(text);
      this.state.words.setState(text);
      alert(text);
    }
    reader.readAsText(e.target.files[0])
  }

  render() {
    return (
      <div className='chooseFile'>
        <input type="file" onChange={(e) => this.showFile(e)} />
        <input type="file" onChange={(e) => this.showFile(e)} />
        <p>{this.state.words}</p>
      </div>
    )
  }

}

export default ChooseFile;
