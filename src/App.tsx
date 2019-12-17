import React from 'react'
import './App.css'
import { DataverseClient } from 'js-dataverse'
import { Button, Row } from 'react-bootstrap'
import { DataverseService } from './services/DataverseService'

interface AppState {
  data?: any
}

class App extends React.Component<{}, AppState> {

  public constructor(props: any) {
    super(props)

    this.state = {}
  }

  public render() {
    return (
      <div className="App">
        <div className={'dataverse-container'}>
          <Button onClick={() => this.getDatasetInformation()}>Get Dataverse information</Button>
          <div className={'dataverse-response'}>{JSON.stringify(this.state.data)}</div>
        </div>
      </div>
    )
  }

  private async getDatasetInformation() {
    const response = await DataverseService.getDataverseInformation()
    this.setState({
      data: response
    })
  }
}

export default App
